/** Chunk was on web.js **/
/** chunk id: 662246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk249522 = require("./249522.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "vertical",
    [n] = (0, r.useState)(() => new i.A({
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
        return null != (t = null == (r = e.current) || null == (n = r.ownerDocument) ? true : n.defaultView) ? t : null
      }
    }));
  return n
}