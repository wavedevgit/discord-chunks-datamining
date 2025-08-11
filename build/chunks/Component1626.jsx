/** Chunk was on web.js **/
/** chunk id: 1626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk111618 = require("./111618.js"),
  Chunk730954 = require("./730954.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  return e.state !== s.yb.SEND_FAILED ? null : (0, r.jsx)(i.sNh, {
    id: "resend",
    label: l.intl.string(l.t.lXHojo),
    action: () => (0, a.Z)(t, e, true, o.Z.getOptions(e.id))
  })
}