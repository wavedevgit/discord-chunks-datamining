/** Chunk was on 50874 **/
r.d(t, {
  D: () => l
});
var n = r(255367);
r(73800);
var i = r(239091);

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function l(e, t, l, c, o) {
  let u = l.getGuildId();
  return null != u ? (0, i.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([r.e("70274"), r.e("97589"), r.e("80125"), r.e("42707")]).then(r.bind(r, 357823));
    return r => (0, n.jsx)(e, s(a({}, r), {
      user: t,
      channel: l,
      guildId: u,
      onInteraction: e => o("GuildVoiceUserContextMenu", e)
    }))
  }, c) : (0, i.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([r.e("80125"), r.e("47452")]).then(r.bind(r, 238296));
    return r => (0, n.jsx)(e, s(a({}, r), {
      user: t,
      channel: l,
      onInteraction: e => o("BaseVoiceUserContextMenu", e)
    }))
  }, c)
}