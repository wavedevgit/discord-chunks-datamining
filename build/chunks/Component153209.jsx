/** Chunk was on 81985 **/
/** chunk id: 153209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gp: () => O,
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
  } = (0, d.y6)(), a = v(t, (0, l.e7)([s.Z], () => s.Z.localItems));
  return (0, r.jsx)(p.Z, {
    initialized: e,
    items: a,
    loading: n,
    loadMore: i
  })
}

function v(e, t) {
  return i.useMemo(() => [...[...e, ...t].sort((e, t) => false * g.default.compare(e.id, t.id))], [e, t])
}

function O() {
  let {
    items: e
  } = (0, d.y6)(), t = e.length > 0 ? e[0] : null, n = v(e, (0, l.e7)([s.Z], () => s.Z.localItems)), p = f.d$.useSetting();
  return i.useMemo(() => {
    if (null != t && 0 >= g.default.compare(t.id, p)) returnfalse;
    for (let e of n) {
      if (0 >= g.default.compare(e.id, p)) break;
      if (!(0, u.r)(e, p)) returntrue
    }
    returnfalse
  }, [t, p, n]) ? (0, r.jsx)(a.u, {
    text: b.intl.string(b.t["8k+6QY"]),
    children: (0, r.jsx)(o.hU, {
      "aria-label": b.intl.string(b.t["8k+6QY"]),
      icon: o.W6s,
      variant: "secondary",
      size: "sm",
      onClick: () => {
        null != t && (f.d$.updateSetting(t.id), h.default.track(m.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: c.ud.MARK_ALL_READ
        }))
      }
    })
  }) : null
}