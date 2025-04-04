import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({action}) {
    const dispatch = useDispatch(); 

    function handleDeleteItem() {

        dispatch(deleteItem(action))

    }
    return <Button type="small" onClick={handleDeleteItem}> delete</Button>
}