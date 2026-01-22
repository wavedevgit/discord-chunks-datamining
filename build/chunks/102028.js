/** Chunk was on 16864 **/
/** chunk id: 102028, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk716965 = require("./716965.js"),
  Chunk533553 = require("./533553.js"),
  Chunk985018 = require("./985018.jsx");

function l(e, t, r) {
  let [l, c] = a.useState(false), [o, d] = a.useState(null), u = a.useCallback(async () => {
    try {
      c(true);
      let r = await (0, n.cG)(e);
      c(false), t({
        userCode: e,
        clientId: r.body.client_id,
        scopes: r.body.scopes,
        twoWayLinkCode: r.body.two_way_link_code
      })
    } catch (e) {
      var a;
      d(429 === (a = null == e ? true : e.status) ? i.intl.string(i.t.BPmZvj) : 404 === a || 400 === a ? i.intl.string(i.t.aWa1Pw) : i.intl.string(i.t.JNQRU4)), c(false), (null == e ? true : e.status) === 401 && r()
    }
  }, [e, t, r]);
  return a.useEffect(() => {
    e.length === s.D.USER_CODE_LENGTH ? u() : d(null)
  }, [e, u]), {
    manualSubmit: u,
    error: o,
    submitting: l
  }
}