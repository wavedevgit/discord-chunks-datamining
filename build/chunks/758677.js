/** Chunk was on web.js **/
/** chunk id: 758677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => s,
  t: () => l
}), require("./997841.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk812206 = require("./812206.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  var t, n, r, s, l;
  if (null == e) return null;
  if ((0, i.yE)(null != (t = e.flags) ? t : 0, o.udG.SOCIAL_LAYER_INTEGRATION) || (0, i.yE)(null != (n = e.flags) ? n : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED)) return e;
  for (let t of null != (r = e.linkedGames) ? r : []) {
    let e = a.Z.getApplication(t.id);
    if (null != e && ((0, i.yE)(null != (s = e.flags) ? s : 0, o.udG.SOCIAL_LAYER_INTEGRATION) || (0, i.yE)(null != (l = e.flags) ? l : 0, o.udG.SOCIAL_LAYER_INTEGRATION_LIMITED))) return e
  }
  return null
}

function l(e) {
  return r.useMemo(() => s(e), [e])
}