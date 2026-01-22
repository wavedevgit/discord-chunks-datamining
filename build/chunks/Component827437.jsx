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
    appContext: b,
    targetElementRef: y
  } = e, [O, A] = i.useState(false), {
    analyticsLocations: v
  } = (0, o.Ay)(s.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU), S = (0, c.A)({
    display: m,
    user: p,
    activity: _,
    entry: h,
    analyticsLocations: v
  }), I = (0, u.NR)(), T = i.useRef(null), C = null != (t = null == I ? true : I.interactionPopoutTargetRef) ? t : T, N = (0, d.A)({
    entry: h,
    activity: _,
    user: p,
    display: m,
    onClose: E,
    onAction: S,
    isMenuOpen: O,
    appContext: b
  });
  return 0 === N.length || p.bot ? null : (0, r.jsx)(a.YNO, {
    targetElementRef: null != y ? y : C,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    onRequestOpen: () => {
      S({
        action: "OPEN_MENU"
      }), A(true)
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)("div", {
        onClick: e => e.stopPropagation(),
        children: (0, r.jsx)(a.W1t, {
          navId: l.n,
          onClose: () => {
            t(), A(false)
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