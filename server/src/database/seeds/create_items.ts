import Knex from "knex";

export async function seed(knex: Knex) {

    await knex('items').insert([

        { titulo: 'Lâmpadas', image: 'lampada.svg' },
        { titulo: 'Pilhas e baterias', image: 'baterias.svg' },
        { titulo: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
        { titulo: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { titulo: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { titulo: 'Oléo de cozinha', image: 'oleo.svg' }

    ]);
};