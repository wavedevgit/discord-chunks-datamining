/** Chunk was on 47950 **/
/** chunk id: 264978, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk655972 = require("./655972.js"),
  a = require.n(Chunk655972),
  Chunk205662 = require("./205662.js"),
  Chunk981735 = require("./981735.js"),
  Chunk920385 = require("./920385.js"),
  Chunk920515 = require("./920515.js"),
  Chunk708005 = require("./708005.js"),
  Chunk759551 = require("./759551.js"),
  d = function(e) {
    var t = e.width,
      r = e.height,
      o = e.onChange,
      a = e.onSwatchHover,
      u = e.colors,
      d = e.hex,
      f = e.styles,
      h = e.className,
      b = (0, i.default)((0, s.A)({
        default: {
          picker: {
            width: t,
            height: r
          },
          overflow: {
            height: r,
            overflowY: "scroll"
          },
          body: {
            padding: "16px 0 6px 16px"
          },
          clear: {
            clear: "both"
          }
        }
      }, true === f ? {} : f)),
      v = function(e, t) {
        return o({
          hex: e,
          source: "hex"
        }, t)
      };
    return n.createElement("div", {
      style: b.picker,
      className: "swatches-picker " + (true === h ? "" : h)
    }, n.createElement(c.H1, null, n.createElement("div", {
      style: b.overflow
    }, n.createElement("div", {
      style: b.body
    }, (0, l.A)(u, function(e) {
      return n.createElement(p.A, {
        key: e.toString(),
        group: e,
        active: d,
        onClick: v,
        onSwatchHover: a
      })
    }), n.createElement("div", {
      style: b.clear
    })))))
  };
d.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  height: a().oneOfType([a().string, a().number]),
  colors: a().arrayOf(a().arrayOf(a().string)),
  styles: a().object
}, d.defaultProps = {
  width: 320,
  height: 240,
  colors: [
    [Chunk920515.wv["900"], Chunk920515.wv["700"], Chunk920515.wv["500"], Chunk920515.wv["300"], Chunk920515.wv["100"]],
    [Chunk920515.Vu["900"], Chunk920515.Vu["700"], Chunk920515.Vu["500"], Chunk920515.Vu["300"], Chunk920515.Vu["100"]],
    [Chunk920515.Zp["900"], Chunk920515.Zp["700"], Chunk920515.Zp["500"], Chunk920515.Zp["300"], Chunk920515.Zp["100"]],
    [Chunk920515.Jc["900"], Chunk920515.Jc["700"], Chunk920515.Jc["500"], Chunk920515.Jc["300"], Chunk920515.Jc["100"]],
    [Chunk920515.xV["900"], Chunk920515.xV["700"], Chunk920515.xV["500"], Chunk920515.xV["300"], Chunk920515.xV["100"]],
    [Chunk920515.z1["900"], Chunk920515.z1["700"], Chunk920515.z1["500"], Chunk920515.z1["300"], Chunk920515.z1["100"]],
    [Chunk920515.tD["900"], Chunk920515.tD["700"], Chunk920515.tD["500"], Chunk920515.tD["300"], Chunk920515.tD["100"]],
    [Chunk920515.Q_["900"], Chunk920515.Q_["700"], Chunk920515.Q_["500"], Chunk920515.Q_["300"], Chunk920515.Q_["100"]],
    [Chunk920515.$S["900"], Chunk920515.$S["700"], Chunk920515.$S["500"], Chunk920515.$S["300"], Chunk920515.$S["100"]],
    ["#194D33", Chunk920515.wL["700"], Chunk920515.wL["500"], Chunk920515.wL["300"], Chunk920515.wL["100"]],
    [Chunk920515.EM["900"], Chunk920515.EM["700"], Chunk920515.EM["500"], Chunk920515.EM["300"], Chunk920515.EM["100"]],
    [Chunk920515.Gg["900"], Chunk920515.Gg["700"], Chunk920515.Gg["500"], Chunk920515.Gg["300"], Chunk920515.Gg["100"]],
    [Chunk920515.D9["900"], Chunk920515.D9["700"], Chunk920515.D9["500"], Chunk920515.D9["300"], Chunk920515.D9["100"]],
    [Chunk920515.Gi["900"], Chunk920515.Gi["700"], Chunk920515.Gi["500"], Chunk920515.Gi["300"], Chunk920515.Gi["100"]],
    [Chunk920515.T_["900"], Chunk920515.T_["700"], Chunk920515.T_["500"], Chunk920515.T_["300"], Chunk920515.T_["100"]],
    [Chunk920515.jr["900"], Chunk920515.jr["700"], Chunk920515.jr["500"], Chunk920515.jr["300"], Chunk920515.jr["100"]],
    [Chunk920515.Xk["900"], Chunk920515.Xk["700"], Chunk920515.Xk["500"], Chunk920515.Xk["300"], Chunk920515.Xk["100"]],
    [Chunk920515.U6["900"], Chunk920515.U6["700"], Chunk920515.U6["500"], Chunk920515.U6["300"], Chunk920515.U6["100"]],
    ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
  ],
  styles: {}
}, (0, Chunk708005.Q$)(d)