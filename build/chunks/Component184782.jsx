/** Chunk was on 90542 **/
/** chunk id: 184782, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk471445 = require("./471445.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk524329 = require("./524329.js"),
  Chunk995532 = require("./995532.js"),
  Chunk845606 = require("./845606.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557401 = require("./557401.js");
let T = e => {
    var n;
    let {
      channelData: a,
      onClose: l,
      trackOptionClick: s
    } = e, d = (0, o.e7)([x.Z], () => x.Z.getChannel(a.channel_id)), m = (0, o.e7)([C.Z], () => null != d && C.Z.can(I.Pl.VIEW_CHANNEL, d)), h = (0, o.e7)([u.ZP], () => null != a.emoji_id ? u.ZP.getCustomEmojiById(a.emoji_id) : null, [a.emoji_id]), p = null != a.emoji_name ? _.ZP.getByName(_.ZP.convertSurrogateToName(a.emoji_name, false)) : null, N = null != (n = (0, r.KS)(d)) ? n : t.VL1;
    return null != d && m ? (0, i.jsxs)(t.P3F, {
      className: S.optionContainer,
      onClick: () => {
        s(), l(), (0, j.XU)(d.guild_id, d.id)
      },
      children: [null != h || null != p ? (0, i.jsx)(c.Z, {
        emojiName: null != a.emoji_id ? null == h ? true : h.name : a.emoji_name,
        animated: null != h && h.animated,
        emojiId: null == h ? true : h.id,
        autoplay: true,
        className: S.optionEmoji
      }) : (0, i.jsx)(N, {
        className: S.channelIcon
      }), (0, i.jsxs)("div", {
        className: S.optionTextContainer,
        children: [(0, i.jsx)(t.Text, {
          variant: "text-md/normal",
          className: S.channelDescription,
          children: a.description
        }), (0, i.jsxs)(t.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [(0, i.jsx)(N, {
            className: S.channelTitleIcon,
            size: "xxs",
            color: "currentColor"
          }), (0, i.jsx)("span", {
            children: d.name
          })]
        })]
      }), (0, i.jsx)(g.Z, {
        direction: g.Z.Directions.RIGHT,
        className: S.optionArrow
      })]
    }) : null
  },
  w = e => {
    var n;
    let {
      onClose: a,
      transitionState: c,
      guildId: r,
      isPreview: u
    } = e, _ = (0, o.e7)([N.Z], () => N.Z.getGuild(r)), {
      welcomeScreen: j,
      fetching: x,
      hasError: C
    } = (0, o.cj)([k.Z], () => ({
      welcomeScreen: k.Z.get(r),
      fetching: k.Z.isFetching(),
      hasError: k.Z.hasError()
    })), g = (0, m.Dt)();
    l.useEffect(() => {
      null == j && (0, E.RM)(r)
    }, [r, j]), l.useEffect(() => {
      false === x && true === C && null == j && a()
    }, [x, C, a, j]), l.useEffect(() => {
      j === k.a && false === x && a()
    }, [a, j, x]), l.useEffect(() => {
      true !== u && b.default.track(f.rMx.OPEN_MODAL, {
        type: Z._,
        guild_id: r
      })
    }, [r, u]);
    let I = l.useCallback(e => {
      var n;
      if (null == j || true === u) return;
      let a = [],
        i = [],
        l = false;
      null == (n = j.welcome_channels) || n.forEach(e => {
        a.push(e.description), i.push(e.channel_id), null != e.emoji_id && (l = true)
      }), b.default.track(f.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
        index: e,
        guild_id: r,
        options: a,
        options_channel_ids: i,
        guild_description: j.description,
        has_custom_emojis: l
      })
    }, [r, u, j]);
    return null == _ ? null : null == j ? (0, i.jsx)(t.Y0X, {
      transitionState: c,
      className: S.main,
      "aria-label": v.intl.string(v.t.ZTNur6),
      parentComponent: "WelcomeScreenModal",
      children: (0, i.jsx)(t.$jN, {
        type: t.$jN.Type.SPINNING_CIRCLE
      })
    }) : (0, i.jsxs)(t.Y0X, {
      transitionState: c,
      className: S.main,
      "aria-labelledby": g,
      parentComponent: "WelcomeScreenModal",
      children: [(0, i.jsx)(t.olH, {
        onClick: a,
        className: S.close
      }), (0, i.jsx)(d.ZP, {
        mask: d.ZP.Masks.SQUIRCLE,
        width: 64,
        height: 64,
        className: S.guildIcon,
        children: (0, i.jsx)(h.Z, {
          size: h.Z.Sizes.LARGER,
          guild: _,
          active: true,
          animate: true,
          tabIndex: false
        })
      }), (0, i.jsx)(t.X6q, {
        variant: "heading-xl/semibold",
        className: S.header,
        id: g,
        children: v.intl.format(v.t["0aydCA"], {
          guildName: _.name,
          guildNameHook: (e, n) => (0, i.jsxs)("span", {
            children: [(0, i.jsx)(p.Z, {
              guild: _,
              className: S.headerGuildBadge,
              flowerStarClassName: S.flowerStar,
              tooltipColor: t.ua7.Colors.PRIMARY
            }), (0, i.jsx)("strong", {
              className: S.headerGuildName,
              children: e
            })]
          }, n)
        })
      }), null != j.description ? (0, i.jsx)(t.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: S.guildDescription,
        children: j.description
      }) : null, (0, i.jsx)(t.vwX, {
        className: S.choiceHeader,
        children: v.intl.string(v.t["haj5+v"])
      }), (0, i.jsx)("div", {
        className: S.options,
        children: null == (n = j.welcome_channels) ? true : n.map((e, n) => (0, i.jsx)(T, {
          channelData: e,
          trackOptionClick: () => I(n),
          onClose: a
        }, "".concat(e.channel_id, "-").concat(n)))
      }), (0, i.jsx)(s.zx, {
        look: s.zx.Looks.LINK,
        color: S.skipColor,
        className: S.skip,
        onClick: a,
        children: v.intl.string(v.t["jizr8/"])
      })]
    })
  }