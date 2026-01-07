/** Chunk was on 67000 **/
/** chunk id: 153209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gp: () => v,
  ZP: () => y
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk140155 = require("./140155.js"),
  Chunk497089 = require("./497089.js"),
  Chunk178480 = require("./178480.js"),
  Chunk11799 = require("./11799.js"),
  Chunk616032 = require("./616032.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function y() {
  let {
    initialized: e,
    items: t,
    loading: n,
    loadMore: i
  } = (0, d.y6)(), a = O(t, (0, l.e7)([s.Z], () => s.Z.localItems));
  return (0, r.jsx)(f.Z, {
    initialized: e,
    items: a,
    loading: n,
    loadMore: i
  })
}

function O(e, t) {
  return i.useMemo(() => [...[...e, ...t].sort((e, t) => false * g.default.compare(e.id, t.id))], [e, t])
}

function v() {
  let {
    items: e
  } = (0, d.y6)(), t = e.length > 0 ? e[0] : null, n = O(e, (0, l.e7)([s.Z], () => s.Z.localItems)), f = h.d$.useSetting();
  return i.useMemo(() => {
    if (null != t && 0 >= g.default.compare(t.id, f)) returnfalse;
    for (let e of n) {
      if (0 >= g.default.compare(e.id, f)) break;
      if (!(0, u.r)(e, f)) returntrue
    }
    returnfalse
  }, [t, f, n]) ? (0, r.jsx)(a.u, {
    text: m.intl.string(m.t["8k+6QY"]),
    children: (0, r.jsx)(o.hU, {
      "aria-label": m.intl.string(m.t["8k+6QY"]),
      icon: o.W6s,
      variant: "secondary",
      size: "sm",
      onClick: () => {
        null != t && (h.d$.updateSetting(t.id), p.default.track(b.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: c.ud.MARK_ALL_READ
        }))
      }
    })
  }) : null
}