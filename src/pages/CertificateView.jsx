import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "@/components/ui/button";
const APIBaseURL = "https://my-portfolio-backend-nilc.onrender.com/api/v1";
const CertificateView = () => {
  const [title, setTitle] = useState("");
  const [certificate, setCertificate] = useState("");
  const [certificatePreview, setCertificatePreview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getCertificate = async () => {
      await axios
        .get(`${APIBaseURL}/certificates/get-certificate/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTitle(res.data.certificate.title);

          setCertificate(
            res.data.certificate.certificate &&
              res.data.certificate.certificate.url
          );
          setCertificatePreview(
            res.data.certificate.certificate &&
              res.data.certificate.certificate.url
          );
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
    getCertificate();
  }, [id]);

  const navigateTo = useNavigate();
  const handleReturnToPortfolio = () => {
    navigateTo("/");
  };

  return (
    <>
      <div className="flex mt-7 justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4">
        <div className="w-[100%] px-5 md:w-[1000px] pb-5">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex justify-end">
                <Button onClick={handleReturnToPortfolio}>
                  Return to Portfolio
                </Button>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <div className="w-full sm:col-span-4">
                  <h1 className="text-2xl font-bold mb-4">{title}</h1>
                  <img
                    src={
                      certificatePreview
                        ? certificatePreview
                        : "/avatarHolder.jpg"
                    }
                    alt="certificatePreview"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateView;
