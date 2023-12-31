import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';
import categories from './categories.json';

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory;