/** Chunk was on 9343 **/
/** chunk id: 706734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk488889 = require("./488889.js"),
  Chunk226186 = require("./226186.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk308569 = require("./308569.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk844882 = require("./844882.js"),
  Chunk810512 = require("./810512.js");

function _(e) {
  let {
    onNext: t,
    onClose: n,
    reason: _,
    onReasonChange: E,
    freeTextResponse: N,
    setFreeTextResponse: h
  } = e, p = d.zf.map(e => ({
    value: e,
    name: (0, i.S)(e)
  })), A = (0, l.u)("change_email_collect_reasons_slide");
  return (0, a.jsxs)("form", {
    onSubmit: t,
    children: [(0, a.jsxs)(r.xBx, {
      separator: false,
      className: u.header,
      children: [(0, a.jsx)(r.X6q, {
        variant: "heading-xl/extrabold",
        children: m.intl.string(m.t["41NIIi"])
      }), (0, a.jsx)(r.olH, {
        onClick: n,
        className: u.modalCloseButton
      })]
    }), (0, a.jsxs)(r.hzk, {
      className: x.content,
      children: [(0, a.jsx)(s.Gu, {
        radioPosition: "right",
        radioItemClassName: x.radioItem,
        size: s.l7.NOT_SET,
        value: _,
        options: p,
        onChange: e => {
          let {
            value: t
          } = e;
          o.default.track(c.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, {
            change_email_reason_enum: t
          }), E(t), h(""), t === d.pw.SOMETHING_ELSE && l.Z.trackExposure({
            location: "change_email_collect_reasons_slide"
          })
        }
      }), A && _ === d.pw.SOMETHING_ELSE && (0, a.jsx)(r.xJW, {
        children: (0, a.jsx)(r.Kx8, {
          value: N,
          maxLength: d.mF,
          onChange: h,
          placeholder: m.intl.string(m.t.Q8Rk7O)
        })
      })]
    }), (0, a.jsx)(r.mzw, {
      className: u.modalFooter,
      children: (0, a.jsxs)(r.hE2, {
        direction: "horizontal-reverse",
        children: [(0, a.jsx)(r.zxk, {
          variant: "primary",
          text: m.intl.string(m.t["3PatS0"]),
          disabled: null == _,
          onClick: t
        }), (0, a.jsx)(r.zxk, {
          variant: "secondary",
          text: m.intl.string(m.t["ETE/oK"]),
          onClick: n
        })]
      })
    })]
  })
}