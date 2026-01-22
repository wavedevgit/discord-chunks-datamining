/** Chunk was on web.js **/
/** chunk id: 638421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk942381 = require("./942381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk11057 = require("./11057.js"),
  Chunk721668 = require("./721668.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk230661 = require("./230661.js");

function d(e) {
  let {
    children: t
  } = e, n = (0, a.bG)([l.default], () => l.default.locale), [d, f] = (0, s.hs)(e => [e.isLoading, e.error], i.x);
  return null != f ? (0, r.jsx)(o.A, {
    title: c.intl.formatToPlainString(c.t["7basa2"], {
      locale: n
    }),
    note: (0, r.jsx)("span", {
      children: f.message
    })
  }) : d ? __OVERLAY__ ? null : (0, r.jsx)("div", {
    className: u.L
  }) : null != t ? t : null
}