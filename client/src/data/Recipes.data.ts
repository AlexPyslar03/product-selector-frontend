interface Recipe {
    name: string;
    is_vegan: boolean;
    difficulty_level: number;
    rating: number;
    icon: string;
}

export const data: Recipe[] = [
    {
        name: 'Салат',
        is_vegan: true,
        rating: 1,
        difficulty_level: 4,
        icon: 'salad.svg'
    },
    {
        name: 'Бутерброд колбасный',
        is_vegan: false,
        difficulty_level: 18,
        rating: 0,
        icon: 'sausage_sandwich.svg',
    },
    {
        name: 'Сухарики',
        is_vegan: true,
        difficulty_level: 1,
        rating: 1,
        icon: 'croutons.svg',
    },
    {
        name: 'Жареная колбоса',
        is_vegan: false,
        difficulty_level: 6,
        rating: 2,
        icon: 'fried_sausage.svg',
    }
]