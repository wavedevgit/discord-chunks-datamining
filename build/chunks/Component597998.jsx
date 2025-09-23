/** Chunk was on web.js **/
/** chunk id: 597998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => U,
  eJ: () => j,
  nm: () => M
}), require("./539854.js"), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk456100 = require("./456100.js"),
  Chunk657305 = require("./657305.js"),
  Chunk367907 = require("./367907.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk340044 = require("./340044.jsx"),
  Chunk223135 = require("./223135.jsx"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk630388 = require("./630388.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867721 = require("./867721.js");

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
      isSelf: i
    } = e;
    return i && null == t ? (0, r.jsx)(s.u, {
      text: S.intl.string(S.t.qstQub),
      children: (0, r.jsx)(l.svS, {
        className: o()(A.icon, n)
      })
    }, "add-status") : (0, r.jsx)(g.Z, {
      size: x,
      hangStatusActivity: t,
      className: o()(A.icon, n)
    })
  },
  j = e => {
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

function M(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: a,
    serverMute: c,
    deaf: f,
    serverDeaf: p,
    collapsed: h,
    video: m,
    isStreaming: g,
    disabled: O,
    isWatching: C,
    iconClassName: N,
    embeddedApplication: R,
    otherClientSessionType: P,
    voicePlatform: w,
    application: D,
    guildId: x,
    channelId: j,
    user: M,
    disconnected: k,
    hangStatusActivity: U,
    showHangStatus: Z,
    isSelf: F,
    handleHoverHangStatus: V,
    handleHoverIcons: H
  } = e, {
    enabled: Y
  } = u.c.getCurrentConfig({
    location: "VoiceUserIcons"
  }, {
    autoTrackExposure: true
  });
  if (h || O) return null;
  let W = [],
    K = B({
      iconClassName: N,
      mute: n,
      localMute: i,
      serverMute: c,
      deaf: f,
      serverDeaf: p
    });
  m && (a ? W.push((0, r.jsx)(s.u, {
    text: S.intl.string(S.t["PXMZ//"]),
    children: (0, r.jsx)(l.Amn, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, N),
      colorClass: A.strikethrough
    })
  }, "video")) : W.push((0, r.jsx)(s.u, {
    text: S.intl.string(S.t.FlNoSU),
    children: (0, r.jsx)(l.Odl, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, N)
    })
  }, "video"))), k && W.push((0, r.jsx)(s.u, {
    text: S.intl.string(S.t.HFwRpq),
    children: (0, r.jsx)(l.Mgn, {
      className: o()(A.icon, N),
      color: l.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected"));
  let z = Y ? l.iWm : l.nG3;
  null != R && W.push((0, r.jsx)(s.u, {
    text: (0, d.Z)(R.name),
    children: (0, r.jsx)(z, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, N)
    })
  }, "activity")), P === T.YE.XBOX || w === I.wR.XBOX ? W.push((0, r.jsx)(b.Z, {
    className: o()(A.icon, N)
  }, "xbox")) : (P === T.YE.PLAYSTATION || w === I.wR.PLAYSTATION) && W.push((0, r.jsx)(E.Z, {
    className: o()(A.icon, N)
  }, "playstation")), C && W.push((0, r.jsx)(s.u, {
    text: S.intl.string(S.t.JH1SJy),
    children: (0, r.jsx)(l.tEF, {
      size: "xs",
      color: "currentColor",
      className: o()(A.icon, N)
    })
  }, "watch")), g && W.push((0, r.jsx)(_.ZP, {
    size: _.ZP.Sizes.SMALL
  }, "stream"));
  let q = null != D && !(0, y.yE)(D.flags, v.udG.EMBEDDED),
    X = null == U && q;
  return 0 !== W.length || 0 !== K.length || Z || X ? (0, r.jsxs)("div", {
    className: o()(A.icons, t),
    children: [(0, r.jsxs)("div", {
      className: A.iconGroup,
      onMouseEnter: () => null == H ? true : H(true),
      onMouseLeave: () => null == H ? true : H(false),
      children: [K, W]
    }), Z || X ? (0, r.jsx)("div", {
      className: A.iconGroup,
      onMouseEnter: () => null == V ? true : V(true),
      onMouseLeave: () => null == V ? true : V(false),
      children: X ? (0, r.jsx)(G, {
        application: D,
        iconClassName: N,
        guildId: x,
        channelId: j,
        userId: M.id
      }, "".concat(M.id, "-game")) : (0, r.jsx)(L, {
        hangStatusActivity: U,
        iconClassName: N,
        isSelf: F
      })
    }) : null]
  }) : null
}

function k(e, t) {
  var n, {
      avatarContainerClass: i = A.avatarContainer,
      userNameClassName: a = A.usernameFont,
      size: s = v.ipw.SMALL,
      selected: c = false,
      disabled: u = false,
      isOverlay: d = false
    } = e,
    f = w(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
  let {
    onClick: _,
    onKeyDown: h,
    onDoubleClick: g,
    onContextMenu: E,
    onMouseLeave: b,
    onMouseDown: y,
    priority: I,
    speaking: T,
    collapsed: C,
    mute: R,
    serverMute: D,
    guildId: x,
    nick: L,
    isGuest: j,
    flipped: k,
    className: U,
    overlap: G,
    "aria-label": B,
    ringing: Z,
    user: F
  } = f, V = (0, p.j)({
    displayNameStyles: F.displayNameStyles
  }), H = e => {
    null == _ || _(e, F)
  }, Y = e => {
    null == g || g(e, F)
  }, W = e => {
    null == E || E(e, F)
  }, K = e => {
    null == b || b(e, F)
  }, z = e => {
    null == y || y(e, F)
  };

  function q() {
    return I && !C ? (0, r.jsx)(l.ua7, {
      text: S.intl.string(S.t.BVK71t),
      children: e => (0, r.jsx)("div", N({
        className: o()(A.iconPriortySpeaker, {
          [A.iconPriortySpeakerSpeaking]: !R && !D && T
        })
      }, e))
    }) : null
  }

  function X() {
    return (0, r.jsx)("div", {
      className: o()(i, A.avatar, {
        [A.avatarLarge]: s === v.ipw.LARGE,
        [A.avatarSmall]: s === v.ipw.SMALL,
        [A.avatarSpeaking]: T
      }),
      style: {
        backgroundImage: "url(".concat(F.getAvatarURL(x, s === v.ipw.LARGE ? 38 : 24), ")")
      }
    })
  }

  function Q() {
    let e = (0, r.jsxs)("div", {
        className: o()(a, A.username, V, {
          [A.usernameSpeaking]: !R && !D && T
        }),
        children: [null != L ? L : O.ZP.getName(F), j ? (0, r.jsxs)("span", {
          className: A.guestSuffix,
          children: ["\xa0", S.intl.string(S.t["pFO/Pj"])]
        }) : ""]
      }),
      t = {
        primaryGuild: F.primaryGuild,
        userId: F.id,
        contextGuildId: x,
        isOverlay: d,
        disableTooltip: true,
        className: o()(A.clanTag, d && A.isOverlay),
        profileViewedAnalytics: {
          source: d ? v.jXE.OVERLAY : v.Sbl.VOICE_PANEL
        }
      };
    return !C || d ? (0, r.jsx)(m.Z, P(N({}, t), {
      children: e
    })) : null
  }

  function J() {
    return (0, r.jsx)(M, N({
      disabled: u
    }, f))
  }
  return (0, r.jsx)(l.kL8, {
    ref: t,
    className: o()(U, {
      [A.voiceUser]: true,
      [A.overlap]: G,
      [A.selected]: c,
      [A.clickable]: null != _,
      [A.userSmall]: s === v.ipw.SMALL,
      [A.userLarge]: s === v.ipw.LARGE,
      [A.disabled]: !c && u,
      [A.ringing]: Z
    }),
    onClick: H,
    onDoubleClick: Y,
    onContextMenu: W,
    onMouseLeave: K,
    onMouseDown: z,
    onKeyDown: h,
    "aria-label": null != (n = null != B ? B : L) ? n : F.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: o()(A.content, {
        [A.flipped]: k
      }),
      children: [q(), X(), Q(), J()]
    })
  })
}
let U = Chunk647438.forwardRef(k);

function G(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: a,
    channelId: l,
    userId: u
  } = e, [d, _] = i.useState(false), p = (0, c.O)(e => _(e));
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
  return (0, r.jsx)(s.u, {
    text: S.intl.formatToPlainString(S.t.Sq9xJy, {
      game: t.name
    }),
    "aria-label": S.intl.formatToPlainString(S.t.Sq9xJy, {
      game: t.name
    }),
    children: (0, r.jsx)(h.Z, {
      ref: p,
      className: o()(A.icon, A.gameIcon, n),
      game: t,
      size: h.A.XSMALL,
      onMouseEnter: m
    })
  })
}

function B(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: i,
    serverMute: a,
    deaf: c,
    serverDeaf: u
  } = e, d = [];
  if (n) {
    let e, n = () => i ? S.intl.string(S.t.Q8Uzoa) : a ? S.intl.string(S.t.uLddbW) : S.intl.string(S.t.tjtv3N);
    e = a || i ? l.v0G : l.nRN;
    let c = (0, r.jsx)(e, {
      className: o()(A.icon, t, {
        [A.iconServer]: a
      }),
      color: "currentColor"
    });
    d.push((0, r.jsx)(s.u, {
      text: n(),
      children: c
    }, "mute"))
  }
  if (u || c) {
    let e = u ? l.Vm4 : l.wE8,
      n = (0, r.jsx)(e, {
        className: o()(A.icon, t, {
          [A.iconServer]: u
        }),
        color: "currentColor"
      });
    d.push((0, r.jsx)(s.u, {
      text: u ? S.intl.string(S.t.btxSdH) : S.intl.string(S.t.NjmiOD),
      children: n
    }, "deaf"))
  }
  return d
}