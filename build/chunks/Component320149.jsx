/** Chunk was on 1272 **/
/** chunk id: 320149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk910611 = require("./910611.jsx"),
  Chunk355298 = require("./355298.js"),
  Chunk333984 = require("./333984.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk718538 = require("./718538.js"),
  Chunk359110 = require("./359110.js"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk933557 = require("./933557.js"),
  Chunk287746 = require("./287746.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10832 = require("./10832.js"),
  Chunk419246 = require("./419246.js");

function I(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, I = (0, _.ZP)(t), C = (0, p.K)(), S = (0, p.V)(), T = (0, l.e7)([u.Z], () => u.Z.isMessageRequest(t.id)), N = (0, l.e7)([d.Z], () => d.Z.isSpam(t.id)), P = (0, h.V)(t.id, t.getRecipientId()), j = i.useCallback(() => {
    m.Z.closeChannelSidebar(b.uZ), T && C && (0, g.Kh)(t.id), N && S && (0, g.Kh)(t.id)
  }, [t.id, N, S, T, C]), A = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(E.intl.string(E.t.pIQ3h4), a.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: x
  } = (0, f.m)({
    onAcceptSuccess: j,
    onError: A
  });
  if (null == t || !t.isDM()) return null;
  let Z = [(0, r.jsx)(s.ZP.Icon, {
    icon: a.Dio,
    tooltip: E.intl.string(E.t.cpT0Cg),
    onClick: () => m.Z.closeChannelSidebar(n)
  }, "close")];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.ZP, {
      toolbar: Z,
      "aria-label": E.intl.string(E.t.BIYAqa),
      children: (0, c.ud)({
        channel: t,
        channelName: I,
        inSidebar: true
      })
    }), N && (0, r.jsxs)("div", {
      className: v.hamBanner,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: E.intl.string(E.t.XVOKgo)
      }), (0, r.jsx)("div", {
        className: v.hamBannerButton,
        children: (0, r.jsx)(a.Button, {
          size: "sm",
          onClick: () => x(t, P),
          text: E.intl.string(E.t.koqL3d)
        })
      })]
    }), (0, r.jsx)("div", {
      className: y.chat,
      children: (0, r.jsx)(O.Z, {
        channel: t,
        guild: null,
        chatInputType: o.Ie.SIDEBAR
      }, t.id)
    })]
  })
}