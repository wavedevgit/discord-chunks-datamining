/** Chunk was on web.js **/
/** chunk id: 735246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk55160 = require("./55160.js"),
  Chunk442837 = require("./442837.js"),
  Chunk241601 = require("./241601.js"),
  Chunk406128 = require("./406128.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352536 = require("./352536.js");

function d(e) {
  let {
    children: t
  } = e, n = (0, a.e7)([l.default], () => l.default.locale), [d, f] = (0, o.R_)(e => [e.isLoading, e.error], i.X);
  return null != f ? (0, r.jsx)(s.Z, {
    title: c.intl.formatToPlainString(c.t["7basa2"], {
      locale: n
    }),
    note: (0, r.jsx)("span", {
      children: f.message
    })
  }) : d ? __OVERLAY__ ? null : (0, r.jsx)("div", {
    className: u.loading
  }) : null != t ? t : null
}