/** Chunk was on 39048 **/
/** chunk id: 383329, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => u
}), require("./264879.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk735321 = require("./735321.js"),
  Chunk760751 = require("./760751.js"),
  Chunk282435 = require("./282435.js");

function d(e) {
  var t;
  return null != (t = c.Bf.get(e)) ? t : 0
}

function u() {
  let e = (0, s.bG)([o.A], () => o.A.games),
    t = r.useMemo(() => l()(e).filter(e => (0, a.XX)(e)).map(e => ({
      id: e.id,
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return d(t)
    }).reverse().value(), [e]),
    n = r.useCallback((e, t) => d(t.item.value) - d(e.item.value), []);
  return {
    options: t,
    matchSorterOptions: r.useMemo(() => ({
      baseSort: n,
      keys: ["label"]
    }), [n])
  }
}