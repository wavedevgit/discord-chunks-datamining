/** Chunk was on web.js **/
/** chunk id: 662147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => s
});
var Chunk790361 = require("./790361.js"),
  Chunk840810 = require("./840810.js"),
  Chunk989509 = require("./989509.js"),
  Chunk647438 = require("./647438.js");

function s(e) {
  let {
    selectionManager: t,
    collection: n,
    disabledKeys: s,
    ref: l,
    keyboardDelegate: c,
    layoutDelegate: u
  } = e, d = (0, a.X)({
    usage: "search",
    sensitivity: "base"
  }), f = t.disabledBehavior, _ = (0, o.useMemo)(() => c || new(0, i.d)({
    collection: n,
    disabledKeys: s,
    disabledBehavior: f,
    ref: l,
    collator: d,
    layoutDelegate: u
  }), [c, u, n, s, l, d, f]), {
    collectionProps: p
  } = (0, r.g)({
    ...e,
    ref: l,
    selectionManager: t,
    keyboardDelegate: _
  });
  return {
    listProps: p
  }
}