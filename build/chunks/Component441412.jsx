/** Chunk was on 64935 **/
/** chunk id: 441412, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  var t, n;
  let {
    message: c,
    usernameHook: u,
    onClickPins: d,
    compact: p
  } = e, m = (0, a.Ay)(c), f = m.nick, g = u(m), _ = () => {
    if (null == c.messageReference) return;
    let {
      channel_id: e,
      message_id: t
    } = c.messageReference;
    l.A.jumpToMessage({
      channelId: e,
      messageId: t,
      flash: true
    })
  }, h = {
    iconNode: (0, r.jsx)(i.tsw, {
      size: "sm",
      color: "currentColor"
    })
  };
  return (0, r.jsx)(s.A, (t = function(e) {
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
  }({}, h), n = n = {
    timestamp: c.timestamp,
    compact: p,
    children: null != c.messageReference ? null == d ? o.intl.format(o.t.lD5tup, {
      usernameHook: g,
      username: f,
      messageOnClick: _
    }) : o.intl.format(o.t.yIDvPL, {
      usernameHook: g,
      username: f,
      pinsActionOnClick: d,
      messageOnClick: _
    }) : null == d ? o.intl.format(o.t.vfkjqx, {
      usernameHook: g,
      username: f
    }) : o.intl.format(o.t.R7vZGZ, {
      usernameHook: g,
      username: f,
      pinsActionOnClick: d
    })
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
}