/** Chunk was on web.js **/
/** chunk id: 427996, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk337682 = require("./337682.js"),
  Chunk115130 = require("./115130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk642804 = require("./642804.js");

function f(e) {
  let {
    hideSearch: t,
    className: n
  } = e, {
    activityUrlOverride: i,
    useActivityUrlOverride: f,
    filter: _
  } = (0, a.cj)([c.Z], () => ({
    activityUrlOverride: c.Z.getActivityUrlOverride(),
    useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
    filter: c.Z.getFilter()
  }), []);

  function p() {
    l.a8("")
  }
  return (0, r.jsxs)("div", {
    className: o()(d.container, n),
    children: [(0, r.jsx)(s.XZJ, {
      type: s.XZJ.Types.INVERTED,
      value: f,
      onClick: l.Y$,
      children: (0, r.jsx)(s.Text, {
        variant: "text-md/semibold",
        children: u.intl.string(u.t["3TSGuL"])
      })
    }), f ? (0, r.jsx)(s.xJW, {
      title: u.intl.string(u.t["9rnmen"]),
      children: (0, r.jsx)(s.oil, {
        disabled: !f,
        value: null != i ? i : true,
        onChange: l.jS,
        placeholder: "https://localhost:3000"
      })
    }) : null, true === t ? null : (0, r.jsx)("div", {
      children: (0, r.jsx)(s.E1j, {
        size: "sm",
        className: d.searchBar,
        query: _,
        onChange: l.a8,
        onClear: p
      })
    })]
  })
}