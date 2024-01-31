import React, { useEffect, useState } from "react";
import { Avatar } from "../../components/Avatar";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Sidebar } from "../../components/Sidebar";
import { IconFromTablerIo } from "../../icons/IconFromTablerIo";
import { IconFromTablerIo10 } from "../../icons/IconFromTablerIo10";
import { IconFromTablerIo11 } from "../../icons/IconFromTablerIo11";
import { IconFromTablerIo12 } from "../../icons/IconFromTablerIo12";
import { IconFromTablerIo13 } from "../../icons/IconFromTablerIo13";
import { IconFromTablerIo19 } from "../../icons/IconFromTablerIo19";
import { IconFromTablerIo30 } from "../../icons/IconFromTablerIo30";
import { IconFromTablerIo38 } from "../../icons/IconFromTablerIo38";
import { IconFromTablerIo40 } from "../../icons/IconFromTablerIo40";
import { IconFromTablerIo46 } from "../../icons/IconFromTablerIo46";
import { IconFromTablerIo9 } from "../../icons/IconFromTablerIo9";
import { IconTablerIconClipboardData } from "../../icons/IconTablerIconClipboardData";
import { IconTablerIconMessageCircle } from "../../icons/IconTablerIconMessageCircle";
import { IconTablerIconSettings2 } from "../../icons/IconTablerIconSettings2";
import { IconTablerIconSquareRoundedPlus } from "../../icons/IconTablerIconSquareRoundedPlus";
import { IconTablerIconWorld } from "../../icons/IconTablerIconWorld";
import "./style.css";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);
// import {Graph} from '../../components/Graph'


