/** Chunk was on 71447 **/
/** chunk id: 196295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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
let y = [];

function O(e) {
  return e.notification.id
}

function v(e, t, n, r) {
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

function b(e) {
  return (0, i.jsx)("div", {
    className: A.k,
    children: e
  })
}
let E = Chunk64700.memo(function(e) {
  let {
    locked: t,
    pinned: n,
    showEmpty: d = true
  } = e, A = (0, l.bG)([p.A, s.A], () => {
    if (s.A.isNotificationDisabled(f.KS.TextChat)) return y;
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
  }, [t, n], u.oQ), E = r.useState(() => new h.Fn(t))[0];
  return (r.useLayoutEffect(() => E.updateState(A, t)), r.useLayoutEffect(() => (E.initialize((0, c.b)()), () => E.cleanUp()), [E]), 0 !== A.length || t) ? (0, i.jsx)(h.Gt.Provider, {
    value: E,
    children: (0, i.jsx)(a.Fai, {
      items: A,
      renderItem: v,
      getItemKey: O,
      wrapChildren: b
    })
  }) : d ? t ? null : (0, i.jsx)(o.g, {
    emptyText: m.intl.string(m.t.O1Nbjq),
    icon: a.XFE,
    absolute: true
  }) : null
})