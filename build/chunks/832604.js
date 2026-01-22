/** Chunk was on web.js **/
/** chunk id: 832604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk306044 = require("./306044.js");
let o = new(a())({
  max: 1e3
});

function l(e, t) {
  let [n, i] = r.useState();
  return r.useEffect(() => {
    if (null == e || null != t) return void i(true);
    let n = o.get(e);
    if (null != n) return void i(n);
    let r = false;
    return (0, s.A)().then(t => {
      null == t || r || t.identifyGame(e, (t, n) => {
        if (r) return;
        if (0 !== t || null == n.icon || "" === n.icon || null == n.name || "" === n.name) return void i(true);
        let a = "data:image/png;base64,".concat(n.icon);
        o.set(e, a), i(a)
      })
    }).catch(() => {
      r || i(true)
    }), () => {
      r = true
    }
  }, [e, t]), null != t ? t : n
}