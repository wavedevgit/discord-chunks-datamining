/** Chunk was on 60458 **/
/** chunk id: 507317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk807582 = require("./807582.jsx"),
  Chunk26323 = require("./26323.jsx"),
  Chunk516129 = require("./516129.jsx"),
  Chunk345861 = require("./345861.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk486324 = require("./486324.js"),
  Chunk200299 = require("./200299.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk193204 = require("./193204.js");
let v = function(e) {
  let {
    guild: t
  } = e, v = t.features.has(p.oNc.BANNER), _ = i.useCallback((e, i) => {
    if (null == e || true === i) return void g.Z.saveGuild(t.id, {
      homeHeader: null
    });
    (0, a.ZDy)(async () => {
      let {
        default: l
      } = await Promise.all([n.e("91689"), n.e("59732"), n.e("5583")]).then(n.bind(n, 712451));
      return n => (0, r.jsx)(l, function(e) {
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
        uploadType: f.pC.HOME_HEADER
      }, n))
    })
  }, [t.id]), O = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, s.yw)(p.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: p.jXE.GUILD_SETTINGS_ONBOARDING,
        object: p.qAy.LEARN_MORE
      },
      guild_id: null == t ? true : t.id,
      location_stack: []
    }), (0, c.Z)({
      analyticsLocations: [],
      analyticsSourceLocation: {
        section: p.jXE.GUILD_SETTINGS_ONBOARDING,
        object: p.qAy.ONBOARDING_EDIT,
        page: p.ZY5.GUILD_SETTINGS
      },
      guild: t,
      perks: (0, h.XO)()
    })
  }, [t]), y = (0, r.jsx)(d.Z, {
    image: t.homeHeader,
    makeURL: e => null != e ? m.ZP.getGuildHomeHeaderURL({
      id: t.id,
      homeHeader: e
    }) : null,
    disabled: !v,
    onChange: _,
    hint: x.intl.string(x.t.NyXznp),
    enabled: v,
    maxFileSizeBytes: b.B
  });
  return v ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: j.sectionHeader,
      children: [(0, r.jsx)(a.X6q, {
        className: j.header,
        variant: "heading-lg/extrabold",
        children: x.intl.string(x.t.BBj1nZ)
      }), (0, r.jsx)(o.Z, {
        className: j.boostIndicator,
        guild: t,
        guildFeature: p.oNc.BANNER,
        onClick: O
      })]
    }), (0, r.jsxs)("div", {
      className: j.section,
      children: [(0, r.jsxs)("div", {
        className: j.homeBannerExplainer,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: x.intl.string(x.t.Vwintr)
        }), (0, r.jsx)(u.Z, {
          color: l.Tt.BRAND,
          className: j.uploadButton,
          buttonCTA: x.intl.string(x.t.yG2pUl),
          onChange: _,
          maxFileSizeBytes: b.B
        })]
      }), (0, r.jsx)("div", {
        children: y
      })]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: j.sectionHeader,
      children: [(0, r.jsx)(a.X6q, {
        className: j.header,
        variant: "heading-lg/extrabold",
        children: x.intl.string(x.t.BBj1nZ)
      }), (0, r.jsx)(o.Z, {
        className: j.boostIndicator,
        guild: t,
        guildFeature: p.oNc.BANNER,
        onClick: O
      })]
    }), (0, r.jsxs)("div", {
      className: j.section,
      children: [(0, r.jsxs)("div", {
        className: j.homeBannerExplainer,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: j.bannerDescription,
          children: x.intl.string(x.t.Vwintr)
        }), (0, r.jsx)(a.zxk, {
          variant: "expressive",
          icon: a.$Eu,
          text: x.intl.string(x.t["+7XY39"]),
          onClick: O
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(a.P3F, {
          "aria-hidden": true,
          tabIndex: false,
          onClick: O,
          children: y
        })
      })]
    })]
  })
}