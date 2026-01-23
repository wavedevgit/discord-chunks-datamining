/** Chunk was on 18108 **/
/** chunk id: 464838, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(t) {
  let {
    senderId: e,
    trackAnalyticsEvent: n,
    onNavigate: m
  } = t, h = (0, a.bG)([l.default], () => {
    let t = l.default.getUser(e);
    return c.Ay.getName(t)
  });
  return (0, r.jsx)(u.A, {
    header: _.intl.string(_.t.sSMgC6),
    description: _.intl.formatToPlainString(_.t.q2QrTY, {
      username: h
    }),
    heroImage: (0, r.jsx)(i.$wK, {
      alt: _.intl.string(_.t["3QhxXJ"])
    }),
    children: (0, r.jsxs)("div", {
      className: x.UD,
      children: [(0, r.jsx)(s.Button, {
        text: _.intl.string(_.t["+o4Q7e"]),
        variant: "primary",
        fullWidth: true,
        onClick: () => {
          m(d.G.TAKE_ACTION), n(o.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION)
        }
      }), (0, r.jsx)(s.Button, {
        text: _.intl.string(_.t.xLkGzP),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          m(d.G.SAFETY_TIPS), n(o.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        }
      })]
    })
  })
}