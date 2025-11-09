/** Chunk was on web.js **/
/** chunk id: 194255, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk461111 = require("./461111.js");

function l(e) {
  let {
    message: t
  } = e, {
    i18n: n
  } = i.useContext(a.KJ);
  return (0, r.jsx)("div", {
    className: s.emptyState,
    children: (0, r.jsx)(o.x, {
      variant: "text-md/medium",
      className: s.emptyStateText,
      children: null != t ? t : n.LISTBOX_EMPTY_STATE
    })
  })
}