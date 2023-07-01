import { useContext, useEffect, useState } from 'react';
import { ReceipesContext } from '../Context/ReceipesContext';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const { getReceipesList, receipeList, deleteHandler } =
    useContext(ReceipesContext);
  const [currentFilterOption, setCurrentFilterOption] = useState();
  const [currentSearchText, setCurrentSearchText] = useState();

  useEffect(() => {
    getReceipesList();
  }, []);

  const filteredList = (
    receipeList,
    currentFilterOption,
    currentSearchText
  ) => {
    if (!currentFilterOption || !currentSearchText) return receipeList;
    switch (currentFilterOption) {
      case 'title':
        return receipeList.filter((receipe) =>
          receipe.title.includes(currentSearchText)
        );
      case 'ingredients':
        return receipeList.filter((receipe) =>
          receipe.ingredients.toString().includes(currentSearchText)
        );
      case 'cuisine_type':
        return receipeList.filter((receipe) =>
          receipe.cuisine_type.includes(currentSearchText)
        );
    }
  };
  return (
    <>
      <div className='row border-1'>
        <div className='col-md'>
          <input
            type='text'
            placeholder='Search the item you want'
            aria-label='Search'
            value={currentSearchText}
            onChange={(event) => setCurrentSearchText(event.target.value)}
            className='form-control mb-2'
            disabled={!currentFilterOption}
          />
        </div>
        <div className='mx-md-5 col-md'>
          <span className='fw-bold'>Filters: </span>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio1'
              onChange={(e) => setCurrentFilterOption(e.target.value)}
              value='title'
            />
            <label className='form-check-label' htmlFor='inlineRadio1'>
              Name
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio2'
              onChange={(e) => setCurrentFilterOption(e.target.value)}
              value='ingredients'
            />
            <label className='form-check-label' htmlFor='inlineRadio2'>
              Ingredients
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio3'
              onChange={(e) => setCurrentFilterOption(e.target.value)}
              value='cuisine_type'
            />
            <label className='form-check-label' htmlFor='inlineRadio3'>
              Cuisine
            </label>
          </div>
        </div>
      </div>
      <div className='m-2 row g-5'>
        <div className='col-md-4 d-flex justify-content-center align-items-center'>
          <i
            className='bi bi-plus-circle h2'
            data-bs-toggle='modal'
            data-bs-target='#addReceipeModal'
          ></i>
        </div>
        {receipeList &&
          filteredList(receipeList, currentFilterOption, currentSearchText).map(
            (receipe) => (
              <div key={receipe.id} className='col-md-4'>
                <Card>
                  <>
                    <img
                      src={receipe.image_link}
                      className='card-img-top rounded-5'
                      alt={receipe.title}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{receipe.title}</h5>

                      <p className='card-text d-flex justify-content-between'>
                        <span className='fw-bold'>Cuisine Type:</span>
                        <span>{receipe.cuisine_type}</span>
                      </p>
                      <p className='card-text d-flex justify-content-between'>
                        <span className='fw-bold'>Ingredients:</span>
                        <Link to={`/${receipe.id}`}>
                          <span>See Receipe &gt;</span>
                        </Link>
                      </p>
                      <p className='card-text d-flex justify-content-between'>
                        <span className='fw-bold'>Cuisine Type:</span>
                        <Link to={`/${receipe.id}`}>
                          <span>See Receipe &gt;</span>
                        </Link>
                      </p>
                    </div>
                    <span
                      onClick={() => {
                        deleteHandler(receipe.id);
                      }}
                      className='bg-danger p-2 rounded-2 position-absolute top-0 end-0'
                    >
                      <i className='bi bi-trash3'></i>
                    </span>
                  </>
                </Card>
              </div>
            )
          )}
      </div>

      <div
        className='modal fade'
        id='addReceipeModal'
        tabIndex='-1'
        aria-labelledby='addReceipeModaldialog'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='addReceipeModaldialog'>
                Add Receipe
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>...</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
