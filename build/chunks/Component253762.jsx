/** Chunk was on 10667 **/
/** chunk id: 253762, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk864762 = require("./864762.js"),
  Chunk428681 = require("./428681.jsx"),
  Chunk42338 = require("./42338.jsx"),
  Chunk569932 = require("./569932.jsx"),
  Chunk555638 = require("./555638.jsx"),
  Chunk42011 = require("./42011.jsx"),
  Chunk798930 = require("./798930.js"),
  Chunk771831 = require("./771831.js");

function _(t) {
  let {
    transitionState: n,
    onClose: e,
    analyticsLocation: _,
    platformType: b
  } = t, {
    slide: C,
    gotoNext: T,
    gotoError: h,
    handleWaitingForConnection: f,
    handleAuthToken: A,
    expectedCallbackState: g,
    callbackData: I,
    errorCode: N
  } = (0, r.k)(_, b);
  return (0, o.jsx)(i.Y0X, {
    className: p.modal,
    transitionState: n,
    disableTrack: true,
    parentComponent: "PlayStationLinkModal",
    children: (0, o.jsxs)(i.MyZ, {
      activeSlide: C,
      width: 408,
      children: [(0, o.jsx)(i.Mi4, {
        id: u.O.LANDING,
        children: (0, o.jsx)(c.A, {
          platformType: b,
          onContinue: T,
          onClose: e
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.PRE_CONNECT,
        children: (0, o.jsx)(l.A, {
          platformType: b,
          isWaitingForConnection: false,
          onWaitingForConnection: f,
          onAuthToken: A,
          onError: h,
          onClose: e
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(l.A, {
          platformType: b,
          isWaitingForConnection: true,
          expectedCallbackState: g,
          onAuthToken: A,
          onError: h,
          onClose: e
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.DISCORD_CONSENT,
        children: (0, o.jsx)(s.E, {
          platformType: b,
          authToken: I,
          onContinue: T,
          onError: h,
          onClose: e
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.ERROR,
        children: (0, o.jsx)(a.X, {
          onContinue: T,
          onClose: e,
          errorCode: N
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.SUCCESS,
        children: (0, o.jsx)(d.W, {
          onClose: e
        })
      })]
    })
  })
}