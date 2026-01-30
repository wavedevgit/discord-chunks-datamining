/** Chunk was on 64935 **/
/** chunk id: 62350, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
}), require("./321073.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk933958 = require("./933958.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk572211 = require("./572211.jsx"),
  Chunk178910 = require("./178910.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk112150 = require("./112150.js"),
  Chunk574660 = require("./574660.js"),
  Chunk429913 = require("./429913.js"),
  Chunk713654 = require("./713654.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk860689 = require("./860689.js"),
  Chunk168428 = require("./168428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk768349 = require("./768349.js"),
  Chunk172799 = require("./172799.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk320160 = require("./320160.js");

function M(e) {
  let {
    members: t,
    membersOnline: n,
    textColor: i
  } = e, l = [];
  return null != n && n > 0 && l.push((0, r.jsxs)("div", {
    className: L.MY,
    children: [(0, r.jsx)("i", {
      className: L.QD
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: L.U9,
      color: i,
      children: D.intl.format(D.t["LC+S+m"], {
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && l.push((0, r.jsxs)("div", {
    className: L.MY,
    children: [(0, r.jsx)("i", {
      className: L.o6
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: L.U9,
      color: i,
      children: D.intl.format(D.t.zRl6XR, {
        count: t
      })
    })]
  }, "memberCount")), (0, r.jsx)("div", {
    className: L.rc,
    children: l
  })
}

function k(e) {
  let {
    channel: t,
    guild: n,
    hasEnded: i,
    textColor: l
  } = e;
  if (null != t && null != n) {
    let e = (0, x.gU)(t, n);
    return (0, r.jsxs)("div", {
      className: a()(L.Ix, {
        [L.v6]: i
      }),
      children: [null != e ? (0, r.jsx)(e, {
        className: L.p,
        size: "xs",
        color: "currentColor"
      }) : null, (0, r.jsx)(u.A, {
        children: (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: l,
          children: D.intl.format(D.t["dc+LW4"], {
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, r.jsx)("div", {
    className: a()(L.Ix, {
      [L.v6]: i
    }),
    children: (0, r.jsx)(u.A, {
      children: (0, r.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: l,
        children: D.intl.format(D.t.u0vaDE, {
          guildName: n.name
        })
      })
    })
  }) : null
}

function U(e) {
  var t, n;
  let l, a, {
      invite: s,
      message: u,
      getAcceptInviteContext: d
    } = e,
    {
      approximate_member_count: _,
      approximate_presence_count: h,
      target_type: b,
      target_application: A
    } = s;
  o()(b === R.yV.EMBEDDED_APPLICATION && null != A, "invalid application invite");
  let y = i.useCallback(() => {
      var e;
      I.default.track(P.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
        application_id: A.id,
        invite_inviter_id: null == (e = s.inviter) ? true : e.id
      })
    }, [null == (t = s.inviter) ? true : t.id, A.id]),
    x = (0, c.bG)([E.A], () => null != s.guild ? E.A.getGuild(s.guild.id) : null, [s]),
    S = (0, v.A)([A.id])[0],
    w = (0, c.bG)([m.Ay], () => {
      var e;
      return (null == s ? true : s.channel) != null && (null == (e = m.Ay.getSelfEmbeddedActivityForChannel(s.channel.id)) ? true : e.applicationId) === A.id
    }),
    L = (0, c.bG)([m.Ay], () => {
      var e;
      return ((null == (e = s.channel) ? true : e.id) != null ? m.Ay.getEmbeddedActivitiesForChannel(s.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return A.id === t
      })
    }),
    M = O.A.getChannel(null == (n = s.channel) ? true : n.id),
    k = (0, c.bG)([j.A], () => null != M && j.A.can(P.xBc.USE_EMBEDDED_ACTIVITIES, M), [M]),
    {
      analyticsLocations: U
    } = (0, g.Ay)(f.A.INVITE_EMBED),
    B = (0, c.yK)([m.Ay], () => null != M ? m.Ay.getEmbeddedActivitiesForChannel(M.id).filter(e => e.applicationId === A.id).flatMap(e => Array.from(e.userIds)) : [], [M, A.id]),
    F = (0, c.yK)([C.default], () => B.map(e => C.default.getUser(e)).filter(e => null != e), [B]),
    H = i.useCallback(() => {
      (0, p.he)({
        invite: s,
        action: "accept",
        inviter_id: u.author.id,
        invite_message_id: u.id
      }, U), p.Ay.acceptInviteAndTransitionToInviteChannel({
        inviteKey: s.code,
        context: d("Invite Button Embed"),
        analyticsLocations: U
      })
    }, [s, u, U, d]),
    V = s.state === P.elq.ACCEPTING,
    z = null != x;
  if (null == x) {
    if (null == s.guild) return (0, r.jsx)(N.A, {});
    x = (0, T.DY)(s.guild)
  }
  l = z ? w ? D.intl.string(D.t.DPfdsq) : L ? D.intl.string(D.t.sqe0hj) : D.intl.string(D.t.RscU7I) : D.intl.string(D.t["2BP08E"]);
  let W = z && !k || z && w;
  return (k || (a = D.intl.string(D.t.hHGrWz)), null == s.code || "" === s.code || null == S) ? null : (0, r.jsx)(g.f5, {
    value: U,
    children: (0, r.jsx)(G, {
      app: S,
      activityUsers: F,
      isMember: z,
      channel: M,
      guild: x,
      message: u,
      members: _,
      membersOnline: h,
      isActivityActive: L,
      submitting: V,
      buttonLabel: l,
      disabled: W,
      disabledReason: a,
      handleAcceptInvite: H,
      onView: y
    })
  })
}

function G(e) {
  var t, n;
  let {
    app: l,
    activityUsers: a,
    isMember: s,
    channel: o,
    guild: c,
    message: u,
    members: d,
    membersOnline: p,
    isActivityActive: m,
    submitting: f,
    buttonLabel: g,
    disabled: v,
    disabledReason: x,
    handleAcceptInvite: O,
    onView: E
  } = e, {
    bot: j,
    icon: C
  } = l, I = S.Ay.getApplicationIconURL({
    id: l.id,
    icon: C,
    bot: j
  }), T = (0, y.F)(l), N = (0, A.f)(l), P = a.length, R = i.useMemo(() => [{
    label: g,
    trackingArea: s ? b.kY.PLAY : b.kY.JOIN_SERVER,
    submitting: f,
    disabled: v,
    disabledReason: v && null != x ? x : true,
    onClick: O
  }], [g, s, f, v, x, O]);
  return (0, r.jsx)(_.h, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    header: l.name,
    title: D.intl.string(D.t["7vb6nw"]),
    iconSrc: I
  }, N), n = n = {
    onClickBanner: T,
    info: (0, r.jsxs)("div", {
      className: L.QR,
      children: [(0, r.jsx)(k, {
        channel: o,
        guild: c,
        hasEnded: !m,
        textColor: "none"
      }), s ? P > 0 && (0, r.jsx)(h.$, {
        activityUsers: a,
        guildId: c.id,
        activityText: D.intl.formatToPlainString(D.t.yJj035, {
          count: P
        })
      }) : (0, r.jsx)(M, {
        members: d,
        membersOnline: p,
        textColor: "none"
      })]
    }),
    actions: R,
    onClickContent: T,
    trackingConfig: {
      id: l.id,
      linkType: w.J.ACTIVITY_INVITE,
      onView: E,
      guildId: c.id,
      channelId: null == o ? true : o.id,
      messageId: u.id,
      isDeadEnd: !m
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}