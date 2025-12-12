/** Chunk was on web.js **/
/** chunk id: 251159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk732171 = require("./732171.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    analyticsSection: t,
    buttonText: n
  } = e;
  return (0, r.jsx)(i.Button, {
    variant: "expressive",
    icon: i.SrA,
    text: null != n ? n : a.intl.string(a.t["8Sh5fg"]),
    onClick: () => (0, o.Z)({
      section: t
    })
  })
}