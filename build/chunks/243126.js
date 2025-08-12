/** Chunk was on 45620 **/
/** chunk id: 243126, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  N: () => m
}), require("./388685.js"), require("./290780.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480294 = require("./480294.js"),
  Chunk597688 = require("./597688.js"),
  Chunk615006 = require("./615006.js"),
  Chunk884697 = require("./884697.js"),
  Chunk26931 = require("./26931.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = function(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    l = (0, o.e7)([s.Z], () => s.Z.hasConsented(b.pjP.PERSONALIZATION)),
    m = n.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[i.m.RECOMMENDED]) ? t : []
    }, [e]),
    _ = n.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[i.m.POPULAR]) ? t : []
    }, [e]),
    v = m.length > 0 && l,
    [O, C] = n.useState(v ? i.m.RECOMMENDED : i.m.POPULAR),
    E = (0, p.u)(),
    S = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
    y = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
    x = (0, g.a)(),
    [j, T] = n.useState([]),
    P = n.useCallback(() => {
      C(i.m.RANDOM), T(a().shuffle(S))
    }, [S]);
  n.useEffect(() => {
    T(a().shuffle(S))
  }, [S]);
  let L = n.useMemo(() => {
    let e = [];
    return O === i.m.RECENT ? e = S : O === i.m.PRICE_LOW_TO_HIGH ? e = (0, d.hC)([...S], t) : O === i.m.RECOMMENDED ? e = r ? (0, d.Qf)(E(m), y) : E(m) : O === i.m.POPULAR ? e = r ? (0, d.Qf)(E(_), y) : E(_) : O === i.m.RANDOM && (e = j), x(e)
  }, [O, x, S, j, t, E, m, _, y, r]);
  return {
    sortType: O,
    setSortType: C,
    sortedItems: (0, f.l)(L),
    sortOptions: n.useMemo(() => {
      let e = [{
        value: i.m.POPULAR,
        label: h.intl.string(h.t["1wQj4O"])
      }, {
        value: i.m.RECENT,
        label: h.intl.string(h.t["6NZpt7"])
      }, {
        value: i.m.PRICE_LOW_TO_HIGH,
        label: h.intl.string(h.t.RTG4yM)
      }];
      return v && e.unshift({
        value: i.m.RECOMMENDED,
        label: h.intl.string(h.t.JrlKlp)
      }), e
    }, [v]),
    showRecommendationOption: v,
    shuffleProducts: P
  }
}