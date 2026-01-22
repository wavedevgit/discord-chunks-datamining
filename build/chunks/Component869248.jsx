/** Chunk was on 21738 **/
/** chunk id: 869248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk355622 = require("./355622.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk353428 = require("./353428.jsx"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js"),
  Chunk336590 = require("./336590.js"),
  Chunk471271 = require("./471271.js"),
  Chunk977347 = require("./977347.js"),
  Chunk378570 = require("./378570.js"),
  Chunk138298 = require("./138298.js"),
  Chunk761640 = require("./761640.js"),
  Chunk47167 = require("./47167.js"),
  Chunk698718 = require("./698718.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk305585 = require("./305585.js"),
  Chunk633030 = require("./633030.js");

function I(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, I = (0, b.Ay)(t), v = (0, p.k)(), S = (0, p.r)(), C = (0, l.bG)([u.A], () => u.A.isMessageRequest(t.id)), N = (0, l.bG)([d.A], () => d.A.isSpam(t.id)), T = (0, h.D)(t.id, t.getRecipientId()), j = i.useCallback(() => {
    g.A.closeChannelSidebar(m.fe), C && v && (0, A.iN)(t.id), N && S && (0, A.iN)(t.id)
  }, [t.id, N, S, C, v]), x = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(E.intl.string(E.t.pIQ3h4), a.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: P
  } = (0, f.t)({
    onAcceptSuccess: j,
    onError: x
  });
  if (null == t || !t.isDM()) return null;
  let w = [(0, r.jsx)(o.Ay.Icon, {
    icon: a.PGe,
    tooltip: E.intl.string(E.t.cpT0Cq),
    onClick: () => g.A.closeChannelSidebar(n)
  }, "close")];
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Ay, {
      toolbar: w,
      "aria-label": E.intl.string(E.t.BIYAqa),
      children: (0, c.zF)({
        channel: t,
        channelName: I,
        inSidebar: true
      })
    }), N && (0, r.jsxs)("div", {
      className: y.F,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: E.intl.string(E.t.XVOKgj)
      }), (0, r.jsx)("div", {
        className: y.$,
        children: (0, r.jsx)(a.Button, {
          size: "sm",
          onClick: () => P(t, T),
          text: E.intl.string(E.t.koqL3Z)
        })
      })]
    }), (0, r.jsx)("div", {
      className: O.T,
      children: (0, r.jsx)(_.A, {
        channel: t,
        guild: null,
        chatInputType: s.oU.SIDEBAR
      }, t.id)
    })]
  })
}