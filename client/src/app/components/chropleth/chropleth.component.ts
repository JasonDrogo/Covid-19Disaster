
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CurrentLocation } from './../currentlocation';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chropleth',
  templateUrl: './chropleth.component.html',
  styleUrls: ['./chropleth.component.css']
})
export class ChroplethComponent implements OnInit {

  @Output() pushToParent = new EventEmitter<String>();

  constructor(private http: HttpClient) { }
  // inputData : any;
  currLocation = new CurrentLocation;
  startPos: any;
  isWait: boolean;

  sendCountry(d) {
    this.pushToParent.emit(d);
  }

  ngOnInit() {
    this.isWait = true;

    // this.service.getHotSpots().subscribe(data => {
    //   console.log(data);
    //   this.inputData = data;
    // })


    let style = window.getComputedStyle(document.querySelector("#map"));

    let width = parseFloat(style.width.replace("px", ""));
    let height = parseFloat(style.height.replace("px", ""));

    var projection = d3.geoMercator()
      .center([80, 23])
      .scale(800)
      .translate([width / 2, height / 2])

    var path = d3.geoPath().projection(projection);

    var svg = d3.selectAll("#map")
      .attr("width", width)
      .attr("height", height);

    var touchedPoint = null;
    var abc = this;
    var WorldData;


    this.http.get("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").subscribe(WorldJson => {

      this.isWait = false;
      WorldData = WorldJson;
      // console.log(indiaData);
      // console.log(topojson.feature(indiaData, indiaData.objects.Indian_States).features);
      svg.append("g").selectAll('path')
        .data(topojson.feature(WorldData, WorldData.objects.countries).features)
        .enter()
        .append('path')
        .attr("d", function (abc) { return path(abc); })
        .style('fill', '#8cea8e')
        .style('stroke', 'cornsilk')
        .style('stroke-width', '1px')
        .style('opacity', '0.5')
        .on('mouseover', function (d) {
          d3.select(this).style('fill', '#4c4b47').style('opacity', '1.0').style('stroke-width', '2px').attr('cursor', 'pointer').append("svg:title")
            .text(function (d) { return d.properties.name });
          abc.sendCountry(d.properties.name);
          console.log(d.properties.name);

        })
        .on('mouseleave', function () {
          abc.sendCountry('All');
          d3.select(this).style('fill', '#8cea8e').style('stroke-width', '1px').style('opacity', '0.5');
        });


      svg.call(d3.zoom()
        .extent([[0, 0], [width, height]])
        .scaleExtent([1, 8])
        .on("zoom", zoomed));

      function zoomed() {
        svg.select('g').attr("transform", d3.event.transform);
      }

      d3.select('#zoom-in').on('click', function () {
        d3.zoom()
          .on('zoom', zoomed)
          .scaleBy(svg.transition().duration(750), 1.3);
      });

      d3.select('#zoom-out').on('click', function () {
        d3.zoom()
          .on('zoom', zoomed)
          .scaleBy(svg.transition().duration(750), 1 / 1.3);
      });
    });

  }

}
