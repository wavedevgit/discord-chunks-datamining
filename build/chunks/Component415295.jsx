/** Chunk was on web.js **/
/** chunk id: 415295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u,
  S: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk530611 = require("./530611.js");

function l(e) {
  let {
    label: t,
    backgroundColor: n = i.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
    icon: s,
    iconColor: l
  } = e;
  return (0, r.jsxs)("div", {
    className: o.q,
    style: {
      backgroundColor: n
    },
    children: [(0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: o.__invalid_badgeText,
      children: t
    }), (0, r.jsx)(s, {
      className: o.r,
      color: null != l ? l : "currentColor",
      "aria-hidden": true
    })]
  })
}

function c() {
  return (0, r.jsx)(l, {
    label: s.intl.string(s.t["I+02Gs"]),
    backgroundColor: "#207B8D",
    icon: a.BZI
  })
}

function u() {
  return (0, r.jsx)(l, {
    label: s.intl.string(s.t.TgsPaP),
    icon: a.R2l,
    iconColor: i.A.unsafe_rawColors.PRIMARY_330.css
  })
}