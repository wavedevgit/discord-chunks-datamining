/** Chunk was on 5749 **/
/** chunk id: 684471, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk970683 = require("./970683.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk473092 = require("./473092.js"),
  Chunk955708 = require("./955708.jsx"),
  Chunk850165 = require("./850165.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394968 = require("./394968.js");

function h(t) {
  let {
    senderId: e,
    trackAnalyticsEvent: n,
    onNavigate: h
  } = t, _ = (0, a.e7)([o.default], () => {
    let t = o.default.getUser(e);
    return c.ZP.getName(t)
  });
  return (0, i.jsx)(u.Z, {
    header: p.intl.string(p.t.sSMgC6),
    description: p.intl.formatToPlainString(p.t.q2QrTY, {
      username: _
    }),
    heroImage: (0, i.jsx)(r.K, {
      alt: p.intl.string(p.t["3QhxXJ"])
    }),
    children: (0, i.jsxs)("div", {
      className: x.buttonContainer,
      children: [(0, i.jsx)(s.Button, {
        text: p.intl.string(p.t["+o4Q7e"]),
        variant: "primary",
        fullWidth: true,
        onClick: () => {
          h(d.x.TAKE_ACTION), n(l.NM.USER_TAKEOVER_MODAL_TAKE_ACTION)
        }
      }), (0, i.jsx)(s.Button, {
        text: p.intl.string(p.t.xLkGzP),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          h(d.x.SAFETY_TIPS), n(l.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        }
      })]
    })
  })
}