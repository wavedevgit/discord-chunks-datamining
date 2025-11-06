/** Chunk was on 63141 **/
/** chunk id: 348733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function y(e) {
  let {
    locked: t,
    keybind: n
  } = e, o = r.useRef(null), h = (0, a.Wu)([c.Z], () => c.Z.getNotifications()), y = (0, a.e7)([d.default], () => d.default.getNotificationPositionMode());
  if ((0, a.e7)([p.Z], () => p.Z.isNotificationDisabled(f.n0.TextChat)) || y === g._vf.DISABLED) return null;
  let _ = h.filter(e => !t || e.status !== g._1z.TIMED_OUT),
    v = (0, s.groupBy)(_, e => e.type);
  return (0, i.jsx)(u.Z, {
    contentDomRef: o,
    observeInterval: 200,
    children: (0, i.jsx)("div", {
      ref: o,
      className: l()(m.container, m[y]),
      children: Object.entries(v).map(e => {
        let [r, o] = e;
        return 0 === o.length ? null : (0, i.jsx)(O, {
          locked: t,
          keybind: n,
          position: y,
          notification: o[0]
        }, r)
      })
    })
  })
}

function O(e) {
  let {
    notification: t,
    position: n,
    keybind: r,
    locked: o
  } = e;
  return (0, i.jsx)("div", {
    className: m.notificationGroup,
    children: (0, i.jsx)(h.Z, {
      zIndex: 100,
      position: n,
      notification: t,
      keybind: r,
      locked: o
    }, t.id)
  })
}