/** Chunk was on 69773 **/
/** chunk id: 511540, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk489863 = require("./489863.js"),
  Chunk828878 = require("./828878.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
  let [s, l] = r.useState(false), [c, d] = r.useState(null), u = r.useCallback(async () => {
    try {
      l(true);
      let n = await (0, a.tV)(e);
      l(false), t({
        userCode: e,
        clientId: n.body.client_id,
        scopes: n.body.scopes,
        twoWayLinkCode: n.body.two_way_link_code
      })
    } catch (e) {
      var r;
      d(429 === (r = null == e ? true : e.status) ? i.intl.string(i.t.BPmZvj) : 404 === r || 400 === r ? i.intl.string(i.t.aWa1Pw) : i.intl.string(i.t.JNQRU4)), l(false), (null == e ? true : e.status) === 401 && n()
    }
  }, [e, t, n]);
  return r.useEffect(() => {
    e.length === o.A.USER_CODE_LENGTH ? u() : d(null)
  }, [e, u]), {
    manualSubmit: u,
    error: c,
    submitting: s
  }
}