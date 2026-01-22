/** Chunk was on web.js **/
/** chunk id: 571654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => o,
  z: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk580630 = require("./580630.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  return r.useMemo(() => {
    if (null == e) return;
    let t = null != e.role_id,
      n = e.attachments_count > 0;
    return t && n ? a.intl.string(a.t.ih4QMU) : t ? a.intl.string(a.t.o9xphc) : n ? a.intl.string(a.t.DWYJua) : true
  }, [e])
}

function o(e) {
  return r.useMemo(() => {
    if ((null == e ? true : e.price) == null) return;
    let {
      amount: t,
      currency: n
    } = e.price;
    return (0, i.$g)(t, n)
  }, [e])
}