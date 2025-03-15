/** Chunk was on 54030 **/
n.d(t, {
  CK: () => s,
  SJ: () => u
});
var r = n(200651);
n(192379);
var o = n(704215),
  a = n(481060),
  i = n(645041),
  c = n(693546);

function l(e) {
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

function _(e, t) {
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

function u(e) {
  (0, a.ZDy)(async () => {
    let {
      default: t
    } = await n.e("95883").then(n.bind(n, 83521));
    return n => (0, r.jsx)(t, _(l({}, n), {
      onClose: t => {
        (0, i.Qd)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, e, !0, t), n.onClose()
      },
      guildId: e
    }))
  })
}

function s(e, t) {
  (0, a.ZDy)(async () => {
    let {
      default: o
    } = await Promise.all([n.e("82158"), n.e("72375")]).then(n.bind(n, 717057));
    return n => (0, r.jsx)(o, _(l({}, n), {
      onAccept: () => {
        null != t && c.Z.ackUserGuildJoinRequest(e, t), n.onClose()
      },
      guildId: e
    }))
  })
}
n(970606)