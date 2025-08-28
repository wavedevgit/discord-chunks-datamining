/** Chunk was on 56011 **/
/** chunk id: 965288, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N,
  y: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk795318 = require("./795318.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk5192 = require("./5192.js"),
  Chunk590415 = require("./590415.js"),
  Chunk354459 = require("./354459.js"),
  Chunk383519 = require("./383519.js");

function S(e) {
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
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = Chunk647438.memo(function(e) {
    let {
      guildId: t,
      channelId: n,
      user: i,
      isPremium: l,
      isBlocked: a,
      isIgnored: o
    } = e;
    return (0, r.jsxs)("div", {
      className: E.textContainer,
      children: [a ? (0, r.jsx)(p.t6m, {
        size: "lg",
        className: E.blockedIcon,
        color: d.Z.unsafe_rawColors.RED_400.css
      }) : null, o ? (0, r.jsx)(p.kZF, {
        size: "lg",
        className: E.blockedIcon
      }) : null, (0, r.jsx)(p.Text, {
        className: E.text,
        variant: "text-sm/normal",
        color: "header-primary",
        children: x.ZP.getName(t, n, i)
      }), l ? (0, r.jsx)(p.$Eu, {
        className: E.boost,
        color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
      }) : null]
    })
  }),
  Z = Chunk647438.memo(function(e) {
    var t;
    let {
      participant: n,
      guildId: i,
      channel: l,
      isPremium: o
    } = e, {
      user: s,
      blocked: c,
      ignored: u,
      rtsState: d
    } = n, h = d === O.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, f = d === O.xO.REQUESTED_TO_SPEAK || h;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: E.avatarContainer,
        children: [f && (0, r.jsx)(p.V9, {
          size: "md",
          color: "currentColor",
          className: a()(E.icon, {
            [E.invited]: h
          })
        }), (0, r.jsx)("img", {
          src: null != (t = s.getAvatarURL(l.guild_id, 56, false)) ? t : true,
          alt: s.username,
          "aria-label": s.username,
          className: a()(E.avatar, {
            [E.faded]: c || u
          })
        })]
      }), (0, r.jsx)(P, {
        guildId: i,
        channelId: l.id,
        user: s,
        isPremium: o,
        isBlocked: c,
        isIgnored: u
      })]
    })
  }),
  T = () => (0, Chunk951288.jsx)("div", {
    className: Chunk383519.tileBaseContainer
  }),
  N = Chunk647438.memo(function(e) {
    let {
      participant: t,
      channel: l
    } = e, {
      user: o,
      blocked: d
    } = t, x = l.getGuildId(), O = C.default.getId(), {
      newestAnalyticsLocation: P
    } = (0, g.ZP)(m.Z.AUDIENCE_TILE), T = (0, f.bp)(), N = (0, u.e7)([v.ZP], () => {
      var e;
      return null != x && (null == (e = v.ZP.getMember(x, o.id)) ? true : e.premiumSince) != null
    }, [x, o.id]), A = i.useRef(null);
    s()(null != x, "Channel cannot be guildless");
    let w = i.useCallback(e => {
      (0, b.h)({
        type: c.ImpressionTypes.MENU,
        name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
        properties: {
          location: "AudienceTile",
          is_tile_owner: o.id === O,
          tile_type: j.TH.USER
        }
      }), (0, h.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("52021")]).then(n.bind(n, 757387));
        return t => (0, r.jsx)(e, I(S({}, t), {
          user: o,
          guildId: x,
          channel: l,
          showMediaItems: true,
          showStageChannelItems: true,
          showChatItems: false,
          onInteraction: (0, y.u)("GuildChannelUserContextMenu", P, {
            targetUserId: o.id,
            tileType: j.TH.USER
          })
        }))
      }, {
        context: T
      })
    }, [o, O, T, x, l, P]);
    return (0, r.jsx)(_.Z, {
      targetElementRef: A,
      user: o,
      guildId: l.guild_id,
      channelId: l.id,
      clickTrap: true,
      children: e => (0, r.jsx)(p.P3F, I(S({
        innerRef: A,
        className: a()(E.tileContainer, {
          [E.singleIcon]: N || d,
          [E.doubleIcon]: N && d
        }),
        onContextMenu: w
      }, e), {
        children: (0, r.jsx)(Z, {
          participant: t,
          guildId: x,
          channel: l,
          isPremium: N
        })
      }))
    })
  })