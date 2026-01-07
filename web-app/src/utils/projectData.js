// Utility to get all projects
const bimImages = import.meta.glob('../assets/bim/*.{png,jpg,jpeg}', { eager: true });
const projImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg}', { eager: true });

export const getProjects = () => {
    const bims = Object.entries(bimImages).map(([path, mod]) => {
        const fileName = path.split('/').pop().split('.')[0];
        return {
            id: `bim-${fileName}`,
            src: mod.default,
            type: 'BIM Model',
            category: 'bim',
            title: 'Structural Visualization',
            description: 'This project showcases our advanced Building Information Modeling (BIM) capabilities. We utilize state-of-the-art software to create accurate 3D representations of physical and functional characteristics, ensuring precise fabrication and assembly.',
            location: 'Dhaka, Bangladesh'
        };
    });

    const projs = Object.entries(projImages).map(([path, mod]) => {
        const fileName = path.split('/').pop().split('.')[0];
        return {
            id: `proj-${fileName}`,
            src: mod.default,
            type: 'Site Photo',
            category: 'project',
            title: 'Completed Project',
            description: 'A completed steel structure project delivering excellence in industrial construction. Our team managed the entire lifecycle from foundation to finishing, meeting strict safety and quality standards.',
            location: 'Chittagong, Bangladesh'
        };
    });

    // Interleave/mix arrays for display
    const mixed = [];
    const maxLength = Math.max(bims.length, projs.length);
    for (let i = 0; i < maxLength; i++) {
        if (bims[i]) mixed.push(bims[i]);
        if (projs[i]) mixed.push(projs[i]);
    }
    return mixed;
};

export const getProjectById = (id) => {
    const projects = getProjects();
    return projects.find(p => p.id === id);
};
