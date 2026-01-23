/** Chunk was on 21738 **/
/** chunk id: 72800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk967198 = require("./967198.js"),
  Chunk533550 = require("./533550.js"),
  Chunk49999 = require("./49999.js"),
  Chunk826898 = require("./826898.js");
let h = Chunk64700.memo(function(e) {
  let {
    state: t,
    markAsDismissed: n
  } = e, {
    name: l,
    guildId: s,
    boundingRect: o
  } = t, c = i.useMemo(() => null, [l, s, n]);
  return null == c ? null : (0, r.jsx)("div", {
    className: a()(p.UX, (null == o || o.y < 0) && p.R),
    style: null == o ? {} : {
      top: o.top,
      left: o.right - o.x
    },
    children: c
  })
});

function g() {
  let e = (0, s.bG)([c.A], () => c.A.getGuildId()),
    t = (0, u.RX)(e),
    [n, i] = (0, o.kn)(Object.values(t).filter(e => {
      let {
        disabled: t
      } = e;
      return !t
    }).map(e => {
      let {
        name: t
      } = e;
      return t
    }), d.m.SIDEBAR);
  if (null == n) return null;
  let l = t[n];
  return null == l ? null : (0, r.jsx)("div", {
    className: p.kL,
    children: (0, r.jsx)(h, {
      state: l,
      markAsDismissed: i
    })
  })
}