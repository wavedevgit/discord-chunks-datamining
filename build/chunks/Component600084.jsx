/** Chunk was on 34740 **/
/** chunk id: 600084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function H(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, r = t && (0, p.Yk)(n), a = (0, l.e7)([_.ZP], () => null != n.guild_id && n === _.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, h.Z)(n.id)) return null;
  if (n.isForumPost()) return (0, i.jsx)(P.Z, {
    channel: n
  });
  if (C.Ec.has(n.type)) return (0, i.jsx)(R.Z, {
    channel: n
  });
  if (a) return (0, i.jsx)(L.Z, {
    channel: n
  });
  if (r) return (0, i.jsx)(A.Z, {
    channel: n
  });
  return (0, i.jsx)(M.Z, {
    channel: n
  })
}

function V(e) {
  var t, n;
  let {
    channel: p,
    showingBanner: h
  } = e, C = (0, d.ZP)(p), {
    type: _
  } = p, P = (0, l.e7)([O.default], () => p.isPrivate() ? O.default.getUser(p.getRecipientId()) : null), A = j.ZP.useUserTag(P), {
    canManageRoles: M,
    canReadMessageHistory: R
  } = (0, l.cj)([x.Z], () => ({
    canManageRoles: x.Z.can(k.Plq.MANAGE_ROLES, p),
    canReadMessageHistory: x.Z.can(k.Plq.READ_MESSAGE_HISTORY, p)
  })), L = (0, l.e7)([b.Z], () => _ === k.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null, [p, _]), {
    systemDMRedesignEnabled: V
  } = g.Z.useExperiment({
    location: "bf1a4f_1"
  }, {
    autoTrackExposure: null != (t = p.isSystemDM()) && t
  }), G = (0, u.Z)(null != (n = null == P ? true : P.id) ? n : k.lds), {
    authorizedAppToken: z,
    authorizedAppsFetchState: W
  } = (0, l.cj)([v.default], () => ({
    authorizedAppToken: v.default.getNewestTokenForApplication(null == G ? true : G.id),
    authorizedAppsFetchState: v.default.getFetchState()
  })), q = c.Z.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (r.useEffect(() => {
      _ === k.d4z.DM && null == L && null != P && o.Z.wait(() => (0, y.Z)(p.getRecipientId(), P.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [L, _, p, P]), r.useEffect(() => {
      (null == P ? true : P.bot) && W === v.FetchState.NOT_FETCHED && s.Z.fetch()
    }, [null == P ? true : P.bot, W]), p.isSystemDM()) return V ? (0, i.jsx)(w.Z, {
    channel: p
  }) : (0, i.jsx)(N.Z, {
    channel: p,
    children: U.intl.string(U.t.Rzvnig)
  });
  if (_ === k.d4z.DM) {
    let e;
    return null != P && null != G ? null != z && (e = (0, i.jsxs)("div", {
      className: B.buttonContainer,
      children: [(0, i.jsx)(T.W, {
        channel: p,
        user: P
      }), (0, i.jsx)(Z.n, {
        user: P,
        application: G,
        channel: p,
        oauth2Token: z
      }), q && (0, i.jsx)(f.Z, {
        channel: p
      })]
    })) : e = (0, i.jsx)(E.Z, {
      userId: p.getRecipientId(),
      channel: p,
      showingBanner: h
    }), (0, i.jsxs)(N.Z, {
      channel: p,
      user: P,
      children: [null != P && !P.isProvisional && (0, i.jsx)(a.Heading, {
        variant: "heading-xl/medium",
        className: F.marginBottom20,
        children: A
      }), U.intl.format(U.t["Qvg+6+"], {
        username: C
      }), (null == P ? true : P.isProvisional) && (0, i.jsx)(m.q, {
        userId: P.id
      }), e]
    })
  }
  if (p.isMultiUserDM())
    if (p.isManaged()) return (0, i.jsxs)(S.ZP, {
      channelId: p.id,
      children: [(0, i.jsx)(S.Ot, {
        children: U.intl.format(U.t.I3R7Vn, {
          channelName: C
        })
      }), (0, i.jsx)(S.jz, {
        children: U.intl.string(U.t.M8Ao6I)
      })]
    });
    else if (p.hasFlag(D.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, i.jsx)(I.Z, {
    channel: p
  });
  else return (0, i.jsx)(N.Z, {
    channel: p,
    children: U.intl.format(U.t.MFwcqO, {
      name: C
    })
  });
  return R ? (0, i.jsx)(H, {
    channel: p,
    canManageRoles: M
  }) : (0, i.jsx)(S.ZP, {
    channelId: p.id,
    children: (0, i.jsx)(S.jz, {
      children: U.intl.format(U.t.hPVEQG, {
        channelName: C
      })
    })
  })
}