/** Chunk was on 17869 **/
/** chunk id: 816144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk824552 = require("./824552.js"),
  Chunk782934 = require("./782934.js"),
  Chunk496231 = require("./496231.js"),
  Chunk47167 = require("./47167.js"),
  Chunk495273 = require("./495273.js"),
  Chunk265869 = require("./265869.js"),
  Chunk772659 = require("./772659.jsx"),
  Chunk437774 = require("./437774.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk576622 = require("./576622.js"),
  Chunk95701 = require("./95701.js"),
  Chunk546183 = require("./546183.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk803622 = require("./803622.jsx"),
  Chunk314307 = require("./314307.jsx"),
  Chunk393194 = require("./393194.jsx"),
  Chunk455067 = require("./455067.jsx"),
  Chunk432817 = require("./432817.jsx"),
  Chunk324799 = require("./324799.jsx"),
  Chunk635157 = require("./635157.jsx"),
  Chunk379768 = require("./379768.jsx"),
  Chunk391257 = require("./391257.jsx"),
  Chunk914835 = require("./914835.jsx"),
  Chunk825244 = require("./825244.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk82842 = require("./82842.js"),
  Chunk473169 = require("./473169.js");

function F(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, r = t && (0, h.Ae)(n), a = (0, i.bG)([y.Ay], () => null != n.guild_id && n === y.Ay.getDefaultChannel(n.guild_id), [n]);
  if ((0, p.A)(n.id)) return null;
  if (n.isForumPost()) return (0, l.jsx)(x.A, {
    channel: n
  });
  if (b.Le.has(n.type)) return (0, l.jsx)(R.A, {
    channel: n
  });
  if (a) return (0, l.jsx)(D.A, {
    channel: n
  });
  if (r) return (0, l.jsx)(P.A, {
    channel: n
  });
  return (0, l.jsx)(w.A, {
    channel: n
  })
}

function H(e) {
  var t;
  let {
    channel: n,
    showingBanner: h
  } = e, p = (0, d.Ay)(n), {
    type: b
  } = n, y = (0, i.bG)([v.default], () => n.isPrivate() ? v.default.getUser(n.getRecipientId()) : null), x = O.Ay.useUserTag(y), {
    canManageRoles: P,
    canReadMessageHistory: w
  } = (0, i.cf)([E.A], () => ({
    canManageRoles: E.A.can(M.xBc.MANAGE_ROLES, n),
    canReadMessageHistory: E.A.can(M.xBc.READ_MESSAGE_HISTORY, n)
  })), R = (0, i.bG)([g.A], () => b === M.rbe.DM ? g.A.getMutualGuilds(n.getRecipientId()) : null, [n, b]), D = (0, u.A)(null != (t = null == y ? true : y.id) ? t : M.dJq), {
    authorizedAppToken: H,
    authorizedAppsFetchState: B
  } = (0, i.cf)([_.default], () => ({
    authorizedAppToken: _.default.getNewestTokenForApplication(null == D ? true : D.id),
    authorizedAppsFetchState: _.default.getFetchState()
  })), V = c.A.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (r.useEffect(() => {
      b === M.rbe.DM && null == R && null != y && s.h.wait(() => (0, A.A)(n.getRecipientId(), y.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [R, b, n, y]), r.useEffect(() => {
      (null == y ? true : y.bot) && B === _.FetchState.NOT_FETCHED && o.A.fetch()
    }, [null == y ? true : y.bot, B]), n.isSystemDM()) return (0, l.jsx)(N.A, {
    channel: n,
    children: k.intl.string(k.t.Rzvnig)
  });
  if (b === M.rbe.DM) {
    let e;
    if (null != y && null != D) {
      let t = [];
      null != H && (t.push((0, l.jsx)(T.X, {
        channel: n,
        user: y
      }, "mute")), t.push((0, l.jsx)(I.L, {
        user: y,
        application: D,
        channel: n,
        oauth2Token: H
      }, "manage"))), V && t.push((0, l.jsx)(f.A, {
        channel: n
      }, "report")), t.length > 0 && (e = (0, l.jsx)("div", {
        className: U.U,
        children: t
      }))
    } else e = (0, l.jsx)(C.A, {
      userId: n.getRecipientId(),
      channel: n,
      showingBanner: h
    });
    return (0, l.jsxs)(N.A, {
      channel: n,
      user: y,
      children: [null != y && !y.isProvisional && (0, l.jsx)(a.Heading, {
        variant: "heading-xl/medium",
        className: G.SX,
        children: x
      }), k.intl.format(k.t["Qvg+6+"], {
        username: p
      }), (null == y ? true : y.isProvisional) && (0, l.jsx)(m.Y, {
        userId: y.id
      }), e]
    })
  }
  if (n.isMultiUserDM())
    if (n.isManaged()) return (0, l.jsxs)(S.Ay, {
      channelId: n.id,
      children: [(0, l.jsx)(S.cr, {
        children: k.intl.format(k.t.I3R7Vn, {
          channelName: p
        })
      }), (0, l.jsx)(S.j1, {
        children: k.intl.string(k.t.M8Ao6I)
      })]
    });
    else if (n.hasFlag(L.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, l.jsx)(j.A, {
    channel: n
  });
  else return (0, l.jsx)(N.A, {
    channel: n,
    children: k.intl.format(k.t.MFwcqO, {
      name: p
    })
  });
  return w ? (0, l.jsx)(F, {
    channel: n,
    canManageRoles: P
  }) : (0, l.jsx)(S.Ay, {
    channelId: n.id,
    children: (0, l.jsx)(S.j1, {
      children: k.intl.format(k.t.hPVEQG, {
        channelName: p
      })
    })
  })
}