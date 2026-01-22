/** Chunk was on 80959 **/
/** chunk id: 784578, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk976860 = require("./976860.js"),
  Chunk975571 = require("./975571.js"),
  Chunk612200 = require("./612200.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p() {
  return (0, l.IO)(), (0, a.pX)(u.BVt.LOGIN, {
    source: "existing_user_age_gate_underage"
  }), Promise.resolve()
}

function g(t) {
  let {
    underageMessage: e,
    transitionState: i
  } = t;
  return (0, s.jsx)(r.Modal, {
    transitionState: i,
    onClose: p,
    title: c.intl.string(c.t["NR/zrG"]),
    subtitle: c.intl.format(c.t.ukclM1, {
      underageMessage: null != e ? e : c.intl.string(c.t.WqEH4D),
      days: 30
    }),
    actions: [{
      text: c.intl.string(c.t.hvVgAZ),
      onClick: () => {
        window.open(o.A.getArticleURL(u.MVz.AGE_GATE), "_blank")
      },
      variant: "secondary"
    }, {
      text: c.intl.string(c.t.szzQ6H),
      onClick: p
    }],
    trackingProps: {
      impression: {
        impressionName: n.ImpressionNames.USER_AGE_GATE_UNDERAGE,
        impressionProperties: {
          existing_user: true
        }
      }
    }
  })
}