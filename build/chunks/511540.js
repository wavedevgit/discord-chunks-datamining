/** Chunk was on 69773 **/
/** chunk id: 511540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk489863 = require("./489863.js"),
  Chunk828878 = require("./828878.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  let [l, s] = a.useState(false), [c, d] = a.useState(null), u = a.useCallback(async () => {
    try {
      s(true);
      let n = await (0, r.tV)(e);
      s(false), t({
        userCode: e,
        clientId: n.body.client_id,
        scopes: n.body.scopes,
        twoWayLinkCode: n.body.two_way_link_code
      })
    } catch (e) {
      var a;
      d(429 === (a = null == e ? true : e.status) ? i.intl.string(i.t.BPmZvr) : 404 === a || 400 === a ? i.intl.string(i.t.aWa1Pz) : i.intl.string(i.t.JNQRU1)), s(false), (null == e ? true : e.status) === 401 && n()
    }
  }, [e, t, n]);
  return a.useEffect(() => {
    e.length === o.A.USER_CODE_LENGTH ? u() : d(null)
  }, [e, u]), {
    manualSubmit: u,
    error: c,
    submitting: l
  }
}