/** Chunk was on 384 **/
/** chunk id: 614342, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk782568 = require("./782568.js"),
  Chunk434404 = require("./434404.js"),
  Chunk144507 = require("./144507.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, a.MO)(e);
  switch (t) {
    case a.d5.NEEDS_COMMUNITY:
      return {
        visibility: t, noticeText: c.intl.string(c.t["0Z2Qxt"]), ctaLabel: c.intl.string(c.t.BOJpl0), ctaClickable: null != e, onCtaClicked() {
          var t;
          i()(null != e, "Guild must be not null open COMMUNITY settings"), s.Z.open(null != (t = null == e ? true : e.id) ? t : "", o.pNK.COMMUNITY)
        }
      };
    case a.d5.WAITLIST_ONLY:
      return {
        visibility: t, noticeText: c.intl.string(c.t["5vz88G"]), ctaLabel: c.intl.string(c.t["6yjvmg"]), ctaClickable: true, onCtaClicked() {
          (0, l.Z)("https://dis.gd/creators-waitlist")
        }
      };
    default:
      return
  }
}