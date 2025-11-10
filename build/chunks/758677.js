/** Chunk was on web.js **/
/** chunk id: 758677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => s,
  t: () => l
}), require("./997841.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk812206 = require("./812206.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  var t, n, r, s, l;
  if (null == e) return null;
  if ((0, a.yE)(null != (t = e.flags) ? t : 0, o.udG.SOCIAL_LAYER_INTEGRATION) || (0, a.yE)(null != (n = e.flags) ? n : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let t of null != (r = e.linkedGames) ? r : []) {
    let e = i.Z.getApplication(t.id);
    if (null != e && ((0, a.yE)(null != (s = e.flags) ? s : 0, o.udG.SOCIAL_LAYER_INTEGRATION) || (0, a.yE)(null != (l = e.flags) ? l : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function l(e) {
  return r.useMemo(() => s(e), [e])
}