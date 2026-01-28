/** Chunk was on 78528 **/
/** chunk id: 436133, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk129353 = require("./129353.js");

function c(e) {
  let {
    className: t,
    embeddedApps: n,
    muted: l
  } = e;
  if (n.length <= 0) return null;
  {
    if (1 === n.length) return (0, r.jsx)("div", {
      className: i()(o.kL, t, l && o.F4),
      children: (0, r.jsx)(a.A, {
        game: n[0].application,
        className: o.wK
      })
    });
    let e = n.length - 1;
    return (0, r.jsxs)("div", {
      className: i()(o.kL, t, l && o.F4),
      children: [(0, r.jsx)(a.A, {
        game: n[0].application,
        className: o.wK
      }), 2 === n.length ? (0, r.jsx)(a.A, {
        game: n[1].application,
        className: o.wK
      }) : (0, r.jsx)(s.Text, {
        className: o.ju,
        variant: "text-xs/bold",
        color: "interactive-text-active",
        children: "+".concat(e)
      })]
    })
  }
}