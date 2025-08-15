/** Chunk was on 3115 **/
/** chunk id: 142050, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk647438 = require("./647438.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk782497 = require("./782497.js"),
  Chunk329022 = require("./329022.js"),
  Chunk829307 = require("./829307.js"),
  Chunk557235 = require("./557235.js"),
  Chunk962438 = require("./962438.js"),
  Chunk92311 = require("./92311.js"),
  Chunk703797 = require("./703797.js"),
  d = function(e) {
    var t = e.onChange,
      r = e.onSwatchHover,
      o = e.colors,
      a = e.hex,
      d = e.rgb,
      h = e.styles,
      b = true === h ? {} : h,
      v = e.className,
      g = (0, i.default)((0, s.Z)({
        default: {
          Compact: {
            background: "#f6f6f6",
            radius: "4px"
          },
          compact: {
            paddingTop: "5px",
            paddingLeft: "5px",
            boxSizing: "initial",
            width: "240px"
          },
          clear: {
            clear: "both"
          }
        }
      }, b)),
      x = function(e, r) {
        e.hex ? u.FX(e.hex) && t({
          hex: e.hex,
          source: "hex"
        }, r) : t(e, r)
      };
    return n.createElement(c.xZ, {
      style: g.Compact,
      styles: b
    }, n.createElement("div", {
      style: g.compact,
      className: "compact-picker " + (true === v ? "" : v)
    }, n.createElement("div", null, (0, l.Z)(o, function(e) {
      return n.createElement(p.Z, {
        key: e,
        color: e,
        active: e.toLowerCase() === a,
        onClick: x,
        onSwatchHover: r
      })
    }), n.createElement("div", {
      style: g.clear
    })), n.createElement(f.Z, {
      hex: a,
      rgb: d,
      onChange: x
    })))
  };
d.propTypes = {
  colors: a().arrayOf(a().string),
  styles: a().object
}, d.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
}, (0, Chunk962438.t1)(d)