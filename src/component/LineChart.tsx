/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
// import * as d3 from 'd3';
import * as d3 from "d3";

const LineChart = () => {
  const chartRef = useRef();
  const data = [
    20,
    30,
    25,
    35,
    20,
    40,
    32,
    // Add more data points as needed
  ];

  const drawChart = () => {
    // Remove existing chart before drawing a new one
    d3.select(chartRef.current).selectAll('*').remove();

    const width = 600;
    const height = 400;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    // Set the ranges
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, height])
      .range([height, 0]);

    // Define the line
    const line = d3
      .line()
      .x((d) => xScale(d))
      .y(yScale)
      .curve(d3.curveCardinal); // Use a monotone curve

    // Add the X Axis
    const xAxis = d3.axisBottom(xScale).ticks(data.length-1).tickFormat(i=>i+1); // Show ticks every 5 days
    svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);

    // Add the Y Axis
    const yAxis = d3.axisLeft(yScale);
    svg.append("g").call(yAxis);

    // Add the line

    svg.selectAll(".line")
    .data([data])
      .join("path")
      .attr("d", d=>line(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  };

  useEffect(() => {
    drawChart();
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default LineChart;
