/** Chunk was on 54273 **/
/** chunk id: 965288, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N,
  y: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
let Z = Chunk73800.memo(function(e) {
    let {
      guildId: t,
      channelId: n,
      user: i,
      isPremium: l,
      isBlocked: a,
      isIgnored: s
    } = e;
    return (0, r.jsxs)("div", {
      className: E.textContainer,
      children: [a ? (0, r.jsx)(h.t6m, {
        size: "lg",
        className: E.blockedIcon,
        color: d.Z.unsafe_rawColors.RED_400.css
      }) : null, s ? (0, r.jsx)(h.kZF, {
        size: "lg",
        className: E.blockedIcon
      }) : null, (0, r.jsx)(h.Text, {
        className: E.text,
        variant: "text-sm/normal",
        color: "header-primary",
        children: O.ZP.getName(t, n, i)
      }), l ? (0, r.jsx)(h.$Eu, {
        className: E.boost,
        color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
      }) : null]
    })
  }),
  P = Chunk73800.memo(function(e) {
    var t;
    let {
      participant: n,
      guildId: i,
      channel: l,
      isPremium: s
    } = e, {
      user: o,
      blocked: c,
      ignored: u,
      rtsState: d
    } = n, p = d === v.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, f = d === v.xO.REQUESTED_TO_SPEAK || p;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: E.avatarContainer,
        children: [f && (0, r.jsx)(h.V9, {
          size: "md",
          color: "currentColor",
          className: a()(E.icon, {
            [E.invited]: p
          })
        }), (0, r.jsx)("img", {
          src: null != (t = o.getAvatarURL(l.guild_id, 56, false)) ? t : true,
          alt: o.username,
          "aria-label": o.username,
          className: a()(E.avatar, {
            [E.faded]: c || u
          })
        })]
      }), (0, r.jsx)(Z, {
        guildId: i,
        channelId: l.id,
        user: o,
        isPremium: s,
        isBlocked: c,
        isIgnored: u
      })]
    })
  }),
  T = () => (0, Chunk255367.jsx)("div", {
    className: Chunk383519.tileBaseContainer
  }),
  N = Chunk73800.memo(function(e) {
    let {
      participant: t,
      channel: l
    } = e, {
      user: s,
      blocked: d
    } = t, O = l.getGuildId(), v = j.default.getId(), {
      newestAnalyticsLocation: Z
    } = (0, m.ZP)(g.Z.AUDIENCE_TILE), T = (0, f.bp)(), N = (0, u.e7)([_.ZP], () => {
      var e;
      return null != O && (null == (e = _.ZP.getMember(O, s.id)) ? true : e.premiumSince) != null
    }, [O, s.id]), R = i.useRef(null);
    o()(null != O, "Channel cannot be guildless");
    let w = i.useCallback(e => {
      (0, b.h)({
        type: c.ImpressionTypes.MENU,
        name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
        properties: {
          location: "AudienceTile",
          is_tile_owner: s.id === v,
          tile_type: C.TH.USER
        }
      }), (0, p.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("52021")]).then(n.bind(n, 757387));
        return t => (0, r.jsx)(e, I(S({}, t), {
          user: s,
          guildId: O,
          channel: l,
          showMediaItems: true,
          showStageChannelItems: true,
          showChatItems: false,
          onInteraction: (0, y.u)("GuildChannelUserContextMenu", Z, {
            targetUserId: s.id,
            tileType: C.TH.USER
          })
        }))
      }, {
        context: T
      })
    }, [s, v, T, O, l, Z]);
    return (0, r.jsx)(x.Z, {
      targetElementRef: R,
      user: s,
      guildId: l.guild_id,
      channelId: l.id,
      clickTrap: true,
      children: e => (0, r.jsx)(h.P3F, I(S({
        innerRef: R,
        className: a()(E.tileContainer, {
          [E.singleIcon]: N || d,
          [E.doubleIcon]: N && d
        }),
        onContextMenu: w
      }, e), {
        children: (0, r.jsx)(P, {
          participant: t,
          guildId: O,
          channel: l,
          isPremium: N
        })
      }))
    })
  })