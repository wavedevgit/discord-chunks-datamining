/** Chunk was on 71447 **/
/** chunk id: 196295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function O(e) {
  return e.notification.id
}

function E(e, t, n, r) {
  let {
    index: l,
    notification: a,
    locked: o,
    pinned: s
  } = t;
  return (0, i.jsx)(d.A, {
    index: l,
    notification: a,
    locked: o,
    pinned: s,
    transitionState: n,
    cleanUp: r
  }, e)
}

function v(e) {
  return (0, i.jsx)("div", {
    className: y.k,
    children: e
  })
}
let b = Chunk64700.memo(function(e) {
  let {
    locked: t,
    pinned: n,
    showEmpty: d = true
  } = e, y = (0, l.bG)([h.A, s.A], () => {
    if (s.A.isNotificationDisabled(f.KS.TextChat)) return A;
    let e = [],
      i = 0;
    for (let r of h.A.getNotifications()) {
      if (i > 4) break;
      (!t || r.status !== m.yFH.TIMED_OUT) && (e.push({
        index: i,
        locked: t,
        pinned: n,
        notification: r
      }), i++)
    }
    return e
  }, [t, n], c.oQ), b = r.useState(() => new p.Fn(t))[0];
  return (r.useLayoutEffect(() => b.updateState(y, t)), r.useLayoutEffect(() => (b.initialize((0, u.b)()), () => b.cleanUp()), [b]), 0 !== y.length || t) ? (0, i.jsx)(p.Gt.Provider, {
    value: b,
    children: (0, i.jsx)(a.Fai, {
      items: y,
      renderItem: E,
      getItemKey: O,
      wrapChildren: v
    })
  }) : d ? t ? null : (0, i.jsx)(o.g, {
    emptyText: g.intl.string(g.t.O1Nbjq),
    icon: a.XFE,
    absolute: true
  }) : null
})