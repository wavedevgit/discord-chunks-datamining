/** Chunk was on 9343 **/
/** chunk id: 642298, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
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

function p(t) {
  let {
    transitionState: e,
    onClose: n
  } = t, p = (0, i.e7)([s.default], () => s.default.getCurrentUser());
  r.useEffect(() => (o.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, l.Zy)()), []);
  let S = null == p ? true : p.verified,
    f = S ? x.Ax.CONFIRM_START : x.Ax.EMAIL_AND_PASSWORD,
    [N, m] = r.useState(f),
    [h, T] = r.useState(null),
    [v, y] = r.useState(null),
    [M, R] = r.useState(""),
    [I, O] = r.useState(),
    [k, L] = r.useState("");
  switch (N) {
    case x.Ax.CONFIRM_START:
      return (0, a.jsx)(_.Z, {
        onNext: () => m(x.Ax.CONFIRM_CODE),
        onClose: n,
        transitionState: e
      });
    case x.Ax.CONFIRM_CODE:
      return (0, a.jsx)(E.Z, {
        error: v,
        setError: y,
        setEmailToken: T,
        onNext: () => m(x.Ax.CHANGE_EMAIL_REASONS),
        transitionState: e,
        onClose: n
      });
    case x.Ax.CHANGE_EMAIL_REASONS:
      return (0, a.jsx)(c.Z, {
        onNext: () => (o.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
          change_email_reason_enum: I
        }), null != I && g.Mr.has(I) ? m(x.Ax.CHANGE_EMAIL_WARNING) : m(x.Ax.EMAIL_AND_PASSWORD)),
        transitionState: e,
        onClose: n,
        reason: I,
        onReasonChange: O,
        freeTextResponse: k,
        setFreeTextResponse: L
      });
    case x.Ax.CHANGE_EMAIL_WARNING:
      return (0, a.jsx)(A.Z, {
        onNext: () => {
          o.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, {
            change_email_reason_enum: I
          }), m(x.Ax.EMAIL_AND_PASSWORD)
        },
        onClose: n,
        transitionState: e
      });
    case x.Ax.EMAIL_AND_PASSWORD:
      return (0, a.jsx)(d.Z, {
        emailToken: h,
        onBack: S ? () => m(null != I && g.Mr.has(I) ? x.Ax.CHANGE_EMAIL_WARNING : x.Ax.CHANGE_EMAIL_REASONS) : null,
        onNext: t => {
          o.default.track(C.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
            change_email_reason_enum: I,
            free_text_response: k
          }), R(t), m(x.Ax.COMPLETE)
        },
        onClose: n,
        transitionState: e
      });
    case x.Ax.COMPLETE:
      return (0, a.jsx)(u.Z, {
        email: M,
        onClose: n,
        transitionState: e
      });
    default:
      return null
  }
}