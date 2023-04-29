import Image from "next/image";
import { Inter } from "next/font/google";
import style from "../styles/ds.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between bg-[#412bbb] p-2 pl-14 fixed">
      <div className="bg-gray-200 w-full rounded-3xl flex-1 ">
        {/* <div> */}
        {/* side menu */}
        <div
          className={`${style["bg-menu"]} w-56 flex-1 rounded-3xl absolute -ml-10 mt-10 `}
        >
          <div className="w-full flex-1 my-8 mx-5">
            <div className="flex gap-2 items-center mb-8">
              <dov className="bg-white rounded-full p-1">
                <Image src="/edu.png" alt="logo" width={50} height={50} />
              </dov>
              <div>
                <h1 className="text-xl font-semibold text-white">Edu-Center</h1>
                <p className="text-xs text-white">School</p>
              </div>
            </div>
            <div className="text-white">
              <h1 className="mb-1">Main Menu</h1>
              <ul className="">
                <li className="flex gap-4 items-center mb-4 bg-fuchsia-300 p-2 rounded-xl mr-10">
                  <Image
                    src="/dashboard.png"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  <p>Dashboard</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <Image
                    src="/studentCap.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                  <p>Students</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <Image src="/teacher.png" alt="logo" width={20} height={20} />
                  <p>Teachers</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <Image src="/event.png" alt="logo" width={20} height={20} />
                  <p>Events</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <Image src="/finance.png" alt="logo" width={20} height={20} />
                  <p>Financs</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <Image
                    src="/calender.png"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  <p>Calender</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <Image src="/chat.png" alt="logo" width={20} height={20} />
                  <p>chat</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <Image
                    src="/notification.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className=""
                  />
                  <p>Notification</p>
                </li>
              </ul>
              <div>
                <Image
                  src="/studentLearn.png"
                  alt="student learn"
                  width={180}
                  height={100}
                />
              </div>
              <hr className="mr-10" />
              <div className="w-full flex justify-center items-center ">
                <div className="mr-10">
                  <div className="flex mt-5 items-center gap-2">
                    <Image
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt="logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p>Demo</p>
                      <p className="text-xs">class</p>
                    </div>
                  </div>
                  <div className="my-3 w-full">
                    <button
                      type="button"
                      className=" flex gap-2 items-center bg-gray-300 p-1 px-2 rounded-lg text-black"
                    >
                      <Image
                        src="/logout.png"
                        alt="logo"
                        width={20}
                        height={20}
                      />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* other */}
        <div className="ml-52">
          {/* header */}
          <div className="rounded-tr-3xl bg-white h-16 items-center justify-between flex px-5">
            <div className="w-96">
              <form>
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex gap-3">
              <div className="bg-fuchsia-100 p-1 rounded-full w-10 flex flex-1 items-center justify-center">
                1
              </div>
              <div className="bg-fuchsia-100 p-1 rounded-full w-10 flex flex-1 items-center justify-center">
                2
              </div>
              <div className="bg-fuchsia-100 p-1 rounded-full w-10 flex flex-1 items-center justify-center">
                3
              </div>
              <div className="bg-fuchsia-100 p-1 rounded-full w-10 flex flex-1 items-center justify-center">
                4
              </div>
              <div className="flex items-center gap-2 w-36">
                <Image
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p>Demo</p>
                  <p className="text-xs">class</p>
                </div>
              </div>
            </div>
          </div>
          {/* dashboard */}
          <div className=" p-7 h-screen overflow-y-scroll">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-medium">Dashboard</p>
                <p>It is a Admin Penal</p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-blue-700 bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
                >
                  <Image
                    src="/calender.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Change Periode
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  New Admission
                </button>
              </div>
            </div>
            {/* other contend */}
            <div className="mt-2 flex flex-col justify-between mb-20 ">
              <div className="flex justify-between gap-4">
                <div className="grid mb-2 shadow-sm md:mb-2 md:grid-cols-2 w-auto gap-4 justify-center">
                  <div className="bg-white rounded-2xl w-64 p-3 flex justify-between">
                    <div className="flex flex-col justify-between">
                      <p className="text-2xl font-semibold">6,815</p>
                      <p>Total Students</p>
                    </div>
                    <div className="self-center">
                      <Image
                        src="/students.png"
                        alt="line chart"
                        width={50}
                        height={50}
                        resizeMode="contain"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl w-64 p-3 flex justify-between">
                    <div className="flex flex-col justify-between">
                      <p className="text-2xl font-semibold">654</p>
                      <p>Total Teachers</p>
                    </div>
                    <div className="self-center">
                      <Image
                        src="/teacher.png"
                        alt="line chart"
                        width={50}
                        height={50}
                        resizeMode="contain"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl w-64 p-3 flex justify-between">
                    <div className="flex flex-col justify-between">
                      <p className="text-2xl font-semibold">656</p>
                      <p>Events</p>
                    </div>
                    <div className="self-center">
                      <Image
                        src="/event.png"
                        alt="line chart"
                        width={50}
                        height={50}
                        resizeMode="contain"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl w-64 p-3 flex justify-between">
                    <div className="flex flex-col justify-between">
                      <p className="text-2xl font-semibold">1,397</p>
                      <p>Invoice Status</p>
                    </div>
                    <div className="self-center">
                      <Image
                        src="/finance.png"
                        alt="line chart"
                        width={50}
                        height={50}
                        resizeMode="contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl flex-1 flex">
                  <div className="flex flex-col justify-between p-4">
                    <h5 className="mb-2 text-2xl font-bold ">
                      Increase your Knowledge By Learning!
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                  <div>
                    <Image
                      className="rounded-xl max-h-[40vh]"
                      src="/childrenLearning.jpg"
                      alt="line chart"
                      width={300}
                      height={100}
                      resizeMode="contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-between gap-4 my-4">
                <div className="">
                  <Image
                    className="rounded-xl max-h-[30vh]"
                    // src="/lineChart.jpg"
                    src="https://www.churchmanagementacademy.com/wp-content/uploads/2017/05/Line-Graph.png"
                    alt="line chart"
                    width={900}
                    height={400}
                    resizeMode="contain"
                  />
                </div>
                <div className="bg-white flex-1 rounded-2xl p-5">
                  <h1 className="text-xl font-semibold">Upcoming Events</h1>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex-1 bg-white rounded-2xl justify-between flex">
                  <Calendar className="rounded-2xl flex-1" />
                </div>
                <div className="flex-1 bg-white rounded-2xl justify-between flex">
                  <img
                    className="rounded-xl w-full "
                    // src="/lineChart.jpg"
                    src="https://www.churchmanagementacademy.com/wp-content/uploads/2017/05/Line-Graph.png"
                    alt="line chart"
                    // width={500}
                    // height={100}
                    resizeMode="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
