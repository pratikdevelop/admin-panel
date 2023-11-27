/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import * as d3 from "d3";
import { useState, useEffect, useRef } from "react";
const LinePlot = () => {
    // Specify the chart’s dimensions.
    const [data, setData] = useState([60,20,45,25,90, 70]);
    const svgRef = useRef()
    const width = 800;
    const height = 200; 

    // useEffect(() => {
    //   const chartData = [];
    //   for (let i = 0; i < 30; i++) {
    //     const x = Math.round(Math.random() * 100); // Adjust the range as needed
    //     const y = Math.round(Math.random() * 100); // Adjust the range as needed
    //     chartData.push(x);
    //   }
    //   setData(chartData);
    // }, [])
    
  useEffect(() => {
   
    const svg = d3.select(svgRef.current);
    svg.attr("width", d=>d).attr("height", 300).style('overflow', 'visible').style('padding' ,'2rem');

    const xScale = d3.scaleLinear().domain([0, data.length-1]).range([0,width]);
    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);
    const generateScaledLine = d3.line().x((d,i)=>xScale(i)).y(yScale).curve(d3.curveCardinal)

    const xAxis = d3.axisBottom(xScale).ticks(data.length-1).tickFormat(i=>i+1);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${height})`);
    svg.append('g').call(yAxis);

    svg.selectAll(".line").data([data]).join('path').attr('d', d=>generateScaledLine(d)).attr('fill', 'none').attr('stroke', 'black');
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default LinePlot;
