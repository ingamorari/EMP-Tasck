export interface ITableData {
  id: number;
  isActive: boolean;
  branch: {
    name: string;
    category: string;
  };
  name: string;
  startDate: Date | 'Ongoing';
  endDate: Date | 'Ongoing';
  target: number;
  result: number;
  budget: number;
  spent: number;
  crUnit: number;
}

export const TableData: ITableData[] = [
  {
    id: 1,
    isActive: false,
    branch: {
      name: 'Electrabel',
      category: 'Electricity',
    },
    name: 'BE - Summer Deal Elec',
    startDate: new Date(1563051600000),
    endDate: new Date(1563656400000),
    target: 1000,
    result: 0,
    budget: 30000,
    spent: 0,
    crUnit: null,
  },
  {
    id: 2,
    isActive: true,
    branch: {
      name: 'Electrabel',
      category: 'Gas',
    },
    name: 'FR - Summer Deal Elec',
    startDate: new Date(1563656400000),
    endDate: new Date(1564261200000),
    target: 1000,
    result: 490,
    budget: 20000,
    spent: 7000,
    crUnit: 20,
  },
  {
    id: 3,
    isActive: false,
    branch: {
      name: 'GDF',
      category: 'Electricity',
    },
    name: 'BE - June Base Promo Gas',
    startDate: 'Ongoing',
    endDate: 'Ongoing',
    target: 1000,
    result: 0,
    budget: 30000,
    spent: 0,
    crUnit: null,
  },
  {
    id: 4,
    isActive: true,
    branch: {
      name: 'GDF',
      category: 'Gas',
    },
    name: 'FR - June Base Promo Gas	',
    startDate: new Date(1563051600000),
    endDate: new Date(1564434000000),
    target: 1000,
    result: 240,
    budget: 15000,
    spent: 12000,
    crUnit: 50,
  },
  {
    id: 5,
    isActive: false,
    branch: {
      name: 'ENGIE',
      category: 'Electricity',
    },
    name: 'BE - July Deal Elec',
    startDate: new Date(1562706000000),
    endDate: new Date(1564347600000),
    target: 1000,
    result: 0,
    budget: 10000,
    spent: 0,
    crUnit: null,
  },
  {
    id: 6,
    isActive: true,
    branch: {
      name: 'ENGIE',
      category: 'Gas',
    },
    name: 'FR - July Deal Gas',
    startDate: 'Ongoing',
    endDate: 'Ongoing',
    target: 1000,
    result: 850,
    budget: 30000,
    spent: 6500,
    crUnit: 30,
  },
  {
    id: 7,
    isActive: false,
    branch: {
      name: 'EDF',
      category: 'Electricity',
    },
    name: 'BE - Summer Deal Elec',
    startDate: new Date(1562706000000),
    endDate: new Date(1564347600000),
    target: 1000,
    result: 580,
    budget: 10000,
    spent: 1300,
    crUnit: null,
  },
];
