import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Avatar from "@/public/assets/images/avatar-sm-bardot.png";

export default function ProductCard() {
  return (
    <div className="mx-auto my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Product Card 1 */}
      <Card className="max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg">
        <CardHeader className="relative">
          <Image
            src={Avatar}
            alt="Portrait Bardot"
            sizes="100vw"
            style={{ width: "30%", height: "auto" }}
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-zenseSignal2 to-orange-200 p-2 text-white">
            Testimonials
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="mb-2 text-xl font-semibold">
            Brigitte Bardot
          </CardTitle>
          <CardDescription className="mb-4 text-gray-600">
            Schauspielerin
          </CardDescription>
          <p className="mb-2 text-gray-700">$99.99</p>
        </CardContent>
        <CardFooter className="bg-gray-100 p-4">
          <button className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            Add to Cart
          </button>
        </CardFooter>
      </Card>

      {/* Product Card 2 */}
      <Card className="max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg">
        <CardHeader className="relative">
          <img
            src="/watch.png"
            alt="Product Image"
            className="h-48 w-full bg-contain bg-center"
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white">
            New Arrival
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="mb-2 text-xl font-semibold">
            Product Title
          </CardTitle>
          <CardDescription className="mb-4 text-gray-600">
            Product Description goes here. Provide a brief overview of the
            product.
          </CardDescription>
          <p className="mb-2 text-gray-700">$99.99</p>
        </CardContent>
        <CardFooter className="bg-gray-100 p-4">
          <button className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            Add to Cart
          </button>
        </CardFooter>
      </Card>

      {/* Product Card 3 */}
      <Card className="max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg">
        <CardHeader className="relative">
          <img
            src="/watch.png"
            alt="Product Image"
            className="h-48 w-full bg-contain bg-center"
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white">
            New Arrival
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="mb-2 text-xl font-semibold">
            Product Title
          </CardTitle>
          <CardDescription className="mb-4 text-gray-600">
            Product Description goes here. Provide a brief overview of the
            product.
          </CardDescription>
          <p className="mb-2 text-gray-700"></p>
        </CardContent>
        <CardFooter className="bg-gray-100 p-4">
          <button className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            Add to Cart
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
