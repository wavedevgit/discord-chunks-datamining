/** Chunk was on 5749 **/
/** chunk id: 684471, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk72595 = require("./72595.js");

function x(t) {
  let {
    senderId: e,
    trackAnalyticsEvent: n,
    onNavigate: x
  } = t, h = (0, s.e7)([o.default], () => {
    let t = o.default.getUser(e);
    return c.ZP.getName(t)
  });
  return (0, i.jsx)(u.Z, {
    header: f.intl.string(f.t.sSMgC6),
    description: f.intl.formatToPlainString(f.t.q2QrTY, {
      username: h
    }),
    heroImage: (0, i.jsx)(r.Kag, {
      alt: f.intl.string(f.t["3QhxXJ"])
    }),
    children: (0, i.jsxs)("div", {
      className: p.buttonContainer,
      children: [(0, i.jsx)(a.Button, {
        text: f.intl.string(f.t["+o4Q7e"]),
        variant: "primary",
        fullWidth: true,
        onClick: () => {
          x(d.x.TAKE_ACTION), n(l.NM.USER_TAKEOVER_MODAL_TAKE_ACTION)
        }
      }), (0, i.jsx)(a.Button, {
        text: f.intl.string(f.t.xLkGzP),
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          x(d.x.SAFETY_TIPS), n(l.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        }
      })]
    })
  })
}