/** Chunk was on 41917 **/
/** chunk id: 126703, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => b
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

function b(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: b
  } = e, {
    slide: g,
    gotoNext: _,
    gotoError: h,
    handleWaitingForConnection: x,
    handleAuthToken: C,
    expectedCallbackState: m,
    callbackData: y
  } = (0, s.m)(b, u.fg2.XBOX);
  return (0, r.jsx)(o.EOs, {
    "data-migration-pending": true,
    className: f.yl,
    transitionState: t,
    disableTrack: true,
    parentComponent: "XboxLinkModal",
    children: (0, r.jsxs)(o.tN_, {
      activeSlide: g,
      width: 408,
      children: [(0, r.jsx)(o.q7S, {
        id: p.N.LANDING,
        children: (0, r.jsx)(l.A, {
          onContinue: _,
          onClose: n
        })
      }), (0, r.jsx)(o.q7S, {
        id: p.N.PRE_CONNECT,
        children: (0, r.jsx)(c.A, {
          isWaitingForConnection: false,
          onWaitingForConnection: x,
          onAuthToken: C,
          onError: h,
          onClose: n
        })
      }), (0, r.jsx)(o.q7S, {
        id: p.N.PRE_CONNECT_WAITING,
        children: (0, r.jsx)(c.A, {
          isWaitingForConnection: true,
          expectedCallbackState: m,
          onAuthToken: C,
          onError: h,
          onClose: n
        })
      }), (0, r.jsx)(o.q7S, {
        id: p.N.DISCORD_CONSENT,
        children: (0, r.jsx)(i.A, {
          authToken: y,
          onContinue: _,
          onError: h,
          onClose: n
        })
      }), (0, r.jsx)(o.q7S, {
        id: p.N.ERROR,
        children: (0, r.jsx)(a.A, {
          onContinue: _,
          onClose: n
        })
      }), (0, r.jsx)(o.q7S, {
        id: p.N.SUCCESS,
        children: (0, r.jsx)(d.A, {
          onClose: n
        })
      })]
    })
  })
}