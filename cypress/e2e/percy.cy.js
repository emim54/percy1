import '@percy/cypress';

describe('Website öffnen', () => {
  it('Besucht Ikra Bau Startseite', () => {
    cy.visit('https://ikrabau.de/');
    cy.percySnapshot('Startseite', { widths: [720, 1080, 1200] });
  });

  it('Besucht Ikra Bau Über Uns', () => {
    cy.visit('https://ikrabau.de/about/');
    cy.percySnapshot('Über Uns Seite', { widths: [720, 1080, 1200] });
  });

  it('Besucht Ikra Bau Leistungen', () => {
    cy.visit('https://ikrabau.de/services/');
    cy.percySnapshot('Leistungen Seite', { widths: [720, 1080, 1200] });
  });
});
