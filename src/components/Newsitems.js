    import React, { Component } from 'react'

    export class Newsitems extends Component {

        

      render() {
        
        let{title, description, imgUrl, newsUrl}=this.props

       
        return(
         <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
             <img src={!imgUrl?"https://www.investors.com/wp-content/uploads/2020/12/Stock-Teslalogo-01-adobe.jpg":imgUrl} className="card-img-top" alt="..."/>
             <div className="card-body">
             <h5 className="card-title">{title}...</h5>
             <p className="card-text">{description}...</p>
             <a href={newsUrl} target='-blank' className="btn btn-sm btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        )
      }
    }

    export default Newsitems
