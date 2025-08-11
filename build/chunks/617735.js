/** Chunk was on web.js **/
/** chunk id: 617735, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => u
});
var Chunk573654 = require("./573654.js"),
  Chunk178163 = require("./178163.js"),
  Chunk524962 = require("./524962.js"),
  Chunk373425 = require("./373425.js"),
  Chunk528302 = require("./528302.js"),
  Chunk509893 = require("./509893.jsx"),
  Chunk71052 = require("./71052.js");

function u(e, t, n) {
  var u = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  (0, s.U9)("DropTarget", "type, spec, collect[, options]", e, t, n, u);
  var d = e;
  "function" != typeof e && ((0, r.k)((0, s.m5)(e, true), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', e), d = function() {
    return e
  }), (0, r.k)((0, s.PO)(t), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t);
  var f = (0, c.S)(t);
  return (0, r.k)("function" == typeof n, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', n), (0, r.k)((0, s.PO)(u), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', n),
    function(e) {
      return (0, l.K)({
        containerDisplayName: "DropTarget",
        createHandler: f,
        registerHandler: i.n,
        createMonitor: function(e) {
          return new o.H(e)
        },
        createConnector: function(e) {
          return new a.Y(e)
        },
        DecoratedComponent: e,
        getType: d,
        collect: n,
        options: u
      })
    }
}