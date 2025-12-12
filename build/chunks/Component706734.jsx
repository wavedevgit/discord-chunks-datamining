/** Chunk was on 9343 **/
/** chunk id: 706734, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk488889 = require("./488889.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk308569 = require("./308569.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800010 = require("./800010.js");

function E(t) {
  let {
    onNext: n,
    onClose: e,
    reason: E,
    onReasonChange: A,
    transitionState: _
  } = t, d = o.zf.map(t => ({
    value: t,
    name: (0, a.S)(t)
  }));
  return (0, r.jsx)(i.Ioy, {
    graphic: {
      type: "image",
      src: u
    },
    title: c.intl.string(c.t["41NIIh"]),
    onClose: e,
    transitionState: _,
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: e
    }, {
      variant: "primary",
      text: c.intl.string(c.t["3PatSz"]),
      disabled: null == E,
      onClick: n
    }],
    children: (0, r.jsx)(i.FXm, {
      value: E,
      options: d,
      onChange: t => {
        l.default.track(s.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, {
          change_email_reason_enum: t
        }), A(t)
      }
    })
  })
}