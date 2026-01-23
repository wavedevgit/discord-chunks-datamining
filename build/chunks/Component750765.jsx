/** Chunk was on web.js **/
/** chunk id: 750765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk48435 = require("./48435.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk855187 = require("./855187.jsx"),
  Chunk555572 = require("./555572.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    onClose: t,
    onSelect: n,
    minimal: i = false,
    appContext: g,
    onInteraction: E
  } = e, {
    analyticsLocations: y
  } = (0, c.Ay)(), b = (0, s.bG)([d.default], () => {
    let e = d.default.getCurrentUser();
    return a()(null != e, "VideoDeviceMenu: currentUser cannot be undefined"), e
  }), O = (0, u.H)({
    deviceType: h.oh.VIDEO_INPUT,
    analyticsLocations: y,
    showAllDevices: true,
    asSubmenu: i
  }), v = (0, f.A)(b.id, g), A = (0, p.A)(g);
  return (0, r.jsx)(l.A, {
    object: _.ZSU.CONTEXT_MENU,
    children: (0, r.jsxs)(o.W1t, {
      onClose: t,
      navId: "video-device-context",
      variant: "fixed",
      "aria-label": m.intl.string(m.t.F122Gz),
      onSelect: n,
      onInteraction: E,
      children: [O, (0, r.jsxs)(o.rXV, {
        children: [v, i ? A : null]
      })]
    })
  })
}