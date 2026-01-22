/** Chunk was on web.js **/
/** chunk id: 241524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk267102 = require("./267102.jsx");

function a(e) {
  let {
    renderWindow: t
  } = (0, r.useContext)(i.Ay), [n, a] = (0, r.useState)(() => {
    var n, r;
    return null != (n = null == (r = t.matchMedia(e)) ? true : r.matches) && n
  });
  return (0, r.useEffect)(() => {
    let n = t.matchMedia(e),
      r = e => {
        var t;
        a(null != (t = null == e ? true : e.matches) && t)
      };
    return r(n), null == n || n.addListener(r), () => null == n ? true : n.removeListener(r)
  }, [e, t]), n
}