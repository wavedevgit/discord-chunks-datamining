/** Chunk was on 16864 **/
/** chunk id: 372726, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk200330 = require("./200330.jsx"),
  Chunk321987 = require("./321987.jsx"),
  Chunk628103 = require("./628103.js");

function c(e) {
  let {
    data: t,
    onDenied: r,
    onError: c,
    onSuccess: d
  } = e, u = (0, o.n)(r, c, d), p = a.useCallback(e => u(t, e), [t, u]);
  return (0, n.jsx)(l.$, {
    removeChildWrapper: true,
    children: (0, n.jsx)(i.OAuth2AuthorizeModal, {
      transitionState: s.ip4.ENTERED,
      clientId: t.clientId,
      scopes: t.scopes,
      showLogout: true,
      isTrustedName: true,
      callbackWithoutPost: p
    })
  })
}