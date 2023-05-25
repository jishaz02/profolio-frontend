import React from 'react'



const TopicInfo = () => {
  return (
    <div>
      <div className="bg-[url('assets/images/goodgradient.png')] h-screen">
        <p className=' font-bold text-white text-2xl px-6 py-4 '>What is Machine Learning?</p>
<p className=' px-6 py-0 text-white font-medium opacity-80 mb-7 text-lg'>Machine learning is an application of artificial intelligence that uses statistical techniques to enable computers to learn and make decisions without being explicitly programmed. It is predicated on the notion that computers can learn from data, spot patterns, and make judgments with little assistance from humans.</p>
      <img className=' w-1/4 h-1/4 ml-1.5 mb-7 px-5 border-solid' src="https://www.analyticsinsight.net/wp-content/uploads/2018/10/History-of-Deep-Learning.jpg" alt="" />
      <p className='  font-bold text-white text-2xl px-6 py-0'>There are Seven Steps of Machine Learning</p>
<p className=' px-6 py-2 text-white font-medium opacity-80 mb-7 text-lg'>
<p>1. Gathering Data</p>
<p>2.Preparing the data</p>
<p>3. Choosing a model</p>
<p>4. Training</p>
<p>5. Evaluation</p>
<p>6. Hyperparameter Tuning</p>
<p>7. Prediction</p>

</p>


      </div>
    </div>
  )
}

export default TopicInfo
