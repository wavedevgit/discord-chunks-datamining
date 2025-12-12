/** Chunk was on web.js **/
/** chunk id: 803998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk920103 = require("./920103.js");

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "vertical",
    [n] = (0, r.useState)(() => new i.Z({
      tension: 200,
      friction: 35,
      mass: 2,
      clamp: true,
      callback: (n, r) => {
        let {
          current: i
        } = e;
        if (null == i) return r();
        "horizontal" === t ? i.scrollLeft = n : i.scrollTop = n
      },
      getNodeWindow: () => {
        var t, n, r;
        return null != (r = null == (n = e.current) || null == (t = n.ownerDocument) ? true : t.defaultView) ? r : null
      }
    }));
  return n
}