/** Chunk was on web.js **/
/** chunk id: 610699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
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
  Chunk111028 = require("./111028.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk411198 = require("./411198.js"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk245335 = require("./245335.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk363107 = require("./363107.js");

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

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let {
    members: t,
    membersOnline: n,
    textColor: i
  } = e, o = [];
  return null != n && n > 0 && o.push((0, r.jsxs)("div", {
    className: x.statusWrapper,
    children: [(0, r.jsx)("i", {
      className: x.statusOnline
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: x.count,
      color: i,
      children: L.intl.format(L.t["LC+S+v"], {
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && o.push((0, r.jsxs)("div", {
    className: x.statusWrapper,
    children: [(0, r.jsx)("i", {
      className: x.statusOffline
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: x.count,
      color: i,
      children: L.intl.format(L.t.zRl6XV, {
        count: t
      })
    })]
  }, "memberCount")), (0, r.jsx)("div", {
    className: x.statusCounts,
    children: o
  })
}

function B(e) {
  let {
    channel: t,
    guild: n,
    hasEnded: i,
    textColor: o
  } = e;
  if (null != t && null != n) {
    let e = (0, O.KS)(t, n);
    return (0, r.jsxs)("div", {
      className: a()(x.channel, {
        [x.ended]: i
      }),
      children: [null != e ? (0, r.jsx)(e, {
        className: x.channelIcon,
        size: "xs",
        color: "currentColor"
      }) : null, (0, r.jsx)(v.Z, {
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: o,
          children: L.intl.format(L.t["dc+LW1"], {
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, r.jsx)("div", {
    className: a()(x.channel, {
      [x.ended]: i
    }),
    children: (0, r.jsx)(v.Z, {
      children: (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: o,
        children: L.intl.format(L.t.u0vaDA, {
          guildName: n.name
        })
      })
    })
  }) : null
}

function Z(e) {
  var t, n;
  let o, {
      invite: a,
      message: s,
      getAcceptInviteContext: u
    } = e,
    {
      approximate_member_count: h,
      approximate_presence_count: m,
      target_type: g,
      target_application: E
    } = a;
  l()(g === D.Iq.EMBEDDED_APPLICATION && null != E, "invalid application invite");
  let b = i.useCallback(() => {
      var e;
      N.default.track(w.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
        application_id: E.id,
        invite_inviter_id: null == (e = a.inviter) ? true : e.id
      })
    }, [null == (t = a.inviter) ? true : t.id, E.id]),
    O = (0, c.e7)([T.Z], () => null != a.guild ? T.Z.getGuild(a.guild.id) : null, [a]),
    v = (0, y.Z)([E.id])[0],
    C = (0, c.e7)([f.ZP], () => {
      var e;
      return (null == a ? true : a.channel) != null && (null == (e = f.ZP.getSelfEmbeddedActivityForChannel(a.channel.id)) ? true : e.applicationId) === E.id
    }),
    x = (0, c.e7)([f.ZP], () => {
      var e;
      return ((null == (e = a.channel) ? true : e.id) != null ? f.ZP.getEmbeddedActivitiesForChannel(a.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return E.id === t
      })
    }),
    M = I.Z.getChannel(null == (n = a.channel) ? true : n.id),
    k = (0, c.e7)([S.Z], () => null != M && S.Z.can(w.Plq.USE_EMBEDDED_ACTIVITIES, M), [M]),
    {
      analyticsLocations: j
    } = (0, p.ZP)(_.Z.INVITE_EMBED),
    U = (0, c.Wu)([f.ZP], () => null != M ? f.ZP.getEmbeddedActivitiesForChannel(M.id).filter(e => e.applicationId === E.id).flatMap(e => Array.from(e.userIds)) : [], [M, E.id]),
    G = (0, c.Wu)([A.default], () => U.map(e => A.default.getUser(e)).filter(e => null != e), [U]),
    B = i.useCallback(() => {
      (0, d.r$)({
        invite: a,
        action: "accept",
        inviter_id: s.author.id,
        invite_message_id: s.id
      }, j), d.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: a.code,
        context: u("Invite Button Embed"),
        analyticsLocations: j
      })
    }, [a, s, j, u]),
    Z = a.state === w.r2o.ACCEPTING,
    V = null != O;
  if (null == O) {
    if (null == a.guild) return (0, r.jsx)(P.Z, {});
    O = (0, R.Qs)(a.guild)
  }
  let H = V && !k || V && C;
  return (V && C && (o = L.intl.string(L.t.wJNK8P)), k || (o = L.intl.string(L.t.hHGrW1)), null == a.code || "" === a.code || null == v) ? null : (0, r.jsx)(p.Gt, {
    value: j,
    children: (0, r.jsx)(F, {
      app: v,
      activityUsers: G,
      isMember: V,
      channel: M,
      guild: O,
      members: h,
      membersOnline: m,
      isActivityActive: x,
      submitting: Z,
      isDisabled: H,
      tooltip: o,
      handleAcceptInvite: B,
      onView: b
    })
  })
}

function F(e) {
  let {
    app: t,
    activityUsers: n,
    isMember: o,
    channel: a,
    guild: s,
    members: l,
    membersOnline: c,
    isActivityActive: u,
    submitting: d,
    isDisabled: f,
    tooltip: _,
    handleAcceptInvite: p,
    onView: y
  } = e, {
    bot: O,
    icon: v
  } = t, I = C.ZP.getApplicationIconURL({
    id: t.id,
    icon: v,
    bot: O
  }), T = (0, b.G)(t), S = (0, E.E)(t), A = n.length, N = i.useMemo(() => [{
    label: o ? u ? L.intl.string(L.t.VJlc0d) : L.intl.string(L.t.RscU7O) : L.intl.string(L.t["2BP08P"]),
    trackingArea: o ? g.j_.PLAY : g.j_.JOIN_SERVER,
    submitting: d,
    disabledReason: f && null != _ ? _ : true,
    onClick: p
  }], [p, u, f, o, d, _]);
  return (0, r.jsx)(h.W, U(k({
    header: t.name,
    title: L.intl.string(L.t["7vb6n5"]),
    iconSrc: I
  }, S), {
    onClickBanner: T,
    info: (0, r.jsxs)("div", {
      className: x.infoWrapper,
      children: [(0, r.jsx)(B, {
        channel: a,
        guild: s,
        hasEnded: !u,
        textColor: "none"
      }), o ? A > 0 && (0, r.jsx)(m.K, {
        activityUsers: n,
        guildId: s.id,
        activityText: L.intl.string(L.t.BMTj29)
      }) : (0, r.jsx)(G, {
        members: l,
        membersOnline: c,
        textColor: "none"
      })]
    }),
    actions: N,
    onClickContent: T,
    trackingConfig: {
      id: t.id,
      linkType: g.Un.ACTIVITY_INVITE,
      onView: y
    }
  }))
}