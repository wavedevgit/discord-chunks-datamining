/** Chunk was on web.js **/
/** chunk id: 989189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => d,
  MJ: () => u,
  Vq: () => f
});
var Chunk188366 = require("./188366.js"),
  Chunk922387 = require("./922387.js"),
  Chunk386843 = require("./386843.js"),
  Chunk749468 = require("./749468.js"),
  Chunk735437 = require("./735437.js"),
  Chunk43341 = require("./43341.js"),
  Chunk647438 = require("./647438.js");
let u = (0, Chunk647438.createContext)(null),
  d = (0, Chunk647438.createContext)(null),
  f = (0, Chunk647438.forwardRef)(function(e, t) {
    let n = e["aria-labelledby"];
    [e, t] = (0, i.pE)(e, t, u);
    let {
      dialogProps: f,
      titleProps: _
    } = (0, o.R)({
      ...e,
      "aria-labelledby": n
    }, t), p = (0, c.useContext)(d);
    f["aria-label"] || f["aria-labelledby"] || e["aria-labelledby"] && (f["aria-labelledby"] = e["aria-labelledby"]);
    let h = (0, i.aX)({
        defaultClassName: "react-aria-Dialog",
        className: e.className,
        style: e.style,
        children: e.children,
        values: {
          close: (null == p ? true : p.close) || (() => {})
        }
      }),
      m = (0, s.z)(e, {
        global: true
      });
    return c.createElement("section", {
      ...(0, l.d)(m, h, f),
      ref: t,
      slot: e.slot || true
    }, c.createElement(i.zt, {
      values: [
        [a.ni, {
          slots: {
            [i.hO]: {},
            title: {
              ..._,
              level: 2
            }
          }
        }],
        [r.b, {
          slots: {
            [i.hO]: {},
            close: {
              onPress: () => null == p ? true : p.close()
            }
          }
        }]
      ]
    }, h.children))
  })