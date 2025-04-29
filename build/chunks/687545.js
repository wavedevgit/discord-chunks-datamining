/** Chunk was on 21153 **/
"use strict";
r.d(t, {
  Z: () => i
});
var n = r(73800),
  o = r(9196),
  a = r(435725);
let i = function(e) {
  var t = e.onClick,
    r = e.hsl,
    i = (0, o.default)({
      default: {
        swatches: {
          marginTop: "20px"
        },
        swatch: {
          boxSizing: "border-box",
          width: "20%",
          paddingRight: "1px",
          float: "left"
        },
        clear: {
          clear: "both"
        }
      }
    });
  return n.createElement("div", {
    style: i.swatches
  }, n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".80",
    active: .1 > Math.abs(r.l - .8) && .1 > Math.abs(r.s - .5),
    onClick: t,
    first: !0
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".65",
    active: .1 > Math.abs(r.l - .65) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".50",
    active: .1 > Math.abs(r.l - .5) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".35",
    active: .1 > Math.abs(r.l - .35) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".20",
    active: .1 > Math.abs(r.l - .2) && .1 > Math.abs(r.s - .5),
    onClick: t,
    last: !0
  })), n.createElement("div", {
    style: i.clear
  }))
}