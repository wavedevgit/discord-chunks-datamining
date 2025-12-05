/** Chunk was on 63141 **/
/** chunk id: 348733, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
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
  Chunk991168 = require("./991168.js");

function m(e) {
  let {
    locked: t,
    keybind: n
  } = e, s = r.useRef(null), p = (0, a.Wu)([c.Z], () => c.Z.getNotifications()), m = (0, a.e7)([d.default], () => d.default.getNotificationPositionMode());
  if ((0, a.e7)([h.Z], () => h.Z.isNotificationDisabled(f.n0.TextChat)) || m === g._vf.DISABLED) return null;
  let b = p.filter(e => !t || e.status !== g._1z.TIMED_OUT),
    v = (0, l.groupBy)(b, e => e.type);
  return (0, i.jsx)(u.Z, {
    contentDomRef: s,
    observeInterval: 200,
    children: (0, i.jsx)("div", {
      ref: s,
      className: o()(_.container, _[m]),
      children: Object.entries(v).map(e => {
        let [r, s] = e;
        return 0 === s.length ? null : (0, i.jsx)(y, {
          locked: t,
          keybind: n,
          position: m,
          notification: s[0]
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
    locked: s
  } = e;
  return (0, i.jsx)("div", {
    className: _.notificationGroup,
    children: (0, i.jsx)(p.Z, {
      zIndex: 100,
      position: n,
      notification: t,
      keybind: r,
      locked: s
    }, t.id)
  })
}