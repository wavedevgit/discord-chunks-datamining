/** Chunk was on 66382 **/
/** chunk id: 411466, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk857614 = require("./857614.js"),
  Chunk829307 = require("./829307.js"),
  Chunk894064 = require("./894064.js"),
  Chunk5391 = require("./5391.js"),
  Chunk174031 = require("./174031.js"),
  Chunk752367 = require("./752367.js"),
  f = function(e) {
    var t = e.width,
      r = e.onChange,
      o = e.rgb,
      a = e.hsl,
      f = e.hsv,
      d = e.hex,
      h = e.header,
      b = e.styles,
      v = e.className,
      g = (0, i.default)((0, l.Z)({
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
    }, n.createElement(s.OQ, {
      hsl: a,
      hsv: f,
      pointer: u.C,
      onChange: r
    })), n.createElement("div", {
      style: g.body
    }, n.createElement("div", {
      style: g.controls,
      className: "flexbox-fix"
    }, n.createElement("div", {
      style: g.hue
    }, n.createElement(s.PS, {
      style: g.Hue,
      hsl: a,
      radius: "4px",
      pointer: c.Z,
      onChange: r
    }))), n.createElement(p.Z, {
      rgb: o,
      hsl: a,
      hex: d,
      hsv: f,
      onChange: r
    })))
  };
f.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  styles: a().object,
  header: a().string
}, f.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
}, (0, Chunk894064.t1)(f)