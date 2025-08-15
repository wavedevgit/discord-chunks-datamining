/** Chunk was on 3115 **/
/** chunk id: 379921, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk647438 = require("./647438.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk782497 = require("./782497.js"),
  Chunk829307 = require("./829307.js"),
  Chunk962438 = require("./962438.js"),
  Chunk376823 = require("./376823.js"),
  Chunk267131 = require("./267131.js"),
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
  pointer: Chunk267131.Z,
  styles: {}
}, (0, Chunk962438.t1)(p)