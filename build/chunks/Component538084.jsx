/** Chunk was on 88647 **/
/** chunk id: 538084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f,
  k: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45251 = require("./45251.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk206536 = require("./206536.js");
let p = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";

function f(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: l,
    prefilledTime: f
  } = e, h = a()(), m = a()().add(365, "days"), [g, b] = i.useState(null != f ? a()(f.substring(0, 200)) : h);
  return (0, r.jsx)(o.Modal, {
    transitionState: n,
    size: "md",
    title: u.intl.string(u.t["3+ii4F"]),
    onClose: l,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: l
    }, {
      variant: "primary",
      text: u.intl.string(u.t.iQ1SwX),
      onClick: () => {
        (0, c._e)({
          channelId: t.id,
          scheduledTimestamp: g.toISOString()
        }), (0, s.Mr3)(p)
      }
    }],
    children: (0, r.jsxs)("div", {
      className: d.doubleInput,
      children: [(0, r.jsx)("div", {
        className: d.column,
        children: (0, r.jsx)(s.Wrb, {
          required: true,
          label: u.intl.string(u.t.pSZKvM),
          value: g,
          onSelect: e => {
            b(e)
          },
          minDate: h,
          maxDate: m,
          disabled: false
        })
      }), (0, r.jsx)("div", {
        className: d.column,
        children: (0, r.jsx)(s.MGJ, {
          label: u.intl.string(u.t.GOmEb8),
          required: true,
          value: g,
          onChange: e => {
            e.isValid() && b(e)
          },
          hideValue: false,
          disabled: false
        })
      })]
    })
  })
}