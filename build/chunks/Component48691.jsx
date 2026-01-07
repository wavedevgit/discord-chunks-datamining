/** Chunk was on web.js **/
/** chunk id: 48691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => u,
  t: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405086 = require("./405086.js");

function l(e) {
  let {
    label: t,
    backgroundColor: n = i.Z.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
    icon: o,
    iconColor: l
  } = e;
  return (0, r.jsxs)("div", {
    className: s.badge,
    style: {
      backgroundColor: n
    },
    children: [(0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: s.__invalid_badgeText,
      children: t
    }), (0, r.jsx)(o, {
      className: s.badgeIcon,
      color: null != l ? l : "currentColor",
      "aria-hidden": true
    })]
  })
}

function c() {
  return (0, r.jsx)(l, {
    label: o.intl.string(o.t["I+02Gs"]),
    backgroundColor: "#207B8D",
    icon: a.T$Z
  })
}

function u() {
  return (0, r.jsx)(l, {
    label: o.intl.string(o.t.TgsPaP),
    icon: a.vdY,
    iconColor: i.Z.unsafe_rawColors.PRIMARY_330.css
  })
}