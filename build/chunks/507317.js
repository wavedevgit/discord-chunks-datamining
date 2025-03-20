/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(367907),
  l = n(807582),
  o = n(26323),
  A = n(516129),
  c = n(345861),
  d = n(709586),
  u = n(768581),
  g = n(434404),
  f = n(981631),
  m = n(30513),
  p = n(486324),
  h = n(200299),
  C = n(388032),
  b = n(668813);
let v = function(e) {
  let {
    guild: t
  } = e, v = t.hasFeature(f.oNc.BANNER), x = i.useCallback((e, i) => {
    if (null == e || void 0 === i) {
      g.Z.saveGuild(t.id, {
        homeHeader: null
      });
      return
    }(0, s.ZDy)(async () => {
      let {
        default: s
      } = await Promise.all([n.e("91689"), n.e("59732"), n.e("25005"), n.e("30719")]).then(n.bind(n, 73620));
      return n => (0, r.jsx)(s, function(e) {
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
      }({
        imageUri: e,
        file: i,
        onCrop: e => {
          let {
            imageUri: n
          } = e;
          return g.Z.saveGuild(t.id, {
            homeHeader: n
          })
        },
        uploadType: p.pC.HOME_HEADER
      }, n))
    })
  }, [t.id]), N = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, a.yw)(f.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: f.jXE.GUILD_SETTINGS_ONBOARDING,
        object: f.qAy.LEARN_MORE
      },
      guild_id: null == t ? void 0 : t.id,
      location_stack: []
    }), (0, o.Z)({
      analyticsLocations: [],
      analyticsSourceLocation: {
        section: f.jXE.GUILD_SETTINGS_ONBOARDING,
        object: f.qAy.ONBOARDING_EDIT,
        page: f.ZY5.GUILD_SETTINGS
      },
      guild: t,
      perks: (0, m.XO)()
    })
  }, [t]), j = (0, r.jsx)(A.Z, {
    image: t.homeHeader,
    makeURL: e => null != e ? u.ZP.getGuildHomeHeaderURL({
      id: t.id,
      homeHeader: e
    }) : null,
    disabled: !v,
    onChange: x,
    hint: C.NW.string(C.t.NyXznp),
    enabled: v,
    maxFileSizeBytes: h.B
  });
  return v ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: b.sectionHeader,
      children: [(0, r.jsx)(s.X6q, {
        className: b.header,
        variant: "heading-lg/extrabold",
        children: C.NW.string(C.t.BBj1nZ)
      }), (0, r.jsx)(l.Z, {
        className: b.boostIndicator,
        guild: t,
        guildFeature: f.oNc.BANNER,
        onClick: N
      })]
    }), (0, r.jsxs)("div", {
      className: b.section,
      children: [(0, r.jsxs)("div", {
        className: b.homeBannerExplainer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: C.NW.string(C.t.Vwintr)
        }), (0, r.jsx)(c.Z, {
          color: s.Ttl.BRAND,
          className: b.uploadButton,
          buttonCTA: C.NW.string(C.t.yG2pUl),
          onChange: x,
          maxFileSizeBytes: h.B
        })]
      }), (0, r.jsx)("div", {
        children: j
      })]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: b.sectionHeader,
      children: [(0, r.jsx)(s.X6q, {
        className: b.header,
        variant: "heading-lg/extrabold",
        children: C.NW.string(C.t.BBj1nZ)
      }), (0, r.jsx)(l.Z, {
        className: b.boostIndicator,
        guild: t,
        guildFeature: f.oNc.BANNER,
        onClick: N
      })]
    }), (0, r.jsxs)("div", {
      className: b.section,
      children: [(0, r.jsxs)("div", {
        className: b.homeBannerExplainer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: C.NW.string(C.t.Vwintr)
        }), (0, r.jsxs)(s.gtL, {
          className: b.upsellButton,
          innerClassName: b.upsellButtonInner,
          color: s.zxk.Colors.GREEN,
          onClick: N,
          children: [(0, r.jsx)(d.Z, {
            height: 16,
            width: 16
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: C.NW.string(C.t["+7XY39"])
          })]
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(s.P3F, {
          "aria-hidden": !0,
          tabIndex: -1,
          onClick: N,
          children: j
        })
      })]
    })]
  })
}