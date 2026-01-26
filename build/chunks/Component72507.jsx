/** Chunk was on 39048 **/
/** chunk id: 72507, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => b
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

function b(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: b
  } = e, {
    analyticsLocations: x
  } = (0, s.Ay)(), j = t.features.has(g.GuildFeatures.INVITE_SPLASH), _ = n && j, O = i.useRef(null), v = i.useCallback(e => {
    c.A.updateGuild({
      splash: e
    })
  }, []), y = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, u.p_)({
      guild: t,
      analyticsLocations: x,
      analyticsSection: g.JJy.GUILD_INVITE_BACKGROUND,
      analyticsObject: g.ZSU.BUTTON_CTA,
      perks: (0, m.Lp)()
    })
  }, [x, t]), A = i.useCallback(() => {
    var e;
    null == (e = O.current) || e.activateUploadDialogue()
  }, []);
  return j ? (0, r.jsxs)("div", {
    className: b,
    children: [(0, r.jsx)(l.$nd, {
      disabled: !_,
      variant: "primary",
      text: f.intl.string(f.t.yG2pUi),
      onClick: A
    }), (0, r.jsx)("div", {
      className: h.y,
      children: (0, r.jsx)(o.Ay, {
        ref: O,
        disabled: !_,
        onChange: v,
        maxFileSizeBytes: p.j,
        onFileSizeError: () => (0, a.A)(p.j),
        tabIndex: false,
        "aria-hidden": true
      })
    })]
  }) : (0, r.jsx)("div", {
    className: b,
    children: (0, r.jsx)(d.u, {
      onClick: y
    })
  })
}