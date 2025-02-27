/** Chunk was on 28467 **/
s.d(t, {
  Z: () => i
});
var n = s(200651);
s(192379);
var l = s(739566),
  a = s(421399),
  r = s(47930);

function i(e) {
  var t, s, i, o;
  let c = (0, l.ZP)(e.message),
    u = (0, r.x)({
      message: e.message,
      channel: e.channel,
      user: null !== (s = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== s ? s : e.userOverride,
      compact: !!e.compact,
      isRepliedMessage: !!e.isRepliedMessage
    }),
    d = {};
  return null != u && (d[a.a.SYSTEM_TAG] = u), (0, n.jsx)(a.Z, (i = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
        return Object.getOwnPropertyDescriptor(s, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = s[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({}, e), o = o = {
    author: c,
    decorations: d
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      s.push.apply(s, n)
    }
    return s
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
  }), i))
}