/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => Z
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(570140),
  u = n(475179),
  d = n(925549),
  f = n(37234),
  p = n(835473),
  _ = n(413523),
  h = n(358221),
  m = n(703656),
  g = n(607187),
  E = n(937995),
  v = n(366050),
  b = n(944486),
  y = n(594174),
  O = n(566620),
  S = n(317381),
  I = n(531826),
  T = n(175894),
  N = n(246106),
  A = n(963614),
  C = n(917107),
  R = n(208156),
  P = n(748492),
  D = n(701488),
  w = n(918559),
  L = n(981631),
  x = n(354459),
  M = n(378308),
  j = n(717268),
  k = n(459918);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  if (null == e) return {};
  var n, r, i = F(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function F(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function V(e) {
  var t, n, o;
  let {
    channel: T,
    isLoading: N
  } = e, [U, G] = i.useState(!1), B = (0, s.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(T.id)), F = (0, s.e7)([S.ZP], () => S.ZP.getActivityPanelMode()), V = (0, p.q)(null == B ? void 0 : B.applicationId), Z = null == B ? void 0 : B.launchId, H = (0, s.e7)([b.Z], () => b.Z.getChannelId() === T.id), {
    dockedRect: W,
    isHidden: Y
  } = (0, s.cj)([v.Z], () => {
    let e = v.Z.pipWindow;
    return {
      dockedRect: null != e ? v.Z.getDockedRect(e.id) : null,
      isHidden: v.Z.isEmbeddedActivityHidden()
    }
  }), K = (0, I.sU)({
    channelId: T.id
  }), {
    activityParticipant: z,
    selectedParticipant: q,
    participantsOpen: Q
  } = (0, s.cj)([h.Z], () => ({
    activityParticipant: null != B ? h.Z.getParticipant(T.id, (0, _.gN)({
      applicationId: B.applicationId,
      instanceId: B.compositeInstanceId
    })) : null,
    selectedParticipant: h.Z.getSelectedParticipant(T.id),
    participantsOpen: h.Z.getParticipantsOpen(T.id)
  })), X = H || null != K, J = (0, C.Z)(T.id), $ = J && (null == q ? void 0 : q.type) !== x.fO.ACTIVITY, ee = !J && F === w.Ez.PIP, et = X && ($ || ee) && null == W, en = (!X || et) && !Y, er = en && null != v.Z.pipVideoWindow && null != v.Z.pipActivityWindow;

  function ei() {
    var e;
    null != B && u.Z.selectParticipant(T.id, (0, _.gN)({
      applicationId: B.applicationId,
      instanceId: B.compositeInstanceId
    }));
    let t = null !== (e = T.getGuildId()) && void 0 !== e ? e : L.ME;
    d.Z.channelListScrollTo(t, T.id), (0, m.XU)(t, T.id), null == K && (0, f.Ou)()
  }

  function eo() {
    G(!U)
  }

  function ea(e, t, n, i, o) {
    var a;
    return en && null != B && ((null == z ? void 0 : z.type) === x.fO.ACTIVITY || i) ? (null === (a = B.config) || void 0 === a ? void 0 : a.useInteractivePIP) ? (0, r.jsx)(P.of, {
      onJumpToChannel: ei,
      applicationId: B.applicationId,
      channel: T,
      showControls: !n,
      onMouseDown: e,
      onMouseMove: e,
      onMouseLeave: t,
      onToggleHeight: eo,
      isExpanded: U,
      hideExpandedButton: i,
      embeddedActivity: B
    }) : i ? (0, r.jsx)(P.q5, {
      idle: n,
      onMouseMove: e,
      onMouseDown: e,
      onMouseLeave: t,
      onJumpToChannel: () => {
        ei(), (0, O.tg)(w.Ez.PANEL)
      },
      channel: T,
      applicationId: B.applicationId,
      users: o,
      embeddedActivity: B
    }) : null == z ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        onMouseMove: e,
        onMouseDown: e,
        onMouseLeave: t,
        className: M.clickShield,
        onDoubleClick: ei
      }), (0, r.jsx)(P.YB, {
        idle: n,
        onMouseMove: e,
        onMouseDown: e,
        onMouseLeave: t,
        onJumpToChannel: ei,
        channel: T,
        applicationId: B.applicationId,
        selectedParticipant: z,
        embeddedActivity: B
      })]
    }) : null
  }
  if (i.useEffect(() => {
      if ((null == B ? void 0 : B.applicationId) != null) {
        let e = en ? D.cE.PIP : D.cE.FOCUSED;
        c.Z.dispatch({
          type: "ACTIVITY_LAYOUT_MODE_UPDATE",
          layoutMode: e,
          applicationId: B.applicationId
        })
      }
    }, [null == B ? void 0 : B.applicationId, en]), null == B || null == Z || null == z && (0, C.Z)(T.id) || null == V) return null;
  let es = Array.from(B.userIds).map(e => y.default.getUser(e)).filter(e => null != e),
    el = {
      instance_id: null !== (o = null !== (n = B.compositeInstanceId) && void 0 !== n ? n : B.launchId) && void 0 !== o ? o : "",
      channel_id: T.id,
      location_id: null === (t = B.location) || void 0 === t ? void 0 : t.id,
      launch_id: B.launchId,
      referrer_id: B.referrerId,
      custom_id: B.customId
    };
  return null != T.guild_id && "" !== T.guild_id && (el.guild_id = T.guild_id), (0, r.jsx)(E.ZP, {
    timeout: 2e3,
    children: e => {
      var t, n;
      let {
        idle: i,
        onActive: o,
        onForceIdle: s
      } = e;
      return (0, r.jsxs)(g.Z, {
        className: a()(M.root, {
          [M.pipMode]: en,
          [k.elevationHigh]: en,
          [j.idle]: i && !(null === (t = B.config) || void 0 === t ? void 0 : t.useInteractivePIP),
          [M.pipModeShort]: en && !U,
          [M.pipModeTall]: en && U,
          [M.hidden]: Y,
          [M.multiPIPMode]: er
        }),
        noBorder: !en,
        children: [(0, r.jsx)("div", {
          className: "theme-dark",
          children: ea(o, s, i, ee, es)
        }), N ? (0, r.jsx)(l.$jN, {
          className: a()(M.iframe, {
            [M.pipModeShort]: en && !U,
            [M.pipModeTall]: en && U
          })
        }) : (0, r.jsx)(R.J, {
          allowPopups: (0, A.h)(V),
          referrerPolicy: D.um.has(B.applicationId) ? "no-referrer" : "origin",
          url: B.url,
          queryParams: el,
          className: a()(M.iframe, {
            [M.pipModeShort]: en && !U,
            [M.pipModeTall]: en && U,
            [M.pipNonInteractive]: en && !(null === (n = B.config) || void 0 === n ? void 0 : n.useInteractivePIP)
          }),
          shouldRefocus: !en && H
        }), !en && (0, r.jsx)(P.Ds, {
          participantsOpen: Q,
          showToggleParticipants: !1,
          channelId: T.id
        })]
      })
    }
  })
}
let Z = e => {
  var {
    channel: t
  } = e, n = B(e, ["channel"]);
  let {
    userActivity: i,
    inActivity: o
  } = (0, N.Z)(t.id);
  (0, T.Z)({
    userActivity: i
  });
  let a = !o;
  return (0, r.jsx)(V, G({
    channel: t,
    isLoading: a
  }, n))
}