/** Chunk was on 26628 **/
/** chunk id: 687352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk954734 = require("./954734.js");

function c(e) {
  let {
    className: t,
    embeddedApps: n,
    muted: i
  } = e;
  if (n.length <= 0) return null;
  {
    if (1 === n.length) return (0, r.jsx)("div", {
      className: l()(a.container, t, i && a.modeMuted),
      children: (0, r.jsx)(s.Z, {
        game: n[0].application,
        className: a.icon20px
      })
    });
    let e = n.length - 1;
    return (0, r.jsxs)("div", {
      className: l()(a.container, t, i && a.modeMuted),
      children: [(0, r.jsx)(s.Z, {
        game: n[0].application,
        className: a.icon20px
      }), 2 === n.length ? (0, r.jsx)(s.Z, {
        game: n[1].application,
        className: a.icon20px
      }) : (0, r.jsx)(o.Text, {
        className: a.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}