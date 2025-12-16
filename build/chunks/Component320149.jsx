/** Chunk was on 1272 **/
/** chunk id: 320149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk495182 = require("./495182.js"),
  Chunk517868 = require("./517868.js");

function I(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, I = (0, E.ZP)(t), C = (0, p.K)(), S = (0, p.V)(), T = (0, l.e7)([u.Z], () => u.Z.isMessageRequest(t.id)), N = (0, l.e7)([d.Z], () => d.Z.isSpam(t.id)), j = (0, g.V)(t.id, t.getRecipientId()), P = i.useCallback(() => {
    m.Z.closeChannelSidebar(b.uZ), T && C && (0, h.Kh)(t.id), N && S && (0, h.Kh)(t.id)
  }, [t.id, N, S, T, C]), x = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(O.intl.string(O.t.pIQ3h4), a.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: A
  } = (0, f.m)({
    onAcceptSuccess: P,
    onError: x
  });
  if (null == t || !t.isDM()) return null;
  let Z = [(0, r.jsx)(o.ZP.Icon, {
    icon: a.Dio,
    tooltip: O.intl.string(O.t.cpT0Cq),
    onClick: () => m.Z.closeChannelSidebar(n)
  }, "close")];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.ZP, {
      toolbar: Z,
      "aria-label": O.intl.string(O.t.BIYAqa),
      children: (0, c.ud)({
        channel: t,
        channelName: I,
        inSidebar: true
      })
    }), N && (0, r.jsxs)("div", {
      className: y.hamBanner,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: O.intl.string(O.t.XVOKgj)
      }), (0, r.jsx)("div", {
        className: y.hamBannerButton,
        children: (0, r.jsx)(a.Button, {
          size: "sm",
          onClick: () => A(t, j),
          text: O.intl.string(O.t.koqL3Z)
        })
      })]
    }), (0, r.jsx)("div", {
      className: v.chat,
      children: (0, r.jsx)(_.Z, {
        channel: t,
        guild: null,
        chatInputType: s.Ie.SIDEBAR
      }, t.id)
    })]
  })
}