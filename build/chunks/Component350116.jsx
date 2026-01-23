/** Chunk was on 83269 **/
/** chunk id: 350116, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk631670 = require("./631670.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk29711 = require("./29711.jsx"),
  Chunk755447 = require("./755447.jsx"),
  Chunk972201 = require("./972201.jsx"),
  Chunk627396 = require("./627396.jsx"),
  Chunk334622 = require("./334622.jsx"),
  Chunk599436 = require("./599436.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js"),
  Chunk87404 = require("./87404.js");

function S(t) {
  let {
    transitionState: e,
    onClose: n
  } = t, S = (0, i.bG)([s.default], () => s.default.getCurrentUser());
  r.useEffect(() => (o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, l.Uo)()), []);
  let k = null == S ? true : S.verified,
    m = k ? d.ko.CONFIRM_START : d.ko.EMAIL_AND_PASSWORD,
    [h, x] = r.useState(m),
    [p, v] = r.useState(null),
    [f, T] = r.useState(null),
    [y, R] = r.useState(""),
    [M, O] = r.useState();
  switch (h) {
    case d.ko.CONFIRM_START:
      return (0, a.jsx)(A.A, {
        onNext: () => x(d.ko.CONFIRM_CODE),
        onClose: n,
        transitionState: e
      });
    case d.ko.CONFIRM_CODE:
      return (0, a.jsx)(E.A, {
        error: f,
        setError: T,
        setEmailToken: v,
        onNext: () => x(d.ko.CHANGE_EMAIL_REASONS),
        transitionState: e,
        onClose: n
      });
    case d.ko.CHANGE_EMAIL_REASONS:
      return (0, a.jsx)(c.A, {
        onNext: () => (o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
          change_email_reason_enum: M
        }), null != M && N.qr.has(M) ? x(d.ko.CHANGE_EMAIL_WARNING) : x(d.ko.EMAIL_AND_PASSWORD)),
        transitionState: e,
        onClose: n,
        reason: M,
        onReasonChange: O
      });
    case d.ko.CHANGE_EMAIL_WARNING:
      return (0, a.jsx)(C.A, {
        onNext: () => {
          o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, {
            change_email_reason_enum: M
          }), x(d.ko.EMAIL_AND_PASSWORD)
        },
        onClose: n,
        transitionState: e
      });
    case d.ko.EMAIL_AND_PASSWORD:
      return (0, a.jsx)(_.A, {
        emailToken: p,
        onBack: k ? () => x(null != M && N.qr.has(M) ? d.ko.CHANGE_EMAIL_WARNING : d.ko.CHANGE_EMAIL_REASONS) : null,
        onNext: t => {
          o.default.track(g.HAw.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
            change_email_reason_enum: M
          }), R(t), x(d.ko.COMPLETE)
        },
        onClose: n,
        transitionState: e
      });
    case d.ko.COMPLETE:
      return (0, a.jsx)(u.A, {
        email: y,
        onClose: n,
        transitionState: e
      });
    default:
      return null
  }
}