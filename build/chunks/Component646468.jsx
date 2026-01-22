/** Chunk was on 97492 **/
/** chunk id: 646468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => A,
  xc: () => O
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
  } = (0, d.LF)(), a = y(t, (0, i.bG)([o.A], () => o.A.localItems));
  return (0, r.jsx)(f.A, {
    initialized: e,
    items: a,
    loading: n,
    loadMore: l
  })
}

function y(e, t) {
  return l.useMemo(() => [...[...e, ...t].sort((e, t) => false * b.default.compare(e.id, t.id))], [e, t])
}

function O() {
  let {
    items: e
  } = (0, d.LF)(), t = e.length > 0 ? e[0] : null, n = y(e, (0, i.bG)([o.A], () => o.A.localItems)), f = p.ns.useSetting();
  return l.useMemo(() => {
    if (null != t && 0 >= b.default.compare(t.id, f)) returnfalse;
    for (let e of n) {
      if (0 >= b.default.compare(e.id, f)) break;
      if (!(0, u.NW)(e, f)) returntrue
    }
    returnfalse
  }, [t, f, n]) ? (0, r.jsx)(a.m_, {
    text: m.intl.string(m.t["8k+6QY"]),
    children: (0, r.jsx)(s.K0, {
      "aria-label": m.intl.string(m.t["8k+6QY"]),
      icon: s.iA$,
      variant: "secondary",
      size: "sm",
      onClick: () => {
        null != t && (p.ns.updateSetting(t.id), h.default.track(g.HAw.NOTIFICATION_CENTER_ACTION, {
          action_type: c.e1.MARK_ALL_READ
        }))
      }
    })
  }) : null
}