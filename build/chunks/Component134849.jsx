/** Chunk was on 50751 **/
/** chunk id: 134849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk401176 = require("./401176.js");
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

function S(e) {
  return (0, i.jsx)("div", {
    className: y.container,
    children: e
  })
}
let b = Chunk647438.memo(function(e) {
  let {
    locked: t,
    pinned: n,
    showEmpty: d = true
  } = e, y = (0, l.e7)([h.Z, s.Z], () => {
    if (s.Z.isNotificationDisabled(f.n0.TextChat)) return O;
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
  }, [t, n], u.E6), b = r.useState(() => new p.AS(t))[0];
  return (r.useLayoutEffect(() => b.updateState(y, t)), r.useLayoutEffect(() => (b.initialize((0, c.i)()), () => b.cleanUp()), [b]), 0 !== y.length || t) ? (0, i.jsx)(p.S4.Provider, {
    value: b,
    children: (0, i.jsx)(o.W3x, {
      items: y,
      renderItem: v,
      getItemKey: E,
      wrapChildren: S
    })
  }) : d ? t ? null : (0, i.jsx)(a.E, {
    emptyText: g.intl.string(g.t.O1Nbjq),
    icon: o.Dkj,
    absolute: true
  }) : null
})