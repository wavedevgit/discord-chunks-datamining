/** Chunk was on 9343 **/
/** chunk id: 706734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk488889 = require("./488889.js"),
  Chunk226186 = require("./226186.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk308569 = require("./308569.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk104772 = require("./104772.js"),
  Chunk652297 = require("./652297.js");

function _(e) {
  let {
    onNext: t,
    onClose: n,
    reason: _,
    onReasonChange: E,
    freeTextResponse: N,
    setFreeTextResponse: h
  } = e, A = d.zf.map(e => ({
    value: e,
    name: (0, i.S)(e)
  })), p = (0, l.u)("change_email_collect_reasons_slide");
  return (0, s.jsxs)("form", {
    onSubmit: t,
    children: [(0, s.jsxs)(r.xBx, {
      separator: false,
      className: u.header,
      children: [(0, s.jsx)(r.X6q, {
        variant: "heading-xl/extrabold",
        children: x.intl.string(x.t["41NIIi"])
      }), (0, s.jsx)(r.olH, {
        onClick: n,
        className: u.modalCloseButton
      })]
    }), (0, s.jsxs)(r.hzk, {
      className: m.content,
      children: [(0, s.jsx)(r.FXm, {
        radioPosition: "right",
        radioItemClassName: m.radioItem,
        size: r.FXm.Sizes.NOT_SET,
        value: _,
        options: A,
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
      }), p && _ === d.pw.SOMETHING_ELSE && (0, s.jsx)(r.xJW, {
        children: (0, s.jsx)(a.iS, {
          value: N,
          maxLength: d.mF,
          onChange: h,
          className: m.textArea,
          placeholder: x.intl.string(x.t.Q8Rk7O)
        })
      })]
    }), (0, s.jsx)(r.mzw, {
      className: u.modalFooter,
      children: (0, s.jsxs)(r.hE2, {
        direction: "horizontal-reverse",
        children: [(0, s.jsx)(r.zxk, {
          variant: "primary",
          text: x.intl.string(x.t["3PatS0"]),
          disabled: null == _,
          onClick: t
        }), (0, s.jsx)(r.zxk, {
          variant: "secondary",
          text: x.intl.string(x.t["ETE/oK"]),
          onClick: n
        })]
      })
    })]
  })
}