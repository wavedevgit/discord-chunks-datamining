/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => I
}), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(692547),
  a = n(481060),
  s = n(475179),
  l = n(519938),
  c = n(317381),
  u = n(812206),
  d = n(358221),
  f = n(199902),
  _ = n(366050),
  p = n(594174),
  h = n(981631),
  g = n(354459),
  m = n(388032),
  E = n(54329);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    closePopout: t,
    idle: n,
    pipWindows: o,
    voiceChannelId: p,
    onSelect: E
  } = e;
  n && t();
  let v = (0, i.e7)([c.ZP], () => c.ZP.getSelfEmbeddedActivityForChannel(p)),
    b = (0, i.e7)([_.Z], () => _.Z.pipWindow),
    y = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(p)),
    O = (0, i.e7)([d.Z], () => d.Z.getStreamParticipants(p));

  function S(e) {
    (null == b ? void 0 : b.id) !== e.pipWindow.id && (0, l.k3)(e.pipWindow.id);
    let t = e.participant;
    null != t && t.type !== g.fO.ACTIVITY && s.Z.selectParticipant(p, t.id)
  }

  function I(e) {
    if (e.pipWindow.component === h.NYg.EMBED_IFRAME && null != v) {
      var t;
      let e = null === (t = u.Z.getApplication(v.applicationId)) || void 0 === t ? void 0 : t.name;
      return null == e ? m.NW.string(m.t["8raC1N"]) : m.NW.formatToPlainString(m.t["a9+V+f"], {
        activityName: e
      })
    }
    return null == e.participant || e.participant.type !== g.fO.STREAM ? m.NW.string(m.t["ng/Kws"]) : m.NW.formatToPlainString(m.t.sqmFRk, {
      username: e.participant.userNick
    })
  }

  function T() {
    let e = [],
      t = o.find(e => e.component === h.NYg.VIDEO);
    return null != t && O.forEach(n => {
      let r = f.Z.getActiveStreamForApplicationStream(n.stream),
        i = n.id === (null == y ? void 0 : y.id) && (null == b ? void 0 : b.id) === t.id;
      null == r || i || e.push({
        pipWindow: t,
        participant: n,
        stream: r
      })
    }), e
  }

  function N(e) {
    var t;
    let n = e.pipWindow.id,
      i = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
      o = I(e),
      s = "".concat(n).concat(null != i ? i : "");
    return (0, r.jsx)(a.sNh, {
      id: s,
      label: o,
      action: () => S(e)
    }, s)
  }
  return (0, r.jsx)(a.v2r, {
    navId: "pip-menu",
    "aria-label": "switch PIP",
    onClose: t,
    onSelect: E,
    children: T().map(N)
  })
}
let I = function(e) {
  let {
    voiceChannelId: t,
    idle: n
  } = e, s = Array.from((0, i.e7)([_.Z], () => _.Z.pipWindows).values()).filter(e => e.component !== h.NYg.EMBED_IFRAME), l = (0, i.Wu)([f.Z], () => f.Z.getAllActiveStreamsForChannel(t)).filter(e => {
    var n;
    return e.ownerId !== (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
  }), c = 1 === s.length && s[0].component === h.NYg.EMBED_IFRAME || 0 === l.length, u = 1 === s.length && l.length <= 1;
  return c || u ? null : (0, r.jsx)(a.yRy, {
    position: "bottom",
    renderPopout: e => (0, r.jsx)(S, b({
      voiceChannelId: t,
      pipWindows: s,
      idle: n
    }, e)),
    children: e => (0, r.jsx)(a.P3F, O(b({
      className: E.menuIcon
    }, e), {
      children: (0, r.jsx)(a.Huf, {
        size: "md",
        color: o.Z.unsafe_rawColors.WHITE_500.css
      })
    }))
  })
}