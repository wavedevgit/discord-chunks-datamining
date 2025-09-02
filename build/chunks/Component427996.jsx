/** Chunk was on 35755 **/
/** chunk id: 427996, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk337682 = require("./337682.js"),
  Chunk115130 = require("./115130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk625234 = require("./625234.js");

function m(e) {
  let {
    hideSearch: t,
    className: n
  } = e, {
    activityUrlOverride: i,
    useActivityUrlOverride: m,
    filter: f
  } = (0, a.cj)([u.Z], () => ({
    activityUrlOverride: u.Z.getActivityUrlOverride(),
    useActivityUrlOverride: u.Z.getUseActivityUrlOverride(),
    filter: u.Z.getFilter()
  }), []);
  return (0, l.jsxs)("div", {
    className: r()(p.container, n),
    children: [(0, l.jsx)(o.$q, {
      type: o.M0.INVERTED,
      value: m,
      onClick: c.Y$,
      children: (0, l.jsx)(s.Text, {
        variant: "text-md/semibold",
        children: d.intl.string(d.t["3TSGuL"])
      })
    }), m ? (0, l.jsx)(s.xJW, {
      title: d.intl.string(d.t["9rnmen"]),
      children: (0, l.jsx)(s.oil, {
        disabled: !m,
        value: null != i ? i : true,
        onChange: c.jS,
        placeholder: "https://localhost:3000"
      })
    }) : null, true === t ? null : (0, l.jsx)("div", {
      children: (0, l.jsx)(s.E1j, {
        size: "sm",
        className: p.searchBar,
        query: f,
        onChange: c.a8,
        onClear: function() {
          c.a8("")
        }
      })
    })]
  })
}