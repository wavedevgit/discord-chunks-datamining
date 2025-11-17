/** Chunk was on web.js **/
/** chunk id: 131388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk728285 = require("./728285.jsx");

function a(e) {
  let {
    renderWindow: t
  } = (0, r.useContext)(i.ZP), [n, a] = (0, r.useState)(() => {
    var n, r;
    return null != (r = null == (n = t.matchMedia(e)) ? true : n.matches) && r
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