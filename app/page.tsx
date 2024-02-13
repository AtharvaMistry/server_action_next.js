import Image from "next/image";
import Game from "@/public/image/undraw_basketball_re_7701.svg";
export default function Home() {
  async function submitForm(formData: FormData) {
    "use server";
    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(rawFormData);
  }
  return (
    <div className="bg-[url('/image/circle-scatter-haikei.svg')] h-screen flex justify-center items-center">
      <div className="glassmorph relative h-[calc(100vh-30px)] overflow-y-auto flex justify-center items-center  w-[calc(100vw-30px)] sm:h-[calc(100vh-100px)]  sm:w-[calc(100vw-100px)] md:h-[calc(100vh-100px)]  md:w-[calc(100vw-300px)] lg:h-[calc(100vh-150px)]  lg:w-[calc(100vw-450px)] ">
        <form className="grid grid-cols-1  sm:grid-cols-2" action={submitForm}>
          <div className="col-span-1 grid place-items-center">
            <Image
              src={Game}
              alt="game"
              width={100}
              height={100}
              className="size-[100px] sm:size-[200px]"
            />
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-400 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent border border-white text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-black block w-full p-2.5 "
                placeholder="name@jaimeen.com"
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-400 ">
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-transparent border border-white text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-black block w-full p-2.5 "
                placeholder="12345678"
              />
            </div>
            <button
              type="submit"
              className="border border-white rounded-full p-2 min-w-[100px] hover:bg-gray-800 text-white"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="absolute bottom-2 font-thin right-0 left-0 text-center text-white text-[8px]">
          &quot;When your code works on the first try... and you&apos;re pretty
          sure the universe is playing a prank on you.&quot;
        </div>
      </div>
    </div>
  );
}
