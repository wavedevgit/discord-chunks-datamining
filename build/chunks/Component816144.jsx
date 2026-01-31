/** Chunk was on 17534 **/
/** chunk id: 816144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => B
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

function V(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, l = t && (0, h.Ae)(n), s = (0, i.bG)([O.Ay], () => null != n.guild_id && n === O.Ay.getDefaultChannel(n.guild_id), [n]);
  if ((0, p.A)(n.id)) return null;
  if (n.isForumPost()) return (0, r.jsx)(C.A, {
    channel: n
  });
  if (A.Le.has(n.type)) return (0, r.jsx)(R.A, {
    channel: n
  });
  if (s) return (0, r.jsx)(D.A, {
    channel: n
  });
  if (l) return (0, r.jsx)(P.A, {
    channel: n
  });
  return (0, r.jsx)(w.A, {
    channel: n
  })
}

function B(e) {
  var t;
  let {
    channel: n,
    showingBanner: h
  } = e, p = (0, d.Ay)(n), {
    type: A
  } = n, O = (0, i.bG)([j.default], () => n.isPrivate() ? j.default.getUser(n.getRecipientId()) : null), C = x.Ay.useUserTag(O), {
    canManageRoles: P,
    canReadMessageHistory: w
  } = (0, i.cf)([_.A], () => ({
    canManageRoles: _.A.can(L.xBc.MANAGE_ROLES, n),
    canReadMessageHistory: _.A.can(L.xBc.READ_MESSAGE_HISTORY, n)
  })), R = (0, i.bG)([m.A], () => A === L.rbe.DM ? m.A.getMutualGuilds(n.getRecipientId()) : null, [n, A]), D = (0, u.A)(null != (t = null == O ? true : O.id) ? t : L.dJq), {
    authorizedAppToken: B,
    authorizedAppsFetchState: H
  } = (0, i.cf)([y.default], () => ({
    authorizedAppToken: y.default.getNewestTokenForApplication(null == D ? true : D.id),
    authorizedAppsFetchState: y.default.getFetchState()
  })), F = c.A.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (l.useEffect(() => {
      A === L.rbe.DM && null == R && null != O && a.h.wait(() => (0, b.A)(n.getRecipientId(), O.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [R, A, n, O]), l.useEffect(() => {
      (null == O ? true : O.bot) && H === y.FetchState.NOT_FETCHED && o.A.fetch()
    }, [null == O ? true : O.bot, H]), n.isSystemDM()) return (0, r.jsx)(T.A, {
    channel: n,
    children: G.intl.string(G.t.Rzvnig)
  });
  if (A === L.rbe.DM) {
    let e;
    if (null != O && null != D) {
      let t = [];
      null != B && (t.push((0, r.jsx)(N.X, {
        channel: n,
        user: O
      }, "mute")), t.push((0, r.jsx)(I.L, {
        user: O,
        application: D,
        channel: n,
        oauth2Token: B
      }, "manage"))), F && t.push((0, r.jsx)(g.A, {
        channel: n
      }, "report")), t.length > 0 && (e = (0, r.jsx)("div", {
        className: k.U,
        children: t
      }))
    } else e = (0, r.jsx)(v.A, {
      userId: n.getRecipientId(),
      channel: n,
      showingBanner: h
    });
    return (0, r.jsxs)(T.A, {
      channel: n,
      user: O,
      children: [null != O && !O.isProvisional && (0, r.jsx)(s.Heading, {
        variant: "heading-xl/medium",
        className: U.SX,
        children: C
      }), G.intl.format(G.t["Qvg+6+"], {
        username: p
      }), (null == O ? true : O.isProvisional) && (0, r.jsx)(f.Y, {
        userId: O.id
      }), e]
    })
  }
  if (n.isMultiUserDM())
    if (n.isManaged()) return (0, r.jsxs)(E.Ay, {
      channelId: n.id,
      children: [(0, r.jsx)(E.cr, {
        children: G.intl.format(G.t.I3R7Vn, {
          channelName: p
        })
      }), (0, r.jsx)(E.j1, {
        children: G.intl.string(G.t.M8Ao6I)
      })]
    });
    else if (n.hasFlag(M.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(S.A, {
    channel: n
  });
  else return (0, r.jsx)(T.A, {
    channel: n,
    children: G.intl.format(G.t.MFwcqO, {
      name: p
    })
  });
  return w ? (0, r.jsx)(V, {
    channel: n,
    canManageRoles: P
  }) : (0, r.jsx)(E.Ay, {
    channelId: n.id,
    children: (0, r.jsx)(E.j1, {
      children: G.intl.format(G.t.hPVEQG, {
        channelName: p
      })
    })
  })
}