/** Chunk was on web.js **/
/** chunk id: 221721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk605294 = require("./605294.js"),
  Chunk159447 = require("./159447.js"),
  Chunk473749 = require("./473749.js");

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