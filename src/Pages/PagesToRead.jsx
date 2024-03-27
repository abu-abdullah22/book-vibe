/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useEffect, useState } from "react";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const PagesToRead = () => {
    const datareloaded = useLoaderData() ;
    const [dat, setDat] = useState([]) ;


    useEffect(()=>{
        const datas = getStored();
        if(datareloaded.length){
            const filtDats = datareloaded.filter(book=> datas.includes(book.bookId)) ;
            setDat(filtDats) ;
        }
        

    },[datareloaded])
    
    const Data = dat.map(book=> ({
        name: book.bookName,
        uv: book.totalPages,
    })) ;


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

  
      
    
  

  return (
    <div className="flex justify-center mt-8 bg-[#13131308] container mx-auto lg:h-[550px] rounded-lg items-center">
       <BarChart
      width={1000}
      height={300}
      data={Data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {Data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
};

export default PagesToRead;
