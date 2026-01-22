/** Chunk was on 41917 **/
/** chunk id: 126703, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk889058 = require("./889058.js"),
  Chunk710656 = require("./710656.jsx"),
  Chunk218390 = require("./218390.jsx"),
  Chunk13457 = require("./13457.jsx"),
  Chunk51937 = require("./51937.jsx"),
  Chunk949653 = require("./949653.jsx"),
  Chunk25765 = require("./25765.js"),
  Chunk652215 = require("./652215.js"),
  Chunk689588 = require("./689588.js");

function p(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: p
  } = e, {
    slide: g,
    gotoNext: h,
    gotoError: x,
    handleWaitingForConnection: C,
    handleAuthToken: m,
    expectedCallbackState: y,
    callbackData: j
  } = (0, i.m)(p, b.fg2.XBOX);
  return (0, r.jsx)(s.EOs, {
    "data-migration-pending": true,
    className: u.yl,
    transitionState: t,
    disableTrack: true,
    parentComponent: "XboxLinkModal",
    children: (0, r.jsxs)(s.tN_, {
      activeSlide: g,
      width: 408,
      children: [(0, r.jsx)(s.q7S, {
        id: f.N.LANDING,
        children: (0, r.jsx)(c.A, {
          onContinue: h,
          onClose: n
        })
      }), (0, r.jsx)(s.q7S, {
        id: f.N.PRE_CONNECT,
        children: (0, r.jsx)(l.A, {
          isWaitingForConnection: false,
          onWaitingForConnection: C,
          onAuthToken: m,
          onError: x,
          onClose: n
        })
      }), (0, r.jsx)(s.q7S, {
        id: f.N.PRE_CONNECT_WAITING,
        children: (0, r.jsx)(l.A, {
          isWaitingForConnection: true,
          expectedCallbackState: y,
          onAuthToken: m,
          onError: x,
          onClose: n
        })
      }), (0, r.jsx)(s.q7S, {
        id: f.N.DISCORD_CONSENT,
        children: (0, r.jsx)(o.A, {
          authToken: j,
          onContinue: h,
          onError: x,
          onClose: n
        })
      }), (0, r.jsx)(s.q7S, {
        id: f.N.ERROR,
        children: (0, r.jsx)(a.A, {
          onContinue: h,
          onClose: n
        })
      }), (0, r.jsx)(s.q7S, {
        id: f.N.SUCCESS,
        children: (0, r.jsx)(d.A, {
          onClose: n
        })
      })]
    })
  })
}