/** Chunk was on web.js **/
/** chunk id: 992251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk406743 = require("./406743.js");

function l(e) {
  let {
    message: t
  } = e, {
    i18n: n
  } = i.useContext(a.VO);
  return (0, r.jsx)("div", {
    className: o.p,
    children: (0, r.jsx)(s.E, {
      variant: "text-md/medium",
      className: o.q,
      children: null != t ? t : n.LISTBOX_EMPTY_STATE
    })
  })
}