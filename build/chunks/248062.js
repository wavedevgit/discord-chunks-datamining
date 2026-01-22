/** Chunk was on web.js **/
/** chunk id: 248062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MV: () => u,
  RG: () => d,
  lG: () => f
});
var Chunk650682 = require("./650682.js"),
  Chunk825913 = require("./825913.js"),
  Chunk257537 = require("./257537.js"),
  Chunk841680 = require("./841680.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js");
let u = (0, Chunk64700.createContext)(null),
  d = (0, Chunk64700.createContext)(null),
  f = (0, Chunk64700.forwardRef)(function(e, t) {
    let n = e["aria-labelledby"];
    [e, t] = (0, i.JT)(e, t, u);
    let {
      dialogProps: f,
      titleProps: p
    } = (0, s.s)({
      ...e,
      "aria-labelledby": n
    }, t), _ = (0, c.useContext)(d);
    f["aria-label"] || f["aria-labelledby"] || e["aria-labelledby"] && (f["aria-labelledby"] = e["aria-labelledby"]);
    let h = (0, i.Sl)({
        defaultClassName: "react-aria-Dialog",
        className: e.className,
        style: e.style,
        children: e.children,
        values: {
          close: (null == _ ? true : _.close) || (() => {})
        }
      }),
      m = (0, o.$)(e, {
        global: true
      });
    return c.createElement("section", {
      ...(0, l.v)(m, h, f),
      ref: t,
      slot: e.slot || true
    }, c.createElement(i.Kq, {
      values: [
        [a.A3, {
          slots: {
            [i.P_]: {},
            title: {
              ...p,
              level: 2
            }
          }
        }],
        [r.k, {
          slots: {
            [i.P_]: {},
            close: {
              onPress: () => null == _ ? true : _.close()
            }
          }
        }]
      ]
    }, h.children))
  })