/** Chunk was on 69773 **/
/** chunk id: 94628, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk787025 = require("./787025.jsx"),
  Chunk944844 = require("./944844.js");

function c(e) {
  let {
    data: t,
    onDenied: n,
    onError: c,
    onSuccess: d
  } = e, u = (0, l.t)(n, c, d), f = a.useCallback(e => u(t, e), [t, u]);
  return (0, r.jsx)(s.G, {
    removeChildWrapper: true,
    children: (0, r.jsx)(i.OAuth2AuthorizeModal, {
      transitionState: o.Dvm.ENTERED,
      clientId: t.clientId,
      scopes: t.scopes,
      showLogout: true,
      isTrustedName: true,
      callbackWithoutPost: f
    })
  })
}