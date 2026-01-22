/** Chunk was on 97492 **/
/** chunk id: 353428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EP: () => U,
  i$: () => F,
  zF: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk394953 = require("./394953.js"),
  Chunk976860 = require("./976860.js"),
  Chunk622543 = require("./622543.js"),
  Chunk576622 = require("./576622.js"),
  Chunk994500 = require("./994500.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk975571 = require("./975571.js"),
  Chunk149564 = require("./149564.js"),
  Chunk282978 = require("./282978.jsx"),
  Chunk95655 = require("./95655.jsx"),
  Chunk565265 = require("./565265.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk849205 = require("./849205.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk638990 = require("./638990.js");

function L(e) {
  var t;
  let {
    channel: n,
    children: l
  } = e, i = (0, d.h)(null == (t = n.linkedLobby) ? true : t.application_id), [a, s] = (0, b.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], true, true);
  if (null == i) return null;
  let f = E.Ay.getApplicationIconURL({
      id: i.id,
      icon: i.icon,
      size: 14
    }),
    [p, h] = a !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP ? [D.intl.string(D.t["XJVlf/"]), true] : [(0, r.jsxs)("div", {
      className: M.lE,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: D.intl.string(D.t.YIVr4B)
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: D.intl.format(D.t["16aguo"], {
          helpdeskArticle: _.A.getArticleURL(w.MVz.LINKED_LOBBIES)
        })
      }), (0, r.jsx)(u.DUT, {
        className: M.Q1,
        onClick: () => s(R.i.USER_DISMISS),
        children: (0, r.jsx)(u.PGe, {
          className: M.U0,
          color: "currentColor"
        })
      })]
    }, 0), D.intl.string(D.t.YIVr4B)];
  return (0, r.jsx)(c.m, {
    position: "bottom",
    align: "left",
    __unsupportedReactNodeAsText: p,
    "aria-label": h,
    forceOpen: a === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || true,
    children: (0, r.jsxs)("div", {
      className: M.hl,
      children: [l, (0, r.jsxs)(u.Text, {
        className: M.iO,
        variant: "text-sm/medium",
        color: "text-strong",
        children: ["•", (0, r.jsx)("img", {
          alt: "",
          src: f,
          className: M.NB
        }), i.name]
      })]
    })
  }, a)
}

function G(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: i,
    guild: s,
    inSidebar: o = false,
    handleClick: c,
    handleContextMenu: d,
    handleParentClick: f,
    handleParentContextMenu: b,
    renderFollowButton: g
  } = e, m = (0, h.gU)(t, s), {
    prefix: A,
    level: y
  } = function(e, t) {
    var n, r;
    switch (e) {
      case w.rbe.DM:
        return {
          prefix: D.intl.string(D.t.EJRzg7), level: 1
        };
      case w.rbe.GROUP_DM:
        return {
          prefix: D.intl.string(D.t["e5y+gm"]), level: 1
        };
      case w.rbe.GUILD_DIRECTORY:
        return {
          prefix: null != (n = null == t ? true : t.name) ? n : "", level: 1
        };
      case w.rbe.GUILD_ANNOUNCEMENT:
      case w.rbe.GUILD_TEXT:
      case w.rbe.GUILD_FORUM:
      case w.rbe.GUILD_MEDIA:
      case w.rbe.GUILD_STAGE_VOICE:
      case w.rbe.GUILD_VOICE:
        return {
          prefix: null != (r = null == t ? true : t.name) ? r : "", level: 1
        };
      case w.rbe.ANNOUNCEMENT_THREAD:
      case w.rbe.PUBLIC_THREAD:
      case w.rbe.PRIVATE_THREAD:
        return {
          prefix: D.intl.string(D.t["7Xm5QI"]), level: 2
        };
      default:
        return {
          prefix: null, level: 1
        }
    }
  }(t.type, s), O = (0, r.jsxs)(r.Fragment, {
    children: [null != A ? (0, r.jsxs)(u.AC4, {
      children: [A, ":"]
    }) : null, " ", n]
  });
  switch (t.type) {
    case w.rbe.DM:
      return (0, r.jsx)(P.A, {
        level: y,
        channel: t,
        handleClick: c,
        handleContextMenu: d
      });
    case w.rbe.GROUP_DM:
      if (t.isManaged()) return O;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.AC4, {
          children: D.intl.string(D.t["e5y+gm"])
        }), (0, r.jsx)(I.n, {
          channel: t
        }, "channel-".concat(t.id))]
      });
    case w.rbe.GUILD_ANNOUNCEMENT:
    case w.rbe.GUILD_TEXT:
    case w.rbe.GUILD_FORUM:
    case w.rbe.GUILD_MEDIA:
      return null != t.linkedLobby ? (0, r.jsxs)(L, {
        channel: t,
        children: [V(m, t.type === w.rbe.GUILD_ANNOUNCEMENT ? D.intl.string(D.t.l1dkSD) : D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: O
        })]
      }) : (0, r.jsxs)(l.Fragment, {
        children: [V(m, t.type === w.rbe.GUILD_ANNOUNCEMENT ? D.intl.string(D.t.l1dkSD) : D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: O
        }), null != g ? g() : null]
      });
    case w.rbe.GUILD_VOICE:
      return (0, r.jsxs)(l.Fragment, {
        children: [V(m, D.intl.string(D.t.BVZqJl)), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: O
        })]
      });
    case w.rbe.GUILD_STAGE_VOICE:
      return (0, r.jsxs)(l.Fragment, {
        children: [V(m, D.intl.string(D.t.EErMzA)), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: O
        })]
      });
    case w.rbe.ANNOUNCEMENT_THREAD:
    case w.rbe.PUBLIC_THREAD:
    case w.rbe.PRIVATE_THREAD:
      let v = null;
      if (!o && null != i) {
        let e = (0, h.gU)(i, s);
        v = (0, r.jsxs)(l.Fragment, {
          children: [V(e, D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
            level: y,
            onContextMenu: b,
            onClick: f,
            className: a()(M.rg, M.or),
            children: (0, p.m1)(i, x.default, j.A)
          }), (0, r.jsx)(T.A.Caret, {})]
        })
      }
      let E = (null == i ? true : i.type) != null && w.kvI.GUILD_THREADS_ONLY.has(i.type);
      return (0, r.jsxs)(l.Fragment, {
        children: [v, V(E ? null : m, D.intl.string(D.t["7Xm5QI"])), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          className: a()({
            [M.or]: o,
            [M.ej]: E,
            [M.q1]: o && E
          }),
          children: O
        })]
      });
    case w.rbe.GUILD_DIRECTORY:
      let _ = (null == s ? true : s.features.has(w.GuildFeatures.HUB)) ? D.intl.formatToPlainString(D.t.Dy2aht, {
        guildName: n
      }) : n;
      return (0, r.jsxs)(l.Fragment, {
        children: [null !== m ? (0, r.jsx)(T.A.ChannelIcon, {
          icon: m,
          "aria-hidden": true
        }) : null, (0, r.jsxs)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: [null != A ? (0, r.jsxs)(u.AC4, {
            children: [A, ":"]
          }) : null, " ", _]
        })]
      });
    default:
      return null
  }
}
let k = e => {
  var t, n, i;
  let {
    channel: a
  } = e, o = (0, s.bG)([x.default], () => x.default.getCurrentUser()), c = (0, s.bG)([x.default], () => x.default.getUser(a.getRecipientId())), u = (0, C.x)(), d = (0, s.bG)([y.A], () => null != c ? y.A.getUserProfile(c.id) : null), p = null != d && (null != (t = null == d ? true : d.fetchEndedAt) ? t : 0) > 0;
  return (l.useEffect(() => {
    (null == o ? true : o.isStaff()) && null != c && !c.isStaff() && (0, O.A)(c.id, c.getAvatarURL(true, 80), {
      dispatchWait: true,
      withMutualGuilds: true,
      withMutualFriendsCount: true
    })
  }, [o, c]), a.isDM() && (null == o ? true : o.isStaff()) && null != c) ? c.isStaff() ? (0, r.jsx)(f.A, {
    type: f.A.Types.STAFF_ONLY_DM
  }) : u && p && !(null != (n = null == (i = d.badges) ? true : i.some(e => e.id.startsWith("staff"))) && n) ? (0, r.jsx)(f.A, {
    type: f.A.Types.NOT_STAFF_WARNING
  }) : null : null
};

function U(e, t) {
  switch (e.type) {
    case w.rbe.DM:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(k, {
          channel: e
        }), (0, r.jsx)(S.A, {
          channel: e
        }, e.id)]
      });
    case w.rbe.GUILD_ANNOUNCEMENT:
    case w.rbe.GUILD_TEXT:
    case w.rbe.GUILD_VOICE:
    case w.rbe.GUILD_STAGE_VOICE:
    case w.rbe.GROUP_DM:
      return null != t ? (0, r.jsx)(N.A, {
        channel: e,
        guild: t
      }, e.id) : null;
    default:
      return null
  }
}

function V(e, t) {
  return (0, r.jsxs)(r.Fragment, {
    children: [null !== e && (0, r.jsx)(T.A.ChannelIcon, {
      icon: e,
      "aria-hidden": true
    }), (0, r.jsx)(u.AC4, {
      children: t
    })]
  })
}

function F(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: i = "left"
  } = e, a = (0, s.bG)([v.A], () => v.A.getGuildId()), o = (0, m.lI)(), d = l.useRef(null);
  return (a === w.YYv || o) && null != t ? (0, r.jsx)(c.m, {
    asContainer: true,
    text: t.name,
    targetElementRef: d,
    position: "bottom",
    children: (0, r.jsxs)(u.DUT, {
      onClick: () => {
        (0, A.uh)(t.id, n.id)
      },
      className: M.ED,
      children: ["left" === i && (0, r.jsx)(T.A.Caret, {
        direction: "left"
      }), (0, r.jsx)("div", {
        ref: d,
        children: (0, r.jsx)(g.A, {
          guild: t,
          size: g.A.Sizes.SMALLER,
          className: M.gL,
          active: true
        })
      }), "right" === i && (0, r.jsx)(T.A.Caret, {
        direction: "right"
      })]
    })
  }) : null
}