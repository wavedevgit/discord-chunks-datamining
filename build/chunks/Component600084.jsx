/** Chunk was on 88647 **/
/** chunk id: 600084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk384275 = require("./384275.js"),
  Chunk82906 = require("./82906.js"),
  Chunk763762 = require("./763762.js"),
  Chunk933557 = require("./933557.js"),
  Chunk605436 = require("./605436.js"),
  Chunk736052 = require("./736052.js"),
  Chunk86203 = require("./86203.jsx"),
  Chunk189156 = require("./189156.jsx"),
  Chunk986081 = require("./986081.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk131704 = require("./131704.js"),
  Chunk881998 = require("./881998.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk7782 = require("./7782.jsx"),
  Chunk967128 = require("./967128.jsx"),
  Chunk320781 = require("./320781.jsx"),
  Chunk269203 = require("./269203.jsx"),
  Chunk86863 = require("./86863.jsx"),
  Chunk558756 = require("./558756.jsx"),
  Chunk753898 = require("./753898.jsx"),
  Chunk734386 = require("./734386.jsx"),
  Chunk184279 = require("./184279.jsx"),
  Chunk438306 = require("./438306.jsx"),
  Chunk544142 = require("./544142.jsx"),
  Chunk128557 = require("./128557.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk963392 = require("./963392.js"),
  Chunk197571 = require("./197571.js");

function V(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, i = t && (0, p.Yk)(n), a = (0, l.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, f.Z)(n.id)) return null;
  if (n.isForumPost()) return (0, r.jsx)(P.Z, {
    channel: n
  });
  if (y.Ec.has(n.type)) return (0, r.jsx)(R.Z, {
    channel: n
  });
  if (a) return (0, r.jsx)(D.Z, {
    channel: n
  });
  if (i) return (0, r.jsx)(A.Z, {
    channel: n
  });
  return (0, r.jsx)(M.Z, {
    channel: n
  })
}

function H(e) {
  var t, n;
  let {
    channel: p,
    showingBanner: f
  } = e, y = (0, d.ZP)(p), {
    type: v
  } = p, P = (0, l.e7)([x.default], () => p.isPrivate() ? x.default.getUser(p.getRecipientId()) : null), A = E.ZP.useUserTag(P), {
    canManageRoles: M,
    canReadMessageHistory: R
  } = (0, l.cj)([O.Z], () => ({
    canManageRoles: O.Z.can(L.Plq.MANAGE_ROLES, p),
    canReadMessageHistory: O.Z.can(L.Plq.READ_MESSAGE_HISTORY, p)
  })), D = (0, l.e7)([b.Z], () => v === L.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null, [p, v]), {
    systemDMRedesignEnabled: H
  } = g.Z.useExperiment({
    location: "bf1a4f_1"
  }, {
    autoTrackExposure: null != (t = p.isSystemDM()) && t
  }), G = (0, u.Z)(null != (n = null == P ? true : P.id) ? n : L.lds), {
    authorizedAppToken: W,
    authorizedAppsFetchState: z
  } = (0, l.cj)([C.default], () => ({
    authorizedAppToken: C.default.getNewestTokenForApplication(null == G ? true : G.id),
    authorizedAppsFetchState: C.default.getFetchState()
  })), q = c.Z.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (i.useEffect(() => {
      v === L.d4z.DM && null == D && null != P && o.Z.wait(() => (0, _.Z)(p.getRecipientId(), P.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [D, v, p, P]), i.useEffect(() => {
      (null == P ? true : P.bot) && z === C.FetchState.NOT_FETCHED && s.Z.fetch()
    }, [null == P ? true : P.bot, z]), p.isSystemDM()) return H ? (0, r.jsx)(w.Z, {
    channel: p
  }) : (0, r.jsx)(N.Z, {
    channel: p,
    children: U.intl.string(U.t.Rzvnig)
  });
  if (v === L.d4z.DM) {
    let e;
    return null != P && null != G ? null != W && (e = (0, r.jsxs)("div", {
      className: B.buttonContainer,
      children: [(0, r.jsx)(T.W, {
        channel: p,
        user: P
      }), (0, r.jsx)(Z.n, {
        user: P,
        application: G,
        channel: p,
        oauth2Token: W
      }), q && (0, r.jsx)(h.Z, {
        channel: p
      })]
    })) : e = (0, r.jsx)(j.Z, {
      userId: p.getRecipientId(),
      channel: p,
      showingBanner: f
    }), (0, r.jsxs)(N.Z, {
      channel: p,
      user: P,
      children: [null != P && !P.isProvisional && (0, r.jsx)(a.Heading, {
        variant: "heading-xl/medium",
        className: F.marginBottom20,
        children: A
      }), U.intl.format(U.t["Qvg+6+"], {
        username: y
      }), (null == P ? true : P.isProvisional) && (0, r.jsx)(m.q, {
        userId: P.id
      }), e]
    })
  }
  if (p.isMultiUserDM())
    if (p.isManaged()) return (0, r.jsxs)(S.ZP, {
      channelId: p.id,
      children: [(0, r.jsx)(S.Ot, {
        children: U.intl.format(U.t.I3R7Vn, {
          channelName: y
        })
      }), (0, r.jsx)(S.jz, {
        children: U.intl.string(U.t.M8Ao6I)
      })]
    });
    else if (p.hasFlag(k.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(I.Z, {
    channel: p
  });
  else return (0, r.jsx)(N.Z, {
    channel: p,
    children: U.intl.format(U.t.MFwcqO, {
      name: y
    })
  });
  return R ? (0, r.jsx)(V, {
    channel: p,
    canManageRoles: M
  }) : (0, r.jsx)(S.ZP, {
    channelId: p.id,
    children: (0, r.jsx)(S.jz, {
      children: U.intl.format(U.t.hPVEQG, {
        channelName: y
      })
    })
  })
}