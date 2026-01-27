/** Chunk was on web.js **/
/** chunk id: 869125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => s
});
var Chunk564949 = require("./564949.js"),
  Chunk138026 = require("./138026.js"),
  Chunk74172 = require("./74172.js"),
  Chunk64700 = require("./64700.js");

function s(e) {
  let {
    selectionManager: t,
    collection: n,
    disabledKeys: s,
    ref: l,
    keyboardDelegate: c,
    layoutDelegate: u
  } = e, d = (0, a.Q)({
    usage: "search",
    sensitivity: "base"
  }), f = t.disabledBehavior, p = (0, o.useMemo)(() => c || new(0, i.n)({
    collection: n,
    disabledKeys: s,
    disabledBehavior: f,
    ref: l,
    collator: d,
    layoutDelegate: u
  }), [c, u, n, s, l, d, f]), {
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