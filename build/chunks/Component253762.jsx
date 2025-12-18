/** Chunk was on 10667 **/
/** chunk id: 253762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk864762 = require("./864762.js"),
  Chunk428681 = require("./428681.jsx"),
  Chunk42338 = require("./42338.jsx"),
  Chunk569932 = require("./569932.jsx"),
  Chunk555638 = require("./555638.jsx"),
  Chunk42011 = require("./42011.jsx"),
  Chunk798930 = require("./798930.js"),
  Chunk926375 = require("./926375.js");

function p(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: p,
    platformType: C
  } = e, {
    slide: h,
    gotoNext: f,
    gotoError: T,
    handleWaitingForConnection: A,
    handleAuthToken: g,
    expectedCallbackState: _,
    callbackData: I,
    errorCode: N
  } = (0, a.k)(p, C);
  return (0, o.jsx)(i.Y0X, {
    "data-migration-pending": true,
    className: u.modal,
    transitionState: t,
    disableTrack: true,
    parentComponent: "PlayStationLinkModal",
    children: (0, o.jsxs)(i.MyZ, {
      activeSlide: h,
      width: 408,
      children: [(0, o.jsx)(i.Mi4, {
        id: b.O.LANDING,
        children: (0, o.jsx)(s.A, {
          platformType: C,
          onContinue: f,
          onClose: n
        })
      }), (0, o.jsx)(i.Mi4, {
        id: b.O.PRE_CONNECT,
        children: (0, o.jsx)(c.A, {
          platformType: C,
          isWaitingForConnection: false,
          onWaitingForConnection: A,
          onAuthToken: g,
          onError: T,
          onClose: n
        })
      }), (0, o.jsx)(i.Mi4, {
        id: b.O.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(c.A, {
          platformType: C,
          isWaitingForConnection: true,
          expectedCallbackState: _,
          onAuthToken: g,
          onError: T,
          onClose: n
        })
      }), (0, o.jsx)(i.Mi4, {
        id: b.O.DISCORD_CONSENT,
        children: (0, o.jsx)(r.E, {
          platformType: C,
          authToken: I,
          onContinue: f,
          onError: T,
          onClose: n
        })
      }), (0, o.jsx)(i.Mi4, {
        id: b.O.ERROR,
        children: (0, o.jsx)(d.X, {
          onContinue: f,
          onClose: n,
          errorCode: N
        })
      }), (0, o.jsx)(i.Mi4, {
        id: b.O.SUCCESS,
        children: (0, o.jsx)(l.W, {
          onClose: n
        })
      })]
    })
  })
}