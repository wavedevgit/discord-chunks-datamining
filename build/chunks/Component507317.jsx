/** Chunk was on 9536 **/
/** chunk id: 507317, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk551952 = require("./551952.js");
let j = function(e) {
  let {
    guild: t
  } = e, j = t.features.has(f.GuildFeatures.BANNER), v = i.useCallback((e, i) => {
    if (null == e || true === i) return void g.Z.saveGuild(t.id, {
      homeHeader: null
    });
    (0, l.ZDy)(async () => {
      let {
        default: l
      } = await Promise.all([n.e("30409"), n.e("91689"), n.e("59732"), n.e("76543")]).then(n.bind(n, 712451));
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
        uploadType: b.pC.HOME_HEADER
      }, n))
    })
  }, [t.id]), O = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, a.yw)(f.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: f.jXE.GUILD_SETTINGS_ONBOARDING,
        object: f.qAy.LEARN_MORE
      },
      guild_id: null == t ? true : t.id,
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
  }, [t]), y = (0, r.jsx)(c.Z, {
    image: t.homeHeader,
    makeURL: e => null != e ? u.ZP.getGuildHomeHeaderURL({
      id: t.id,
      homeHeader: e
    }) : null,
    disabled: !j,
    onChange: v,
    hint: h.intl.string(h.t.NyXznh),
    enabled: j,
    maxFileSizeBytes: p.B
  });
  return j ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: x.sectionHeader,
      children: [(0, r.jsx)(l.Heading, {
        className: x.header,
        variant: "heading-lg/extrabold",
        children: h.intl.string(h.t.BBj1nY)
      }), (0, r.jsx)(s.Z, {
        className: x.boostIndicator,
        guild: t,
        guildFeature: f.GuildFeatures.BANNER,
        onClick: O
      })]
    }), (0, r.jsxs)("div", {
      className: x.section,
      children: [(0, r.jsxs)("div", {
        className: x.homeBannerExplainer,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: h.intl.string(h.t.Vwintv)
        }), (0, r.jsx)("div", {
          className: x.uploadButton,
          children: (0, r.jsx)(d.Z, {
            onChange: v,
            maxFileSizeBytes: p.B,
            text: h.intl.string(h.t.yG2pUi),
            size: "md",
            variant: "primary"
          })
        })]
      }), (0, r.jsx)("div", {
        children: y
      })]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: x.sectionHeader,
      children: [(0, r.jsx)(l.Heading, {
        className: x.header,
        variant: "heading-lg/extrabold",
        children: h.intl.string(h.t.BBj1nY)
      }), (0, r.jsx)(s.Z, {
        className: x.boostIndicator,
        guild: t,
        guildFeature: f.GuildFeatures.BANNER,
        onClick: O
      })]
    }), (0, r.jsxs)("div", {
      className: x.section,
      children: [(0, r.jsxs)("div", {
        className: x.homeBannerExplainer,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: x.bannerDescription,
          children: h.intl.string(h.t.Vwintv)
        }), (0, r.jsx)(l.Button, {
          variant: "expressive",
          icon: l.Ucv,
          text: h.intl.string(h.t["+7XY31"]),
          onClick: O
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(l.P3F, {
          "aria-hidden": true,
          tabIndex: false,
          onClick: O,
          children: y
        })
      })]
    })]
  })
}