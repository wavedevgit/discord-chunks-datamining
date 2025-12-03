/** Chunk was on 384 **/
/** chunk id: 312910, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk372444 = require("./372444.jsx"),
  Chunk852679 = require("./852679.jsx"),
  Chunk317169 = require("./317169.js"),
  Chunk926491 = require("./926491.js"),
  Chunk145499 = require("./145499.jsx"),
  Chunk424218 = require("./424218.js"),
  Chunk267642 = require("./267642.js"),
  Chunk63063 = require("./63063.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk611480 = require("./611480.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk96761 = require("./96761.js");
let O = {
    page: Chunk981631.ZY5.GUILD_SETTINGS,
    section: Chunk981631.jXE.GUILD_SETTINGS_STICKERS,
    object: Chunk981631.qAy.BOOSTING_BANNER
  },
  C = e => {
    let {
      guild: t
    } = e, {
      analyticsLocations: n
    } = (0, s.ZP)(), i = (0, d.Z)(t.id).available, a = x.oCV[x.Eu4.TIER_1] - i;
    return (0, r.jsxs)("div", {
      className: v.upsellContainer,
      children: [(0, r.jsx)(l.Heading, {
        className: v.upsellHeader,
        variant: "heading-xl/semibold",
        children: _.intl.string(_.t.hzCkyg)
      }), (0, r.jsx)(l.Text, {
        className: v.upsellDescription,
        variant: "text-md/normal",
        children: _.intl.string(_.t.jcesAE)
      }), (0, r.jsxs)(l.ButtonGroup, {
        className: v.upsellButtons,
        children: [(0, r.jsx)(l.Button, {
          variant: "overlay-primary",
          text: _.intl.string(_.t.Q5dbTi),
          onClick: () => (0, u.Z)({
            analyticsLocations: n,
            analyticsLocation: O,
            guildId: t.id,
            totalNumberOfSlotsToAssign: a
          })
        }), (0, r.jsx)(l.Button, {
          variant: "overlay-primary",
          text: _.intl.string(_.t.hvVgAZ),
          onClick: () => (0, o.f)({
            guildId: t.id,
            location: {
              section: x.jXE.GUILD_SETTINGS_STICKERS
            }
          })
        })]
      })]
    })
  },
  y = () => (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    gap: 8,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      children: Chunk388032.intl.string(Chunk388032.t["9N2OWD"])
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t.hxLviw, {
        fileSize: (0, Chunk424218.IC)(Chunk611480.Ht, {
          useKibibytes: true
        })
      })
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t.UBj0aX, {
        articleUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.STICKERS_UPLOAD)
      })
    })]
  }),
  N = e => {
    let t, n, i, {
        guild: l,
        guildStickers: a
      } = e,
      s = l.premiumTier,
      o = (0, f.Qi)(a, s),
      u = (0, f.FZ)(s),
      d = (0, f.A3)(s),
      g = a.length;
    return null == u || s === x.Eu4.TIER_3 || o > 0 ? null : (g > d ? (t = _.intl.formatToPlainString(_.t.ZtAY1f, {
      level: u
    }), n = _.intl.formatToPlainString(_.t["13hOWm"], {
      level: u
    }), i = x.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = _.intl.string(_.t.zT9SxY), n = _.intl.formatToPlainString(_.t.YaW9wI, {
      level: u,
      numAdditional: (0, f.ig)(u)
    }), i = x.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(c.Z, {
      header: t,
      text: n,
      guild: l,
      analyticsLocation: {
        page: x.ZY5.GUILD_SETTINGS,
        section: x.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, f.ge)(u)
      }
    }))
  },
  E = () => {
    let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
      t = (0, Chunk442837.e7)([Chunk926491.Z], () => {
        var t;
        return null != module && null != (t = Chunk926491.Z.getStickersByGuildId(module.id)) ? exports : []
      }, [module]),
      {
        analyticsLocations: n
      } = (0, Chunk906732.ZP)(Chunk100527.Z.STICKERS);
    if (null == module) return null;
    let o = module.premiumTier !== Chunk981631.Eu4.NONE || exports.length > 0;
    return (0, Chunk54381.jsx)(Chunk906732.Gt, {
      value: require,
      children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: Chunk388032.intl.string(Chunk388032.t.R5nQkS)
        }), Chunk623624 ? (0, Chunk54381.jsxs)("div", {
          children: [(0, Chunk54381.jsx)(N, {
            guild: module,
            guildStickers: exports
          }), (0, Chunk54381.jsx)(y, {})]
        }) : (0, Chunk54381.jsx)(C, {
          guild: module
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
          className: Chunk96761.divider
        }), (0, Chunk54381.jsx)(Chunk145499.Z, {
          guild: module
        })]
      })
    })
  }