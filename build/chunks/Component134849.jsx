/** Chunk was on 50751 **/
/** chunk id: 134849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk486016 = require("./486016.js"),
  Chunk804570 = require("./804570.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk388627 = require("./388627.js"),
  Chunk561064 = require("./561064.js"),
  Chunk380736 = require("./380736.jsx"),
  Chunk693091 = require("./693091.js"),
  Chunk371467 = require("./371467.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk401176 = require("./401176.js");
let y = [];

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
  return (0, i.jsx)(p.Z, {
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
    className: O.container,
    children: e
  })
}
let S = Chunk647438.memo(function(e) {
  let {
    locked: t,
    pinned: n,
    showEmpty: p = true
  } = e, O = (0, l.e7)([f.Z, u.Z], () => {
    if (u.Z.isNotificationDisabled(a.OverlayNotificationDisabledSetting.TEXT_CHAT)) return y;
    let e = [],
      i = 0;
    for (let r of f.Z.getNotifications()) {
      if (i > 4) break;
      (!t || r.status !== m._1z.TIMED_OUT) && (e.push({
        index: i,
        locked: t,
        pinned: n,
        notification: r
      }), i++)
    }
    return e
  }, [t, n], c.E6), S = r.useState(() => new h.AS(t))[0];
  return (r.useLayoutEffect(() => S.updateState(O, t)), r.useLayoutEffect(() => (S.initialize((0, d.i)()), () => S.cleanUp()), [S]), 0 !== O.length || t) ? (0, i.jsx)(h.S4.Provider, {
    value: S,
    children: (0, i.jsx)(o.W3x, {
      items: O,
      renderItem: v,
      getItemKey: E,
      wrapChildren: b
    })
  }) : p ? t ? null : (0, i.jsx)(s.E, {
    emptyText: g.intl.string(g.t.O1Nbjo),
    icon: o.Dkj,
    absolute: true
  }) : null
})