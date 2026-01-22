/** Chunk was on 47841 **/
/** chunk id: 319805, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk753838 = require("./753838.jsx"),
  Chunk201275 = require("./201275.js"),
  Chunk631305 = require("./631305.jsx"),
  Chunk657048 = require("./657048.jsx"),
  Chunk636042 = require("./636042.js"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk636997 = require("./636997.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = function(e) {
  let {
    guild: t,
    disabled: h,
    role: j
  } = e, O = (0, c.qE)(t.id, j), {
    analyticsLocations: y
  } = (0, s.Ay)(), v = t.features.has(f.GuildFeatures.ROLE_ICONS), A = e => {
    v || ((0, l.zV)(f.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: x(p({}, e), {
        section: f.JJy.CUSTOM_ROLE_ICONS_TOOLTIP
      }),
      guild_id: null == t ? true : t.id,
      location_stack: y
    }), (0, o.A)({
      analyticsLocations: y,
      analyticsSourceLocation: {
        page: f.liQ.GUILD_SETTINGS,
        section: f.JJy.GUILD_ROLE_EDIT_UPSELL_MODAL,
        object: f.ZSU.BADGE
      },
      guild: t,
      perks: (0, g.$_)()
    }))
  }, E = (0, r.jsx)(a.A, {
    className: m.Jz,
    guild: t,
    guildFeature: f.GuildFeatures.ROLE_ICONS,
    tooltipPosition: "top",
    hideTooltip: v,
    onClick: () => A({
      object: f.ZSU.LEARN_MORE,
      objectType: f.AnalyticsObjectTypes.TIER_2
    })
  });
  return (0, r.jsxs)("div", {
    className: m.kL,
    children: [(0, r.jsxs)(i.zEo, {
      className: m.Hc,
      children: [(0, r.jsx)("div", {
        children: b.intl.string(b.t.B9grJw)
      }), E]
    }), (0, r.jsx)(i.ayl, {
      className: m.h_,
      children: b.intl.string(b.t.I3YQeV)
    }), (0, r.jsxs)("div", {
      className: m.Mw,
      children: [(0, r.jsx)("div", {
        className: m.i1,
        children: null != O ? (0, r.jsx)(d.A, x(p({}, O), {
          className: m.s1,
          enableTooltip: false
        })) : (0, r.jsx)(i.XGR, {
          size: "custom",
          color: "currentColor",
          width: 24,
          height: 24,
          className: m.VH
        })
      }), (0, r.jsx)(i.Button, {
        onClick: () => t.features.has(f.GuildFeatures.ROLE_ICONS) ? void(0, i.mMO)(async () => {
          let {
            default: e
          } = await n.e("64939").then(n.bind(n, 836774));
          return n => (0, r.jsx)(e, x(p({}, n), {
            guildId: t.id,
            onUploadIcon: e => (0, u.n3)(j.id, e, null),
            onSelectUnicodeEmoji: e => (0, u.n3)(j.id, null, e)
          }))
        }) : A({
          object: f.ZSU.UPLOAD_IMAGE
        }),
        variant: "primary",
        disabled: h,
        text: b.intl.string(b.t.mD1oGB)
      }), null != O ? (0, r.jsx)(i.Button, {
        onClick: () => {
          (0, u.n3)(j.id, null, null)
        },
        variant: "critical-secondary",
        disabled: h,
        text: b.intl.string(b.t["uY+Nk/"])
      }) : null]
    })]
  })
}