/** Chunk was on 82124 **/
/** chunk id: 600084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./539854.js");
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

function G(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, i = t && (0, p.Yk)(n), a = (0, l.e7)([O.ZP], () => null != n.guild_id && n === O.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, f.Z)(n.id)) return null;
  if (n.isForumPost()) return (0, r.jsx)(_.Z, {
    channel: n
  });
  if (y.Ec.has(n.type)) return (0, r.jsx)(w.Z, {
    channel: n
  });
  if (a) return (0, r.jsx)(R.Z, {
    channel: n
  });
  if (i) return (0, r.jsx)(T.Z, {
    channel: n
  });
  return (0, r.jsx)(A.Z, {
    channel: n
  })
}

function B(e) {
  var t;
  let {
    channel: n,
    showingBanner: p
  } = e, f = (0, d.ZP)(n), {
    type: y
  } = n, O = (0, l.e7)([x.default], () => n.isPrivate() ? x.default.getUser(n.getRecipientId()) : null), _ = C.ZP.useUserTag(O), {
    canManageRoles: T,
    canReadMessageHistory: A
  } = (0, l.cj)([j.Z], () => ({
    canManageRoles: j.Z.can(D.Plq.MANAGE_ROLES, n),
    canReadMessageHistory: j.Z.can(D.Plq.READ_MESSAGE_HISTORY, n)
  })), w = (0, l.e7)([m.Z], () => y === D.d4z.DM ? m.Z.getMutualGuilds(n.getRecipientId()) : null, [n, y]), R = (0, u.Z)(null != (t = null == O ? true : O.id) ? t : D.lds), {
    authorizedAppToken: B,
    authorizedAppsFetchState: F
  } = (0, l.cj)([v.default], () => ({
    authorizedAppToken: v.default.getNewestTokenForApplication(null == R ? true : R.id),
    authorizedAppsFetchState: v.default.getFetchState()
  })), H = c.Z.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (i.useEffect(() => {
      y === D.d4z.DM && null == w && null != O && o.Z.wait(() => (0, b.Z)(n.getRecipientId(), O.getAvatarURL(null, 80), {
        withMutualGuilds: true
      }))
    }, [w, y, n, O]), i.useEffect(() => {
      (null == O ? true : O.bot) && F === v.FetchState.NOT_FETCHED && s.Z.fetch()
    }, [null == O ? true : O.bot, F]), n.isSystemDM()) return (0, r.jsx)(N.Z, {
    channel: n,
    children: k.intl.string(k.t.Rzvnig)
  });
  if (y === D.d4z.DM) {
    let e;
    if (null != O && null != R) {
      let t = [];
      null != B && (t.push((0, r.jsx)(Z.W, {
        channel: n,
        user: O
      }, "mute")), t.push((0, r.jsx)(P.n, {
        user: O,
        application: R,
        channel: n,
        oauth2Token: B
      }, "manage"))), H && t.push((0, r.jsx)(h.Z, {
        channel: n
      }, "report")), t.length > 0 && (e = (0, r.jsx)("div", {
        className: L.buttonContainer,
        children: t
      }))
    } else e = (0, r.jsx)(E.Z, {
      userId: n.getRecipientId(),
      channel: n,
      showingBanner: p
    });
    return (0, r.jsxs)(N.Z, {
      channel: n,
      user: O,
      children: [null != O && !O.isProvisional && (0, r.jsx)(a.Heading, {
        variant: "heading-xl/medium",
        className: U.marginBottom20,
        children: _
      }), k.intl.format(k.t["Qvg+6+"], {
        username: f
      }), (null == O ? true : O.isProvisional) && (0, r.jsx)(g.q, {
        userId: O.id
      }), e]
    })
  }
  if (n.isMultiUserDM())
    if (n.isManaged()) return (0, r.jsxs)(S.ZP, {
      channelId: n.id,
      children: [(0, r.jsx)(S.Ot, {
        children: k.intl.format(k.t.I3R7Vn, {
          channelName: f
        })
      }), (0, r.jsx)(S.jz, {
        children: k.intl.string(k.t.M8Ao6I)
      })]
    });
    else if (n.hasFlag(M.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)) return (0, r.jsx)(I.Z, {
    channel: n
  });
  else return (0, r.jsx)(N.Z, {
    channel: n,
    children: k.intl.format(k.t.MFwcqO, {
      name: f
    })
  });
  return A ? (0, r.jsx)(G, {
    channel: n,
    canManageRoles: T
  }) : (0, r.jsx)(S.ZP, {
    channelId: n.id,
    children: (0, r.jsx)(S.jz, {
      children: k.intl.format(k.t.hPVEQG, {
        channelName: f
      })
    })
  })
}