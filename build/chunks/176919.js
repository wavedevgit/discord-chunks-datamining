/** Chunk was on web.js **/
/** chunk id: 176919, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D6: () => _,
  bp: () => f,
  wr: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk355467 = require("./355467.js"),
  Chunk38618 = require("./38618.js"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js"),
  Chunk505649 = require("./505649.js"),
  d = function(e) {
    return e[e.PENDING = 1] = "PENDING", e[e.ERROR = 2] = "ERROR", e[e.NONE = 3] = "NONE", e
  }({});

function f(e, t, n, i) {
  let o = arguments.length > 4 && true !== arguments[4] && arguments[4],
    a = arguments.length > 5 ? arguments[5] : true;
  r.useEffect(() => {
    null != e && (1 === t && e !== l.h8.AWAITING_AUTHENTICATION ? n(l.h8.AWAITING_AUTHENTICATION) : e === l.h8.AWAITING_AUTHENTICATION && (2 === t ? n(l.h8.REVIEW) : 3 === t && (o ? null != a ? a() : n(l.h8.REVIEW) : (i(c.A.COMPLETED), n(l.h8.CONFIRM)))))
  }, [e, t, n, i, o, a])
}
let p = 5e3;

function _(e) {
  let t = (0, i.e7)([u.Z], () => u.Z.awaitingPaymentId),
    n = (0, i.e7)([s.Z], () => s.Z.isConnected()),
    l = r.useRef(new o.Xp);
  r.useEffect(() => {
    n || null == t || 1 !== e ? l.current.stop() : l.current.start(p, () => (0, a.O1)(t))
  }, [t, e, n])
}