const Form =() =>{

    return(
        <section className= "form">
        <form>
            <input
             type = "email" 
              placeholder="enter email" />

            <input 
            type= "password" 
             placeholder="enter password" />
            <input type= "text" placeholder="enter phone number" />
            <button>Submit</button>
        </form>

        
    
    </section>
    );
}

export default Form;