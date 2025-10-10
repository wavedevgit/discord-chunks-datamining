/** Chunk was on 45620 **/
/** chunk id: 849275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
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
    orbsSupportedOnly: b
  } = e, E = (0, s.e7)([a.Z], () => a.Z.hasConsented(_.pjP.PERSONALIZATION)), S = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[o.m.RECOMMENDED]) ? e : []
  }, [t]), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[o.m.POPULAR]) ? e : []
  }, [t]), O = S.length > 0 && E, [x, y] = r.useState(O ? o.m.RECOMMENDED : o.m.POPULAR), T = (0, C.Z)(), j = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup), L = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()), k = (0, g.a)(), I = (0, f.s)([h.cv]), [B, N] = r.useState([]), A = r.useCallback(() => {
    y(o.m.RANDOM), N(i().shuffle(j))
  }, [j]);
  r.useEffect(() => {
    N(i().shuffle(j))
  }, [j]);
  let P = r.useMemo(() => {
    let e = [];
    if (x === o.m.RECENT) e = j;
    else if (x === o.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, b);
    else if (x === o.m.RECOMMENDED) {
      let t = T(S);
      e = l ? (0, d.Qf)(t, L) : t
    } else if (x === o.m.POPULAR) {
      let t = T(v);
      e = l ? (0, d.Qf)(t, L) : t
    } else x === o.m.RANDOM && (e = B);
    return b ? I(k(e), n) : k(e)
  }, [x, b, I, k, n, j, T, S, l, L, v, B]);
  return {
    sortType: x,
    setSortType: y,
    sortedItems: (0, p.l)(P),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: o.m.POPULAR,
        label: m.intl.string(m.t["1wQj4O"])
      }, {
        value: o.m.RECENT,
        label: m.intl.string(m.t["6NZpt7"])
      }, {
        value: o.m.PRICE_LOW_TO_HIGH,
        label: m.intl.string(m.t.RTG4yM)
      }];
      return O && e.unshift({
        value: o.m.RECOMMENDED,
        label: m.intl.string(m.t.JrlKlp)
      }), e
    }, [O]),
    showRecommendationOption: O,
    shuffleProducts: A
  }
}