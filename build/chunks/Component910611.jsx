/** Chunk was on 80037 **/
/** chunk id: 910611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  TS: () => F,
  ud: () => D,
  v0: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk370774 = require("./370774.js"),
  Chunk703656 = require("./703656.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk699516 = require("./699516.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk63063 = require("./63063.js"),
  Chunk374386 = require("./374386.js"),
  Chunk946734 = require("./946734.jsx"),
  Chunk99843 = require("./99843.jsx"),
  Chunk372564 = require("./372564.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk217314 = require("./217314.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk161655 = require("./161655.js");

function R(e) {
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

function k(e, t) {
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

function L(e) {
  var t;
  let {
    channel: n,
    children: i
  } = e, l = (0, u.q)(null == (t = n.linkedLobby) ? true : t.application_id), [a, o] = (0, f.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], true, true);
  if (null == l) return null;
  let d = O.ZP.getApplicationIconURL({
      id: l.id,
      icon: l.icon,
      size: 14
    }),
    [p, h] = a !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP ? [w.intl.string(w.t.XJVlf3), true] : [(0, r.jsxs)("div", {
      className: M.linkedLobbyEducationTooltip,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: w.intl.string(w.t.YIVr4O)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: w.intl.format(w.t["16agur"], {
          helpdeskArticle: j.Z.getArticleURL(N.BhN.LINKED_LOBBIES)
        })
      }), (0, r.jsx)(c.P3F, {
        className: M.linkedLobbyEducationTooltipCloseClickContainer,
        onClick: () => o(A.L.USER_DISMISS),
        children: (0, r.jsx)(c.Dio, {
          className: M.linkedLobbyEducationTooltipCloseIcon,
          color: "currentColor"
        })
      })]
    }, 0), w.intl.string(w.t.YIVr4O)];
  return (0, r.jsx)(c.ua7, {
    tooltipClassName: M.linkedLobbyEducationTooltipWrapper,
    position: "bottom",
    align: "left",
    text: p,
    "aria-label": h,
    forceOpen: a === s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || true,
    children: e => (0, r.jsxs)("div", k(R({
      className: M.linkedLobbyTooltip
    }, e), {
      children: [i, (0, r.jsxs)(c.Text, {
        className: M.linkedLobby,
        variant: "text-sm/medium",
        color: "header-primary",
        children: ["•", (0, r.jsx)("img", {
          alt: "",
          src: d,
          className: M.linkedLobbyApplicationIcon
        }), l.name]
      })]
    }))
  }, a)
}

function D(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: l,
    guild: o,
    inSidebar: s = false,
    handleClick: u,
    handleContextMenu: d,
    handleParentClick: f,
    handleParentContextMenu: m,
    renderFollowButton: g
  } = e, b = (0, h.KS)(t, o), {
    prefix: y,
    level: C
  } = function(e, t) {
    var n, r;
    switch (e) {
      case N.d4z.DM:
        return {
          prefix: w.intl.string(w.t.EJRzg4), level: 1
        };
      case N.d4z.GROUP_DM:
        return {
          prefix: w.intl.string(w.t["e5y+go"]), level: 1
        };
      case N.d4z.GUILD_DIRECTORY:
        return {
          prefix: null != (n = null == t ? true : t.name) ? n : "", level: 1
        };
      case N.d4z.GUILD_ANNOUNCEMENT:
      case N.d4z.GUILD_TEXT:
      case N.d4z.GUILD_FORUM:
      case N.d4z.GUILD_MEDIA:
      case N.d4z.GUILD_STAGE_VOICE:
      case N.d4z.GUILD_VOICE:
        return {
          prefix: null != (r = null == t ? true : t.name) ? r : "", level: 1
        };
      case N.d4z.ANNOUNCEMENT_THREAD:
      case N.d4z.PUBLIC_THREAD:
      case N.d4z.PRIVATE_THREAD:
        return {
          prefix: w.intl.string(w.t["7Xm5QE"]), level: 2
        };
      default:
        return {
          prefix: null, level: 1
        }
    }
  }(t.type, o), v = (0, r.jsxs)(r.Fragment, {
    children: [null != y ? (0, r.jsxs)(c.nn4, {
      children: [y, ":"]
    }) : null, " ", n]
  });
  switch (t.type) {
    case N.d4z.DM:
      return (0, r.jsx)(T.Z, {
        level: C,
        channel: t,
        handleClick: u,
        handleContextMenu: d
      });
    case N.d4z.GROUP_DM:
      if (t.isManaged()) return v;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.nn4, {
          children: w.intl.string(w.t["e5y+go"])
        }), (0, r.jsx)(P.j, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case N.d4z.GUILD_ANNOUNCEMENT:
    case N.d4z.GUILD_TEXT:
    case N.d4z.GUILD_FORUM:
    case N.d4z.GUILD_MEDIA:
      return null != t.linkedLobby ? (0, r.jsxs)(L, {
        channel: t,
        children: [V(b, t.type === N.d4z.GUILD_ANNOUNCEMENT ? w.intl.string(w.t.l1dkSE) : w.intl.string(w.t.Pnajj4)), (0, r.jsx)(Z.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: u,
          children: v
        })]
      }) : (0, r.jsxs)(i.Fragment, {
        children: [V(b, t.type === N.d4z.GUILD_ANNOUNCEMENT ? w.intl.string(w.t.l1dkSE) : w.intl.string(w.t.Pnajj4)), (0, r.jsx)(Z.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: u,
          children: v
        }), null != g ? g() : null]
      });
    case N.d4z.GUILD_VOICE:
      return (0, r.jsxs)(i.Fragment, {
        children: [V(b, w.intl.string(w.t.BVZqJi)), (0, r.jsx)(Z.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: u,
          children: v
        })]
      });
    case N.d4z.GUILD_STAGE_VOICE:
      return (0, r.jsxs)(i.Fragment, {
        children: [V(b, w.intl.string(w.t.EErMzM)), (0, r.jsx)(Z.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: u,
          children: v
        })]
      });
    case N.d4z.ANNOUNCEMENT_THREAD:
    case N.d4z.PUBLIC_THREAD:
    case N.d4z.PRIVATE_THREAD:
      let O = null;
      if (!s && null != l) {
        let e = (0, h.KS)(l, o);
        O = (0, r.jsxs)(i.Fragment, {
          children: [V(e, w.intl.string(w.t.Pnajj4)), (0, r.jsx)(Z.Z.Title, {
            level: C,
            onContextMenu: m,
            onClick: f,
            className: a()(M.parentChannelName, M.cursorPointer),
            children: (0, p.F6)(l, x.default, _.Z)
          }), (0, r.jsx)(Z.Z.Caret, {})]
        })
      }
      let j = (null == l ? true : l.type) != null && N.TPd.GUILD_THREADS_ONLY.has(l.type);
      return (0, r.jsxs)(i.Fragment, {
        children: [O, V(j ? null : b, w.intl.string(w.t["7Xm5QE"])), (0, r.jsx)(Z.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: u,
          className: a()({
            [M.cursorPointer]: s,
            [M.forumPostTitle]: j,
            [M.forumPostSidebarTitle]: s && j
          }),
          children: v
        })]
      });
    case N.d4z.GUILD_DIRECTORY:
      let E = (null == o ? true : o.features.has(N.oNc.HUB)) ? w.intl.formatToPlainString(w.t.Dy2aho, {
        guildName: n
      }) : n;
      return (0, r.jsxs)(i.Fragment, {
        children: [null !== b ? (0, r.jsx)(Z.Z.ChannelIcon, {
          icon: b,
          "aria-hidden": true
        }) : null, (0, r.jsxs)(Z.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: u,
          children: [null != y ? (0, r.jsxs)(c.nn4, {
            children: [y, ":"]
          }) : null, " ", E]
        })]
      });
    default:
      return null
  }
}
let U = e => {
  var t, n, l;
  let {
    channel: a
  } = e, s = (0, o.e7)([x.default], () => x.default.getCurrentUser()), c = (0, o.e7)([x.default], () => x.default.getUser(a.getRecipientId())), u = (0, E.G)(), p = (0, o.e7)([y.Z], () => null != c ? y.Z.getUserProfile(c.id) : null), h = null != p && (null != (t = null == p ? true : p.fetchEndedAt) ? t : 0) > 0;
  return (i.useEffect(() => {
    (null == s ? true : s.isStaff()) && null != c && !c.isStaff() && (0, C.Z)(c.id, c.getAvatarURL(true, 80), {
      dispatchWait: true,
      withMutualGuilds: true,
      withMutualFriendsCount: true
    })
  }, [s, c]), a.isDM() && (null == s ? true : s.isStaff()) && null != c) ? c.isStaff() ? (0, r.jsx)(d.Z, {
    type: d.Z.Types.STAFF_ONLY_DM
  }) : u && h && !(null != (l = null == (n = p.badges) ? true : n.some(e => e.id.startsWith("staff"))) && l) ? (0, r.jsx)(d.Z, {
    type: d.Z.Types.NOT_STAFF_WARNING
  }) : null : null
};

function B(e, t) {
  switch (e.type) {
    case N.d4z.DM:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(U, {
          channel: e
        }), (0, r.jsx)(S.Z, {
          channel: e
        }, e.id)]
      });
    case N.d4z.GUILD_ANNOUNCEMENT:
    case N.d4z.GUILD_TEXT:
    case N.d4z.GUILD_VOICE:
    case N.d4z.GUILD_STAGE_VOICE:
    case N.d4z.GROUP_DM:
      return null != t ? (0, r.jsx)(I.Z, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function V(e, t) {
  return (0, r.jsxs)(r.Fragment, {
    children: [null !== e && (0, r.jsx)(Z.Z.ChannelIcon, {
      icon: e,
      "aria-hidden": true
    }), (0, r.jsx)(c.nn4, {
      children: t
    })]
  })
}

function F(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: l = "left"
  } = e, a = (0, o.e7)([v.Z], () => v.Z.getGuildId()), s = (0, g.D)(), u = i.useRef(null);
  if (a !== N.I_8 && !s || null == t) return null;
  let d = () => {
    (0, b.XU)(t.id, n.id)
  };
  return (0, r.jsx)(c.ua7, {
    text: t.name,
    targetElementRef: u,
    position: "bottom",
    children: e => (0, r.jsxs)(c.P3F, k(R({}, e), {
      onClick: d,
      className: M.guildBreadcrumbContainer,
      children: ["left" === l && (0, r.jsx)(Z.Z.Caret, {
        direction: "left"
      }), (0, r.jsx)("div", {
        ref: u,
        children: (0, r.jsx)(m.Z, {
          guild: t,
          size: m.Z.Sizes.SMALLER,
          className: M.guildBreadcrumbIcon,
          active: true
        })
      }), "right" === l && (0, r.jsx)(Z.Z.Caret, {
        direction: "right"
      })]
    }))
  })
}