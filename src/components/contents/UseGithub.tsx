import React, { useState } from "react";
import { Button } from "react-bootstrap";
import UserDetails from "../customHooks/UserDetails";

const UseGithub = () => {
  let inputRef: HTMLInputElement | null;
  const [username, setUsername] = useState<string | null>(null);

  return (
    <div className="container welcome">
      <div className="mt-5">
        <div className="d-flex row align-items-center">
          <div className="d-flex col-lg-6">
            <div className="pb-5">
              <div className="d-flex justify-content-center mb-2">
                <text className="h5">useGithub Kullanımı</text>
              </div>
              <div className="mb-4">
                <text className="declaration">
                  Burada "useGithub" adında bir hook oluşturduk. İnputumuza bir değer giriyoruz ve (ara) butonuna
                  tıklayarak bu değeri "userDetails" isimli componentimize veriyoruz. Bu componentimiz de useGithub
                  hook'umuzu bu değer ile çağırıyor. Hook'umuz girmiş olduğumuz değerde bir kullanıcı var ise onun tam
                  adı ile avatarını çekiyor ve userDetails'a return ediyor. Ve son olarak çektiğimiz bilgileri ekrana
                  yansıtıyor.
                </text>
                <div className="d-flex justify-content-center mt-4">
                  <input
                    type="text"
                    placeholder="Kullanıcı adı giriniz"
                    ref={(e) => {
                      inputRef = e;
                    }}
                  />
                  <Button
                    type="button"
                    aria-label="button"
                    onClick={() => {
                      setUsername(inputRef!.value);
                    }}
                  >
                    Ara
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="aa d-flex col-lg-6 justify-content-center">
            <div className="d-flex align-self-center">
              {username ? <UserDetails username={username} /> : <text>Github profili arayınız.</text>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseGithub;
