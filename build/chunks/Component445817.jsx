/** Chunk was on web.js **/
/** chunk id: 445817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk766625 = require("./766625.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = 387,
  I = 218;

function T(e) {
  let {
    previewEnabled: t,
    onEnablePreview: n,
    onCancelPreview: E
  } = e, y = _.Z.getCameraComponent(), [T, S] = i.useState((0, c.P)(p.default.getCurrentUser())), A = i.useRef(false), C = i.useRef(T), N = (0, l.O)(), R = (0, a.e7)([_.Z], () => _.Z.isVideoAvailable());
  i.useEffect(() => () => {
    A.current && s.Z.wait(() => (0, u.Up)(C.current))
  }, []);
  let P = e => {
      A.current = true, C.current = e, S(e), (0, d.wG)(e, {
        location: N.location
      }).catch(h.dG4)
    },
    w = e => t ? (0, r.jsx)("div", {
      className: g.cameraWrapper,
      children: (0, r.jsxs)("div", {
        className: g.camera,
        children: [(0, r.jsx)(y, {
          deviceId: e,
          width: v,
          height: I,
          disabled: !t
        }), (0, r.jsx)(f.S, {})]
      })
    }) : (0, r.jsxs)("div", {
      className: g.cameraWrapper,
      children: [(0, r.jsx)("div", {
        className: g.previewImage
      }), (0, r.jsx)(o.ua7, {
        text: R ? null : m.intl.string(m.t["8jSzSU"]),
        children: e => (0, r.jsx)(o.zxk, O(b({
          variant: "primary",
          text: m.intl.string(m.t.JIf4v7)
        }, e), {
          onClick: n,
          disabled: !R
        }))
      })]
    });
  return (0, r.jsx)(f.Z, {
    selectedBackgroundOption: T,
    onSelectBackgroundOption: P,
    onCancelPreview: E,
    renderCamera: w
  })
}