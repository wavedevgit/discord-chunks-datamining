/** Chunk was on 92917 **/
/** chunk id: 415295, original params: e,t,n (module,exports,require) **/
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

function o(e) {
  let {
    label: t,
    backgroundColor: n = i.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
    icon: a,
    iconColor: o
  } = e;
  return (0, r.jsxs)("div", {
    className: s.q,
    style: {
      backgroundColor: n
    },
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: s.__invalid_badgeText,
      children: t
    }), (0, r.jsx)(a, {
      className: s.r,
      color: null != o ? o : "currentColor",
      "aria-hidden": true
    })]
  })
}

function c() {
  return (0, r.jsx)(o, {
    label: a.intl.string(a.t["I+02Gs"]),
    backgroundColor: "#207B8D",
    icon: l.BZI
  })
}

function u() {
  return (0, r.jsx)(o, {
    label: a.intl.string(a.t.TgsPaP),
    icon: l.R2l,
    iconColor: i.A.unsafe_rawColors.PRIMARY_330.css
  })
}