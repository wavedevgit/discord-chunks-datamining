/** Chunk was on 1272 **/
/** chunk id: 226323, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk586902 = require("./586902.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk538870 = require("./538870.js"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk512384 = require("./512384.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk606304 = require("./606304.js"),
  Chunk51144 = require("./51144.js"),
  Chunk524484 = require("./524484.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk328607 = require("./328607.js");

function j(e) {
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

function x(e, t) {
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
let P = {
    offset: 2
  },
  A = {
    serverDeaf: {
      icon: Chunk481060.Vm4,
      colorize: true,
      getStatus: () => T.intl.string(T.t.btxSdB)
    },
    serverMute: {
      icon: Chunk481060.v0G,
      colorize: true,
      getStatus: () => T.intl.string(T.t.uLddbQ)
    },
    deaf: {
      icon: Chunk481060.wE8,
      colorize: false,
      getStatus: () => T.intl.string(T.t.NjmiOL)
    },
    mute: {
      icon: Chunk481060.nRN,
      colorize: false,
      getStatus: () => T.intl.string(T.t.tjtv3P)
    },
    localMute: {
      icon: Chunk481060.v0G,
      colorize: false,
      getStatus: () => T.intl.string(T.t["9F+xJU"])
    }
  };

function Z(e) {
  var t, l;
  let p = i.useRef(null),
    {
      parentAnalyticsLocation: f
    } = (0, h.ZP)(),
    {
      channel: v,
      user: Z,
      nick: w,
      mute: L,
      deaf: R,
      serverMute: D,
      serverDeaf: M
    } = e,
    k = (0, o.e7)([I.Z], () => I.Z.isLocalMute(Z.id)),
    U = (0, d.Z)({
      userId: Z.id,
      checkSoundSharing: true
    }),
    G = null != (t = v.getGuildId()) ? t : true,
    H = Z.getAvatarURL(v.guild_id, 24),
    B = null != w ? w : C.ZP.getName(Z),
    {
      icon: V,
      colorize: F,
      getStatus: z
    } = null != (l = function(e) {
      let {
        serverDeaf: t,
        deaf: n,
        serverMute: r,
        mute: i,
        localMute: l
      } = e;
      if (t) return A.serverDeaf;
      if (n) return A.deaf;
      if (r) return A.serverMute;
      if (l) return A.localMute;
      if (i) return A.mute
    }({
      serverDeaf: M,
      deaf: R,
      serverMute: D,
      mute: L,
      localMute: k
    })) ? l : {},
    Y = null != z ? T.intl.formatToPlainString(T.t["1+MVBP"], {
      userName: B,
      status: z()
    }) : B;

  function W(e) {
    null != G ? (0, u.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("4040"), n.e("92524"), n.e("7717"), n.e("9393")]).then(n.bind(n, 757387));
      return t => (0, r.jsx)(e, x(j({}, t), {
        user: Z,
        guildId: G,
        channel: v,
        showMediaItems: true,
        onInteraction: (0, _.u)("GuildChannelUserContextMenu", g.Z.RTC_PANEL, {
          targetUserId: Z.id
        })
      }))
    }) : (0, u.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("69220"), n.e("18030")]).then(n.bind(n, 881351));
      return t => (0, r.jsx)(e, x(j({}, t), {
        user: Z,
        showMediaItems: true,
        onInteraction: (0, _.u)("UserGenericContextMenu", g.Z.RTC_PANEL, {
          targetUserId: Z.id
        })
      }))
    })
  }
  let K = (0, o.e7)([y.Z], () => y.Z.getVoiceVolume(Z.id)),
    q = (0, m._)({
      isSpeaking: U,
      voiceDb: K,
      spreadDirection: m.h.INSET_ONLY,
      maxInnerSpreadRadius: 5
    });
  return (0, r.jsx)(O.Z, {
    targetElementRef: p,
    user: Z,
    guildId: G,
    channelId: v.id,
    position: "top",
    clickTrap: true,
    children: e => (0, r.jsx)(s.u, {
      text: Y,
      children: (0, r.jsx)(c.P3F, {
        innerRef: p,
        onClick: t => {
          e.onClick(t), (0, b.v)(f, b.d.VOICE_USER)
        },
        className: N.avatarContainer,
        onContextMenu: W,
        focusProps: P,
        children: (0, r.jsx)(E.Z, {
          shakeLocation: S.oZ.VOICE_USER,
          isShaking: U,
          children: (0, r.jsx)("div", {
            className: N.avatar,
            style: j({
              backgroundImage: "url(".concat(H, ")")
            }, q),
            children: null != V ? (0, r.jsx)(V, {
              className: a()(N.avatarIconOverlay, {
                [N.avatarIconRed]: F
              }),
              color: "currentColor",
              size: "xs"
            }) : null
          })
        })
      })
    })
  })
}

function w(e) {
  let {
    voiceStates: t,
    channel: n,
    className: l
  } = e, [u, d] = i.useState(false), g = (0, o.e7)([v.default], () => v.default.getId()), {
    containerRef: h,
    maxVisibleAvatars: m
  } = function(e) {
    let [t, n] = i.useState(7), r = (0, f.Z)(() => {
      let t = null == l ? true : l.current;
      if (null == t) return;
      let r = Math.floor((t.offsetWidth + 4) / 28);
      n(Math.max(1, e > r ? r - 1 : r))
    }), l = (0, p.y)(r, [e], {
      fireOnMount: true,
      fireOnDepsChange: true
    });
    return {
      containerRef: l,
      maxVisibleAvatars: t
    }
  }(t.length - 1), [b, _] = function(e, t, n) {
    let r = [];
    for (let i of e)
      if (i.user.id !== t && !r.some(e => e.user.id === i.user.id)) {
        if (r.length >= n) return [r, true];
        r.push(i)
      } return [r, false]
  }(t, g, m), E = u ? c.V_R : c.qJs, O = u ? T.intl.string(T.t["Z/Tya5"]) : T.intl.string(T.t.XR5BAc), I = (0, r.jsx)(s.u, {
    text: O,
    ariaHidden: true,
    children: (0, r.jsx)(c.hU, {
      "aria-label": O,
      onClick: () => d(!u),
      icon: () => (0, r.jsx)(E, {
        size: "md"
      }),
      variant: "icon-only",
      size: "sm"
    })
  }), y = _ && u ? t : b;
  return y.length <= 0 ? null : (0, r.jsx)(c.zJl, {
    className: a()(N.scroller, l),
    fade: true,
    children: (0, r.jsxs)("div", {
      ref: h,
      className: a()(N.voiceUsers, !u && N.collapsed),
      role: "group",
      "aria-label": T.intl.string(T.t["/ZgaVU"]),
      children: [y.map(e => {
        let {
          user: t,
          nick: i,
          voiceState: l
        } = e;
        return t.id !== g ? (0, r.jsx)(Z, {
          channel: n,
          user: t,
          nick: i,
          mute: l.isVoiceMuted(),
          deaf: l.isVoiceDeafened(),
          video: l.selfVideo,
          serverMute: l.mute,
          serverDeaf: l.deaf
        }, t.id) : null
      }), _ ? I : null]
    })
  })
}