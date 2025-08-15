/** Chunk was on web.js **/
/** chunk id: 48931, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk267097 = require("./267097.js"),
  Chunk752053 = require("./752053.jsx"),
  Chunk871017 = require("./871017.js");

function l(e) {
  let {
    onClose: t
  } = e, {
    refreshCategories: n
  } = (0, a.Z)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.xBx, {
      className: s.header,
      children: (0, r.jsx)(i.olH, {
        className: s.closeButton,
        onClick: t
      })
    }), (0, r.jsx)(o.Z, {
      onRetry: n,
      errorOrigin: o.i.GIFT_MODAL
    })]
  })
}