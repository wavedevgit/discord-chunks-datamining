/** Chunk was on 59275 **/
/** chunk id: 621653, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => i
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk248352 = require("./248352.js");

function i() {
  let e = n.useRef(new Map),
    t = (0, r.bG)([a.A], () => a.A.getUserDiscounts());
  n.useEffect(() => {
    let l = e.current,
      n = Date.now(),
      r = [];
    return t.forEach(e => {
      if (null == e.expiresAt) return;
      let t = e.expiresAt.getTime() - n;
      if (t <= 0) r.push(e.discountId);
      else {
        let n = setTimeout(() => {
          s.h.dispatch({
            type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
            discountIds: [e.discountId]
          }), l.delete(e.discountId)
        }, t);
        l.set(e.discountId, n)
      }
    }), r.length > 0 && s.h.dispatch({
      type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
      discountIds: r
    }), () => {
      l.forEach(e => clearTimeout(e)), l.clear()
    }
  }, [t])
}