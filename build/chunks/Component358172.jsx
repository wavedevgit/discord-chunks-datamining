/** Chunk was on 5606 **/
/** chunk id: 358172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk509536 = require("./509536.jsx"),
  Chunk721923 = require("./721923.jsx"),
  Chunk864310 = require("./864310.js"),
  Chunk71393 = require("./71393.js"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk246930 = require("./246930.js");
let h = function(e) {
  let {
    className: t,
    guildId: n,
    boostingVariant: i
  } = e, h = (0, s.bG)([_.A], () => _.A.getGuild(n), [n]), A = (0, p.A)(null == h ? true : h.id).total;
  return null == h ? (0, r.jsx)("div", {
    className: l()(t, b.bo),
    children: (0, r.jsx)("div", {
      className: b.$g,
      children: (0, r.jsx)(o.Text, {
        variant: "text-lg/bold",
        children: f.intl.string(f.t["6Kwwuo"])
      })
    })
  }) : (0, r.jsxs)("div", {
    className: l()(t, b.bo),
    children: [(0, r.jsx)(c.A, {
      className: b.__invalid_guildIcon,
      guild: h,
      size: c.A.Sizes.LARGER
    }), (0, r.jsxs)("div", {
      className: b.$g,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-lg/bold",
        children: h.name
      }), (0, r.jsxs)("div", {
        className: b.TZ,
        children: [(0, r.jsx)(o._Jp, {
          color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: b.Me
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: f.intl.format(f.t["pob/cL"], {
            subscriptions: A
          })
        }), (0, r.jsx)("div", {
          className: b.me
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, m.gb)(h.premiumTier, {
            useLevels: false
          })
        })]
      })]
    }), i ? (0, r.jsx)(u.A, {
      guild: h,
      analyticsLocation: {
        page: g.liQ.GUILD_BOOSTING_USER_SETTINGS,
        section: g.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: g.ZSU.BUTTON_CTA,
        objectType: g.AnalyticsObjectTypes.BUY
      },
      pauseAnimation: true,
      size: a.$n.Sizes.MEDIUM,
      color: a.$n.Colors.PRIMARY,
      buttonText: f.intl.string(f.t.aBHecF)
    }) : (0, r.jsx)(o.Button, {
      variant: "secondary",
      text: f.intl.string(f.t.KLOhbO),
      onClick: () => {
        (0, d.K)({
          guildId: h.id,
          location: {
            section: g.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      }
    })]
  })
}