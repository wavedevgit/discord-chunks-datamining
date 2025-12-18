/** Chunk was on 18290 **/
/** chunk id: 598576, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk864762 = require("./864762.js"),
  Chunk509340 = require("./509340.jsx"),
  Chunk135184 = require("./135184.jsx"),
  Chunk409553 = require("./409553.jsx"),
  Chunk494801 = require("./494801.jsx"),
  Chunk319392 = require("./319392.jsx"),
  Chunk798930 = require("./798930.js"),
  Chunk981631 = require("./981631.js"),
  Chunk926375 = require("./926375.js");

function f(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: f
  } = e, {
    slide: g,
    gotoNext: x,
    gotoError: h,
    handleWaitingForConnection: C,
    handleAuthToken: m,
    expectedCallbackState: v,
    callbackData: O
  } = (0, i.k)(f, p.ABu.XBOX);
  return (0, o.jsx)(r.Y0X, {
    "data-migration-pending": true,
    className: b.modal,
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
          onAuthToken: m,
          onError: h,
          onClose: n
        })
      }), (0, o.jsx)(r.Mi4, {
        id: u.O.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(l.Z, {
          isWaitingForConnection: true,
          expectedCallbackState: v,
          onAuthToken: m,
          onError: h,
          onClose: n
        })
      }), (0, o.jsx)(r.Mi4, {
        id: u.O.DISCORD_CONSENT,
        children: (0, o.jsx)(s.Z, {
          authToken: O,
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