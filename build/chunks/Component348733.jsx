/** Chunk was on 63141 **/
/** chunk id: 348733, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk261435 = require("./261435.js"),
  Chunk237997 = require("./237997.js"),
  Chunk692546 = require("./692546.js"),
  Chunk438015 = require("./438015.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk332111 = require("./332111.js");

function m(e) {
  let {
    locked: t,
    keybind: n
  } = e, a = r.useRef(null), f = (0, l.Wu)([c.Z], () => c.Z.getNotifications()), m = (0, l.e7)([d.default], () => d.default.getNotificationPositionMode());
  if ((0, l.e7)([h.Z], () => h.Z.isNotificationDisabled(p.n0.TextChat)) || m === g._vf.DISABLED) return null;
  let v = f.filter(e => !t || e.status !== g._1z.TIMED_OUT),
    O = (0, o.groupBy)(v, e => e.type);
  return (0, i.jsx)(u.Z, {
    contentDomRef: a,
    observeInterval: 200,
    children: (0, i.jsx)("div", {
      ref: a,
      className: s()(b.container, b[m]),
      children: Object.entries(O).map(e => {
        let [r, a] = e;
        return 0 === a.length ? null : (0, i.jsx)(y, {
          locked: t,
          keybind: n,
          position: m,
          notification: a[0]
        }, r)
      })
    })
  })
}

function y(e) {
  let {
    notification: t,
    position: n,
    keybind: r,
    locked: a
  } = e;
  return (0, i.jsx)("div", {
    className: b.notificationGroup,
    children: (0, i.jsx)(f.Z, {
      zIndex: 100,
      position: n,
      notification: t,
      keybind: r,
      locked: a
    }, t.id)
  })
}