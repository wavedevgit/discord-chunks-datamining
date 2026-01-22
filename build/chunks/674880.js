/** Chunk was on 47950 **/
/** chunk id: 674880, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk655972 = require("./655972.js"),
  a = require.n(Chunk655972),
  Chunk205662 = require("./205662.js"),
  Chunk920385 = require("./920385.js"),
  Chunk708005 = require("./708005.js"),
  Chunk660851 = require("./660851.js"),
  Chunk79575 = require("./79575.js"),
  Chunk33349 = require("./33349.js"),
  d = function(e) {
    var t = e.width,
      r = e.onChange,
      o = e.rgb,
      a = e.hsl,
      d = e.hsv,
      f = e.hex,
      h = e.header,
      b = e.styles,
      v = e.className,
      g = (0, i.default)((0, l.A)({
        default: {
          picker: {
            width: t,
            background: "#fff",
            border: "1px solid #dfe1e5",
            boxSizing: "initial",
            display: "flex",
            flexWrap: "wrap",
            borderRadius: "8px 8px 0px 0px"
          },
          head: {
            height: "57px",
            width: "100%",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "16px",
            fontSize: "20px",
            boxSizing: "border-box",
            fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
          },
          saturation: {
            width: "70%",
            padding: "0px",
            position: "relative",
            overflow: "hidden"
          },
          swatch: {
            width: "30%",
            height: "228px",
            padding: "0px",
            background: "rgba(" + o.r + ", " + o.g + ", " + o.b + ", 1)",
            position: "relative",
            overflow: "hidden"
          },
          body: {
            margin: "auto",
            width: "95%"
          },
          controls: {
            display: "flex",
            boxSizing: "border-box",
            height: "52px",
            paddingTop: "22px"
          },
          color: {
            width: "32px"
          },
          hue: {
            height: "8px",
            position: "relative",
            margin: "0px 16px 0px 16px",
            width: "100%"
          },
          Hue: {
            radius: "2px"
          }
        }
      }, true === b ? {} : b));
    return n.createElement("div", {
      style: g.picker,
      className: "google-picker " + (true === v ? "" : v)
    }, n.createElement("div", {
      style: g.head
    }, h), n.createElement("div", {
      style: g.swatch
    }), n.createElement("div", {
      style: g.saturation
    }, n.createElement(s.VI, {
      hsl: a,
      hsv: d,
      pointer: u.A,
      onChange: r
    })), n.createElement("div", {
      style: g.body
    }, n.createElement("div", {
      style: g.controls,
      className: "flexbox-fix"
    }, n.createElement("div", {
      style: g.hue
    }, n.createElement(s.RG, {
      style: g.Hue,
      hsl: a,
      radius: "4px",
      pointer: c.A,
      onChange: r
    }))), n.createElement(p.A, {
      rgb: o,
      hsl: a,
      hex: f,
      hsv: d,
      onChange: r
    })))
  };
d.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  styles: a().object,
  header: a().string
}, d.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
}, (0, Chunk708005.Q$)(d)