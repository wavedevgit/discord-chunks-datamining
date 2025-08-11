/** Chunk was on 75708 **/
/** chunk id: 167540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk962100 = require("./962100.jsx"),
  Chunk445817 = require("./445817.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20493 = require("./20493.js");

function b() {
  return (0, Chunk255367.jsx)(Chunk481060.ToO, {
    type: Chunk481060.sje.PRIMARY,
    title: Chunk388032.intl.string(Chunk388032.t.XLw6FB),
    body: Chunk388032.intl.string(Chunk388032.t.wVjKGh),
    button: (0, Chunk255367.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Chunk20493.marginTop20,
      children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.BK8LKy),
        onClick: () => (0, Chunk962100.y)("Video unsupported browser")
      })
    })
  })
}

function x(e) {
  let {
    refreshStyles: t = false
  } = e, n = (0, l.e7)([d.Z], () => d.Z.supports(g.AN.VIDEO)), [s, u] = r.useState(false), x = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.F, {
      setting: p.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
      children: (0, i.jsx)(m.Z, {
        previewEnabled: s,
        onEnablePreview: () => u(true),
        onCancelPreview: () => u(false)
      })
    }), !n && (0, i.jsx)(b, {})]
  });
  return t ? x : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.y5t, {
      component: (0, i.jsx)(o.vwX, {
        tag: o.RB0.H1,
        className: f.marginBottom20,
        children: h.intl.string(h.t.LKzQSE)
      }),
      children: x
    }), (0, i.jsx)(o.$i$, {
      className: a()(f.marginBottom40, f.marginTop40)
    })]
  })
}