/** Chunk was on web.js **/
/** chunk id: 827437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk315246 = require("./315246.jsx"),
  Chunk92240 = require("./92240.js"),
  Chunk679492 = require("./679492.jsx"),
  Chunk645463 = require("./645463.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  var t;
  let {
    children: n,
    user: p,
    activity: _,
    entry: h,
    display: m,
    onSelect: g,
    onClose: E,
    appContext: y,
    targetElementRef: b
  } = e, [O, v] = i.useState(false), {
    analyticsLocations: A
  } = (0, o.Ay)(s.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU), I = (0, c.A)({
    display: m,
    user: p,
    activity: _,
    entry: h,
    analyticsLocations: A
  }), S = (0, u.NR)(), T = i.useRef(null), C = null != (t = null == S ? true : S.interactionPopoutTargetRef) ? t : T, N = (0, d.A)({
    entry: h,
    activity: _,
    user: p,
    display: m,
    onClose: E,
    onAction: I,
    isMenuOpen: O,
    appContext: y
  });
  return 0 === N.length || p.bot ? null : (0, r.jsx)(a.YNO, {
    targetElementRef: null != b ? b : C,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    onRequestOpen: () => {
      I({
        action: "OPEN_MENU"
      }), v(true)
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, r.jsx)(a.W1t, {
          "data-menu-migration-ready": true,
          navId: l.n,
          onClose: () => {
            t(), v(false)
          },
          "aria-label": f.intl.string(f.t.PlAQz1),
          onSelect: g,
          children: (0, r.jsx)(a.rXV, {
            children: N
          })
        })
      })
    },
    children: n
  })
}