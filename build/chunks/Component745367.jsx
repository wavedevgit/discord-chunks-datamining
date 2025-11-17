/** Chunk was on 4419 **/
/** chunk id: 745367, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk864762 = require("./864762.js"),
  Chunk779341 = require("./779341.jsx"),
  Chunk642566 = require("./642566.jsx"),
  Chunk742699 = require("./742699.jsx"),
  Chunk686494 = require("./686494.jsx"),
  Chunk573703 = require("./573703.jsx"),
  Chunk798930 = require("./798930.js"),
  Chunk981631 = require("./981631.js"),
  Chunk771831 = require("./771831.js");

function _(n) {
  let {
    transitionState: e,
    onClose: t,
    analyticsLocation: _
  } = n, {
    slide: p,
    gotoNext: x,
    gotoError: g,
    handleWaitingForConnection: b,
    handleAuthToken: f,
    expectedCallbackState: v,
    callbackData: N
  } = (0, r.k)(_, C.ABu.CRUNCHYROLL);
  return (0, o.jsx)(i.Y0X, {
    className: h.modal,
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
          onWaitingForConnection: b,
          onAuthToken: f,
          onError: g,
          onClose: t
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(c.Z, {
          isWaitingForConnection: true,
          expectedCallbackState: v,
          onAuthToken: f,
          onError: g,
          onClose: t
        })
      }), (0, o.jsx)(i.Mi4, {
        id: u.O.DISCORD_CONSENT,
        children: (0, o.jsx)(s.Z, {
          authToken: N,
          onContinue: x,
          onError: g,
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