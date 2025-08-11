/** Chunk was on web.js **/
/** chunk id: 542238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk258609 = require("./258609.js"),
  Chunk785847 = require("./785847.js");

function l(e) {
  let {
    body: t,
    dismissCallback: n,
    errorCodeMessage: l
  } = e, c = (0, o.e7)([a.Z], () => a.Z.getRemoteSessionId());
  return (i.useEffect(() => {
    null != c && n()
  }, [c, n]), null == l) ? t : <r.Fragment>{t}{<div className={s.errorCodeMessage}>{l}</div>}</r.Fragment>
}