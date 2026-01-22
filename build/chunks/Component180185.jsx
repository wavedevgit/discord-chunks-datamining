/** Chunk was on 88615 **/
/** chunk id: 180185, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk538409 = require("./538409.js");

function d(e) {
  let {
    notificationConfig: t,
    markAsDismissed: l
  } = e;
  return (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsx)("div", {
      className: u.VN,
      children: (0, r.jsx)(i.K0, {
        variant: "icon-only",
        size: "md",
        "aria-label": a.intl.string(a.t.cpT0Cq),
        onClick: () => {
          l(o.i.USER_DISMISS)
        },
        icon: n.XLargeIcon
      })
    }), (0, r.jsx)(n.CircleErrorIcon, {
      color: s.A.colors.TEXT_FEEDBACK_WARNING,
      className: u.Kk
    }), (0, r.jsx)(i.EYj, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: t.title
    }), (0, r.jsx)(i.EYj, {
      variant: "text-sm/medium",
      children: t.description
    })]
  })
}