/** Chunk was on web.js **/
/** chunk id: 481947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => G,
  Kc: () => U,
  Wr: () => k
}), require("./321073.js"), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk665260 = require("./665260.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk440594 = require("./440594.js"),
  Chunk58149 = require("./58149.js"),
  Chunk659974 = require("./659974.js"),
  Chunk863089 = require("./863089.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk609425 = require("./609425.js"),
  Chunk73392 = require("./73392.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk217356 = require("./217356.jsx"),
  Chunk559405 = require("./559405.jsx"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk544105 = require("./544105.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk77615 = require("./77615.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = L(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let j = 16,
  M = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: i,
      onAddHangStatusClicked: a,
      userId: o
    } = e, l = e => {
      e.stopPropagation(), null == a || a()
    };
    return i && null == t ? (0, r.jsx)(u.DUT, {
      onClick: l,
      className: N.Pt,
      children: (0, r.jsx)(u.nm2, {
        color: "currentColor",
        className: s()(N.Kk, N.G8, n)
      })
    }) : (0, r.jsx)(u.DUT, {
      onClick: l,
      className: N.Pt,
      children: (0, r.jsx)(b.A, {
        userId: o,
        size: j,
        hangStatusActivity: t,
        className: s()(N.Kk, n)
      })
    })
  },
  k = e => {
    let {
      children: t,
      collapsed: n = false,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      className: s()(i, N.p_, n ? N.GT : N.m3),
      role: "group",
      children: t
    })
  };

function U(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: a,
    serverMute: o,
    deaf: f,
    serverDeaf: p,
    collapsed: _,
    video: m,
    isStreaming: g,
    disabled: E,
    isWatching: y,
    iconClassName: b,
    embeddedApplication: A,
    otherClientSessionType: w,
    voicePlatform: R,
    application: P,
    guildId: D,
    channelId: x,
    user: L,
    disconnected: j,
    hangStatusActivity: k,
    showHangStatus: U,
    isSelf: G,
    handleHoverHangStatus: B,
    handleHoverIcons: H,
    onAddHangStatusClicked: Y
  } = e;
  if (_ || E) return null;
  let W = [],
    K = F({
      iconClassName: b,
      mute: n,
      localMute: i,
      serverMute: o,
      deaf: f,
      serverDeaf: p
    });
  m && (a ? W.push((0, r.jsx)(c.m, {
    text: C.intl.string(C.t["PXMZ/+"]),
    children: (0, r.jsx)(u.OCo, {
      size: "md",
      color: "currentColor",
      className: s()(N.Kk, b),
      colorClass: N.of
    })
  }, "video")) : W.push((0, r.jsx)(c.m, {
    text: C.intl.string(C.t.FlNoSV),
    children: (0, r.jsx)(u.npA, {
      size: "md",
      color: "currentColor",
      className: s()(N.Kk, b)
    })
  }, "video"))), j && W.push((0, r.jsx)(c.m, {
    text: C.intl.string(C.t.HFwRpk),
    children: (0, r.jsx)(u.EpV, {
      className: s()(N.Kk, b),
      color: u.LU0.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != A && W.push((0, r.jsx)(c.m, {
    text: (0, d.A)(A.name),
    children: (0, r.jsx)(u.bxf, {
      size: "md",
      color: "currentColor",
      className: s()(N.Kk, b)
    })
  }, "activity")), w === T.f$.XBOX || R === S.J7.XBOX ? W.push((0, r.jsx)(v.A, {
    className: s()(N.Kk, b)
  }, "xbox")) : (w === T.f$.PLAYSTATION || R === S.J7.PLAYSTATION) && W.push((0, r.jsx)(O.A, {
    className: s()(N.Kk, b)
  }, "playstation")), y && W.push((0, r.jsx)(c.m, {
    text: C.intl.string(C.t["JH1SJ+"]),
    children: (0, r.jsx)(u.bMW, {
      size: "xs",
      color: "currentColor",
      className: s()(N.Kk, b)
    })
  }, "watch")), g && W.push((0, r.jsx)(h.Ay, {
    size: h.Ay.Sizes.SMALL
  }, "stream"));
  let z = null != P && !(0, l.Lt)(P.flags, I.gfo.EMBEDDED),
    q = null == k && z;
  return 0 !== W.length || 0 !== K.length || U || q ? (0, r.jsxs)("div", {
    className: s()(N.Pt, t),
    children: [(0, r.jsxs)("div", {
      className: N.RL,
      onMouseEnter: () => null == H ? true : H(true),
      onMouseLeave: () => null == H ? true : H(false),
      children: [K, W]
    }), U || q ? (0, r.jsx)("div", {
      className: N.RL,
      onMouseEnter: () => null == B ? true : B(true),
      onMouseLeave: () => null == B ? true : B(false),
      children: q ? (0, r.jsx)(V, {
        application: P,
        iconClassName: b,
        guildId: D,
        channelId: x,
        userId: L.id
      }, "".concat(L.id, "-game")) : (0, r.jsx)(M, {
        userId: L.id,
        hangStatusActivity: k,
        iconClassName: b,
        isSelf: G,
        onAddHangStatusClicked: Y
      })
    }) : null]
  }) : null
}
let G = function(e) {
  var t;
  let {
    avatarContainerClass: n = N.H,
    userNameClassName: i = N.gr,
    size: a = I.OSZ.SMALL,
    selected: o = false,
    disabled: l = false,
    isOverlay: d = false,
    ref: f
  } = e, h = x(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]), {
    onClick: E,
    onKeyDown: b,
    onDoubleClick: O,
    onContextMenu: v,
    onMouseLeave: S,
    onMouseDown: T,
    priority: w,
    speaking: P = false,
    latched: L,
    collapsed: j,
    mute: M,
    serverMute: k,
    guildId: G,
    nick: V,
    isGuest: F,
    flipped: B,
    className: H,
    overlap: Y,
    "aria-label": W,
    ringing: K,
    user: z
  } = h, q = (0, m.A)({
    userId: z.id,
    guildId: G
  }), Z = (0, g.a)({
    displayNameStyles: q
  }), X = (0, _.A)(z.id), Q = (0, p.v)({
    isSpeaking: P,
    isLatched: L && !M && !k,
    voiceDb: X
  }), J = e => {
    null == E || E(e, z)
  }, $ = e => {
    null == O || O(e, z)
  }, ee = e => {
    null == v || v(e, z)
  }, et = e => {
    null == S || S(e, z)
  }, en = e => {
    null == T || T(e, z)
  };

  function er() {
    return w && !j ? (0, r.jsx)(c.m, {
      text: C.intl.string(C.t.BVK71i),
      children: (0, r.jsx)("div", {
        className: s()(N.G, {
          [N.g4]: !M && !k && P
        })
      })
    }) : null
  }

  function ei() {
    return (0, r.jsx)("div", {
      className: s()(n, N.my, {
        [N.Jb]: a === I.OSZ.LARGE,
        [N.dT]: a === I.OSZ.SMALL
      }),
      style: R({
        backgroundImage: "url(".concat(z.getAvatarURL(G, a === I.OSZ.LARGE ? 38 : 24), ")")
      }, Q)
    })
  }

  function ea() {
    let e = (0, r.jsxs)("div", {
        className: s()(i, N.Xh, Z, {
          [N.Pi]: !M && !k && P
        }),
        children: [null != V ? V : A.Ay.getName(z), F ? (0, r.jsxs)("span", {
          className: N.IW,
          children: ["\xa0", C.intl.string(C.t["pFO/Ph"])]
        }) : ""]
      }),
      t = {
        primaryGuild: z.primaryGuild,
        userId: z.id,
        contextGuildId: G,
        isOverlay: d,
        disableTooltip: true,
        className: s()(N.fc, d && N.zW),
        profileViewedAnalytics: {
          source: d ? I.JJy.OVERLAY : I.ThZ.VOICE_PANEL
        }
      };
    return !j || d ? (0, r.jsx)(y.A, D(R({}, t), {
      children: e
    })) : null
  }

  function es() {
    return (0, r.jsx)(U, R({
      disabled: l
    }, h))
  }
  return (0, r.jsx)(u.sqX, {
    ref: f,
    className: s()(H, {
      [N.q7]: true,
      [N.EF]: Y,
      [N.wH]: o,
      [N.vk]: null != E,
      [N.L9]: a === I.OSZ.SMALL,
      [N.p8]: a === I.OSZ.LARGE,
      [N.r9]: !o && l,
      [N.DF]: K
    }),
    onClick: J,
    onDoubleClick: $,
    onContextMenu: ee,
    onMouseLeave: et,
    onMouseDown: en,
    onKeyDown: b,
    "aria-label": null != (t = null != W ? W : V) ? t : z.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: s()(N.Qs, {
        [N.zq]: B
      }),
      children: [er(), ei(), ea(), es()]
    })
  })
};

function V(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: a,
    channelId: l,
    userId: u
  } = e, [d, p] = i.useState(false), _ = (0, o.K)(e => p(e));
  i.useEffect(() => {
    d && f.Ay.trackWithMetadata(I.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: l,
      guild_id: a,
      user_id: u
    })
  }, [t.id, l, a, u, d]);
  let h = () => {
    f.Ay.trackWithMetadata(I.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
      channel_id: l,
      guild_id: a,
      game_name: t.name,
      user_id: u
    })
  };
  return (0, r.jsx)(c.m, {
    text: C.intl.formatToPlainString(C.t.Sq9xJ7, {
      game: t.name
    }),
    "aria-label": C.intl.formatToPlainString(C.t.Sq9xJ7, {
      game: t.name
    }),
    children: (0, r.jsx)(E.A, {
      ref: _,
      className: s()(N.Kk, N.Gt, n),
      game: t,
      size: E.M.XSMALL,
      onMouseEnter: h
    })
  })
}

function F(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: i,
    serverMute: a,
    deaf: o,
    serverDeaf: l
  } = e, d = [];
  if (n) {
    let e, n = () => i ? C.intl.string(C.t.Q8Uzof) : a ? C.intl.string(C.t.uLddbQ) : C.intl.string(C.t.tjtv3P);
    e = a || i ? u.O1p : u.z0P;
    let o = (0, r.jsx)(e, {
      className: s()(N.Kk, t, {
        [N.DU]: a
      }),
      color: "currentColor"
    });
    d.push((0, r.jsx)(c.m, {
      text: n(),
      children: o
    }, "mute"))
  }
  if (l || o) {
    let e = l ? u.TJE : u.cQT,
      n = (0, r.jsx)(e, {
        className: s()(N.Kk, t, {
          [N.DU]: l
        }),
        color: "currentColor"
      });
    d.push((0, r.jsx)(c.m, {
      text: l ? C.intl.string(C.t.btxSdB) : C.intl.string(C.t.NjmiOL),
      children: n
    }, "deaf"))
  }
  return d
}