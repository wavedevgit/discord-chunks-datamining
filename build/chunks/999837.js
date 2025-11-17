/** Chunk was on 66382 **/
/** chunk id: 999837, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk857614 = require("./857614.js"),
  Chunk329022 = require("./329022.js"),
  Chunk829307 = require("./829307.js"),
  Chunk705513 = require("./705513.js"),
  Chunk894064 = require("./894064.js"),
  Chunk770512 = require("./770512.js"),
  f = function(e) {
    var t = e.width,
      r = e.height,
      o = e.onChange,
      a = e.onSwatchHover,
      u = e.colors,
      f = e.hex,
      d = e.styles,
      h = e.className,
      b = (0, i.default)((0, s.Z)({
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
      }, true === d ? {} : d)),
      v = function(e, t) {
        return o({
          hex: e,
          source: "hex"
        }, t)
      };
    return n.createElement("div", {
      style: b.picker,
      className: "swatches-picker " + (true === h ? "" : h)
    }, n.createElement(c.xZ, null, n.createElement("div", {
      style: b.overflow
    }, n.createElement("div", {
      style: b.body
    }, (0, l.Z)(u, function(e) {
      return n.createElement(p.Z, {
        key: e.toString(),
        group: e,
        active: f,
        onClick: v,
        onSwatchHover: a
      })
    }), n.createElement("div", {
      style: b.clear
    })))))
  };
f.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  height: a().oneOfType([a().string, a().number]),
  colors: a().arrayOf(a().arrayOf(a().string)),
  styles: a().object
}, f.defaultProps = {
  width: 320,
  height: 240,
  colors: [
    [Chunk705513.Q6["900"], Chunk705513.Q6["700"], Chunk705513.Q6["500"], Chunk705513.Q6["300"], Chunk705513.Q6["100"]],
    [Chunk705513.iQ["900"], Chunk705513.iQ["700"], Chunk705513.iQ["500"], Chunk705513.iQ["300"], Chunk705513.iQ["100"]],
    [Chunk705513.jk["900"], Chunk705513.jk["700"], Chunk705513.jk["500"], Chunk705513.jk["300"], Chunk705513.jk["100"]],
    [Chunk705513.vq["900"], Chunk705513.vq["700"], Chunk705513.vq["500"], Chunk705513.vq["300"], Chunk705513.vq["100"]],
    [Chunk705513.QN["900"], Chunk705513.QN["700"], Chunk705513.QN["500"], Chunk705513.QN["300"], Chunk705513.QN["100"]],
    [Chunk705513.iN["900"], Chunk705513.iN["700"], Chunk705513.iN["500"], Chunk705513.iN["300"], Chunk705513.iN["100"]],
    [Chunk705513.f7["900"], Chunk705513.f7["700"], Chunk705513.f7["500"], Chunk705513.f7["300"], Chunk705513.f7["100"]],
    [Chunk705513.sl["900"], Chunk705513.sl["700"], Chunk705513.sl["500"], Chunk705513.sl["300"], Chunk705513.sl["100"]],
    [Chunk705513.$C["900"], Chunk705513.$C["700"], Chunk705513.$C["500"], Chunk705513.$C["300"], Chunk705513.$C["100"]],
    ["#194D33", Chunk705513.ek["700"], Chunk705513.ek["500"], Chunk705513.ek["300"], Chunk705513.ek["100"]],
    [Chunk705513.ZE["900"], Chunk705513.ZE["700"], Chunk705513.ZE["500"], Chunk705513.ZE["300"], Chunk705513.ZE["100"]],
    [Chunk705513.LR["900"], Chunk705513.LR["700"], Chunk705513.LR["500"], Chunk705513.LR["300"], Chunk705513.LR["100"]],
    [Chunk705513.er["900"], Chunk705513.er["700"], Chunk705513.er["500"], Chunk705513.er["300"], Chunk705513.er["100"]],
    [Chunk705513.Dz["900"], Chunk705513.Dz["700"], Chunk705513.Dz["500"], Chunk705513.Dz["300"], Chunk705513.Dz["100"]],
    [Chunk705513.$y["900"], Chunk705513.$y["700"], Chunk705513.$y["500"], Chunk705513.$y["300"], Chunk705513.$y["100"]],
    [Chunk705513.bK["900"], Chunk705513.bK["700"], Chunk705513.bK["500"], Chunk705513.bK["300"], Chunk705513.bK["100"]],
    [Chunk705513.P_["900"], Chunk705513.P_["700"], Chunk705513.P_["500"], Chunk705513.P_["300"], Chunk705513.P_["100"]],
    [Chunk705513.BU["900"], Chunk705513.BU["700"], Chunk705513.BU["500"], Chunk705513.BU["300"], Chunk705513.BU["100"]],
    ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
  ],
  styles: {}
}, (0, Chunk894064.t1)(f)