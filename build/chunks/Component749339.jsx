/** Chunk was on web.js **/
/** chunk id: 749339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk292419 = require("./292419.js"),
  Chunk23750 = require("./23750.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  if (!s.wS) return null;
  let t = e.getContentMessage(),
    n = (0, a.hv)(t) ? (0, o.np)(t.components) : t.content;
  return null == n || 0 === n.length ? null : (0, r.jsx)(i.sNh, {
    id: "copy-text",
    label: l.intl.string(l.t.JrGD7O),
    icon: i.TIy,
    action: () => {
      (0, s.JG)(n)
    }
  })
}