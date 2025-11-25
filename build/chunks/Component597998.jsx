/** Chunk was on web.js **/
/** chunk id: 597998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => j,
  eJ: () => M,
  nm: () => k
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
  Chunk368736 = require("./368736.js");

function C(e, t, n) {
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
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let L = 16,
  x = e => {
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
      className: A.icons,
      children: (0, r.jsx)(u.EO4, {
        color: "currentColor",
        className: o()(A.icon, A.hoverableIcon, n)
      })
    }) : (0, r.jsx)(u.P3F, {
      onClick: l,
      className: A.icons,
      children: (0, r.jsx)(E.Z, {
        userId: s,
        size: L,
        hangStatusActivity: t,
        className: o()(A.icon, n)
      })
    })
  },
  M = e => {
    let {
      children: t,
      collapsed: n = false,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      className: o()(i, A.list, n ? A.listCollapse : A.listDefault),
      role: "group",
      children: t
    })
  };

function k(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: a,
    serverMute: s,
    deaf: f,
    serverDeaf: p,
    collapsed: h,
    video: m,
    isStreaming: g,
    disabled: E,
    isWatching: O,
    iconClassName: C,
    embeddedApplication: N,
    otherClientSessionType: R,
    voicePlatform: P,
    application: D,
    guildId: w,
    channelId: L,
    user: M,
    disconnected: k,
    hangStatusActivity: j,
    showHangStatus: B,
    isSelf: Z,
    handleHoverHangStatus: F,
    handleHoverIcons: V,
    onAddHangStatusClicked: H
  } = e;
  if (h || E) return null;
  let Y = [],
    W = G({
      iconClassName: C,
      mute: n,
      localMute: i,
      serverMute: s,
      deaf: f,
      serverDeaf: p
    });
  m && (a ? Y.push((0, r.jsx)(c.u, {
    text: S.intl.string(S.t["PXMZ/+"]),
    children: (0, r.jsx)(u.Amn, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, C),
      colorClass: A.strikethrough
    })
  }, "video")) : Y.push((0, r.jsx)(c.u, {
    text: S.intl.string(S.t.FlNoSV),
    children: (0, r.jsx)(u.Odl, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, C)
    })
  }, "video"))), k && Y.push((0, r.jsx)(c.u, {
    text: S.intl.string(S.t.HFwRpk),
    children: (0, r.jsx)(u.Mgn, {
      className: o()(A.icon, C),
      color: u.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected")), null != N && Y.push((0, r.jsx)(c.u, {
    text: (0, d.Z)(N.name),
    children: (0, r.jsx)(u.nG3, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, C)
    })
  }, "activity")), R === T.YE.XBOX || P === I.wR.XBOX ? Y.push((0, r.jsx)(y.Z, {
    className: o()(A.icon, C)
  }, "xbox")) : (R === T.YE.PLAYSTATION || P === I.wR.PLAYSTATION) && Y.push((0, r.jsx)(b.Z, {
    className: o()(A.icon, C)
  }, "playstation")), O && Y.push((0, r.jsx)(c.u, {
    text: S.intl.string(S.t["JH1SJ+"]),
    children: (0, r.jsx)(u.tEF, {
      size: "xs",
      color: "currentColor",
      className: o()(A.icon, C)
    })
  }, "watch")), g && Y.push((0, r.jsx)(_.ZP, {
    size: _.ZP.Sizes.SMALL
  }, "stream"));
  let K = null != D && !(0, l.yE)(D.flags, v.udG.EMBEDDED),
    z = null == j && K;
  return 0 !== Y.length || 0 !== W.length || B || z ? (0, r.jsxs)("div", {
    className: o()(A.icons, t),
    children: [(0, r.jsxs)("div", {
      className: A.iconGroup,
      onMouseEnter: () => null == V ? true : V(true),
      onMouseLeave: () => null == V ? true : V(false),
      children: [W, Y]
    }), B || z ? (0, r.jsx)("div", {
      className: A.iconGroup,
      onMouseEnter: () => null == F ? true : F(true),
      onMouseLeave: () => null == F ? true : F(false),
      children: z ? (0, r.jsx)(U, {
        application: D,
        iconClassName: C,
        guildId: w,
        channelId: L,
        userId: M.id
      }, "".concat(M.id, "-game")) : (0, r.jsx)(x, {
        userId: M.id,
        hangStatusActivity: j,
        iconClassName: C,
        isSelf: Z,
        onAddHangStatusClicked: H
      })
    }) : null]
  }) : null
}
let j = function(e) {
  var t, {
      avatarContainerClass: n = A.avatarContainer,
      userNameClassName: i = A.usernameFont,
      size: a = v.ipw.SMALL,
      selected: s = false,
      disabled: l = false,
      isOverlay: d = false,
      ref: f
    } = e,
    _ = D(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]);
  let {
    onClick: m,
    onKeyDown: E,
    onDoubleClick: b,
    onContextMenu: y,
    onMouseLeave: I,
    onMouseDown: T,
    priority: C,
    speaking: R,
    latched: w,
    collapsed: L,
    mute: x,
    serverMute: M,
    guildId: j,
    nick: U,
    isGuest: G,
    flipped: B,
    className: Z,
    overlap: F,
    "aria-label": V,
    ringing: H,
    user: Y
  } = _, W = (0, p.Z)({
    userId: Y.id,
    guildId: j
  }), K = (0, h.j)({
    displayNameStyles: W
  }), z = e => {
    null == m || m(e, Y)
  }, q = e => {
    null == b || b(e, Y)
  }, X = e => {
    null == y || y(e, Y)
  }, Q = e => {
    null == I || I(e, Y)
  }, J = e => {
    null == T || T(e, Y)
  };

  function $() {
    return C && !L ? (0, r.jsx)(c.u, {
      text: S.intl.string(S.t.BVK71i),
      children: (0, r.jsx)("div", {
        className: o()(A.iconPriortySpeaker, {
          [A.iconPriortySpeakerSpeaking]: !x && !M && R
        })
      })
    }) : null
  }

  function ee() {
    return (0, r.jsx)("div", {
      className: o()(n, A.avatar, {
        [A.avatarLarge]: a === v.ipw.LARGE,
        [A.avatarSmall]: a === v.ipw.SMALL,
        [A.avatarSpeaking]: R,
        [A.avatarLatched]: w && !R
      }),
      style: {
        backgroundImage: "url(".concat(Y.getAvatarURL(j, a === v.ipw.LARGE ? 38 : 24), ")")
      }
    })
  }

  function et() {
    let e = (0, r.jsxs)("div", {
        className: o()(i, A.username, K, {
          [A.usernameSpeaking]: !x && !M && R
        }),
        children: [null != U ? U : O.ZP.getName(Y), G ? (0, r.jsxs)("span", {
          className: A.guestSuffix,
          children: ["\xa0", S.intl.string(S.t["pFO/Ph"])]
        }) : ""]
      }),
      t = {
        primaryGuild: Y.primaryGuild,
        userId: Y.id,
        contextGuildId: j,
        isOverlay: d,
        disableTooltip: true,
        className: o()(A.clanTag, d && A.isOverlay),
        profileViewedAnalytics: {
          source: d ? v.jXE.OVERLAY : v.Sbl.VOICE_PANEL
        }
      };
    return !L || d ? (0, r.jsx)(g.Z, P(N({}, t), {
      children: e
    })) : null
  }

  function en() {
    return (0, r.jsx)(k, N({
      disabled: l
    }, _))
  }
  return (0, r.jsx)(u.kL8, {
    ref: f,
    className: o()(Z, {
      [A.voiceUser]: true,
      [A.overlap]: F,
      [A.selected]: s,
      [A.clickable]: null != m,
      [A.userSmall]: a === v.ipw.SMALL,
      [A.userLarge]: a === v.ipw.LARGE,
      [A.disabled]: !s && l,
      [A.ringing]: H
    }),
    onClick: z,
    onDoubleClick: q,
    onContextMenu: X,
    onMouseLeave: Q,
    onMouseDown: J,
    onKeyDown: E,
    "aria-label": null != (t = null != V ? V : U) ? t : Y.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: o()(A.content, {
        [A.flipped]: B
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
  } = e, [d, _] = i.useState(false), p = (0, s.O)(e => _(e));
  i.useEffect(() => {
    d && f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: l,
      guild_id: a,
      user_id: u
    })
  }, [t.id, l, a, u, d]);
  let h = () => {
    f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
      channel_id: l,
      guild_id: a,
      game_name: t.name,
      user_id: u
    })
  };
  return (0, r.jsx)(c.u, {
    text: S.intl.formatToPlainString(S.t.Sq9xJ7, {
      game: t.name
    }),
    "aria-label": S.intl.formatToPlainString(S.t.Sq9xJ7, {
      game: t.name
    }),
    children: (0, r.jsx)(m.Z, {
      ref: p,
      className: o()(A.icon, A.gameIcon, n),
      game: t,
      size: m.A.XSMALL,
      onMouseEnter: h
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
    let e, n = () => i ? S.intl.string(S.t.Q8Uzof) : a ? S.intl.string(S.t.uLddbQ) : S.intl.string(S.t.tjtv3P);
    e = a || i ? u.v0G : u.nRN;
    let s = (0, r.jsx)(e, {
      className: o()(A.icon, t, {
        [A.iconServer]: a
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
        className: o()(A.icon, t, {
          [A.iconServer]: l
        }),
        color: "currentColor"
      });
    d.push((0, r.jsx)(c.u, {
      text: l ? S.intl.string(S.t.btxSdB) : S.intl.string(S.t.NjmiOL),
      children: n
    }, "deaf"))
  }
  return d
}