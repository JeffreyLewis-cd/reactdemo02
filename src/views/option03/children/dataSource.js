let DataSource = {
    getComments: () => {
        return [
            'comment1', 'comment2', 'comment31'
        ]
    },
    getBlogPost: () => {
        return 'BlogPost Contents';
    },
    addChangeListener: () => { console.log('addChangeListener') },
    removeChangeListener: () => { console.log('removeChangeListener') },
}
export default DataSource;