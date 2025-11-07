/** Chunk was on 86642 **/
/** chunk id: 910611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  TS: () => V,
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
  Chunk97009 = require("./97009.js");

function D(e) {
  var t;
  let {
    channel: n,
    children: r
  } = e, l = (0, d.q)(null == (t = n.linkedLobby) ? true : t.application_id), [a, o] = (0, m.US)([s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], true, true);
  if (null == l) return null;
  let p = E.ZP.getApplicationIconURL({
      id: l.id,
      icon: l.icon,
      size: 14
    }),
    [f, h] = a !== s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP ? [M.intl.string(M.t["XJVlf/"]), true] : [(0, i.jsxs)("div", {
      className: R.linkedLobbyEducationTooltip,
      children: [(0, i.jsx)(u.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: M.intl.string(M.t.YIVr4B)
      }), (0, i.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: M.intl.format(M.t["16aguo"], {
          helpdeskArticle: j.Z.getArticleURL(A.BhN.LINKED_LOBBIES)
        })
      }), (0, i.jsx)(u.P3F, {
        className: R.linkedLobbyEducationTooltipCloseClickContainer,
        onClick: () => o(w.L.USER_DISMISS),
        children: (0, i.jsx)(u.Dio, {
          className: R.linkedLobbyEducationTooltipCloseIcon,
          color: "currentColor"
        })
      })]
    }, 0), M.intl.string(M.t.YIVr4B)];
  return (0, i.jsx)(c.u, {
    position: "bottom",
    align: "left",
    __unsupportedReactNodeAsText: f,
    "aria-label": h,
    forceOpen: a === s.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || true,
    children: (0, i.jsxs)("div", {
      className: R.linkedLobbyTooltip,
      children: [r, (0, i.jsxs)(u.Text, {
        className: R.linkedLobby,
        variant: "text-sm/medium",
        color: "header-primary",
        children: ["•", (0, i.jsx)("img", {
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
    prefix: y,
    level: C
  } = function(e, t) {
    var n, i;
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
          prefix: null != (i = null == t ? true : t.name) ? i : "", level: 1
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
  }(t.type, o), _ = (0, i.jsxs)(i.Fragment, {
    children: [null != y ? (0, i.jsxs)(u.nn4, {
      children: [y, ":"]
    }) : null, " ", n]
  });
  switch (t.type) {
    case A.d4z.DM:
      return (0, i.jsx)(N.Z, {
        level: C,
        channel: t,
        handleClick: c,
        handleContextMenu: d
      });
    case A.d4z.GROUP_DM:
      if (t.isManaged()) return _;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.nn4, {
          children: M.intl.string(M.t["e5y+gm"])
        }), (0, i.jsx)(I.j, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case A.d4z.GUILD_ANNOUNCEMENT:
    case A.d4z.GUILD_TEXT:
    case A.d4z.GUILD_FORUM:
    case A.d4z.GUILD_MEDIA:
      return null != t.linkedLobby ? (0, i.jsxs)(D, {
        channel: t,
        children: [F(b, t.type === A.d4z.GUILD_ANNOUNCEMENT ? M.intl.string(M.t.l1dkSD) : M.intl.string(M.t.Pnajj0)), (0, i.jsx)(T.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: c,
          children: _
        })]
      }) : (0, i.jsxs)(r.Fragment, {
        children: [F(b, t.type === A.d4z.GUILD_ANNOUNCEMENT ? M.intl.string(M.t.l1dkSD) : M.intl.string(M.t.Pnajj0)), (0, i.jsx)(T.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: c,
          children: _
        }), null != g ? g() : null]
      });
    case A.d4z.GUILD_VOICE:
      return (0, i.jsxs)(r.Fragment, {
        children: [F(b, M.intl.string(M.t.BVZqJl)), (0, i.jsx)(T.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: c,
          children: _
        })]
      });
    case A.d4z.GUILD_STAGE_VOICE:
      return (0, i.jsxs)(r.Fragment, {
        children: [F(b, M.intl.string(M.t.EErMzA)), (0, i.jsx)(T.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: c,
          children: _
        })]
      });
    case A.d4z.ANNOUNCEMENT_THREAD:
    case A.d4z.PUBLIC_THREAD:
    case A.d4z.PRIVATE_THREAD:
      let x = null;
      if (!s && null != l) {
        let e = (0, h.KS)(l, o);
        x = (0, i.jsxs)(r.Fragment, {
          children: [F(e, M.intl.string(M.t.Pnajj0)), (0, i.jsx)(T.Z.Title, {
            level: C,
            onContextMenu: m,
            onClick: p,
            className: a()(R.parentChannelName, R.cursorPointer),
            children: (0, f.F6)(l, O.default, v.Z)
          }), (0, i.jsx)(T.Z.Caret, {})]
        })
      }
      let E = (null == l ? true : l.type) != null && A.TPd.GUILD_THREADS_ONLY.has(l.type);
      return (0, i.jsxs)(r.Fragment, {
        children: [x, F(E ? null : b, M.intl.string(M.t["7Xm5QI"])), (0, i.jsx)(T.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: c,
          className: a()({
            [R.cursorPointer]: s,
            [R.forumPostTitle]: E,
            [R.forumPostSidebarTitle]: s && E
          }),
          children: _
        })]
      });
    case A.d4z.GUILD_DIRECTORY:
      let j = (null == o ? true : o.features.has(A.GuildFeatures.HUB)) ? M.intl.formatToPlainString(M.t.Dy2aht, {
        guildName: n
      }) : n;
      return (0, i.jsxs)(r.Fragment, {
        children: [null !== b ? (0, i.jsx)(T.Z.ChannelIcon, {
          icon: b,
          "aria-hidden": true
        }) : null, (0, i.jsxs)(T.Z.Title, {
          level: C,
          onContextMenu: d,
          onClick: c,
          children: [null != y ? (0, i.jsxs)(u.nn4, {
            children: [y, ":"]
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
  } = e, s = (0, o.e7)([O.default], () => O.default.getCurrentUser()), c = (0, o.e7)([O.default], () => O.default.getUser(a.getRecipientId())), u = (0, S.G)(), d = (0, o.e7)([C.Z], () => null != c ? C.Z.getUserProfile(c.id) : null), f = null != d && (null != (t = null == d ? true : d.fetchEndedAt) ? t : 0) > 0;
  return (r.useEffect(() => {
    (null == s ? true : s.isStaff()) && null != c && !c.isStaff() && (0, _.Z)(c.id, c.getAvatarURL(true, 80), {
      dispatchWait: true,
      withMutualGuilds: true,
      withMutualFriendsCount: true
    })
  }, [s, c]), a.isDM() && (null == s ? true : s.isStaff()) && null != c) ? c.isStaff() ? (0, i.jsx)(p.Z, {
    type: p.Z.Types.STAFF_ONLY_DM
  }) : u && f && !(null != (l = null == (n = d.badges) ? true : n.some(e => e.id.startsWith("staff"))) && l) ? (0, i.jsx)(p.Z, {
    type: p.Z.Types.NOT_STAFF_WARNING
  }) : null : null
};

function U(e, t) {
  switch (e.type) {
    case A.d4z.DM:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(k, {
          channel: e
        }), (0, i.jsx)(P.Z, {
          channel: e
        }, e.id)]
      });
    case A.d4z.GUILD_ANNOUNCEMENT:
    case A.d4z.GUILD_TEXT:
    case A.d4z.GUILD_VOICE:
    case A.d4z.GUILD_STAGE_VOICE:
    case A.d4z.GROUP_DM:
      return null != t ? (0, i.jsx)(Z.Z, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function F(e, t) {
  return (0, i.jsxs)(i.Fragment, {
    children: [null !== e && (0, i.jsx)(T.Z.ChannelIcon, {
      icon: e,
      "aria-hidden": true
    }), (0, i.jsx)(u.nn4, {
      children: t
    })]
  })
}

function V(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: l = "left"
  } = e, a = (0, o.e7)([x.Z], () => x.Z.getGuildId()), s = (0, b.D)(), d = r.useRef(null);
  return (a === A.I_8 || s) && null != t ? (0, i.jsx)(c.u, {
    asContainer: true,
    text: t.name,
    targetElementRef: d,
    position: "bottom",
    children: (0, i.jsxs)(u.P3F, {
      onClick: () => {
        (0, y.XU)(t.id, n.id)
      },
      className: R.guildBreadcrumbContainer,
      children: ["left" === l && (0, i.jsx)(T.Z.Caret, {
        direction: "left"
      }), (0, i.jsx)("div", {
        ref: d,
        children: (0, i.jsx)(g.Z, {
          guild: t,
          size: g.Z.Sizes.SMALLER,
          className: R.guildBreadcrumbIcon,
          active: true
        })
      }), "right" === l && (0, i.jsx)(T.Z.Caret, {
        direction: "right"
      })]
    })
  }) : null
}