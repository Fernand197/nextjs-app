import Link from "next/link";

export default function ProductList({ productId = 100}) {
    return (
        <div>
            <Link href={"/"}>
                <a>Back to home</a>
            </Link>
            <Link href={"/product/1"}>
                <a>Product 1</a>
            </Link>
            <Link href={"/product/2"}>
                <a>Product 2</a>
            </Link>
            <Link href={"/product/3"} replace>
                <a>Product 3</a>
            </Link>
            <Link href={`/product/${productId}`}>
                <a>Product {productId}</a>
            </Link>
        </div>
    )
}