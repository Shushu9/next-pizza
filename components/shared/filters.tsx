import React from 'react';
import { Title, FilterCheckbox } from '@/components/shared';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
            <FilterCheckbox text="Можно собирать" value="1" />
            <FilterCheckbox text="Новинки" value="2" />
        </div>
    )

};