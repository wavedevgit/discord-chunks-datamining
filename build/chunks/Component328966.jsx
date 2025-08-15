/** Chunk was on 31978 **/
/** chunk id: 328966, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  H: () => s,
  Z: () => c
});
var r, Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk318713 = require("./318713.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk724913 = require("./724913.js"),
  s = ((r = {})[r.WITH_CONTENT = 0] = "WITH_CONTENT", r[r.AFTER_ACCESSORIES = 1] = "AFTER_ACCESSORIES", r);

function c(e) {
  let {
    message: t,
    compact: n,
    location: r
  } = e;
  return t.isEdited() && null != t.editedTimestamp ? r !== (n || null != t.content && 0 !== t.content.length ? 0 : 1) ? null : (0, l.jsxs)(l.Fragment, {
    children: [" ", (0, l.jsx)(o.Z, {
      timestamp: t.editedTimestamp,
      isEdited: true,
      isInline: false,
      children: (0, l.jsxs)("span", {
        className: a.edited,
        children: ["(", i.intl.string(i.t.C8sXIC), ")"]
      })
    })]
  }) : null
}