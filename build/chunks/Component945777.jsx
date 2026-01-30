/** Chunk was on 1113 **/
/** chunk id: 945777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P,
  S: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk480890 = require("./480890.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk562153 = require("./562153.js"),
  Chunk105530 = require("./105530.js"),
  Chunk806931 = require("./806931.js"),
  Chunk750201 = require("./750201.js");

function C(e) {
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

function S(e, t) {
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
let I = Chunk64700.memo(function(e) {
    let {
      guildId: t,
      channelId: n,
      user: l,
      isPremium: i,
      isBlocked: s,
      isIgnored: a
    } = e;
    return (0, r.jsxs)("div", {
      className: E.FS,
      children: [s ? (0, r.jsx)(h.KTN, {
        size: "lg",
        className: E.Q6,
        color: d.A.unsafe_rawColors.RED_400.css
      }) : null, a ? (0, r.jsx)(h.G3N, {
        size: "lg",
        className: E.Q6
      }) : null, (0, r.jsx)(h.Text, {
        className: E.Qq,
        variant: "text-sm/normal",
        color: "text-strong",
        children: j.Ay.getName(t, n, l)
      }), i ? (0, r.jsx)(h._Jp, {
        className: E.EH,
        color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK
      }) : null]
    })
  }),
  N = Chunk64700.memo(function(e) {
    var t;
    let {
      participant: n,
      guildId: l,
      channel: i,
      isPremium: a
    } = e, {
      user: o,
      blocked: c,
      ignored: u,
      rtsState: d
    } = n, p = d === x.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, g = d === x.zF.REQUESTED_TO_SPEAK || p;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: E.H,
        children: [g && (0, r.jsx)(h.E7M, {
          size: "md",
          color: "currentColor",
          className: s()(E.Kk, {
            [E.MD]: p
          })
        }), (0, r.jsx)("img", {
          src: null != (t = o.getAvatarURL(i.guild_id, 56, false)) ? t : true,
          alt: o.username,
          "aria-label": o.username,
          className: s()(E.my, {
            [E.zj]: c || u
          })
        })]
      }), (0, r.jsx)(I, {
        guildId: l,
        channelId: i.id,
        user: o,
        isPremium: a,
        isBlocked: c,
        isIgnored: u
      })]
    })
  }),
  T = () => (0, r.jsx)("div", {
    className: E.j8
  }),
  P = Chunk64700.memo(function(e) {
    let {
      participant: t,
      channel: i
    } = e, {
      user: a,
      blocked: d
    } = t, j = i.getGuildId(), x = O.default.getId(), {
      newestAnalyticsLocation: I
    } = (0, f.Ay)(g.A.AUDIENCE_TILE), T = (0, A.Us)(), P = (0, u.bG)([_.Ay], () => {
      var e;
      return null != j && (null == (e = _.Ay.getMember(j, a.id)) ? true : e.premiumSince) != null
    }, [j, a.id]), w = l.useRef(null);
    o()(null != j, "Channel cannot be guildless");
    let R = l.useCallback(e => {
      (0, m.x)({
        type: c.ImpressionTypes.MENU,
        name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
        properties: {
          location: "AudienceTile",
          is_tile_owner: a.id === x,
          tile_type: v.qs.USER
        }
      }), (0, p.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("31885")]).then(n.bind(n, 107632));
        return t => (0, r.jsx)(e, S(C({}, t), {
          user: a,
          guildId: j,
          channel: i,
          showMediaItems: true,
          showStageChannelItems: true,
          showChatItems: false,
          onInteraction: (0, b.s)("GuildChannelUserContextMenu", I, {
            targetUserId: a.id,
            tileType: v.qs.USER
          })
        }))
      }, {
        context: T
      })
    }, [a, x, T, j, i, I]);
    return (0, r.jsx)(y.A, {
      targetElementRef: w,
      user: a,
      guildId: i.guild_id,
      channelId: i.id,
      clickTrap: true,
      children: e => (0, r.jsx)(h.DUT, S(C({
        innerRef: w,
        className: s()(E.iA, {
          [E.wP]: P || d,
          [E.fP]: P && d
        }),
        onContextMenu: R
      }, e), {
        children: (0, r.jsx)(N, {
          participant: t,
          guildId: j,
          channel: i,
          isPremium: P
        })
      }))
    })
  })