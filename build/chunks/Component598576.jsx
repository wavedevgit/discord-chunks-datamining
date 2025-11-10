/** Chunk was on 18290 **/
/** chunk id: 598576, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk864762 = require("./864762.js"),
  Chunk509340 = require("./509340.jsx"),
  Chunk135184 = require("./135184.jsx"),
  Chunk409553 = require("./409553.jsx"),
  Chunk494801 = require("./494801.jsx"),
  Chunk319392 = require("./319392.jsx"),
  Chunk798930 = require("./798930.js"),
  Chunk981631 = require("./981631.js"),
  Chunk771831 = require("./771831.js");

function b(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: b
  } = e, {
    slide: g,
    gotoNext: x,
    gotoError: h,
    handleWaitingForConnection: C,
    handleAuthToken: _,
    expectedCallbackState: m,
    callbackData: v
  } = (0, i.k)(b, p.ABu.XBOX);
  return (0, o.jsx)(r.Y0X, {
    className: f.modal,
    transitionState: t,
    disableTrack: true,
    parentComponent: "XboxLinkModal",
    children: (0, o.jsxs)(r.MyZ, {
      activeSlide: g,
      width: 408,
      children: [(0, o.jsx)(r.Mi4, {
        id: u.O.LANDING,
        children: (0, o.jsx)(c.Z, {
          onContinue: x,
          onClose: n
        })
      }), (0, o.jsx)(r.Mi4, {
        id: u.O.PRE_CONNECT,
        children: (0, o.jsx)(l.Z, {
          isWaitingForConnection: false,
          onWaitingForConnection: C,
          onAuthToken: _,
          onError: h,
          onClose: n
        })
      }), (0, o.jsx)(r.Mi4, {
        id: u.O.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(l.Z, {
          isWaitingForConnection: true,
          expectedCallbackState: m,
          onAuthToken: _,
          onError: h,
          onClose: n
        })
      }), (0, o.jsx)(r.Mi4, {
        id: u.O.DISCORD_CONSENT,
        children: (0, o.jsx)(s.Z, {
          authToken: v,
          onContinue: x,
          onError: h,
          onClose: n
        })
      }), (0, o.jsx)(r.Mi4, {
        id: u.O.ERROR,
        children: (0, o.jsx)(a.Z, {
          onContinue: x,
          onClose: n
        })
      }), (0, o.jsx)(r.Mi4, {
        id: u.O.SUCCESS,
        children: (0, o.jsx)(d.Z, {
          onClose: n
        })
      })]
    })
  })
}