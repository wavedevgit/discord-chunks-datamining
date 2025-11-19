/** Chunk was on 63141 **/
/** chunk id: 348733, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk261435 = require("./261435.js"),
  Chunk237997 = require("./237997.js"),
  Chunk692546 = require("./692546.js"),
  Chunk438015 = require("./438015.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk745466 = require("./745466.js");

function y(e) {
  let {
    locked: t,
    keybind: n
  } = e, s = r.useRef(null), h = (0, a.Wu)([c.Z], () => c.Z.getNotifications()), y = (0, a.e7)([d.default], () => d.default.getNotificationPositionMode());
  if ((0, a.e7)([p.Z], () => p.Z.isNotificationDisabled(f.n0.TextChat)) || y === g._vf.DISABLED) return null;
  let v = h.filter(e => !t || e.status !== g._1z.TIMED_OUT),
    _ = (0, l.groupBy)(v, e => e.type);
  return (0, i.jsx)(u.Z, {
    contentDomRef: s,
    observeInterval: 200,
    children: (0, i.jsx)("div", {
      ref: s,
      className: o()(m.container, m[y]),
      children: Object.entries(_).map(e => {
        let [r, s] = e;
        return 0 === s.length ? null : (0, i.jsx)(b, {
          locked: t,
          keybind: n,
          position: y,
          notification: s[0]
        }, r)
      })
    })
  })
}

function b(e) {
  let {
    notification: t,
    position: n,
    keybind: r,
    locked: s
  } = e;
  return (0, i.jsx)("div", {
    className: m.notificationGroup,
    children: (0, i.jsx)(h.Z, {
      zIndex: 100,
      position: n,
      notification: t,
      keybind: r,
      locked: s
    }, t.id)
  })
}