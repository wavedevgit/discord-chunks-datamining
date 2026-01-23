/** Chunk was on 47841 **/
/** chunk id: 133154, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk555337 = require("./555337.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    guildId: t
  } = e, n = (0, l.bG)([c.A], () => c.A.getSettings()), a = (0, l.bG)([c.A], () => c.A.getSubmitting()), u = i.useCallback(() => {
    try {
      (0, o.W5)(t, n)
    } catch (e) {}
  }, [t, n]);
  return (0, r.jsx)(s.A, {
    onSave: u,
    onReset: o.sk,
    submitting: a,
    onSaveText: d.intl.string(d.t["R3BPH+"])
  })
}
let g = function() {
  let e = (0, l.bG)([a.A], () => a.A.getGuild());
  return null == e ? null : (0, r.jsx)(u, {
    guildId: e.id
  })
}