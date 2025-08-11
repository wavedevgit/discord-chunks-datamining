/** Chunk was on 21153 **/
/** chunk id: 71802, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk73800 = require("./73800.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk9196 = require("./9196.js"),
  Chunk829307 = require("./829307.js"),
  Chunk116850 = require("./116850.js"),
  Chunk687545 = require("./687545.js"),
  Chunk216007 = require("./216007.js"),
  p = function(e) {
    var t = e.hsl,
      r = e.onChange,
      o = e.pointer,
      a = e.styles,
      c = e.className,
      p = (0, i.default)((0, l.Z)({
        default: {
          hue: {
            height: "12px",
            position: "relative"
          },
          Hue: {
            radius: "2px"
          }
        }
      }, true === a ? {} : a));
    return n.createElement("div", {
      style: p.wrap || {},
      className: "slider-picker " + (true === c ? "" : c)
    }, n.createElement("div", {
      style: p.hue
    }, n.createElement(s.PS, {
      style: p.Hue,
      hsl: t,
      pointer: o,
      onChange: r
    })), n.createElement("div", {
      style: p.swatches
    }, n.createElement(u.Z, {
      hsl: t,
      onClick: r
    })))
  };
p.propTypes = {
  styles: a().object
}, p.defaultProps = {
  pointer: Chunk216007.Z,
  styles: {}
}, (0, Chunk116850.t1)(p)