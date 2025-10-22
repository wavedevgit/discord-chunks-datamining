/** Chunk was on 29679 **/
/** chunk id: 327802, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => c,
  Z: () => d
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk372129 = require("./372129.jsx"),
  Chunk205822 = require("./205822.jsx"),
  Chunk731994 = require("./731994.js"),
  Chunk388032 = require("./388032.jsx");
let c = e => {
    let {
      className: t,
      onSuccess: c,
      onError: d
    } = e, u = async e => {
      try {
        let {
          dataURI: t
        } = await (0, l.po)(e);
        c({
          file: e,
          data: t
        })
      } catch (e) {
        d(Error("Failed to read file", {
          cause: e
        }))
      }
    };
    return (0, r.jsx)(a.Z, {
      className: t,
      title: o.intl.string(o.t["DU0dy/"]),
      description: o.intl.string(o.t.bpycfA),
      icons: s.pA,
      onDrop: e => {
        let t = null == e ? true : e[0];
        null != t && (0, i.ZDy)(async () => {
          let {
            default: e
          } = await n.e("16169").then(n.bind(n, 935333));
          return n => (0, r.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({
            processFiles: () => u(t)
          }, n))
        })
      }
    })
  },
  d = function(e) {
    let {
      className: t,
      style: n,
      onDrop: i
    } = e;
    return (0, r.jsx)(a.Z, {
      className: t,
      style: n,
      title: o.intl.string(o.t["DU0dy/"]),
      description: o.intl.string(o.t.bpycfA),
      icons: s.pA,
      onDrop: i
    })
  }