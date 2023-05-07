/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from 'react';

export default function PostView() {
  const [animalName, setAnimalName] = useState();
  const [lostDate, setLostDate] = useState('');
  const [phoneNumber2, setPhoneNumber2] = useState();
  const [detail, setDetail] = useState('');
  const [gender, setGender] = useState('');
  const [btnText, setBtnText] = useState('등록하기');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const handleChangeAnimalName = ({ target: { value } }) =>
    setAnimalName(value);

  const handleLostDate = ({ target: { value } }) => setLostDate(value);
  const handlePhoneNumber2 = ({ target: { value } }) => setPhoneNumber2(value);
  const handleDetail = ({ target: { value } }) => setDetail(value);
  const handleGender = ({ target: { value } }) => setGender(value);
  const handleLogin = () => {};
  const saveImage = async () => {};
  const onSubmit = async (event) => {
    event.preventDefault();

    if (!animalName || !lostDate || !gender) {
      alert('빈칸을 작성해주세요.');
      return;
    }

    setBtnText('등록중...');
    setBtnDisabled(true);

    saveImage();
  };

  return (
    <div className="flex flex-row justify-center z-0">
      <form className="mt-8">
        <div className="py-5">
          <div className="text-3xl font-bold text-gray-800">분실 등록</div>
          <p className="mt-3 max-w-2xl text-sm text-gray-500 ">
            찾으려는 반려견을 실종 등록 해주세요.
          </p>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex relative">
            <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              반려 동물 이름
            </span>
            <input
              name="animalName"
              value={animalName || ''}
              type="string"
              onChange={handleChangeAnimalName}
              onClick={handleLogin}
              className="text-center rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-3 px-20 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex mb-2">
          <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            성별
          </span>
          <ul className="grid md:grid-cols-3 items-center w-2/3 border border-gray-300 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent rounded-r-lg">
            <li>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="M"
                  className="hidden peer"
                  onChange={handleGender}
                  onClick={handleLogin}
                  required
                />
                <label
                  htmlFor="gender-male"
                  className="inline-flex justify-center items-center p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                >
                  <div className="block">
                    <div className="w-full text-sm ">수컷</div>
                  </div>
                </label>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="F"
                  className="hidden peer"
                  onChange={handleGender}
                  onClick={handleLogin}
                  required
                />
                <label
                  htmlFor="gender-female"
                  className="inline-flex justify-center items-center p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                >
                  <div className="block">
                    <div className="w-full text-sm ">암컷</div>
                  </div>
                </label>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gender-unknown"
                  name="gender"
                  value="Q"
                  className="hidden peer"
                  onChange={handleGender}
                  onClick={handleLogin}
                  required
                />
                <label
                  htmlFor="gender-unknown"
                  className="inline-flex justify-center items-center rounded-r-lg p-4 w-full text-black bg-white cursor-pointer dark:hover:text-white dark:border-white dark:peer-checked:text-[#ffa000] hover:peer-checked:text-[#fcd46c] peer-checked:text-[#ffa000] hover:text-gray-600 hover:bg-gray-100 dark:text-black dark:bg-white dark:hover:bg-[#ffa000]"
                >
                  <div className="block">
                    <div className="w-full text-sm">미상</div>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex relative">
            <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              실종 날짜
            </span>

            <input
              type="date"
              name="date"
              value={lostDate || ''}
              onChange={handleLostDate}
              onClick={handleLogin}
              className="text-center rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-3 px-20 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex relative">
            <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              실종 장소
            </span>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex relative">
            <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              보호자 연락처
            </span>
            <input
              type="phoneNumber"
              value={phoneNumber2}
              onChange={handlePhoneNumber2}
              placeholder="010-1234-5678"
              className="text-center rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-3 px-20 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex relative">
            <span className="w-1/3 rounded-l-md inline-flex  items-center px-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              반려 동물 특징
            </span>
            <input
              type="text"
              value={detail}
              onChange={handleDetail}
              className="text-center rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-3 px-20 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#ffa000]   focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col mb-2" />
        <button
          type="submit"
          onClick={onSubmit}
          disabled={btnDisabled}
          className="py-2 mt-1 mb-10 bg-[#ffa000]  hover:font-extrabold text-white w-28 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
}
