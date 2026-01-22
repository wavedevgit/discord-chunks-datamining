/** Chunk was on 47841 **/
/** chunk id: 91534, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => N
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
let y = {
    page: Chunk652215.liQ.GUILD_SETTINGS,
    section: Chunk652215.JJy.GUILD_SETTINGS_STICKERS,
    object: Chunk652215.ZSU.BOOSTING_BANNER
  },
  v = e => {
    let {
      guild: t
    } = e, {
      analyticsLocations: n
    } = (0, a.Ay)(), i = (0, u.A)(t.id).available, s = h.M2T[h.TVA.TIER_1] - i;
    return (0, r.jsxs)("div", {
      className: O.Zj,
      children: [(0, r.jsx)(l.Heading, {
        className: O.$P,
        variant: "heading-xl/semibold",
        children: j.intl.string(j.t.hzCkyg)
      }), (0, r.jsx)(l.Text, {
        className: O.GR,
        variant: "text-md/normal",
        children: j.intl.string(j.t.jcesAE)
      }), (0, r.jsxs)(l.ButtonGroup, {
        className: O.JO,
        children: [(0, r.jsx)(l.Button, {
          variant: "overlay-primary",
          text: j.intl.string(j.t.Q5dbTi),
          onClick: () => (0, d.A)({
            analyticsLocations: n,
            analyticsLocation: y,
            guildId: t.id,
            totalNumberOfSlotsToAssign: s
          })
        }), (0, r.jsx)(l.Button, {
          variant: "overlay-primary",
          text: j.intl.string(j.t.hvVgAZ),
          onClick: () => (0, c.K)({
            guildId: t.id,
            location: {
              section: h.JJy.GUILD_SETTINGS_STICKERS
            }
          })
        })]
      })]
    })
  },
  A = () => (0, r.jsxs)(l.BJc, {
    gap: 8,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-md/medium",
      children: j.intl.string(j.t["9N2OWD"])
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: j.intl.format(j.t.hxLviw, {
        fileSize: (0, b.up)(524288, {
          useKibibytes: true
        })
      })
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: j.intl.format(j.t.UBj0aX, {
        articleUrl: p.A.getArticleURL(h.MVz.STICKERS_UPLOAD)
      })
    })]
  }),
  E = e => {
    let t, n, i, {
        guild: l,
        guildStickers: s
      } = e,
      a = l.premiumTier,
      c = (0, m.yA)(s, a),
      d = (0, m.ax)(a),
      u = (0, m.aG)(a),
      f = s.length;
    return null == d || a === h.TVA.TIER_3 || c > 0 ? null : (f > u ? (t = j.intl.formatToPlainString(j.t.ZtAY1f, {
      level: d
    }), n = j.intl.formatToPlainString(j.t["13hOWm"], {
      level: d
    }), i = h.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = j.intl.string(j.t.zT9SxY), n = j.intl.formatToPlainString(j.t.YaW9wI, {
      level: d,
      numAdditional: (0, m.Cp)(d)
    }), i = h.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(o.A, {
      header: t,
      text: n,
      guild: l,
      analyticsLocation: {
        page: h.liQ.GUILD_SETTINGS,
        section: h.JJy.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, m.k1)(d)
      }
    }))
  },
  N = () => {
    let e = (0, i.bG)([x.A], () => x.A.getGuild()),
      t = (0, i.bG)([f.A], () => {
        var t;
        return null != e && null != (t = f.A.getStickersByGuildId(e.id)) ? t : []
      }, [e]),
      {
        analyticsLocations: n
      } = (0, a.Ay)(s.A.STICKERS);
    if (null == e) return null;
    let c = e.premiumTier !== h.TVA.NONE || t.length > 0;
    return (0, r.jsx)(a.f5, {
      value: n,
      children: (0, r.jsxs)(l.BJc, {
        gap: 16,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          children: j.intl.string(j.t.R5nQkS)
        }), c ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)(E, {
            guild: e,
            guildStickers: t
          }), (0, r.jsx)(A, {})]
        }) : (0, r.jsx)(v, {
          guild: e
        }), (0, r.jsx)(l.cGx, {
          className: O.yF
        }), (0, r.jsx)(g.A, {
          guild: e
        })]
      })
    })
  }