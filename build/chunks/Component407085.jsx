/** Chunk was on 66548 **/
/** chunk id: 407085, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  W: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk561779 = require("./561779.jsx");
let o = {
  title: "Slider",
  stories: [{
    id: "slider",
    name: "Slider",
    component: function(e) {
      let {
        minValue: l,
        maxValue: t,
        initialValue: o,
        markerCount: i,
        stickToMarkers: r,
        disabled: s,
        equidistant: u
      } = e, d = i > 0 ? Array.from({
        length: i
      }, (e, a) => Math.floor(l + a / (i - 1) * (t - l))) : true;
      return (0, a.jsx)(n.i, {
        minValue: l,
        maxValue: t,
        initialValue: o,
        markers: d,
        stickToMarkers: r,
        disabled: s,
        equidistant: u
      }, i)
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