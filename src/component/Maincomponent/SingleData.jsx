// import image from '../../assets/img/1.png'
import vactor from '../../assets/img/Vector (1).png'
import times from '../../assets/img/Frame.png'

const SingleData = ({ data }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = data;
    return (
        <div>
            <div className='border-2 rounded-2xl p-5'>
                <img src={recipe_image} className='w-full rounded-2xl h-full md:h-[180px] object-cover' alt="" />
                <h2 className='font-bold text-xl py-4'>{recipe_name.slice(0 ,20)}</h2>
                <p className='py-2
                            '>{short_description}</p>
                <hr />
                <h2 className='font-medium text-xl pt-3'>Ingredients: {ingredients.length}</h2>
                <ul className='py-3 list-disc px-5'>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                    <li>{ingredients[5]}</li>
                   
                </ul>
                <hr />
                <div className='flex gap-5 py-3'>
                    <div className='flex gap-2'>
                        <img className='' src={times} alt="" />
                        <p>{preparing_time}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img className='' src={vactor} alt="" />
                        <p>{calories}</p>
                    </div>
                </div>
                <button className="btn btn-active px-6 py-2 btn-accent my-5 hover:bg-lime-400 rounded-full border border-black bg-[#0BE58A]">Want to Cook</button>

            </div>
        </div>
    );
};

export default SingleData;