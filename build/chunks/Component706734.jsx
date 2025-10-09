/** Chunk was on 9343 **/
/** chunk id: 706734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk488889 = require("./488889.js"),
  Chunk226186 = require("./226186.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk308569 = require("./308569.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk583073 = require("./583073.js"),
  Chunk780187 = require("./780187.js");

function x(e) {
  let {
    onNext: t,
    onClose: n,
    reason: x,
    onReasonChange: _,
    freeTextResponse: E,
    setFreeTextResponse: N
  } = e, p = c.zf.map(e => ({
    value: e,
    name: (0, r.S)(e)
  })), h = (0, i.u)("change_email_collect_reasons_slide");
  return (0, a.jsxs)("form", {
    onSubmit: t,
    children: [(0, a.jsxs)(s.xBx, {
      separator: false,
      className: m.header,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-xl/extrabold",
        children: d.intl.string(d.t["41NIIi"])
      }), (0, a.jsx)(s.olH, {
        onClick: n,
        className: m.modalCloseButton
      })]
    }), (0, a.jsxs)(s.hzk, {
      className: u.content,
      children: [(0, a.jsx)(s.FXm, {
        value: x,
        options: p,
        onChange: e => {
          l.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, {
            change_email_reason_enum: e
          }), _(e), N(""), e === c.pw.SOMETHING_ELSE && i.Z.trackExposure({
            location: "change_email_collect_reasons_slide"
          })
        }
      }), h && x === c.pw.SOMETHING_ELSE && (0, a.jsx)(s.Kx8, {
        value: E,
        maxLength: c.mF,
        onChange: N,
        placeholder: d.intl.string(d.t.Q8Rk7O)
      })]
    }), (0, a.jsx)(s.mzw, {
      className: m.modalFooter,
      children: (0, a.jsxs)(s.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(s.Button, {
          variant: "primary",
          text: d.intl.string(d.t["3PatS0"]),
          disabled: null == x,
          onClick: t
        }), (0, a.jsx)(s.Button, {
          variant: "secondary",
          text: d.intl.string(d.t["ETE/oK"]),
          onClick: n
        })]
      })
    })]
  })
}