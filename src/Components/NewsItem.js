import React  from 'react'

const NewsItem=(props)=> {

    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    

    return (
      
  <div className="my-3">
    <div className="card" style={{width: "18rem"}}>
    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
    style={{left: '90%', zIndex: '1'}}> {source} </span>
      {/* If by chance in news api the image is null then we set the defalut image */}
    <img src={!imageUrl?"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg":imageUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More about it</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
