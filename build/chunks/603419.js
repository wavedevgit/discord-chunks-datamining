/** Chunk was on web.js **/
/** chunk id: 603419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => a
});
var Chunk306024 = require("./306024.js"),
  Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");

function a(e, t) {
  let n = null == t ? true : t.isDisabled,
    [a, s] = (0, o.useState)(false);
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
  }), !n && a
}