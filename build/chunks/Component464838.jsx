/** Chunk was on 18108 **/
/** chunk id: 464838, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk492917 = require("./492917.js"),
  Chunk397927 = require("./397927.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk665909 = require("./665909.js"),
  Chunk237170 = require("./237170.jsx"),
  Chunk12105 = require("./12105.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk286965 = require("./286965.js");

function h(t) {
  let {
    senderId: e,
    trackAnalyticsEvent: n,
    onNavigate: h
  } = t, A = (0, a.bG)([l.default], () => {
    let t = l.default.getUser(e);
    return o.Ay.getName(t)
  });
  return (0, r.jsx)(u.A, {
    header: E.intl.string(E.t.sSMgC6),
    description: E.intl.formatToPlainString(E.t.q2QrTY, {
      username: A
    }),
    heroImage: (0, r.jsx)(i.$wK, {
      alt: E.intl.string(E.t["3QhxXJ"])
    }),
    children: (0, r.jsxs)("div", {
      className: _.UD,
      children: [(0, r.jsx)(s.Button, {
        text: E.intl.string(E.t["+o4Q7e"]),
        variant: "primary",
        fullWidth: true,
        onClick: () => {
          h(d.G.TAKE_ACTION), n(c.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION)
        }
      }), (0, r.jsx)(s.Button, {
        text: E.intl.string(E.t.xLkGzP),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          h(d.G.SAFETY_TIPS), n(c.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        }
      })]
    })
  })
}