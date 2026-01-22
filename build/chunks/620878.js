/** Chunk was on 47950 **/
/** chunk id: 620878, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk655972 = require("./655972.js"),
  a = require.n(Chunk655972),
  Chunk205662 = require("./205662.js"),
  Chunk920385 = require("./920385.js"),
  Chunk708005 = require("./708005.js"),
  Chunk277163 = require("./277163.js"),
  Chunk673773 = require("./673773.js"),
  Chunk338069 = require("./338069.js"),
  d = function(e) {
    var t = e.width,
      r = e.onChange,
      o = e.disableAlpha,
      a = e.rgb,
      d = e.hsl,
      f = e.hsv,
      h = e.hex,
      b = e.renderers,
      v = e.styles,
      g = e.className,
      x = e.defaultView,
      y = (0, i.default)((0, l.A)({
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
    }, n.createElement(s.VI, {
      style: y.Saturation,
      hsl: d,
      hsv: f,
      pointer: p.A,
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
    }), n.createElement(s.xu, {
      renderers: b
    }))), n.createElement("div", {
      style: y.toggles
    }, n.createElement("div", {
      style: y.hue
    }, n.createElement(s.RG, {
      style: y.Hue,
      hsl: d,
      pointer: c.A,
      onChange: r
    })), n.createElement("div", {
      style: y.alpha
    }, n.createElement(s.ry, {
      style: y.Alpha,
      rgb: a,
      hsl: d,
      pointer: c.A,
      renderers: b,
      onChange: r
    })))), n.createElement(u.A, {
      rgb: a,
      hsl: d,
      hex: h,
      view: x,
      onChange: r,
      disableAlpha: o
    })))
  };
d.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  disableAlpha: a().bool,
  styles: a().object,
  defaultView: a().oneOf(["hex", "rgb", "hsl"])
}, d.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
}, (0, Chunk708005.Q$)(d)