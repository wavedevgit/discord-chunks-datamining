/** Chunk was on 47841 **/
/** chunk id: 959757, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk975807 = require("./975807.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555325 = require("./555325.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let t = (0, a.dp)(e);
  switch (t) {
    case a.qS.NEEDS_COMMUNITY:
      return {
        visibility: t, noticeText: o.intl.string(o.t["0Z2Qxt"]), ctaLabel: o.intl.string(o.t.BOJpl0), ctaClickable: null != e, onCtaClicked() {
          var t;
          i()(null != e, "Guild must be not null open COMMUNITY settings"), s.A.open(null != (t = null == e ? true : e.id) ? t : "", c.BEX.COMMUNITY)
        }
      };
    case a.qS.WAITLIST_ONLY:
      return {
        visibility: t, noticeText: o.intl.string(o.t["5vz88G"]), ctaLabel: o.intl.string(o.t["6yjvmg"]), ctaClickable: true, onCtaClicked() {
          (0, l.A)("https://dis.gd/creators-waitlist")
        }
      };
    default:
      return
  }
}