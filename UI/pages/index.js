import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createContext, useState } from "react";
import Subject from "../components/subject";
import { SUBJECTLIST, QUOTA, MULTIPLIER } from "../components/constants";

export default function Home() {
  const [quota, changeQuota] = useState(QUOTA);
  const [total, setTotal] = useState(0);
  const [quotaLimitMessage, setQuotaLimitMessage] = useState();
  const subjects = SUBJECTLIST;
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target[0].checked);
    console.log(event.target.length);
    let total = 0;
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        total += parseInt(event.target[i].value) * MULTIPLIER;
      }
    }
    setTotal(total);
  };
  const updateQuotaWithToggle = (event) => {
    const periodValue = parseInt(event.target.value) * MULTIPLIER;
    if (quota >= 0) {
      if (event.target.checked) {
        if (quota - periodValue < 0) {
          setQuotaLimitMessage(
            "Quota Limit exhausted can't select this period type"
          );
          setTimeout(()=>setQuotaLimitMessage("") , 3000);
          
          event.target.checked = false;
        } else {
          changeQuota(quota - periodValue);
        }
      } else {
        changeQuota(quota + periodValue);
      }
    }
  };
  return (
    <div>
      <Head />
      <h1 className="text-center text-6xl">Select the subjects</h1>
      <p className="text-right text-5xl"> Quota: {quota}</p>
      <p className="text-right text-5xl"> Mutiplier: {MULTIPLIER}</p>
      <p className="text-right text-5xl"> Total: {total}</p>
      <p className="text-right text-5xl">{quotaLimitMessage}</p>
      <form onSubmit={handleChange}>
        {subjects.map((sub, index) => {
          return (
            <div key={index}>
              <Subject
                subinfo={sub}
                key={index}
                changeQuota={changeQuota}
                quota={quota}
                updateQuotaWithToggle={updateQuotaWithToggle}
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
