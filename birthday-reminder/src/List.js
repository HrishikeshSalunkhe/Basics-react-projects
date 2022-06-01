import React from "react";
export default function List(props) {
    console.log(props.birthdayPeoples);
    const birthdayList = props.birthdayPeoples.map(item =>{
        // console.log(item);
        const {id, name,age, image} = item;
        return (
            <article className='person' key = {id}>
                <img src={image} alt="user photo" />
                    <div>
                        <h4>{name}</h4>
                        <p>{age}</p>
                    </div>
                </article>
        );
    });
    return (
    <>
    {birthdayList}
    </>
  );
}
