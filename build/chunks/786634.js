/** Chunk was on 47950 **/
/** chunk id: 786634, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk655972 = require("./655972.js"),
  a = require.n(Chunk655972),
  Chunk205662 = require("./205662.js"),
  Chunk981735 = require("./981735.js"),
  Chunk920385 = require("./920385.js"),
  Chunk920515 = require("./920515.js"),
  Chunk708005 = require("./708005.js"),
  Chunk872342 = require("./872342.js"),
  d = function(e) {
    var t = e.width,
      r = e.onChange,
      o = e.onSwatchHover,
      a = e.colors,
      u = e.hex,
      c = e.circleSize,
      d = e.styles,
      f = e.circleSpacing,
      h = e.className,
      b = (0, i.default)((0, s.A)({
        default: {
          card: {
            width: t,
            display: "flex",
            flexWrap: "wrap",
            marginRight: -f,
            marginBottom: -f
          }
        }
      }, true === d ? {} : d)),
      v = function(e, t) {
        return r({
          hex: e,
          source: "hex"
        }, t)
      };
    return n.createElement("div", {
      style: b.card,
      className: "circle-picker " + (true === h ? "" : h)
    }, (0, l.A)(a, function(e) {
      return n.createElement(p.A, {
        key: e,
        color: e,
        onClick: v,
        onSwatchHover: o,
        active: u === e.toLowerCase(),
        circleSize: c,
        circleSpacing: f
      })
    }))
  };
d.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  circleSize: a().number,
  circleSpacing: a().number,
  styles: a().object
}, d.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [Chunk920515.wv["500"], Chunk920515.Vu["500"], Chunk920515.Zp["500"], Chunk920515.Jc["500"], Chunk920515.xV["500"], Chunk920515.z1["500"], Chunk920515.tD["500"], Chunk920515.Q_["500"], Chunk920515.$S["500"], Chunk920515.wL["500"], Chunk920515.EM["500"], Chunk920515.Gg["500"], Chunk920515.D9["500"], Chunk920515.Gi["500"], Chunk920515.T_["500"], Chunk920515.jr["500"], Chunk920515.Xk["500"], Chunk920515.U6["500"]],
  styles: {}
}, (0, Chunk708005.Q$)(d)