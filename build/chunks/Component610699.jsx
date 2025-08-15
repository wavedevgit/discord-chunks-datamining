/** Chunk was on 66866 **/
/** chunk id: 610699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk969016 = require("./969016.js");

function L(e) {
  let {
    members: t,
    membersOnline: n,
    textColor: i
  } = e, l = [];
  return null != n && n > 0 && l.push((0, r.jsxs)("div", {
    className: R.statusWrapper,
    children: [(0, r.jsx)("i", {
      className: R.statusOnline
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: R.count,
      color: i,
      children: Z.intl.format(Z.t["LC+S+v"], {
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && l.push((0, r.jsxs)("div", {
    className: R.statusWrapper,
    children: [(0, r.jsx)("i", {
      className: R.statusOffline
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: R.count,
      color: i,
      children: Z.intl.format(Z.t.zRl6XV, {
        count: t
      })
    })]
  }, "memberCount")), (0, r.jsx)("div", {
    className: R.statusCounts,
    children: l
  })
}

function D(e) {
  let {
    channel: t,
    guild: n,
    hasEnded: i,
    textColor: l
  } = e;
  if (null != t && null != n) {
    let e = (0, v.KS)(t, n);
    return (0, r.jsxs)("div", {
      className: a()(R.channel, {
        [R.ended]: i
      }),
      children: [null != e ? (0, r.jsx)(e, {
        className: R.channelIcon,
        size: "xs",
        color: "currentColor"
      }) : null, (0, r.jsx)(O.Z, {
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: l,
          children: Z.intl.format(Z.t["dc+LW1"], {
            channelName: t.name,
            serverName: n.name
          })
        })
      })]
    })
  }
  return null != n ? (0, r.jsx)("div", {
    className: a()(R.channel, {
      [R.ended]: i
    }),
    children: (0, r.jsx)(O.Z, {
      children: (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: l,
        children: Z.intl.format(Z.t.u0vaDA, {
          guildName: n.name
        })
      })
    })
  }) : null
}

function M(e) {
  var t, n;
  let l, {
      invite: a,
      message: o,
      getAcceptInviteContext: u
    } = e,
    {
      approximate_member_count: _,
      approximate_presence_count: g,
      target_type: h,
      target_application: b
    } = a;
  s()(h === w.Iq.EMBEDDED_APPLICATION && null != b, "invalid application invite");
  let E = i.useCallback(() => {
      var e;
      S.default.track(A.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
        application_id: b.id,
        invite_inviter_id: null == (e = a.inviter) ? true : e.id
      })
    }, [null == (t = a.inviter) ? true : t.id, b.id]),
    v = (0, c.e7)([x.Z], () => null != a.guild ? x.Z.getGuild(a.guild.id) : null, [a]),
    O = (0, C.Z)([b.id])[0],
    T = (0, c.e7)([p.ZP], () => {
      var e;
      return (null == a ? true : a.channel) != null && (null == (e = p.ZP.getSelfEmbeddedActivityForChannel(a.channel.id)) ? true : e.applicationId) === b.id
    }),
    R = (0, c.e7)([p.ZP], () => {
      var e;
      return ((null == (e = a.channel) ? true : e.id) != null ? p.ZP.getEmbeddedActivitiesForChannel(a.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return b.id === t
      })
    }),
    L = y.Z.getChannel(null == (n = a.channel) ? true : n.id),
    D = (0, c.e7)([j.Z], () => null != L && j.Z.can(A.Plq.USE_EMBEDDED_ACTIVITIES, L), [L]),
    {
      analyticsLocations: M
    } = (0, f.ZP)(m.Z.INVITE_EMBED),
    U = (0, c.Wu)([p.ZP], () => null != L ? p.ZP.getEmbeddedActivitiesForChannel(L.id).filter(e => e.applicationId === b.id).flatMap(e => Array.from(e.userIds)) : [], [L, b.id]),
    F = (0, c.Wu)([I.default], () => U.map(e => I.default.getUser(e)).filter(e => null != e), [U]),
    B = i.useCallback(() => {
      (0, d.r$)({
        invite: a,
        action: "accept",
        inviter_id: o.author.id,
        invite_message_id: o.id
      }, M), d.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: a.code,
        context: u("Invite Button Embed"),
        analyticsLocations: M
      })
    }, [a, o, M, u]),
    G = a.state === A.r2o.ACCEPTING,
    H = null != v;
  if (null == v) {
    if (null == a.guild) return (0, r.jsx)(N.Z, {});
    v = (0, P.Qs)(a.guild)
  }
  let V = H && !D || H && T;
  return (H && T && (l = Z.intl.string(Z.t.wJNK8P)), D || (l = Z.intl.string(Z.t.hHGrW1)), null == a.code || "" === a.code || null == O) ? null : (0, r.jsx)(f.Gt, {
    value: M,
    children: (0, r.jsx)(k, {
      app: O,
      activityUsers: F,
      isMember: H,
      channel: L,
      guild: v,
      members: _,
      membersOnline: g,
      isActivityActive: R,
      submitting: G,
      isDisabled: V,
      tooltip: l,
      handleAcceptInvite: B,
      onView: E
    })
  })
}

function k(e) {
  var t, n;
  let {
    app: l,
    activityUsers: a,
    isMember: o,
    channel: s,
    guild: c,
    members: u,
    membersOnline: d,
    isActivityActive: p,
    submitting: m,
    isDisabled: f,
    tooltip: C,
    handleAcceptInvite: v,
    onView: O
  } = e, {
    bot: y,
    icon: x
  } = l, j = T.ZP.getApplicationIconURL({
    id: l.id,
    icon: x,
    bot: y
  }), I = (0, E.G)(l), S = (0, b.E)(l), P = a.length, N = i.useMemo(() => [{
    label: o ? p ? Z.intl.string(Z.t.VJlc0d) : Z.intl.string(Z.t.RscU7O) : Z.intl.string(Z.t["2BP08P"]),
    trackingArea: o ? h.j_.PLAY : h.j_.JOIN_SERVER,
    submitting: m,
    disabledReason: f && null != C ? C : true,
    onClick: v
  }], [v, p, f, o, m, C]);
  return (0, r.jsx)(_.W, (t = function(e) {
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
    title: Z.intl.string(Z.t["7vb6n5"]),
    iconSrc: j
  }, S), n = n = {
    onClickBanner: I,
    info: (0, r.jsxs)("div", {
      className: R.infoWrapper,
      children: [(0, r.jsx)(D, {
        channel: s,
        guild: c,
        hasEnded: !p,
        textColor: "none"
      }), o ? P > 0 && (0, r.jsx)(g.K, {
        activityUsers: a,
        guildId: c.id,
        activityText: Z.intl.string(Z.t.BMTj29)
      }) : (0, r.jsx)(L, {
        members: u,
        membersOnline: d,
        textColor: "none"
      })]
    }),
    actions: N,
    onClickContent: I,
    trackingConfig: {
      id: l.id,
      linkType: h.Un.ACTIVITY_INVITE,
      onView: O
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