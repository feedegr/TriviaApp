

export const FetchQuestions = async () => {
  
     
    const url= "https://the-trivia-api.com/api/questions?categories=science,music,history,geography,general_knowledge,food_and_drink,film_and_tv,arts_and_literature,society_and_culture,sport_and_leisure&limit=10&region=AR"

      const response = await fetch(`${url}`);
      const data = await response.json();
      return data;
}

