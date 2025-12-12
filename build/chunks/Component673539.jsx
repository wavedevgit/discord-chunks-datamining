/** Chunk was on 7891 **/
/** chunk id: 673539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk979696 = require("./979696.js"),
  Chunk963876 = require("./963876.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.getToastsEnabled(e));
  return (0, i.jsx)(l.S89, {
    id: "show-call-chat-toasts",
    label: s.intl.string(s.t["5NL5vT"]),
    checked: t,
    action: () => o.Z.setCallChatToastsEnabled(e, !t)
  })
}