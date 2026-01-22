/** Chunk was on 47950 **/
/** chunk id: 75884, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk655972 = require("./655972.js"),
  a = require.n(Chunk655972),
  Chunk205662 = require("./205662.js"),
  Chunk920385 = require("./920385.js"),
  Chunk708005 = require("./708005.js"),
  Chunk370244 = require("./370244.js"),
  Chunk696107 = require("./696107.js"),
  p = function(e) {
    var t = e.hsl,
      r = e.onChange,
      o = e.pointer,
      a = e.styles,
      c = e.className,
      p = (0, i.default)((0, l.A)({
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
    }, n.createElement(s.RG, {
      style: p.Hue,
      hsl: t,
      pointer: o,
      onChange: r
    })), n.createElement("div", {
      style: p.swatches
    }, n.createElement(u.A, {
      hsl: t,
      onClick: r
    })))
  };
p.propTypes = {
  styles: a().object
}, p.defaultProps = {
  pointer: Chunk696107.A,
  styles: {}
}, (0, Chunk708005.Q$)(p)