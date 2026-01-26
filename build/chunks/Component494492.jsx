/** Chunk was on 39048 **/
/** chunk id: 494492, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
require("./516773.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, d = t.id, u = i.useCallback(e => {
    a.A.updateGuild({
      description: e
    }), a.A.updateGuildProfile(d, {
      description: e
    })
  }, [d]), g = (0, l.bG)([o.A], () => o.A.getError("description"));
  return (0, r.jsx)(s.fs1, {
    label: c.intl.string(c.t.Z27SCb),
    description: c.intl.string(c.t.pw0MIk),
    value: t.description,
    placeholder: c.intl.string(c.t.Nvfowl),
    onChange: u,
    maxLength: 300,
    disabled: !n,
    error: g
  })
}