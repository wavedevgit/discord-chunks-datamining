/** Chunk was on 69773 **/
/** chunk id: 94628, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk787025 = require("./787025.jsx"),
  Chunk944844 = require("./944844.js");

function l(e) {
  let {
    data: t,
    onDenied: n,
    onError: l,
    onSuccess: d
  } = e, u = (0, c.t)(n, l, d), f = r.useCallback(e => u(t, e), [t, u]);
  return (0, a.jsx)(s.G, {
    removeChildWrapper: true,
    children: (0, a.jsx)(o.OAuth2AuthorizeModal, {
      transitionState: i.Dvm.ENTERED,
      clientId: t.clientId,
      scopes: t.scopes,
      showLogout: true,
      isTrustedName: true,
      callbackWithoutPost: f
    })
  })
}