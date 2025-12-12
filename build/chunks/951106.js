/** Chunk was on web.js **/
/** chunk id: 951106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk349350 = require("./349350.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t) {
  let [n, l] = r.useState(false), c = r.useCallback(function() {
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return l(true), e(...n)
  }, [e, l]), u = (0, a.Z)(t);
  return r.useEffect(() => {
    if (n && false === u && true === t) {
      l(false);
      let e = () => {
        (0, i.showToast)({
          id: "account-linked-toast",
          message: s.intl.string(o.default.uG6teD),
          type: i.ToastType.SUCCESS
        })
      };
      if ("visible" === document.visibilityState) e();
      else {
        let t = () => {
          "visible" === document.visibilityState && (e(), document.removeEventListener("visibilitychange", t))
        };
        document.addEventListener("visibilitychange", t)
      }
    }
  }, [n, t, u]), c
}