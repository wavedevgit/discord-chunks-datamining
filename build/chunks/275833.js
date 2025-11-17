/** Chunk was on 42604 **/
/** chunk id: 275833, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => d
});
var Chunk573654 = require("./573654.js"),
  Chunk245385 = require("./245385.js"),
  Chunk305765 = require("./305765.js"),
  Chunk597701 = require("./597701.js"),
  Chunk487146 = require("./487146.js"),
  Chunk687163 = require("./687163.jsx"),
  Chunk396556 = require("./396556.js");

function d(e, t, r) {
  var d = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  (0, s.U9)("DragSource", "type, spec, collect[, options]", e, t, r, d);
  var p = e;
  "function" != typeof e && ((0, n.k)((0, s.m5)(e), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', e), p = function() {
    return e
  }), (0, n.k)((0, s.PO)(t), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t);
  var f = (0, u.a)(t);
  return (0, n.k)("function" == typeof r, 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', r), (0, n.k)((0, s.PO)(d), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', r),
    function(e) {
      return (0, c.K)({
        containerDisplayName: "DragSource",
        createHandler: f,
        registerHandler: o.w,
        createConnector: function(e) {
          return new i.x(e)
        },
        createMonitor: function(e) {
          return new a.p(e)
        },
        DecoratedComponent: e,
        getType: p,
        collect: r,
        options: d
      })
    }
}