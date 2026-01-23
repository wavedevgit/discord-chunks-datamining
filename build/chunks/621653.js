/** Chunk was on 59275 **/
/** chunk id: 621653, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => i
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk248352 = require("./248352.js");

function i() {
  let e = r.useRef(new Map),
    t = (0, l.bG)([a.A], () => a.A.getUserDiscounts());
  r.useEffect(() => {
    let n = e.current,
      r = Date.now(),
      l = [];
    return t.forEach(e => {
      if (null == e.expiresAt) return;
      let t = e.expiresAt.getTime() - r;
      if (t <= 0) l.push(e.discountId);
      else {
        let r = setTimeout(() => {
          s.h.dispatch({
            type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
            discountIds: [e.discountId]
          }), n.delete(e.discountId)
        }, Math.min(0x7fffffff, t));
        n.set(e.discountId, r)
      }
    }), l.length > 0 && s.h.dispatch({
      type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
      discountIds: l
    }), () => {
      n.forEach(e => clearTimeout(e)), n.clear()
    }
  }, [t])
}