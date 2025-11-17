/** Chunk was on 66382 **/
/** chunk id: 879418, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk857614 = require("./857614.js"),
  Chunk329022 = require("./329022.js"),
  Chunk829307 = require("./829307.js"),
  Chunk705513 = require("./705513.js"),
  Chunk894064 = require("./894064.js"),
  Chunk519697 = require("./519697.js"),
  f = function(e) {
    var t = e.width,
      r = e.onChange,
      o = e.onSwatchHover,
      a = e.colors,
      u = e.hex,
      c = e.circleSize,
      f = e.styles,
      d = e.circleSpacing,
      h = e.className,
      b = (0, i.default)((0, s.Z)({
        default: {
          card: {
            width: t,
            display: "flex",
            flexWrap: "wrap",
            marginRight: -d,
            marginBottom: -d
          }
        }
      }, true === f ? {} : f)),
      v = function(e, t) {
        return r({
          hex: e,
          source: "hex"
        }, t)
      };
    return n.createElement("div", {
      style: b.card,
      className: "circle-picker " + (true === h ? "" : h)
    }, (0, l.Z)(a, function(e) {
      return n.createElement(p.Z, {
        key: e,
        color: e,
        onClick: v,
        onSwatchHover: o,
        active: u === e.toLowerCase(),
        circleSize: c,
        circleSpacing: d
      })
    }))
  };
f.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  circleSize: a().number,
  circleSpacing: a().number,
  styles: a().object
}, f.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [Chunk705513.Q6["500"], Chunk705513.iQ["500"], Chunk705513.jk["500"], Chunk705513.vq["500"], Chunk705513.QN["500"], Chunk705513.iN["500"], Chunk705513.f7["500"], Chunk705513.sl["500"], Chunk705513.$C["500"], Chunk705513.ek["500"], Chunk705513.ZE["500"], Chunk705513.LR["500"], Chunk705513.er["500"], Chunk705513.Dz["500"], Chunk705513.$y["500"], Chunk705513.bK["500"], Chunk705513.P_["500"], Chunk705513.BU["500"]],
  styles: {}
}, (0, Chunk894064.t1)(f)