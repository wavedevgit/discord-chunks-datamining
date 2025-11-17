/** Chunk was on 50751 **/
/** chunk id: 134849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk63452 = require("./63452.js");
let O = [];

function v(e) {
  return e.notification.id
}

function E(e, t, n, r) {
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
let _ = Chunk473749.memo(function(e) {
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
  }, [t, n], c.E6), _ = r.useState(() => new h.AS(t))[0];
  return (r.useLayoutEffect(() => _.updateState(y, t)), r.useLayoutEffect(() => (_.initialize((0, u.i)()), () => _.cleanUp()), [_]), 0 !== y.length || t) ? (0, i.jsx)(h.S4.Provider, {
    value: _,
    children: (0, i.jsx)(o.W3x, {
      items: y,
      renderItem: E,
      getItemKey: v,
      wrapChildren: b
    })
  }) : d ? t ? null : (0, i.jsx)(a.E, {
    emptyText: g.intl.string(g.t.O1Nbjq),
    icon: o.Dkj,
    absolute: true
  }) : null
})