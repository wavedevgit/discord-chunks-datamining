/** Chunk was on 80360 **/
/** chunk id: 782107, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => f
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

function f(t) {
  let {
    transitionState: n,
    onClose: e,
    analyticsLocation: f,
    platformType: A
  } = t, {
    slide: T,
    gotoNext: g,
    gotoError: C,
    handleWaitingForConnection: h,
    handleAuthToken: N,
    expectedCallbackState: _,
    callbackData: u,
    errorCode: I
  } = (0, a.m)(f, A);
  return (0, o.jsx)(i.EOs, {
    "data-migration-pending": true,
    className: p.yl,
    transitionState: n,
    disableTrack: true,
    parentComponent: "PlayStationLinkModal",
    children: (0, o.jsxs)(i.tN_, {
      activeSlide: T,
      width: 408,
      children: [(0, o.jsx)(i.q7S, {
        id: b.N.LANDING,
        children: (0, o.jsx)(r.g, {
          platformType: A,
          onContinue: g,
          onClose: e
        })
      }), (0, o.jsx)(i.q7S, {
        id: b.N.PRE_CONNECT,
        children: (0, o.jsx)(c.o, {
          platformType: A,
          isWaitingForConnection: false,
          onWaitingForConnection: h,
          onAuthToken: N,
          onError: C,
          onClose: e
        })
      }), (0, o.jsx)(i.q7S, {
        id: b.N.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(c.o, {
          platformType: A,
          isWaitingForConnection: true,
          expectedCallbackState: _,
          onAuthToken: N,
          onError: C,
          onClose: e
        })
      }), (0, o.jsx)(i.q7S, {
        id: b.N.DISCORD_CONSENT,
        children: (0, o.jsx)(s.V, {
          platformType: A,
          authToken: u,
          onContinue: g,
          onError: C,
          onClose: e
        })
      }), (0, o.jsx)(i.q7S, {
        id: b.N.ERROR,
        children: (0, o.jsx)(d.B, {
          onContinue: g,
          onClose: e,
          errorCode: I
        })
      }), (0, o.jsx)(i.q7S, {
        id: b.N.SUCCESS,
        children: (0, o.jsx)(l.c, {
          onClose: e
        })
      })]
    })
  })
}