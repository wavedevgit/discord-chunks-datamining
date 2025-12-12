/** Chunk was on web.js **/
/** chunk id: 407085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk561779 = require("./561779.jsx");
let o = {
  title: "Slider",
  stories: [{
    id: "slider",
    name: "Slider",
    component: function(e) {
      let {
        minValue: t,
        maxValue: n,
        initialValue: o,
        markerCount: a,
        stickToMarkers: s,
        disabled: l,
        equidistant: c,
        label: u,
        description: d
      } = e, f = a > 0 ? Array.from({
        length: a
      }, (e, r) => Math.floor(t + r / (a - 1) * (n - t))) : true;
      return (0, r.jsx)(i.i, {
        label: u,
        description: d,
        layout: "horizontal-responsive",
        minValue: t,
        maxValue: n,
        initialValue: o,
        markers: f,
        stickToMarkers: s,
        disabled: l,
        equidistant: c
      }, a)
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "This is a slider"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: "This is a description of the slider"
      },
      minValue: {
        type: "number",
        label: "Min Value",
        defaultValue: 0
      },
      maxValue: {
        type: "number",
        label: "Max Value",
        defaultValue: 100
      },
      initialValue: {
        type: "number",
        label: "Initial Value",
        defaultValue: 50
      },
      markerCount: {
        type: "number",
        label: "Marker Count",
        minValue: 3,
        defaultValue: 3
      },
      stickToMarkers: {
        type: "boolean",
        label: "Stick to Markers",
        defaultValue: false
      },
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      equidistant: {
        type: "boolean",
        label: "Equidistant",
        defaultValue: false
      }
    }
  }]
}