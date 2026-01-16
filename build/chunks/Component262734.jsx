/** Chunk was on 1272 **/
/** chunk id: 262734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk350810 = require("./350810.js"),
  Chunk566620 = require("./566620.js"),
  Chunk988980 = require("./988980.js"),
  Chunk617552 = require("./617552.jsx"),
  Chunk225639 = require("./225639.js"),
  Chunk367907 = require("./367907.js"),
  Chunk835473 = require("./835473.js"),
  Chunk358221 = require("./358221.js"),
  Chunk740492 = require("./740492.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk786915 = require("./786915.jsx"),
  Chunk800965 = require("./800965.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk48131 = require("./48131.js"),
  Chunk214143 = require("./214143.jsx"),
  Chunk610278 = require("./610278.js"),
  Chunk408491 = require("./408491.js"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk2266 = require("./2266.js");
let Z = {
  [Chunk918559.MI.NO_CHAT]: Chunk2266.noChat,
  [Chunk918559.MI.RESIZABLE]: Chunk2266.resizable
};

function w(e) {
  let {
    frame: t
  } = e, n = (0, b.q)(t.applicationId), l = (0, d.Z)(), {
    selectedChannelId: w,
    selectedVoiceChannelId: L
  } = (0, o.cj)([y.Z], () => ({
    selectedChannelId: y.Z.getChannelId(),
    selectedVoiceChannelId: y.Z.getVoiceChannelId()
  })), R = (0, o.e7)([E.Z], () => null != L && w === L && E.Z.getChatOpen(L), [w, L]), D = (0, o.e7)([_.ZP], () => _.ZP.callChatSidebarWidth), M = (0, u.dQu)(s.Z.modules.chat.RESIZE_HANDLE_WIDTH), k = i.useRef(null), U = i.useRef(null), [G, H] = i.useState({
    width: 0,
    height: 0
  }), B = i.useCallback(() => {
    C.Z.updateFrameLayoutMode({
      applicationId: t.applicationId,
      layoutMode: N.U.PIP
    })
  }, [t.applicationId]), V = i.useCallback(() => {
    C.Z.stopFrame({
      applicationId: t.applicationId
    })
  }, [t.applicationId]);
  i.useLayoutEffect(() => {
    if (null == U.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      H({
        width: null != (n = null == (e = U.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = U.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(U.current), () => e.disconnect()
  }, []), i.useEffect(() => {
    let e = e => {
      null == k.current || k.current.contains(e.target) || l || C.Z.updateFrameLayoutMode({
        applicationId: t.applicationId,
        layoutMode: N.U.PIP
      })
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [t.applicationId, l]);
  let F = G.width / Math.max(G.height, 1) < x.I0,
    z = 0,
    Y = 0,
    W = (0, f.Z)(null == n ? true : n.id);
  if (!W) {
    let e = G.width,
      t = G.height;
    F ? ((t = G.width / x.I0) > G.height && (e = (t = G.height) * x.I0), Y = (G.height - t) / 2) : ((e = Math.min(G.height * x.I0, G.width)) > G.width && (t = (e = G.width) / x.I0), z = (G.width - e) / 2)
  }
  let K = x.MI.NO_CHAT,
    q = (0, h.y)();
  if (null == n) return null;
  let Q = (null != D ? D : j.$Y6) + M,
    J = (0, T.ro)(t);
  return (0, r.jsx)(u.f6W, {
    theme: j.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(A.wrapper, Z[K], e),
      ref: k,
      style: {
        right: R && !Number.isNaN(Q) ? Q : 0
      },
      children: [(0, r.jsx)("div", {
        className: A.activityPanelContainer,
        children: (0, r.jsx)("div", {
          className: a()(A.activityContainer, {
            [A.activityContainerNoMargin]: W
          }),
          style: {
            paddingLeft: z,
            paddingRight: z,
            paddingTop: Y,
            paddingBottom: Y
          },
          ref: U,
          children: (0, r.jsx)(S.Z, {
            className: A.iframe,
            embedId: J
          })
        })
      }), (0, r.jsxs)("div", {
        className: A.footer,
        children: [(0, r.jsx)(I.Z, {
          appContext: j.IlC.APP,
          applicationId: n.id,
          shouldPrioritizeGroupPlusIcon: true,
          isRichPresenceInvite: true,
          iconClassName: A.inviteButtonIcon,
          size: c.zx.Sizes.MEDIUM,
          look: c.zx.Looks.FILLED,
          buttonText: P.intl.string(P.t["6F9ivu"]),
          color: c.zx.Colors.TRANSPARENT
        }), (0, r.jsxs)("div", {
          className: A.footerButtons,
          children: [(0, r.jsx)("div", {
            className: A.buttonSection,
            children: (0, r.jsx)(O.d, {
              isTrayButton: true,
              label: P.intl.string(P.t.brPQ5U),
              onClick: B,
              iconComponent: u.dOc,
              themeable: true
            })
          }), (0, r.jsx)(O.d, {
            isTrayButton: false,
            label: P.intl.string(P.t["R/FK4A"]),
            onClick: V,
            iconComponent: u.PBZ,
            color: "disconnect"
          })]
        }), q ? (0, r.jsx)(v.Z, {
          popoutOpen: false,
          onOpenPopout: () => {
            (0, m.yw)(j.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, g.Z)({
              onConfirm: async () => {
                (null == n ? true : n.id) != null && await C.Z.refreshProxyTicket({
                  applicationId: n.id
                }), (0, p.Gj)()
              }
            })
          },
          onClosePopout: () => {}
        }) : null]
      })]
    })
  })
}