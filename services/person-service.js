
module.exports = {

    createDataTree: function (dataSet) {
        const hashTable = Object.create(null);
        dataSet.forEach((aData) => {
            hashTable[aData.id] = {
                ...aData, children: [],
            };
        });
        const DataTree = [];
        dataSet.forEach((aData) => {
            if (aData.parentId) {
                hashTable[aData.parentId].children.push(hashTable[aData.id]);
            } else {
                DataTree.push(hashTable[aData.id]);
            }
        });
        return DataTree;
    },

    sortByBirthDate: function (array) {
        return array.map(person => (
            {
                ...person,
                name: person.id.toString(),
                birthYear: +person.birthDate.split('').slice(-4).join(''),
            })).sort((a, b) => a.birthYear - b.birthYear)
    }

    // let { persons } = this.state;

    // const modifiedPersons = await Promise.all(persons.map((person) => {
    //     const num = person.id;
    //     if (typeof num !== 'number') {
    //         return null;
    //     }
    //     return import(`../../assets/${person.id}.jpg`);
    // }))
    //     .then((personsImages) => {
    //         persons = persons.map((person, index) => ({
    //             ...person,
    //             imageUrl: personsImages[index],
    //         }));
    //         return persons;
    //     });

    // this.setState({
    //     persons: modifiedPersons,
    // });

}

