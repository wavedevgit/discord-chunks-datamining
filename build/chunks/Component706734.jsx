/** Chunk was on 9343 **/
/** chunk id: 706734, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk488889 = require("./488889.js"),
  Chunk226186 = require("./226186.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk308569 = require("./308569.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800010 = require("./800010.js");

function _(t) {
  let {
    onNext: e,
    onClose: n,
    reason: _,
    onReasonChange: d,
    freeTextResponse: A,
    setFreeTextResponse: x,
    transitionState: C
  } = t, g = c.zf.map(t => ({
    value: t,
    name: (0, i.S)(t)
  })), p = (0, l.u)("change_email_collect_reasons_slide");
  return (0, a.jsxs)(r.Ioy, {
    graphic: {
      type: "image",
      src: E
    },
    title: u.intl.string(u.t["41NIIh"]),
    onClose: n,
    transitionState: C,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: u.intl.string(u.t["3PatSz"]),
      disabled: null == _,
      onClick: e
    }],
    children: [(0, a.jsx)(r.FXm, {
      value: _,
      options: g,
      onChange: t => {
        s.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, {
          change_email_reason_enum: t
        }), d(t), x(""), t === c.pw.SOMETHING_ELSE && l.Z.trackExposure({
          location: "change_email_collect_reasons_slide"
        })
      }
    }), p && _ === c.pw.SOMETHING_ELSE && (0, a.jsx)(r.Kx8, {
      value: A,
      maxLength: c.mF,
      onChange: x,
      placeholder: u.intl.string(u.t.Q8Rk7N)
    })]
  })
}