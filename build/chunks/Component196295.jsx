/** Chunk was on 71447 **/
/** chunk id: 196295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk412477 = require("./412477.jsx"),
  Chunk592598 = require("./592598.js"),
  Chunk243612 = require("./243612.js"),
  Chunk545807 = require("./545807.js"),
  Chunk672910 = require("./672910.jsx"),
  Chunk57019 = require("./57019.js"),
  Chunk703552 = require("./703552.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk288507 = require("./288507.js");
let A = [];

function v(e) {
  return e.notification.id
}

function b(e, t, n, r) {
  let {
    index: l,
    notification: a,
    locked: s,
    pinned: o
  } = t;
  return (0, i.jsx)(d.A, {
    index: l,
    notification: a,
    locked: s,
    pinned: o,
    transitionState: n,
    cleanUp: r
  }, e)
}

function E(e) {
  return (0, i.jsx)("div", {
    className: y.k,
    children: e
  })
}
let O = Chunk64700.memo(function(e) {
  let {
    locked: t,
    pinned: n,
    showEmpty: d = true
  } = e, y = (0, l.bG)([p.A, o.A], () => {
    if (o.A.isNotificationDisabled(f.KS.TextChat)) return A;
    let e = [],
      i = 0;
    for (let r of p.A.getNotifications()) {
      if (i > 4) break;
      (!t || r.status !== g.yFH.TIMED_OUT) && (e.push({
        index: i,
        locked: t,
        pinned: n,
        notification: r
      }), i++)
    }
    return e
  }, [t, n], u.oQ), O = r.useState(() => new h.Fn(t))[0];
  return (r.useLayoutEffect(() => O.updateState(y, t)), r.useLayoutEffect(() => (O.initialize((0, c.b)()), () => O.cleanUp()), [O]), 0 !== y.length || t) ? (0, i.jsx)(h.Gt.Provider, {
    value: O,
    children: (0, i.jsx)(a.Fai, {
      items: y,
      renderItem: b,
      getItemKey: v,
      wrapChildren: E
    })
  }) : d ? t ? null : (0, i.jsx)(s.g, {
    emptyText: m.intl.string(m.t.O1Nbjq),
    icon: a.XFE,
    absolute: true
  }) : null
})