import React from "react";
import "./list.css";
const List = (props) => {
  const { people } = props;
  return (
    <div className="container">
      <ul>
        {people.map((item) => (
          <>
            <li>
              <article className="person" key={item.id}>
                <div className="imgShrirk">
                  <img src={item.image} alt="" />
                </div>
                <div className="dataFlex">
                  <h4>{item.name}</h4>
                </div>
                <div className="dataInline">
                  <h3>{item.age} year olds</h3>
                </div>
              </article>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
