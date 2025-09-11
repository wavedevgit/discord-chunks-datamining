/** Chunk was on 97951 **/
/** chunk id: 537509, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk881576 = require("./881576.js");

function l(t) {
  let {
    transitionState: e,
    onConfirm: n,
    onClose: l
  } = t, [d, x] = a.useState(false), h = (0, o.Dt)();
  return (0, i.jsxs)(r.Y0X, {
    transitionState: e,
    "aria-labelledby": h,
    size: r.CgR.DYNAMIC,
    className: c.root,
    parentComponent: "AcceptRequestConfirmationModal",
    children: [(0, i.jsx)(r.xBx, {
      children: (0, i.jsx)(r.X6q, {
        id: h,
        variant: "heading-xl/bold",
        color: "header-primary",
        children: s.intl.string(s.t.eJzSDQ)
      })
    }), (0, i.jsx)(r.hzk, {
      className: c.content,
      children: (0, i.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: s.intl.string(s.t.GB4jU1)
      })
    }), (0, i.jsxs)(r.mzw, {
      className: c.footer,
      children: [(0, i.jsx)(r.zxk, {
        variant: "primary",
        text: s.intl.string(s.t.MMlhsr),
        type: "submit",
        onClick: () => {
          if (!d) {
            x(true);
            try {
              n()
            } catch (t) {} finally {
              x(false)
            }
            l()
          }
        },
        loading: d
      }), (0, i.jsx)(r.zxk, {
        variant: "secondary",
        text: s.intl.string(s.t["ETE/oK"]),
        onClick: l,
        disabled: d
      })]
    })]
  })
}