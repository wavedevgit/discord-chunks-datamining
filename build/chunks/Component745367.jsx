/** Chunk was on 4419 **/
/** chunk id: 745367, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk864762 = require("./864762.js"),
  Chunk674458 = require("./674458.jsx"),
  Chunk642566 = require("./642566.jsx"),
  Chunk742699 = require("./742699.jsx"),
  Chunk686494 = require("./686494.jsx"),
  Chunk573703 = require("./573703.jsx"),
  Chunk798930 = require("./798930.js"),
  Chunk981631 = require("./981631.js"),
  Chunk200025 = require("./200025.js");

function h(n) {
  let {
    transitionState: e,
    onClose: t,
    analyticsLocation: h
  } = n, {
    slide: p,
    gotoNext: x,
    gotoError: b,
    handleWaitingForConnection: g,
    handleAuthToken: f,
    expectedCallbackState: v,
    callbackData: j
  } = (0, r.k)(h, C.ABu.CRUNCHYROLL);
  return (0, o.jsx)(i.Y0X, {
    className: _.modal,
    transitionState: e,
    disableTrack: true,
    parentComponent: "CrunchyrollLinkModal",
    children: (0, o.jsxs)(i.MyZ, {
      activeSlide: p,
      width: 408,
      children: [(0, o.jsx)(i.Mi4, {
        id: u.O.LANDING,
        children: (0, o.jsx)(a.Z, {
          onContinue: x,
          onClose: t
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.PRE_CONNECT,
        children: (0, o.jsx)(c.Z, {
          isWaitingForConnection: false,
          onWaitingForConnection: g,
          onAuthToken: f,
          onError: b,
          onClose: t
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(c.Z, {
          isWaitingForConnection: true,
          expectedCallbackState: v,
          onAuthToken: f,
          onError: b,
          onClose: t
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.DISCORD_CONSENT,
        children: (0, o.jsx)(s.Z, {
          authToken: j,
          onContinue: x,
          onError: b,
          onClose: t
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.ERROR,
        children: (0, o.jsx)(l.Z, {
          onContinue: x,
          onClose: t
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.SUCCESS,
        children: (0, o.jsx)(d.Z, {
          onClose: t
        })
      })]
    })
  })
}