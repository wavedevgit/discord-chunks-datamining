/** Chunk was on web.js **/
/** chunk id: 610699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk317381 = require("./317381.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk758199 = require("./758199.jsx"),
  Chunk943762 = require("./943762.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk880251 = require("./880251.js"),
  Chunk515344 = require("./515344.js"),
  Chunk835473 = require("./835473.js"),
  Chunk471445 = require("./471445.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk411198 = require("./411198.js"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk967249 = require("./967249.js"),
  Chunk245335 = require("./245335.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969016 = require("./969016.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let {
    members: t,
    membersOnline: n,
    textColor: i
  } = e, a = [];
  return null != n && n > 0 && a.push((0, r.jsxs)("div", {
    className: j.statusWrapper,
    children: [(0, r.jsx)("i", {
      className: j.statusOnline
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: j.count,
      color: i,
      children: L.intl.format(L.t["LC+S+m"], {
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && a.push((0, r.jsxs)("div", {
    className: j.statusWrapper,
    children: [(0, r.jsx)("i", {
      className: j.statusOffline
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: j.count,
      color: i,
      children: L.intl.format(L.t.zRl6XR, {
        count: t
      })
    })]
  }, "memberCount")), (0, r.jsx)("div", {
    className: j.statusCounts,
    children: a
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    hasEnded: i,
    textColor: a
  } = e;
  if (null != t && null != n) {
    let e = (0, v.KS)(t, n);
    return (0, r.jsxs)("div", {
      className: o()(j.channel, {
        [j.ended]: i
      }),
      children: [null != e ? (0, r.jsx)(e, {
        className: j.channelIcon,
        size: "xs",
        color: "currentColor"
      }) : null, (0, r.jsx)(u.Z, {
        children: (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: a,
          children: L.intl.format(L.t["dc+LW4"], {
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, r.jsx)("div", {
    className: o()(j.channel, {
      [j.ended]: i
    }),
    children: (0, r.jsx)(u.Z, {
      children: (0, r.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: a,
        children: L.intl.format(L.t.u0vaDE, {
          guildName: n.name
        })
      })
    })
  }) : null
}

function F(e) {
  var t, n;
  let a, o, {
      invite: s,
      message: u,
      getAcceptInviteContext: d
    } = e,
    {
      approximate_member_count: h,
      approximate_presence_count: g,
      target_type: E,
      target_application: b
    } = s;
  l()(E === x.Iq.EMBEDDED_APPLICATION && null != b, "invalid application invite");
  let y = i.useCallback(() => {
      var e;
      A.default.track(D.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
        application_id: b.id,
        invite_inviter_id: null == (e = s.inviter) ? true : e.id
      })
    }, [null == (t = s.inviter) ? true : t.id, b.id]),
    v = (0, c.e7)([I.Z], () => null != s.guild ? I.Z.getGuild(s.guild.id) : null, [s]),
    N = (0, O.Z)([b.id])[0],
    w = (0, c.e7)([p.ZP], () => {
      var e;
      return (null == s ? true : s.channel) != null && (null == (e = p.ZP.getSelfEmbeddedActivityForChannel(s.channel.id)) ? true : e.applicationId) === b.id
    }),
    j = (0, c.e7)([p.ZP], () => {
      var e;
      return ((null == (e = s.channel) ? true : e.id) != null ? p.ZP.getEmbeddedActivitiesForChannel(s.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return b.id === t
      })
    }),
    M = S.Z.getChannel(null == (n = s.channel) ? true : n.id),
    k = (0, c.e7)([T.Z], () => null != M && T.Z.can(D.Plq.USE_EMBEDDED_ACTIVITIES, M), [M]),
    {
      analyticsLocations: U
    } = (0, m.ZP)(_.Z.INVITE_EMBED),
    G = (0, c.Wu)([p.ZP], () => null != M ? p.ZP.getEmbeddedActivitiesForChannel(M.id).filter(e => e.applicationId === b.id).flatMap(e => Array.from(e.userIds)) : [], [M, b.id]),
    Z = (0, c.Wu)([C.default], () => G.map(e => C.default.getUser(e)).filter(e => null != e), [G]),
    B = i.useCallback(() => {
      (0, f.r$)({
        invite: s,
        action: "accept",
        inviter_id: u.author.id,
        invite_message_id: u.id
      }, U), f.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: s.code,
        context: d("Invite Button Embed"),
        analyticsLocations: U
      })
    }, [s, u, U, d]),
    F = s.state === D.r2o.ACCEPTING,
    H = null != v;
  if (null == v) {
    if (null == s.guild) return (0, r.jsx)(R.Z, {});
    v = (0, P.Qs)(s.guild)
  }
  a = H ? w ? L.intl.string(L.t.DPfdsq) : j ? L.intl.string(L.t.sqe0hj) : L.intl.string(L.t.RscU7I) : L.intl.string(L.t["2BP08E"]);
  let Y = H && !k || H && w;
  return (k || (o = L.intl.string(L.t.hHGrWz)), null == s.code || "" === s.code || null == N) ? null : (0, r.jsx)(m.Gt, {
    value: U,
    children: (0, r.jsx)(V, {
      app: N,
      activityUsers: Z,
      isMember: H,
      channel: M,
      guild: v,
      message: u,
      members: h,
      membersOnline: g,
      isActivityActive: j,
      submitting: F,
      buttonLabel: a,
      disabled: Y,
      disabledReason: o,
      handleAcceptInvite: B,
      onView: y
    })
  })
}

function V(e) {
  let {
    app: t,
    activityUsers: n,
    isMember: a,
    channel: o,
    guild: s,
    message: l,
    members: c,
    membersOnline: u,
    isActivityActive: d,
    submitting: f,
    buttonLabel: p,
    disabled: _,
    disabledReason: m,
    handleAcceptInvite: O,
    onView: v
  } = e, {
    bot: S,
    icon: I
  } = t, T = N.ZP.getApplicationIconURL({
    id: t.id,
    icon: I,
    bot: S
  }), C = (0, y.G)(t), A = (0, b.E)(t), P = n.length, R = i.useMemo(() => [{
    label: p,
    trackingArea: a ? E.j_.PLAY : E.j_.JOIN_SERVER,
    submitting: f,
    disabled: _,
    disabledReason: _ && null != m ? m : true,
    onClick: O
  }], [p, a, f, _, m, O]);
  return (0, r.jsx)(h.W, G(k({
    header: t.name,
    title: L.intl.string(L.t["7vb6nw"]),
    iconSrc: T
  }, A), {
    onClickBanner: C,
    info: (0, r.jsxs)("div", {
      className: j.infoWrapper,
      children: [(0, r.jsx)(B, {
        channel: o,
        guild: s,
        hasEnded: !d,
        textColor: "none"
      }), a ? P > 0 && (0, r.jsx)(g.K, {
        activityUsers: n,
        guildId: s.id,
        activityText: L.intl.formatToPlainString(L.t.yJj035, {
          count: P
        })
      }) : (0, r.jsx)(Z, {
        members: c,
        membersOnline: u,
        textColor: "none"
      })]
    }),
    actions: R,
    onClickContent: C,
    trackingConfig: {
      id: t.id,
      linkType: w.U.ACTIVITY_INVITE,
      onView: v,
      guildId: s.id,
      channelId: null == o ? true : o.id,
      messageId: l.id,
      isDeadEnd: !d
    }
  }))
}