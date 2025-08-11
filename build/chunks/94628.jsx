/** Chunk was on 69773 **/
/** chunk id: 94628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk787025 = require("./787025.js"),
  Chunk944844 = require("./944844.js");

function c(e) {
  let {
    data: t,
    onDenied: n,
    onError: c,
    onSuccess: d
  } = e, u = (0, s.t)(n, c, d), f = r.useCallback(e => u(t, e), [t, u]);
  return <l.G removeChildWrapper={true}><i.OAuth2AuthorizeModal transitionState={o.Dvm.ENTERED} clientId={t.clientId} scopes={t.scopes} showLogout={true} isTrustedName={true} callbackWithoutPost={f} /></l.G>
}