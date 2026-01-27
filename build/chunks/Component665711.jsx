/** Chunk was on web.js **/
/** chunk id: 665711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk486020 = require("./486020.js"),
  Chunk519443 = require("./519443.js");
let s = 20,
  l = e => {
    let {
      application: t,
      iconSize: n = s
    } = e, l = i.useMemo(() => a.Ay.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      size: n
    }), [t, n]);
    return (0, r.jsx)("img", {
      className: o.I,
      src: l,
      alt: "",
      height: n,
      width: n
    })
  }