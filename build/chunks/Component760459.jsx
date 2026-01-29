/** Chunk was on 13530 **/
/** chunk id: 760459, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk627968 = require("./627968.js"),
  Chunk942528 = require("./942528.jsx"),
  Chunk409626 = require("./409626.js");

function r(e) {
  var t, l;
  let {
    entry: r,
    viewId: s,
    officialGuildId: o,
    source: c
  } = e;
  return (0, n.jsx)(i.A, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var l = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(l);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
        return Object.getOwnPropertyDescriptor(l, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = l[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, e), l = l = {
    onReaction: () => {
      (0, a.Tn)({
        action: a.Ws.SendMessageUser,
        applicationId: r.extra.application_id,
        gameName: r.extra.game_name,
        recipientUserId: r.author_id,
        viewId: s,
        officialGuildId: o,
        source: c
      })
    },
    onRequestOpen: () => {
      (0, a.Tn)({
        action: a.Ws.ClickMessageUser,
        applicationId: r.extra.application_id,
        gameName: r.extra.game_name,
        recipientUserId: r.author_id,
        viewId: s,
        officialGuildId: o,
        source: c
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
  }), t))
}