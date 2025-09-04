/** Chunk was on 93886 **/
/** chunk id: 20471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => d,
  j: () => c
}), require("./997841.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk812206 = require("./812206.js"),
  Chunk812967 = require("./812967.js"),
  Chunk146219 = require("./146219.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  var t, n, a, l, i;
  if (null == e) return null;
  if ((0, s.yE)(null != (t = e.flags) ? t : 0, o.udG.SOCIAL_LAYER_INTEGRATION) || (0, s.yE)(null != (n = e.flags) ? n : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let t of null != (a = e.linkedGames) ? a : []) {
    let e = r.Z.getApplication(t.id);
    if (null != e && ((0, s.yE)(null != (l = e.flags) ? l : 0, o.udG.SOCIAL_LAYER_INTEGRATION) || (0, s.yE)(null != (i = e.flags) ? i : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function d(e) {
  let t = a.useMemo(() => c(e), [e]),
    n = (0, i.t)(null == t ? true : t.id, "AUTHORIZE_REQUEST");
  return {
    canStartAuthorization: n,
    startAuthorization: a.useCallback(() => {
      null != t && n && l.Z.dispatchToSubscriptions("AUTHORIZE_REQUEST", e => e.socket.application.id === t.id, {})
    }, [n, t])
  }
}