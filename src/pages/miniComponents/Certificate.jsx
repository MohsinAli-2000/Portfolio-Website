import { Button } from "@/components/ui/button";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const APIBaseURL = "https://my-portfolio-backend-nilc.onrender.com/api/v1";
const Certificate = () => {
  const [viewAll, setViewAll] = useState(false);
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    const getMyCertificates = async () => {
      const { data } = await axios.get(
        `${APIBaseURL}/certificates/get-all-certificate`,
        { withCredentials: true }
      );
      setCertificates(data.certificates);
    };
    getMyCertificates();
  }, []);
  return (
    <div>
      <div className="relative mb-12">
        <h1
          className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY{" "}
          <span className="text-tubeLight-effect font-extrabold">
            Certificates
          </span>
        </h1>
        <h1
          className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          <span className="text-tubeLight-effect font-extrabold sm:text-[1.75rem]">
            Certificate
          </span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {viewAll
          ? certificates &&
            certificates.map((element) => {
              return (
                <Link to={`/certificate/${element._id}`} key={element._id}>
                  <img
                    src={element.certificate && element.certificate.url}
                    alt={element.title}
                  />
                </Link>
              );
            })
          : certificates &&
            certificates.slice(0, 9).map((element) => {
              return (
                <Link to={`/certificate/${element._id}`} key={element._id}>
                  <img
                    src={element.certificate && element.certificate.url}
                    alt={element.title}
                  />
                </Link>
              );
            })}
      </div>
      {certificates && certificates.length > 9 && (
        <div className="w-full text-center my-9">
          <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Certificate;
