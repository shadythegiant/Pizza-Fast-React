import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <div className="text-right">
      {" "}
      <fetcher.Form method="PATCH">
        <Button type="primary"> Make Prioirty</Button>
      </fetcher.Form>
    </div>
  );
}

// action

export async function actionFetcher({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
