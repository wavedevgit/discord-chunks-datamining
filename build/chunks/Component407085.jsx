/** Chunk was on web.js **/
/** chunk id: 407085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk561779 = require("./561779.jsx");
let a = {
  title: "Slider",
  stories: [{
    id: "slider",
    name: "Slider",
    component: function(e) {
      let {
        minValue: t,
        maxValue: n,
        initialValue: a,
        markerCount: o,
        stickToMarkers: s,
        disabled: l,
        equidistant: c
      } = e, u = o > 0 ? Array.from({
        length: o
      }, (e, r) => Math.floor(t + r / (o - 1) * (n - t))) : true;
      return (0, r.jsx)(i.i, {
        minValue: t,
        maxValue: n,
        initialValue: a,
        markers: u,
        stickToMarkers: s,
        disabled: l,
        equidistant: c
      }, o)
    },
    controls: {
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