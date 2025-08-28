/** Chunk was on 1272 **/
/** chunk id: 262734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk350810 = require("./350810.js"),
  Chunk988980 = require("./988980.js"),
  Chunk835473 = require("./835473.js"),
  Chunk358221 = require("./358221.js"),
  Chunk740492 = require("./740492.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk786915 = require("./786915.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk510839 = require("./510839.js"),
  Chunk214143 = require("./214143.jsx"),
  Chunk610278 = require("./610278.js"),
  Chunk408491 = require("./408491.js"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk909357 = require("./909357.js");
let T = {
  [Chunk918559.MI.NO_CHAT]: Chunk909357.noChat,
  [Chunk918559.MI.RESIZABLE]: Chunk909357.resizable
};

function P(e) {
  let {
    frame: t
  } = e, n = (0, f.q)(t.applicationId), l = (0, d.Z)(), P = (0, o.e7)([_.Z], () => _.Z.getVoiceChannelId()), j = (0, o.e7)([h.Z], () => null != P && h.Z.getChatOpen(P), [P]), x = (0, o.e7)([g.ZP], () => g.ZP.callChatSidebarWidth), A = (0, u.dQu)(s.Z.modules.chat.RESIZE_HANDLE_WIDTH), Z = i.useRef(null), w = i.useRef(null), [L, R] = i.useState({
    width: 0,
    height: 0
  }), D = i.useCallback(() => {
    (0, O.eU)({
      applicationId: t.applicationId,
      layoutMode: v.U.PIP
    })
  }, [t.applicationId]), k = i.useCallback(() => {
    (0, O.xT)({
      applicationId: t.applicationId
    })
  }, [t.applicationId]);
  i.useLayoutEffect(() => {
    if (null == w.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      R({
        width: null != (n = null == (e = w.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = w.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(w.current), () => e.disconnect()
  }, []), i.useEffect(() => {
    let e = e => {
      null == Z.current || Z.current.contains(e.target) || l || (0, O.eU)({
        applicationId: t.applicationId,
        layoutMode: v.U.PIP
      })
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [t.applicationId, l]);
  let M = L.width / Math.max(L.height, 1) < C.I0,
    U = 0,
    G = 0,
    B = (0, p.Z)(null == n ? true : n.id);
  if (!B) {
    let e = L.width,
      t = L.height;
    M ? ((t = L.width / C.I0) > L.height && (e = (t = L.height) * C.I0), G = (L.height - t) / 2) : ((e = Math.min(L.height * C.I0)) > L.width && (t = (e = L.width) / C.I0), U = (L.width - e) / 2)
  }
  let V = C.MI.NO_CHAT;
  if (null == n) return null;
  let H = (null != x ? x : I.$Y6) + A,
    F = (0, y.ro)(t);
  return (0, r.jsx)(u.f6W, {
    theme: I.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(N.wrapper, T[V], e),
      ref: Z,
      style: {
        right: j && !Number.isNaN(H) ? H : 0
      },
      children: [(0, r.jsx)("div", {
        className: N.contextlessHeader,
        children: (0, r.jsxs)("div", {
          className: N.buttonSection,
          children: [(0, r.jsx)(m.d, {
            isTrayButton: true,
            label: S.intl.string(S.t.brPQ5e),
            onClick: D,
            iconComponent: u.dOc,
            themeable: true
          }), (0, r.jsx)(b.Z, {
            appContext: I.IlC.APP,
            applicationId: n.id,
            shouldPrioritizeGroupPlusIcon: true,
            iconClassName: N.contextlessInviteButtonIcon,
            isRichPresenceInvite: true,
            size: c.zx.Sizes.SMALL,
            look: c.zx.Looks.FILLED,
            buttonText: S.intl.string(S.t["6F9ivr"]),
            color: c.zx.Colors.PRIMARY
          }), (0, r.jsx)(m.d, {
            isTrayButton: true,
            label: S.intl.string(S.t.cpT0Cg),
            onClick: k,
            iconComponent: u.Dio,
            themeable: true
          })]
        })
      }), (0, r.jsx)("div", {
        className: N.activityPanelContainer,
        children: (0, r.jsx)("div", {
          className: a()(N.activityContainer, {
            [N.activityContainerNoMargin]: B
          }),
          style: {
            paddingLeft: U,
            paddingRight: U,
            paddingTop: G,
            paddingBottom: G
          },
          ref: w,
          children: (0, r.jsx)(E.Z, {
            className: N.iframe,
            embedId: F
          })
        })
      })]
    })
  })
}