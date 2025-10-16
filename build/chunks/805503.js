/** Chunk was on web.js **/
/** chunk id: 805503, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk750528 = require("./750528.js"),
  Chunk782013 = require("./782013.js"),
  Chunk647438 = require("./647438.js");

function o(e, t) {
  let n = null == t ? true : t.isDisabled,
    [o, s] = (0, a.useState)(false);
  return (0, i.b)(() => {
    if ((null == e ? true : e.current) && !n) {
      let t = () => {
        e.current && s(!!(0, r.QL)(e.current, {
          tabbable: true
        }).nextNode())
      };
      t();
      let n = new MutationObserver(t);
      return n.observe(e.current, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["tabIndex", "disabled"]
      }), () => {
        n.disconnect()
      }
    }
  }), !n && o
}