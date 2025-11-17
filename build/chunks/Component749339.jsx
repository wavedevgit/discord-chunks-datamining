/** Chunk was on 37220 **/
/** chunk id: 749339, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk292419 = require("./292419.js"),
  Chunk23750 = require("./23750.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  if (!o.wS) return null;
  let t = e.getContentMessage(),
    n = (0, a.hv)(t) ? (0, l.np)(t.components) : t.content;
  return null == n || 0 === n.length ? null : (0, r.jsx)(i.sNh, {
    id: "copy-text",
    label: s.intl.string(s.t.JrGD7E),
    icon: i.TIy,
    action: () => {
      (0, o.JG)(n)
    }
  })
}