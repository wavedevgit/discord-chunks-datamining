/** Chunk was on web.js **/
/** chunk id: 17925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K4: () => d,
  th: () => f
});
var Chunk595707 = require("./595707.js"),
  Chunk156748 = require("./156748.js"),
  Chunk190974 = require("./190974.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js"),
  Chunk395861 = require("./395861.js");
let u = (0, Chunk473749.createContext)({}),
  d = (0, Chunk473749.createContext)(null),
  f = (0, Chunk473749.forwardRef)(function(e, t) {
    [e, t] = (0, r.pE)(e, t, u);
    let n = (0, c.E)(e),
      {
        groupProps: f
      } = (0, a.C)(e, n, t),
      p = (0, r.aX)({
        ...e,
        values: {
          isDisabled: n.isDisabled,
          state: n
        },
        defaultClassName: "react-aria-ToggleButtonGroup"
      }),
      _ = (0, o.z)(e, {
        global: true
      });
    return l.createElement("div", {
      ...(0, s.d)(_, p, f),
      ref: t,
      slot: e.slot || true,
      "data-orientation": e.orientation || "horizontal",
      "data-disabled": e.isDisabled || true
    }, l.createElement(d.Provider, {
      value: n
    }, l.createElement(i.y, null, p.children)))
  })