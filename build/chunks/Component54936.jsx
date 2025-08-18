/** Chunk was on 91173 **/
/** chunk id: 54936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => g
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk910111 = require("./910111.jsx"),
  Chunk732559 = require("./732559.jsx"),
  Chunk723851 = require("./723851.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84637 = require("./84637.js");
let m = {
  [Chunk981631.TaA.WINDOWS]: {
    icon: Chunk723851.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t["0/xHFB"])
  },
  [Chunk981631.TaA.MACOS]: {
    icon: Chunk732559.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t.E4u4n5)
  },
  [Chunk981631.TaA.LINUX]: {
    icon: Chunk910111.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t.tcawo6)
  }
};

function f(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, i = m[t];
  if (null == i) throw Error("Unexpected operating system: ".concat(t));
  let l = i.icon;
  return (0, r.jsx)(o.ua7, {
    text: i.getLabel(),
    children: e => {
      var t, i;
      return (0, r.jsx)(l, (t = function(e) {
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
      }({}, e), i = i = {
        className: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}
let g = e => {
  let {
    systems: t,
    className: n,
    iconClassName: i
  } = e;
  return (0, r.jsx)("div", {
    className: l()(p.OSSection, n),
    children: t.map(e => (0, r.jsx)(f, {
      operatingSystem: e,
      className: l()(p.purchaseUnitOperatingSystem, i)
    }, e))
  })
}