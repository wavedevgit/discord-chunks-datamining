/** Chunk was on 16864 **/
/** chunk id: 372726, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk200330 = require("./200330.jsx"),
  Chunk321987 = require("./321987.jsx"),
  Chunk628103 = require("./628103.js");

function o(e) {
  let {
    data: t,
    onDenied: r,
    onError: o,
    onSuccess: d
  } = e, u = (0, c.n)(r, o, d), f = n.useCallback(e => u(t, e), [t, u]);
  return (0, a.jsx)(l.$, {
    removeChildWrapper: true,
    children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
      transitionState: s.ip4.ENTERED,
      clientId: t.clientId,
      scopes: t.scopes,
      showLogout: true,
      isTrustedName: true,
      callbackWithoutPost: f
    })
  })
}