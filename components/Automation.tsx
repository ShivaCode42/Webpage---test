import React from 'react';

const DocumentIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const Avatar: React.FC<{ src: string; className?: string }> = ({ src, className }) => (
    <img src={src} alt="User avatar" className={`w-10 h-10 rounded-full border-2 border-white shadow-md ${className}`} />
);

const Automation: React.FC = () => {
    return (
        <section className="bg-blue-600 text-white py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative flex flex-col items-center justify-center h-96">
                        {/* Dotted lines */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-px border-t-2 border-dashed border-blue-300 transform -rotate-45"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-px border-t-2 border-dashed border-blue-300 transform rotate-45"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 border-l-2 border-dashed border-blue-300 transform translate-y-12"></div>

                        {/* Avatars */}
                        <Avatar src="https://i.pravatar.cc/40?img=1" className="absolute top-1/2 left-1/2 -translate-x-[150px] -translate-y-[150px]" />
                        <Avatar src="https://i.pravatar.cc/40?img=2" className="absolute top-1/2 left-1/2 translate-x-[110px] -translate-y-[150px]" />
                        <Avatar src="https://i.pravatar.cc/40?img=3" className="absolute bottom-0 left-1/2 -translate-x-[130px]" />

                        {/* Workflow boxes */}
                        <div className="absolute bg-white text-gray-800 p-4 rounded-lg shadow-xl top-0 left-1/2 -translate-x-1/2">
                            <div className="flex items-center space-x-2">
                                <DocumentIcon className="w-6 h-6 text-blue-500" />
                                <span className="font-semibold">Zaevidování dokumentu</span>
                            </div>
                        </div>
                        <div className="absolute bg-white text-gray-800 p-4 rounded-lg shadow-xl left-0 top-1/2 -translate-y-1/2">
                             <div className="flex items-center space-x-2">
                                <DocumentIcon className="w-6 h-6 text-blue-500" />
                                <span className="font-semibold">Schválení</span>
                            </div>
                        </div>
                        <div className="absolute bg-white text-gray-800 p-4 rounded-lg shadow-xl bottom-8 left-1/2 -translate-x-1/2">
                             <div className="flex items-center space-x-2">
                                <DocumentIcon className="w-6 h-6 text-blue-500" />
                                <span className="font-semibold">Podepsání</span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Automatizace workflow pro každý dokument na pár kliknutí</h2>
                        <p className="text-blue-200 text-lg">
                            Definujte si ideální scénáře a na základě nastavených podmínek jednoduše automatizujte procesy bez napsání jediného řádku kódu. Eliminujte úzká místa, zamezíte časovým prodlevám při kontrolách a získáte kontrolu nad celým procesem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Automation;