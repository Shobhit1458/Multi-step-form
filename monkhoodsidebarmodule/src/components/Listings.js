import React from "react";
// import second from 'first'

const Listings = () => {
  return (
    <>
        <div className="md:hidden sticky flex left-0 right-0 mx-auto my-0 top-0 w-32 items-center justify-center bg-red-500  hover:bg-red-400 text-gray-100 p-3  rounded-md tracking-wide font-semibold  cursor-pointer transition ease-in duration-500 z-10 backdrop:saturate-50">
          <button type="submit">Filters</button>
        </div>
        {/* <div className="h-44 bg-black"></div> */}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      <div class="relative mx-auto w-full">

        <a
          href="#"
          class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div class="shadow p-4 rounded-lg bg-white">
            <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div class="absolute inset-0 ">
                  <img
                    className=" h-60 "
                    src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1454806.jpg&fm=jpg"
                    alt="House"
                  />
                </div>
              </div>

              <div class="absolute flex justify-center bottom-0 mb-3">
                <div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                    </svg>
                    3 + 1
                  </p>

                  {/* <p class="flex items-center font-medium text-gray-800">
				<svg class="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path></svg>
				1
			  </p> */}

                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                    </svg>
                    2
                  </p>
                </div>
              </div>

              <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                Recommended
              </span>
            </div>

            <div class="mt-4">
              <h2
                class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                title="New York"
              >
                216 3rd floor, GTB Nagar
              </h2>
              <p
                class="mt-2 text-sm text-gray-800 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                Guru Tej Bahadur institute of Technology ,West Delhi,Delhi
              </p>
            </div>

            <div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">2 BHK</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">Partly furnished</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">1,386 sq. ft.</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">Negotiable Rent</span>
              </p>
            </div>

            <div class="grid grid-cols-2 mt-8">
              <div class="flex items-center">
                <div class="relative">
                  <div class="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                  <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>

                <p class="ml-2 text-gray-800 line-clamp-1">Shobhit Ahuja</p>
              </div>

              <div class="flex justify-end">
                <p class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                  <span class="text-sm uppercase">₹</span>
                  <span class="text-lg">3,200</span>/m
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="relative mx-auto w-full">
        <a
          href="#"
          class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div class="shadow p-4 rounded-lg bg-white">
            <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div class="absolute inset-0">
                  <img
                    className=" h-60 "
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhYYGBgaGhwcGhwaGhoaGhwaGhgaGRgaGhgcIS4lHB4rHxoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjEhISE0NDQ0NDQ0NDE0NDQ0NDQ0NDE0NDExNDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAL0BCwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEUQAAIBAgMEBgcEBwgCAwEAAAECEQADBBIhBTFBUQYiYXGBkRMyobHB0fBCUpLhFBVTYnKC0iNUY5OissLxFjMHc6Mk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAgMAAwAAAAAAAAAAARECITESQVEDE2H/2gAMAwEAAhEDEQA/AEs12armuzUFs14NVc12aCwGpA1XNdmgKwuKa24dd49o4g19G6MbTVlFueo0m2TwO9rZ7t47J5V8wBplsfaHo2hiQjESRvRh6rjuNZ6n3Gpfp9L2nheNZvE2a1eAxXp01jOujgbp4MOwjUflS/G4EzurCsw6VU1unT4I8qqOBPKroTm3TDZ1sQOeYx+Grv0A8qnbtFGVe2fMH5VZ5qX0js5J9J/GPdXkTrzRmzLetz+Ie6pPh4YGOdbZQ2KnVcdpqLpLnuq7Z4gP3+2Yoa8Zcx9RQNNivpFH4l9PA+6lOBMUxu2mKjUAQdTupgy21EBju95pcbVOsUoLKBqT+dVNgW5VjrxWoUhKtS3TJcCeVWJgTyrOqGw1iTWm2bhY1ofAYHWids48WUIDBWKkljuRB6zn4flT/Qm6W7bRFYb0QwQN9y59m2OwHU8PI18wv33d2dzLsZPIclXko4fnRO1NoG++bUIultTwHFmH3m7dw05yETW+Z91Lfp0moFq4TUSa0y6WrhNRJqJNB0muTUS1RmgYhq6DTzaPRowXwxzrxQ+uv8P3x7e+s9mjQ6EaEHnxBoLs1dBqoNXQ1BbmqQNUhqkGoLgakDVIarFNBrOim3PRsqMdVEL+/b4oObrvUcRI4E19EF+0yhgylSJBzCCK+JG2GEHwI3ggyCDwIOtNcDj2Qde2jnmGySeJIytv5Vm82eosv6+pm9h+Ny3+NfnUDiMN+1t/jT5187XbP+Co/mn/AIipfrr/AAkrPn8a8fr6D+kYb9ra/GnzpB0jxaqyvbZGAyiQQyz1pnKe6s8u1/8ADTyNGpis9stlCwwGndO6tc7vpLh9sBGdGeOI58tYmmbWwXAInqmkGx9oMjA6kHeOytPdUkqw3ZTp3itMgbGDEetlzEH8LTpQuJsZSSAN54zxoh3/ALNSDO7wlm91RfDMUVjpv8akVThjGun51PFbQPqAntPLsoNL+VIBEy2pIEDsmg8W+uUcpJ+AqoLXFp6ZMzLlB6zGABo3E9tPf0rDftbX40+dYXGXsgDAAwdx40L+vT+zSs9bvpqY+ifpGG/aW/xp86mt2wdzoe51+dfNzt8/s0qt+kH+Cp/ny/8AA1nz+L4/X07EYu1bQsWU8gCJY8FHaa+VdLdtG85RWBEzcZTIZh6ttTxROPNh2GQtobXdwQiC2CIkNmYA6MAcoiRpPCaUgACAIA0Aqyb7HCagTXWNQY1tnHiagWrhNVk0MSLVEtXCaiTQSJrk1Ga5NBptmbZZCNdOVP76YbGCX6lzg67+zMNzDv17RXzxbhFGYTHFSDNFMtrbGu4Yy4zIfVddUPKfunsPtpeGrWYDpBAyPDKRBDQQRxBB31zaHRlLoz4ZgrHU22PVP8DH1e46doqamMrmqQao37ToxR1KMN6sII8KgDVReHqxGoYGpqaoPtNRiUtstRiNWolWcakoplsfYhvoX9MqQxEG2W5HfnHAimNvojExftrBiRaaToDr1+2udvlrCBVovDXMvcYkd26nQ6LH+8p/ln+upDowf7wn+Wf66aYrtXjllWinmAx5VELmZybv3lO7smaVr0bYSP0hIO/+zP8AXV4wrLCFlOTIM3qggdmvAx4U3QzS6fRqRvk/7jV9nEEpEnSdfCq8LYHo1hgezUAEtrwoS/YeQoMLqTHHUR4VcRx0lCTFZ7F45cxEEFdOEaac60dycpWDlnU84+HvpViejLM7N+kIMzEx6MmJO716tuEZ7EX2cQTpvoRlrTnos395T/KP9dVt0Ub+8p/lH+us61jLOKHuVrLnRHdN+20mNbLGNDuHpIpF0m2WMMqE31dnJhQhXqgdZixcjeQI7amhM5qh3qp7xqovQWs9Vs1QL1AtWhYWqBaoE1EmgkWrxaqLt5VEkxVRus/qiBzrIvuXwtUfpJ5VK3hgN+pq+K0OtXlMV5hXooyKtXjTjZ+2XQ7/AKFIUNWFtaYuvoZxdjFIEvqCfssNHX+FvgdOys/tXo5csguh9Ja+8o6yj99eHeNO6k+HxhWtFsfpCykSanoZ1RVyJWyxOx8PigXtEW7m8wP7Nj2qPVPaPI1nr+zntPkdSp8we1TuIqoow9vWjltVZg8PrTIYWtxKnsi4URgPvT7BR6YptdePwFUYOxAPf8BV3o9/1yrn1PLUq79KbnUkxLc6Hy10CpiilxTc6vF8Egtv+HKl5rgMU9DT4HEKqgACD+dTR0mQN8njw7KQpiIVQN+YAjs4/KrreIyasfsxHHUSPfW4yvxO0VbcABy5HnQL4rkaDNc+vr3VjdaWtim51A4tuf19aVURVbD6+vKpip3cW2mvH4EflWW6X4ku1ueAf2lflT+4Pr68qzHSnRk7m961YhETUSa4TUC1FSJrhNQZ6AxG0ANF1Ps86Ic2MRZVXzqxMdQhgAp5tIMj8qS4naPBB4n61oB7jMdTPZw8q+n9CuglnIL+L1Lapb3QOb8z2U66nM8rJb6fMWDMZYkmn1pIEVt+kOycIAQiKvdWc25hlt3Sq7soPnWee50XnC6KlFcmuzWkciphagzxTjCbKdwChViUL5ZhsqkBtPHxg102RktCVJbc01u7JuoAXRgDqCOsIIkaiRuqpLNWICFurksGQAaINur0GoqyJonAYm7b9U6VpsNjGuLlcK6ngR7RyPaKz2HQGtBsy3oKl5hozB7FJcBCIIJhjugc41px/wCO3P3PM/KrdjD+2XuPuNaWpuKx77Oa31WiTroZ03fCh3tb/rgK0O1llx/CPeaUum+s1S9kqOWinSqytTFUlaiVq7LXstMFSDUd4q3GiXnsHur2WuPJ1NPoU5a5lq7LXMtMFJX6+vKq2X6+vKiCtRK0wBum7v8Agf8AqsX08xARrMzqH3dhSt46bu/4GsL/APImDd2sBFLaXNw7Uj67Kgx52kvbXU2sFmFmQRqAd/ETuPbV56MYkAFrTKDoCY+dU39gXlIlYkgTykxT5c/q50jhdn4nEh2tW3ZU9YqOqOwnn2UA+HZTDAgjga+w7Mxq4fCC1ahVUa82Y+sx5k1hdqEXHJI1msT+S2+vDV4yBejmEXOHcSF1A5mvotnakrJPdWCw5iAN1M1xJis9z5Vrm5BO1sTJJFLekF6b5H7ie2flXr1yaH6RXAt8yY6if8q1zMZ6uhw9ezUE+0xlyySASQBukwCfYPKh/wBYn7vt/Kt5WdhvdFaGwjHCqyIAVQguDDeupKsvFYnnv4cUDitBsRQ1hlyliA8Qd0oxEjiJAPhW+vplrOi4e8jk3WBDoYIDAqqg2xGhgSwidYqG1dhm2juWVhx6uok6ED7I37jVPQu7lcr95Pah+T+ytPthM1hx+7PkQa1kxNfPLlsSY3cO7xqsLTC+mu8mQDJEHUA6ihilWJRGFFaHZh0FZ3DmCKfYK5GndVRp9jt/bL/Cfca01ZDYt2cSo/dP+01rA9ZrUpftP1h/D8TSpxvpltJ+sO74mlrmsqHcVXlq25SVukNjm34TUwMytdC0qHSCxzb8Jr3/AJBY5t+E0wNctRIpX/5BZ5t+E1E9ILHNvwmmBpFeilR6Q2ObfhNdHSGxzb8JpgZFa9loHDbatO4RS0toJU8p30zC0A7p9eFCYhELopR2YyFYELbWYEXHysVkwBCnWmLLu+uFCYt2DIqo7AkFmXKQoUgmQSCZ3DKCZrPXprn2zO29osFVTvDkHWdQCN8Ce+B3Cs3j9oEofD3imHSFwZI3Z2I9tZvGP1T4e+uc5jpejFccckTQFx9Zqi0+ldDVrnnGbRFs0ShoNDRSGria85oDpas4gf8A1r7zRz0Xj0U3mLCeon/KluTTN8MemFY7hVn6uflWuUpwArmZax/ZWvhC8086NuNQS0ZlnLviYOncaROaa9HbhzsBMkaRvmZ08q9F9OR7sC9kuITpDAHubqH31vMYM1t15ow/0mK+d3BluuNfWaJEHeSsjgd1b/BXw6K33lB8xrVjNZDFsSEJLnqD1xB0JEA/aWIg9vZQLUXiFIRNHgM6yzAoSCCQgjq7zI7QeNLr12Ks9FXJc1pjhsRr5Ujt3kOaXgiIWJLT46d9XWbh5HyNXUa/YWKnFr/Af9prbDEgivlewcURi1mR1G9xrZJj+M8a1zzpbhlirsnw+JoNn3/XAUv2hjnFi5cQEsqkjSY5tHGBJ8KzmE2m6vhkDO73mhlcQRqQdJ3AazyU1y6udNc+mtvNoa+bOkkax8a+j37TqpzKRpXzto6s7+HlSFQyHXXfw5VH0Zyxm8dKsGWTprpJrmZcg6pjgNefzqjjL1hrw3R7Zry2tD1tefKpNlzjTrRv7J51xVTK2mkmRrqeNBw2t3W/OuBNTr+VWMF6vV7tN2leGXMdNdJMb+WtAVsRIvW9Z1Ov8prdLurD7FC+kt5RAk6a8jzrchGI0E/X141npYix3d/wNA45kDIzXfRtrlOZRmGkqVYEMN3CRwIkzn9oY53v38OXe09tQUKCT9k7p1mZkc6z/S3F3TawbuIcrd1YAFgly3lbKNBmCq2h+0axfLU8O9IDJmZm42vPfrWcxvqnw99XtjXcQxkTI3d3DhQuMPUPh7xSRbVdttKtQ0LbaiENaQQpohTQq1etDVhq7bLReP8AAnxqmpdIGi9/IvxqdTwc3yo9LUfTUOXqGauXxb0W5o3YFz+2UQxB0hfWPdodfCuYzZdxdQM45rr7N9B4B8t1Zka9xFei+nJqtq3IvvGfUg9cQ+4HrDnrWu6MX81kD7jFfD1h7GFYbbWJV7uZLj3AVUl3EMTlgg6mYiJk7q0HQ3FdZ05qGHehyn2MvlV5qdQPtdI9JCrIvEZs/XhgxAKT6unrAdlZ17jTGZgIO4nkeE1oukLBbt8EoP8A1uAwPpDIQH0bAREkyCdw041mbr/H3GgItYlRva7u16xPkC1FtjVIMZ+8n8zSRXzGBJPKD8qLtYO8RogjX1mC850InyoDdjXv/wCka/Yb3GtI105TrNZbCWvRX0ZyCGU6Cd0dsc6ZvfBJyIxnhqd/lEa1vnr4xLzrWdHMQfQsJ+2R/pWorYtJeGVArlGIcACFDKCs7wCWGg00rGHaWKRhbs27ipmJJW3macqyTnnTUCBvIbXSg9r47HfpC3PQ3DltgGEYo0PnOm4ZmVDvnQVx6u3WpH1W9tJUtszt1FUkk8AONYOzgbtzrIAV3tBzHXdogNaBNoo4ZJBMaqd8HTUHgaz/AERxLWnck5VC6BhG8yBryIPnU9eles7Ndmy5mYj7KKZHfM+6qbmzr6XnST1URyP/AGFQxYdbLqN3cNN1bJ9uLqM6bwN/PxpfZuW0xLYgXVzsMhEjLllSDzkFefE02/p4Z9MIzMFV5ncApYk900U+x7gYoDmu5MwUlV8OInjE1prO2bWYklAzDVhAJgmATx3UuxFy0cQb/pMrLuUkZSMpTv4TvpvX6vgsw/R/EtAKurRrOQj8QaD4V7H7Fa0yq9wEkTCru1jeTrWgXbqSBnTt1/Ol20cRbvFX9IoYDKACI561Lb9UkhbsxguKRJJ3kzHIxEePsrcNdJEDQV8z2dj0bFI6NmGk5esASI4bhu7K2r7YROrOZhHVXVoPGOXH6irPM8pRF7Ztt2DuiswESQCYOpWeI7N01mP/AJE2x6NsOuRXlbkScsZcmg0PP2VodlY4XAzOjpp1QQ2/+Xw38aW9Lh6TAMigG4fRaAHPo6l5013cKZDywmG2ujzntIoERoHmZ/dEcKU7RcMGIUKDGg3DUbqKw2z2gyQNe3hpXsfs1ghOYcOfMVFKrdEoKimDccAe4/AwatFtl3gjvBFaZWW6vWqrdXKKCYrvSd/7UCNyDXnP/Xtr0UXtrC57xOmiJv8AGp14jXPtnM1cmm67KLGAF84rv6gufs/9a/1ViWVrGqXC3OajxPyqT4Et6yo3eJM85iiGxg5VVcxZ5xXdyc2hhGvsr3SWZUCBixnKpJAOmurHU6617Z2GFhw6tqJ0JkEMIIMdwPhQxxRbdJ7t3nuqLO3YPafZp7aAnamLD3GLNkzWwhCoHDQWKjXVDp63ClDW0WNBv46+zd7KIAYucrupy65eK6grAjQ5tZqS2UAkIT2kfM1FQzjqjQCd0QPVbcoo/DW9IJiZ4Eb9eNctzEgKB5+7dUxcjXT2H5VdTB1gW1ADW0JGklQx9vzom7iUQAhEUyoBVFWMzBd4PbSl8U0azH7qge80uvYwaDN9tCcxA0V1Y6nTcOfnQxrGuntozA4RrmuoXnz7BNIbONRwpUhgzhBBBBOmaY4AH20S21XmA27loPClDvDbAtI73Qku8ZizMdFECF9UeAqzE2EG9B4gR5lKQDa93758zUDta5znv1qYHIGHP7EHlmQH2rVi4JD6qI3cbZ9wpCdpvxCnwFQ/Tv3E/Avypg064AgaWl7iBHj1qr/QH/u9rwaPeppAm03G4KO5RUm2vc7KmVT39XGZNgDuuD5Cr0suNyEDlnB95rMLte5zI7iR7qkNt3hudvOf900yjUJZ/wAMD8Pwqm5si0z58gV4jOIDRyMb/Gs4dv4mQfSHuKW4P+mafbL22j6M+V/uuFE/wuoAPvphofF4F0BYSyjz8RHuoNbvfWtLk/ZFZjpHhlsxdHVQkBhuCsd0TuB9/fVGF2jhM153DvDNO/TyO7dUGwhYQTPP1vdR2EdMozaNGpEHXv3e2jEvpEEHvj26VwuukIDs+Nx9/uq2zbYfUGm4dY1f+WGJ93wqMqdyx2zl98TVlsMgAYdD6yDxAB8xr7a7+rUO6R3H4EH300NtSI0/mPwqpbYBifL4SRVnSfEtbY5+y4/mBHtE17a2DL3MykjqqNOyaYF3G4T5A1Rdd5k2z36UvWwnOUtt4Nxuap5Lo+37R86ZLjRxDjsj5mrP0lDw99YacCt9ojuX+o/Kosi8p79ffU3cUrv7XQGEDXG5IJHi24V6XEwZ6Gv4pU9ZgOzie4bzQa4fE3hIKovJZLfiIgeFEYTo+y65SzHfLST4kzQQw9/OxJRwoEAsCJM8BvimNqwW10A5sR7BE0TbwCoBnRye8ge6um2Y3MByBA841pgpe3lE5lb8PxNUNec8R5jTxmr2AP2d3aZ9tdW0jesRmJ01PwFRQpY9vgai1guQI81A8zwHbTZMCshS2vABfj86FxQh/Rh4BJzHcNPvO2+I7B2UwQwUG4AnqWlJB5ng3eWM1YWg0YuGS2kIZnVm+8fkOFAsRFVFi3AeNdLjnQLmNRVRxI5HtjWgZF6iW7aXpeY7kuEcxbcjzAimWB2TibxhLZ3EmSqwB3mmmCzhGFgXJEZvGN3dE++g3JGhqWJcqmRmE7oDq0TuBCkwezfU7my74ReoSZYmCDA6oA0PGCdKm57VUHNez0PdtXE9ZHXvUgecRQxxyj7Q8xVQxV676SlZ2qm7MD2DU+QrqbRDGFVj36e+gdJtG6kZLjr2TK/hMj2UyXb7OjW7yK6uIaOqe8aESN43aikVps0dm/4VIXBQC3LIUxyPZryOWeUVYXnQARzygH2UVfQsB1GnnBAI37zp/wB0Otorrl9s+z8q52N6p9E8yGkciMp9lF2nQR1V8FB97fCuKk8x2H4QNKvS3bMdcDnp8f8Auphrpxa7gHHcB8d3lXLtxGE9c9oC7+ZAHtqTplOYQe9TqPdROGRiPsqO5pP8sCpi6WC2BrleD9TEV30TR1UJHdB8tKOeyxMZwNeA17J5VVcJBgMO6A2vnpUxdLrmGZvsN5FvnVH6CT9j2geyacW2uCOqe/QDtirso4g/hHwFMNZpdhu8G+5fjllVTuCDf3mm+FwFpBuCj938xHvq+y6iSSSeQH5RRS5I0Xz+dd3JUjgTkzn4dwVRFRDnizk8ozewnfRKI/IGfrsqYwhiC3gq6c94oAFuOskeZCipl3bQuT2a0Vcwkby/tA7pkxXFsk+qmnMzQBXMMvFteW//AKorB27kdVgoHMfCKs/RSILN5CRRyMoXSZ5kCSOevCgW4pHI9ca/dUg+YFBvhHiCzN/Eqkf6hNPbt9B9oEnkfqKoNtGMKGcnfqefPjyoE6YG7l6mg5ZZXykR4URZsXAAGtp7R7zWgsYQkQRlA3VLDYUNchpMaxvECOJ7xpUtUuwexS+roiL2Elj3DQDvpk+z7aJCW1JE5ZUMZ5gHjTnLVb2Qd9c7bWhWwbtlEPXDMTJJ9YaDqsIlT2EDfQt68yO7oivmBOmhA3ZeRJid47a6Un1lV43FhDfiFSzx9j/9D/TVnUTHzN+gzoA4W5oZGtskEcNFzeNbGwkFSkwfWA9UGNwI0zTvjkZ4U5yKdSiz2ln99eZJ3/8AXcKnWVYoRKExex7Nz17asecQfMa0zy16Kxisnj+jJXrWAgjgyAt4N8IpTbwl1iS7WGj/AAyp/ED8K+g5aTbUtBXzSQGGo0yyI4Gt89X7Sxlr+FvEQiKO1SzCO4jQ+NCYfZV0MWd24QcyiO4AGPlWssWwWgFYPAewjWKndwCTJYk8BuJ7pNdNZZ10M5wSSRBJ627TiO6p2sSw0zsD2KD4RwphirKqJUsOc5d/xqlCo4FvCPYNKgDxBc7514kQTUEtHfu4jhTG7dTkwnsmOczVOedFiOGmtTBy1ecb3JHCQDHmK5dv3AIJUg8Y118NO6pLhyTDMe+eHaCRV/6EqCc0jun40xdD4a229XBO4iCK69kKZZQx5dbz4RU7mGbeoI8DXLDOrak+I5aVMNVu7E6AqOQ6wPgfnQ5XsP4T86cZ41g68gI+dD5bXEN7aYuupaQfeOm6ABr20bbWCMloHvM+4bqut4ZVI0nSfqZro2l6JSQuY672MDhurow6+b7RRAOQBPlQ7Xba6y58AJ+PLhVRvPdMsR3R+detrJEacefvoPXsRmGiL5a95Jq/DYS42pMcYEKPOrGTdru+cUehAjQan60oKktZNSmae2fOdDVmdW09GT+GJ7eNHFuBGnlQWHvFhI6sctffQQ/V8ahQo7dfLXSovhADLEaDgcojvq7GXykT1jrv07d1ULaNyCzEz7PDdw5UA+I2iq9VWjfuBPkTw7av6OPnZ2M8ImeM869ewiqs79419/IeAFW7HkM2sggR2QSInjurPXohu1RBqTVQ431zbWkV7LQzSOJ+iR8K4l1iYnl27wD8aAmK9FCi+0TPL2kCuXLrCNd89nL500FEVyRQzEzEn6FcWoCc07qTdIwCgJBIDDcJPHdANNVP140l6SXSEHaw+NWewvw9pAoIDKd/XLDQ8YgVN7ybguYgfvEDuk0BZbU7907/AGUfZtjLOvPf9cq6MqHxLExlA3SAsE9lSCht6kd4aRr303sPHAcjpvG+qhiSSNBE7t/voFq4OfVJmd2sHwnfU2wmXQoR/CfgRTF3IgiPKD5iKuOMYjWDv91Bzo36K1ez3G0yMBmXNBJWIIG+AeFOb74cKmb0ZchmeGTMSFOWSDzI40ltZWnMoMTpA7+VL8bfU/YXTsGvsoNC9jCMSYUHMNc+uWUketxGepW8FhmBOVSxYxLEjLmWJBYH1c3t7KxC4mSQVETpECNe6mGGvECB9aTQM9v2bKIvoQAxZp1kxJK7yY04xWdYv98++tH6WFGYZwQPW139u+lTejJ/9cfzflQf/9k="
                    alt="House-2"
                  />
                </div>
              </div>

              <div class="absolute flex justify-center bottom-0 mb-3">
                <div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                    </svg>
                    3 + 1
                  </p>

                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 480 512"
                    >
                      <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                    </svg>
                    1
                  </p>

                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                    </svg>
                    3
                  </p>
                </div>
              </div>

              <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                Featured
              </span>
            </div>

            <div class="mt-4">
              <h2
                class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                title="New York"
              >
                58,East Avenue Road , PB
              </h2>
              <p
                class="mt-2 text-sm text-gray-800 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                Maharaja surajmal Institute of technology, West Delhi, Delhi
              </p>
            </div>

            <div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">3 BHK</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">Fully furnished</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">2,380 sq. ft.</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">Fixed Rent</span>
              </p>
            </div>

            <div class="grid grid-cols-2 mt-8">
              <div class="flex items-center">
                <div class="relative">
                  <div class="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                  <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>

                <p class="ml-2 text-gray-800 line-clamp-1">Shobhit King</p>
              </div>

              <div class="flex justify-end">
                <p class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                  <span class="text-sm uppercase">₹</span>
                  <span class="text-lg">5,500</span>/m
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="relative mx-auto w-full">
        <a
          href="#"
          class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div class="shadow p-4 rounded-lg bg-white">
            <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div class="absolute inset-0 bg-black opacity-10"></div>
              </div>

              <div class="absolute flex justify-center bottom-0 mb-3">
                <div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                    </svg>
                    3 + 1
                  </p>

                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 480 512"
                    >
                      <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                    </svg>
                    1
                  </p>

                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                    </svg>
                    3
                  </p>
                </div>
              </div>

              <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                Featured
              </span>
            </div>

            <div class="mt-4">
              <h2
                class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                title="New York"
              >
                58,East Avenue Road , PB
              </h2>
              <p
                class="mt-2 text-sm text-gray-800 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                Maharaja surajmal Institute of technology
              </p>
            </div>

            <div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">Condominium</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">Partly furnished</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">1,386 sq. ft.</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">$1.98 /sq.ft</span>
              </p>
            </div>

            <div class="grid grid-cols-2 mt-8">
              <div class="flex items-center">
                <div class="relative">
                  <div class="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                  <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>

                <p class="ml-2 text-gray-800 line-clamp-1">John Doe</p>
              </div>

              <div class="flex justify-end">
                <p class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                  <span class="text-sm uppercase">$</span>
                  <span class="text-lg">3,200</span>/m
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="relative mx-auto w-full">
        <a
          href="#"
          class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div class="shadow p-4 rounded-lg bg-white">
            <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div class="absolute inset-0 bg-black opacity-10"></div>
              </div>

              <div class="absolute flex justify-center bottom-0 mb-3">
                <div class="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"></path>
                    </svg>
                    3 + 1
                  </p>

                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 480 512"
                    >
                      <path d="M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"></path>
                    </svg>
                    1
                  </p>

                  <p class="flex items-center font-medium text-gray-800">
                    <svg
                      class="w-5 h-5 fill-current mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"></path>
                    </svg>
                    3
                  </p>
                </div>
              </div>

              <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                Featured
              </span>
            </div>

            <div class="mt-4">
              <h2
                class="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                title="New York"
              >
                58,East Avenue Road , PB
              </h2>
              <p
                class="mt-2 text-sm text-gray-800 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                Maharaja surajmal Institute of technology
              </p>
            </div>

            <div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">Condominium</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">Partly furnished</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">1,386 sq. ft.</span>
              </p>
              <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <svg
                  class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
                </svg>
                <span class="mt-2 xl:mt-0">$1.98 /sq.ft</span>
              </p>
            </div>

            <div class="grid grid-cols-2 mt-8">
              <div class="flex items-center">
                <div class="relative">
                  <div class="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                  <span class="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>

                <p class="ml-2 text-gray-800 line-clamp-1">John Doe</p>
              </div>

              <div class="flex justify-end">
                <p class="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                  <span class="text-sm uppercase">$</span>
                  <span class="text-lg">3,200</span>/m
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    </>
  );
};

export default Listings;
