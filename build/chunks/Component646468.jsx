/** Chunk was on 67564 **/
/** chunk id: 646468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => A,
  xc: () => _
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk252431 = require("./252431.js"),
  Chunk322387 = require("./322387.js"),
  Chunk995273 = require("./995273.js"),
  Chunk325326 = require("./325326.js"),
  Chunk208667 = require("./208667.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function A() {
  let {
    initialized: e,
    items: t,
    loading: n,
    loadMore: l
  } = (0, d.LF)(), s = y(t, (0, i.bG)([o.A], () => o.A.localItems));
  return (0, r.jsx)(p.A, {
    initialized: e,
    items: s,
    loading: n,
    loadMore: l
  })
}

function y(e, t) {
  return l.useMemo(() => [...[...e, ...t].sort((e, t) => false * g.default.compare(e.id, t.id))], [e, t])
}

function _() {
  let {
    items: e
  } = (0, d.LF)(), t = e.length > 0 ? e[0] : null, n = y(e, (0, i.bG)([o.A], () => o.A.localItems)), p = h.ns.useSetting();
  return l.useMemo(() => {
    if (null != t && 0 >= g.default.compare(t.id, p)) returnfalse;
    for (let e of n) {
      if (0 >= g.default.compare(e.id, p)) break;
      if (!(0, u.NW)(e, p)) returntrue
    }
    returnfalse
  }, [t, p, n]) ? (0, r.jsx)(s.m_, {
    text: b.intl.string(b.t["8k+6QY"]),
    children: (0, r.jsx)(a.K0, {
      "aria-label": b.intl.string(b.t["8k+6QY"]),
      icon: a.iA$,
      variant: "secondary",
      size: "sm",
      onClick: () => {
        null != t && (h.ns.updateSetting(t.id), f.default.track(m.HAw.NOTIFICATION_CENTER_ACTION, {
          action_type: c.e1.MARK_ALL_READ
        }))
      }
    })
  }) : null
}