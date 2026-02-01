/** Chunk was on 26764 **/
/** chunk id: 205369, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  T: () => d
});
var Chunk321733 = require("./321733.js"),
  Chunk212246 = require("./212246.js"),
  Chunk162551 = require("./162551.js"),
  Chunk848575 = require("./848575.js"),
  Chunk201672 = require("./201672.js"),
  Chunk939932 = require("./939932.jsx"),
  Chunk490580 = require("./490580.js");

function d(e, t, r) {
  var d = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  (0, s.cl)("DropTarget", "type, spec, collect[, options]", e, t, r, d);
  var p = e;
  "function" != typeof e && ((0, n.V)((0, s.NE)(e, true), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', e), p = function() {
    return e
  }), (0, n.V)((0, s.Qd)(t), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t);
  var f = (0, u.i)(t);
  return (0, n.V)("function" == typeof r, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', r), (0, n.V)((0, s.Qd)(d), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', r),
    function(e) {
      return (0, c.A)({
        containerDisplayName: "DropTarget",
        createHandler: f,
        registerHandler: o.l,
        createMonitor: function(e) {
          return new i.b(e)
        },
        createConnector: function(e) {
          return new a.P(e)
        },
        DecoratedComponent: e,
        getType: p,
        collect: r,
        options: d
      })
    }
}