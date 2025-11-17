/** Chunk was on web.js **/
/** chunk id: 306290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => s
});
var Chunk587157 = require("./587157.js"),
  Chunk944576 = require("./944576.js"),
  Chunk852058 = require("./852058.js"),
  Chunk473749 = require("./473749.js");

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