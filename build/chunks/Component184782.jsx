/** Chunk was on 90542 **/
/** chunk id: 184782, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./953529.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk145598 = require("./145598.js");
let k = e => {
    var n;
    let {
      channelData: i,
      onClose: l,
      trackOptionClick: t
    } = e, c = (0, o.e7)([x.Z], () => x.Z.getChannel(i.channel_id)), u = (0, o.e7)([g.Z], () => null != c && g.Z.can(v.Pl.VIEW_CHANNEL, c)), p = (0, o.e7)([m.ZP], () => null != i.emoji_id ? m.ZP.getCustomEmojiById(i.emoji_id) : null, [i.emoji_id]), _ = null != i.emoji_name ? h.ZP.getByName(h.ZP.convertSurrogateToName(i.emoji_name, false)) : null, N = null != (n = (0, r.KS)(c)) ? n : s.VL1;
    return null != c && u ? (0, a.jsxs)(s.P3F, {
      className: S.optionContainer,
      onClick: () => {
        t(), l(), (0, j.XU)(c.guild_id, c.id)
      },
      children: [null != p || null != _ ? (0, a.jsx)(d.Z, {
        emojiName: null != i.emoji_id ? null == p ? true : p.name : i.emoji_name,
        animated: null != p && p.animated,
        emojiId: null == p ? true : p.id,
        autoplay: true,
        className: S.optionEmoji
      }) : (0, a.jsx)(N, {
        className: S.channelIcon
      }), (0, a.jsxs)("div", {
        className: S.optionTextContainer,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          className: S.channelDescription,
          children: i.description
        }), (0, a.jsxs)(s.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: [(0, a.jsx)(N, {
            className: S.channelTitleIcon,
            size: "xxs",
            color: "currentColor"
          }), (0, a.jsx)("span", {
            children: c.name
          })]
        })]
      }), (0, a.jsx)(C.Z, {
        direction: C.Z.Directions.RIGHT,
        className: S.optionArrow
      })]
    }) : null
  },
  P = e => {
    var n;
    let {
      onClose: i,
      transitionState: d,
      guildId: r,
      isPreview: m
    } = e, h = (0, o.e7)([N.Z], () => N.Z.getGuild(r)), {
      welcomeScreen: j,
      fetching: x,
      hasError: g
    } = (0, o.cj)([E.Z], () => ({
      welcomeScreen: E.Z.get(r),
      fetching: E.Z.isFetching(),
      hasError: E.Z.hasError()
    })), C = (0, u.Dt)();
    l.useEffect(() => {
      null == j && (0, f.RM)(r)
    }, [r, j]), l.useEffect(() => {
      false === x && true === g && null == j && i()
    }, [x, g, i, j]), l.useEffect(() => {
      j === E.a && false === x && i()
    }, [i, j, x]), l.useEffect(() => {
      true !== m && b.default.track(I.rMx.OPEN_MODAL, {
        type: Z._,
        guild_id: r
      })
    }, [r, m]);
    let v = l.useCallback(e => {
      var n;
      if (null == j || true === m) return;
      let i = [],
        a = [],
        l = false;
      null == (n = j.welcome_channels) || n.forEach(e => {
        i.push(e.description), a.push(e.channel_id), null != e.emoji_id && (l = true)
      }), b.default.track(I.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
        index: e,
        guild_id: r,
        options: i,
        options_channel_ids: a,
        guild_description: j.description,
        has_custom_emojis: l
      })
    }, [r, m, j]);
    return null == h ? null : null == j ? (0, a.jsx)(t.Modal, {
      transitionState: d,
      "aria-label": T.intl.string(T.t.ZTNur7),
      title: T.intl.string(T.t.ZTNur7),
      onClose: () => Promise.resolve(i()),
      actions: [],
      children: (0, a.jsx)(s.$jN, {
        type: s.$jN.Type.SPINNING_CIRCLE
      })
    }) : (0, a.jsx)(t.Modal, {
      transitionState: d,
      "aria-labelledby": C,
      actions: [{
        text: T.intl.string(T.t.jizr82),
        onClick: i,
        variant: "secondary"
      }],
      title: T.intl.string(T.t["3iCBUn"]),
      onClose: () => Promise.resolve(i()),
      children: (0, a.jsxs)("div", {
        className: S.modalContent,
        children: [(0, a.jsx)(c.ZP, {
          mask: c.ZP.Masks.SQUIRCLE,
          width: 64,
          height: 64,
          className: S.guildIcon,
          children: (0, a.jsx)(p.Z, {
            size: p.Z.Sizes.LARGER,
            guild: h,
            active: true,
            animate: true,
            tabIndex: false
          })
        }), (0, a.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          className: S.header,
          id: C,
          children: T.intl.format(T.t["0aydCN"], {
            guildName: h.name,
            guildNameHook: (e, n) => (0, a.jsxs)("span", {
              children: [(0, a.jsx)(_.Z, {
                guild: h,
                className: S.headerGuildBadge,
                flowerStarClassName: S.flowerStar,
                tooltipColor: s.aML.Colors.PRIMARY
              }), (0, a.jsx)("strong", {
                className: S.headerGuildName,
                children: e
              })]
            }, n)
          })
        }), null != j.description ? (0, a.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: S.guildDescription,
          children: j.description
        }) : null, (0, a.jsx)(s.Heading, {
          variant: "heading-sm/semibold",
          className: S.choiceHeader,
          children: T.intl.string(T.t["haj5+i"])
        }), (0, a.jsx)("div", {
          className: S.options,
          children: null == (n = j.welcome_channels) ? true : n.map((e, n) => (0, a.jsx)(k, {
            channelData: e,
            trackOptionClick: () => v(n),
            onClose: i
          }, "".concat(e.channel_id, "-").concat(n)))
        })]
      })
    })
  }