/** Chunk was on web.js **/
/** chunk id: 912687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G0: () => d,
  WK: () => f
});
var Chunk825913 = require("./825913.js"),
  Chunk357710 = require("./357710.js"),
  Chunk587771 = require("./587771.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js"),
  Chunk551208 = require("./551208.js");
let u = (0, Chunk64700.createContext)({}),
  d = (0, Chunk64700.createContext)(null),
  f = (0, Chunk64700.forwardRef)(function(e, t) {
    [e, t] = (0, r.JT)(e, t, u);
    let n = (0, c.k)(e),
      {
        groupProps: f
      } = (0, a.$)(e, n, t),
      p = (0, r.Sl)({
        ...e,
        values: {
          isDisabled: n.isDisabled,
          state: n
        },
        defaultClassName: "react-aria-ToggleButtonGroup"
      }),
      _ = (0, o.$)(e, {
        global: true
      });
    return l.createElement("div", {
      ...(0, s.v)(_, p, f),
      ref: t,
      slot: e.slot || true,
      "data-orientation": e.orientation || "horizontal",
      "data-disabled": e.isDisabled || true
    }, l.createElement(d.Provider, {
      value: n
    }, l.createElement(i.D, null, p.children)))
  })