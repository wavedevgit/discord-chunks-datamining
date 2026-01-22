/** Chunk was on web.js **/
/** chunk id: 251913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QR: () => _,
  b: () => f,
  oc: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk384904 = require("./384904.js"),
  Chunk142120 = require("./142120.js"),
  Chunk166532 = require("./166532.js"),
  Chunk566980 = require("./566980.js"),
  Chunk153084 = require("./153084.js"),
  d = function(e) {
    return e[e.PENDING = 1] = "PENDING", e[e.ERROR = 2] = "ERROR", e[e.NONE = 3] = "NONE", e
  }({});

function f(e, t, n, i) {
  let a = arguments.length > 4 && true !== arguments[4] && arguments[4],
    s = arguments.length > 5 ? arguments[5] : true;
  r.useEffect(() => {
    null != e && (1 === t && e !== l.pn.AWAITING_AUTHENTICATION ? n(l.pn.AWAITING_AUTHENTICATION) : e === l.pn.AWAITING_AUTHENTICATION && (2 === t ? n(l.pn.REVIEW) : 3 === t && (a ? null != s ? s() : n(l.pn.REVIEW) : (i(c.h.COMPLETED), n(l.pn.CONFIRM)))))
  }, [e, t, n, i, a, s])
}
let p = 5e3;

function _(e) {
  let t = (0, i.bG)([u.A], () => u.A.awaitingPaymentId),
    n = (0, i.bG)([o.A], () => o.A.isConnected()),
    l = r.useRef(new a.IX);
  r.useEffect(() => {
    n || null == t || 1 !== e ? l.current.stop() : l.current.start(p, () => (0, s.TK)(t))
  }, [t, e, n])
}