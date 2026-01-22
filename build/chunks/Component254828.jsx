/** Chunk was on web.js **/
/** chunk id: 254828, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk253932 = require("./253932.js"),
  Chunk994500 = require("./994500.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    userId: t,
    onClick: n
  } = e;
  if (!(0, i.bG)([o.A], () => o.A.isIgnored(t))) return null;
  let c = () => {
    s.j0.updateSetting(true), n()
  };
  return (0, r.jsx)(a.QWc, {
    onClick: c,
    variant: "primary",
    size: "sm",
    textVariant: "text-sm/medium",
    text: l.intl.string(l.t.QbcRCJ)
  })
}