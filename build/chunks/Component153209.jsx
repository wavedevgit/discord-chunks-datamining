/** Chunk was on 41753 **/
/** chunk id: 153209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk140155 = require("./140155.js"),
  Chunk497089 = require("./497089.js"),
  Chunk178480 = require("./178480.js"),
  Chunk11799 = require("./11799.js"),
  Chunk616032 = require("./616032.jsx"),
  Chunk216789 = require("./216789.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk791914 = require("./791914.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk556871 = require("./556871.js"),
  Chunk808934 = require("./808934.js");

function E(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(c.M0o, {
    tooltip: C.intl.string(C.t["8k+6QU"]),
    color: c.YX$.TERTIARY,
    icon: (0, r.jsx)(c.W6s, {
      size: "xs",
      color: "currentColor"
    }),
    className: j.controlButton,
    onClick: t
  })
}

function S(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: l
  } = e, {
    initialized: C,
    items: j,
    loading: S,
    loadMore: x
  } = (0, p.y6)(), I = (0, s.e7)([u.Z], () => u.Z.localItems), P = (0, g.Us)({
    location: "ForYou"
  }), N = i.useMemo(() => [...[...j, ...I].sort((e, t) => false * O.default.compare(e.id, t.id))], [j, I]), w = j.length > 0 ? j[0] : null, Z = m.d$.useSetting(), T = i.useMemo(() => {
    if (null != w && 0 >= O.default.compare(w.id, Z)) returnfalse;
    for (let e of N) {
      if (0 >= O.default.compare(e.id, Z)) break;
      if (!(0, h.r)(e, Z)) returntrue
    }
    returnfalse
  }, [w, Z, N]);
  return (0, r.jsx)("div", {
    className: o()(v.container, {
      [v.widerInbox]: P
    }),
    children: (0, r.jsx)(c.y5t, {
      component: (0, r.jsx)(_.Z, {
        tab: a.X.FOR_YOU,
        setTab: t,
        badgeState: n,
        closePopout: l,
        children: T ? (0, r.jsx)(E, {
          onClick: () => {
            null != w && (m.d$.updateSetting(w.id), b.default.track(y.rMx.NOTIFICATION_CENTER_ACTION, {
              action_type: d.ud.MARK_ALL_READ
            }))
          }
        }) : null
      }),
      children: (0, r.jsx)(f.Z, {
        initialized: C,
        items: N,
        loading: S,
        loadMore: x
      })
    })
  })
}