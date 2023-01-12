export default function  ListDisplay ({ movie }){
  
  

    const loaded = () => {
      
      const list = movie.Search.map(it => {
        return (
         <div key={it.imdbID}>
            <p>{it.Title}</p>
            <img src={it.Poster} alt='Hi'/>
          </div>
    
        );
      })
  
      return (
       <>
       {list}
       </>
      );
    };
    //function to return loading JSX
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  };