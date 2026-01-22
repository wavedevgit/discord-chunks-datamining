/** Chunk was on 21738 **/
/** chunk id: 456540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk322092 = require("./322092.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    subscription: t
  } = e;
  return null == t ? null : t.status === o.Dmq.PAST_DUE ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.hKd, {
      size: 16
    }), (0, r.jsx)(s.A, {
      message: u.intl.string(u.t.eSuJE2),
      ctaMessage: u.intl.string(u.t.RXsxqb),
      onClick: () => {
        (0, a.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL, {
          section: o.nc_.SUBSCRIPTIONS,
          subsection: c.nR
        })
      }
    })]
  }) : null
}