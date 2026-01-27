/** Chunk was on web.js **/
/** chunk id: 422973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk43105 = require("./43105.jsx"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk345394 = require("./345394.js");
let d = e => {
  let {
    children: t
  } = e, [n, d] = (0, s.kn)([a.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]), [f, p] = i.useState(false), _ = i.useRef(null);
  i.useEffect(() => {
    let e = setTimeout(() => {
      p(true)
    }, 300);
    return () => clearTimeout(e)
  }, []);
  let h = i.useCallback(() => {
    d(l.i.USER_DISMISS)
  }, [d]);
  return n !== a.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP ? t : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: _,
      children: t
    }), (0, r.jsx)(o.A, {
      targetElementRef: _,
      shouldShow: f,
      onRequestClose: h,
      position: "left",
      title: c.intl.string(c.t.V5y3qZ),
      body: c.intl.string(c.t.eSDHDk),
      graphic: {
        type: "image",
        src: u.A
      }
    })]
  })
}