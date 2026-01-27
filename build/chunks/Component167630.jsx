/** Chunk was on 86142 **/
/** chunk id: 167630, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435328 = require("./435328.js"),
  Chunk427080 = require("./427080.jsx"),
  Chunk515115 = require("./515115.js"),
  Chunk988794 = require("./988794.js"),
  Chunk888804 = require("./888804.js");

function u(e) {
  let {
    guildScheduledEvent: t,
    channel: n,
    onClose: u
  } = e, h = t.entity_type === c.Ps.EXTERNAL, p = i.useCallback(e => (0, a.GI)(t, u)(e), [t, u]), g = (0, o.L)(t, n);
  if (null == g) return null;
  let {
    IconComponent: _,
    locationName: f
  } = g, m = (0, r.jsxs)(r.Fragment, {
    children: [null != _ && (0, r.jsx)(_, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: d.p
    }), (0, r.jsx)(s.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: d.fN,
      children: (0, l.l)(f, true)
    })]
  });
  return (0, r.jsx)("div", {
    className: d.nM,
    children: null != p ? (0, r.jsx)(s.DUT, {
      className: h ? d.dC : d.h7,
      onClick: p,
      children: m
    }) : m
  })
}