/** Chunk was on 83269 **/
/** chunk id: 29711, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk230913 = require("./230913.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk87404 = require("./87404.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk222872 = require("./222872.js");

function E(t) {
  let {
    onNext: e,
    onClose: n,
    reason: E,
    onReasonChange: A,
    transitionState: _
  } = t, C = o.FL.map(t => ({
    value: t,
    name: (0, i.u)(t)
  }));
  return (0, a.jsx)(r.kpP, {
    graphic: {
      type: "image",
      src: u
    },
    title: c.intl.string(c.t["41NIIh"]),
    onClose: n,
    transitionState: _,
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: c.intl.string(c.t["3PatSz"]),
      disabled: null == E,
      onClick: e
    }],
    children: (0, a.jsx)(r.z6M, {
      value: E,
      options: C,
      onChange: t => {
        l.default.track(s.HAw.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, {
          change_email_reason_enum: t
        }), A(t)
      }
    })
  })
}