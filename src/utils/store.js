  const cards = [
    {
      id: 'card-1',
      title: 'Learning how to cook',
    },
    {
      id: 'card-2',
      title: 'Making sandwich',
    },
    {
      id: 'card-3',
      title: 'Taking the trash out',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'ToDo',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'Doin',
        cards:[],
      },
    },
    listIds: ['list-1', 'list-2'],
  };
  
  export default data;