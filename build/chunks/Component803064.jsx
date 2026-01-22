/** Chunk was on 47841 **/
/** chunk id: 803064, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk753838 = require("./753838.jsx"),
  Chunk631305 = require("./631305.jsx"),
  Chunk664007 = require("./664007.jsx"),
  Chunk405810 = require("./405810.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk339984 = require("./339984.js"),
  Chunk478644 = require("./478644.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659233 = require("./659233.js");
let j = function(e) {
  let {
    guild: t
  } = e, j = t.features.has(g.GuildFeatures.BANNER), O = i.useCallback((e, i) => {
    null == e || true === i ? f.A.saveGuild(t.id, {
      homeHeader: null
    }) : (0, l.mMO)(async () => {
      let {
        default: l
      } = await Promise.all([n.e("35929"), n.e("79149"), n.e("74571"), n.e("94073")]).then(n.bind(n, 142630));
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
          return f.A.saveGuild(t.id, {
            homeHeader: n
          })
        },
        uploadType: m.HL.HOME_HEADER
      }, n))
    })
  }, [t.id]), y = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), (0, s.zV)(g.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: g.JJy.GUILD_SETTINGS_ONBOARDING,
        object: g.ZSU.LEARN_MORE
      },
      guild_id: null == t ? true : t.id,
      location_stack: []
    }), (0, c.A)({
      analyticsLocations: [],
      analyticsSourceLocation: {
        section: g.JJy.GUILD_SETTINGS_ONBOARDING,
        object: g.ZSU.ONBOARDING_EDIT,
        page: g.liQ.GUILD_SETTINGS
      },
      guild: t,
      perks: (0, b.QR)()
    })
  }, [t]), v = (0, r.jsx)(o.A, {
    image: t.homeHeader,
    makeURL: e => null != e ? u.Ay.getGuildHomeHeaderURL({
      id: t.id,
      homeHeader: e
    }) : null,
    disabled: !j,
    onChange: O,
    hint: x.intl.string(x.t.NyXznh),
    enabled: j,
    maxFileSizeBytes: p.j
  });
  return j ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: h.bV,
      children: [(0, r.jsx)(l.Heading, {
        className: h.wx,
        variant: "heading-lg/extrabold",
        children: x.intl.string(x.t.BBj1nY)
      }), (0, r.jsx)(a.A, {
        className: h.ts,
        guild: t,
        guildFeature: g.GuildFeatures.BANNER,
        onClick: y
      })]
    }), (0, r.jsxs)("div", {
      className: h.uW,
      children: [(0, r.jsxs)("div", {
        className: h.uc,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: x.intl.string(x.t.Vwintv)
        }), (0, r.jsx)("div", {
          className: h.au,
          children: (0, r.jsx)(d.A, {
            onChange: O,
            maxFileSizeBytes: p.j,
            text: x.intl.string(x.t.yG2pUi),
            size: "md",
            variant: "primary"
          })
        })]
      }), (0, r.jsx)("div", {
        children: v
      })]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: h.bV,
      children: [(0, r.jsx)(l.Heading, {
        className: h.wx,
        variant: "heading-lg/extrabold",
        children: x.intl.string(x.t.BBj1nY)
      }), (0, r.jsx)(a.A, {
        className: h.ts,
        guild: t,
        guildFeature: g.GuildFeatures.BANNER,
        onClick: y
      })]
    }), (0, r.jsxs)("div", {
      className: h.uW,
      children: [(0, r.jsxs)("div", {
        className: h.uc,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: h.tb,
          children: x.intl.string(x.t.Vwintv)
        }), (0, r.jsx)(l.Button, {
          variant: "expressive",
          icon: l._Jp,
          text: x.intl.string(x.t["+7XY31"]),
          onClick: y
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(l.DUT, {
          "aria-hidden": true,
          tabIndex: false,
          onClick: y,
          children: v
        })
      })]
    })]
  })
}