/** Chunk was on web.js **/
/** chunk id: 829968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk439849 = require("./439849.js");

function o(e, t) {
  let [n, o] = r.useState();
  return r.useEffect(() => {
    if (null == e || null != t) return void o(true);
    (0, i.Z)().then(t => {
      null != t && t.identifyGame(e, (e, t) => {
        0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && o("data:image/png;base64,".concat(t.icon))
      })
    })
  }, [e, t]), null != t ? t : n
}