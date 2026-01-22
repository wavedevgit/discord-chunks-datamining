/** Chunk was on web.js **/
/** chunk id: 480504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => o
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js");
let a = new Worker(new URL("/assets/" + require.u("58531"), require.b));

function s(e) {
  return new Promise(t => {
    let n = (0, i.A)(),
      r = e => {
        let {
          data: {
            id: i,
            png: s
          }
        } = e;
        n === i && (t(s), a.removeEventListener("message", r))
      };
    a.addEventListener("message", r), a.postMessage({
      id: n,
      placeholderData: e
    })
  })
}

function o(e, t, n) {
  let i = n && 1 === t && null != e,
    [a, o] = r.useState(true);
  return r.useEffect(() => {
    let t = false;
    return i && s(e).then(e => {
      t || o(e)
    }), () => {
      t = true
    }
  }, [e, i]), a
}