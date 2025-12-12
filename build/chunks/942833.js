/** Chunk was on web.js **/
/** chunk id: 942833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => o,
  k: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  return r.useMemo(() => {
    if (null == e) return;
    let t = null != e.role_id,
      n = e.attachments_count > 0;
    return t && n ? a.intl.string(a.t.ih4QMU) : t ? a.intl.string(a.t.o9xphc) : n ? a.intl.string(a.t.DWYJua) : true
  }, [e])
}

function s(e) {
  return r.useMemo(() => {
    if ((null == e ? true : e.price) == null) return;
    let {
      amount: t,
      currency: n
    } = e.price;
    return (0, i.T4)(t, n)
  }, [e])
}