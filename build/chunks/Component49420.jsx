/** Chunk was on web.js **/
/** chunk id: 49420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk315949 = require("./315949.js"),
  Chunk599062 = require("./599062.jsx"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    transitionState: t = i.ip4.ENTERED,
    onClose: n
  } = e, {
    refreshCategories: l
  } = (0, a.A)(), c = async () => {
    await n()
  };
  return (0, r.jsx)(i.Modal, {
    transitionState: t,
    onClose: c,
    size: "sm",
    title: s.intl.string(s.t["p8+qtU"]),
    actions: [],
    children: (0, r.jsx)(o.h, {
      onRetry: l,
      errorOrigin: o.A.GIFT_MODAL
    })
  })
}