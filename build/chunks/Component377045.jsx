/** Chunk was on 67564 **/
/** chunk id: 377045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk353202 = require("./353202.js"),
  Chunk544028 = require("./544028.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk70461 = require("./70461.js");

function g(e) {
  let t, {
    channelId: g
  } = e;
  l.useEffect(() => {
    c.A.loadThread(g)
  });
  let m = (0, s.bG)([d.A], () => d.A.getGuildId()) === p.YYv,
    b = (0, s.bG)([u.A], () => u.A.theme);
  return t = m ? (0, r.jsx)(a.SGT, {
    note: h.intl.string(h.t["D5SN5/"]),
    children: h.intl.string(h.t.xVTAdb)
  }) : null != g ? (0, r.jsx)(a.y$y, {
    type: a.y$y.Type.SPINNING_CIRCLE
  }) : (0, r.jsx)(a.SGT, {
    note: h.intl.string(h.t["LTr+x9"]),
    children: h.intl.string(h.t.ai6Lbr)
  }), (0, r.jsxs)("div", {
    className: f.j,
    children: [i.Fr && (0, r.jsx)(o.Ay, {
      children: null
    }), (0, r.jsxs)(a.ppr, {
      theme: b,
      children: [(0, r.jsx)(a.G8R, {
        darkSrc: m ? n(556708) : n(355937),
        lightSrc: m ? n(828140) : n(332327),
        width: 272,
        height: 222
      }), t]
    })]
  })
}