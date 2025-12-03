/** Chunk was on web.js **/
/** chunk id: 249996, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk75100 = require("./75100.js");

function c(e) {
  let {
    redactionType: t,
    label: n
  } = e, c = i.useMemo(() => {
    switch (t) {
      case o.Q4.BLUR:
        return a.XBm;
      case o.Q4.BLOCK:
        return a.t6m;
      case o.Q4.SHOW:
        return a.tEF;
      default:
        return null
    }
  }, [t]);
  return (0, r.jsxs)("div", {
    className: l.rowContainer,
    children: [null != c && (0, r.jsx)(c, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: n
    })]
  })
}
let u = Chunk473749.memo(function(e) {
  let {
    option: t
  } = e;
  return (0, r.jsx)(c, {
    redactionType: t.value,
    label: t.label
  })
})