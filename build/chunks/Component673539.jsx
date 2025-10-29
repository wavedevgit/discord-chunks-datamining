/** Chunk was on 88647 **/
/** chunk id: 673539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk979696 = require("./979696.js"),
  Chunk963876 = require("./963876.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getToastsEnabled(e));
  return (0, r.jsx)(l.S89, {
    id: "show-call-chat-toasts",
    label: s.intl.string(s.t["5NL5vT"]),
    checked: t,
    action: () => o.Z.setCallChatToastsEnabled(e, !t)
  })
}