/** Chunk was on 5749 **/
/** chunk id: 684471, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk473092 = require("./473092.js"),
  Chunk955708 = require("./955708.jsx"),
  Chunk850165 = require("./850165.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394968 = require("./394968.js"),
  Chunk282668 = require("./282668.js");

function g(t) {
  let {
    senderId: e,
    trackAnalyticsEvent: n,
    onNavigate: g
  } = t, h = (0, s.e7)([a.default], () => {
    let t = a.default.getUser(e);
    return o.ZP.getName(t)
  });
  return (0, i.jsx)(d.Z, {
    header: u.intl.string(u.t.sSMgC6),
    description: u.intl.formatToPlainString(u.t.q2QrTY, {
      username: h
    }),
    heroImageSrc: x,
    heroImageAlt: u.intl.string(u.t["3QhxXJ"]),
    children: (0, i.jsxs)("div", {
      className: p.buttonContainer,
      children: [(0, i.jsx)(r.Button, {
        text: u.intl.string(u.t["+o4Q7e"]),
        variant: "primary",
        fullWidth: true,
        onClick: () => {
          g(l.x.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION)
        }
      }), (0, i.jsx)(r.Button, {
        text: u.intl.string(u.t.xLkGzP),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          g(l.x.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        }
      })]
    })
  })
}