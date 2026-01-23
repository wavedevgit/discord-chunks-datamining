/** Chunk was on 84018 **/
/** chunk id: 227308, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk888288 = require("./888288.js"),
  Chunk256415 = require("./256415.js"),
  Chunk941023 = require("./941023.js"),
  Chunk714983 = require("./714983.jsx"),
  Chunk592598 = require("./592598.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk283446 = require("./283446.js");

function A(e) {
  let {
    locked: t,
    keybind: n
  } = e, s = r.useRef(null), h = (0, a.yK)([c.A], () => c.A.getNotifications()), A = (0, a.bG)([d.default], () => d.default.getNotificationPositionMode());
  if ((0, a.bG)([p.A], () => p.A.isNotificationDisabled(f.KS.TextChat)) || A === g.G6Q.DISABLED) return null;
  let b = h.filter(e => !t || e.status !== g.yFH.TIMED_OUT),
    O = (0, o.groupBy)(b, e => e.type);
  return (0, i.jsx)(u.A, {
    contentDomRef: s,
    observeInterval: 200,
    children: (0, i.jsx)("div", {
      ref: s,
      className: l()(y.container, y[A]),
      children: Object.entries(O).map(e => {
        let [r, s] = e;
        return 0 === s.length ? null : (0, i.jsx)(m, {
          locked: t,
          keybind: n,
          position: A,
          notification: s[0]
        }, r)
      })
    })
  })
}

function m(e) {
  let {
    notification: t,
    position: n,
    keybind: r,
    locked: s
  } = e;
  return (0, i.jsx)("div", {
    className: y.notificationGroup,
    children: (0, i.jsx)(h.A, {
      zIndex: 100,
      position: n,
      notification: t,
      keybind: r,
      locked: s
    }, t.id)
  })
}