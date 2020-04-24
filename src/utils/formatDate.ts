import dateFormat from 'dateformat';

const formatDate = (value: Date): string => dateFormat(value, 'dd/mm/yyyy');

export default formatDate;
