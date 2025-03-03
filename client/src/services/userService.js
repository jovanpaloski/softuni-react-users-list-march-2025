const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        return Object.values(result);
    },

    async create(userData) {
        const { country, city, street, streetNumber } = userData;

        const newUser = {
            ...userData,
            address: { country, city, street, streetNumber },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        const result = await response.json();
        return result;
    }
};