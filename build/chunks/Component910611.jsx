/** Chunk was on 13873 **/
/** chunk id: 910611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  TS: () => F,
  ud: () => L,
  v0: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
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

function D(e) {
  var t;
  let {
    channel: n,
    children: i
  } = e, l = (0, d.q)(null == (t = n.linkedLobby) ? true : t.application_id), [a, o] = (0, m.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], true, true);
  if (null == l) return null;
  let p = E.ZP.getApplicationIconURL({
      id: l.id,
      icon: l.icon,
      size: 14
    }),
    [f, h] = a !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP ? [M.intl.string(M.t["XJVlf/"]), true] : [(0, r.jsxs)("div", {
      className: R.linkedLobbyEducationTooltip,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: M.intl.string(M.t.YIVr4B)
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: M.intl.format(M.t["16aguo"], {
          helpdeskArticle: j.Z.getArticleURL(A.BhN.LINKED_LOBBIES)
        })
      }), (0, r.jsx)(u.P3F, {
        className: R.linkedLobbyEducationTooltipCloseClickContainer,
        onClick: () => o(w.L.USER_DISMISS),
        children: (0, r.jsx)(u.Dio, {
          className: R.linkedLobbyEducationTooltipCloseIcon,
          color: "currentColor"
        })
      })]
    }, 0), M.intl.string(M.t.YIVr4B)];
  return (0, r.jsx)(c.u, {
    position: "bottom",
    align: "left",
    __unsupportedReactNodeAsText: f,
    "aria-label": h,
    forceOpen: a === s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || true,
    children: (0, r.jsxs)("div", {
      className: R.linkedLobbyTooltip,
      children: [i, (0, r.jsxs)(u.Text, {
        className: R.linkedLobby,
        variant: "text-sm/medium",
        color: "header-primary",
        children: ["•", (0, r.jsx)("img", {
          alt: "",
          src: p,
          className: R.linkedLobbyApplicationIcon
        }), l.name]
      })]
    })
  }, a)
}

function L(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: l,
    guild: o,
    inSidebar: s = false,
    handleClick: c,
    handleContextMenu: d,
    handleParentClick: p,
    handleParentContextMenu: m,
    renderFollowButton: g
  } = e, b = (0, h.KS)(t, o), {
    prefix: _,
    level: y
  } = function(e, t) {
    var n, r;
    switch (e) {
      case A.d4z.DM:
        return {
          prefix: M.intl.string(M.t.EJRzg7), level: 1
        };
      case A.d4z.GROUP_DM:
        return {
          prefix: M.intl.string(M.t["e5y+gm"]), level: 1
        };
      case A.d4z.GUILD_DIRECTORY:
        return {
          prefix: null != (n = null == t ? true : t.name) ? n : "", level: 1
        };
      case A.d4z.GUILD_ANNOUNCEMENT:
      case A.d4z.GUILD_TEXT:
      case A.d4z.GUILD_FORUM:
      case A.d4z.GUILD_MEDIA:
      case A.d4z.GUILD_STAGE_VOICE:
      case A.d4z.GUILD_VOICE:
        return {
          prefix: null != (r = null == t ? true : t.name) ? r : "", level: 1
        };
      case A.d4z.ANNOUNCEMENT_THREAD:
      case A.d4z.PUBLIC_THREAD:
      case A.d4z.PRIVATE_THREAD:
        return {
          prefix: M.intl.string(M.t["7Xm5QI"]), level: 2
        };
      default:
        return {
          prefix: null, level: 1
        }
    }
  }(t.type, o), C = (0, r.jsxs)(r.Fragment, {
    children: [null != _ ? (0, r.jsxs)(u.nn4, {
      children: [_, ":"]
    }) : null, " ", n]
  });
  switch (t.type) {
    case A.d4z.DM:
      return (0, r.jsx)(N.Z, {
        level: y,
        channel: t,
        handleClick: c,
        handleContextMenu: d
      });
    case A.d4z.GROUP_DM:
      if (t.isManaged()) return C;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.nn4, {
          children: M.intl.string(M.t["e5y+gm"])
        }), (0, r.jsx)(I.j, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case A.d4z.GUILD_ANNOUNCEMENT:
    case A.d4z.GUILD_TEXT:
    case A.d4z.GUILD_FORUM:
    case A.d4z.GUILD_MEDIA:
      return null != t.linkedLobby ? (0, r.jsxs)(D, {
        channel: t,
        children: [B(b, t.type === A.d4z.GUILD_ANNOUNCEMENT ? M.intl.string(M.t.l1dkSD) : M.intl.string(M.t.Pnajj0)), (0, r.jsx)(T.Z.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: C
        })]
      }) : (0, r.jsxs)(i.Fragment, {
        children: [B(b, t.type === A.d4z.GUILD_ANNOUNCEMENT ? M.intl.string(M.t.l1dkSD) : M.intl.string(M.t.Pnajj0)), (0, r.jsx)(T.Z.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: C
        }), null != g ? g() : null]
      });
    case A.d4z.GUILD_VOICE:
      return (0, r.jsxs)(i.Fragment, {
        children: [B(b, M.intl.string(M.t.BVZqJl)), (0, r.jsx)(T.Z.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: C
        })]
      });
    case A.d4z.GUILD_STAGE_VOICE:
      return (0, r.jsxs)(i.Fragment, {
        children: [B(b, M.intl.string(M.t.EErMzA)), (0, r.jsx)(T.Z.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: C
        })]
      });
    case A.d4z.ANNOUNCEMENT_THREAD:
    case A.d4z.PUBLIC_THREAD:
    case A.d4z.PRIVATE_THREAD:
      let O = null;
      if (!s && null != l) {
        let e = (0, h.KS)(l, o);
        O = (0, r.jsxs)(i.Fragment, {
          children: [B(e, M.intl.string(M.t.Pnajj0)), (0, r.jsx)(T.Z.Title, {
            level: y,
            onContextMenu: m,
            onClick: p,
            className: a()(R.parentChannelName, R.cursorPointer),
            children: (0, f.F6)(l, x.default, v.Z)
          }), (0, r.jsx)(T.Z.Caret, {})]
        })
      }
      let E = (null == l ? true : l.type) != null && A.TPd.GUILD_THREADS_ONLY.has(l.type);
      return (0, r.jsxs)(i.Fragment, {
        children: [O, B(E ? null : b, M.intl.string(M.t["7Xm5QI"])), (0, r.jsx)(T.Z.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          className: a()({
            [R.cursorPointer]: s,
            [R.forumPostTitle]: E,
            [R.forumPostSidebarTitle]: s && E
          }),
          children: C
        })]
      });
    case A.d4z.GUILD_DIRECTORY:
      let j = (null == o ? true : o.features.has(A.GuildFeatures.HUB)) ? M.intl.formatToPlainString(M.t.Dy2aht, {
        guildName: n
      }) : n;
      return (0, r.jsxs)(i.Fragment, {
        children: [null !== b ? (0, r.jsx)(T.Z.ChannelIcon, {
          icon: b,
          "aria-hidden": true
        }) : null, (0, r.jsxs)(T.Z.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: [null != _ ? (0, r.jsxs)(u.nn4, {
            children: [_, ":"]
          }) : null, " ", j]
        })]
      });
    default:
      return null
  }
}
let k = e => {
  var t, n, l;
  let {
    channel: a
  } = e, s = (0, o.e7)([x.default], () => x.default.getCurrentUser()), c = (0, o.e7)([x.default], () => x.default.getUser(a.getRecipientId())), u = (0, S.G)(), d = (0, o.e7)([y.Z], () => null != c ? y.Z.getUserProfile(c.id) : null), f = null != d && (null != (t = null == d ? true : d.fetchEndedAt) ? t : 0) > 0;
  return (i.useEffect(() => {
    (null == s ? true : s.isStaff()) && null != c && !c.isStaff() && (0, C.Z)(c.id, c.getAvatarURL(true, 80), {
      dispatchWait: true,
      withMutualGuilds: true,
      withMutualFriendsCount: true
    })
  }, [s, c]), a.isDM() && (null == s ? true : s.isStaff()) && null != c) ? c.isStaff() ? (0, r.jsx)(p.Z, {
    type: p.Z.Types.STAFF_ONLY_DM
  }) : u && f && !(null != (l = null == (n = d.badges) ? true : n.some(e => e.id.startsWith("staff"))) && l) ? (0, r.jsx)(p.Z, {
    type: p.Z.Types.NOT_STAFF_WARNING
  }) : null : null
};

function U(e, t) {
  switch (e.type) {
    case A.d4z.DM:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(k, {
          channel: e
        }), (0, r.jsx)(P.Z, {
          channel: e
        }, e.id)]
      });
    case A.d4z.GUILD_ANNOUNCEMENT:
    case A.d4z.GUILD_TEXT:
    case A.d4z.GUILD_VOICE:
    case A.d4z.GUILD_STAGE_VOICE:
    case A.d4z.GROUP_DM:
      return null != t ? (0, r.jsx)(Z.Z, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function B(e, t) {
  return (0, r.jsxs)(r.Fragment, {
    children: [null !== e && (0, r.jsx)(T.Z.ChannelIcon, {
      icon: e,
      "aria-hidden": true
    }), (0, r.jsx)(u.nn4, {
      children: t
    })]
  })
}

function F(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: l = "left"
  } = e, a = (0, o.e7)([O.Z], () => O.Z.getGuildId()), s = (0, b.D)(), d = i.useRef(null);
  return (a === A.I_8 || s) && null != t ? (0, r.jsx)(c.u, {
    asContainer: true,
    text: t.name,
    targetElementRef: d,
    position: "bottom",
    children: (0, r.jsxs)(u.P3F, {
      onClick: () => {
        (0, _.XU)(t.id, n.id)
      },
      className: R.guildBreadcrumbContainer,
      children: ["left" === l && (0, r.jsx)(T.Z.Caret, {
        direction: "left"
      }), (0, r.jsx)("div", {
        ref: d,
        children: (0, r.jsx)(g.Z, {
          guild: t,
          size: g.Z.Sizes.SMALLER,
          className: R.guildBreadcrumbIcon,
          active: true
        })
      }), "right" === l && (0, r.jsx)(T.Z.Caret, {
        direction: "right"
      })]
    })
  }) : null
}