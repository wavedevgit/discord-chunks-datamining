/** Chunk was on web.js **/
/** chunk id: 386019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk896449 = require("./896449.js"),
  Chunk960870 = require("./960870.js"),
  Chunk510659 = require("./510659.js"),
  Chunk848966 = require("./848966.js"),
  Chunk388032 = require("./388032.js");

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
  } = (0, s.ZP)(a.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU), T = (0, c.Z)({
    display: m,
    user: _,
    activity: p,
    entry: h,
    analyticsLocations: I
  }), S = (0, u.yi)(), A = i.useRef(null), N = null != (t = null == S ? true : S.interactionPopoutTargetRef) ? t : A, C = (0, d.Z)({
    entry: h,
    activity: p,
    user: _,
    display: m,
    onClose: E,
    onAction: T,
    isMenuOpen: O,
    appContext: b
  });
  return 0 === C.length || _.bot ? null : <o.yRy targetElementRef={null != y ? y : N} align={"top"} position={"right"} disablePointerEvents={false} onRequestOpen={() => {
      T({
        action: "OPEN_MENU"
      }), v(true)
    }} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, r.jsx)(o.v2r, {
          navId: l.N,
          onClose: () => {
            t(), v(false)
          },
          "aria-label": f.intl.string(f.t.PlAQz8),
          onSelect: g,
          children: (0, r.jsx)(o.kSQ, {
            children: C
          })
        })
      })
    }}>{n}</o.yRy>
}