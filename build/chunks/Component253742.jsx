/** Chunk was on 21738 **/
/** chunk id: 253742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk717558 = require("./717558.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk659974 = require("./659974.js"),
  Chunk384059 = require("./384059.js"),
  Chunk480890 = require("./480890.js"),
  Chunk551826 = require("./551826.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk485296 = require("./485296.js"),
  Chunk427262 = require("./427262.js"),
  Chunk31408 = require("./31408.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk603108 = require("./603108.js");

function T(e) {
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

function j(e, t) {
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
let x = {
    offset: 2
  },
  P = {
    serverDeaf: {
      icon: Chunk397927.TJE,
      colorize: true,
      getStatus: () => C.intl.string(C.t.btxSdB)
    },
    serverMute: {
      icon: Chunk397927.O1p,
      colorize: true,
      getStatus: () => C.intl.string(C.t.uLddbQ)
    },
    deaf: {
      icon: Chunk397927.cQT,
      colorize: false,
      getStatus: () => C.intl.string(C.t.NjmiOL)
    },
    mute: {
      icon: Chunk397927.z0P,
      colorize: false,
      getStatus: () => C.intl.string(C.t.tjtv3P)
    },
    localMute: {
      icon: Chunk397927.O1p,
      colorize: false,
      getStatus: () => C.intl.string(C.t["9F+xJU"])
    }
  };

function w(e) {
  var t, l;
  let p = i.useRef(null),
    {
      parentAnalyticsLocation: f
    } = (0, A.Ay)(),
    {
      channel: O,
      user: w,
      nick: L,
      mute: R,
      deaf: D,
      serverMute: M,
      serverDeaf: k
    } = e,
    U = (0, s.bG)([y.A], () => y.A.isLocalMute(w.id)),
    G = (0, d.A)({
      userId: w.id,
      checkSoundSharing: true
    }),
    V = null != (t = O.getGuildId()) ? t : true,
    B = w.getAvatarURL(O.guild_id, 24),
    H = null != L ? L : v.Ay.getName(w),
    {
      icon: F,
      colorize: Y,
      getStatus: K
    } = null != (l = function(e) {
      let {
        serverDeaf: t,
        deaf: n,
        serverMute: r,
        mute: i,
        localMute: l
      } = e;
      if (t) return P.serverDeaf;
      if (n) return P.deaf;
      if (r) return P.serverMute;
      if (l) return P.localMute;
      if (i) return P.mute
    }({
      serverDeaf: k,
      deaf: D,
      serverMute: M,
      mute: R,
      localMute: U
    })) ? l : {},
    z = null != K ? C.intl.formatToPlainString(C.t["1+MVBP"], {
      userName: H,
      status: K()
    }) : H;

  function W(e) {
    null != V ? (0, u.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("91609")]).then(n.bind(n, 107632));
      return t => (0, r.jsx)(e, j(T({}, t), {
        user: w,
        guildId: V,
        channel: O,
        showMediaItems: true,
        onInteraction: (0, b.s)("GuildChannelUserContextMenu", h.A.RTC_PANEL, {
          targetUserId: w.id
        })
      }))
    }) : (0, u.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("32418"), n.e("99871")]).then(n.bind(n, 668569));
      return t => (0, r.jsx)(e, j(T({}, t), {
        user: w,
        showMediaItems: true,
        onInteraction: (0, b.s)("UserGenericContextMenu", h.A.RTC_PANEL, {
          targetUserId: w.id
        })
      }))
    })
  }
  let q = (0, s.bG)([I.A], () => I.A.getVoiceVolume(w.id)),
    Q = (0, g.v)({
      isSpeaking: G,
      voiceDb: q,
      spreadDirection: g.O.INSET_ONLY,
      maxInnerSpreadRadius: 3
    });
  return (0, r.jsx)(E.A, {
    targetElementRef: p,
    user: w,
    guildId: V,
    channelId: O.id,
    position: "top",
    clickTrap: true,
    children: e => (0, r.jsx)(o.m, {
      text: z,
      children: (0, r.jsx)(c.DUT, {
        innerRef: p,
        onClick: t => {
          e.onClick(t), (0, m.X)(f, m.O.VOICE_USER)
        },
        className: N.H,
        onContextMenu: W,
        focusProps: x,
        children: (0, r.jsx)(_.A, {
          shakeLocation: S.uD.VOICE_USER,
          isShaking: G,
          children: (0, r.jsx)("div", {
            className: N.my,
            style: T({
              backgroundImage: "url(".concat(B, ")")
            }, Q),
            children: null != F ? (0, r.jsx)(F, {
              className: a()(N.tr, {
                [N.qE]: Y
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

function L(e) {
  let {
    voiceStates: t,
    channel: n,
    className: l
  } = e, [u, d] = i.useState(false), h = (0, s.bG)([O.default], () => O.default.getId()), {
    containerRef: A,
    maxVisibleAvatars: g
  } = function(e) {
    let [t, n] = i.useState(7), r = (0, f.A)(() => {
      let t = null == l ? true : l.current;
      if (null == t) return;
      let r = Math.floor((t.offsetWidth + 4) / 28);
      n(Math.max(1, e > r ? r - 1 : r))
    }), l = (0, p.w)(r, [e], {
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
  }(t, h, g), _ = u ? c.QGg : c.j96, E = u ? C.intl.string(C.t["Z/Tya5"]) : C.intl.string(C.t.XR5BAc), y = (0, r.jsx)(o.m, {
    text: E,
    ariaHidden: true,
    children: (0, r.jsx)(c.K0, {
      "aria-label": E,
      onClick: () => d(!u),
      icon: () => (0, r.jsx)(_, {
        size: "md"
      }),
      variant: "icon-only",
      size: "sm"
    })
  }), I = b && u ? t : m;
  return I.length <= 0 ? null : (0, r.jsx)(c.IpV, {
    className: a()(N.XG, l),
    fade: true,
    children: (0, r.jsxs)("div", {
      ref: A,
      className: a()(N.Xk, !u && N.yZ),
      role: "group",
      "aria-label": C.intl.string(C.t["/ZgaVU"]),
      children: [I.map(e => {
        let {
          user: t,
          nick: i,
          voiceState: l
        } = e;
        return t.id !== h ? (0, r.jsx)(w, {
          channel: n,
          user: t,
          nick: i,
          mute: l.isVoiceMuted(),
          deaf: l.isVoiceDeafened(),
          video: l.selfVideo,
          serverMute: l.mute,
          serverDeaf: l.deaf
        }, t.id) : null
      }), b ? y : null]
    })
  })
}