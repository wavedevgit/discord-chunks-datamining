/** Chunk was on 44669 **/
/** chunk id: 353428, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EP: () => U,
  i$: () => B,
  zF: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function M(e) {
  var t;
  let {
    channel: n,
    children: l
  } = e, i = (0, d.h)(null == (t = n.linkedLobby) ? true : t.application_id), [s, a] = (0, f.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], true, true);
  if (null == i) return null;
  let p = v.Ay.getApplicationIconURL({
      id: i.id,
      icon: i.icon,
      size: 14
    }),
    [h, g] = s !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP ? [D.intl.string(D.t["XJVlf/"]), true] : [(0, r.jsxs)("div", {
      className: L.lE,
      children: [(0, r.jsx)(u.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: D.intl.string(D.t.YIVr4B)
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: D.intl.format(D.t["16aguo"], {
          helpdeskArticle: E.A.getArticleURL(w.MVz.LINKED_LOBBIES)
        })
      }), (0, r.jsx)(u.DUT, {
        className: L.Q1,
        onClick: () => a(R.i.USER_DISMISS),
        children: (0, r.jsx)(u.PGe, {
          className: L.U0,
          color: "currentColor"
        })
      })]
    }, 0), D.intl.string(D.t.YIVr4B)];
  return (0, r.jsx)(c.m, {
    position: "bottom",
    align: "left",
    __unsupportedReactNodeAsText: h,
    "aria-label": g,
    forceOpen: s === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || true,
    children: (0, r.jsxs)("div", {
      className: L.hl,
      children: [l, (0, r.jsxs)(u.Text, {
        className: L.iO,
        variant: "text-sm/medium",
        color: "text-strong",
        children: ["•", (0, r.jsx)("img", {
          alt: "",
          src: p,
          className: L.NB
        }), i.name]
      })]
    })
  }, s)
}

function G(e) {
  let {
    channel: t,
    channelName: n,
    parentChannel: i,
    guild: a,
    inSidebar: o = false,
    handleClick: c,
    handleContextMenu: d,
    handleParentClick: p,
    handleParentContextMenu: f,
    renderFollowButton: m
  } = e, b = (0, g.gU)(t, a), {
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
  }(t.type, a), O = (0, r.jsxs)(r.Fragment, {
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
      return null != t.linkedLobby ? (0, r.jsxs)(M, {
        channel: t,
        children: [V(b, t.type === w.rbe.GUILD_ANNOUNCEMENT ? D.intl.string(D.t.l1dkSD) : D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: O
        })]
      }) : (0, r.jsxs)(l.Fragment, {
        children: [V(b, t.type === w.rbe.GUILD_ANNOUNCEMENT ? D.intl.string(D.t.l1dkSD) : D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: O
        }), null != m ? m() : null]
      });
    case w.rbe.GUILD_VOICE:
      return (0, r.jsxs)(l.Fragment, {
        children: [V(b, D.intl.string(D.t.BVZqJl)), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: O
        })]
      });
    case w.rbe.GUILD_STAGE_VOICE:
      return (0, r.jsxs)(l.Fragment, {
        children: [V(b, D.intl.string(D.t.EErMzA)), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: O
        })]
      });
    case w.rbe.ANNOUNCEMENT_THREAD:
    case w.rbe.PUBLIC_THREAD:
    case w.rbe.PRIVATE_THREAD:
      let _ = null;
      if (!o && null != i) {
        let e = (0, g.gU)(i, a);
        _ = (0, r.jsxs)(l.Fragment, {
          children: [V(e, D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
            level: y,
            onContextMenu: f,
            onClick: p,
            className: s()(L.rg, L.or),
            children: (0, h.m1)(i, x.default, j.A)
          }), (0, r.jsx)(T.A.Caret, {})]
        })
      }
      let v = (null == i ? true : i.type) != null && w.kvI.GUILD_THREADS_ONLY.has(i.type);
      return (0, r.jsxs)(l.Fragment, {
        children: [_, V(v ? null : b, D.intl.string(D.t["7Xm5QI"])), (0, r.jsx)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          className: s()({
            [L.or]: o,
            [L.ej]: v,
            [L.q1]: o && v
          }),
          children: O
        })]
      });
    case w.rbe.GUILD_DIRECTORY:
      let E = (null == a ? true : a.features.has(w.GuildFeatures.HUB)) ? D.intl.formatToPlainString(D.t.Dy2aht, {
        guildName: n
      }) : n;
      return (0, r.jsxs)(l.Fragment, {
        children: [null !== b ? (0, r.jsx)(T.A.ChannelIcon, {
          icon: b,
          "aria-hidden": true
        }) : null, (0, r.jsxs)(T.A.Title, {
          level: y,
          onContextMenu: d,
          onClick: c,
          children: [null != A ? (0, r.jsxs)(u.AC4, {
            children: [A, ":"]
          }) : null, " ", E]
        })]
      });
    default:
      return null
  }
}
let k = e => {
  var t, n, i;
  let {
    channel: s
  } = e, o = (0, a.bG)([x.default], () => x.default.getCurrentUser()), c = (0, a.bG)([x.default], () => x.default.getUser(s.getRecipientId())), u = (0, C.x)(), d = (0, a.bG)([y.A], () => null != c ? y.A.getUserProfile(c.id) : null), h = null != d && (null != (t = null == d ? true : d.fetchEndedAt) ? t : 0) > 0;
  return (l.useEffect(() => {
    (null == o ? true : o.isStaff()) && null != c && !c.isStaff() && (0, O.A)(c.id, c.getAvatarURL(true, 80), {
      dispatchWait: true,
      withMutualGuilds: true,
      withMutualFriendsCount: true
    })
  }, [o, c]), s.isDM() && (null == o ? true : o.isStaff()) && null != c) ? c.isStaff() ? (0, r.jsx)(p.A, {
    type: p.A.Types.STAFF_ONLY_DM
  }) : u && h && !(null != (n = null == (i = d.badges) ? true : i.some(e => e.id.startsWith("staff"))) && n) ? (0, r.jsx)(p.A, {
    type: p.A.Types.NOT_STAFF_WARNING
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

function B(e) {
  let {
    guild: t,
    channel: n,
    caretPosition: i = "left"
  } = e, s = (0, a.bG)([_.A], () => _.A.getGuildId()), o = (0, b.lI)(), d = l.useRef(null);
  return (s === w.YYv || o) && null != t ? (0, r.jsx)(c.m, {
    asContainer: true,
    text: t.name,
    targetElementRef: d,
    position: "bottom",
    children: (0, r.jsxs)(u.DUT, {
      onClick: () => {
        (0, A.uh)(t.id, n.id)
      },
      className: L.ED,
      children: ["left" === i && (0, r.jsx)(T.A.Caret, {
        direction: "left"
      }), (0, r.jsx)("div", {
        ref: d,
        children: (0, r.jsx)(m.A, {
          guild: t,
          size: m.A.Sizes.SMALLER,
          className: L.gL,
          active: true
        })
      }), "right" === i && (0, r.jsx)(T.A.Caret, {
        direction: "right"
      })]
    })
  }) : null
}