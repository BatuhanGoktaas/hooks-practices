import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [image, setImage] = useState<string>("");

  const fetchAPI = async () => {
    let index = Math.floor(Math.random() * 11);
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=Uedr3a9Wm_2qoJmc7_1AmAGehh5wvAy4R-AFSDFNku0"
    );
    setImage(response.data[index].urls.small);
    console.log(response.data[index].urls.small);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="container welcome">
      <div className="mt-5">
        <div className="d-flex row align-items-center">
          <div className="d-flex col-lg-6">
            <div className="pb-5">
              <div className="d-flex justify-content-center mb-2">
                <text className="h5">useEffect Kullanımı</text>
              </div>
              <div className="mb-4">
                <text className="declaration">
                  React varsayılan olarak ilk render da dahil olmak üzere her render işleminden sonra effect
                  fonksiyonunu çalıştırır. Hook'umuz iki ader parametre alır. Bunlardan ilki lifecycle anında
                  gerçekleştirilecek işlemlerdir diğer parametre ise bağımlı değişkenleridir. Bağımlı değişkenlerin
                  değerleri değiştiği zaman useEffect tekrar çalışır. Burada useEffect ile 10 görselden birini rastgele
                  çekmekteyiz. Sayfayı yenilediğinizde useEffect tekrar çalışacak ve random başka bir görseli
                  çekecektir.
                </text>
              </div>
              <div className="text-center">
                <text>(Not: Aynı görsel gelebilir, şansınızı denemeye devam ediniz)</text>
              </div>
            </div>
          </div>
          <div className="d-flex col-lg-6 justify-content-center">
            <div>
              <img src={image} height={500} width={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
