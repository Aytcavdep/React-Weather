import { useDispatch, useSelector } from "react-redux";

export const useCustomDispatch = (props) => {
const dispatch =  useDispatch(); 
return dispatch(props);
}
export const useCustomSelector = () => useSelector();
