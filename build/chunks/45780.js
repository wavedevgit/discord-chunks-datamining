/** Chunk was on 20725 **/
/** chunk id: 45780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G$: () => f,
  _$: () => b,
  hk: () => y,
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
  let n = i.A.getDismissedGuildContent(t);
  return null != n && (0, o.c0)(n, e)
}

function f(e, t) {
  return (0, l.bG)([i.A], () => p(e, t))
}

function m(e, t, n, l, i) {
  (0, s.TG)(n, l => {
    let r = p(t, n);
    if (e && r || !e && !r) returnfalse;
    l.dismissedGuildContent = (e ? o.Vf : o.We)(l.dismissedGuildContent, t)
  }, e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION), l && a.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
    type: r.V[t],
    guild_id: n,
    action: null != i ? i : c.i.UNKNOWN
  })
}

function b(e, t, n, l) {
  m(true, e, t, n, l)
}

function y(e, t) {
  m(false, e, t)
}