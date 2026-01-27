/** Chunk was on 52390 **/
/** chunk id: 45780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G$: () => m,
  _$: () => _,
  hk: () => b,
  zs: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk954571 = require("./954571.js"),
  Chunk460288 = require("./460288.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk355097 = require("./355097.js");

function p(e, t) {
  let n = a.A.getDismissedGuildContent(t);
  return null != n && (0, s.c0)(n, e)
}

function m(e, t) {
  return (0, r.bG)([a.A], () => p(e, t))
}

function f(e, t, n, r, a) {
  (0, i.TG)(n, r => {
    let l = p(t, n);
    if (e && l || !e && !l) returnfalse;
    r.dismissedGuildContent = (e ? s.Vf : s.We)(r.dismissedGuildContent, t)
  }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), r && o.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
    type: l.V[t],
    guild_id: n,
    action: null != a ? a : c.i.UNKNOWN
  })
}

function _(e, t, n, r) {
  f(true, e, t, n, r)
}

function b(e, t) {
  f(false, e, t)
}