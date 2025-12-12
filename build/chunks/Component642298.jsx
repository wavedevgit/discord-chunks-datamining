/** Chunk was on 9343 **/
/** chunk id: 642298, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk706734 = require("./706734.jsx"),
  Chunk264119 = require("./264119.jsx"),
  Chunk75788 = require("./75788.jsx"),
  Chunk22150 = require("./22150.jsx"),
  Chunk361833 = require("./361833.jsx"),
  Chunk134562 = require("./134562.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js"),
  Chunk308569 = require("./308569.js");

function S(t) {
  let {
    transitionState: n,
    onClose: e
  } = t, S = (0, a.e7)([s.default], () => s.default.getCurrentUser());
  i.useEffect(() => (o.default.track(x.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, l.Zy)()), []);
  let g = null == S ? true : S.verified,
    f = g ? C.Ax.CONFIRM_START : C.Ax.EMAIL_AND_PASSWORD,
    [p, m] = i.useState(f),
    [v, y] = i.useState(null),
    [h, M] = i.useState(null),
    [T, I] = i.useState(""),
    [R, O] = i.useState();
  switch (p) {
    case C.Ax.CONFIRM_START:
      return (0, r.jsx)(A.Z, {
        onNext: () => m(C.Ax.CONFIRM_CODE),
        onClose: e,
        transitionState: n
      });
    case C.Ax.CONFIRM_CODE:
      return (0, r.jsx)(E.Z, {
        error: h,
        setError: M,
        setEmailToken: y,
        onNext: () => m(C.Ax.CHANGE_EMAIL_REASONS),
        transitionState: n,
        onClose: e
      });
    case C.Ax.CHANGE_EMAIL_REASONS:
      return (0, r.jsx)(c.Z, {
        onNext: () => (o.default.track(x.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
          change_email_reason_enum: R
        }), null != R && N.Mr.has(R) ? m(C.Ax.CHANGE_EMAIL_WARNING) : m(C.Ax.EMAIL_AND_PASSWORD)),
        transitionState: n,
        onClose: e,
        reason: R,
        onReasonChange: O
      });
    case C.Ax.CHANGE_EMAIL_WARNING:
      return (0, r.jsx)(d.Z, {
        onNext: () => {
          o.default.track(x.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, {
            change_email_reason_enum: R
          }), m(C.Ax.EMAIL_AND_PASSWORD)
        },
        onClose: e,
        transitionState: n
      });
    case C.Ax.EMAIL_AND_PASSWORD:
      return (0, r.jsx)(_.Z, {
        emailToken: v,
        onBack: g ? () => m(null != R && N.Mr.has(R) ? C.Ax.CHANGE_EMAIL_WARNING : C.Ax.CHANGE_EMAIL_REASONS) : null,
        onNext: t => {
          o.default.track(x.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
            change_email_reason_enum: R
          }), I(t), m(C.Ax.COMPLETE)
        },
        onClose: e,
        transitionState: n
      });
    case C.Ax.COMPLETE:
      return (0, r.jsx)(u.Z, {
        email: T,
        onClose: e,
        transitionState: n
      });
    default:
      return null
  }
}