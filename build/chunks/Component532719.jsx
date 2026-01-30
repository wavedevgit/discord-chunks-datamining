/** Chunk was on 49559 **/
/** chunk id: 532719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk207963 = require("./207963.jsx");

function u(e) {
  var t;
  let {
    type: n,
    default: a
  } = e, u = (0, c.jc)();
  i()(null != u, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: d,
    executeStateUpdate: p
  } = u.useComponentState(e, null != a ? {
    type: n,
    value: a
  } : true), m = l.useMemo(() => (null == d ? true : d.type) === n && d.value, [d, n]), f = null == (t = u.getParents(e)) ? true : t[0], O = (null == f ? true : f.type) === s.I5.LABEL ? f : true;
  return i()(null != O, "CheckboxActionComponent must be a child of a Label component"), (0, r.jsx)(o.Checkbox, {
    label: O.label,
    description: O.description,
    checked: m,
    onChange: e => {
      p({
        type: n,
        value: e
      })
    }
  })
}