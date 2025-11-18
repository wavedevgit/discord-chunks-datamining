/** Chunk was on web.js **/
/** chunk id: 22928, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk768581 = require("./768581.js"),
  Chunk731535 = require("./731535.js");
let s = 20,
  l = e => {
    let {
      application: t,
      iconSize: n = s
    } = e, l = i.useMemo(() => a.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      size: n
    }), [t, n]);
    return (0, r.jsx)("img", {
      className: o.applicationIcon,
      src: l,
      alt: "",
      height: n,
      width: n
    })
  }