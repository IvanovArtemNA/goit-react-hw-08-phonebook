import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setValue } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event => {
    const value = event.currentTarget.value.toLowerCase();
    dispatch(setValue(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input type="text" onChange={onChange} />
    </label>
  );
};
