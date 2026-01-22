/** Chunk was on web.js **/
/** chunk id: 532719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk207963 = require("./207963.jsx");

function u(e) {
  var t;
  let {
    type: n,
    default: a
  } = e, u = (0, c.jc)();
  s()(null != u, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: d,
    executeStateUpdate: f
  } = u.useComponentState(e, null != a ? {
    type: n,
    value: a
  } : true), p = i.useMemo(() => (null == d ? true : d.type) === n && d.value, [d, n]), _ = e => {
    f({
      type: n,
      value: e
    })
  }, h = null == (t = u.getParents(e)) ? true : t[0], m = (null == h ? true : h.type) === l.I5.LABEL ? h : true;
  return s()(null != m, "CheckboxActionComponent must be a child of a Label component"), (0, r.jsx)(o.Checkbox, {
    label: m.label,
    description: m.description,
    checked: p,
    onChange: _
  })
}