import {siteConfig} from "@/config/site";
interface ServiceProps {
    title: string;
    description?: string;
    data?:string[];
    icon?: string;
}
export const Service = ({title,description,data}:ServiceProps) => {
    return (
        <>
            <div className="bg-amber-30 text-center  w-full p-6 relative"
                 style={{backgroundImage: `url('./image/11.jpg')`, backgroundAttachment: 'fixed'}}
            >

                <span className="bg-mprimary w-full h-full absolute top-0 left-0 z-0 opacity-75"></span>
                <div className="">

                    <div className={'text-white  font-bold text-2xl m-3 relative z-20'}>{title}</div>

                    <div className="h-4 "></div>
                    <div className="grid md:grid-cols-2 ">

                    {
                        siteConfig.serviceList.map((value, index) => (
                            <div key={index} className={'mb-2'}>
                                <ServiceItem title={value.title} description={value.description}
                                icon={value.icon}/>

                            </div>
                        ))
                    }
                    </div>

                </div>
            </div>

        </>
    );
};


const ServiceItem = ({title, description, data,icon}:ServiceProps) => {
    // @ts-ignore
    return (
        <div className='war overflow-hidden'>
            <div className="flip-card  h-64 sm:w-[300px] md:w-[500px] flex m-auto " >
                <div className="flip-card-inner  ">
                    <div className="flip-card-front flex justify-center bg-white bg-cover bg-repeat-round" style={{ backgroundImage:"url('./image/back2.png')", }}>
                        <div className="m-auto p-auto flex flex-col gap-2 b">
                            {
                                icon &&
                            <img src={icon} className={'h-28 w-28 mx-auto'} />
                            }
                            <h1 className={'font-bold text-2xl'}>{title}</h1>
                        </div>
                    </div>
                    <div className="flip-card-back  bg-mprimary  text-white flex " style={{ direction:'rtl'}}>
                        <div className="m-auto text-center p-2 ">
                            <div className='list-disc  p-2 m-2'>
                                {
                                    description && <p>{description}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};