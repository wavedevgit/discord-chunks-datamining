/** Chunk was on 29679 **/
/** chunk id: 273282, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk884858 = require("./884858.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk892803 = require("./892803.js"),
  Chunk434404 = require("./434404.js"),
  Chunk465682 = require("./465682.jsx"),
  Chunk821458 = require("./821458.jsx"),
  Chunk585961 = require("./585961.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289059 = require("./289059.js");

function j(e) {
  let {
    guild: t,
    canManageGuild: n,
    buttonClassName: j
  } = e, {
    analyticsLocations: v
  } = (0, a.ZP)(), _ = t.features.has(p.GuildFeatures.INVITE_SPLASH), C = n && _, O = i.useRef(null), {
    enabled: y
  } = c.Z.useConfig({
    location: "GuildSettingsInviteBackgroundUploadButton"
  }), E = i.useCallback(e => {
    d.Z.updateGuild({
      splash: e
    })
  }, []), N = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, g.E6)({
      guild: t,
      analyticsLocations: v,
      analyticsSection: p.jXE.GUILD_INVITE_BACKGROUND,
      analyticsObject: p.qAy.BUTTON_CTA,
      perks: (0, f.o9)()
    })
  }, [v, t]), I = i.useCallback(() => {
    var e;
    null == (e = O.current) || e.activateUploadDialogue()
  }, []);
  return _ ? (0, r.jsxs)("div", {
    className: j,
    children: [(0, r.jsx)(l.zxk, {
      disabled: !C,
      variant: "primary",
      text: b.intl.string(b.t.yG2pUi),
      onClick: I
    }), (0, r.jsx)("div", {
      className: x.hiddenInputContainer,
      children: (0, r.jsx)(o.ZP, {
        ref: O,
        disabled: !C,
        onChange: E,
        maxFileSizeBytes: h.B,
        onFileSizeError: () => (0, s.Z)(h.B),
        tabIndex: false,
        "aria-hidden": true
      })
    })]
  }) : y ? (0, r.jsx)("div", {
    className: j,
    children: (0, r.jsx)(u.v, {
      onClick: N
    })
  }) : (0, r.jsx)(m.P, {
    className: j,
    onClick: N
  })
}