/** Chunk was on 1272 **/
/** chunk id: 226323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk586902 = require("./586902.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk512384 = require("./512384.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk51144 = require("./51144.js"),
  Chunk524484 = require("./524484.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk188270 = require("./188270.js");

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

function T(e, t) {
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
let N = {
    offset: 2
  },
  j = {
    serverDeaf: {
      icon: Chunk481060.Vm4,
      colorize: true,
      getStatus: () => Chunk388032.intl.string(Chunk388032.t.btxSdH)
    },
    serverMute: {
      icon: Chunk481060.v0G,
      colorize: true,
      getStatus: () => Chunk388032.intl.string(Chunk388032.t.uLddbW)
    },
    deaf: {
      icon: Chunk481060.wE8,
      colorize: false,
      getStatus: () => Chunk388032.intl.string(Chunk388032.t.NjmiOD)
    },
    mute: {
      icon: Chunk481060.nRN,
      colorize: false,
      getStatus: () => Chunk388032.intl.string(Chunk388032.t.tjtv3N)
    },
    localMute: {
      icon: Chunk481060.v0G,
      colorize: false,
      getStatus: () => Chunk388032.intl.string(Chunk388032.t["9F+xJS"])
    }
  };

function P(e) {
  var t, l;
  let d = i.useRef(null),
    {
      parentAnalyticsLocation: p
    } = (0, h.ZP)(),
    {
      channel: O,
      user: P,
      nick: x,
      mute: A,
      deaf: Z,
      serverMute: w,
      serverDeaf: L
    } = e,
    R = (0, o.e7)([E.Z], () => E.Z.isLocalMute(P.id)),
    D = (0, u.Z)({
      userId: P.id,
      checkSoundSharing: true
    }),
    k = null != (t = O.getGuildId()) ? t : true,
    M = P.getAvatarURL(O.guild_id, 24),
    U = null != x ? x : y.ZP.getName(P),
    {
      icon: G,
      colorize: B,
      getStatus: H
    } = null != (l = function(e) {
      let {
        serverDeaf: t,
        deaf: n,
        serverMute: r,
        mute: i,
        localMute: l
      } = e;
      if (t) return j.serverDeaf;
      if (n) return j.deaf;
      if (r) return j.serverMute;
      if (l) return j.localMute;
      if (i) return j.mute
    }({
      serverDeaf: L,
      deaf: Z,
      serverMute: w,
      mute: A,
      localMute: R
    })) ? l : {},
    V = null != H ? I.intl.formatToPlainString(I.t["1+MVBA"], {
      userName: U,
      status: H()
    }) : U;

  function F(e) {
    null != k ? (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("19848")]).then(n.bind(n, 757387));
      return t => (0, r.jsx)(e, T(S({}, t), {
        user: P,
        guildId: k,
        channel: O,
        showMediaItems: true,
        onInteraction: (0, m.u)("GuildChannelUserContextMenu", f.Z.RTC_PANEL, {
          targetUserId: P.id
        })
      }))
    }) : (0, c.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
      return t => (0, r.jsx)(e, T(S({}, t), {
        user: P,
        showMediaItems: true,
        onInteraction: (0, m.u)("UserGenericContextMenu", f.Z.RTC_PANEL, {
          targetUserId: P.id
        })
      }))
    })
  }
  return (0, r.jsx)(_.Z, {
    targetElementRef: d,
    user: P,
    guildId: k,
    channelId: O.id,
    position: "top",
    clickTrap: true,
    children: e => (0, r.jsx)(s.ua7, {
      text: V,
      children: t => (0, r.jsx)(s.P3F, T(S({}, t, e), {
        innerRef: d,
        onClick: t => {
          e.onClick(t), (0, g.v)(p, g.d.VOICE_USER)
        },
        className: C.avatarContainer,
        onContextMenu: F,
        focusProps: N,
        children: (0, r.jsx)(b.Z, {
          shakeLocation: v.oZ.VOICE_USER,
          isShaking: D,
          children: (0, r.jsx)("div", {
            className: a()(C.avatar, {
              [C.speaking]: D
            }),
            style: {
              backgroundImage: "url(".concat(M, ")")
            },
            children: null != G ? (0, r.jsx)(G, {
              className: a()(C.avatarIconOverlay, {
                [C.avatarIconRed]: B
              }),
              color: "currentColor",
              size: "xs"
            }) : null
          })
        })
      }))
    })
  })
}

function x(e) {
  let {
    voiceStates: t,
    channel: n,
    className: l
  } = e, [c, u] = i.useState(false), f = (0, o.e7)([O.default], () => O.default.getId()), {
    containerRef: h,
    maxVisibleAvatars: g
  } = function(e) {
    let [t, n] = i.useState(7), r = (0, p.Z)(() => {
      let t = null == l ? true : l.current;
      if (null == t) return;
      let r = Math.floor((t.offsetWidth + 4) / 28);
      n(Math.max(1, e > r ? r - 1 : r))
    }), l = (0, d.y)(r, [e], {
      fireOnMount: true,
      fireOnDepsChange: true
    });
    return {
      containerRef: l,
      maxVisibleAvatars: t
    }
  }(t.length - 1), [m, b] = function(e, t, n) {
    let r = [];
    for (let i of e)
      if (i.user.id !== t && !r.some(e => e.user.id === i.user.id)) {
        if (r.length >= n) return [r, true];
        r.push(i)
      } return [r, false]
  }(t, f, g), _ = c ? s.V_R : s.qJs, E = (0, r.jsx)(s.M0o, {
    onClick: () => u(!c),
    color: s.YX$.PRIMARY,
    size: s.tT7.SIZE_24,
    tooltip: c ? I.intl.string(I.t["Z/Tya2"]) : I.intl.string(I.t.XR5BAQ),
    icon: (0, r.jsx)(_, {
      size: "xs",
      color: "currentColor"
    }),
    focusProps: N
  }), y = b && c ? t : m;
  return y.length <= 0 ? null : (0, r.jsx)(s.zJl, {
    className: a()(C.scroller, l),
    fade: true,
    children: (0, r.jsxs)("div", {
      ref: h,
      className: a()(C.voiceUsers, !c && C.collapsed),
      role: "group",
      "aria-label": I.intl.string(I.t["/ZgaVV"]),
      children: [y.map(e => {
        let {
          user: t,
          nick: i,
          voiceState: l
        } = e;
        return t.id !== f ? (0, r.jsx)(P, {
          channel: n,
          user: t,
          nick: i,
          mute: l.isVoiceMuted(),
          deaf: l.isVoiceDeafened(),
          video: l.selfVideo,
          serverMute: l.mute,
          serverDeaf: l.deaf
        }, t.id) : null
      }), b ? E : null]
    })
  })
}