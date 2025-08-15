/** Chunk was on 66866 **/
/** chunk id: 890410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk739566 = require("./739566.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk930282 = require("./930282.jsx"),
  Chunk464891 = require("./464891.jsx"),
  Chunk62440 = require("./62440.js");

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
  var t, n, {
      message: i,
      channel: p,
      content: m,
      className: f,
      compact: _,
      popoutProps: g,
      hideTimestamp: h = false,
      withFooter: b = false
    } = e,
    E = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["message", "channel", "content", "className", "compact", "popoutProps", "hideTimestamp", "withFooter"]);
  let C = (0, a.ZP)(i);
  return (0, r.jsx)("div", {
    className: l()({
      [u.withFooter]: b
    }, u.embedCard, {
      [u.compact]: _
    }, f),
    children: (0, r.jsx)(o.Z, (t = d({}, E), n = n = {
      className: l()(u.messageContainer, {
        [u.compact]: _
      }),
      childrenMessageContent: (0, r.jsx)(s.ZP, {
        className: l()(u.__invalid_messageContent, {
          [u.compact]: _
        }),
        message: i,
        content: m,
        compact: null != _ && _
      }),
      childrenHeader: (0, r.jsx)(c.ZP, d({
        message: i,
        channel: p,
        author: C,
        guildId: null == p ? true : p.guild_id,
        compact: _,
        hideTimestamp: h,
        className: l()(u.header, {
          [u.compact]: _
        })
      }, null != g ? g : {})),
      compact: _,
      author: C
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