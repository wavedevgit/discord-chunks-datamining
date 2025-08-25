/** Chunk was on web.js **/
/** chunk id: 597998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => z,
  eJ: () => Y,
  nm: () => W
}), require("./539854.js"), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk456100 = require("./456100.js"),
  Chunk657305 = require("./657305.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk340044 = require("./340044.jsx"),
  Chunk833858 = require("./833858.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk880395 = require("./880395.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js"),
  Chunk574254 = require("./574254.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk630388 = require("./630388.js"),
  Chunk51144 = require("./51144.js"),
  Chunk91088 = require("./91088.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk368736 = require("./368736.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function V(e, t) {
  if (null == e) return {};
  var n, r, i = F(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let H = e => {
    let {
      hangStatusActivity: t,
      iconClassName: n,
      isSelf: i
    } = e;
    return i && null == t ? (0, r.jsx)(l.DY3, {
      className: M.iconSpacing,
      text: k.intl.string(k.t.qstQub),
      children: (0, r.jsx)(l.svS, {
        className: o()(M.icon, n)
      })
    }, "add-status") : (0, r.jsx)(l.DY3, {
      className: M.iconSpacing,
      text: (0, O.O8)(t),
      children: (0, r.jsx)(v.Z, {
        hangStatusActivity: t,
        className: o()(M.hangStatusIcon, n)
      })
    }, "hang-status")
  },
  Y = e => {
    let {
      children: t,
      collapsed: n = false,
      className: i
    } = e;
    return (0, r.jsx)("div", {
      className: o()(i, M.list, n ? M.listCollapse : M.listDefault),
      role: "group",
      children: t
    })
  };

function W(e) {
  let {
    className: t,
    mute: n,
    localMute: i,
    localVideoDisabled: a,
    serverMute: s,
    deaf: c,
    serverDeaf: u,
    collapsed: _,
    video: p,
    isStreaming: h,
    disabled: m,
    isWatching: E,
    iconClassName: b,
    embeddedApplication: y,
    otherClientSessionType: O,
    voicePlatform: v,
    application: I,
    guildId: T,
    channelId: S,
    user: A,
    disconnected: C,
    hangStatusActivity: w,
    showHangStatus: D,
    isSelf: U,
    handleHoverHangStatus: G,
    handleHoverIcons: B
  } = e, {
    enabled: Z
  } = d.c.getCurrentConfig({
    location: "VoiceUserIcons"
  }, {
    autoTrackExposure: true
  });
  if (_ || m) return null;
  let V = [],
    F = (0, r.jsx)(X, {
      iconClassName: b,
      mute: n,
      localMute: i,
      serverMute: s,
      deaf: c,
      serverDeaf: u
    });
  p && (a ? V.push((0, r.jsx)(l.DY3, {
    className: M.iconSpacing,
    text: k.intl.string(k.t["PXMZ//"]),
    children: (0, r.jsx)(l.Amn, {
      size: "md",
      color: "currentColor",
      className: o()(M.icon, b),
      colorClass: M.strikethrough
    })
  }, "video")) : V.push((0, r.jsx)(l.DY3, {
    className: M.iconSpacing,
    text: k.intl.string(k.t.FlNoSU),
    children: (0, r.jsx)(l.Odl, {
      size: "md",
      color: "currentColor",
      className: o()(M.icon, b)
    })
  }, "video"))), C && V.push((0, r.jsx)(l.DY3, {
    className: M.iconSpacing,
    text: k.intl.string(k.t.HFwRpq),
    children: (0, r.jsx)(l.Mgn, {
      className: o()(M.icon, b),
      color: l.TVs.colors.STATUS_WARNING_BACKGROUND
    })
  }, "disconnected"));
  let Y = Z ? l.iWm : l.nG3;
  null != y && V.push((0, r.jsx)(l.DY3, {
    text: (0, f.Z)(y.name),
    className: M.iconSpacing,
    children: (0, r.jsx)(Y, {
      size: "md",
      color: "currentColor",
      className: o()(M.icon, b)
    })
  }, "activity")), O === j.YE.XBOX || v === L.wR.XBOX ? V.push((0, r.jsx)("div", {
    className: M.iconSpacing,
    children: (0, r.jsx)(R.Z, {
      className: o()(M.icon, b)
    })
  }, "xbox")) : (O === j.YE.PLAYSTATION || v === L.wR.PLAYSTATION) && V.push((0, r.jsx)("div", {
    className: M.iconSpacing,
    children: (0, r.jsx)(N.Z, {
      className: o()(M.icon, b)
    })
  }, "playstation")), E && V.push((0, r.jsx)(l.DY3, {
    className: M.iconSpacing,
    text: k.intl.string(k.t.JH1SJy),
    children: (0, r.jsx)(l.tEF, {
      size: "xs",
      color: "currentColor",
      className: o()(M.icon, b)
    })
  }, "watch")), h && V.push((0, r.jsx)("div", {
    className: o()(M.iconSpacing, M.liveIconSpacing),
    children: (0, r.jsx)(g.ZP, {
      size: g.ZP.Sizes.SMALL
    })
  }, "stream"));
  let W = null != I && !(0, P.yE)(I.flags, x.udG.EMBEDDED),
    K = null == w && W;
  return 0 !== V.length || null != F || D || K ? (0, r.jsxs)("div", {
    className: o()(M.icons, t),
    children: [(0, r.jsxs)("div", {
      className: M.iconGroup,
      onMouseEnter: () => null == B ? true : B(true),
      onMouseLeave: () => null == B ? true : B(false),
      children: [F, V]
    }), D || K ? (0, r.jsx)("div", {
      className: M.iconGroup,
      onMouseEnter: () => null == G ? true : G(true),
      onMouseLeave: () => null == G ? true : G(false),
      children: K ? (0, r.jsx)(q, {
        application: I,
        iconClassName: b,
        guildId: T,
        channelId: S,
        userId: A.id
      }, "".concat(A.id, "-game")) : (0, r.jsx)(H, {
        hangStatusActivity: w,
        iconClassName: b,
        isSelf: U
      })
    }) : null]
  }) : null
}

function K(e, t) {
  var n, {
      avatarContainerClass: a = M.avatarContainer,
      userNameClassName: c = M.usernameFont,
      size: d = x.ipw.SMALL,
      selected: f = false,
      disabled: _ = false,
      isOverlay: g = false
    } = e,
    b = V(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
  let {
    onClick: O,
    onKeyDown: v,
    onDoubleClick: N,
    onContextMenu: R,
    onMouseLeave: P,
    onMouseDown: j,
    priority: U,
    speaking: B,
    collapsed: F,
    mute: H,
    serverMute: Y,
    guildId: K,
    nick: z,
    isGuest: q,
    flipped: X,
    className: Q,
    overlap: J,
    "aria-label": $,
    ringing: ee,
    user: et,
    channelId: en
  } = b, {
    parentAnalyticsLocation: er
  } = (0, p.ZP)(), ei = (0, u.bp)(), ea = null != en ? S.Z.getChannel(en) : null, eo = (0, s.e7)([T.default, A.Z], () => A.Z.isInChannel(en, T.default.getId())), {
    enabled: es
  } = D.P.useExperiment({
    location: "VoiceUser"
  }), el = (0, E.j)({
    displayNameStyles: et.displayNameStyles
  }), [ec, eu] = i.useState(false);
  i.useEffect(() => {
    let e = false,
      t = () => {
        e !== C.Z.isOpen() && ((e = C.Z.isOpen()) || eu(false))
      };
    return C.Z.addChangeListener(t), () => C.Z.removeChangeListener(t)
  }, []);
  let ed = e => {
      null == O || O(e, et)
    },
    ef = e => {
      null == N || N(e, et)
    },
    e_ = e => {
      null == R || R(e, et)
    },
    ep = e => {
      null == P || P(e, et)
    },
    eh = e => {
      null == j || j(e, et)
    };

  function em() {
    return U && !F ? (0, r.jsx)(l.ua7, {
      text: k.intl.string(k.t.BVK71t),
      children: e => (0, r.jsx)("div", G({
        className: o()(M.iconPriortySpeaker, {
          [M.iconPriortySpeakerSpeaking]: !H && !Y && B
        })
      }, e))
    }) : null
  }

  function eg() {
    return (0, r.jsx)("div", {
      className: o()(a, M.avatar, {
        [M.avatarLarge]: d === x.ipw.LARGE,
        [M.avatarSmall]: d === x.ipw.SMALL,
        [M.avatarSpeaking]: B
      }),
      style: {
        backgroundImage: "url(".concat(et.getAvatarURL(K, d === x.ipw.LARGE ? 38 : 24), ")")
      }
    })
  }

  function eE() {
    let e = (0, r.jsxs)("div", {
        className: o()(c, M.username, el, {
          [M.usernameSpeaking]: !H && !Y && B
        }),
        children: [null != z ? z : w.ZP.getName(et), q ? (0, r.jsxs)("span", {
          className: M.guestSuffix,
          children: ["\xa0", k.intl.string(k.t["pFO/Pj"])]
        }) : ""]
      }),
      t = {
        primaryGuild: et.primaryGuild,
        userId: et.id,
        contextGuildId: K,
        isOverlay: g,
        disableTooltip: true,
        className: o()(M.clanTag, g && M.isOverlay),
        profileViewedAnalytics: {
          source: g ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL
        }
      };
    return !F || g ? (0, r.jsx)(y.Z, Z(G({}, t), {
      children: e
    })) : null
  }

  function eb() {
    return (0, r.jsx)(W, G({
      disabled: _
    }, b))
  }

  function ey(e) {
    null != K && null != ea && ((0, h.v)(er, h.d.MORE), eu(true), (0, I.D)(e, et, ea, {
      context: ei
    }, (e, t) => {
      (0, m.o)({
        menuName: e,
        menuItemProps: t,
        entrypoint: L.A5.THREE_DOT,
        location: er,
        targetUserId: et.id
      })
    }))
  }

  function eO() {
    return F || !eo || es ? null : (0, r.jsx)(l.DY3, {
      text: k.intl.string(k.t["+1H47u"]),
      className: o()(M.optionsButtonContainer, {
        [M.optionsContainerActive]: ec
      }),
      children: (0, r.jsx)(l.P3F, {
        className: o()(M.optionsButton, {
          [M.optionsActive]: ec
        }),
        onClick: ey,
        children: (0, r.jsx)(l.xhG, {
          size: "md",
          className: M.icon
        })
      })
    })
  }
  return (0, r.jsx)(l.kL8, {
    ref: t,
    className: o()(Q, {
      [M.voiceUser]: true,
      [M.overlap]: J,
      [M.selected]: f,
      [M.clickable]: null != O,
      [M.userSmall]: d === x.ipw.SMALL,
      [M.userLarge]: d === x.ipw.LARGE,
      [M.disabled]: !f && _,
      [M.ringing]: ee
    }),
    onClick: ed,
    onDoubleClick: ef,
    onContextMenu: e_,
    onMouseLeave: ep,
    onMouseDown: eh,
    onKeyDown: v,
    "aria-label": null != (n = null != $ ? $ : z) ? n : et.username,
    focusProps: {
      offset: {
        right: 4
      }
    },
    children: (0, r.jsxs)("div", {
      className: o()(M.content, {
        [M.flipped]: X
      }),
      children: [em(), eg(), eE(), eb(), eO()]
    })
  })
}
let z = Chunk647438.forwardRef(K);

function q(e) {
  let {
    application: t,
    iconClassName: n,
    guildId: a,
    channelId: s,
    userId: u
  } = e, [d, f] = i.useState(false), p = (0, c.O)(e => f(e));
  i.useEffect(() => {
    d && _.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
      channel_id: s,
      guild_id: a,
      user_id: u
    })
  }, [t.id, s, a, u, d]);
  let h = () => {
    _.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
      channel_id: s,
      guild_id: a,
      game_name: t.name,
      user_id: u
    })
  };
  return (0, r.jsx)(l.DY3, {
    text: k.intl.formatToPlainString(k.t.Sq9xJy, {
      game: t.name
    }),
    "aria-label": k.intl.formatToPlainString(k.t.Sq9xJy, {
      game: t.name
    }),
    className: M.iconSpacing,
    children: (0, r.jsx)("div", {
      ref: p,
      children: (0, r.jsx)(b.Z, {
        className: o()(M.icon, M.gameIcon, n),
        game: t,
        size: b.Z.Sizes.XSMALL,
        onMouseEnter: h
      })
    })
  })
}

function X(e) {
  let {
    iconClassName: t,
    mute: n,
    localMute: i,
    serverMute: a,
    deaf: s,
    serverDeaf: c
  } = e, u = [];
  if (n) {
    let e, n = () => i ? k.intl.string(k.t.Q8Uzoa) : a ? k.intl.string(k.t.uLddbW) : k.intl.string(k.t.tjtv3N);
    e = a || i ? l.v0G : l.nRN;
    let s = (0, r.jsx)(e, {
      className: o()(M.icon, t, {
        [M.iconServer]: a
      }),
      color: "currentColor"
    });
    u.push((0, r.jsx)(l.DY3, {
      text: n(),
      className: M.iconSpacing,
      children: s
    }, "mute"))
  }
  if (c || s) {
    let e = c ? l.Vm4 : l.wE8,
      n = (0, r.jsx)(e, {
        className: o()(M.icon, t, {
          [M.iconServer]: c
        }),
        color: "currentColor"
      });
    u.push((0, r.jsx)(l.DY3, {
      className: M.iconSpacing,
      text: c ? k.intl.string(k.t.btxSdH) : k.intl.string(k.t.NjmiOD),
      children: n
    }, "deaf"))
  }
  return 0 === u.length ? null : u
}