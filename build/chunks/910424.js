/** Chunk was on 79120 **/
n.d(t, {
  Z: () => v
}), n(47120);
var r = n(200651);
n(192379);
var l = n(442837),
  i = n(481060),
  o = n(572691),
  a = n(287734),
  s = n(872810),
  c = n(40851),
  u = n(102172),
  d = n(199902),
  f = n(592125),
  p = n(585483),
  m = n(915863),
  g = n(981631),
  b = n(388032),
  y = n(156187);

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    isCurrentUser: t,
    color: n,
    look: v,
    applicationStream: j,
    onAction: S
  } = e, {
    activeStream: P,
    watchingOtherStream: N
  } = (0, l.cj)([d.Z], () => ({
    activeStream: d.Z.getActiveStreamForApplicationStream(j),
    watchingOtherStream: null != j && d.Z.getAllActiveStreamsForChannel(j.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== j.ownerId
    }).length > 0
  })), x = (0, l.e7)([f.Z], () => f.Z.getChannel(null == j ? void 0 : j.channelId)), [I, E] = (0, u.wq)(x), Z = (0, c.Aq)(), w = null != P && null != j && P.state !== g.jm8.ENDED && P.ownerId === j.ownerId, T = e => {
    null != j && (null == S || S(), a.default.selectVoiceChannel(j.channelId), w || (0, s.iV)(j, {
      forceMultiple: e
    }), Z.dispatch(g.CkL.POPOUT_CLOSE), p.S.dispatch(g.CkL.MODAL_CLOSE), o.Z.popAll())
  };
  if (null == j) return null;
  let C = (0, u.P9)(E);
  t ? C = b.NW.string(b.t.XvBdeX) : w && (C = b.NW.string(b.t.JH1SJy));
  let A = {
    color: n,
    look: v
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.Z, h(O({
      disabled: t || w || !I,
      onClick: () => T(!1)
    }, A), {
      fullWidth: !0,
      children: [(0, r.jsx)(i.hGI, {
        size: "md",
        color: "currentColor",
        className: y.streamIcon
      }), C]
    }), "play"), N && !w ? (0, r.jsx)(i.ua7, {
      text: b.NW.string(b.t.wCrzur),
      children: e => (0, r.jsx)(m.Z, h(O(h(O({}, e), {
        onClick: () => {
          var t;
          null === (t = e.onClick) || void 0 === t || t.call(e), T(!0)
        }
      }), A), {
        className: y.iconButton,
        size: y.iconButtonSize,
        children: (0, r.jsx)(i.OgY, {
          size: "xs",
          color: "currentColor",
          className: y.iconSize
        })
      }))
    }) : null]
  })
}