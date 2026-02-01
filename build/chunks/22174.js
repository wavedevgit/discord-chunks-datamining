/** Chunk was on 26764 **/
/** chunk id: 22174, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => d
});
var Chunk321733 = require("./321733.js"),
  Chunk212246 = require("./212246.js"),
  Chunk541163 = require("./541163.js"),
  Chunk394886 = require("./394886.js"),
  Chunk201672 = require("./201672.js"),
  Chunk939932 = require("./939932.jsx"),
  Chunk979888 = require("./979888.js");

function d(e, t, r) {
  var d = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  (0, s.cl)("DragSource", "type, spec, collect[, options]", e, t, r, d);
  var p = e;
  "function" != typeof e && ((0, n.V)((0, s.NE)(e), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', e), p = function() {
    return e
  }), (0, n.V)((0, s.Qd)(t), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t);
  var f = (0, u.C)(t);
  return (0, n.V)("function" == typeof r, 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', r), (0, n.V)((0, s.Qd)(d), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', r),
    function(e) {
      return (0, c.A)({
        containerDisplayName: "DragSource",
        createHandler: f,
        registerHandler: o.V,
        createConnector: function(e) {
          return new i.b(e)
        },
        createMonitor: function(e) {
          return new a.G(e)
        },
        DecoratedComponent: e,
        getType: p,
        collect: r,
        options: d
      })
    }
}