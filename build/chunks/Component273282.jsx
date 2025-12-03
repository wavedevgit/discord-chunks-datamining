/** Chunk was on 384 **/
/** chunk id: 273282, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk884858 = require("./884858.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk465682 = require("./465682.jsx"),
  Chunk821458 = require("./821458.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk43628 = require("./43628.js");

function b(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: b
  } = e, {
    analyticsLocations: x
  } = (0, a.ZP)(), j = t.features.has(g.GuildFeatures.INVITE_SPLASH), _ = n && j, v = i.useRef(null), O = i.useCallback(e => {
    c.Z.updateGuild({
      splash: e
    })
  }, []), C = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, d.E6)({
      guild: t,
      analyticsLocations: x,
      analyticsSection: g.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: g.qAy.BUTTON_CTA,
      perks: (0, m.o9)()
    })
  }, [x, t]), y = i.useCallback(() => {
    var e;
    null == (e = v.current) || e.activateUploadDialogue()
  }, []);
  return j ? (0, r.jsxs)("div", {
    className: b,
    children: [(0, r.jsx)(l.zxk, {
      disabled: !_,
      variant: "primary",
      text: f.intl.string(f.t.yG2pUi),
      onClick: y
    }), (0, r.jsx)("div", {
      className: h.hiddenInputContainer,
      children: (0, r.jsx)(o.ZP, {
        ref: v,
        disabled: !_,
        onChange: O,
        maxFileSizeBytes: p.B,
        onFileSizeError: () => (0, s.Z)(p.B),
        tabIndex: false,
        "aria-hidden": true
      })
    })]
  }) : (0, r.jsx)("div", {
    className: b,
    children: (0, r.jsx)(u.v, {
      onClick: C
    })
  })
}