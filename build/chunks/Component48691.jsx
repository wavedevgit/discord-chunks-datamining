/** Chunk was on 66866 **/
/** chunk id: 48691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => p,
  t: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk377171 = require("./377171.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk803635 = require("./803635.js");

function u(e) {
  let {
    label: t,
    backgroundColor: n = a.Z.BUTTON_SECONDARY_BACKGROUND,
    icon: l,
    iconColor: o
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
    }), (0, r.jsx)(l, {
      className: c.badgeIcon,
      color: null != o ? o : "currentColor",
      "aria-hidden": true
    })]
  })
}

function d() {
  return (0, Chunk255367.jsx)(u, {
    label: Chunk388032.intl.string(Chunk388032.t["I+02Gh"]),
    backgroundColor: "#207B8D",
    icon: Chunk481060.T$Z
  })
}

function p() {
  return (0, Chunk255367.jsx)(u, {
    label: Chunk388032.intl.string(Chunk388032.t.TgsPaG),
    icon: Chunk481060.vdY,
    iconColor: (0, Chunk44315.Lq)(Chunk981631.Ilk.PRIMARY_330)
  })
}