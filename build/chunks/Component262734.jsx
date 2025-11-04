/** Chunk was on 1272 **/
/** chunk id: 262734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk48131 = require("./48131.js"),
  Chunk214143 = require("./214143.jsx"),
  Chunk610278 = require("./610278.js"),
  Chunk408491 = require("./408491.js"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk909357 = require("./909357.js");
let N = {
  [Chunk918559.MI.NO_CHAT]: Chunk909357.noChat,
  [Chunk918559.MI.RESIZABLE]: Chunk909357.resizable
};

function j(e) {
  let {
    frame: t
  } = e, n = (0, f.q)(t.applicationId), l = (0, d.Z)(), {
    selectedChannelId: j,
    selectedVoiceChannelId: P
  } = (0, o.cj)([b.Z], () => ({
    selectedChannelId: b.Z.getChannelId(),
    selectedVoiceChannelId: b.Z.getVoiceChannelId()
  })), x = (0, o.e7)([h.Z], () => null != P && j === P && h.Z.getChatOpen(P), [j, P]), A = (0, o.e7)([g.ZP], () => g.ZP.callChatSidebarWidth), Z = (0, u.dQu)(s.Z.modules.chat.RESIZE_HANDLE_WIDTH), w = i.useRef(null), L = i.useRef(null), [R, D] = i.useState({
    width: 0,
    height: 0
  }), M = i.useCallback(() => {
    E.Z.updateFrameLayoutMode({
      applicationId: t.applicationId,
      layoutMode: v.U.PIP
    })
  }, [t.applicationId]), k = i.useCallback(() => {
    E.Z.stopFrame({
      applicationId: t.applicationId
    })
  }, [t.applicationId]);
  i.useLayoutEffect(() => {
    if (null == L.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      D({
        width: null != (n = null == (e = L.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = L.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(L.current), () => e.disconnect()
  }, []), i.useEffect(() => {
    let e = e => {
      null == w.current || w.current.contains(e.target) || l || E.Z.updateFrameLayoutMode({
        applicationId: t.applicationId,
        layoutMode: v.U.PIP
      })
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [t.applicationId, l]);
  let U = R.width / Math.max(R.height, 1) < C.I0,
    G = 0,
    B = 0,
    H = (0, p.Z)(null == n ? true : n.id);
  if (!H) {
    let e = R.width,
      t = R.height;
    U ? ((t = R.width / C.I0) > R.height && (e = (t = R.height) * C.I0), B = (R.height - t) / 2) : ((e = Math.min(R.height * C.I0)) > R.width && (t = (e = R.width) / C.I0), G = (R.width - e) / 2)
  }
  let V = C.MI.NO_CHAT;
  if (null == n) return null;
  let F = (null != A ? A : I.$Y6) + Z,
    z = (0, y.ro)(t);
  return (0, r.jsx)(u.f6W, {
    theme: I.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(T.wrapper, N[V], e),
      ref: w,
      style: {
        right: x && !Number.isNaN(F) ? F : 0
      },
      children: [(0, r.jsx)("div", {
        className: T.activityPanelContainer,
        children: (0, r.jsx)("div", {
          className: a()(T.activityContainer, {
            [T.activityContainerNoMargin]: H
          }),
          style: {
            paddingLeft: G,
            paddingRight: G,
            paddingTop: B,
            paddingBottom: B
          },
          ref: L,
          children: (0, r.jsx)(O.Z, {
            className: T.iframe,
            embedId: z
          })
        })
      }), (0, r.jsxs)("div", {
        className: T.footer,
        children: [(0, r.jsx)(_.Z, {
          appContext: I.IlC.APP,
          applicationId: n.id,
          shouldPrioritizeGroupPlusIcon: true,
          isRichPresenceInvite: true,
          iconClassName: T.inviteButtonIcon,
          size: c.zx.Sizes.MEDIUM,
          look: c.zx.Looks.FILLED,
          buttonText: S.intl.string(S.t["6F9ivu"]),
          color: c.zx.Colors.TRANSPARENT
        }), (0, r.jsxs)("div", {
          className: T.footerButtons,
          children: [(0, r.jsx)("div", {
            className: T.buttonSection,
            children: (0, r.jsx)(m.d, {
              isTrayButton: true,
              label: S.intl.string(S.t.brPQ5U),
              onClick: M,
              iconComponent: u.dOc,
              themeable: true
            })
          }), (0, r.jsx)(m.d, {
            isTrayButton: false,
            label: S.intl.string(S.t["R/FK4A"]),
            onClick: k,
            iconComponent: u.PBZ,
            color: "disconnect"
          })]
        })]
      })]
    })
  })
}