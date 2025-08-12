/** Chunk was on 1272 **/
/** chunk id: 262734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk350810 = require("./350810.js"),
  Chunk988980 = require("./988980.js"),
  Chunk835473 = require("./835473.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk786915 = require("./786915.jsx"),
  Chunk510839 = require("./510839.js"),
  Chunk214143 = require("./214143.jsx"),
  Chunk610278 = require("./610278.js"),
  Chunk408491 = require("./408491.js"),
  Chunk981631 = require("./981631.js"),
  Chunk918559 = require("./918559.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk574682 = require("./574682.js");
let v = {
  [Chunk918559.MI.NO_CHAT]: Chunk574682.noChat,
  [Chunk918559.MI.RESIZABLE]: Chunk574682.resizable
};

function I(e) {
  let {
    frame: t
  } = e, n = (0, d.q)(t.applicationId), l = (0, c.Z)(), I = i.useRef(null), C = i.useRef(null), [S, N] = i.useState({
    width: 0,
    height: 0
  }), T = i.useCallback(() => {
    (0, h.eU)({
      applicationId: t.applicationId,
      layoutMode: b.U.PIP
    })
  }, [t.applicationId]), P = i.useCallback(() => {
    (0, h.xT)({
      applicationId: t.applicationId
    })
  }, [t.applicationId]);
  i.useLayoutEffect(() => {
    if (null == C.current) return;
    let e = new ResizeObserver(() => {
      var e, t, n, r;
      N({
        width: null != (n = null == (e = C.current) ? true : e.clientWidth) ? n : 0,
        height: null != (r = null == (t = C.current) ? true : t.clientHeight) ? r : 0
      })
    });
    return e.observe(C.current), () => e.disconnect()
  }, []), i.useEffect(() => {
    let e = e => {
      null == I.current || I.current.contains(e.target) || l || (0, h.eU)({
        applicationId: t.applicationId,
        layoutMode: b.U.PIP
      })
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [t.applicationId, l]);
  let j = S.width / Math.max(S.height, 1) < O.I0,
    x = 0,
    A = 0,
    Z = (0, u.Z)(null == n ? true : n.id);
  if (!Z) {
    let e = S.width,
      t = S.height;
    j ? ((t = S.width / O.I0) > S.height && (e = (t = S.height) * O.I0), A = (S.height - t) / 2) : ((e = Math.min(S.height * O.I0)) > S.width && (t = (e = S.width) / O.I0), x = (S.width - e) / 2)
  }
  let w = O.MI.NO_CHAT;
  if (null == n) return null;
  let L = (0, m.ro)(t);
  return (0, r.jsx)(s.f6W, {
    theme: _.BRd.DARK,
    children: e => (0, r.jsxs)("div", {
      className: a()(y.wrapper, v[w], e),
      ref: I,
      style: {},
      children: [(0, r.jsx)("div", {
        className: y.contextlessHeader,
        children: (0, r.jsxs)("div", {
          className: y.buttonSection,
          children: [(0, r.jsx)(p.d, {
            isTrayButton: true,
            label: E.intl.string(E.t.brPQ5e),
            onClick: T,
            iconComponent: s.dOc,
            themeable: true
          }), (0, r.jsx)(f.Z, {
            appContext: _.IlC.APP,
            applicationId: n.id,
            shouldPrioritizeGroupPlusIcon: true,
            iconClassName: y.contextlessInviteButtonIcon,
            isRichPresenceInvite: true,
            size: o.zx.Sizes.SMALL,
            look: o.zx.Looks.FILLED,
            buttonText: E.intl.string(E.t["6F9ivr"]),
            color: o.zx.Colors.PRIMARY
          }), (0, r.jsx)(p.d, {
            isTrayButton: true,
            label: E.intl.string(E.t.cpT0Cg),
            onClick: P,
            iconComponent: s.Dio,
            themeable: true
          })]
        })
      }), (0, r.jsx)("div", {
        className: y.activityPanelContainer,
        children: (0, r.jsx)("div", {
          className: a()(y.activityContainer, {
            [y.activityContainerNoMargin]: Z
          }),
          style: {
            paddingLeft: x,
            paddingRight: x,
            paddingTop: A,
            paddingBottom: A
          },
          ref: C,
          children: (0, r.jsx)(g.Z, {
            className: y.iframe,
            embedId: L
          })
        })
      })]
    })
  })
}