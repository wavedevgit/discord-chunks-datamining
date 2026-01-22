/** Chunk was on web.js **/
/** chunk id: 851580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk966597 = require("./966597.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk936037 = require("./936037.js");
let d = Chunk554146.M.FOR_LATER_POPOUT_COACHMARK;

function f(e) {
  let {
    location: t,
    targetElementRef: n
  } = e, {
    enabled: i,
    inInbox: f
  } = o.A.useExperiment({
    location: "ForLaterCoachmarkWeb"
  }, {
    autoTrackExposure: false
  }), p = t === (f ? "inbox-button" : "bookmarks-button"), _ = i && p ? [d] : [], [h, m] = (0, s.kn)(_, true);
  return h !== d ? null : (0, r.jsx)(a.AM, {
    targetElementRef: n,
    gradientColor: "purple",
    position: "bottom",
    align: "right",
    shouldShow: true,
    caretConfig: {
      align: "end"
    },
    onRequestClose: () => m(l.i.USER_DISMISS),
    title: c.intl.string(c.t.qPbFK2),
    body: c.intl.string(c.t.URrJq1),
    actions: [{
      text: c.intl.string(c.t["NX+WJN"]),
      onClick: () => m(l.i.USER_DISMISS)
    }],
    graphic: {
      type: "image",
      src: u
    }
  })
}