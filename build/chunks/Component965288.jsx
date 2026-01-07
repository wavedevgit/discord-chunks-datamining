/** Chunk was on 41700 **/
/** chunk id: 965288, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N,
  y: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk795318 = require("./795318.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk5192 = require("./5192.js"),
  Chunk590415 = require("./590415.js"),
  Chunk354459 = require("./354459.js"),
  Chunk510786 = require("./510786.js");

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

function E(e, t) {
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
let Z = Chunk473749.memo(function(e) {
    let {
      guildId: t,
      channelId: n,
      user: i,
      isPremium: l,
      isBlocked: a,
      isIgnored: s
    } = e;
    return (0, r.jsxs)("div", {
      className: _.textContainer,
      children: [a ? (0, r.jsx)(p.t6m, {
        size: "lg",
        className: _.blockedIcon,
        color: u.Z.unsafe_rawColors.RED_400.css
      }) : null, s ? (0, r.jsx)(p.kZF, {
        size: "lg",
        className: _.blockedIcon
      }) : null, (0, r.jsx)(p.Text, {
        className: _.text,
        variant: "text-sm/normal",
        color: "text-strong",
        children: v.ZP.getName(t, n, i)
      }), l ? (0, r.jsx)(p.Ucv, {
        className: _.boost,
        color: u.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
      }) : null]
    })
  }),
  P = Chunk473749.memo(function(e) {
    var t;
    let {
      participant: n,
      guildId: i,
      channel: l,
      isPremium: s
    } = e, {
      user: o,
      blocked: c,
      ignored: d,
      rtsState: u
    } = n, h = u === C.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, f = u === C.xO.REQUESTED_TO_SPEAK || h;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: _.avatarContainer,
        children: [f && (0, r.jsx)(p.V9, {
          size: "md",
          color: "currentColor",
          className: a()(_.icon, {
            [_.invited]: h
          })
        }), (0, r.jsx)("img", {
          src: null != (t = o.getAvatarURL(l.guild_id, 56, false)) ? t : true,
          alt: o.username,
          "aria-label": o.username,
          className: a()(_.avatar, {
            [_.faded]: c || d
          })
        })]
      }), (0, r.jsx)(Z, {
        guildId: i,
        channelId: l.id,
        user: o,
        isPremium: s,
        isBlocked: c,
        isIgnored: d
      })]
    })
  }),
  T = () => (0, r.jsx)("div", {
    className: _.tileBaseContainer
  }),
  N = Chunk473749.memo(function(e) {
    let {
      participant: t,
      channel: l
    } = e, {
      user: s,
      blocked: u
    } = t, v = l.getGuildId(), C = x.default.getId(), {
      newestAnalyticsLocation: Z
    } = (0, g.ZP)(f.Z.AUDIENCE_TILE), T = (0, y.bp)(), N = (0, d.e7)([j.ZP], () => {
      var e;
      return null != v && (null == (e = j.ZP.getMember(v, s.id)) ? true : e.premiumSince) != null
    }, [v, s.id]), R = i.useRef(null);
    o()(null != v, "Channel cannot be guildless");
    let w = i.useCallback(e => {
      (0, m.h)({
        type: c.ImpressionTypes.MENU,
        name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
        properties: {
          location: "AudienceTile",
          is_tile_owner: s.id === C,
          tile_type: I.TH.USER
        }
      }), (0, h.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("66165"), n.e("8982"), n.e("7717"), n.e("9393")]).then(n.bind(n, 757387));
        return t => (0, r.jsx)(e, E(S({}, t), {
          user: s,
          guildId: v,
          channel: l,
          showMediaItems: true,
          showStageChannelItems: true,
          showChatItems: false,
          onInteraction: (0, b.u)("GuildChannelUserContextMenu", Z, {
            targetUserId: s.id,
            tileType: I.TH.USER
          })
        }))
      }, {
        context: T
      })
    }, [s, C, T, v, l, Z]);
    return (0, r.jsx)(O.Z, {
      targetElementRef: R,
      user: s,
      guildId: l.guild_id,
      channelId: l.id,
      clickTrap: true,
      children: e => (0, r.jsx)(p.P3F, E(S({
        innerRef: R,
        className: a()(_.tileContainer, {
          [_.singleIcon]: N || u,
          [_.doubleIcon]: N && u
        }),
        onContextMenu: w
      }, e), {
        children: (0, r.jsx)(P, {
          participant: t,
          guildId: v,
          channel: l,
          isPremium: N
        })
      }))
    })
  })