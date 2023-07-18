// aca va la info que necesitamos 
// variables que necesitamos llamar

import {connect} from 'react-redux'


function Layout({children}){
    return(

    <div> {children}</div>


        )   
}
// {children} es toda la info de afuera que vamos a traer
const mapStateToProps = state=>({})// llama a cualquier variable que necesitemos usar 



export default connect(mapStateToProps,{})(Layout)
