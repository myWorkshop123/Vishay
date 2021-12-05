import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Subject from "../components/subject";
import { SUBJECTLIST, QUOTA, MULTIPLIER } from "../components/constants";
export default function Home() {
  const [quota, changeQuota] = useState(30);
  const subjects = SUBJECTLIST;
  const handleChange = async (event) => {
    event.preventDefault();

    console.log(event);
  };
  return (
    <div>
      <Head />
      <h1 className="text-center text-6xl">Select the subjects</h1>
      <p className="text-right text-5xl"> Quota: {quota}</p>
      <ul>
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
      </ul>
    </div>
  );
}

// lets make it like this if anyone can come he has some quota , he will select some subs
// and get out
