/** Chunk was on 36456 **/
/** chunk id: 24987, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk889058 = require("./889058.js"),
  Chunk572196 = require("./572196.jsx"),
  Chunk523858 = require("./523858.jsx"),
  Chunk672517 = require("./672517.jsx"),
  Chunk575957 = require("./575957.jsx"),
  Chunk66337 = require("./66337.jsx"),
  Chunk25765 = require("./25765.js"),
  Chunk652215 = require("./652215.js"),
  Chunk689588 = require("./689588.js");

function g(e) {
  let {
    transitionState: n,
    onClose: t,
    analyticsLocation: g
  } = e, {
    slide: h,
    gotoNext: x,
    gotoError: p,
    handleWaitingForConnection: b,
    handleAuthToken: N,
    expectedCallbackState: j,
    callbackData: v
  } = (0, r.m)(g, _.fg2.CRUNCHYROLL);
  return (0, o.jsx)(i.EOs, {
    "data-migration-pending": true,
    className: u.yl,
    transitionState: n,
    disableTrack: true,
    parentComponent: "CrunchyrollLinkModal",
    children: (0, o.jsxs)(i.tN_, {
      activeSlide: h,
      width: 408,
      children: [(0, o.jsx)(i.q7S, {
        id: C.N.LANDING,
        children: (0, o.jsx)(a.A, {
          onContinue: x,
          onClose: t
        })
      }), (0, o.jsx)(i.q7S, {
        id: C.N.PRE_CONNECT,
        children: (0, o.jsx)(d.A, {
          isWaitingForConnection: false,
          onWaitingForConnection: b,
          onAuthToken: N,
          onError: p,
          onClose: t
        })
      }), (0, o.jsx)(i.q7S, {
        id: C.N.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(d.A, {
          isWaitingForConnection: true,
          expectedCallbackState: j,
          onAuthToken: N,
          onError: p,
          onClose: t
        })
      }), (0, o.jsx)(i.q7S, {
        id: C.N.DISCORD_CONSENT,
        children: (0, o.jsx)(s.A, {
          authToken: v,
          onContinue: x,
          onError: p,
          onClose: t
        })
      }), (0, o.jsx)(i.q7S, {
        id: C.N.ERROR,
        children: (0, o.jsx)(l.A, {
          onContinue: x,
          onClose: t
        })
      }), (0, o.jsx)(i.q7S, {
        id: C.N.SUCCESS,
        children: (0, o.jsx)(c.A, {
          onClose: t
        })
      })]
    })
  })
}