import React, {MouseEvent, FocusEvent, ChangeEvent} from "react";


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }

    const  saveUser = () => {
        alert('Dima saved')
    }

    const saveChangTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
    }



    const onBlurInput = (e: FocusEvent<HTMLInputElement>) => {


    }

    return (
        <div>Dima
            <button name= 'save' onClick={deleteUser}>x</button>
            <button name= 'delete' onClick={deleteUser}>x</button>
            <textarea onChange={saveChangTextArea}></textarea>
            <input onBlur={onBlurInput}/>
        </div>
    )
}