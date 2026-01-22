/** Chunk was on 36456 **/
/** chunk id: 24987, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function h(n) {
  let {
    transitionState: e,
    onClose: t,
    analyticsLocation: h
  } = n, {
    slide: x,
    gotoNext: f,
    gotoError: u,
    handleWaitingForConnection: p,
    handleAuthToken: N,
    expectedCallbackState: j,
    callbackData: _
  } = (0, r.m)(h, b.fg2.CRUNCHYROLL);
  return (0, i.jsx)(o.EOs, {
    "data-migration-pending": true,
    className: g.yl,
    transitionState: e,
    disableTrack: true,
    parentComponent: "CrunchyrollLinkModal",
    children: (0, i.jsxs)(o.tN_, {
      activeSlide: x,
      width: 408,
      children: [(0, i.jsx)(o.q7S, {
        id: C.N.LANDING,
        children: (0, i.jsx)(d.A, {
          onContinue: f,
          onClose: t
        })
      }), (0, i.jsx)(o.q7S, {
        id: C.N.PRE_CONNECT,
        children: (0, i.jsx)(l.A, {
          isWaitingForConnection: false,
          onWaitingForConnection: p,
          onAuthToken: N,
          onError: u,
          onClose: t
        })
      }), (0, i.jsx)(o.q7S, {
        id: C.N.PRE_CONNECT_WAITING,
        children: (0, i.jsx)(l.A, {
          isWaitingForConnection: true,
          expectedCallbackState: j,
          onAuthToken: N,
          onError: u,
          onClose: t
        })
      }), (0, i.jsx)(o.q7S, {
        id: C.N.DISCORD_CONSENT,
        children: (0, i.jsx)(s.A, {
          authToken: _,
          onContinue: f,
          onError: u,
          onClose: t
        })
      }), (0, i.jsx)(o.q7S, {
        id: C.N.ERROR,
        children: (0, i.jsx)(a.A, {
          onContinue: f,
          onClose: t
        })
      }), (0, i.jsx)(o.q7S, {
        id: C.N.SUCCESS,
        children: (0, i.jsx)(c.A, {
          onClose: t
        })
      })]
    })
  })
}