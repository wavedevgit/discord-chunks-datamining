/** Chunk was on web.js **/
/** chunk id: 48691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => f,
  t: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk377171 = require("./377171.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk803635 = require("./803635.js");

function u(e) {
  let {
    label: t,
    backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND,
    icon: a,
    iconColor: s
  } = e;
  return (0, r.jsxs)("div", {
    className: c.badge,
    style: {
      backgroundColor: n
    },
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: c.__invalid_badgeText,
      children: t
    }), (0, r.jsx)(a, {
      className: c.badgeIcon,
      color: null != s ? s : "currentColor",
      "aria-hidden": true
    })]
  })
}

function d() {
  return (0, Chunk54381.jsx)(u, {
    label: Chunk388032.intl.string(Chunk388032.t["I+02Gs"]),
    backgroundColor: "#207B8D",
    icon: Chunk481060.T$Z
  })
}

function f() {
  return (0, Chunk54381.jsx)(u, {
    label: Chunk388032.intl.string(Chunk388032.t.TgsPaP),
    icon: Chunk481060.vdY,
    iconColor: (0, Chunk44315.Lq)(Chunk981631.Ilk.PRIMARY_330)
  })
}