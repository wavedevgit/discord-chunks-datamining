/** Chunk was on 46746 **/
/** chunk id: 586290, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk856901 = require("./856901.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk537135 = require("./537135.jsx"),
  Chunk176940 = require("./176940.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk477302 = require("./477302.js"),
  Chunk79985 = require("./79985.js"),
  Chunk10198 = require("./10198.js");

function b(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: n,
    onChangeAudioDevice: l
  } = e;
  s()(null != t, "Camera capture device cannot be null");
  let o = (0, p.Z)(),
    [b, S] = (0, m.Ls)(g.h7.AUDIO_INPUT, {
      location: "CaptureDeviceConfig"
    }),
    C = b.concat(S),
    [y, O] = i.useState(function(e, t, n) {
      var r;
      let i = t.find(t => t.id === e);
      if (null == i) return null;
      let l = a().reduce(n, (e, t) => (0, c.stringSimilarity)(i.name, t.name) > (0, c.stringSimilarity)(i.name, e.name) ? t : e);
      return null != (r = null == l ? true : l.id) ? r : null
    }(t.id, o, C));
  return null != y && l(y), (0, r.jsx)(u.hjN, {
    title: "Capture Device",
    className: v.modalContent,
    children: (0, r.jsxs)(u.Kqy, {
      gap: 8,
      children: [(0, r.jsx)("div", {
        className: j.marginTop8,
        children: (0, r.jsxs)(h.Z, {
          children: [(0, r.jsx)("span", {
            className: _.ellipsisText,
            children: t.name
          }), (0, r.jsx)(d.zx, {
            className: _.changeButton,
            color: d.zx.Colors.PRIMARY,
            size: d.zx.Sizes.SMALL,
            onClick: n,
            children: x.intl.string(x.t.GEgsAw)
          })]
        })
      }), (0, r.jsx)(f.j, {
        label: x.intl.string(x.t.y4ooen),
        deviceType: g.h7.AUDIO_INPUT,
        location: "CaptureDeviceConfig",
        className: j.__invalid_marginaTop8,
        selectedDeviceId: y,
        onSelectDevice: e => (O(e), l(e), false)
      })]
    })
  })
}