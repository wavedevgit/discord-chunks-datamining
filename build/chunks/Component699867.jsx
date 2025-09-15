/** Chunk was on web.js **/
/** chunk id: 699867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk98460 = require("./98460.js"),
  Chunk87454 = require("./87454.jsx");

function s(e) {
  let {
    items: t,
    onChange: n
  } = e, [s, l] = (0, a.Z)(), c = (0, i.useCallback)(e => {
    l(e), null == n || n(e)
  }, [l, n]);
  return (0, r.jsx)(r.Fragment, {
    children: t.filter(e => isNaN(Number(e))).map(e => (0, r.jsx)(o.Z, {
      content: e,
      onChange: c
    }, e))
  })
}