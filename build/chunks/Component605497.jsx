/** Chunk was on web.js **/
/** chunk id: 605497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk643501 = require("./643501.js"),
  Chunk780885 = require("./780885.js");

function l(e) {
  let {
    body: t,
    dismissCallback: n,
    errorCodeMessage: l
  } = e, c = (0, a.bG)([o.default], () => o.default.getRemoteSessionId());
  return (i.useEffect(() => {
    null != c && n()
  }, [c, n]), null == l) ? t : (0, r.jsxs)(r.Fragment, {
    children: [t, (0, r.jsx)("div", {
      className: s.F,
      children: l
    })]
  })
}