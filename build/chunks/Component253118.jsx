/** Chunk was on 66866 **/
/** chunk id: 253118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var t, n;
  let {
    message: c,
    usernameHook: u,
    onClickPins: d,
    compact: p
  } = e, m = (0, a.ZP)(c), f = m.nick, _ = u(m), g = () => {
    if (null == c.messageReference) return;
    let {
      channel_id: e,
      message_id: t
    } = c.messageReference;
    l.Z.jumpToMessage({
      channelId: e,
      messageId: t,
      flash: true
    })
  }, h = {
    iconNode: (0, r.jsx)(i.qQX, {
      size: "sm",
      color: "currentColor"
    })
  };
  return (0, r.jsx)(o.Z, (t = function(e) {
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
    children: null != c.messageReference ? null == d ? s.intl.format(s.t.lD5tur, {
      usernameHook: _,
      username: f,
      messageOnClick: g
    }) : s.intl.format(s.t.yIDvPD, {
      usernameHook: _,
      username: f,
      pinsActionOnClick: d,
      messageOnClick: g
    }) : null == d ? s.intl.format(s.t.vfkjq6, {
      usernameHook: _,
      username: f
    }) : s.intl.format(s.t.R7vZGR, {
      usernameHook: _,
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