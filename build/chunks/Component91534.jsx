/** Chunk was on 47841 **/
/** chunk id: 91534, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk509536 = require("./509536.jsx"),
  Chunk945086 = require("./945086.jsx"),
  Chunk212637 = require("./212637.jsx"),
  Chunk864310 = require("./864310.js"),
  Chunk679382 = require("./679382.js"),
  Chunk577092 = require("./577092.jsx"),
  Chunk255438 = require("./255438.js"),
  Chunk473145 = require("./473145.js"),
  Chunk975571 = require("./975571.js"),
  Chunk555337 = require("./555337.js"),
  Chunk652215 = require("./652215.js");
require("./823894.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk729168 = require("./729168.js");
let O = {
    page: Chunk652215.liQ.GUILD_SETTINGS,
    section: Chunk652215.JJy.GUILD_SETTINGS_STICKERS,
    object: Chunk652215.ZSU.BOOSTING_BANNER
  },
  v = e => {
    let {
      guild: t
    } = e, {
      analyticsLocations: n
    } = (0, a.Ay)(), i = (0, u.A)(t.id).available, s = x.M2T[x.TVA.TIER_1] - i;
    return (0, r.jsxs)("div", {
      className: _.Zj,
      children: [(0, r.jsx)(l.Heading, {
        className: _.$P,
        variant: "heading-xl/semibold",
        children: j.intl.string(j.t.hzCkyg)
      }), (0, r.jsx)(l.Text, {
        className: _.GR,
        variant: "text-md/normal",
        children: j.intl.string(j.t.jcesAE)
      }), (0, r.jsxs)(l.ButtonGroup, {
        className: _.JO,
        children: [(0, r.jsx)(l.Button, {
          variant: "overlay-primary",
          text: j.intl.string(j.t.Q5dbTi),
          onClick: () => (0, d.A)({
            analyticsLocations: n,
            analyticsLocation: O,
            guildId: t.id,
            totalNumberOfSlotsToAssign: s
          })
        }), (0, r.jsx)(l.Button, {
          variant: "overlay-primary",
          text: j.intl.string(j.t.hvVgAZ),
          onClick: () => (0, o.K)({
            guildId: t.id,
            location: {
              section: x.JJy.GUILD_SETTINGS_STICKERS
            }
          })
        })]
      })]
    })
  },
  y = () => (0, r.jsxs)(l.BJc, {
    gap: 8,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-md/medium",
      children: j.intl.string(j.t["9N2OWD"])
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: j.intl.format(j.t.hxLviw, {
        fileSize: (0, p.up)(524288, {
          useKibibytes: true
        })
      })
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: j.intl.format(j.t.UBj0aX, {
        articleUrl: b.A.getArticleURL(x.MVz.STICKERS_UPLOAD)
      })
    })]
  }),
  A = e => {
    let t, n, i, {
        guild: l,
        guildStickers: s
      } = e,
      a = l.premiumTier,
      o = (0, f.yA)(s, a),
      d = (0, f.ax)(a),
      u = (0, f.aG)(a),
      g = s.length;
    return null == d || a === x.TVA.TIER_3 || o > 0 ? null : (g > u ? (t = j.intl.formatToPlainString(j.t.ZtAY1f, {
      level: d
    }), n = j.intl.formatToPlainString(j.t["13hOWm"], {
      level: d
    }), i = x.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = j.intl.string(j.t.zT9SxY), n = j.intl.formatToPlainString(j.t.YaW9wI, {
      level: d,
      numAdditional: (0, f.Cp)(d)
    }), i = x.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(c.A, {
      header: t,
      text: n,
      guild: l,
      analyticsLocation: {
        page: x.liQ.GUILD_SETTINGS,
        section: x.JJy.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, f.k1)(d)
      }
    }))
  },
  E = () => {
    let e = (0, i.bG)([h.A], () => h.A.getGuild()),
      t = (0, i.bG)([g.A], () => {
        var t;
        return null != e && null != (t = g.A.getStickersByGuildId(e.id)) ? t : []
      }, [e]),
      {
        analyticsLocations: n
      } = (0, a.Ay)(s.A.STICKERS);
    if (null == e) return null;
    let o = e.premiumTier !== x.TVA.NONE || t.length > 0;
    return (0, r.jsx)(a.f5, {
      value: n,
      children: (0, r.jsxs)(l.BJc, {
        gap: 16,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          children: j.intl.string(j.t.R5nQkS)
        }), o ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)(A, {
            guild: e,
            guildStickers: t
          }), (0, r.jsx)(y, {})]
        }) : (0, r.jsx)(v, {
          guild: e
        }), (0, r.jsx)(l.cGx, {
          className: _.yF
        }), (0, r.jsx)(m.A, {
          guild: e
        })]
      })
    })
  }