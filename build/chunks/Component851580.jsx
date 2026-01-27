/** Chunk was on 52199 **/
/** chunk id: 851580, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  v: () => h
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

function h(e) {
  let {
    location: t,
    targetElementRef: r
  } = e, {
    enabled: l,
    inInbox: h
  } = i.A.useExperiment({
    location: "ForLaterCoachmarkWeb"
  }, {
    autoTrackExposure: false
  }), [p, f] = (0, a.kn)(l && t === (h ? "inbox-button" : "bookmarks-button") ? [d] : [], true);
  return p !== d ? null : (0, n.jsx)(s.AM, {
    targetElementRef: r,
    gradientColor: "purple",
    position: "bottom",
    align: "right",
    shouldShow: true,
    caretConfig: {
      align: "end"
    },
    onRequestClose: () => f(o.i.USER_DISMISS),
    title: c.intl.string(c.t.qPbFK2),
    body: c.intl.string(c.t.URrJq1),
    actions: [{
      text: c.intl.string(c.t["NX+WJN"]),
      onClick: () => f(o.i.USER_DISMISS)
    }],
    graphic: {
      type: "image",
      src: u
    }
  })
}