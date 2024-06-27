const assert = require('assert');

// La fonction somme() retourne la somme des nombres passés en paramètre.
// Tout paramètre manquant aura 0 comme valeur par défaut.
// Si un des paramètre n'est pas de type `number`, la fonction lèvera une
// exception avec le message d'erreur "paramètre invalide".
function somme(nombre1 = 0, nombre2 = 0) {
    if (typeof nombre1 !== 'number' || typeof nombre2 !== 'number') {
        throw new Error('paramètre invalide');
    }
    return nombre1 + nombre2;
}

describe('Tests de la fonction somme()', function () {
    it('Avec les valeurs de paramètres 1 et 2, la fonction somme() est sensée retourner la valeur 3', function () {
        assert.strictEqual(somme(1, 2), 3);
    });

    it('Avec les valeurs de paramètres -1 et 1, la fonction somme() est sensée retourner la valeur 0', function () {
        assert.strictEqual(somme(-1, 1), 0);
    });

    it('Avec les valeurs de paramètres 5 et \'a\', la fonction somme() est sensée lever une exception avec le message d\'erreur "paramètre invalide"', function () {
        assert.throws(() => somme(5, 'a'), /paramètre invalide/);
    });
});
