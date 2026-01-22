/** Chunk was on web.js **/
/** chunk id: 711765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk909206 = require("./909206.js"),
  Chunk10716 = require("./10716.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk878753 = require("./878753.js");

function f(e) {
  let {
    hideSearch: t,
    className: n
  } = e, {
    activityUrlOverride: i,
    useActivityUrlOverride: f,
    filter: p
  } = (0, s.cf)([c.A], () => ({
    activityUrlOverride: c.A.getActivityUrlOverride(),
    useActivityUrlOverride: c.A.getUseActivityUrlOverride(),
    filter: c.A.getFilter()
  }), []);

  function _() {
    l._9("")
  }
  return (0, r.jsxs)("div", {
    className: a()(d.kL, n),
    children: [(0, r.jsx)(o.Checkbox, {
      checked: f,
      onChange: l.c2,
      label: u.intl.string(u.t["3TSGuD"])
    }), f ? (0, r.jsx)(o.ksK, {
      label: u.intl.string(u.t["9rnmem"]),
      disabled: !f,
      value: null != i ? i : true,
      onChange: l.ri,
      placeholder: "https://localhost:3000"
    }) : null, true === t ? null : (0, r.jsx)("div", {
      children: (0, r.jsx)(o.IWV, {
        size: "sm",
        query: p,
        onChange: l._9,
        onClear: _
      })
    })]
  })
}