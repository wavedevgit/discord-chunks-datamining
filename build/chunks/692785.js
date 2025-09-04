/** Chunk was on 79255 **/
/** chunk id: 692785, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => d
});
var Chunk573654 = require("./573654.js"),
  Chunk150477 = require("./150477.js"),
  Chunk968611 = require("./968611.js"),
  Chunk286861 = require("./286861.js"),
  Chunk639443 = require("./639443.js"),
  Chunk499168 = require("./499168.jsx"),
  Chunk308564 = require("./308564.js");

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