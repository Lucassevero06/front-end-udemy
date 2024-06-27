import MyComponent from "./MyComponent";

//1 - Criando componente
const FirstComponent = () => {
    return (
        <div className="FirstComponent">
            <h2>Meu primeiro componente</h2>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;