import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CategoryFilter from './CategoryFilter';

describe('CategoryFilter', () => {
  it('should render a select element with the categories', () => {
    const categories = ['Ropa', 'Calzado', 'Accesorios'];
    const { getByText } = render(
      <CategoryFilter categories={categories} selectedCategory="" setSelectedCategory={() => {}} />
    );

    categories.forEach(category => {
      expect(getByText(category)).toBeInTheDocument();
    });
  });

  it('should call setSelectedCategory when a category is selected', () => {
    const categories = ['Ropa', 'Calzado', 'Accesorios'];
    const setSelectedCategory = vi.fn();
    const { getByRole } = render(
      <CategoryFilter categories={categories} selectedCategory="" setSelectedCategory={setSelectedCategory} />
    );

    fireEvent.change(getByRole('combobox'), { target: { value: 'Calzado' } });
    expect(setSelectedCategory).toHaveBeenCalledWith('Calzado');
  });
});

