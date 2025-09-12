/** Chunk was on web.js **/
/** chunk id: 610699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./539854.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function B(e) {
  let {
    members: t,
    membersOnline: n,
    textColor: i
  } = e, a = [];
  return null != n && n > 0 && a.push((0, r.jsxs)("div", {
    className: j.statusWrapper,
    children: [(0, r.jsx)("i", {
      className: j.statusOnline
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: j.count,
      color: i,
      children: L.intl.format(L.t["LC+S+v"], {
        membersOnline: n
      })
    })]
  }, "onlineCount")), null != t && a.push((0, r.jsxs)("div", {
    className: j.statusWrapper,
    children: [(0, r.jsx)("i", {
      className: j.statusOffline
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: j.count,
      color: i,
      children: L.intl.format(L.t.zRl6XV, {
        count: t
      })
    })]
  }, "memberCount")), (0, r.jsx)("div", {
    className: j.statusCounts,
    children: a
  })
}

function Z(e) {
  let {
    channel: t,
    guild: n,
    hasEnded: i,
    textColor: a
  } = e;
  if (null != t && null != n) {
    let e = (0, O.KS)(t, n);
    return (0, r.jsxs)("div", {
      className: o()(j.channel, {
        [j.ended]: i
      }),
      children: [null != e ? (0, r.jsx)(e, {
        className: j.channelIcon,
        size: "xs",
        color: "currentColor"
      }) : null, (0, r.jsx)(v.Z, {
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: a,
          children: L.intl.format(L.t["dc+LW1"], {
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
    children: (0, r.jsx)(v.Z, {
      children: (0, r.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: a,
        children: L.intl.format(L.t.u0vaDA, {
          guildName: n.name
        })
      })
    })
  }) : null
}

function F(e) {
  var t, n;
  let a, {
      invite: o,
      message: s,
      getAcceptInviteContext: u
    } = e,
    {
      approximate_member_count: h,
      approximate_presence_count: m,
      target_type: g,
      target_application: E
    } = o;
  l()(g === x.Iq.EMBEDDED_APPLICATION && null != E, "invalid application invite");
  let b = i.useCallback(() => {
      var e;
      C.default.track(w.rMx.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
        application_id: E.id,
        invite_inviter_id: null == (e = o.inviter) ? true : e.id
      })
    }, [null == (t = o.inviter) ? true : t.id, E.id]),
    O = (0, c.e7)([T.Z], () => null != o.guild ? T.Z.getGuild(o.guild.id) : null, [o]),
    v = (0, y.Z)([E.id])[0],
    N = (0, c.e7)([f.ZP], () => {
      var e;
      return (null == o ? true : o.channel) != null && (null == (e = f.ZP.getSelfEmbeddedActivityForChannel(o.channel.id)) ? true : e.applicationId) === E.id
    }),
    D = (0, c.e7)([f.ZP], () => {
      var e;
      return ((null == (e = o.channel) ? true : e.id) != null ? f.ZP.getEmbeddedActivitiesForChannel(o.channel.id) : []).some(e => {
        let {
          applicationId: t
        } = e;
        return E.id === t
      })
    }),
    j = I.Z.getChannel(null == (n = o.channel) ? true : n.id),
    M = (0, c.e7)([S.Z], () => null != j && S.Z.can(w.Plq.USE_EMBEDDED_ACTIVITIES, j), [j]),
    {
      analyticsLocations: k
    } = (0, p.ZP)(_.Z.INVITE_EMBED),
    U = (0, c.Wu)([f.ZP], () => null != j ? f.ZP.getEmbeddedActivitiesForChannel(j.id).filter(e => e.applicationId === E.id).flatMap(e => Array.from(e.userIds)) : [], [j, E.id]),
    G = (0, c.Wu)([A.default], () => U.map(e => A.default.getUser(e)).filter(e => null != e), [U]),
    B = i.useCallback(() => {
      (0, d.r$)({
        invite: o,
        action: "accept",
        inviter_id: s.author.id,
        invite_message_id: s.id
      }, k), d.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: o.code,
        context: u("Invite Button Embed"),
        analyticsLocations: k
      })
    }, [o, s, k, u]),
    Z = o.state === w.r2o.ACCEPTING,
    F = null != O;
  if (null == O) {
    if (null == o.guild) return (0, r.jsx)(P.Z, {});
    O = (0, R.Qs)(o.guild)
  }
  let H = F && !M || F && N;
  return (F && N && (a = L.intl.string(L.t.wJNK8P)), M || (a = L.intl.string(L.t.hHGrW1)), null == o.code || "" === o.code || null == v) ? null : (0, r.jsx)(p.Gt, {
    value: k,
    children: (0, r.jsx)(V, {
      app: v,
      activityUsers: G,
      isMember: F,
      channel: j,
      guild: O,
      message: s,
      members: h,
      membersOnline: m,
      isActivityActive: D,
      submitting: Z,
      isDisabled: H,
      tooltip: a,
      handleAcceptInvite: B,
      onView: b
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
    isDisabled: _,
    tooltip: p,
    handleAcceptInvite: y,
    onView: O
  } = e, {
    bot: v,
    icon: I
  } = t, T = N.ZP.getApplicationIconURL({
    id: t.id,
    icon: I,
    bot: v
  }), S = (0, b.G)(t), A = (0, E.E)(t), C = n.length, R = i.useMemo(() => [{
    label: a ? d ? L.intl.string(L.t.VJlc0d) : L.intl.string(L.t.RscU7O) : L.intl.string(L.t["2BP08P"]),
    trackingArea: a ? g.j_.PLAY : g.j_.JOIN_SERVER,
    submitting: f,
    disabledReason: _ && null != p ? p : true,
    onClick: y
  }], [y, d, _, a, f, p]);
  return (0, r.jsx)(h.W, G(k({
    header: t.name,
    title: L.intl.string(L.t["7vb6n5"]),
    iconSrc: T
  }, A), {
    onClickBanner: S,
    info: (0, r.jsxs)("div", {
      className: j.infoWrapper,
      children: [(0, r.jsx)(Z, {
        channel: o,
        guild: s,
        hasEnded: !d,
        textColor: "none"
      }), a ? C > 0 && (0, r.jsx)(m.K, {
        activityUsers: n,
        guildId: s.id,
        activityText: L.intl.formatToPlainString(L.t.yJj039, {
          count: C
        })
      }) : (0, r.jsx)(B, {
        members: c,
        membersOnline: u,
        textColor: "none"
      })]
    }),
    actions: R,
    onClickContent: S,
    trackingConfig: {
      id: t.id,
      linkType: D.U.ACTIVITY_INVITE,
      onView: O,
      guildId: s.id,
      channelId: null == o ? true : o.id,
      messageId: l.id
    }
  }))
}