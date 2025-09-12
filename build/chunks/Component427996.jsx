/** Chunk was on 35755 **/
/** chunk id: 427996, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk337682 = require("./337682.js"),
  Chunk115130 = require("./115130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk625234 = require("./625234.js");

function p(e) {
  let {
    hideSearch: t,
    className: n
  } = e, {
    activityUrlOverride: i,
    useActivityUrlOverride: p,
    filter: m
  } = (0, a.cj)([c.Z], () => ({
    activityUrlOverride: c.Z.getActivityUrlOverride(),
    useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
    filter: c.Z.getFilter()
  }), []);
  return (0, l.jsxs)("div", {
    className: r()(d.container, n),
    children: [(0, l.jsx)(o.XZJ, {
      checked: p,
      onChange: s.Y$,
      label: u.intl.string(u.t["3TSGuL"])
    }), p ? (0, l.jsx)(o.oil, {
      label: u.intl.string(u.t["9rnmen"]),
      disabled: !p,
      value: null != i ? i : true,
      onChange: s.jS,
      placeholder: "https://localhost:3000"
    }) : null, true === t ? null : (0, l.jsx)("div", {
      children: (0, l.jsx)(o.E1j, {
        size: "sm",
        query: m,
        onChange: s.a8,
        onClear: function() {
          s.a8("")
        }
      })
    })]
  })
}