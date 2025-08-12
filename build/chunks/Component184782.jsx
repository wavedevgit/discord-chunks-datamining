/** Chunk was on 90542 **/
/** chunk id: 184782, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./953529.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk92884 = require("./92884.js");
let L = e => {
    var l;
    let {
      channelData: n,
      onClose: i,
      trackOptionClick: o
    } = e, d = (0, s.e7)([N.Z], () => N.Z.getChannel(n.channel_id)), m = (0, s.e7)([C.Z], () => null != d && C.Z.can(I.Pl.VIEW_CHANNEL, d)), j = (0, s.e7)([u.ZP], () => null != n.emoji_id ? u.ZP.getCustomEmojiById(n.emoji_id) : null, [n.emoji_id]), x = null != n.emoji_name ? h.ZP.getByName(h.ZP.convertSurrogateToName(n.emoji_name, false)) : null, _ = null != (l = (0, r.KS)(d)) ? l : t.VL1;
    return null != d && m ? (0, a.jsxs)(t.P3F, {
      className: P.optionContainer,
      onClick: () => {
        o(), i(), (0, p.XU)(d.guild_id, d.id)
      },
      children: [null != j || null != x ? (0, a.jsx)(c.Z, {
        emojiName: null != n.emoji_id ? null == j ? true : j.name : n.emoji_name,
        animated: null != j && j.animated,
        emojiId: null == j ? true : j.id,
        autoplay: true,
        className: P.optionEmoji
      }) : (0, a.jsx)(_, {
        className: P.channelIcon
      }), (0, a.jsxs)("div", {
        className: P.optionTextContainer,
        children: [(0, a.jsx)(t.Text, {
          variant: "text-md/normal",
          className: P.channelDescription,
          children: n.description
        }), (0, a.jsxs)(t.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: [(0, a.jsx)(_, {
            className: P.channelTitleIcon,
            size: "xxs",
            color: "currentColor"
          }), (0, a.jsx)("span", {
            children: d.name
          })]
        })]
      }), (0, a.jsx)(g.Z, {
        direction: g.Z.Directions.RIGHT,
        className: P.optionArrow
      })]
    }) : null
  },
  T = e => {
    var l;
    let {
      onClose: n,
      transitionState: c,
      guildId: r,
      isPreview: u
    } = e, h = (0, s.e7)([_.Z], () => _.Z.getGuild(r)), {
      welcomeScreen: p,
      fetching: N,
      hasError: C
    } = (0, s.cj)([k.Z], () => ({
      welcomeScreen: k.Z.get(r),
      fetching: k.Z.isFetching(),
      hasError: k.Z.hasError()
    })), g = (0, m.Dt)();
    i.useEffect(() => {
      null == p && (0, Z.RM)(r)
    }, [r, p]), i.useEffect(() => {
      false === N && true === C && null == p && n()
    }, [N, C, n, p]), i.useEffect(() => {
      p === k.a && false === N && n()
    }, [n, p, N]), i.useEffect(() => {
      true !== u && E.default.track(v.rMx.OPEN_MODAL, {
        type: f._,
        guild_id: r
      })
    }, [r, u]);
    let I = i.useCallback(e => {
      var l;
      if (null == p || true === u) return;
      let n = [],
        a = [],
        i = false;
      null == (l = p.welcome_channels) || l.forEach(e => {
        n.push(e.description), a.push(e.channel_id), null != e.emoji_id && (i = true)
      }), E.default.track(v.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
        index: e,
        guild_id: r,
        options: n,
        options_channel_ids: a,
        guild_description: p.description,
        has_custom_emojis: i
      })
    }, [r, u, p]);
    return null == h ? null : null == p ? (0, a.jsx)(t.Y0X, {
      transitionState: c,
      className: P.main,
      "aria-label": S.intl.string(S.t.ZTNur6),
      parentComponent: "WelcomeScreenModal",
      children: (0, a.jsx)(t.$jN, {
        type: t.$jN.Type.SPINNING_CIRCLE
      })
    }) : (0, a.jsxs)(t.Y0X, {
      transitionState: c,
      className: P.main,
      "aria-labelledby": g,
      parentComponent: "WelcomeScreenModal",
      children: [(0, a.jsx)(t.olH, {
        onClick: n,
        className: P.close
      }), (0, a.jsx)(d.ZP, {
        mask: d.ZP.Masks.SQUIRCLE,
        width: 64,
        height: 64,
        className: P.guildIcon,
        children: (0, a.jsx)(j.Z, {
          size: j.Z.Sizes.LARGER,
          guild: h,
          active: true,
          animate: true,
          tabIndex: false
        })
      }), (0, a.jsx)(t.X6q, {
        variant: "heading-xl/semibold",
        className: P.header,
        id: g,
        children: S.intl.format(S.t["0aydCA"], {
          guildName: h.name,
          guildNameHook: (e, l) => (0, a.jsxs)("span", {
            children: [(0, a.jsx)(x.Z, {
              guild: h,
              className: P.headerGuildBadge,
              flowerStarClassName: P.flowerStar,
              tooltipColor: t.ua7.Colors.PRIMARY
            }), (0, a.jsx)("strong", {
              className: P.headerGuildName,
              children: e
            })]
          }, l)
        })
      }), null != p.description ? (0, a.jsx)(t.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: P.guildDescription,
        children: p.description
      }) : null, (0, a.jsx)(t.vwX, {
        className: P.choiceHeader,
        children: S.intl.string(S.t["haj5+v"])
      }), (0, a.jsx)("div", {
        className: P.options,
        children: null == (l = p.welcome_channels) ? true : l.map((e, l) => (0, a.jsx)(L, {
          channelData: e,
          trackOptionClick: () => I(l),
          onClose: n
        }, "".concat(e.channel_id, "-").concat(l)))
      }), (0, a.jsx)(o.zx, {
        look: o.zx.Looks.LINK,
        color: P.skipColor,
        className: P.skip,
        onClick: n,
        children: S.intl.string(S.t["jizr8/"])
      })]
    })
  }