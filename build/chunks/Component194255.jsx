/** Chunk was on web.js **/
/** chunk id: 194255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk443569 = require("./443569.js");

function l(e) {
  let {
    message: t
  } = e, {
    i18n: n
  } = i.useContext(o.KJ);
  return (0, r.jsx)("div", {
    className: s.emptyState,
    children: (0, r.jsx)(a.x, {
      variant: "text-md/medium",
      className: s.emptyStateText,
      children: null != t ? t : n.LISTBOX_EMPTY_STATE
    })
  })
}