/** Chunk was on 20501 **/
/** chunk id: 445817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk2052 = require("./2052.js"),
  Chunk932724 = require("./932724.js"),
  Chunk716161 = require("./716161.js"),
  Chunk672339 = require("./672339.js"),
  Chunk747545 = require("./747545.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944856 = require("./944856.js");
let x = {
  width: 387,
  height: 218
};

function _(e) {
  let {
    previewEnabled: t,
    onEnablePreview: n,
    onCancelPreview: _
  } = e, j = p.Z.getCameraComponent(), [E, C] = r.useState((0, c.P)(g.default.getCurrentUser())), O = r.useRef(false), v = r.useRef(E), S = (0, o.O)(), T = (0, s.e7)([p.Z], () => p.Z.isVideoAvailable());
  return r.useEffect(() => () => {
    O.current && l.Z.wait(() => (0, d.Up)(v.current))
  }, []), (0, i.jsx)(m.Z, {
    selectedBackgroundOption: E,
    onSelectBackgroundOption: e => {
      O.current = true, v.current = e, C(e), (0, u.wG)(e, {
        location: S.location
      }).catch(h.dG4)
    },
    onCancelPreview: _,
    renderCamera: e => t ? (0, i.jsx)("div", {
      className: b.cameraWrapper,
      children: (0, i.jsxs)("div", {
        className: b.camera,
        children: [(0, i.jsx)(j, {
          deviceId: e,
          width: x.width,
          height: x.height,
          disabled: !t
        }), (0, i.jsx)(m.S, {})]
      })
    }) : (0, i.jsxs)("div", {
      className: b.cameraWrapper,
      children: [(0, i.jsx)("div", {
        className: b.previewImage
      }), (0, i.jsx)(a.ua7, {
        text: T ? null : f.intl.string(f.t["8jSzSU"]),
        children: e => {
          var t, r;
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
            text: f.intl.string(f.t.JIf4v7)
          }, e), r = r = {
            onClick: n,
            disabled: !T
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }), t))
        }
      })]
    })
  })
}