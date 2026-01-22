/** Chunk was on web.js **/
/** chunk id: 320061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk710133 = require("./710133.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    analyticsSection: t,
    buttonText: n
  } = e;
  return (0, r.jsx)(i.Button, {
    variant: "expressive",
    icon: i.tvc,
    text: null != n ? n : s.intl.string(s.t["8Sh5fg"]),
    onClick: () => (0, a.A)({
      section: t
    })
  })
}