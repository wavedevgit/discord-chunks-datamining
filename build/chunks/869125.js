/** Chunk was on web.js **/
/** chunk id: 869125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => o
});
var Chunk564949 = require("./564949.js"),
  Chunk138026 = require("./138026.js"),
  Chunk74172 = require("./74172.js"),
  Chunk64700 = require("./64700.js");

function o(e) {
  let {
    selectionManager: t,
    collection: n,
    disabledKeys: o,
    ref: l,
    keyboardDelegate: c,
    layoutDelegate: u
  } = e, d = (0, a.Q)({
    usage: "search",
    sensitivity: "base"
  }), f = t.disabledBehavior, p = (0, s.useMemo)(() => c || new(0, i.n)({
    collection: n,
    disabledKeys: o,
    disabledBehavior: f,
    ref: l,
    collator: d,
    layoutDelegate: u
  }), [c, u, n, o, l, d, f]), {
    collectionProps: _
  } = (0, r.y)({
    ...e,
    ref: l,
    selectionManager: t,
    keyboardDelegate: p
  });
  return {
    listProps: _
  }
}