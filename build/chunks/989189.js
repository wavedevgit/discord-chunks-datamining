/** Chunk was on 33622 **/
/** chunk id: 989189, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  $H: () => c,
  MJ: () => d,
  Vq: () => m
});
var Chunk188366 = require("./188366.js"),
  Chunk922387 = require("./922387.js"),
  Chunk386843 = require("./386843.js"),
  Chunk749468 = require("./749468.js"),
  Chunk735437 = require("./735437.js"),
  Chunk43341 = require("./43341.js"),
  Chunk647438 = require("./647438.js");
let d = (0, Chunk647438.createContext)(null),
  c = (0, Chunk647438.createContext)(null),
  m = (0, Chunk647438.forwardRef)(function(e, a) {
    let t = e["aria-labelledby"];
    [e, a] = (0, n.pE)(e, a, d);
    let {
      dialogProps: m,
      titleProps: D
    } = (0, i.R)({
      ...e,
      "aria-labelledby": t
    }, a), h = (0, s.useContext)(c);
    m["aria-label"] || m["aria-labelledby"] || e["aria-labelledby"] && (m["aria-labelledby"] = e["aria-labelledby"]);
    let f = (0, n.aX)({
        defaultClassName: "react-aria-Dialog",
        className: e.className,
        style: e.style,
        children: e.children,
        values: {
          close: (null == h ? true : h.close) || (() => {})
        }
      }),
      y = (0, o.z)(e, {
        global: true
      });
    return s.createElement("section", {
      ...(0, l.d)(y, f, m),
      ref: a,
      slot: e.slot || true
    }, s.createElement(n.zt, {
      values: [
        [r.ni, {
          slots: {
            [n.hO]: {},
            title: {
              ...D,
              level: 2
            }
          }
        }],
        [u.b, {
          slots: {
            [n.hO]: {},
            close: {
              onPress: () => null == h ? true : h.close()
            }
          }
        }]
      ]
    }, f.children))
  })