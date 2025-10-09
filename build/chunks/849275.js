/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480294 = require("./480294.js"),
  Chunk597688 = require("./597688.js"),
  Chunk615006 = require("./615006.js"),
  Chunk884697 = require("./884697.js"),
  Chunk370039 = require("./370039.js"),
  Chunk309956 = require("./309956.js"),
  Chunk937510 = require("./937510.js"),
  Chunk934760 = require("./934760.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: n,
    prioritizeUserDiscounts: l,
    tab: b
  } = e, E = (0, a.e7)([o.Z], () => o.Z.hasConsented(_.pjP.PERSONALIZATION)), S = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[i.m.RECOMMENDED]) ? e : []
  }, [t]), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[i.m.POPULAR]) ? e : []
  }, [t]), x = S.length > 0 && E, [O, y] = r.useState(x ? i.m.RECOMMENDED : i.m.POPULAR), T = (0, C.Z)(), j = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), k = (0, a.e7)([u.Z], () => u.Z.getUserDiscounts()), L = (0, g.a)(), I = (0, f.s)(), P = r.useMemo(() => b === h.AW.ORBS ? I(T(v), n) : j, [j, n, b, I, T, v]), N = r.useMemo(() => b === h.AW.ORBS ? I(T(v), n) : T(v), [n, b, I, T, v]), B = r.useMemo(() => b === h.AW.ORBS ? I(T(S), n) : T(S), [n, b, I, T, S]), [A, R] = r.useState([]), Z = r.useCallback(() => {
    y(i.m.RANDOM), R(s().shuffle(P))
  }, [P]);
  r.useEffect(() => {
    R(s().shuffle(P))
  }, [P]);
  let w = r.useMemo(() => {
    let e = [];
    return O === i.m.RECENT ? e = P : O === i.m.PRICE_LOW_TO_HIGH ? e = b === h.AW.ORBS ? (0, d.DV)([...P], n) : (0, d.hC)([...P], n) : O === i.m.RECOMMENDED ? e = l ? (0, d.Qf)(B, k) : B : O === i.m.POPULAR ? e = l ? (0, d.Qf)(N, k) : N : O === i.m.RANDOM && (e = A), L(e)
  }, [O, L, P, b, n, l, B, k, N, A]);
  return {
    sortType: O,
    setSortType: y,
    sortedItems: (0, p.l)(w),
    sortOptions: r.useMemo(() => {
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
      return x && e.unshift({
        value: i.m.RECOMMENDED,
        label: m.intl.string(m.t.JrlKlp)
      }), e
    }, [x]),
    showRecommendationOption: x,
    shuffleProducts: Z
  }
}