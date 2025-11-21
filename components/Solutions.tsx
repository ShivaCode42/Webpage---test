import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const tabs = ['Moduly', 'Platforma', 'Správa dokumentů', 'Analytika', 'Migrace'];

const solutionsData: { [key: string]: { title: string; description: string; code: string } } = {
    'Platforma': {
        title: 'Core',
        description: 'Naše jádro systému je navrženo pro maximální škálovatelnost a bezpečnost. S využitím moderních technologií zajišťujeme spolehlivý provoz a snadnou integraci s vašimi stávajícími systémy. Architektura je postavena na mikroservisním přístupu, což umožňuje flexibilní rozvoj a údržbu. Každý dokument je šifrován a uložen s nejvyššími standardy zabezpečení.',
        code: `
// Example of API integration
const docuFlow = new DocuFlow({
  apiKey: 'YOUR_API_KEY',
});

async function uploadDocument(file) {
  try {
    const document = await docuFlow.upload(file);
    console.log('Document uploaded:', document.id);
    return document;
  } catch (error) {
    console.error('Upload failed:', error);
  }
}`
    },
    'Moduly': {
        title: 'Modulární přístup',
        description: 'Sestavte si řešení na míru. Vyberte si z naší široké nabídky modulů, jako je správa smluv, fakturace, personální agenda a další. Každý modul je plně integrovatelný a přizpůsobitelný vašim potřebám.',
        code: `
// Enabling a module
docuFlow.modules.enable('invoicing');
docuFlow.modules.enable('hr-documents');

const enabledModules = await docuFlow.modules.list();
console.log(enabledModules);
// > ['core', 'invoicing', 'hr-documents']
`
    },
    'Správa dokumentů': {
        title: 'Inteligentní správa',
        description: 'Automatizujte životní cyklus dokumentů od vytvoření, přes schvalování, podepisování až po archivaci. Využijte verzování, fulltextové vyhledávání a pokročilé workflow pro maximální efektivitu.',
        code: `
// Creating a new workflow
const workflow = new Workflow('InvoiceApproval');

workflow.addStep('FinanceReview');
workflow.addStep('ManagerApproval');
workflow.addStep('Archive');

await docuFlow.workflows.create(workflow);
`
    },
    'Analytika': {
        title: 'Přehledné reporty',
        description: 'Získejte cenné vhledy do vašich procesů díky pokročilé analytice. Sledujte klíčové metriky, identifikujte úzká místa a optimalizujte své workflow v reálném čase. Vytvářejte si vlastní reporty a dashboardy.',
        code: `
// Get analytics data
const report = await docuFlow.analytics.getReport({
    name: 'DocumentTurnaroundTime',
    from: '2023-01-01',
    to: '2023-12-31',
});

console.log(report.average); // "2.5 days"
`
    },
    'Migrace': {
        title: 'Bezproblémový přechod',
        description: 'Převedeme vaše stávající dokumenty do DocuFlow rychle a bezpečně. Náš tým specialistů vám pomůže s analýzou, plánováním a samotnou migrací dat z různých systémů, ať už z cloudu nebo on-premise řešení.',
        code: `
// Start migration process
const migrationJob = await docuFlow.migration.start({
    source: 'sharepoint',
    credentials: { ... },
    options: {
        preserveMetadata: true
    }
});

console.log('Migration started:', migrationJob.id);
`
    }
};

const Solutions: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Platforma');
    const activeSolution = solutionsData[activeTab];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <ScrollAnimation>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Řešení které se vám přizpůsobí</h2>
                        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                            Plug & play řešení v sobě přináší jednotlivé moduly, od jednoduché integrace až po komplexní správu dokumentů. Zvolte si jen to, co skutečně potřebujete.
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation delay={200}>
                    <div className="flex justify-center space-x-2 md:space-x-4 mb-8 flex-wrap">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-md transition-colors duration-300 ${activeTab === tab ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-blue-100'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>

                <ScrollAnimation delay={300}>
                    <div className="bg-blue-100 p-8 rounded-lg shadow-lg min-h-[300px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="text-gray-700">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4">{activeSolution.title}</h3>
                                <p className="leading-relaxed">
                                    {activeSolution.description}
                                </p>
                            </div>
                            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-inner font-mono text-sm overflow-x-auto">
                                <pre><code className="language-js">{activeSolution.code.trim()}</code></pre>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default Solutions;
