/** Chunk was on 40095 **/
/** chunk id: 617735, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => d
});
var Chunk573654 = require("./573654.js");
if (12633 == require.j) var Chunk178163 = require("./178163.js");
if (12633 == require.j) var Chunk524962 = require("./524962.js");
if (12633 == require.j) var Chunk373425 = require("./373425.js");
if (12633 == require.j) var Chunk528302 = require("./528302.js");
if (12633 == require.j) var Chunk509893 = require("./509893.jsx");
if (12633 == require.j) var Chunk71052 = require("./71052.js");

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