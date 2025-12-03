/** Chunk was on 74673 **/
/** chunk id: 394045, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk112612 = require("./112612.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820954 = require("./820954.js");
let h = function(t) {
  let {
    guildId: n,
    submittedGuildJoinRequestsCount: i,
    onClose: h,
    transitionState: p,
    onConfirm: C
  } = t, {
    submitting: T,
    errorMessage: k,
    onSubmit: m
  } = (0, s.Z)({
    onSubmit: C,
    onClose: h
  }), b = a.useCallback(() => {
    h(), r.Z.close(), (0, o.uL)(u.Z5c.CHANNEL(n, x.oC.MEMBER_APPLICATIONS))
  }, [n, h]);
  return (0, e.jsxs)(c.Modal, {
    transitionState: p,
    onClose: h,
    title: d.intl.formatToPlainString(d.t.chV4Jb, {
      count: i
    }),
    actions: [{
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: h,
      variant: "secondary"
    }, {
      text: d.intl.string(d.t.LW0aUP),
      onClick: m,
      variant: "primary",
      loading: T
    }],
    children: [(0, e.jsx)(l.Text, {
      className: f.descriptionText,
      color: "text-default",
      variant: "text-sm/normal",
      children: d.intl.string(d.t.uNQItz)
    }), (0, e.jsx)(l.P3F, {
      className: f.actionText,
      onClick: b,
      children: (0, e.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-link",
        children: d.intl.string(d.t.szESVF)
      })
    }), null != k && (0, e.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: k
    })]
  })
}