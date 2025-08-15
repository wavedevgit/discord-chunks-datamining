/** Chunk was on 59650 **/
/** chunk id: 684471, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function h(t) {
  let {
    senderId: e,
    trackAnalyticsEvent: n,
    onNavigate: h
  } = t, p = (0, s.e7)([a.default], () => {
    let t = a.default.getUser(e);
    return o.ZP.getName(t)
  });
  return (0, r.jsx)(d.Z, {
    header: u.intl.string(u.t.sSMgCw),
    description: u.intl.formatToPlainString(u.t.q2QrTU, {
      username: p
    }),
    heroImageSrc: _,
    heroImageAlt: u.intl.string(u.t["3QhxXF"]),
    children: (0, r.jsxs)("div", {
      className: E.buttonContainer,
      children: [(0, r.jsx)(i.zxk, {
        text: u.intl.string(u.t["+o4Q7e"]),
        variant: "primary",
        fullWidth: true,
        onClick: () => {
          h(l.x.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION)
        }
      }), (0, r.jsx)(i.zxk, {
        text: u.intl.string(u.t.xLkGzM),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          h(l.x.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        }
      })]
    })
  })
}