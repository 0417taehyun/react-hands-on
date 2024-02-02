import { useState } from "react";
import { hasHangeul } from "../utils";

function Form({updateMainCat}) {
    const [inputText, setInputText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleInputChange(event) {
        const userInputText = event.target.value;

        setErrorMessage("");
        if (hasHangeul(userInputText)) {
            setErrorMessage("한글은 입력할 수 없습니다.")
        }

        setInputText(userInputText.toUpperCase());
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        setErrorMessage("")
        if (inputText === "") {
            setErrorMessage("빈 값으로 만들 수 없습니다.");
            return;
        }
        if (hasHangeul(inputText)) {
            setErrorMessage("한글로 만들 수 없습니다.");
            return;
        }

        updateMainCat(inputText);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="name"
                placeholder="영어 대사를 입력해주세요."
                value={inputText}
                onChange={handleInputChange}
            />
            <button type="submit">생성</button>
            <p style={{color: "red"}}>{errorMessage}</p>
        </form>
    )
}

export {Form};
