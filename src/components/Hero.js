import ButtonContainer from "./ButtonContainer";
function Hero(){
    const styles= {
        background: "red",
        height: 40,
        width: 150,
        color: "white"
    }
    return(
        <header>
            <div className="hero">
                <h2>Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.

The enjoyment of the highest attainable standard of health is one of the fundamental rights of every human being without distinction of race, religion, political belief, economic or social condition.

The health of all peoples is fundamental to the attainment of peace and security and is dependent on the fullest co-operation of individuals and States.
</h2>
                <h4>
The health of all peoples is fundamental to the attainment of peace and security and is dependent on the fullest co-operation of individuals and States.

The achievement of any State in the promotion and protection of health is of value to all.

Unequal development in different countries in the promotion of health and control of diseases, especially communicable disease, is a common danger.

Healthy development of the child is of basic importance; the ability to live harmoniously in a changing total environment is essential to such development.
The extension to all peoples of the benefits of medical, psychological and related knowledge is essential to the fullest attainment of health.

Informed opinion and active co-operation on the part of the public are of the utmost importance in the improvement of the health of the people.

Governments have a responsibility for the health of their peoples which can be fulfilled only by the provision of adequate health and social measures.



</h4>
                
        <ButtonContainer style={styles}title="BOOK NOW"/>
            </div>
        </header>
    );
}

export default Hero;