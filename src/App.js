// import react from 'react'
import propTypes from 'prop-types'

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "https://jjintlmarket.com/wp-content/uploads/2018/08/traditional-kimchi-1920x800.jpg",
    rating: 5
  },{
    id: 2,
    name: "라면",
    image:
    "https://qph.fs.quoracdn.net/main-qimg-6479e7a53a723d25180ef50a4565d049",
    rating: 3.5
  },{
    id: 3,
    name: "삼겹살",
    image:
    "https://1.bp.blogspot.com/-5d8ZXiLn2ZE/WqDwi_fsOtI/AAAAAAAAboE/7OOsPuyRczMl0P-fV0lKv3-n7TG3mXvagCLcBGAs/s1600/SAM_2057.JPG",
    rating: 4.7
  },{
    id: 4,
    name: "chukumi",
    image:
    "https://img1.daumcdn.net/thumb/R720x0/?fname=http:%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2Fb6f38212c8f34cad8a3ce954237317f9.JPG",
    rating: 4.9
  },{
    id: 5,
    name: "Kimbab",
    image:
    "http://www.hanipsoban.co.kr/upload/141/20190315055740/20190829182405_8dda4ecc.jpg",
    rating: 4.5
  },
];

// function renderFood(dish) {
//   // console.log(dish)
//   return <Food name={dish.name} picture={dish.image} />
// }

function Food({name, picture, rating}) {
  // console.log(props.fav)
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>{rating}/5.0</h3>
      <img src={picture} alt={name} />
      </div>
  )
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number
}

function App() {
  return (
    <div>
      
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
      
    </div>
  );
}  

export default App;


//children component로 정보를 보내는 방법을 할거야
//application에서 food component로 정보를 보내고
// 그다음에 foodcomponent에서 정보를 사용해보자.
//dish는 object다!! 꼭기억해 
//