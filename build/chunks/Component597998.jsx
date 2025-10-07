/** Chunk was on web.js **/
/** chunk id: 597998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => k,
  eJ: () => M,
  nm: () => j
}), require("./539854.js"), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
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
    return i && null == t ? (0, r.jsx)(c.P3F, {
      onClick: l,
      className: A.icons,
      children: (0, r.jsx)(c.EO4, {
        color: "currentColor",
        className: o()(A.icon, A.hoverableIcon, n)
      })
    }) : (0, r.jsx)(c.P3F, {
      onClick: l,
      className: A.icons,
      children: (0, r.jsx)(g.Z, {
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

function j(e) {
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
    disabled: O,
    isWatching: C,
    iconClassName: N,
    embeddedApplication: R,
    otherClientSessionType: P,
    voicePlatform: w,
    application: D,
    guildId: L,
    channelId: M,
    user: j,
    disconnected: k,
    hangStatusActivity: B,
    showHangStatus: Z,
    isSelf: F,
    handleHoverHangStatus: V,
    handleHoverIcons: H,
    onAddHangStatusClicked: Y
  } = e, {
    enabled: W
  } = u.c.getCurrentConfig({
    location: "VoiceUserIcons"
  }, {
    autoTrackExposure: true
  });
  if (h || O) return null;
  let K = [],
    z = G({
      iconClassName: N,
      mute: n,
      localMute: i,
      serverMute: s,
      deaf: f,
      serverDeaf: p
    });
  m && (a ? K.push((0, r.jsx)(l.u, {
    text: S.intl.string(S.t["PXMZ//"]),
    children: (0, r.jsx)(c.Amn, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, N),
      colorClass: A.strikethrough
    })
  }, "video")) : K.push((0, r.jsx)(l.u, {
    text: S.intl.string(S.t.FlNoSU),
    children: (0, r.jsx)(c.Odl, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, N)
    })
  }, "video"))), k && K.push((0, r.jsx)(l.u, {
    text: S.intl.string(S.t.HFwRpq),
    children: (0, r.jsx)(c.Mgn, {
      className: o()(A.icon, N),
      color: c.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected"));
  let q = W ? c.iWm : c.nG3;
  null != R && K.push((0, r.jsx)(l.u, {
    text: (0, d.Z)(R.name),
    children: (0, r.jsx)(q, {
      size: "md",
      color: "currentColor",
      className: o()(A.icon, N)
    })
  }, "activity")), P === T.YE.XBOX || w === I.wR.XBOX ? K.push((0, r.jsx)(b.Z, {
    className: o()(A.icon, N)
  }, "xbox")) : (P === T.YE.PLAYSTATION || w === I.wR.PLAYSTATION) && K.push((0, r.jsx)(E.Z, {
    className: o()(A.icon, N)
  }, "playstation")), C && K.push((0, r.jsx)(l.u, {
    text: S.intl.string(S.t.JH1SJy),
    children: (0, r.jsx)(c.tEF, {
      size: "xs",
      color: "currentColor",
      className: o()(A.icon, N)
    })
  }, "watch")), g && K.push((0, r.jsx)(_.ZP, {
    size: _.ZP.Sizes.SMALL
  }, "stream"));
  let X = null != D && !(0, y.yE)(D.flags, v.udG.EMBEDDED),
    Q = null == B && X;
  return 0 !== K.length || 0 !== z.length || Z || Q ? (0, r.jsxs)("div", {
    className: o()(A.icons, t),
    children: [(0, r.jsxs)("div", {
      className: A.iconGroup,
      onMouseEnter: () => null == H ? true : H(true),
      onMouseLeave: () => null == H ? true : H(false),
      children: [z, K]
    }), Z || Q ? (0, r.jsx)("div", {
      className: A.iconGroup,
      onMouseEnter: () => null == V ? true : V(true),
      onMouseLeave: () => null == V ? true : V(false),
      children: Q ? (0, r.jsx)(U, {
        application: D,
        iconClassName: N,
        guildId: L,
        channelId: M,
        userId: j.id
      }, "".concat(j.id, "-game")) : (0, r.jsx)(x, {
        userId: j.id,
        hangStatusActivity: B,
        iconClassName: N,
        isSelf: F,
        onAddHangStatusClicked: Y
      })
    }) : null]
  }) : null
}
let k = function(e) {
  var t, {
      avatarContainerClass: n = A.avatarContainer,
      userNameClassName: i = A.usernameFont,
      size: a = v.ipw.SMALL,
      selected: s = false,
      disabled: u = false,
      isOverlay: d = false,
      ref: f
    } = e,
    _ = w(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]);
  let {
    onClick: h,
    onKeyDown: g,
    onDoubleClick: E,
    onContextMenu: b,
    onMouseLeave: y,
    onMouseDown: I,
    priority: T,
    speaking: C,
    collapsed: R,
    mute: D,
    serverMute: L,
    guildId: x,
    nick: M,
    isGuest: k,
    flipped: U,
    className: G,
    overlap: B,
    "aria-label": Z,
    ringing: F,
    user: V
  } = _, H = (0, p.j)({
    displayNameStyles: V.displayNameStyles
  }), Y = e => {
    null == h || h(e, V)
  }, W = e => {
    null == E || E(e, V)
  }, K = e => {
    null == b || b(e, V)
  }, z = e => {
    null == y || y(e, V)
  }, q = e => {
    null == I || I(e, V)
  };

  function X() {
    return T && !R ? (0, r.jsx)(l.u, {
      text: S.intl.string(S.t.BVK71t),
      children: (0, r.jsx)("div", {
        className: o()(A.iconPriortySpeaker, {
          [A.iconPriortySpeakerSpeaking]: !D && !L && C
        })
      })
    }) : null
  }

  function Q() {
    return (0, r.jsx)("div", {
      className: o()(n, A.avatar, {
        [A.avatarLarge]: a === v.ipw.LARGE,
        [A.avatarSmall]: a === v.ipw.SMALL,
        [A.avatarSpeaking]: C
      }),
      style: {
        backgroundImage: "url(".concat(V.getAvatarURL(x, a === v.ipw.LARGE ? 38 : 24), ")")
      }
    })
  }

  function J() {
    let e = (0, r.jsxs)("div", {
        className: o()(i, A.username, H, {
          [A.usernameSpeaking]: !D && !L && C
        }),
        children: [null != M ? M : O.ZP.getName(V), k ? (0, r.jsxs)("span", {
          className: A.guestSuffix,
          children: ["\xa0", S.intl.string(S.t["pFO/Pj"])]
        }) : ""]
      }),
      t = {
        primaryGuild: V.primaryGuild,
        userId: V.id,
        contextGuildId: x,
        isOverlay: d,
        disableTooltip: true,
        className: o()(A.clanTag, d && A.isOverlay),
        profileViewedAnalytics: {
          source: d ? v.jXE.OVERLAY : v.Sbl.VOICE_PANEL
        }
      };
    return !R || d ? (0, r.jsx)(m.Z, P(N({}, t), {
      children: e
    })) : null
  }

  function $() {
    return (0, r.jsx)(j, N({
      disabled: u
    }, _))
  }
  return (0, r.jsx)(c.kL8, {
    ref: f,
    className: o()(G, {
      [A.voiceUser]: true,
      [A.overlap]: B,
      [A.selected]: s,
      [A.clickable]: null != h,
      [A.userSmall]: a === v.ipw.SMALL,
      [A.userLarge]: a === v.ipw.LARGE,
      [A.disabled]: !s && u,
      [A.ringing]: F
    }),
    onClick: Y,
    onDoubleClick: W,
    onContextMenu: K,
    onMouseLeave: z,
    onMouseDown: q,
    onKeyDown: g,
    "aria-label": null != (t = null != Z ? Z : M) ? t : V.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: o()(A.content, {
        [A.flipped]: U
      }),
      children: [X(), Q(), J(), $()]
    })
  })
};

function U(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: a,
    channelId: c,
    userId: u
  } = e, [d, _] = i.useState(false), p = (0, s.O)(e => _(e));
  i.useEffect(() => {
    d && f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: c,
      guild_id: a,
      user_id: u
    })
  }, [t.id, c, a, u, d]);
  let m = () => {
    f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
      channel_id: c,
      guild_id: a,
      game_name: t.name,
      user_id: u
    })
  };
  return (0, r.jsx)(l.u, {
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

function G(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: i,
    serverMute: a,
    deaf: s,
    serverDeaf: u
  } = e, d = [];
  if (n) {
    let e, n = () => i ? S.intl.string(S.t.Q8Uzoa) : a ? S.intl.string(S.t.uLddbW) : S.intl.string(S.t.tjtv3N);
    e = a || i ? c.v0G : c.nRN;
    let s = (0, r.jsx)(e, {
      className: o()(A.icon, t, {
        [A.iconServer]: a
      }),
      color: "currentColor"
    });
    d.push((0, r.jsx)(l.u, {
      text: n(),
      children: s
    }, "mute"))
  }
  if (u || s) {
    let e = u ? c.Vm4 : c.wE8,
      n = (0, r.jsx)(e, {
        className: o()(A.icon, t, {
          [A.iconServer]: u
        }),
        color: "currentColor"
      });
    d.push((0, r.jsx)(l.u, {
      text: u ? S.intl.string(S.t.btxSdH) : S.intl.string(S.t.NjmiOD),
      children: n
    }, "deaf"))
  }
  return d
}