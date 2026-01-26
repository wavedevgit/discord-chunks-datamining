/** Chunk was on 39048 **/
/** chunk id: 139637, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let t, {
    resubmittingEnableRequest: n,
    resubmissionError: s,
    createEnableRequest: a,
    requestRejectedNoticeText: o,
    reapplyNoticeText: c,
    isApplicationPending: d
  } = e;
  if (null != s) return (0, r.jsx)(i.wx6, {
    type: "critical",
    children: s.getAnyErrorMessage()
  });
  let u = null;
  return d ? u = l.intl.string(l.t.OrkTBn) : null != o ? u = o : null != c && (u = c, t = l.intl.string(l.t["YKw/NQ"])), null != u ? (0, r.jsx)(i.po8, {
    messageType: i.YCn.WARNING,
    action: (0, r.jsx)(i.$nd, {
      variant: "overlay-secondary",
      text: t,
      onClick: a,
      loading: n
    }),
    children: u
  }) : null
}