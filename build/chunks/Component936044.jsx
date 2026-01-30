/** Chunk was on 64935 **/
/** chunk id: 936044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk763754 = require("./763754.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk291812 = require("./291812.jsx"),
  Chunk643204 = require("./643204.jsx"),
  Chunk759522 = require("./759522.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e) {
  var t, n;
  let {
    message: i,
    channel: p,
    content: m,
    className: f,
    compact: g,
    popoutProps: _,
    hideTimestamp: h = false,
    withFooter: b = false
  } = e, A = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["message", "channel", "content", "className", "compact", "popoutProps", "hideTimestamp", "withFooter"]), y = (0, a.Ay)(i);
  return (0, r.jsx)("div", {
    className: l()({
      [u.Ym]: b
    }, u.gD, {
      [u.oE]: g
    }, f),
    children: (0, r.jsx)(s.A, (t = d({}, A), n = n = {
      className: l()(u.zC, {
        [u.oE]: g
      }),
      childrenMessageContent: (0, r.jsx)(o.Ay, {
        className: l()(u.__invalid_messageContent, {
          [u.oE]: g
        }),
        message: i,
        content: m,
        compact: null != g && g
      }),
      childrenHeader: (0, r.jsx)(c.Ay, d({
        message: i,
        channel: p,
        author: y,
        guildId: null == p ? true : p.guild_id,
        compact: g,
        hideTimestamp: h,
        className: l()(u.wx, {
          [u.oE]: g
        })
      }, null != _ ? _ : {})),
      compact: g,
      author: y
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