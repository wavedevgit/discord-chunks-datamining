/** Chunk was on 40184 **/
/** chunk id: 600084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
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
  Chunk438306 = require("./438306.jsx"),
  Chunk544142 = require("./544142.jsx"),
  Chunk128557 = require("./128557.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk701766 = require("./701766.js"),
  Chunk478411 = require("./478411.js");

function V(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, r = t && (0, p.Yk)(n), a = (0, l.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, f.Z)(n.id)) return null;
  if (n.isForumPost()) return (0, i.jsx)(_.Z, {
    channel: n
  });
  if (y.Ec.has(n.type)) return (0, i.jsx)(w.Z, {
    channel: n
  });
  if (a) return (0, i.jsx)(M.Z, {
    channel: n
  });
  if (r) return (0, i.jsx)(N.Z, {
    channel: n
  });
  return (0, i.jsx)(A.Z, {
    channel: n
  })
}

function H(e) {
  var t;
  let {
    channel: n,
    showingBanner: p
  } = e, f = (0, d.ZP)(n), {
    type: y
  } = n, v = (0, l.e7)([O.default], () => n.isPrivate() ? O.default.getUser(n.getRecipientId()) : null), _ = E.ZP.useUserTag(v), {
    canManageRoles: N,
    canReadMessageHistory: A
  } = (0, l.cj)([x.Z], () => ({
    canManageRoles: x.Z.can(R.Plq.MANAGE_ROLES, n),
    canReadMessageHistory: x.Z.can(R.Plq.READ_MESSAGE_HISTORY, n)
  })), w = (0, l.e7)([g.Z], () => y === R.d4z.DM ? g.Z.getMutualGuilds(n.getRecipientId()) : null, [n, y]), M = (0, u.Z)(null != (t = null == v ? true : v.id) ? t : R.lds), {
    authorizedAppToken: H,
    authorizedAppsFetchState: F
  } = (0, l.cj)([C.default], () => ({
    authorizedAppToken: C.default.getNewestTokenForApplication(null == M ? true : M.id),
    authorizedAppsFetchState: C.default.getFetchState()
  })), B = c.Z.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (r.useEffect(() => {
      y === R.d4z.DM && null == w && null != v && o.Z.wait(() => (0, b.Z)(n.getRecipientId(), v.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [w, y, n, v]), r.useEffect(() => {
      (null == v ? true : v.bot) && F === C.FetchState.NOT_FETCHED && s.Z.fetch()
    }, [null == v ? true : v.bot, F]), n.isSystemDM()) return (0, i.jsx)(T.Z, {
    channel: n,
    children: L.intl.string(L.t.Rzvnig)
  });
  if (y === R.d4z.DM) {
    let e;
    return null != v && null != M ? null != H && (e = (0, i.jsxs)("div", {
      className: k.buttonContainer,
      children: [(0, i.jsx)(Z.W, {
        channel: n,
        user: v
      }), (0, i.jsx)(I.n, {
        user: v,
        application: M,
        channel: n,
        oauth2Token: H
      }), B && (0, i.jsx)(h.Z, {
        channel: n
      })]
    })) : e = (0, i.jsx)(j.Z, {
      userId: n.getRecipientId(),
      channel: n,
      showingBanner: p
    }), (0, i.jsxs)(T.Z, {
      channel: n,
      user: v,
      children: [null != v && !v.isProvisional && (0, i.jsx)(a.Heading, {
        variant: "heading-xl/medium",
        className: U.marginBottom20,
        children: _
      }), L.intl.format(L.t["Qvg+6+"], {
        username: f
      }), (null == v ? true : v.isProvisional) && (0, i.jsx)(m.q, {
        userId: v.id
      }), e]
    })
  }
  if (n.isMultiUserDM())
    if (n.isManaged()) return (0, i.jsxs)(S.ZP, {
      channelId: n.id,
      children: [(0, i.jsx)(S.Ot, {
        children: L.intl.format(L.t.I3R7Vn, {
          channelName: f
        })
      }), (0, i.jsx)(S.jz, {
        children: L.intl.string(L.t.M8Ao6I)
      })]
    });
    else if (n.hasFlag(D.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, i.jsx)(P.Z, {
    channel: n
  });
  else return (0, i.jsx)(T.Z, {
    channel: n,
    children: L.intl.format(L.t.MFwcqO, {
      name: f
    })
  });
  return A ? (0, i.jsx)(V, {
    channel: n,
    canManageRoles: N
  }) : (0, i.jsx)(S.ZP, {
    channelId: n.id,
    children: (0, i.jsx)(S.jz, {
      children: L.intl.format(L.t.hPVEQG, {
        channelName: f
      })
    })
  })
}