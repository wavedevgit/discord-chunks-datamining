/** Chunk was on 45620 **/
/** chunk id: 908430, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk570140 = require("./570140.js"),
  Chunk615006 = require("./615006.js");

function o() {
  let e = r.useRef(new Map),
    t = (0, l.e7)([s.Z], () => s.Z.getUserDiscounts());
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
          a.Z.dispatch({
            type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
            discountIds: [e.discountId]
          }), n.delete(e.discountId)
        }, t);
        n.set(e.discountId, r)
      }
    }), l.length > 0 && a.Z.dispatch({
      type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
      discountIds: l
    }), () => {
      n.forEach(e => clearTimeout(e)), n.clear()
    }
  }, [t])
}