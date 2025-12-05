/** Chunk was on 66382 **/
/** chunk id: 696819, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk857614 = require("./857614.js"),
  Chunk829307 = require("./829307.js"),
  Chunk857108 = require("./857108.js"),
  Chunk894064 = require("./894064.js"),
  Chunk31848 = require("./31848.js"),
  p = function(e) {
    var t = e.onChange,
      r = e.onSwatchHover,
      o = e.hex,
      a = e.colors,
      p = e.width,
      f = e.triangle,
      d = e.styles,
      h = e.className,
      b = "transparent" === o,
      v = function(e, r) {
        s.FX(e) && t({
          hex: e,
          source: "hex"
        }, r)
      },
      g = (0, i.default)((0, l.Z)({
        default: {
          card: {
            width: p,
            background: "#fff",
            boxShadow: "0 1px rgba(0,0,0,.1)",
            borderRadius: "6px",
            position: "relative"
          },
          head: {
            height: "110px",
            background: o,
            borderRadius: "6px 6px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          },
          body: {
            padding: "10px"
          },
          label: {
            fontSize: "18px",
            color: s.Qg(o),
            position: "relative"
          },
          triangle: {
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 10px 10px 10px",
            borderColor: "transparent transparent " + o + " transparent",
            position: "absolute",
            top: "-10px",
            left: "50%",
            marginLeft: "-10px"
          },
          input: {
            width: "100%",
            fontSize: "12px",
            color: "#666",
            border: "0px",
            outline: "none",
            height: "22px",
            boxShadow: "inset 0 0 0 1px #ddd",
            borderRadius: "4px",
            padding: "0 7px",
            boxSizing: "border-box"
          }
        },
        "hide-triangle": {
          triangle: {
            display: "none"
          }
        }
      }, true === d ? {} : d), {
        "hide-triangle": "hide" === f
      });
    return n.createElement("div", {
      style: g.card,
      className: "block-picker " + (true === h ? "" : h)
    }, n.createElement("div", {
      style: g.triangle
    }), n.createElement("div", {
      style: g.head
    }, b && n.createElement(u.QN, {
      borderRadius: "6px 6px 0 0"
    }), n.createElement("div", {
      style: g.label
    }, o)), n.createElement("div", {
      style: g.body
    }, n.createElement(c.Z, {
      colors: a,
      onClick: v,
      onSwatchHover: r
    }), n.createElement(u.Vm, {
      style: {
        input: g.input
      },
      value: o,
      onChange: v
    })))
  };
p.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  colors: a().arrayOf(a().string),
  triangle: a().oneOf(["top", "hide"]),
  styles: a().object
}, p.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
}, (0, Chunk894064.t1)(p)