/** Chunk was on web.js **/
/** chunk id: 510281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => s
});
var Chunk13163 = require("./13163.js"),
  Chunk3388 = require("./3388.js"),
  Chunk64700 = require("./64700.js");

function s(e, t) {
  let n = null == t ? true : t.isDisabled,
    [s, o] = (0, a.useState)(false);
  return (0, i.N)(() => {
    if ((null == e ? true : e.current) && !n) {
      let t = () => {
        e.current && o(!!(0, r.N$)(e.current, {
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
  }), !n && s
}