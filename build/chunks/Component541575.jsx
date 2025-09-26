/** Chunk was on 49236 **/
/** chunk id: 541575, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk91218 = require("./91218.jsx"),
  Chunk807582 = require("./807582.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk26323 = require("./26323.jsx"),
  Chunk84058 = require("./84058.js"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk155470 = require("./155470.js");

function h(e) {
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

function b(e, t) {
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
let x = function(e) {
  let {
    guild: t,
    disabled: x,
    role: j
  } = e, v = (0, c.oC)(t.id, j), {
    analyticsLocations: _
  } = (0, s.ZP)(), O = t.features.has(m.oNc.ROLE_ICONS), y = e => {
    O || ((0, l.yw)(m.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: b(h({}, e), {
        section: m.jXE.CUSTOM_ROLE_ICONS_TOOLTIP
      }),
      guild_id: null == t ? true : t.id,
      location_stack: _
    }), (0, d.Z)({
      analyticsLocations: _,
      analyticsSourceLocation: {
        page: m.ZY5.GUILD_SETTINGS,
        section: m.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
        object: m.qAy.BADGE
      },
      guild: t,
      perks: (0, g.Yp)()
    }))
  }, C = (0, r.jsx)(o.Z, {
    className: f.availabilityIndicator,
    guild: t,
    guildFeature: m.oNc.ROLE_ICONS,
    tooltipPosition: "top",
    hideTooltip: O,
    onClick: () => y({
      object: m.qAy.LEARN_MORE,
      objectType: m.Qqv.TIER_2
    })
  });
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsxs)(i.vwX, {
      className: f.formTitle,
      children: [(0, r.jsx)("div", {
        children: p.intl.string(p.t.B9grJy)
      }), C]
    }), (0, r.jsx)(i.R94, {
      className: f.description,
      children: p.intl.string(p.t.I3YQeX)
    }), (0, r.jsxs)("div", {
      className: f.rolePreviewArea,
      children: [(0, r.jsx)("div", {
        className: f.previewContainer,
        children: null != v ? (0, r.jsx)(a.Z, b(h({}, v), {
          className: f.roleIconPreview,
          enableTooltip: false
        })) : (0, r.jsx)(i.FmF, {
          size: "custom",
          color: "currentColor",
          width: 24,
          height: 24,
          className: f.preview
        })
      }), (0, r.jsx)(i.zxk, {
        onClick: () => t.features.has(m.oNc.ROLE_ICONS) ? void(0, i.ZDy)(async () => {
          let {
            default: e
          } = await n.e("22942").then(n.bind(n, 660727));
          return n => (0, r.jsx)(e, b(h({}, n), {
            guildId: t.id,
            onUploadIcon: e => (0, u._l)(j.id, e, null),
            onSelectUnicodeEmoji: e => (0, u._l)(j.id, null, e)
          }))
        }) : y({
          object: m.qAy.UPLOAD_IMAGE
        }),
        variant: "primary",
        disabled: x,
        text: p.intl.string(p.t.mD1oGB)
      }), null != v ? (0, r.jsx)(i.zxk, {
        onClick: () => {
          (0, u._l)(j.id, null, null)
        },
        variant: "critical-secondary",
        disabled: x,
        text: p.intl.string(p.t["uY+Nk5"])
      }) : null]
    })]
  })
}