/** Chunk was on 75708 **/
/** chunk id: 359138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk747545 = require("./747545.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk959963 = require("./959963.js");
let u = {
  width: 387,
  height: 218
};

function m() {
  let e = Chunk131951.Z.getCameraComponent(),
    t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getVideoDeviceId()),
    [n, m] = Chunk73800.useState(false),
    p = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.isVideoAvailable());
  return require ? (0, Chunk255367.jsx)("div", {
    className: Chunk959963.cameraWrapper,
    children: (0, Chunk255367.jsxs)("div", {
      className: Chunk959963.camera,
      children: [(0, Chunk255367.jsx)(module, {
        deviceId: exports,
        width: u.width,
        height: u.height,
        disabled: !require
      }), (0, Chunk255367.jsx)(Chunk747545.S, {})]
    })
  }) : (0, Chunk255367.jsx)("div", {
    className: Chunk959963.cameraWrapper,
    children: (0, Chunk255367.jsx)(Chunk481060.ua7, {
      text: p ? null : Chunk388032.intl.string(Chunk388032.t["8jSzSU"]),
      children: e => {
        var t, n;
        return (0, i.jsx)(a.zxk, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          variant: "primary",
          text: c.intl.string(c.t.JIf4v7)
        }, e), n = n = {
          onClick: () => m(true),
          disabled: !p
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })
  })
}