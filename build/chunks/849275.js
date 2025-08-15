/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480294 = require("./480294.js"),
  Chunk597688 = require("./597688.js"),
  Chunk615006 = require("./615006.js"),
  Chunk884697 = require("./884697.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk934760 = require("./934760.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    l = (0, o.e7)([s.Z], () => s.Z.hasConsented(b.pjP.PERSONALIZATION)),
    h = n.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[i.m.RECOMMENDED]) ? t : []
    }, [e]),
    _ = n.useMemo(() => {
      var t;
      return null != (t = null == e ? true : e[i.m.POPULAR]) ? t : []
    }, [e]),
    v = h.length > 0 && l,
    [O, C] = n.useState(v ? i.m.RECOMMENDED : i.m.POPULAR),
    E = (0, f.Z)(),
    y = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
    S = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
    x = (0, p.a)(),
    [j, P] = n.useState([]),
    T = n.useCallback(() => {
      C(i.m.RANDOM), P(a().shuffle(y))
    }, [y]);
  n.useEffect(() => {
    P(a().shuffle(y))
  }, [y]);
  let L = n.useMemo(() => {
    let e = [];
    return O === i.m.RECENT ? e = y : O === i.m.PRICE_LOW_TO_HIGH ? e = (0, d.hC)([...y], t) : O === i.m.RECOMMENDED ? e = r ? (0, d.Qf)(E(h), S) : E(h) : O === i.m.POPULAR ? e = r ? (0, d.Qf)(E(_), S) : E(_) : O === i.m.RANDOM && (e = j), x(e)
  }, [O, x, y, j, t, E, h, _, S, r]);
  return {
    sortType: O,
    setSortType: C,
    sortedItems: (0, g.l)(L),
    sortOptions: n.useMemo(() => {
      let e = [{
        value: i.m.POPULAR,
        label: m.intl.string(m.t["1wQj4O"])
      }, {
        value: i.m.RECENT,
        label: m.intl.string(m.t["6NZpt7"])
      }, {
        value: i.m.PRICE_LOW_TO_HIGH,
        label: m.intl.string(m.t.RTG4yM)
      }];
      return v && e.unshift({
        value: i.m.RECOMMENDED,
        label: m.intl.string(m.t.JrlKlp)
      }), e
    }, [v]),
    showRecommendationOption: v,
    shuffleProducts: T
  }
}