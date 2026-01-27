/** Chunk was on 86142 **/
/** chunk id: 167630, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435328 = require("./435328.js"),
  Chunk427080 = require("./427080.jsx"),
  Chunk515115 = require("./515115.js"),
  Chunk988794 = require("./988794.js"),
  Chunk888804 = require("./888804.js");

function d(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: d
  } = e, h = t.entity_type === c.Ps.EXTERNAL, p = i.useCallback(e => (0, a.GI)(t, d)(e), [t, d]), g = (0, o.L)(t, n);
  if (null == g) return null;
  let {
    IconComponent: f,
    locationName: _
  } = g, m = (0, r.jsxs)(r.Fragment, {
    children: [null != f && (0, r.jsx)(f, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.p
    }), (0, r.jsx)(s.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: u.fN,
      children: (0, l.l)(_, true)
    })]
  });
  return (0, r.jsx)("div", {
    className: u.nM,
    children: null != p ? (0, r.jsx)(s.DUT, {
      className: h ? u.dC : u.h7,
      onClick: p,
      children: m
    }) : m
  })
}