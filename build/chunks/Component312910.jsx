/** Chunk was on 64982 **/
/** chunk id: 312910, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
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
let C = {
    page: Chunk981631.ZY5.GUILD_SETTINGS,
    section: Chunk981631.jXE.GUILD_SETTINGS_STICKERS,
    object: Chunk981631.qAy.BOOSTING_BANNER
  },
  O = e => {
    let {
      guild: t
    } = e, {
      analyticsLocations: n
    } = (0, a.ZP)(), i = (0, u.Z)(t.id).available, s = b.oCV[b.Eu4.TIER_1] - i;
    return (0, r.jsxs)("div", {
      className: v.upsellContainer,
      children: [(0, r.jsx)(l.X6q, {
        className: v.upsellHeader,
        variant: "heading-xl/semibold",
        children: _.intl.string(_.t.hzCkys)
      }), (0, r.jsx)(l.Text, {
        className: v.upsellDescription,
        variant: "text-md/normal",
        children: _.intl.string(_.t.jcesAA)
      }), (0, r.jsxs)(l.hE2, {
        className: v.upsellButtons,
        children: [(0, r.jsx)(l.zxk, {
          variant: "overlay-primary",
          text: _.intl.string(_.t.Q5dbTk),
          onClick: () => (0, d.Z)({
            analyticsLocations: n,
            analyticsLocation: C,
            guildId: t.id,
            totalNumberOfSlotsToAssign: s
          })
        }), (0, r.jsx)(l.zxk, {
          variant: "overlay-primary",
          text: _.intl.string(_.t.hvVgAQ),
          onClick: () => (0, o.f)({
            guildId: t.id,
            location: {
              section: b.jXE.GUILD_SETTINGS_STICKERS
            }
          })
        })]
      })]
    })
  },
  y = () => (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: Chunk388032.intl.string(Chunk388032.t["9N2OWF"]),
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      children: Chunk388032.intl.format(Chunk388032.t.hxLvi4, {
        fileSize: (0, Chunk424218.IC)(Chunk611480.Ht, {
          useKibibytes: true
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.geA.DESCRIPTION,
      children: Chunk388032.intl.format(Chunk388032.t.UBj0aW, {
        articleUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.STICKERS_UPLOAD)
      })
    })]
  }),
  N = e => {
    let t, n, i, {
        guild: l,
        guildStickers: s
      } = e,
      a = l.premiumTier,
      o = (0, f.Qi)(s, a),
      d = (0, f.FZ)(a),
      u = (0, f.A3)(a),
      m = s.length;
    return null == d || a === b.Eu4.TIER_3 || o > 0 ? null : (m > u ? (t = _.intl.formatToPlainString(_.t.ZtAY1d, {
      level: d
    }), n = _.intl.formatToPlainString(_.t["13hOWl"], {
      level: d
    }), i = b.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = _.intl.string(_.t.zT9Sxc), n = _.intl.formatToPlainString(_.t.YaW9wM, {
      level: d,
      numAdditional: (0, f.ig)(d)
    }), i = b.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, r.jsx)(c.Z, {
      header: t,
      text: n,
      guild: l,
      analyticsLocation: {
        page: b.ZY5.GUILD_SETTINGS,
        section: b.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, f.ge)(d)
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
    return (0, Chunk951288.jsx)(Chunk906732.Gt, {
      value: require,
      children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        title: Chunk388032.intl.string(Chunk388032.t.R5nQkZ),
        tag: Chunk481060.RB0.H1,
        children: [Chunk623624 ? (0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)(N, {
            guild: module,
            guildStickers: exports
          }), (0, Chunk951288.jsx)(y, {})]
        }) : (0, Chunk951288.jsx)(O, {
          guild: module
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk96761.divider
        }), (0, Chunk951288.jsx)(Chunk145499.Z, {
          guild: module
        })]
      })
    })
  }