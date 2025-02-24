/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(192379),
  i = n(723184),
  o = n(341518);
let a = function(e) {
  var t = e.onClick,
    n = e.hsl,
    a = (0, i.default)({
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
    }),
    s = .1;
  return r.createElement("div", {
    style: a.swatches
  }, r.createElement("div", {
    style: a.swatch
  }, r.createElement(o.Z, {
    hsl: n,
    offset: ".80",
    active: Math.abs(n.l - .8) < s && Math.abs(n.s - .5) < s,
    onClick: t,
    first: !0
  })), r.createElement("div", {
    style: a.swatch
  }, r.createElement(o.Z, {
    hsl: n,
    offset: ".65",
    active: Math.abs(n.l - .65) < s && Math.abs(n.s - .5) < s,
    onClick: t
  })), r.createElement("div", {
    style: a.swatch
  }, r.createElement(o.Z, {
    hsl: n,
    offset: ".50",
    active: Math.abs(n.l - .5) < s && Math.abs(n.s - .5) < s,
    onClick: t
  })), r.createElement("div", {
    style: a.swatch
  }, r.createElement(o.Z, {
    hsl: n,
    offset: ".35",
    active: Math.abs(n.l - .35) < s && Math.abs(n.s - .5) < s,
    onClick: t
  })), r.createElement("div", {
    style: a.swatch
  }, r.createElement(o.Z, {
    hsl: n,
    offset: ".20",
    active: Math.abs(n.l - .2) < s && Math.abs(n.s - .5) < s,
    onClick: t,
    last: !0
  })), r.createElement("div", {
    style: a.clear
  }))
}