/** Chunk was on 89311 **/
/** chunk id: 383895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk499493 = require("./499493.jsx"),
  Chunk810568 = require("./810568.js");

function l(e) {
  var t, n;
  let {
    entry: l,
    viewId: s,
    officialGuildId: o
  } = e;
  return (0, a.jsx)(i.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({}, e), n = n = {
    onReaction: () => {
      (0, r.UE)({
        action: r.as.SendMessageUser,
        applicationId: l.extra.application_id,
        gameName: l.extra.game_name,
        recipientUserId: l.author_id,
        viewId: s,
        officialGuildId: o
      })
    },
    onRequestOpen: () => {
      (0, r.UE)({
        action: r.as.ClickMessageUser,
        applicationId: l.extra.application_id,
        gameName: l.extra.game_name,
        recipientUserId: l.author_id,
        viewId: s,
        officialGuildId: o
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}