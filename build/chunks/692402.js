/** Chunk was on 42604 **/
/** chunk id: 692402, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => d
});
var Chunk573654 = require("./573654.js");
if (12633 == require.j) var Chunk245385 = require("./245385.js");
if (12633 == require.j) var Chunk10490 = require("./10490.js");
if (12633 == require.j) var Chunk734540 = require("./734540.js");
if (12633 == require.j) var Chunk487146 = require("./487146.js");
if (12633 == require.j) var Chunk687163 = require("./687163.jsx");
if (12633 == require.j) var Chunk928513 = require("./928513.js");

function d(e, t, r) {
  var d = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  (0, s.U9)("DropTarget", "type, spec, collect[, options]", e, t, r, d);
  var p = e;
  "function" != typeof e && ((0, n.k)((0, s.m5)(e, true), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', e), p = function() {
    return e
  }), (0, n.k)((0, s.PO)(t), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t);
  var f = (0, u.S)(t);
  return (0, n.k)("function" == typeof r, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', r), (0, n.k)((0, s.PO)(d), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', r),
    function(e) {
      return (0, c.K)({
        containerDisplayName: "DropTarget",
        createHandler: f,
        registerHandler: o.n,
        createMonitor: function(e) {
          return new i.H(e)
        },
        createConnector: function(e) {
          return new a.Y(e)
        },
        DecoratedComponent: e,
        getType: p,
        collect: r,
        options: d
      })
    }
}