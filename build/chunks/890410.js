/** Chunk was on 52272 **/
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(739566),
  l = n(492593),
  s = n(930282),
  c = n(464891),
  u = n(767459);

function d(e) {
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

function p(e) {
  var t, n, {
      message: i,
      channel: p,
      content: m,
      className: f,
      compact: h,
      popoutProps: g,
      hideTimestamp: _ = !1,
      withFooter: b = !1
    } = e,
    v = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["message", "channel", "content", "className", "compact", "popoutProps", "hideTimestamp", "withFooter"]);
  let x = (0, a.ZP)(i);
  return (0, r.jsx)("div", {
    className: o()({
      [u.withFooter]: b
    }, u.embedCard, {
      [u.compact]: h
    }, f),
    children: (0, r.jsx)(l.Z, (t = d({}, v), n = n = {
      className: o()(u.messageContainer, {
        [u.compact]: h
      }),
      childrenMessageContent: (0, r.jsx)(s.ZP, {
        className: o()(u.__invalid_messageContent, {
          [u.compact]: h
        }),
        message: i,
        content: m
      }),
      childrenHeader: (0, r.jsx)(c.ZP, d({
        message: i,
        channel: p,
        author: x,
        guildId: null == p ? void 0 : p.guild_id,
        compact: h,
        hideTimestamp: _,
        className: o()(u.header, {
          [u.compact]: h
        })
      }, null != g ? g : {})),
      compact: h
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
  })
}