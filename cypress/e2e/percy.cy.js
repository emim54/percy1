import '@percy/cypress';

describe('Website öffnen', () => {
  it('Besucht Ikra Bau Startseite', () => {
    cy.visit('https://ikrabau.de/');
    cy.percySnapshot('Ikra Bau Startseite', { widths: [720, 1080, 1200] });
  });

  it('Besucht Ikra Bau Über uns', () => {
    cy.visit('https://ikrabau.de/about/');
    cy.percySnapshot('Ikra Bau Über uns', { widths: [720, 1080, 1200] });
  });

  it('Besucht Ikra Bau Leistungen', () => {
    cy.visit('https://ikrabau.de/services/');
    cy.percySnapshot('Ikra Bau Leistungen', { widths: [715, 1080, 1200] });
  });
});
