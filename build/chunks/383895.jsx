/** Chunk was on 89311 **/
/** chunk id: 383895, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk499493 = require("./499493.js"),
  Chunk810568 = require("./810568.js");

function l(e) {
  var t, r;
  let {
    entry: l,
    viewId: o,
    officialGuildId: s
  } = e;
  return <a.Z{...t = function(e) {
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
      (0, i.UE)({
        action: i.as.SendMessageUser,
        applicationId: l.extra.application_id,
        gameName: l.extra.game_name,
        recipientUserId: l.author_id,
        viewId: o,
        officialGuildId: s
      })
    },
    onRequestOpen: () => {
      (0, i.UE)({
        action: i.as.ClickMessageUser,
        applicationId: l.extra.application_id,
        gameName: l.extra.game_name,
        recipientUserId: l.author_id,
        viewId: o,
        officialGuildId: s
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
  }), t} />
}