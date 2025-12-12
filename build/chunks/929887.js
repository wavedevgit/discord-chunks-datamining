/** Chunk was on web.js **/
/** chunk id: 929887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => d,
  MJ: () => u,
  Vq: () => f
});
var Chunk23893 = require("./23893.js"),
  Chunk595707 = require("./595707.js"),
  Chunk900090 = require("./900090.js"),
  Chunk152810 = require("./152810.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js");
let u = (0, Chunk473749.createContext)(null),
  d = (0, Chunk473749.createContext)(null),
  f = (0, Chunk473749.forwardRef)(function(e, t) {
    let n = e["aria-labelledby"];
    [e, t] = (0, i.pE)(e, t, u);
    let {
      dialogProps: f,
      titleProps: p
    } = (0, o.R)({
      ...e,
      "aria-labelledby": n
    }, t), _ = (0, c.useContext)(d);
    f["aria-label"] || f["aria-labelledby"] || e["aria-labelledby"] && (f["aria-labelledby"] = e["aria-labelledby"]);
    let m = (0, i.aX)({
        defaultClassName: "react-aria-Dialog",
        className: e.className,
        style: e.style,
        children: e.children,
        values: {
          close: (null == _ ? true : _.close) || (() => {})
        }
      }),
      h = (0, s.z)(e, {
        global: true
      });
    return c.createElement("section", {
      ...(0, l.d)(h, m, f),
      ref: t,
      slot: e.slot || true
    }, c.createElement(i.zt, {
      values: [
        [a.ni, {
          slots: {
            [i.hO]: {},
            title: {
              ...p,
              level: 2
            }
          }
        }],
        [r.b, {
          slots: {
            [i.hO]: {},
            close: {
              onPress: () => null == _ ? true : _.close()
            }
          }
        }]
      ]
    }, m.children))
  })