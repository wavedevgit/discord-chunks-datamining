/** Chunk was on 34740 **/
/** chunk id: 600084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
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
  Chunk963392 = require("./963392.js"),
  Chunk197571 = require("./197571.js");

function V(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, r = t && (0, p.Yk)(n), a = (0, l.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, h.Z)(n.id)) return null;
  if (n.isForumPost()) return (0, i.jsx)(S.Z, {
    channel: n
  });
  if (C.Ec.has(n.type)) return (0, i.jsx)(w.Z, {
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

function F(e) {
  var t;
  let {
    channel: n,
    showingBanner: p
  } = e, h = (0, d.ZP)(n), {
    type: C
  } = n, v = (0, l.e7)([O.default], () => n.isPrivate() ? O.default.getUser(n.getRecipientId()) : null), S = x.ZP.useUserTag(v), {
    canManageRoles: N,
    canReadMessageHistory: A
  } = (0, l.cj)([_.Z], () => ({
    canManageRoles: _.Z.can(R.Plq.MANAGE_ROLES, n),
    canReadMessageHistory: _.Z.can(R.Plq.READ_MESSAGE_HISTORY, n)
  })), w = (0, l.e7)([g.Z], () => C === R.d4z.DM ? g.Z.getMutualGuilds(n.getRecipientId()) : null, [n, C]), M = (0, u.Z)(null != (t = null == v ? true : v.id) ? t : R.lds), {
    authorizedAppToken: F,
    authorizedAppsFetchState: H
  } = (0, l.cj)([y.default], () => ({
    authorizedAppToken: y.default.getNewestTokenForApplication(null == M ? true : M.id),
    authorizedAppsFetchState: y.default.getFetchState()
  })), B = c.Z.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (r.useEffect(() => {
      C === R.d4z.DM && null == w && null != v && o.Z.wait(() => (0, b.Z)(n.getRecipientId(), v.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [w, C, n, v]), r.useEffect(() => {
      (null == v ? true : v.bot) && H === y.FetchState.NOT_FETCHED && s.Z.fetch()
    }, [null == v ? true : v.bot, H]), n.isSystemDM()) return (0, i.jsx)(T.Z, {
    channel: n,
    children: k.intl.string(k.t.Rzvnig)
  });
  if (C === R.d4z.DM) {
    let e;
    return null != v && null != M ? null != F && (e = (0, i.jsxs)("div", {
      className: D.buttonContainer,
      children: [(0, i.jsx)(Z.W, {
        channel: n,
        user: v
      }), (0, i.jsx)(I.n, {
        user: v,
        application: M,
        channel: n,
        oauth2Token: F
      }), B && (0, i.jsx)(f.Z, {
        channel: n
      })]
    })) : e = (0, i.jsx)(E.Z, {
      userId: n.getRecipientId(),
      channel: n,
      showingBanner: p
    }), (0, i.jsxs)(T.Z, {
      channel: n,
      user: v,
      children: [null != v && !v.isProvisional && (0, i.jsx)(a.Heading, {
        variant: "heading-xl/medium",
        className: U.marginBottom20,
        children: S
      }), k.intl.format(k.t["Qvg+6+"], {
        username: h
      }), (null == v ? true : v.isProvisional) && (0, i.jsx)(m.q, {
        userId: v.id
      }), e]
    })
  }
  if (n.isMultiUserDM())
    if (n.isManaged()) return (0, i.jsxs)(j.ZP, {
      channelId: n.id,
      children: [(0, i.jsx)(j.Ot, {
        children: k.intl.format(k.t.I3R7Vn, {
          channelName: h
        })
      }), (0, i.jsx)(j.jz, {
        children: k.intl.string(k.t.M8Ao6I)
      })]
    });
    else if (n.hasFlag(L.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, i.jsx)(P.Z, {
    channel: n
  });
  else return (0, i.jsx)(T.Z, {
    channel: n,
    children: k.intl.format(k.t.MFwcqO, {
      name: h
    })
  });
  return A ? (0, i.jsx)(V, {
    channel: n,
    canManageRoles: N
  }) : (0, i.jsx)(j.ZP, {
    channelId: n.id,
    children: (0, i.jsx)(j.jz, {
      children: k.intl.format(k.t.hPVEQG, {
        channelName: h
      })
    })
  })
}