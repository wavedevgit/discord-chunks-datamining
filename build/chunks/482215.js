/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  K: () => d,
  i: () => u
});
var r = n(200651),
  i = n(15729),
  o = n(442837),
  a = n(857192),
  s = n(873467);
let l = 4,
  c = 64,
  u = (0, i.U)(e => ({
    horizontalSpacing: l,
    verticalSpacing: l,
    maxHorizontalSpacing: c,
    maxVerticalSpacing: c,
    setHorizontalSpacing: t => {
      e({
        horizontalSpacing: Math.round(Math.min(Math.max(t, 0), c))
      })
    },
    setVerticalSpacing: t => {
      e({
        verticalSpacing: Math.round(Math.min(Math.max(t, 0), c))
      })
    }
  }));

function d() {
  let e = (0, o.e7)([a.default], () => a.default.layoutDebuggingEnabled),
    {
      horizontalSpacing: t,
      verticalSpacing: n
    } = u();
  return e ? (0, r.jsx)("div", {
    className: s.container,
    children: (0, r.jsx)("div", {
      className: s.gridOverlay,
      "data-horizontal": t > 0,
      "data-vertical": n > 0,
      style: {
        "--custom-grid-horizontal-spacing": "".concat(t, "px"),
        "--custom-grid-vertical-spacing": "".concat(n, "px")
      }
    })
  }) : null
}