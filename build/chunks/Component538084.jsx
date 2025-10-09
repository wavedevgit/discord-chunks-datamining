/** Chunk was on 50118 **/
/** chunk id: 538084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p,
  k: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk45251 = require("./45251.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk206536 = require("./206536.js");
let d = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";

function p(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: l,
    prefilledTime: p
  } = e, h = a()(), f = a()().add(365, "days"), [m, g] = r.useState(null != p ? a()(p.substring(0, 200)) : h);
  return (0, i.jsxs)(o.Y0X, {
    transitionState: n,
    size: o.CgR.SMALL,
    "aria-label": c.intl.string(c.t.WbFpq6),
    parentComponent: "ScheduledMessageCreateModal",
    children: [(0, i.jsx)(o.olH, {
      onClick: l,
      className: u.closeButton
    }), (0, i.jsx)(o.xBx, {
      separator: false,
      className: u.header,
      children: (0, i.jsx)(o.X6q, {
        variant: "heading-xl/medium",
        children: c.intl.string(c.t["3+ii4O"])
      })
    }), (0, i.jsx)(o.hzk, {
      children: (0, i.jsxs)("div", {
        className: u.doubleInput,
        children: [(0, i.jsx)("div", {
          className: u.column,
          children: (0, i.jsx)(o.Wrb, {
            required: true,
            label: c.intl.string(c.t.pSZKvL),
            value: m,
            onSelect: e => {
              g(e)
            },
            minDate: h,
            maxDate: f,
            disabled: false
          })
        }), (0, i.jsx)("div", {
          className: u.column,
          children: (0, i.jsx)(o.MGJ, {
            label: c.intl.string(c.t.GOmEb2),
            required: true,
            value: m,
            onChange: e => {
              e.isValid() && g(e)
            },
            hideValue: false,
            disabled: false
          })
        })]
      })
    }), (0, i.jsxs)(o.mzw, {
      className: u.footer,
      children: [(0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.cancelButton,
        children: (0, i.jsx)(o.zxk, {
          variant: "secondary",
          text: c.intl.string(c.t["ETE/oK"]),
          onClick: l
        })
      }), (0, i.jsx)(o.zxk, {
        variant: "primary",
        text: c.intl.string(c.t.iQ1Swc),
        onClick: () => {
          (0, s._e)({
            channelId: t.id,
            scheduledTimestamp: m.toISOString()
          }), (0, o.Mr3)(d)
        },
        disabled: false
      })]
    })]
  })
}