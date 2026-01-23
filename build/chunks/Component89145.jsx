/** Chunk was on 47841 **/
/** chunk id: 89145, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, d = t.id, u = (0, l.bG)([o.A], () => o.A.getError("name")), g = i.useCallback(e => {
    a.A.updateGuild({
      name: e
    }), a.A.updateGuildProfile(d, {
      name: e
    })
  }, [d]);
  return (0, r.jsx)(s.ksK, {
    label: c.intl.string(c.t.X56QcF),
    type: "text",
    disabled: !n,
    value: t.name,
    maxLength: 100,
    onChange: g,
    error: u
  })
}