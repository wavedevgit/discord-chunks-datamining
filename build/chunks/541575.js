/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => v
}), n(266796);
var r = n(200651);
n(192379);
var i = n(780384),
  s = n(481060),
  a = n(410030),
  l = n(367907),
  o = n(906732),
  A = n(91218),
  c = n(807582),
  d = n(518738),
  u = n(26323),
  g = n(764260),
  f = n(981631),
  m = n(30513),
  p = n(388032),
  h = n(450137);

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
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
let v = function(e) {
  let {
    guild: t,
    disabled: v,
    role: x
  } = e, N = (0, a.ZP)(), j = (0, d.oC)(t.id, x), {
    analyticsLocations: E
  } = (0, o.ZP)(), I = () => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("22942").then(n.bind(n, 660727));
      return n => (0, r.jsx)(e, b(C({}, n), {
        guildId: t.id,
        onUploadIcon: e => (0, g._l)(x.id, e, null),
        onSelectUnicodeEmoji: e => (0, g._l)(x.id, null, e)
      }))
    })
  }, O = t.features.has(f.oNc.ROLE_ICONS), y = e => {
    O || ((0, l.yw)(f.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: b(C({}, e), {
        section: f.jXE.CUSTOM_ROLE_ICONS_TOOLTIP
      }),
      guild_id: null == t ? void 0 : t.id,
      location_stack: E
    }), (0, u.Z)({
      analyticsLocations: E,
      analyticsSourceLocation: {
        page: f.ZY5.GUILD_SETTINGS,
        section: f.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
        object: f.qAy.BADGE
      },
      guild: t,
      perks: (0, m.Yp)()
    }))
  }, w = (0, r.jsx)(c.Z, {
    className: h.availabilityIndicator,
    guild: t,
    guildFeature: f.oNc.ROLE_ICONS,
    tooltipPosition: "top",
    hideTooltip: O,
    onClick: () => y({
      object: f.qAy.LEARN_MORE,
      objectType: f.Qqv.TIER_2
    })
  });
  return (0, r.jsxs)(s.xJW, {
    className: h.container,
    children: [(0, r.jsxs)(s.vwX, {
      className: h.formTitle,
      children: [(0, r.jsx)("div", {
        children: p.NW.string(p.t.B9grJy)
      }), w]
    }), (0, r.jsx)(s.R94, {
      className: h.description,
      children: p.NW.string(p.t.I3YQeX)
    }), (0, r.jsxs)("div", {
      className: h.rolePreviewArea,
      children: [(0, r.jsx)("div", {
        className: h.previewContainer,
        children: null != j ? (0, r.jsx)(A.Z, b(C({}, j), {
          className: h.roleIconPreview,
          enableTooltip: !1
        })) : (0, r.jsx)(s.FmF, {
          size: "custom",
          color: "currentColor",
          width: 24,
          height: 24,
          className: h.preview
        })
      }), (0, r.jsx)(s.zxk, {
        className: h.button,
        color: (0, i.ap)(N) ? s.zxk.Colors.PRIMARY : s.zxk.Colors.WHITE,
        look: s.zxk.Looks.OUTLINED,
        onClick: () => t.hasFeature(f.oNc.ROLE_ICONS) ? I() : y({
          object: f.qAy.UPLOAD_IMAGE
        }),
        disabled: v,
        children: p.NW.string(p.t.mD1oGB)
      }), null != j ? (0, r.jsx)(s.zxk, {
        className: h.button,
        color: (0, i.ap)(N) ? s.zxk.Colors.PRIMARY : s.zxk.Colors.TRANSPARENT,
        look: s.zxk.Looks.BLANK,
        onClick: () => {
          (0, g._l)(x.id, null, null)
        },
        disabled: v,
        children: p.NW.string(p.t["uY+Nk5"])
      }) : null]
    })]
  })
}