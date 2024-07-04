import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News=(props)=> {
   const[articles,setArticles]=useState([]);
   const[loading,setLoading]=useState(true);
   const[page,setPage]=useState(1);
   const[totalResults,setTotalResults]=useState(0);

//    document.title=`${this.capitalizeFirstLetter(props.category)}-NewsMonkey`;
    const capitalizeFirstLetter= (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // constructor(props){
    //     super(props);
        
        
    // }
    

    const updateNews=async()=>{
        //cf955fb2c9a94a6993e06541d104a09b
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        
        // this.setState({ loading: true });
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalresults);
        // setPage(parsedData.page);
        setLoading(false);
      
    }
   useEffect(()=>{
    document.title=`${capitalizeFirstLetter(props.category)}-NewsMonkey`;
    updateNews();
   },[])

    // const componentDidMount=async()=>{ 
    

    // updateNews();
    // }

     const handlePrevClick = async()=>{
        console.log("Previous");
      
        setPage(page-1)
        updateNews();

    }
    
     const handleNextClick = async()=>{
        console.log("Next"); 
   
    setPage(page+1)
    updateNews();

    }

    // render() { 
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin: '35px 0px',marginTop:'90px'}}>NewsMonkey - Top  {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner/>}

                {/* <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spinner/>}
                > */}

                <div className="row"> 
                
                 {!loading && articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}
                        author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div> 
                })} 
                </div> 
                {/* </InfiniteScroll> */}
                <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
// }


News.defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
export default News