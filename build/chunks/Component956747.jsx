/** Chunk was on 17534 **/
/** chunk id: 956747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk249288 = require("./249288.js"),
  Chunk221598 = require("./221598.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let t = (0, l.bG)([s.A], () => s.A.getToastsEnabled(e));
  return (0, r.jsx)(i.sLh, {
    id: "show-call-chat-toasts",
    label: o.intl.string(o.t["5NL5vT"]),
    checked: t,
    action: () => a.A.setCallChatToastsEnabled(e, !t)
  })
}