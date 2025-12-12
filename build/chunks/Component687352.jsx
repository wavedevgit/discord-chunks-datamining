/** Chunk was on 51235 **/
/** chunk id: 687352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk829592 = require("./829592.js");

function c(e) {
  let {
    className: t,
    embeddedApps: n,
    muted: i
  } = e;
  if (n.length <= 0) return null;
  {
    if (1 === n.length) return (0, r.jsx)("div", {
      className: l()(s.container, t, i && s.modeMuted),
      children: (0, r.jsx)(o.Z, {
        game: n[0].application,
        className: s.icon20px
      })
    });
    let e = n.length - 1;
    return (0, r.jsxs)("div", {
      className: l()(s.container, t, i && s.modeMuted),
      children: [(0, r.jsx)(o.Z, {
        game: n[0].application,
        className: s.icon20px
      }), 2 === n.length ? (0, r.jsx)(o.Z, {
        game: n[1].application,
        className: s.icon20px
      }) : (0, r.jsx)(a.Text, {
        className: s.overflow,
        variant: "text-xs/bold",
        color: "interactive-text-active",
        children: "+".concat(e)
      })]
    })
  }
}