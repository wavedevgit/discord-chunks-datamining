/** Chunk was on 60118 **/
/** chunk id: 383329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => d
}), require("./264879.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk735321 = require("./735321.js"),
  Chunk760751 = require("./760751.js"),
  Chunk282435 = require("./282435.js");

function u(e) {
  var t;
  return null != (t = c.Bf.get(e)) ? t : 0
}

function d() {
  let e = (0, a.bG)([s.A], () => s.A.games),
    t = r.useMemo(() => i()(e).filter(e => (0, o.XX)(e)).map(e => ({
      id: e.id,
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return u(t)
    }).reverse().value(), [e]),
    n = r.useCallback((e, t) => u(t.item.value) - u(e.item.value), []);
  return {
    options: t,
    matchSorterOptions: r.useMemo(() => ({
      baseSort: n,
      keys: ["label"]
    }), [n])
  }
}