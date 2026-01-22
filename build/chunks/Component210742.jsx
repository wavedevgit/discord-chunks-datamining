/** Chunk was on web.js **/
/** chunk id: 210742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk831062 = require("./831062.js"),
  Chunk954571 = require("./954571.js"),
  Chunk308645 = require("./308645.js"),
  Chunk335891 = require("./335891.js"),
  Chunk929770 = require("./929770.js"),
  Chunk259960 = require("./259960.js"),
  Chunk257110 = require("./257110.js"),
  Chunk366141 = require("./366141.jsx"),
  Chunk224010 = require("./224010.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk589896 = require("./589896.js");

function y() {
  let e = (0, _.A)(),
    t = (0, p.v)(),
    n = (0, d.K)(),
    y = (0, f.b)();
  (0, o.Ay)(() => {
    u.Yn()
  });
  let O = i.useRef(n);
  return (i.useEffect(() => {
    O.current = n
  }), i.useEffect(() => {
    t && (c.default.track(g.HAw.SAFETY_HUB_VIEWED, {
      account_standing: O.current.state
    }), l.A.increment({
      name: a.K.SAFETY_HUB_VIEW
    }))
  }, [t]), e) ? (0, r.jsx)(s.y$y, {}) : null != y ? (0, r.jsxs)(s.$Td, {
    color: s.Hv$.DANGER,
    className: b.aL,
    children: [E.intl.string(E.t.TDRvqs), (0, r.jsx)(s.zr9, {
      onClick: () => u.Yn(),
      children: E.intl.string(E.t.R1AN4F)
    })]
  }) : (0, r.jsxs)("div", {
    className: b.kL,
    children: [(0, r.jsx)(h.A, {}), (0, r.jsx)(m.q, {})]
  })
}