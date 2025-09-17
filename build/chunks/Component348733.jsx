/** Chunk was on 63141 **/
/** chunk id: 348733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk261435 = require("./261435.js"),
  Chunk237997 = require("./237997.js"),
  Chunk486016 = require("./486016.js"),
  Chunk692546 = require("./692546.js"),
  Chunk438015 = require("./438015.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk981631 = require("./981631.js"),
  Chunk991168 = require("./991168.js");

function y(e) {
  let {
    locked: t,
    keybind: n
  } = e, l = r.useRef(null), p = (0, a.Wu)([c.Z], () => c.Z.getNotifications()), y = (0, a.e7)([d.default], () => d.default.getNotificationPositionMode());
  if ((0, a.e7)([f.Z], () => f.Z.isNotificationDisabled(u.OverlayNotificationDisabledSetting.TEXT_CHAT)) || y === g._vf.DISABLED) return null;
  let v = p.filter(e => !t || e.status !== g._1z.TIMED_OUT),
    _ = (0, s.groupBy)(v, e => e.type);
  return (0, i.jsx)(h.Z, {
    contentDomRef: l,
    observeInterval: 200,
    children: (0, i.jsx)("div", {
      ref: l,
      className: o()(m.container, m[y]),
      children: Object.entries(_).map(e => {
        let [r, l] = e;
        return 0 === l.length ? null : (0, i.jsx)(O, {
          locked: t,
          keybind: n,
          position: y,
          notification: l[0]
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
    locked: l
  } = e;
  return (0, i.jsx)("div", {
    className: m.notificationGroup,
    children: (0, i.jsx)(p.Z, {
      zIndex: 100,
      position: n,
      notification: t,
      keybind: r,
      locked: l
    }, t.id)
  })
}