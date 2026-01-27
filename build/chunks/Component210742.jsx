/** Chunk was on 7803 **/
/** chunk id: 210742, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p() {
  let t = (0, h.A)(),
    e = (0, x.v)(),
    s = (0, u.K)(),
    p = (0, m.b)();
  (0, r.Ay)(() => {
    d.Yn()
  });
  let E = n.useRef(s);
  return (n.useEffect(() => {
    E.current = s
  }), n.useEffect(() => {
    e && (o.default.track(v.HAw.SAFETY_HUB_VIEWED, {
      account_standing: E.current.state
    }), c.A.increment({
      name: a.K.SAFETY_HUB_VIEW
    }))
  }, [e]), t) ? (0, i.jsx)(l.y$y, {}) : null != p ? (0, i.jsxs)(l.$Td, {
    color: l.Hv$.DANGER,
    className: f.aL,
    children: [N.intl.string(N.t.TDRvqs), (0, i.jsx)(l.zr9, {
      onClick: () => d.Yn(),
      children: N.intl.string(N.t.R1AN4F)
    })]
  }) : (0, i.jsxs)("div", {
    className: f.kL,
    children: [(0, i.jsx)(g.A, {}), (0, i.jsx)(j.q, {})]
  })
}