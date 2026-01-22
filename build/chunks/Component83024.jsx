/** Chunk was on 5705 **/
/** chunk id: 83024, original params: t,n,a (module,exports,require) **/
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
    submittedGuildJoinRequestsCount: a,
    onClose: f,
    transitionState: k,
    onConfirm: m
  } = t, {
    submitting: C,
    errorMessage: p,
    onSubmit: b
  } = (0, o.A)({
    onSubmit: m,
    onClose: f
  }), g = i.useCallback(() => {
    f(), s.A.close(), (0, c.pX)(u.BVt.CHANNEL(n, d.VV.MEMBER_APPLICATIONS))
  }, [n, f]);
  return (0, e.jsxs)(l.Modal, {
    transitionState: k,
    onClose: f,
    title: x.intl.formatToPlainString(x.t.chV4Jb, {
      count: a
    }),
    actions: [{
      text: x.intl.string(x.t["ETE/oC"]),
      onClick: f,
      variant: "secondary"
    }, {
      text: x.intl.string(x.t.LW0aUP),
      onClick: b,
      variant: "primary",
      loading: C
    }],
    children: [(0, e.jsx)(r.Text, {
      className: h.ij,
      color: "text-default",
      variant: "text-sm/normal",
      children: x.intl.string(x.t.uNQItz)
    }), (0, e.jsx)(r.DUT, {
      className: h.K2,
      onClick: g,
      children: (0, e.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "text-link",
        children: x.intl.string(x.t.szESVF)
      })
    }), null != p && (0, e.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: p
    })]
  })
}