
import ChartCircle from '../charts/ChartCircle'
import ChartLine from '../charts/ChartLine'


export default function  AllCharts() {
  const Empty=false;
  return (
    <div  className="flex flex-row flex-wrap  justify-between">
            <ChartCircle empty={Empty}/>
            <ChartLine empty={Empty}/>
            
    </div>
  )
}
