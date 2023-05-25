import React, { useState, useEffect } from 'react';
import NewsNav from '../components/NewsNav';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1c813c30a4594af1bddd056aa2cd947a')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className=' w-full h-max-screen bg-[#0B1120]'>
       <NewsNav /> {/*Sending the function as a prop to Navbar (Callback technique)*/}


    <div className="container mx-auto pt-12">
   
   
      {articles.map(article => (
        <a href={article.url} target="_blank" rel="noopener noreferrer" key={article.url}>
          <div className=' ml-10 mr-10 mb-8'>
          <div className="border border-gray-200 rounded p-4 mb-4 mr-96 flex items-center">
            <img className="w-32 h-32 object-cover mr-4" src={article.urlToImage} alt={article.title} />
            <div className="flex-grow">
              <h2 className="text-lg mb-2 text-white font-medium">{article.title}</h2>
              <p className="text-gray-400 mb-2">{article.author} | {article.source.name}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
    </div>
  );
}

export default News
