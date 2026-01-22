/** Chunk was on web.js **/
/** chunk id: 711950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk73153 = require("./73153.js"),
  Chunk924283 = require("./924283.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  r.h.dispatch({
    type: "FRIENDS_SET_SECTION",
    section: e
  })
}
let l = {
  transitionToSection(e) {
    let {
      explicit: t = false
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    (0, a.JK)().location.pathname !== s.BVt.FRIENDS && (0, a.pX)(s.BVt.FRIENDS), o(e), t && (0, i.A)({
      tab_opened: e
    })
  },
  setSection: o,
  setInitialSection(e) {
    r.h.dispatch({
      type: "FRIENDS_SET_INITIAL_SECTION",
      section: e
    })
  }
}