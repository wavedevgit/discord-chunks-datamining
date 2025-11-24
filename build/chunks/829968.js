/** Chunk was on web.js **/
/** chunk id: 829968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk31775 = require("./31775.js"),
  a = require.n(Chunk31775),
  Chunk439849 = require("./439849.js");
let s = new(a())({
  max: 1e3
});

function l(e, t) {
  let [n, i] = r.useState();
  return r.useEffect(() => {
    if (null == e || null != t) return void i(true);
    let n = s.get(e);
    if (null != n) return void i(n);
    let r = false;
    return (0, o.Z)().then(t => {
      null == t || r || t.identifyGame(e, (t, n) => {
        if (r) return;
        if (0 !== t || null == n.icon || "" === n.icon || null == n.name || "" === n.name) return void i(true);
        let a = "data:image/png;base64,".concat(n.icon);
        s.set(e, a), i(a)
      })
    }).catch(() => {
      r || i(true)
    }), () => {
      r = true
    }
  }, [e, t]), null != t ? t : n
}