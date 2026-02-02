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
  return (0, l.bG)([i.A], () => _(e, t))
}

function b(e, t, n, l, i) {
  (0, o.TG)(n, l => {
    let r = _(t, n);
    if (e && r || !e && !r) returnfalse;
    l.dismissedGuildContent = (e ? s.Vf : s.We)(l.dismissedGuildContent, t)
  }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), l && a.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
    type: r.V[t],
    guild_id: n,
    action: null != i ? i : c.i.UNKNOWN
  })
}

function m(e, t, n, l) {
  b(true, e, t, n, l)
}

function f(e, t) {
  b(false, e, t)
}