import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createContext, useState } from "react";
import Subject from "../components/subject";
import { SUBJECTLIST, QUOTA, MULTIPLIER } from "../components/constants";

export default function Home() {
  const [quota, changeQuota] = useState(30);
  const [total, setTotal] = useState(0);
  const subjects = SUBJECTLIST;
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target[0].checked);
    console.log(event.target.length);
    let total = 0;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        total += parseInt(event.target[i].value);
      }
    }
    setTotal(total);
  };
  return (
    <div>
      <Head />
      <h1 className="text-center text-6xl">Select the subjects</h1>
      <p className="text-right text-5xl"> Quota: {quota}</p>
      <p className="text-right text-5xl"> Total: {total}</p>

      <form onSubmit={handleChange}>
        {subjects.map((sub) => {
          return (
            <div key={Math.random()}>
              <Subject
                subinfo={sub}
                key={Math.random()}
                changeQuota={changeQuota}
                quota={quota}
              />
            </div>
          );
        })}
        <div className="text-center">
          <input type="submit" className="btn btn-outline btn-secondary" />
        </div>
      </form>
    </div>
  );
}

// lets make it like this if anyone can come he has some quota , he will select some subs
// and get out
