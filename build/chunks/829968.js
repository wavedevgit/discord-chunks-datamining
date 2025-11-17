/** Chunk was on web.js **/
/** chunk id: 829968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk439849 = require("./439849.js");

function a(e, t) {
  let [n, a] = r.useState();
  return r.useEffect(() => {
    if (null == e || null != t) return void a(true);
    let n = false;
    return (0, i.Z)().then(t => {
      null == t || n || t.identifyGame(e, (e, t) => {
        if (!n) {
          if (0 !== e || null == t.icon || "" === t.icon || null == t.name || "" === t.name) return void a(true);
          a("data:image/png;base64,".concat(t.icon))
        }
      })
    }).catch(() => {
      n || a(true)
    }), () => {
      n = true
    }
  }, [e, t]), null != t ? t : n
}