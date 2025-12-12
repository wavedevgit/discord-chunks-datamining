/** Chunk was on web.js **/
/** chunk id: 793865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk650958 = require("./650958.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk737013 = require("./737013.jsx"),
  Chunk137810 = require("./137810.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    onClose: t,
    onSelect: n,
    minimal: i = false,
    appContext: g,
    onInteraction: E
  } = e, {
    analyticsLocations: b
  } = (0, c.ZP)(), y = (0, a.e7)([d.default], () => {
    let e = d.default.getCurrentUser();
    return o()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e
  }), O = (0, u.M)({
    deviceType: m.h7.VIDEO_INPUT,
    analyticsLocations: b,
    showAllDevices: true,
    asSubmenu: i
  }), v = (0, f.Z)(y.id, g), S = (0, p.Z)(g);
  return (0, r.jsx)(l.Z, {
    object: _.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(s.v2r, {
      onClose: t,
      navId: "video-device-context",
      variant: "fixed",
      "aria-label": h.intl.string(h.t.F122Gz),
      onSelect: n,
      onInteraction: E,
      children: [O, (0, r.jsxs)(s.kSQ, {
        children: [v, i ? S : null]
      })]
    })
  })
}