
import ChartCircle from '../charts/ChartCircle'
import ChartLine from '../charts/ChartLine'


export default function  AllCharts() {
  const Empty=false;
  return (
    <div  className="flex flex-row flex-wrap  justify-between pb-5">
             <div className="lg:w-[50%] w-full min-h-[320px] px-3  pt-5 ">
            <ChartCircle empty={Empty}/></div>
            <div className="lg:w-[50%]  w-full min-h-[320px] px-3  pt-5 ">
            <ChartLine empty={Empty}/>
            </div>
    </div>
  )
}
