import { NavLink, useLoaderData } from "react-router-dom";



const Brandname = () => {

    const brandName = useLoaderData()
    // console.log(brandName);

    return (
        <div>
           
                <div className="grid md:grid-cols-6 grid-cols-3 gap-3 w-full mx-auto">
                    {
                        brandName.map(brand => <div key={brand.id} className="card mt-10 mb-10 bg-base-100 shadow-xl">
                            <figure><img className="w-[100px] h-[100px]" src={brand.brandImage} alt="Shoes" /></figure>
                            <NavLink to={`/brandName/${brand.brandName}`}>
                            <h2 className="text-center font-semibold mt-3 mb-3">{brand.brandName}</h2>
                            </NavLink>
                        </div>)
                    }
                </div>
          
        </div>
    );
};

export default Brandname;


