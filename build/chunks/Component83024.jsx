/** Chunk was on 5705 **/
/** chunk id: 83024, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk976860 = require("./976860.js"),
  Chunk465105 = require("./465105.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk442146 = require("./442146.js");
let f = function(t) {
  let {
    guildId: n,
    submittedGuildJoinRequestsCount: e,
    onClose: f,
    transitionState: k,
    onConfirm: m
  } = t, {
    submitting: p,
    errorMessage: C,
    onSubmit: b
  } = (0, o.A)({
    onSubmit: m,
    onClose: f
  }), T = i.useCallback(() => {
    f(), s.A.close(), (0, c.pX)(u.BVt.CHANNEL(n, x.VV.MEMBER_APPLICATIONS))
  }, [n, f]);
  return (0, a.jsxs)(l.Modal, {
    transitionState: k,
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
      onClick: b,
      variant: "primary",
      loading: p
    }],
    children: [(0, a.jsx)(r.Text, {
      className: h.ij,
      color: "text-default",
      variant: "text-sm/normal",
      children: d.intl.string(d.t.uNQItz)
    }), (0, a.jsx)(r.DUT, {
      className: h.K2,
      onClick: T,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "text-link",
        children: d.intl.string(d.t.szESVF)
      })
    }), null != C && (0, a.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: C
    })]
  })
}