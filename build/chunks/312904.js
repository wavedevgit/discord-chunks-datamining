/** Chunk was on web.js **/
/** chunk id: 312904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk473749 = require("./473749.js");
let i = e => {
    e.effects.forEach(e => {
      let {
        src: t
      } = e, n = document.createElement("link");
      n.rel = "prefetch", n.href = t, n.onload = () => {
        document.body.removeChild(n)
      }, document.body.appendChild(n)
    })
  },
  a = e => {
    r.useEffect(() => {
      if ("loading" === document.readyState) {
        let t = () => {
          i(e)
        };
        return document.addEventListener("DOMContentLoaded", t), () => {
          document.removeEventListener("DOMContentLoaded", t)
        }
      }
      i(e)
    }, [e])
  }