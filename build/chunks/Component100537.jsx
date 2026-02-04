/** Chunk was on 21738 **/
/** chunk id: 100537, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk942857 = require("./942857.js"),
  Chunk795816 = require("./795816.js"),
  Chunk216418 = require("./216418.js"),
  Chunk47294 = require("./47294.jsx"),
  Chunk16961 = require("./16961.js"),
  Chunk58149 = require("./58149.js"),
  Chunk429913 = require("./429913.js"),
  Chunk313961 = require("./313961.js"),
  Chunk964404 = require("./964404.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk520006 = require("./520006.jsx"),
  Chunk128286 = require("./128286.jsx"),
  Chunk309010 = require("./309010.js"),
  Chunk625180 = require("./625180.js"),
  Chunk898879 = require("./898879.jsx"),
  Chunk293495 = require("./293495.js"),
  Chunk165610 = require("./165610.js"),
  Chunk652215 = require("./652215.js"),
  Chunk5867 = require("./5867.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk598449 = require("./598449.js");
let w = {
  [Chunk5867.E8.NO_CHAT]: Chunk598449.Oo,
  [Chunk5867.E8.RESIZABLE]: Chunk598449.Ig
};

function L(e) {
  let {
    frame: t
  } = e, n = (0, A.h)(t.applicationId), l = (0, d.A)(), {
    selectedChannelId: L,
    selectedVoiceChannelId: R
  } = (0, s.cf)([I.A], () => ({
    selectedChannelId: I.A.getChannelId(),
    selectedVoiceChannelId: I.A.getVoiceChannelId()
  })), D = (0, s.bG)([_.A], () => null != R && L === R && _.A.getChatOpen(R), [L, R]), M = (0, s.bG)([b.Ay], () => b.Ay.callChatSidebarWidth), k = (0, u.rdh)(o.A.modules.chat.RESIZE_HANDLE_WIDTH), U = i.useRef(null), G = i.useRef(null), [V, B] = i.useState({
    width: 0,
    height: 0
  }), H = i.useCallback(() => {
    v.A.updateFrameLayoutMode({
      applicationId: t.applicationId,
      layoutMode: N.y.PIP
    })
  }, [t.applicationId]), F = i.useCallback(() => {
    v.A.stopFrame({
      applicationId: t.applicationId
    })
  }, [t.applicationId]);
  i.useLayoutEffect(() => {
    if (null == G.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      B({
        width: null != (e = null == (n = G.current) ? true : n.clientWidth) ? e : 0,
        height: null != (t = null == (r = G.current) ? true : r.clientHeight) ? t : 0
      })
    });
    return e.observe(G.current), () => e.disconnect()
  }, []), i.useEffect(() => {
    let e = e => {
      null == U.current || U.current.contains(e.target) || l || v.A.updateFrameLayoutMode({
        applicationId: t.applicationId,
        layoutMode: N.y.PIP
      })
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [t.applicationId, l]);
  let Y = V.width / Math.max(V.height, 1) < j.B5,
    K = 0,
    W = 0,
    q = (0, h.A)(null == n ? true : n.id);
  if (!q) {
    let e = V.width,
      t = V.height;
    Y ? ((t = V.width / j.B5) > V.height && (e = (t = V.height) * j.B5), W = (V.height - t) / 2) : ((e = Math.min(V.height * j.B5, V.width)) > V.width && (t = (e = V.width) / j.B5), K = (V.width - e) / 2)
  }
  let z = j.E8.NO_CHAT,
    Q = (0, g.G)();
  if (null == n) return null;
  let X = (null != M ? M : T.da6) + k,
    Z = (0, C.YY)(t);
  return (0, r.jsx)(u.NPJ, {
    theme: T.NJ8.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(P.iE, w[z], e),
      ref: U,
      style: {
        right: D && !Number.isNaN(X) ? X : 0
      },
      children: [(0, r.jsx)("div", {
        className: P.lq,
        children: (0, r.jsx)("div", {
          className: a()(P.ht, {
            [P.kK]: q
          }),
          style: {
            paddingLeft: K,
            paddingRight: K,
            paddingTop: W,
            paddingBottom: W
          },
          ref: G,
          children: (0, r.jsx)(S.A, {
            className: P.pU,
            embedId: Z
          })
        })
      }), (0, r.jsxs)("div", {
        className: P.qr,
        children: [(0, r.jsx)(O.A, {
          appContext: T.BRT.APP,
          applicationId: n.id,
          shouldPrioritizeGroupPlusIcon: true,
          isRichPresenceInvite: true,
          iconClassName: P.NS,
          size: c.$n.Sizes.MEDIUM,
          look: c.$n.Looks.FILLED,
          buttonText: x.intl.string(x.t["6F9ivu"]),
          color: c.$n.Colors.TRANSPARENT
        }), (0, r.jsxs)("div", {
          className: P.Hq,
          children: [(0, r.jsx)("div", {
            className: P.qi,
            children: (0, r.jsx)(E.l, {
              isTrayButton: true,
              label: x.intl.string(x.t.brPQ5U),
              onClick: H,
              iconComponent: u.gR,
              themeable: true
            })
          }), (0, r.jsx)(E.l, {
            isTrayButton: false,
            label: x.intl.string(x.t["R/FK4A"]),
            onClick: F,
            iconComponent: u.oLl,
            color: "disconnect"
          })]
        }), Q ? (0, r.jsx)(y.A, {
          popoutOpen: false,
          onOpenPopout: () => {
            (0, m.zV)(T.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, f.A)({
              onConfirm: async () => {
                (null == n ? true : n.id) != null && await v.A.refreshProxyTicket({
                  applicationId: n.id
                }), (0, p.jp)()
              }
            })
          },
          onClosePopout: () => {}
        }) : null]
      })]
    })
  })
}