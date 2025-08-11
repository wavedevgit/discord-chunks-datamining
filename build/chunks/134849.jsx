/** Chunk was on 89298 **/
/** chunk id: 134849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk486016 = require("./486016.js"),
  Chunk804570 = require("./804570.js"),
  Chunk624864 = require("./624864.js"),
  Chunk388627 = require("./388627.js"),
  Chunk561064 = require("./561064.js"),
  Chunk380736 = require("./380736.js"),
  Chunk693091 = require("./693091.js"),
  Chunk371467 = require("./371467.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk76932 = require("./76932.js");
let O = [];

function b(e) {
  return e.notification.id
}

function v(e, t, n, r) {
  let {
    index: o,
    notification: l,
    locked: a,
    pinned: s
  } = t;
  return <p.Z index={o} notification={l} locked={a} pinned={s} transitionState={n} cleanUp={r} />
}

function E(e) {
  return <div className={y.container}>{e}</div>
}
let _ = e => r.useState(() => new f.AS(e))[0],
  x = Chunk73800.memo(function(e) {
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
    }, [t, n], u.E6), x = _(t);
    return (r.useLayoutEffect(() => x.updateState(y, t)), r.useLayoutEffect(() => (x.initialize((0, d.i)()), () => x.cleanUp()), [x]), 0 !== y.length || t) ? <f.S4.Provider value={x}><l.W3x items={y} renderItem={v} getItemKey={b} wrapChildren={E} /></f.S4.Provider> : p ? t ? null : <s.E emptyText={g.intl.string(g.t.O1Nbjo)} icon={l.Dkj} absolute={true} /> : null
  })