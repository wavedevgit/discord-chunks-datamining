/** Chunk was on 3115 **/
/** chunk id: 161662, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk647438 = require("./647438.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk782497 = require("./782497.js"),
  Chunk829307 = require("./829307.js"),
  Chunk962438 = require("./962438.js"),
  Chunk538742 = require("./538742.js"),
  Chunk26105 = require("./26105.js"),
  Chunk103282 = require("./103282.js"),
  f = function(e) {
    var t = e.width,
      r = e.onChange,
      o = e.disableAlpha,
      a = e.rgb,
      f = e.hsl,
      d = e.hsv,
      h = e.hex,
      b = e.renderers,
      v = e.styles,
      g = e.className,
      x = e.defaultView,
      y = (0, i.default)((0, l.Z)({
        default: {
          picker: {
            width: t,
            background: "#fff",
            borderRadius: "2px",
            boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
            boxSizing: "initial",
            fontFamily: "Menlo"
          },
          saturation: {
            width: "100%",
            paddingBottom: "55%",
            position: "relative",
            borderRadius: "2px 2px 0 0",
            overflow: "hidden"
          },
          Saturation: {
            radius: "2px 2px 0 0"
          },
          body: {
            padding: "16px 16px 12px"
          },
          controls: {
            display: "flex"
          },
          color: {
            width: "32px"
          },
          swatch: {
            marginTop: "6px",
            width: "16px",
            height: "16px",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden"
          },
          active: {
            absolute: "0px 0px 0px 0px",
            borderRadius: "8px",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
            background: "rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + a.a + ")",
            zIndex: "2"
          },
          toggles: {
            flex: "1"
          },
          hue: {
            height: "10px",
            position: "relative",
            marginBottom: "8px"
          },
          Hue: {
            radius: "2px"
          },
          alpha: {
            height: "10px",
            position: "relative"
          },
          Alpha: {
            radius: "2px"
          }
        },
        disableAlpha: {
          color: {
            width: "22px"
          },
          alpha: {
            display: "none"
          },
          hue: {
            marginBottom: "0px"
          },
          swatch: {
            width: "10px",
            height: "10px",
            marginTop: "0px"
          }
        }
      }, true === v ? {} : v), {
        disableAlpha: o
      });
    return n.createElement("div", {
      style: y.picker,
      className: "chrome-picker " + (true === g ? "" : g)
    }, n.createElement("div", {
      style: y.saturation
    }, n.createElement(s.OQ, {
      style: y.Saturation,
      hsl: f,
      hsv: d,
      pointer: p.Z,
      onChange: r
    })), n.createElement("div", {
      style: y.body
    }, n.createElement("div", {
      style: y.controls,
      className: "flexbox-fix"
    }, n.createElement("div", {
      style: y.color
    }, n.createElement("div", {
      style: y.swatch
    }, n.createElement("div", {
      style: y.active
    }), n.createElement(s.QN, {
      renderers: b
    }))), n.createElement("div", {
      style: y.toggles
    }, n.createElement("div", {
      style: y.hue
    }, n.createElement(s.PS, {
      style: y.Hue,
      hsl: f,
      pointer: c.Z,
      onChange: r
    })), n.createElement("div", {
      style: y.alpha
    }, n.createElement(s.xV, {
      style: y.Alpha,
      rgb: a,
      hsl: f,
      pointer: c.Z,
      renderers: b,
      onChange: r
    })))), n.createElement(u.Z, {
      rgb: a,
      hsl: f,
      hex: h,
      view: x,
      onChange: r,
      disableAlpha: o
    })))
  };
f.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  disableAlpha: a().bool,
  styles: a().object,
  defaultView: a().oneOf(["hex", "rgb", "hsl"])
}, f.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
}, (0, Chunk962438.t1)(f)