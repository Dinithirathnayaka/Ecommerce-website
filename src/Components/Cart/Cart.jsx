import { Fragment, React } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

function Cart({ openModel, setOpen }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.length > 0 ? (
        <Fragment className="">
          <Dialog
            className="border-0 outline-0"
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start overflow-y-auto max-h-[300px] pt-28 "
              style={{ scrollbarWidth: "hidden" }}
            >
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 mt-8">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.name}
                        ></img>
                        <div className="flex flex-col items-start">
                          <h4 className="pt-2 text-base font-bold leading-none tracking-normal text-black font-inter">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="pt-2 text-xs leading-none tracking-normal text-black font-inter">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                          Selected size:{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                          Selected color:{" "}
                          <span
                            className="px-2 ml-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                        <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                          Amount: <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                          Single Item Price:{" "}
                          <span className="ml-2">{item.price}$</span>
                        </p>
                        <p className="pt-2 text-sm leading-none tracking-normal text-black font-inter">
                          Total Item Prices:{" "}
                          <span className="ml-2">{item.totalPrice}$</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(removeFromCart(item))}
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex items-center justify-start">
              <p className="pt-2 text-base leading-none tracking-normal text-black font-inter">
                Total Price of All Products:{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className="py-4 text-3xl font-bold leading-none tracking-normal text-black font-inter">
                  Your bag is empty
                </h1>
                <p className="text-base leading-none tracking-normal text-black font-inter ">
                  Add some products
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
}

export default Cart;
