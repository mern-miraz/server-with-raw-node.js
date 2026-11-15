import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productServices } from "../service/product.service";
import type { IProducts } from "../types/product.types";
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
  // handle this method like: GET, POST, PUT

  const url = req.url;
  const method = req.method;

  const urlParams = url?.split("/");
  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;

  // Get all products
  if (url === "/products" && method === "GET") {
    const products = productServices();
    sendResponse(res, true, 200, "Product Retrieved successfully!!", products);
  } else if (method === "GET" && id !== null) {
    const products = productServices();
    const product = products.find((p: IProducts) => p.id === id);

    if (!product) {
      sendResponse(res, false, 404, "Products Not Found");
      return;
    }
    sendResponse(res, true, 200, "Products retrieved successfully!", product);
  } else if (method === "POST" && url === "/products") {
    const body = await bodyParser(req);

    const newProduct = {
      id: Date.now(),
      ...body,
    };

    const products = productServices();
    products.push(newProduct);
    createProduct(products);

    sendResponse(res, true, 201, "Product Created successfully!", products);
  } else if (method === "PUT" && id !== null) {
    const body = await bodyParser(req);
    const products = productServices();

    const index = products.findIndex((p: IProducts) => p.id === id);

    if (index < 0) {
      sendResponse(res, false, 404, "Product Not Found!");
      return;
    }

    products[index] = { ...body, id: products[index].id };
    createProduct(products);

    sendResponse(res, true, 200, "Product Updated successfully!", products);
  } else if (method === "DELETE" && id !== null) {
    const products = productServices();
    const index = products.findIndex((p: IProducts) => p.id === id);

    if (index < 0) {
      sendResponse(res, false, 404, "Product Not Found");
      return;
    }

    products.splice(index, 1);
    createProduct(products);

    sendResponse(res, true, 200, "Product Deleted successfully!");
  }
};

export default productController;
