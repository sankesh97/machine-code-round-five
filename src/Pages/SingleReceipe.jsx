import { useContext, useEffect } from 'react';
import { ReceipesContext } from '../Context/ReceipesContext';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card';

const SingleReceipe = () => {
  const { receipeId } = useParams();
  const { getSingleReceipe, currentReceipe } = useContext(ReceipesContext);

  useEffect(() => {
    getSingleReceipe(receipeId);
  });

  return (
    <div>
      {currentReceipe && (
        <>
          <h1 className='text-center m-2'>{currentReceipe.title}</h1>
          <Card>
            <div className='container'>
              <div className='row'>
                <div className='col-6'>
                  <img
                    className='img-fluid rounded-5'
                    src={currentReceipe.image_link}
                  ></img>
                </div>
                <div className='col-6 py-2 text-start'>
                  <p>
                    <strong>Cuisine:</strong> {currentReceipe.cuisine_type}
                  </p>
                  <p>
                    <strong>Ingredients:</strong>{' '}
                    {currentReceipe.ingredients.map((element, index) =>
                      index !== currentReceipe.ingredients.length - 1
                        ? `${element} | `
                        : `${element}`
                    )}
                  </p>
                  <p>
                    <strong>Instructions</strong>
                  </p>
                  <ol>
                    {currentReceipe.instructions.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};
export default SingleReceipe;
