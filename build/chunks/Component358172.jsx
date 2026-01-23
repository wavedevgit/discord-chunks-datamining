/** Chunk was on web.js **/
/** chunk id: 358172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let E = function(e) {
  let {
    className: t,
    guildId: n,
    boostingVariant: i
  } = e, E = (0, s.bG)([p.A], () => p.A.getGuild(n), [n]), y = (0, f.A)(null == E ? true : E.id).total;
  return null == E ? (0, r.jsx)("div", {
    className: a()(t, g.bo),
    children: (0, r.jsx)("div", {
      className: g.$g,
      children: (0, r.jsx)(l.Text, {
        variant: "text-lg/bold",
        children: m.intl.string(m.t["6Kwwuo"])
      })
    })
  }) : (0, r.jsxs)("div", {
    className: a()(t, g.bo),
    children: [(0, r.jsx)(c.A, {
      className: g.__invalid_guildIcon,
      guild: E,
      size: c.A.Sizes.LARGER
    }), (0, r.jsxs)("div", {
      className: g.$g,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/bold",
        children: E.name
      }), (0, r.jsxs)("div", {
        className: g.TZ,
        children: [(0, r.jsx)(l._Jp, {
          color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: g.Me
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: m.intl.format(m.t["pob/cL"], {
            subscriptions: y
          })
        }), (0, r.jsx)("div", {
          className: g.me
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, _.gb)(E.premiumTier, {
            useLevels: false
          })
        })]
      })]
    }), i ? (0, r.jsx)(d.A, {
      guild: E,
      analyticsLocation: {
        page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
        section: h.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: h.ZSU.BUTTON_CTA,
        objectType: h.AnalyticsObjectTypes.BUY
      },
      pauseAnimation: true,
      size: o.$n.Sizes.MEDIUM,
      color: o.$n.Colors.PRIMARY,
      buttonText: m.intl.string(m.t.aBHecF)
    }) : (0, r.jsx)(l.Button, {
      variant: "secondary",
      text: m.intl.string(m.t.KLOhbO),
      onClick: () => {
        (0, u.K)({
          guildId: E.id,
          location: {
            section: h.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      }
    })]
  })
}