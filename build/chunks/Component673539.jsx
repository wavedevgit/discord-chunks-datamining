/** Chunk was on web.js **/
/** chunk id: 673539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk979696 = require("./979696.js"),
  Chunk963876 = require("./963876.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getToastsEnabled(e));
  return (0, r.jsx)(o.S89, {
    id: "show-call-chat-toasts",
    label: l.intl.string(l.t["5NL5vb"]),
    checked: t,
    action: () => s.Z.setCallChatToastsEnabled(e, !t)
  })
}