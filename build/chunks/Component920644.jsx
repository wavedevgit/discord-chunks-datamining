/** Chunk was on 80478 **/
/** chunk id: 920644, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk703656 = require("./703656.js"),
  Chunk63063 = require("./63063.js"),
  Chunk758119 = require("./758119.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  return (0, Chunk758119.qV)(), (0, Chunk703656.uL)(Chunk981631.Z5c.LOGIN, {
    source: "existing_user_age_gate_underage"
  }), Promise.resolve()
}

function p(t) {
  let {
    underageMessage: e,
    transitionState: i
  } = t;
  return (0, n.jsx)(r.Modal, {
    transitionState: i,
    onClose: g,
    title: c.intl.string(c.t["NR/zrK"]),
    subtitle: c.intl.format(c.t.ukclMz, {
      underageMessage: null != e ? e : c.intl.string(c.t.WqEH4O),
      days: 30
    }),
    actions: [{
      text: c.intl.string(c.t.hvVgAQ),
      onClick: () => {
        window.open(o.Z.getArticleURL(u.BhN.AGE_GATE), "_blank")
      },
      variant: "secondary"
    }, {
      text: c.intl.string(c.t.szzQ6O),
      onClick: g
    }],
    trackingProps: {
      impression: {
        impressionName: s.ImpressionNames.USER_AGE_GATE_UNDERAGE,
        impressionProperties: {
          existing_user: true
        }
      }
    }
  })
}