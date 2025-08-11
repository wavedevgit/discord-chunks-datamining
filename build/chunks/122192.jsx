/** Chunk was on web.js **/
/** chunk id: 122192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk462566 = require("./462566.js"),
  Chunk603421 = require("./603421.js"),
  Chunk388032 = require("./388032.js"),
  Chunk13482 = require("./13482.js");
let u = e => {
  let {
    billingError: t,
    onCardInfoChange: n
  } = e, u = null != t && (null == t.code || (0, s.ly)(t) === s.Rg.CREDIT_CARD_INFORMATION);
  return <i.Fragment>{u ? <o.kzN className={c.errorBlock}>{l.intl.string(l.t["4vnhKS"])}</o.kzN> : null}{<a.Z onCardInfoChange={n} error={t} />}</i.Fragment>
}