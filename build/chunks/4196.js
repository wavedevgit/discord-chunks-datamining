/** Chunk was on 59275 **/
/** chunk id: 4196, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk12544 = require("./12544.js"),
  Chunk311907 = require("./311907.js"),
  Chunk153488 = require("./153488.js"),
  Chunk590180 = require("./590180.js"),
  Chunk248352 = require("./248352.js"),
  Chunk993408 = require("./993408.js"),
  Chunk511265 = require("./511265.js"),
  Chunk313276 = require("./313276.js"),
  Chunk206077 = require("./206077.js"),
  Chunk623373 = require("./623373.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: n,
    prioritizeUserDiscounts: l,
    orbsSupportedOnly: h
  } = e, E = (0, i.bG)([o.A], () => o.A.hasConsented(_.YAq.PERSONALIZATION)), v = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[a.i.RECOMMENDED]) ? e : []
  }, [t]), C = r.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[a.i.POPULAR]) ? e : []
  }, [t]), A = v.length > 0 && E, [S, x] = r.useState(A ? a.i.RECOMMENDED : a.i.POPULAR), O = (0, i.bG)([c.A], () => c.A.productsWithVariantsAsGroup), y = r.useMemo(() => (0, d.CE)(O), [O]), j = (0, i.bG)([u.A], () => u.A.getUserDiscounts()), T = (0, f.A)(), L = (0, g.p)(), [I, k] = r.useState([]), N = r.useCallback(() => {
    x(a.i.RANDOM), k(s().shuffle(y))
  }, [y]);
  r.useEffect(() => {
    k(s().shuffle(y))
  }, [y]);
  let R = r.useMemo(() => {
    let e = [];
    if (S === a.i.RECENT) e = y;
    else if (S === a.i.PRICE_LOW_TO_HIGH) e = (0, d.bf)([...y], n, h);
    else if (S === a.i.RECOMMENDED) {
      let t = T(v);
      e = l ? (0, d.Bs)(t, j) : t
    } else if (S === a.i.POPULAR) {
      let t = T(C);
      e = l ? (0, d.Bs)(t, j) : t
    } else S === a.i.RANDOM && (e = I);
    return h ? (0, p.ex)(L(e)) : L(e)
  }, [S, h, L, n, y, T, v, l, j, C, I]);
  return {
    sortType: S,
    setSortType: x,
    sortedItems: (0, m.X)(R),
    sortOptions: r.useMemo(() => {
      let e = [{
        value: a.i.POPULAR,
        label: b.intl.string(b.t.Y68e5p)
      }, {
        value: a.i.RECENT,
        label: b.intl.string(b.t["51Bhiz"])
      }, {
        value: a.i.PRICE_LOW_TO_HIGH,
        label: b.intl.string(b.t.m8RVU2)
      }];
      return A && e.unshift({
        value: a.i.RECOMMENDED,
        label: b.intl.string(b.t.zPWgFG)
      }), e
    }, [A]),
    showRecommendationOption: A,
    shuffleProducts: N
  }
}