/** Chunk was on 74673 **/
/** chunk id: 394045, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk112612 = require("./112612.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820954 = require("./820954.js");
let f = function(t) {
  let {
    guildId: n,
    submittedGuildJoinRequestsCount: e,
    onClose: f,
    transitionState: p,
    onConfirm: C
  } = t, {
    submitting: T,
    errorMessage: m,
    onSubmit: k
  } = (0, s.Z)({
    onSubmit: C,
    onClose: f
  }), b = a.useCallback(() => {
    f(), o.Z.close(), (0, l.uL)(u.Z5c.CHANNEL(n, x.oC.MEMBER_APPLICATIONS))
  }, [n, f]);
  return (0, i.jsxs)(r.Modal, {
    transitionState: p,
    onClose: f,
    title: d.intl.formatToPlainString(d.t.chV4Jb, {
      count: e
    }),
    actions: [{
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: f,
      variant: "secondary"
    }, {
      text: d.intl.string(d.t.LW0aUP),
      onClick: k,
      variant: "primary",
      loading: T
    }],
    children: [(0, i.jsx)(c.Text, {
      className: h.descriptionText,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: d.intl.string(d.t.uNQItz)
    }), (0, i.jsx)(c.P3F, {
      className: h.actionText,
      onClick: b,
      children: (0, i.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-link",
        children: d.intl.string(d.t.szESVF)
      })
    }), null != m && (0, i.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: m
    })]
  })
}