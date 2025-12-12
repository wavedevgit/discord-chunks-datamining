/** Chunk was on web.js **/
/** chunk id: 450096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => s
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js");
let o = new Worker(new URL("/assets/" + require.u("77459"), require.b));

function a(e) {
  return new Promise(t => {
    let n = (0, i.Z)(),
      r = e => {
        let {
          data: {
            id: i,
            png: a
          }
        } = e;
        n === i && (t(a), o.removeEventListener("message", r))
      };
    o.addEventListener("message", r), o.postMessage({
      id: n,
      placeholderData: e
    })
  })
}

function s(e, t, n) {
  let i = n && 1 === t && null != e,
    [o, s] = r.useState(true);
  return r.useEffect(() => {
    let t = false;
    return i && a(e).then(e => {
      t || s(e)
    }), () => {
      t = true
    }
  }, [e, i]), o
}