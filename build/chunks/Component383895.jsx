/** Chunk was on 89311 **/
/** chunk id: 383895, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk499493 = require("./499493.jsx"),
  Chunk810568 = require("./810568.js");

function a(e) {
  var t, r;
  let {
    entry: a,
    viewId: s,
    officialGuildId: o
  } = e;
  return (0, n.jsx)(i.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, e), r = r = {
    onReaction: () => {
      (0, l.UE)({
        action: l.as.SendMessageUser,
        applicationId: a.extra.application_id,
        gameName: a.extra.game_name,
        recipientUserId: a.author_id,
        viewId: s,
        officialGuildId: o
      })
    },
    onRequestOpen: () => {
      (0, l.UE)({
        action: l.as.ClickMessageUser,
        applicationId: a.extra.application_id,
        gameName: a.extra.game_name,
        recipientUserId: a.author_id,
        viewId: s,
        officialGuildId: o
      })
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}