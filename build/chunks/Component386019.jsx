/** Chunk was on web.js **/
/** chunk id: 386019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk896449 = require("./896449.jsx"),
  Chunk960870 = require("./960870.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk848966 = require("./848966.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  var t;
  let {
    children: n,
    user: _,
    activity: p,
    entry: h,
    display: m,
    onSelect: g,
    onClose: E,
    appContext: b,
    targetElementRef: y
  } = e, [O, v] = i.useState(false), {
    analyticsLocations: I
  } = (0, s.ZP)(o.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU), S = (0, c.Z)({
    display: m,
    user: _,
    activity: p,
    entry: h,
    analyticsLocations: I
  }), T = (0, u.yi)(), A = i.useRef(null), C = null != (t = null == T ? true : T.interactionPopoutTargetRef) ? t : A, N = (0, d.Z)({
    entry: h,
    activity: p,
    user: _,
    display: m,
    onClose: E,
    onAction: S,
    isMenuOpen: O,
    appContext: b
  });
  return 0 === N.length || _.bot ? null : (0, r.jsx)(a.yRy, {
    targetElementRef: null != y ? y : C,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    onRequestOpen: () => {
      S({
        action: "OPEN_MENU"
      }), v(true)
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, r.jsx)(a.v2r, {
          navId: l.N,
          onClose: () => {
            t(), v(false)
          },
          "aria-label": f.intl.string(f.t.PlAQz1),
          onSelect: g,
          children: (0, r.jsx)(a.kSQ, {
            children: N
          })
        })
      })
    },
    children: n
  })
}