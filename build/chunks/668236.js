/** Chunk was on 66382 **/
/** chunk id: 668236, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk857614 = require("./857614.js"),
  Chunk829307 = require("./829307.js"),
  Chunk894064 = require("./894064.js"),
  Chunk879477 = require("./879477.js"),
  Chunk996213 = require("./996213.js"),
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
  pointer: Chunk996213.Z,
  styles: {}
}, (0, Chunk894064.t1)(p)