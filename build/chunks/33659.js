/** Chunk was on web.js **/
/** chunk id: 33659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk861382 = require("./861382.js"),
  Chunk167074 = require("./167074.js");

function s(e) {
  var t, n;
  let {
    channel: s,
    chatInputType: o
  } = e, l = null != (t = null == (n = o.commands) ? true : n.enabled) && t, c = (0, a.f)(s), {
    activeCommand: u
  } = (0, r.cf)([i.A], () => ({
    activeCommand: l ? i.A.getActiveCommand(s.id) : null
  }));
  return l && c && null == u
}