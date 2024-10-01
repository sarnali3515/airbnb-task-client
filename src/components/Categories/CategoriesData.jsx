import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
    GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiWindmill,
    GiTreehouse,
    GiVineLeaf,
    GiSurfBoard,
    GiFarmTractor,
    GiCampingTent,
    GiHouse,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!',
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!',
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a beautiful pool!',
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!',
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is near a lake!',
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!',
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is an ancient castle!',
    },
    {
        label: 'Caves',
        icon: GiCaveEntrance,
        description: 'This property is in a spooky cave!',
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property offers camping activities!',
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in an arctic environment!',
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the desert!',
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in a barn!',
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is brand new and luxurious!',
    },
    // New Categories
    {
        label: 'Trending',
        icon: GiHouse,
        description: 'This property is trending right now!',
    },
    {
        label: 'Treehouses',
        icon: GiTreehouse,
        description: 'This property is a treehouse!',
    },
    {
        label: 'Farms',
        icon: GiFarmTractor,
        description: 'This property is located on a farm!',
    },
    {
        label: 'Campers',
        icon: GiCampingTent,
        description: 'This property offers camper accommodations!',
    },
    {
        label: 'Surfing',
        icon: GiSurfBoard,
        description: 'This property is great for surfing!',
    },
    {
        label: 'Vineyards',
        icon: GiVineLeaf,
        description: 'This property is located in a vineyard!',
    },
];
