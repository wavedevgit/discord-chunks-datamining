/** Chunk was on 2803 **/
/** chunk id: 134849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
let O = [];

function v(e) {
  return e.notification.id
}

function b(e, t, n, r) {
  let {
    index: o,
    notification: l,
    locked: a,
    pinned: s
  } = t;
  return (0, i.jsx)(p.Z, {
    index: o,
    notification: l,
    locked: a,
    pinned: s,
    transitionState: n,
    cleanUp: r
  }, e)
}

function E(e) {
  return (0, i.jsx)("div", {
    className: y.container,
    children: e
  })
}
let _ = Chunk647438.memo(function(e) {
  let {
    locked: t,
    pinned: n,
    showEmpty: p = true
  } = e, y = (0, o.e7)([h.Z, c.Z], () => {
    if (c.Z.isNotificationDisabled(a.OverlayNotificationDisabledSetting.TEXT_CHAT)) return O;
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
  }, [t, n], u.E6), _ = r.useState(() => new f.AS(t))[0];
  return (r.useLayoutEffect(() => _.updateState(y, t)), r.useLayoutEffect(() => (_.initialize((0, d.i)()), () => _.cleanUp()), [_]), 0 !== y.length || t) ? (0, i.jsx)(f.S4.Provider, {
    value: _,
    children: (0, i.jsx)(l.W3x, {
      items: y,
      renderItem: b,
      getItemKey: v,
      wrapChildren: E
    })
  }) : p ? t ? null : (0, i.jsx)(s.E, {
    emptyText: g.intl.string(g.t.O1Nbjo),
    icon: l.Dkj,
    absolute: true
  }) : null
})