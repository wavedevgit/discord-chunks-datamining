/** Chunk was on web.js **/
/** chunk id: 149505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk860923 = require("./860923.js"),
  Chunk475741 = require("./475741.js");
let s = [0, 68, 123, 61, 165, 224, 181],
  l = [684, 720, 774, 798, 720, 803, 815],
  c = () => {
    let e = (0, a.A)(),
      t = i.useMemo(() => null == e ? [] : Object.values(null == e ? true : e.clouds), [e]);
    return (0, r.jsx)("div", {
      className: o.P,
      children: t.map((e, t) => {
        let n = t > s.length - 1 ? 0 : t;
        return (0, r.jsx)("img", {
          className: o.g,
          style: {
            top: l[n],
            animationDelay: "".concat(s[n], "s")
          },
          src: e,
          alt: "Cloud"
        }, e)
      })
    })
  }