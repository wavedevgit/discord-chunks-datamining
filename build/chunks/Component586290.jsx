/** Chunk was on 4093 **/
/** chunk id: 586290, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk856901 = require("./856901.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670863 = require("./670863.jsx"),
  Chunk72897 = require("./72897.js"),
  Chunk537135 = require("./537135.jsx"),
  Chunk176940 = require("./176940.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk797169 = require("./797169.js"),
  Chunk123795 = require("./123795.js"),
  Chunk478411 = require("./478411.js");

function Z(e) {
  let {
    selectedSource: n,
    onChangeVideoDeviceSource: t,
    onChangeAudioDevice: i
  } = e;
  s()(null != n, "Camera capture device cannot be null");
  let a = (0, g.Z)(),
    [Z, S] = (0, m.Ls)(h.h7.AUDIO_INPUT, {
      location: "CaptureDeviceConfig"
    }),
    N = Z.concat(S),
    [b, C] = r.useState(function(e, n, t) {
      var l;
      let r = n.find(n => n.id === e);
      if (null == r) return null;
      let i = c().reduce(t, (e, n) => (0, o.stringSimilarity)(r.name, n.name) > (0, o.stringSimilarity)(r.name, e.name) ? n : e);
      return null != (l = null == i ? true : i.id) ? l : null
    }(n.id, a, N));
  return null != b && i(b), (0, l.jsxs)("div", {
    className: p.modalContent,
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: p.formItemTitle,
      children: "Capture Device"
    }), (0, l.jsxs)(u.Kqy, {
      gap: 8,
      children: [(0, l.jsx)("div", {
        className: f.marginTop8,
        children: (0, l.jsxs)(x.Z, {
          children: [(0, l.jsx)("span", {
            className: v.ellipsisText,
            children: n.name
          }), (0, l.jsx)("div", {
            className: v.changeButton,
            children: (0, l.jsx)(u.Button, {
              size: "sm",
              variant: "secondary",
              onClick: t,
              text: j.intl.string(j.t.GEgsA4)
            })
          })]
        })
      }), (0, l.jsx)(d.j, {
        label: j.intl.string(j.t.y4ooer),
        deviceType: h.h7.AUDIO_INPUT,
        location: "CaptureDeviceConfig",
        className: f.__invalid_marginaTop8,
        selectedDeviceId: b,
        onSelectDevice: e => (C(e), i(e), false)
      })]
    })]
  })
}