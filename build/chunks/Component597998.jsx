/** Chunk was on web.js **/
/** chunk id: 597998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => k,
  eJ: () => j,
  nm: () => M
}), require("./539854.js"), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk95015 = require("./95015.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk657305 = require("./657305.js"),
  Chunk367907 = require("./367907.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk386725 = require("./386725.js"),
  Chunk7284 = require("./7284.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk340044 = require("./340044.jsx"),
  Chunk223135 = require("./223135.jsx"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960414 = require("./960414.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
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

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = D(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let x = 16,
  L = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: i,
      onAddHangStatusClicked: a,
      userId: s
    } = e, l = e => {
      e.stopPropagation(), null == a || a()
    };
    return i && null == t ? (0, r.jsx)(u.P3F, {
      onClick: l,
      className: C.icons,
      children: (0, r.jsx)(u.EO4, {
        color: "currentColor",
        className: o()(C.icon, C.hoverableIcon, n)
      })
    }) : (0, r.jsx)(u.P3F, {
      onClick: l,
      className: C.icons,
      children: (0, r.jsx)(E.Z, {
        userId: s,
        size: x,
        hangStatusActivity: t,
        className: o()(C.icon, n)
      })
    })
  },
  j = e => {
    let {
      children: t,
      collapsed: n = false,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      className: o()(i, C.list, n ? C.listCollapse : C.listDefault),
      role: "group",
      children: t
    })
  };

function M(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: a,
    serverMute: s,
    deaf: f,
    serverDeaf: _,
    collapsed: m,
    video: h,
    isStreaming: g,
    disabled: E,
    isWatching: O,
    iconClassName: A,
    embeddedApplication: N,
    otherClientSessionType: P,
    voicePlatform: R,
    application: w,
    guildId: D,
    channelId: x,
    user: j,
    disconnected: M,
    hangStatusActivity: k,
    showHangStatus: Z,
    isSelf: B,
    handleHoverHangStatus: F,
    handleHoverIcons: V,
    onAddHangStatusClicked: H
  } = e;
  if (m || E) return null;
  let Y = [],
    W = G({
      iconClassName: A,
      mute: n,
      localMute: i,
      serverMute: s,
      deaf: f,
      serverDeaf: _
    });
  h && (a ? Y.push((0, r.jsx)(c.u, {
    text: T.intl.string(T.t["PXMZ/+"]),
    children: (0, r.jsx)(u.Amn, {
      size: "md",
      color: "currentColor",
      className: o()(C.icon, A),
      colorClass: C.strikethrough
    })
  }, "video")) : Y.push((0, r.jsx)(c.u, {
    text: T.intl.string(T.t.FlNoSV),
    children: (0, r.jsx)(u.Odl, {
      size: "md",
      color: "currentColor",
      className: o()(C.icon, A)
    })
  }, "video"))), M && Y.push((0, r.jsx)(c.u, {
    text: T.intl.string(T.t.HFwRpk),
    children: (0, r.jsx)(u.Mgn, {
      className: o()(C.icon, A),
      color: u.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != N && Y.push((0, r.jsx)(c.u, {
    text: (0, d.Z)(N.name),
    children: (0, r.jsx)(u.nG3, {
      size: "md",
      color: "currentColor",
      className: o()(C.icon, A)
    })
  }, "activity")), P === I.YE.XBOX || R === S.wR.XBOX ? Y.push((0, r.jsx)(y.Z, {
    className: o()(C.icon, A)
  }, "xbox")) : (P === I.YE.PLAYSTATION || R === S.wR.PLAYSTATION) && Y.push((0, r.jsx)(b.Z, {
    className: o()(C.icon, A)
  }, "playstation")), O && Y.push((0, r.jsx)(c.u, {
    text: T.intl.string(T.t["JH1SJ+"]),
    children: (0, r.jsx)(u.tEF, {
      size: "xs",
      color: "currentColor",
      className: o()(C.icon, A)
    })
  }, "watch")), g && Y.push((0, r.jsx)(p.ZP, {
    size: p.ZP.Sizes.SMALL
  }, "stream"));
  let K = null != w && !(0, l.yE)(w.flags, v.udG.EMBEDDED),
    z = null == k && K;
  return 0 !== Y.length || 0 !== W.length || Z || z ? (0, r.jsxs)("div", {
    className: o()(C.icons, t),
    children: [(0, r.jsxs)("div", {
      className: C.iconGroup,
      onMouseEnter: () => null == V ? true : V(true),
      onMouseLeave: () => null == V ? true : V(false),
      children: [W, Y]
    }), Z || z ? (0, r.jsx)("div", {
      className: C.iconGroup,
      onMouseEnter: () => null == F ? true : F(true),
      onMouseLeave: () => null == F ? true : F(false),
      children: z ? (0, r.jsx)(U, {
        application: w,
        iconClassName: A,
        guildId: D,
        channelId: x,
        userId: j.id
      }, "".concat(j.id, "-game")) : (0, r.jsx)(L, {
        userId: j.id,
        hangStatusActivity: k,
        iconClassName: A,
        isSelf: B,
        onAddHangStatusClicked: H
      })
    }) : null]
  }) : null
}
let k = function(e) {
  var t, {
      avatarContainerClass: n = C.avatarContainer,
      userNameClassName: i = C.usernameFont,
      size: a = v.ipw.SMALL,
      selected: s = false,
      disabled: l = false,
      isOverlay: d = false,
      ref: f
    } = e,
    p = w(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]);
  let {
    onClick: h,
    onKeyDown: E,
    onDoubleClick: b,
    onContextMenu: y,
    onMouseLeave: S,
    onMouseDown: I,
    priority: A,
    speaking: P,
    latched: D,
    collapsed: x,
    mute: L,
    serverMute: j,
    guildId: k,
    nick: U,
    isGuest: G,
    flipped: Z,
    className: B,
    overlap: F,
    "aria-label": V,
    ringing: H,
    user: Y
  } = p, W = (0, _.Z)({
    userId: Y.id,
    guildId: k
  }), K = (0, m.j)({
    displayNameStyles: W
  }), z = e => {
    null == h || h(e, Y)
  }, q = e => {
    null == b || b(e, Y)
  }, Q = e => {
    null == y || y(e, Y)
  }, X = e => {
    null == S || S(e, Y)
  }, J = e => {
    null == I || I(e, Y)
  };

  function $() {
    return A && !x ? (0, r.jsx)(c.u, {
      text: T.intl.string(T.t.BVK71i),
      children: (0, r.jsx)("div", {
        className: o()(C.iconPriortySpeaker, {
          [C.iconPriortySpeakerSpeaking]: !L && !j && P
        })
      })
    }) : null
  }

  function ee() {
    return (0, r.jsx)("div", {
      className: o()(n, C.avatar, {
        [C.avatarLarge]: a === v.ipw.LARGE,
        [C.avatarSmall]: a === v.ipw.SMALL,
        [C.avatarSpeaking]: P,
        [C.avatarLatched]: D && !P
      }),
      style: {
        backgroundImage: "url(".concat(Y.getAvatarURL(k, a === v.ipw.LARGE ? 38 : 24), ")")
      }
    })
  }

  function et() {
    let e = (0, r.jsxs)("div", {
        className: o()(i, C.username, K, {
          [C.usernameSpeaking]: !L && !j && P
        }),
        children: [null != U ? U : O.ZP.getName(Y), G ? (0, r.jsxs)("span", {
          className: C.guestSuffix,
          children: ["\xa0", T.intl.string(T.t["pFO/Ph"])]
        }) : ""]
      }),
      t = {
        primaryGuild: Y.primaryGuild,
        userId: Y.id,
        contextGuildId: k,
        isOverlay: d,
        disableTooltip: true,
        className: o()(C.clanTag, d && C.isOverlay),
        profileViewedAnalytics: {
          source: d ? v.jXE.OVERLAY : v.Sbl.VOICE_PANEL
        }
      };
    return !x || d ? (0, r.jsx)(g.Z, R(N({}, t), {
      children: e
    })) : null
  }

  function en() {
    return (0, r.jsx)(M, N({
      disabled: l
    }, p))
  }
  return (0, r.jsx)(u.kL8, {
    ref: f,
    className: o()(B, {
      [C.voiceUser]: true,
      [C.overlap]: F,
      [C.selected]: s,
      [C.clickable]: null != h,
      [C.userSmall]: a === v.ipw.SMALL,
      [C.userLarge]: a === v.ipw.LARGE,
      [C.disabled]: !s && l,
      [C.ringing]: H
    }),
    onClick: z,
    onDoubleClick: q,
    onContextMenu: Q,
    onMouseLeave: X,
    onMouseDown: J,
    onKeyDown: E,
    "aria-label": null != (t = null != V ? V : U) ? t : Y.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: o()(C.content, {
        [C.flipped]: Z
      }),
      children: [$(), ee(), et(), en()]
    })
  })
};

function U(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: a,
    channelId: l,
    userId: u
  } = e, [d, p] = i.useState(false), _ = (0, s.O)(e => p(e));
  i.useEffect(() => {
    d && f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: l,
      guild_id: a,
      user_id: u
    })
  }, [t.id, l, a, u, d]);
  let m = () => {
    f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
      channel_id: l,
      guild_id: a,
      game_name: t.name,
      user_id: u
    })
  };
  return (0, r.jsx)(c.u, {
    text: T.intl.formatToPlainString(T.t.Sq9xJ7, {
      game: t.name
    }),
    "aria-label": T.intl.formatToPlainString(T.t.Sq9xJ7, {
      game: t.name
    }),
    children: (0, r.jsx)(h.Z, {
      ref: _,
      className: o()(C.icon, C.gameIcon, n),
      game: t,
      size: h.A.XSMALL,
      onMouseEnter: m
    })
  })
}

function G(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: i,
    serverMute: a,
    deaf: s,
    serverDeaf: l
  } = e, d = [];
  if (n) {
    let e, n = () => i ? T.intl.string(T.t.Q8Uzof) : a ? T.intl.string(T.t.uLddbQ) : T.intl.string(T.t.tjtv3P);
    e = a || i ? u.v0G : u.nRN;
    let s = (0, r.jsx)(e, {
      className: o()(C.icon, t, {
        [C.iconServer]: a
      }),
      color: "currentColor"
    });
    d.push((0, r.jsx)(c.u, {
      text: n(),
      children: s
    }, "mute"))
  }
  if (l || s) {
    let e = l ? u.Vm4 : u.wE8,
      n = (0, r.jsx)(e, {
        className: o()(C.icon, t, {
          [C.iconServer]: l
        }),
        color: "currentColor"
      });
    d.push((0, r.jsx)(c.u, {
      text: l ? T.intl.string(T.t.btxSdB) : T.intl.string(T.t.NjmiOL),
      children: n
    }, "deaf"))
  }
  return d
}