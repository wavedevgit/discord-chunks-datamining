/** Chunk was on 27978 **/
/** chunk id: 223543, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk893776 = require("./893776.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.js"),
  Chunk108427 = require("./108427.js"),
  Chunk388032 = require("./388032.js"),
  Chunk20493 = require("./20493.js");

function d(e) {
  let {
    location: t
  } = e, [d, h] = i.useState("submitting");
  return (i.useEffect(() => {
    (0, a.e)("authorize_payment");
    let e = (0, o.Z)(t);
    if (null == e) return void h("failed");
    (async () => {
      try {
        await l.Z.authorizePayment(e), h("succeeded")
      } catch (e) {
        h("failed")
      }
    })()
  }, [t]), "failed" === d) ? <s.ZP>{<img alt={""} src={n(375673)} className={u.marginBottom20} />}{<s.Dx className={u.marginBottom8}>{c.intl.string(c.t.GHRpub)}</s.Dx>}{<s.DK className={u.marginBottom40}>{c.intl.string(c.t["1nO55u"])}</s.DK>}</s.ZP> : "succeeded" === d ? <s.ZP>{<img alt={""} src={n(73962)} className={u.marginBottom20} />}{<s.Dx className={u.marginBottom8}>{c.intl.string(c.t["ihHX5+"])}</s.Dx>}{<s.DK className={u.marginBottom40}>{c.intl.string(c.t.pGPCv7)}</s.DK>}</s.ZP> : <s.ZP>{<s.Hh />}{<s.Dx>{c.intl.string(c.t.T3vC7u)}</s.Dx>}</s.ZP>
}