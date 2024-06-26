import { useEffect, useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Footer from "../components/Footer";
import { Modal } from "antd";
import naukriIcon from "../public/images/naukri.png";
import Image from "next/image";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [formVal, setFormVal] = useState({
    userName: "",
    userEmail: "",
    userMassage: "",
  });

  useEffect(() => {
    const fetchAllData = async () => {
      const response = await fetch("/api/getAllData");
      if (response) {
        const data = await response.json();
      } else {
        alert("Failed to fetch data!");
      }
    };
    fetchAllData();
  }, []);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormVal((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Indore</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <span className="text-LightGray md:text-sm">Ignatiuz</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  vickytiwari855@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="text-LightGray text-sm">vikasTiwari</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">+91 7746051290</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={`mailto:vickytiwari855@gmail.com`}
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/vikas-tiwari-03a94a1a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 hidden sm:block"
            href="https://www.facebook.com/share/hdZBNDf8UELDBLAh/?mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            href="https://www.instagram.com/vicky_cittu_tiwari?igsh=MXM1cDBmZGN1Njl1Mg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="w-9 h-9 " src={naukriIcon} alt="Naukri.com" />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Review</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <div>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    name="userName"
                    value={formVal.userName}
                    onChange={handleChange}
                    required
                    className="input_stylings"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    name="userEmail"
                    value={formVal.userEmail}
                    onChange={handleChange}
                    required
                    type="text"
                    className="input_stylings"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                  >
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    name="userMassage"
                    value={formVal.userMassage}
                    onChange={handleChange}
                    required
                    className="input_stylings"
                    placeholder="Review"
                  />
                </div>
              </div>

              <div className="my-4">
                <button
                  onClick={async () => {
                    if (
                      formVal.userEmail &&
                      formVal.userMassage &&
                      formVal.userName
                    ) {
                      const response = await fetch("/api/saveData", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formVal),
                      });

                      if (response.ok) {
                        setModalMessage("Thank you for your review!");
                        setFormVal({
                          userName: "",
                          userEmail: "",
                          userMassage: "",
                        });
                      } else {
                        setModalMessage("Something went wrong!");
                      }
                    } else {
                      setModalMessage("Please fill required fields!");
                    }

                    setIsOpen(true);
                  }}
                  className="button"
                >
                  {" "}
                  SEND MESSAGE{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">{modalMessage}</h1>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
