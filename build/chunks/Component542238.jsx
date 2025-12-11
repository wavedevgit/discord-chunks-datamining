/** Chunk was on web.js **/
/** chunk id: 542238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk258609 = require("./258609.js"),
  Chunk731511 = require("./731511.js");

function l(e) {
  let {
    body: t,
    dismissCallback: n,
    errorCodeMessage: l
  } = e, c = (0, a.e7)([o.default], () => o.default.getRemoteSessionId());
  return (i.useEffect(() => {
    null != c && n()
  }, [c, n]), null == l) ? t : (0, r.jsxs)(r.Fragment, {
    children: [t, (0, r.jsx)("div", {
      className: s.errorCodeMessage,
      children: l
    })]
  })
}