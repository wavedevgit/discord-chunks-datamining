/** Chunk was on web.js **/
/** chunk id: 251159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    text: null != n ? n : o.intl.string(o.t["8Sh5fn"]),
    onClick: () => (0, a.Z)({
      section: t
    })
  })
}