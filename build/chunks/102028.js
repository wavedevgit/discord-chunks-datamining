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
  let [l, o] = n.useState(false), [c, d] = n.useState(null), u = n.useCallback(async () => {
    try {
      o(true);
      let r = await (0, a.cG)(e);
      o(false), t({
        userCode: e,
        clientId: r.body.client_id,
        scopes: r.body.scopes,
        twoWayLinkCode: r.body.two_way_link_code
      })
    } catch (e) {
      var n;
      d(429 === (n = null == e ? true : e.status) ? i.intl.string(i.t.BPmZvj) : 404 === n || 400 === n ? i.intl.string(i.t.aWa1Pw) : i.intl.string(i.t.JNQRU4)), o(false), (null == e ? true : e.status) === 401 && r()
    }
  }, [e, t, r]);
  return n.useEffect(() => {
    e.length === s.D.USER_CODE_LENGTH ? u() : d(null)
  }, [e, u]), {
    manualSubmit: u,
    error: c,
    submitting: l
  }
}