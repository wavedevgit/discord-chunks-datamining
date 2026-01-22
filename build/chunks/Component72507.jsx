/** Chunk was on 47841 **/
/** chunk id: 72507, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk2553 = require("./2553.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk342490 = require("./342490.jsx"),
  Chunk695800 = require("./695800.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk478644 = require("./478644.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk822679 = require("./822679.js");

function x(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: x
  } = e, {
    analyticsLocations: h
  } = (0, s.Ay)(), j = t.features.has(f.GuildFeatures.INVITE_SPLASH), O = n && j, y = i.useRef(null), v = i.useCallback(e => {
    o.A.updateGuild({
      splash: e
    })
  }, []), A = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.p_)({
      guild: t,
      analyticsLocations: h,
      analyticsSection: f.JJy.GUILD_INVITE_BACKGROUND,
      analyticsObject: f.ZSU.BUTTON_CTA,
      perks: (0, g.Lp)()
    })
  }, [h, t]), E = i.useCallback(() => {
    var e;
    null == (e = y.current) || e.activateUploadDialogue()
  }, []);
  return j ? (0, r.jsxs)("div", {
    className: x,
    children: [(0, r.jsx)(l.$nd, {
      disabled: !O,
      variant: "primary",
      text: m.intl.string(m.t.yG2pUi),
      onClick: E
    }), (0, r.jsx)("div", {
      className: p.y,
      children: (0, r.jsx)(c.Ay, {
        ref: y,
        disabled: !O,
        onChange: v,
        maxFileSizeBytes: b.j,
        onFileSizeError: () => (0, a.A)(b.j),
        tabIndex: false,
        "aria-hidden": true
      })
    })]
  }) : (0, r.jsx)("div", {
    className: x,
    children: (0, r.jsx)(d.u, {
      onClick: A
    })
  })
}