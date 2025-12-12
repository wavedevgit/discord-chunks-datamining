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
let y = [];

function O(e) {
  return e.notification.id
}

function v(e, t, n, r) {
  let {
    index: a,
    notification: l,
    locked: o,
    pinned: s
  } = t;
  return (0, i.jsx)(d.Z, {
    index: a,
    notification: l,
    locked: o,
    pinned: s,
    transitionState: n,
    cleanUp: r
  }, e)
}

function E(e) {
  return (0, i.jsx)("div", {
    className: b.container,
    children: e
  })
}
let S = Chunk473749.memo(function(e) {
  let {
    locked: t,
    pinned: n,
    showEmpty: d = true
  } = e, b = (0, a.e7)([h.Z, s.Z], () => {
    if (s.Z.isNotificationDisabled(p.n0.TextChat)) return y;
    let e = [],
      i = 0;
    for (let r of h.Z.getNotifications()) {
      if (i > 4) break;
      (!t || r.status !== m._1z.TIMED_OUT) && (e.push({
        index: i,
        locked: t,
        pinned: n,
        notification: r
      }), i++)
    }
    return e
  }, [t, n], c.E6), S = r.useState(() => new f.AS(t))[0];
  return (r.useLayoutEffect(() => S.updateState(b, t)), r.useLayoutEffect(() => (S.initialize((0, u.i)()), () => S.cleanUp()), [S]), 0 !== b.length || t) ? (0, i.jsx)(f.S4.Provider, {
    value: S,
    children: (0, i.jsx)(l.W3x, {
      items: b,
      renderItem: v,
      getItemKey: O,
      wrapChildren: E
    })
  }) : d ? t ? null : (0, i.jsx)(o.E, {
    emptyText: g.intl.string(g.t.O1Nbjq),
    icon: l.Dkj,
    absolute: true
  }) : null
})