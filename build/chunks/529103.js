/** Chunk was on web.js **/
/** chunk id: 529103, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk557968 = require("./557968.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  r.Z.dispatch({
    type: "FRIENDS_SET_SECTION",
    section: e
  })
}
let l = {
  transitionToSection(e) {
    let {
      explicit: t = false
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    (0, o.s1)().location.pathname !== a.Z5c.FRIENDS && (0, o.uL)(a.Z5c.FRIENDS), s(e), t && (0, i.Z)({
      tab_opened: e
    })
  },
  setSection: s,
  setInitialSection(e) {
    r.Z.dispatch({
      type: "FRIENDS_SET_INITIAL_SECTION",
      section: e
    })
  }
}