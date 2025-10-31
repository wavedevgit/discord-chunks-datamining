/** Chunk was on 4093 **/
/** chunk id: 586290, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk856901 = require("./856901.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk537135 = require("./537135.jsx"),
  Chunk176940 = require("./176940.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk591554 = require("./591554.js"),
  Chunk542257 = require("./542257.js"),
  Chunk197571 = require("./197571.js");

function S(e) {
  let {
    selectedSource: n,
    onChangeVideoDeviceSource: t,
    onChangeAudioDevice: i
  } = e;
  s()(null != n, "Camera capture device cannot be null");
  let a = (0, h.Z)(),
    [S, N] = (0, x.Ls)(j.h7.AUDIO_INPUT, {
      location: "CaptureDeviceConfig"
    }),
    C = S.concat(N),
    [b, T] = r.useState(function(e, n, t) {
      var l;
      let r = n.find(n => n.id === e);
      if (null == r) return null;
      let i = c().reduce(t, (e, n) => (0, o.stringSimilarity)(r.name, n.name) > (0, o.stringSimilarity)(r.name, e.name) ? n : e);
      return null != (l = null == i ? true : i.id) ? l : null
    }(n.id, a, C));
  return null != b && i(b), (0, l.jsxs)("div", {
    className: f.modalContent,
    children: [(0, l.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: f.formItemTitle,
      children: "Capture Device"
    }), (0, l.jsxs)(d.Kqy, {
      gap: 8,
      children: [(0, l.jsx)("div", {
        className: Z.marginTop8,
        children: (0, l.jsxs)(g.Z, {
          children: [(0, l.jsx)("span", {
            className: v.ellipsisText,
            children: n.name
          }), (0, l.jsx)(u.zx, {
            className: v.changeButton,
            color: u.zx.Colors.PRIMARY,
            size: u.zx.Sizes.SMALL,
            onClick: t,
            children: p.intl.string(p.t.GEgsA4)
          })]
        })
      }), (0, l.jsx)(m.j, {
        label: p.intl.string(p.t.y4ooer),
        deviceType: j.h7.AUDIO_INPUT,
        location: "CaptureDeviceConfig",
        className: Z.__invalid_marginaTop8,
        selectedDeviceId: b,
        onSelectDevice: e => (T(e), i(e), false)
      })]
    })]
  })
}