export const Dashboard = (): JSX.Element => {
  const [data, setData] = useState({});
  const [options,setOptions] = useState({});
  const [display,setDisplay] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vercel-deployment-server-blush.vercel.app/graph');
        // const { timestamps, profit_percentages, downsampledData } = await response.json();
        const d = await response.json();
        
        const timestamps = d.map(entry => entry.Timestamp);
        // console.log(typeof timestamps[0])

        const timestamps2 = d.map(entry => entry.Timestamp.substring(0,10));

        const profit_percentages = d.map(entry => entry['Profit Percentage']);
        // console.log(id);
        console.log(timestamps);
        console.log(profit_percentages);
        // Update state to trigger re-render with new data

        setDisplay(true);
        setOptions( {
          responsive: true,
          plugins: {
            title: {
              display: false,
            },
            
            
          },
          scales: {
            x:{
              display : true
            },
            y: {
              beginAtZero: false,  // Set to true if you want the y-axis to start from zero
            },
          }
        });
        setData({
          labels: timestamps2,
          datasets: [
            {
              // label : timestamps2,
              fill : true,
              data: profit_percentages,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            // {
            //   label: `Downsampled Data (Factor=100)`,
            //   data: downsampledData,
            //   borderColor: 'rgba(255,99,132,1)',
            //   backgroundColor: 'rgba(255,99,132,0.4)',
            //   pointStyle: 'circle',
            // },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="dashboard">
      <Sidebar
        className="sidebar-instance"
        collapse="off"
        logoFrame="/img/frame-3.svg"
        override={<IconTablerIconWorld className="icon-instance-node" color="#7D7D7D" />}
        sidebarItemIcon={<IconTablerIconClipboardData className="icon-instance-node" color="#7D7D7D" />}
        sidebarItemIcon1={<IconTablerIconMessageCircle className="icon-instance-node" color="#7D7D7D" />}
        sidebarItemIcon2={<IconFromTablerIo40 className="icon-instance-node" color="#7D7D7D" />}
        sidebarItemIcon3={<IconFromTablerIo46 className="icon-instance-node" color="#7D7D7D" />}
        sidebarItemIcon4={<IconTablerIconSettings2 className="icon-instance-node" color="#7D7D7D" />}
        sidebarItemIcon5={<IconFromTablerIo38 className="icon-instance-node" color="#B01212" />}
        sidebarNestSidebarItemIcon={<IconFromTablerIo30 className="icon-instance-node" color="#7D7D7D" />}
      />
      <div className="body">
        <div className="row">
          <div className="widget">
            <div className="heading">
              <div className="text-wrapper-4">Revenues</div>
            </div>
            <div className="big-number">
              <div className="text-wrapper-5">15%</div>
              <IconFromTablerIo19 className="icon-from-tabler-io-19" />
            </div>
            <p className="text-wrapper-6">Increase compared to last week</p>
            <div className="frame-wrapper">
              <div className="frame-4">
                <div className="text-wrapper-7">Revenues report</div>
                <IconFromTablerIo10 className="icon-from-tabler-io-3" />
              </div>
            </div>
          </div>
          <div className="widget">
            <div className="heading">
              <div className="text-wrapper-4">Lost deals</div>
            </div>
            <div className="big-number">
              <div className="text-wrapper-5">4%</div>
            </div>
            <p className="text-wrapper-6">You closed 96 out of 100 deals</p>
            <div className="frame-wrapper">
              <div className="frame-4">
                <div className="text-wrapper-7">All deals</div>
                <IconFromTablerIo10 className="icon-from-tabler-io-3" />
              </div>
            </div>
          </div>
          <div className="widget-2">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Quarter goal</div>
            </div>
            <div className="frame-5">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-4.svg" />
                  <img className="ellipse-5" alt="Ellipse" src="/img/ellipse-5.svg" />
                  <div className="text-wrapper-8">84%</div>
                </div>
              </div>
            </div>
            <div className="frame-6">
              <div className="frame-4">
                <div className="text-wrapper-7">All goals</div>
                <IconFromTablerIo10 className="icon-from-tabler-io-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="widget-3">
            <div className="heading-2">
              <div className="text-wrapper-4">Customers</div>
              <div className="frame-4">
                <p className="div-3">
                  <span className="span">Sort by </span>
                  <span className="text-wrapper-9">Newest</span>
                </p>
                <IconFromTablerIo9 className="icon-from-tabler-io-3" />
              </div>
            </div>
            <div className="list">
              <div className="customer">
                <Avatar className="design-component-instance-node" />
                <div className="frame-7">
                  <div className="text-wrapper-10">Chris Friedkly</div>
                  <div className="text-wrapper-11">Supermarket Villanova</div>
                </div>
              </div>
              <div className="customer-2">
                <Avatar className="avatar-3" />
                <div className="frame-7">
                  <div className="text-wrapper-10">Maggie Johnson</div>
                  <div className="text-wrapper-11">Oasis Organic Inc.</div>
                </div>
                <div className="frame-8">
                  <div className="frame-4">
                    <div className="frame-9">
                      <IconTablerIconMessageCircle className="icon-instance-node" color="#734A00" />
                    </div>
                    <div className="frame-9">
                      <IconFromTablerIo13 className="icon-instance-node" color="#734A00" />
                    </div>
                    <div className="frame-9">
                      <IconFromTablerIo12 className="icon-instance-node" />
                    </div>
                  </div>
                  <img className="line" alt="Line" src="/img/line-2.svg" />
                  <div className="frame-9">
                    <IconFromTablerIo11 className="icon-instance-node" color="#734A00" />
                  </div>
                </div>
              </div>
              <div className="customer">
                <Avatar className="avatar-4" />
                <div className="frame-7">
                  <div className="text-wrapper-10">Gael Harry</div>
                  <div className="text-wrapper-11">New York Finest Fruits</div>
                </div>
              </div>
              <div className="customer">
                <Avatar className="avatar-5" />
                <div className="frame-7">
                  <div className="text-wrapper-10">Jenna Sullivan</div>
                  <div className="text-wrapper-11">Walmart</div>
                </div>
              </div>
            </div>
            <button className="button">
              <div className="frame-4">
                <div className="text-wrapper-7">All customers</div>
                <IconFromTablerIo10 className="icon-from-tabler-io-3" />
              </div>
            </button>
          </div>
          <div className="rows">
            <div className="widget-4">
              <div className="heading-3">
                <div className="text-wrapper-4">Growth</div>
                <div className="frame-4">
                  <div className="div-3">Yearly</div>
                  <IconFromTablerIo9 className="icon-from-tabler-io-3" />
                </div>
              </div>
              {/* <div className="div-2">
                <img className="mask-group" alt="Mask group" src="/img/mask-group.png" />
                <div className="numbers">
                  <div className="frame-10">
                    <div className="text-wrapper-12">100k</div>
                    <img className="line-2" alt="Line" src="/img/line-3-12.svg" />
                  </div>
                  <div className="frame-10">
                    <div className="text-wrapper-13">50k</div>
                    <img className="line-2" alt="Line" src="/img/line-3-11.svg" />
                  </div>
                  <div className="frame-10">
                    <div className="text-wrapper-13">20k</div>
                    <img className="line-2" alt="Line" src="/img/line-3-10.svg" />
                  </div>
                  <div className="frame-10">
                    <div className="text-wrapper-13">10k</div>
                    <img className="line-2" alt="Line" src="/img/line-3-9.svg" />
                  </div>
                  <div className="frame-10">
                    <div className="text-wrapper-13">0</div>
                    <img className="line-2" alt="Line" src="/img/line-3-8.svg" />
                  </div>
                </div>
                <div className="years">
                  <div className="frame-11">
                    <img className="line-3" alt="Line" src="/img/line-3-7.svg" />
                    <div className="text-wrapper-14">2016</div>
                  </div>
                  <div className="frame-11">
                    <img className="line-3" alt="Line" src="/img/line-3-6.svg" />
                    <div className="text-wrapper-14">2017</div>
                  </div>
                  <div className="frame-11">
                    <img className="line-3" alt="Line" src="/img/line-3-5.svg" />
                    <div className="text-wrapper-14">2018</div>
                  </div>
                  <div className="frame-11">
                    <img className="line-3" alt="Line" src="/img/line-3-4.svg" />
                    <div className="text-wrapper-14">2019</div>
                  </div>
                  <div className="frame-11">
                    <img className="line-3" alt="Line" src="/img/line-3-3.svg" />
                    <div className="text-wrapper-15">2020</div>
                  </div>
                  <div className="frame-11">
                    <img className="line-3" alt="Line" src="/img/line-3-2.svg" />
                    <div className="text-wrapper-14">2021</div>
                  </div>
                  <div className="frame-11">
                    <img className="line-3" alt="Line" src="/img/line-3-1.svg" />
                    <div className="text-wrapper-15">2022</div>
                  </div>
                  <div className="frame-11">
                    <img className="line-3" alt="Line" src="/img/line-3.svg" />
                    <div className="text-wrapper-15">2023</div>
                  </div>
                </div>
              </div> */}
              
              <div className="div-2">
                {display && <Line options={options} data={data} />};
              </div>

            </div>
            <div className="frame-12">
              <div className="widget-5">
                <div className="text-wrapper-16">Top month</div>
                <div className="frame-13">
                  <div className="text-wrapper-17">November</div>
                  <div className="text-wrapper-18">2019</div>
                </div>
              </div>
              <div className="widget-5">
                <div className="text-wrapper-16">Top year</div>
                <div className="frame-14">
                  <div className="text-wrapper-17">2023</div>
                  <div className="text-wrapper-6">96K sold so far</div>
                </div>
              </div>
              <div className="widget-5">
                <div className="text-wrapper-16">Top buyer</div>
                <div className="frame-15">
                  <Avatar className="avatar-6" />
                  <div className="frame-16">
                    <div className="text-wrapper-19">Maggie Johnson</div>
                    <div className="text-wrapper-20">Oasis Organic Inc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="widget-6">
            <div className="heading-4">
              <div className="text-wrapper-4">Chats</div>
              <div className="text-wrapper-6">2 unread messages</div>
            </div>
            <div className="customer-3">
              <div className="frame-17">
                <Avatar className="avatar-3" />
                <div className="ellipse-6" />
              </div>
              <div className="frame-17">
                <Avatar className="avatar-7" />
                <div className="ellipse-6" />
              </div>
              <div className="avatar-wrapper">
                <Avatar className="avatar-8" />
              </div>
              <div className="avatar-wrapper">
                <Avatar className="avatar-9" />
              </div>
            </div>
            <div className="frame-18">
              <div className="frame-4">
                <div className="text-wrapper-7">All messages</div>
                <ConcreteComponentNode icon="tabler-icon-arrow-narrow-right" />
              </div>
            </div>
          </div>
          <div className="widget-6">
            <div className="heading-4">
              <div className="text-wrapper-4">Top states</div>
            </div>
            <div className="bar-3">
              <div className="text-wrapper-21">NY</div>
              <div className="element">120K</div>
            </div>
            <div className="bar-4">
              <div className="text-wrapper-21">MA</div>
              <div className="element-k">80K</div>
            </div>
            <div className="bar-5">
              <div className="text-wrapper-21">NH</div>
              <div className="element-2">70K</div>
            </div>
            <div className="bar-6">
              <div className="text-wrapper-21">OR</div>
              <div className="element-3">50K</div>
            </div>
          </div>
          <div className="widget-7">
            <div className="heading-4">
              <div className="text-wrapper-4">New deals</div>
            </div>
            <div className="frame-19">
              <div className="frame-20">
                <IconTablerIconSquareRoundedPlus className="icon-tabler-icon-square-rounded-plus" color="#FFA500" />
                <div className="text-wrapper-22">Fruit2Go</div>
              </div>
              <div className="frame-20">
                <IconTablerIconSquareRoundedPlus className="icon-tabler-icon-square-rounded-plus" color="#FFA500" />
                <div className="text-wrapper-22">Marshall&#39;s MKT</div>
              </div>
              <div className="frame-20">
                <IconTablerIconSquareRoundedPlus className="icon-tabler-icon-square-rounded-plus" color="#FFA500" />
                <div className="text-wrapper-22">CCNT</div>
              </div>
              <div className="frame-20">
                <IconTablerIconSquareRoundedPlus className="icon-tabler-icon-square-rounded-plus" color="#FFA500" />
                <div className="text-wrapper-22">Joana Mini-market</div>
              </div>
              <div className="frame-20">
                <IconTablerIconSquareRoundedPlus className="icon-tabler-icon-square-rounded-plus" color="#FFA500" />
                <div className="text-wrapper-22">Little Brazil Vegan</div>
              </div>
              <div className="frame-20">
                <IconFromTablerIo className="icon-from-tabler-io-instance" />
                <div className="text-wrapper-22">Target</div>
              </div>
              <div className="frame-20">
                <IconFromTablerIo className="icon-from-tabler-io-instance" />
                <div className="text-wrapper-22">Organic Place</div>
              </div>
              <div className="frame-20">
                <IconFromTablerIo className="icon-from-tabler-io-instance" />
                <div className="text-wrapper-22">Morello&#39;s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
