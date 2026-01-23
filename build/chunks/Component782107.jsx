/** Chunk was on 80360 **/
/** chunk id: 782107, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk889058 = require("./889058.js"),
  Chunk441124 = require("./441124.jsx"),
  Chunk280978 = require("./280978.jsx"),
  Chunk318085 = require("./318085.jsx"),
  Chunk995605 = require("./995605.jsx"),
  Chunk711905 = require("./711905.jsx"),
  Chunk25765 = require("./25765.js"),
  Chunk689588 = require("./689588.js");

function b(t) {
  let {
    transitionState: e,
    onClose: n,
    analyticsLocation: b,
    platformType: C
  } = t, {
    slide: A,
    gotoNext: T,
    gotoError: h,
    handleWaitingForConnection: g,
    handleAuthToken: u,
    expectedCallbackState: N,
    callbackData: f,
    errorCode: I
  } = (0, r.m)(b, C);
  return (0, o.jsx)(i.EOs, {
    "data-migration-pending": true,
    className: p.yl,
    transitionState: e,
    disableTrack: true,
    parentComponent: "PlayStationLinkModal",
    children: (0, o.jsxs)(i.tN_, {
      activeSlide: A,
      width: 408,
      children: [(0, o.jsx)(i.q7S, {
        id: _.N.LANDING,
        children: (0, o.jsx)(c.g, {
          platformType: C,
          onContinue: T,
          onClose: n
        })
      }), (0, o.jsx)(i.q7S, {
        id: _.N.PRE_CONNECT,
        children: (0, o.jsx)(l.o, {
          platformType: C,
          isWaitingForConnection: false,
          onWaitingForConnection: g,
          onAuthToken: u,
          onError: h,
          onClose: n
        })
      }), (0, o.jsx)(i.q7S, {
        id: _.N.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(l.o, {
          platformType: C,
          isWaitingForConnection: true,
          expectedCallbackState: N,
          onAuthToken: u,
          onError: h,
          onClose: n
        })
      }), (0, o.jsx)(i.q7S, {
        id: _.N.DISCORD_CONSENT,
        children: (0, o.jsx)(s.V, {
          platformType: C,
          authToken: f,
          onContinue: T,
          onError: h,
          onClose: n
        })
      }), (0, o.jsx)(i.q7S, {
        id: _.N.ERROR,
        children: (0, o.jsx)(a.B, {
          onContinue: T,
          onClose: n,
          errorCode: I
        })
      }), (0, o.jsx)(i.q7S, {
        id: _.N.SUCCESS,
        children: (0, o.jsx)(d.c, {
          onClose: n
        })
      })]
    })
  })
}