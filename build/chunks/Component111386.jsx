/** Chunk was on web.js **/
/** chunk id: 111386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk555412 = require("./555412.js");
let d = e => {
  let {
    children: t
  } = e, [n, d] = (0, s.US)([a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]), [f, p] = i.useState(false), _ = i.useRef(null);
  i.useEffect(() => {
    let e = setTimeout(() => {
      p(true)
    }, 300);
    return () => clearTimeout(e)
  }, []);
  let m = i.useCallback(() => {
    d(l.L.USER_DISMISS)
  }, [d]);
  return n !== a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP ? t : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: _,
      children: t
    }), (0, r.jsx)(o.J, {
      targetElementRef: _,
      shouldShow: f,
      onRequestClose: m,
      position: "left",
      title: c.intl.string(c.t.V5y3qZ),
      body: c.intl.string(c.t.eSDHDk),
      graphic: {
        type: "image",
        src: u.Z
      }
    })]
  })
}