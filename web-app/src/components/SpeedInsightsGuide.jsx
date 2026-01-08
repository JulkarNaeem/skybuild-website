import React, { useState } from 'react';
import '../styles/SpeedInsightsGuide.css';

export default function SpeedInsightsGuide() {
  const [selectedFramework, setSelectedFramework] = useState('create-react-app');
  const [selectedTab, setSelectedTab] = useState('pnpm');

  const frameworks = [
    { value: 'nextjs', label: 'Next.js (Pages Router)' },
    { value: 'nextjs-app', label: 'Next.js (App Router)' },
    { value: 'create-react-app', label: 'Create React App' },
    { value: 'remix', label: 'Remix' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'vue', label: 'Vue' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'astro', label: 'Astro' },
    { value: 'other', label: 'Other' },
    { value: 'html', label: 'HTML' },
  ];

  const packageManagers = [
    { value: 'pnpm', label: 'pnpm' },
    { value: 'yarn', label: 'yarn' },
    { value: 'npm', label: 'npm' },
    { value: 'bun', label: 'bun' },
  ];

  const getInstallCommand = (manager) => {
    const commands = {
      pnpm: 'pnpm i vercel',
      yarn: 'yarn i vercel',
      npm: 'npm i vercel',
      bun: 'bun i vercel',
    };
    return commands[manager] || commands.npm;
  };

  const getSpeedInsightsCommand = (manager) => {
    const commands = {
      pnpm: 'pnpm i @vercel/speed-insights',
      yarn: 'yarn i @vercel/speed-insights',
      npm: 'npm i @vercel/speed-insights',
      bun: 'bun i @vercel/speed-insights',
    };
    return commands[manager] || commands.npm;
  };

  const renderFrameworkSpecificContent = () => {
    switch (selectedFramework) {
      case 'nextjs':
        return (
          <div className="framework-content">
            <h4>Next.js (Pages Router)</h4>
            <p>The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with Next.js.</p>
            <p>The instructions differ based on which version of Next.js you're deploying.</p>
            <p>Add the following component to your main app file:</p>
            
            <div className="code-block">
              <p className="code-filename">pages/_app.tsx</p>
              <pre><code>{`import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`}</code></pre>
            </div>

            <p>For versions of Next.js older than 13.5, import the SpeedInsights component from @vercel/speed-insights/react:</p>
            <div className="code-block">
              <p className="code-filename">pages/example-component.tsx</p>
              <pre><code>{`import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();

  return <SpeedInsights route={router.pathname} />;
}`}</code></pre>
            </div>
          </div>
        );

      case 'nextjs-app':
        return (
          <div className="framework-content">
            <h4>Next.js (App Router)</h4>
            <p>The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with Next.js.</p>
            <p>Add the following component to the root layout:</p>
            
            <div className="code-block">
              <p className="code-filename">app/layout.tsx</p>
              <pre><code>{`import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</code></pre>
            </div>

            <p>For versions of Next.js older than 13.5, create a dedicated component to avoid opting out from SSR:</p>
            <div className="code-block">
              <p className="code-filename">app/insights.tsx</p>
              <pre><code>{`"use client";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { usePathname } from "next/navigation";

export function Insights() {
  const pathname = usePathname();

  return <SpeedInsights route={pathname} />;
}`}</code></pre>
            </div>
          </div>
        );

      case 'create-react-app':
        return (
          <div className="framework-content">
            <h4>Create React App</h4>
            <p>The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with React.</p>
            <p>Add the following component to the main app file:</p>
            
            <div className="code-block">
              <p className="code-filename">App.jsx</p>
              <pre><code>{`import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* ... */}
      <SpeedInsights />
    </div>
  );
}`}</code></pre>
            </div>
          </div>
        );

      case 'remix':
        return (
          <div className="framework-content">
            <h4>Remix</h4>
            <p>The SpeedInsights component is a wrapper around the tracking script, offering a seamless integration with Remix.</p>
            <p>Add the following component to your root file:</p>
            
            <div className="code-block">
              <p className="code-filename">app/root.tsx</p>
              <pre><code>{`import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</code></pre>
            </div>
          </div>
        );

      case 'sveltekit':
        return (
          <div className="framework-content">
            <h4>SvelteKit</h4>
            <p>Add the following to your root layout file:</p>
            
            <div className="code-block">
              <p className="code-filename">src/routes/+layout.ts</p>
              <pre><code>{`import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`}</code></pre>
            </div>
          </div>
        );

      case 'vue':
        return (
          <div className="framework-content">
            <h4>Vue</h4>
            <p>The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with Vue.</p>
            <p>Add the following component to the main app template:</p>
            
            <div className="code-block">
              <p className="code-filename">src/App.vue</p>
              <pre><code>{`<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}</code></pre>
            </div>
          </div>
        );

      case 'nuxt':
        return (
          <div className="framework-content">
            <h4>Nuxt</h4>
            <p>The SpeedInsights component is a wrapper around the tracking script, offering more seamless integration with Nuxt.</p>
            <p>Add the following component to the default layout:</p>
            
            <div className="code-block">
              <p className="code-filename">layouts/default.vue</p>
              <pre><code>{`<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}</code></pre>
            </div>
          </div>
        );

      case 'astro':
        return (
          <div className="framework-content">
            <h4>Astro</h4>
            <p>Speed Insights is available for both static and SSR Astro apps.</p>
            <p>Declare the SpeedInsights component near the bottom of one of your layout components:</p>
            
            <div className="code-block">
              <p className="code-filename">BaseHead.astro</p>
              <pre><code>{`---
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />`}</code></pre>
            </div>

            <p>Optionally, you can remove sensitive information from the URL by adding a beforeSend function:</p>
            <div className="code-block">
              <p className="code-filename">BaseHead.astro</p>
              <pre><code>{`---
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<script is:inline>
  function speedInsightsBeforeSend(data){
    console.log("Speed Insights before send", data)
    return data;
  }
</script>
<SpeedInsights />`}</code></pre>
            </div>
          </div>
        );

      case 'other':
        return (
          <div className="framework-content">
            <h4>Other Frameworks</h4>
            <p>Import the injectSpeedInsights function from the package, which will add the tracking script to your app. This should only be called once in your app, and must run in the client.</p>
            
            <div className="code-block">
              <p className="code-filename">main.js</p>
              <pre><code>{`import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();`}</code></pre>
            </div>
          </div>
        );

      case 'html':
        return (
          <div className="framework-content">
            <h4>HTML</h4>
            <p><strong>Note:</strong> When using the HTML implementation, there is no need to install the @vercel/speed-insights package.</p>
            <p>Add the following scripts before the closing tag of the &lt;body&gt;:</p>
            
            <div className="code-block">
              <p className="code-filename">index.html</p>
              <pre><code>{`<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>`}</code></pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="speed-insights-guide">
      <section className="guide-header">
        <h1>Getting started with Speed Insights</h1>
        <p>This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.</p>
      </section>

      <section className="guide-section">
        <h2>Prerequisites</h2>
        <ul>
          <li>A Vercel account. If you don't have one, you can <a href="https://vercel.com/signup">sign up for free</a>.</li>
          <li>A Vercel project. If you don't have one, you can <a href="https://vercel.com/new">create a new project</a>.</li>
          <li>The Vercel CLI installed. If you don't have it, you can install it using the following command:</li>
        </ul>

        <div className="package-manager-tabs">
          <div className="tab-buttons">
            {packageManagers.map((manager) => (
              <button
                key={manager.value}
                className={`tab-btn ${selectedTab === manager.value ? 'active' : ''}`}
                onClick={() => setSelectedTab(manager.value)}
              >
                {manager.label}
              </button>
            ))}
          </div>
          <div className="code-block">
            <pre><code>{`\`bash\n${getInstallCommand(selectedTab)}\n\``}</code></pre>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Enable Speed Insights in Vercel</h2>
        <p>On the <a href="/dashboard">Vercel dashboard</a>, select your Project followed by the <strong>Speed Insights</strong> tab. Then, select <strong>Enable</strong> from the dialog.</p>
        <div className="note">
          <strong>💡 Note:</strong> Enabling Speed Insights will add new routes (scoped at <code>/_vercel/speed-insights/*</code>) after your next deployment.
        </div>
      </section>

      <section className="guide-section">
        <h2>Add @vercel/speed-insights to your project</h2>
        <p>Using the package manager of your choice, add the @vercel/speed-insights package to your project:</p>

        <div className="package-manager-tabs">
          <div className="tab-buttons">
            {packageManagers.map((manager) => (
              <button
                key={manager.value}
                className={`tab-btn ${selectedTab === manager.value ? 'active' : ''}`}
                onClick={() => setSelectedTab(manager.value)}
              >
                {manager.label}
              </button>
            ))}
          </div>
          <div className="code-block">
            <pre><code>{`\`bash\n${getSpeedInsightsCommand(selectedTab)}\n\``}</code></pre>
          </div>
        </div>

        <p className="note-html"><strong>Note:</strong> When using the HTML implementation, there is no need to install the @vercel/speed-insights package.</p>
      </section>

      <section className="guide-section">
        <h2>Add the SpeedInsights component to your app</h2>
        
        <div className="framework-selector">
          <label htmlFor="framework-select">Choose your framework:</label>
          <select
            id="framework-select"
            value={selectedFramework}
            onChange={(e) => setSelectedFramework(e.target.value)}
          >
            {frameworks.map((framework) => (
              <option key={framework.value} value={framework.value}>
                {framework.label}
              </option>
            ))}
          </select>
        </div>

        {renderFrameworkSpecificContent()}
      </section>

      <section className="guide-section">
        <h2>Deploy your app to Vercel</h2>
        <p>You can deploy your app to Vercel's global <a href="/docs/cdn">CDN</a> by running the following command from your terminal:</p>
        
        <div className="code-block">
          <p className="code-filename">terminal</p>
          <pre><code>vercel deploy</code></pre>
        </div>

        <p>Alternatively, you can <a href="/docs/git#deploying-a-git-repository">connect your project's git repository</a>, which will enable Vercel to deploy your latest pushes and merges to main.</p>

        <p>Once your app is deployed, it's ready to begin tracking performance metrics.</p>

        <div className="note">
          <strong>💡 Note:</strong> If everything is set up correctly, you should be able to find the <code>/_vercel/speed-insights/script.js</code> script inside the body tag of your page.
        </div>
      </section>

      <section className="guide-section">
        <h2>View your data in the dashboard</h2>
        <p>Once your app is deployed, and users have visited your site, you can view the data in the dashboard.</p>
        
        <p>To do so, go to your <a href="/dashboard">dashboard</a>, select your project, and click the <strong>Speed Insights</strong> tab.</p>

        <p>After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see <a href="/docs/speed-insights/using-speed-insights">Using Speed Insights</a>.</p>
      </section>

      <section className="guide-section">
        <h2>Next steps</h2>
        <p>Now that you have Vercel Speed Insights set up, you can explore the following topics to learn more:</p>
        <ul>
          <li><a href="/docs/speed-insights/package">Learn how to use the @vercel/speed-insights package</a></li>
          <li><a href="/docs/speed-insights/metrics">Learn about metrics</a></li>
          <li><a href="/docs/speed-insights/privacy-policy">Read about privacy and compliance</a></li>
          <li><a href="/docs/speed-insights/limits-and-pricing">Explore pricing</a></li>
          <li><a href="/docs/speed-insights/troubleshooting">Troubleshooting</a></li>
        </ul>
      </section>

      <div className="guide-footer">
        <p>Learn more about how Vercel supports <a href="/docs/speed-insights/privacy-policy">privacy and data compliance standards</a> with Vercel Speed Insights.</p>
      </div>
    </div>
  );
}
