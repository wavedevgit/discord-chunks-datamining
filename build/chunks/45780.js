/** Chunk was on 97246 **/
/** chunk id: 45780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G$: () => p,
  _$: () => m,
  hk: () => f,
  zs: () => _
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

function _(e, t) {
  let n = i.A.getDismissedGuildContent(t);
  return null != n && (0, s.c0)(n, e)
}

function p(e, t) {
  return (0, r.bG)([i.A], () => _(e, t))
}

function b(e, t, n, r, i) {
  (0, o.TG)(n, r => {
    let l = _(t, n);
    if (e && l || !e && !l) returnfalse;
    r.dismissedGuildContent = (e ? s.Vf : s.We)(r.dismissedGuildContent, t)
  }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), r && a.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
    type: l.V[t],
    guild_id: n,
    action: null != i ? i : c.i.UNKNOWN
  })
}

function m(e, t, n, r) {
  b(true, e, t, n, r)
}

function f(e, t) {
  b(false, e, t)
}