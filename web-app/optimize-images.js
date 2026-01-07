import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const MAX_WIDTH = 1920;
const QUALITY = 80;

// Helper to recursively get files
function getFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getFiles(filePath, files);
        } else {
            files.push(filePath);
        }
    }
    return files;
}

async function processImages() {
    console.log('Scanning for images...');
    const files = getFiles(assetsDir);
    const imageFiles = files.filter(file => /\.(png|jpe?g|webp)$/i.test(file));

    console.log(`Found ${imageFiles.length} images.`);

    for (const file of imageFiles) {
        const ext = path.extname(file).toLowerCase();
        const originalSize = fs.statSync(file).size;

        // Skip small images (e.g. icons < 50KB)
        if (originalSize < 50 * 1024) {
            console.log(`Skipping small file: ${path.basename(file)}`);
            continue;
        }

        try {
            const buffer = await sharp(file)
                .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                .jpeg({ quality: QUALITY, mozjpeg: true, force: false }) // Compress existing JPEGs
                .png({ quality: QUALITY, force: false }) // Compress existing PNGs
                .toBuffer();

            const newSize = buffer.length;
            const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);

            if (newSize < originalSize) {
                fs.writeFileSync(file, buffer);
                console.log(`✅ Optimized ${path.basename(file)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (-${savings}%)`);
            } else {
                console.log(`Skipping ${path.basename(file)} (Optimization did not reduce size)`);
            }
        } catch (err) {
            console.error(`❌ Error processing ${file}:`, err);
        }
    }
    console.log('Done!');
}

processImages();
