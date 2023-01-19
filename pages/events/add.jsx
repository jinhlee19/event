import Layout from "@/components/Layout";

import { useRouter } from "next/router";
import { useState } from "react";

export default function AddeventPage() {
  const router = useRouter();
  const [values, setValues] = useState({
    title: "",
    address: "",
    venue: "",
    date: "",
    time: "",
    organizer: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="Add New event">
      <div className="max-w-5xl mx-auto space-y-8 h-100v">
        <div className="flex justify-between items-center">
          <h1>이벤트 추가하기</h1>
          <button type="submit" className="btn btn--lg" onClick={handleSubmit}>
            이벤트 만들기
          </button>
        </div>
        <form action="" onSubmit={handleSubmit} className="event-add py-6">
          <div className="addform grid gap-8">
            <div className="input  ">
              <label htmlFor="title">이벤트 이름</label>
              <input
                type="text"
                id="title"
                name="title"
                value={values.name}
                onChange={handleInputChange}
                className="input--1"
              />
            </div>
            <div className="input col-span-1">
              <label htmlFor="address">행사 위치</label>
              <input
                type="text"
                id="address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
                className="input--1"
              />
            </div>
            <div className="input">
              <label htmlFor="venue">행사장</label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={values.venue}
                onChange={handleInputChange}
                className="input--1"
              />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
