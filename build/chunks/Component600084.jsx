/** Chunk was on 62987 **/
/** chunk id: 600084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
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
  Chunk878857 = require("./878857.js"),
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
  } = e, i = t && (0, p.Yk)(n), a = (0, l.e7)([x.ZP], () => null != n.guild_id && n === x.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, h.Z)(n.id)) return null;
  if (n.isForumPost()) return (0, r.jsx)(I.Z, {
    channel: n
  });
  if (_.Ec.has(n.type)) return (0, r.jsx)(M.Z, {
    channel: n
  });
  if (a) return (0, r.jsx)(D.Z, {
    channel: n
  });
  if (i) return (0, r.jsx)(A.Z, {
    channel: n
  });
  return (0, r.jsx)(R.Z, {
    channel: n
  })
}

function F(e) {
  var t, n;
  let {
    channel: p,
    showingBanner: h
  } = e, _ = (0, d.ZP)(p), {
    type: x
  } = p, I = (0, l.e7)([O.default], () => p.isPrivate() ? O.default.getUser(p.getRecipientId()) : null), A = j.ZP.useUserTag(I), {
    canManageRoles: R,
    canReadMessageHistory: M
  } = (0, l.cj)([v.Z], () => ({
    canManageRoles: v.Z.can(L.Plq.MANAGE_ROLES, p),
    canReadMessageHistory: v.Z.can(L.Plq.READ_MESSAGE_HISTORY, p)
  })), D = (0, l.e7)([b.Z], () => x === L.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null, [p, x]), {
    systemDMRedesignEnabled: F
  } = g.Z.useExperiment({
    location: "bf1a4f_1"
  }, {
    autoTrackExposure: null != (t = p.isSystemDM()) && t
  }), V = (0, u.Z)(null != (n = null == I ? true : I.id) ? n : L.lds), {
    authorizedAppToken: z,
    authorizedAppsFetchState: W
  } = (0, l.cj)([C.Z], () => ({
    authorizedAppToken: C.Z.getNewestTokenForApplication(null == V ? true : V.id),
    authorizedAppsFetchState: C.Z.getFetchState()
  })), q = c.Z.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (i.useEffect(() => {
      x === L.d4z.DM && null == D && null != I && o.Z.wait(() => (0, y.Z)(p.getRecipientId(), I.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [D, x, p, I]), i.useEffect(() => {
      (null == I ? true : I.bot) && W === C.M.NOT_FETCHED && s.Z.fetch()
    }, [null == I ? true : I.bot, W]), p.isSystemDM()) return F ? (0, r.jsx)(w.Z, {
    channel: p
  }) : (0, r.jsx)(N.Z, {
    channel: p,
    children: U.intl.string(U.t.Rzvnio)
  });
  if (x === L.d4z.DM) {
    let e;
    return null != I && null != V ? null != z && (e = (0, r.jsxs)("div", {
      className: B.buttonContainer,
      children: [(0, r.jsx)(T.W, {
        className: B.button,
        channel: p,
        user: I
      }), (0, r.jsx)(Z.n, {
        className: B.button,
        user: I,
        application: V,
        channel: p,
        oauth2Token: z
      }), q && (0, r.jsx)(f.Z, {
        channel: p
      })]
    })) : e = (0, r.jsx)(E.Z, {
      userId: p.getRecipientId(),
      channel: p,
      showingBanner: h
    }), (0, r.jsxs)(N.Z, {
      channel: p,
      user: I,
      children: [null != I && !I.isProvisional && (0, r.jsx)(a.X6q, {
        variant: "heading-xl/medium",
        className: G.marginBottom20,
        children: A
      }), U.intl.format(U.t["Qvg+6+"], {
        username: _
      }), (null == I ? true : I.isProvisional) && (0, r.jsx)(m.q, {
        userId: I.id
      }), e]
    })
  }
  if (p.isMultiUserDM())
    if (p.isManaged()) return (0, r.jsxs)(S.ZP, {
      channelId: p.id,
      children: [(0, r.jsx)(S.Ot, {
        children: U.intl.format(U.t.I3R7Vl, {
          channelName: _
        })
      }), (0, r.jsx)(S.jz, {
        children: U.intl.string(U.t.M8Ao6O)
      })]
    });
    else if (p.hasFlag(k.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(P.Z, {
    channel: p
  });
  else return (0, r.jsx)(N.Z, {
    channel: p,
    children: U.intl.format(U.t.MFwcqK, {
      name: _
    })
  });
  return M ? (0, r.jsx)(H, {
    channel: p,
    canManageRoles: R
  }) : (0, r.jsx)(S.ZP, {
    channelId: p.id,
    children: (0, r.jsx)(S.jz, {
      children: U.intl.format(U.t.hPVEQE, {
        channelName: _
      })
    })
  })
}