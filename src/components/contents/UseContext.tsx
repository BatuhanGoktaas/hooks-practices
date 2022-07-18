import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UserContext = React.createContext<number>(0);

const UseContext = () => {
  const [value, setValue] = useState<number>(0);
  const [changedValue, setChangedValue] = useState<number>();

  /**
   * Buradaki fonksiyonumuz state'i direkt değiştirmemek için kullanmış olduğumuz state'i bekletme işlemidir.
   * @param {number} e - Input'ta girmiş olduğumuz yeni değer.
   */
  function handleChange(e: number) {
    setChangedValue(e);
  }

  /** Buradaki fonksiyon girmiş olduğumuz yeni değeri ana state'imize atamamızı sağlar. */
  function changeState() {
    setValue(changedValue!);
  }

  return (
    <UserContext.Provider value={value!}>
      <div className="container welcome">
        <div className="mt-5">
          <div className="d-flex row align-items-center">
            <div className="d-flex col-lg-6">
              <div className="pb-5">
                <div className="d-flex justify-content-center mb-2">
                  <text className="h5">useContext Kullanımı</text>
                </div>
                <div className="mb-4">
                  <text className="declaration">
                    Context, componentler arası veri taşıma işlemini sağlar. Context'in kendisine ait bir state'i vardır
                    ve bu provider'da tutulur. Context sayesinde provider'dan (sağlayıcıdan) consumer'a (tüketiciye)
                    veri aktarılır. Burada bir sayı değeri örneği verdik. Provider default state'i "0". Input'tan yeni
                    değer girdiğinizde provider state'i değişiyor ve consumer'a yeni değeri aktarıyor.
                  </text>
                </div>
                <div className="d-flex row justify-content-center mb-4 text-center">
                  <text style={{ fontSize: 12, marginBottom: 5 }}>Yalnızca sayı değeri giriniz</text>
                  <input
                    onChange={(e) => handleChange(+e.target.value)}
                    className="input"
                    placeholder="Provider değeri giriniz"
                    type="number"
                    maxLength={30}
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <Button onClick={changeState}>Değiştir</Button>
                </div>
              </div>
            </div>
            <div className="d-flex col-lg-6 justify-content-center">
              <div>
                <text>
                  Provider'dan sağlanan value değeri{" "}
                  <UserContext.Consumer>{(value) => <h3> {value}</h3>}</UserContext.Consumer>
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default UseContext;
