import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const CTA: React.FC = () => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-6 py-20 text-center">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Začněte spravovat vaše dokumenty lépe už dnes!
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Zajistěte si kontrolu nad podnikovými procesy, zvyšte bezpečnost a získejte konkurenční výhodu na trhu. Kontaktujte nás pro nezávaznou konzultaci.
                    </p>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default CTA;
