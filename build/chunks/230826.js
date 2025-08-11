/** Chunk was on web.js **/
/** chunk id: 230826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => u
});
var Chunk573654 = require("./573654.js"),
  Chunk178163 = require("./178163.js"),
  Chunk63222 = require("./63222.js"),
  Chunk969357 = require("./969357.js"),
  Chunk528302 = require("./528302.js"),
  Chunk509893 = require("./509893.jsx"),
  Chunk23546 = require("./23546.js");

function u(e, t, n) {
  var u = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  (0, s.U9)("DragSource", "type, spec, collect[, options]", e, t, n, u);
  var d = e;
  "function" != typeof e && ((0, r.k)((0, s.m5)(e), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', e), d = function() {
    return e
  }), (0, r.k)((0, s.PO)(t), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t);
  var f = (0, c.a)(t);
  return (0, r.k)("function" == typeof n, 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', n), (0, r.k)((0, s.PO)(u), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', n),
    function(e) {
      return (0, l.K)({
        containerDisplayName: "DragSource",
        createHandler: f,
        registerHandler: i.w,
        createConnector: function(e) {
          return new o.x(e)
        },
        createMonitor: function(e) {
          return new a.p(e)
        },
        DecoratedComponent: e,
        getType: d,
        collect: n,
        options: u
      })
    }
}