/** Chunk was on 50751 **/
/** chunk id: 134849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk804570 = require("./804570.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk388627 = require("./388627.js"),
  Chunk561064 = require("./561064.js"),
  Chunk380736 = require("./380736.jsx"),
  Chunk693091 = require("./693091.js"),
  Chunk371467 = require("./371467.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782621 = require("./782621.js");
let O = [];

function E(e) {
  return e.notification.id
}

function v(e, t, n, r) {
  let {
    index: l,
    notification: o,
    locked: a,
    pinned: s
  } = t;
  return (0, i.jsx)(d.Z, {
    index: l,
    notification: o,
    locked: a,
    pinned: s,
    transitionState: n,
    cleanUp: r
  }, e)
}

function b(e) {
  return (0, i.jsx)("div", {
    className: y.container,
    children: e
  })
}
let S = Chunk473749.memo(function(e) {
  let {
    locked: t,
    pinned: n,
    showEmpty: d = true
  } = e, y = (0, l.e7)([p.Z, s.Z], () => {
    if (s.Z.isNotificationDisabled(f.n0.TextChat)) return O;
    let e = [],
      i = 0;
    for (let r of p.Z.getNotifications()) {
      if (i > 4) break;
      (!t || r.status !== m._1z.TIMED_OUT) && (e.push({
        index: i,
        locked: t,
        pinned: n,
        notification: r
      }), i++)
    }
    return e
  }, [t, n], u.E6), S = r.useState(() => new h.AS(t))[0];
  return (r.useLayoutEffect(() => S.updateState(y, t)), r.useLayoutEffect(() => (S.initialize((0, c.i)()), () => S.cleanUp()), [S]), 0 !== y.length || t) ? (0, i.jsx)(h.S4.Provider, {
    value: S,
    children: (0, i.jsx)(o.W3x, {
      items: y,
      renderItem: v,
      getItemKey: E,
      wrapChildren: b
    })
  }) : d ? t ? null : (0, i.jsx)(a.E, {
    emptyText: g.intl.string(g.t.O1Nbjq),
    icon: o.Dkj,
    absolute: true
  }) : null
})