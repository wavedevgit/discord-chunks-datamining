/** Chunk was on 59275 **/
/** chunk id: 4196, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
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

function E(e) {
  let {
    sortedSkuIds: t,
    isPremiumUser: l,
    prioritizeUserDiscounts: r,
    orbsSupportedOnly: E
  } = e, v = (0, i.bG)([o.A], () => o.A.hasConsented(m.YAq.PERSONALIZATION)), A = n.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[a.i.RECOMMENDED]) ? e : []
  }, [t]), x = n.useMemo(() => {
    var e;
    return null != (e = null == t ? true : t[a.i.POPULAR]) ? e : []
  }, [t]), S = A.length > 0 && v, [C, O] = n.useState(S ? a.i.RECOMMENDED : a.i.POPULAR), _ = (0, i.bG)([c.A], () => c.A.productsWithVariantsAsGroup), y = n.useMemo(() => (0, d.CE)(_), [_]), j = (0, i.bG)([u.A], () => u.A.getUserDiscounts()), L = (0, b.A)(), T = (0, f.p)(), [I, N] = n.useState([]), k = n.useCallback(() => {
    O(a.i.RANDOM), N(s().shuffle(y))
  }, [y]);
  n.useEffect(() => {
    N(s().shuffle(y))
  }, [y]);
  let R = n.useMemo(() => {
    let e = [];
    if (C === a.i.RECENT) e = y;
    else if (C === a.i.PRICE_LOW_TO_HIGH) e = (0, d.bf)([...y], l, E);
    else if (C === a.i.RECOMMENDED) {
      let t = L(A);
      e = r ? (0, d.Bs)(t, j) : t
    } else if (C === a.i.POPULAR) {
      let t = L(x);
      e = r ? (0, d.Bs)(t, j) : t
    } else C === a.i.RANDOM && (e = I);
    return E ? (0, p.ex)(T(e)) : T(e)
  }, [C, E, T, l, y, L, A, r, j, x, I]);
  return {
    sortType: C,
    setSortType: O,
    sortedItems: (0, g.X)(R),
    sortOptions: n.useMemo(() => {
      let e = [{
        value: a.i.POPULAR,
        label: h.intl.string(h.t.Y68e5p)
      }, {
        value: a.i.RECENT,
        label: h.intl.string(h.t["51Bhiz"])
      }, {
        value: a.i.PRICE_LOW_TO_HIGH,
        label: h.intl.string(h.t.m8RVU2)
      }];
      return S && e.unshift({
        value: a.i.RECOMMENDED,
        label: h.intl.string(h.t.zPWgFG)
      }), e
    }, [S]),
    showRecommendationOption: S,
    shuffleProducts: k
  }
}