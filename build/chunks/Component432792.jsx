/** Chunk was on 49882 **/
/** chunk id: 432792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => x,
  M4: () => I,
  WS: () => P,
  t4: () => C
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk350810 = require("./350810.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk765585 = require("./765585.jsx"),
  Chunk930153 = require("./930153.js"),
  Chunk822857 = require("./822857.js"),
  Chunk622562 = require("./622562.jsx"),
  Chunk937860 = require("./937860.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk557766 = require("./557766.js"),
  Chunk447489 = require("./447489.js"),
  Chunk484885 = require("./484885.js");
let C = () => (0, Chunk930153.Lk)(document.body.style.getPropertyValue("--custom-app-panels-height"), 56) + 8,
  E = {
    discover: Chunk704215.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
    shop: Chunk704215.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
  },
  x = e => {
    let {
      onboardingCoachmarkType: t,
      prevCoachmarksDismissed: n = true,
      onShowCoachmarkHandler: r
    } = e, l = (0, p.Nj)(o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL), {
      enabled: a
    } = (0, m.WX)({
      location: "virtual_currency_onboarding_coachmark"
    }), s = E[t], c = (0, p.Nj)(s), u = a && l && n && !c, d = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "CLOSE";
      c || (0, p.Q3)(E[t], {
        forceTrack: true,
        dismissAction: "CTA_CLICK" === e ? O.L.TAKE_ACTION : O.L.USER_DISMISS,
        groupName: O.R.VIRTUAL_CURRENCY_ONBOARDING
      })
    }, [c, t]), [h, g] = i.useState(false);
    return i.useEffect(() => {
      u ? h || ((0, f.kk)(s, {
        groupName: O.R.VIRTUAL_CURRENCY_ONBOARDING
      }), true !== r && r(), g(true)) : h && g(false)
    }, [u, r, h, s]), {
      shouldShow: h,
      closeCoachmarkIfOpen: d
    }
  },
  S = e => {
    let {
      customIconSrcs: t
    } = e, n = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), i = true !== t ? t.animated : j.Z, o = true !== t ? t.static : v.Z;
    return n || null == i ? (0, r.jsx)("img", {
      src: o,
      className: y.orbAsset,
      alt: "Orb"
    }) : (0, r.jsxs)(d.Z, {
      autoPlay: true,
      loop: true,
      className: y.orbAsset,
      children: [(0, r.jsx)("source", {
        src: j.Z,
        type: "video/webm"
      }), (0, r.jsx)("img", {
        src: v.Z,
        className: y.orbAsset,
        alt: "Orb"
      })]
    })
  },
  I = e => {
    let {
      titleText: t,
      descriptionText: n,
      ctaText: i,
      onCtaClick: l,
      onClose: c,
      customIconSrcs: u,
      position: d = "right",
      align: p = "bottom"
    } = e;
    return (0, r.jsx)(h.Z, {
      "data-migration-pending": true,
      dismissibleContent: o.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK,
      inlineArt: true,
      tryItText: i,
      onTryFeature: l,
      header: (0, r.jsx)(s.X6q, {
        className: y.title,
        variant: "heading-md/bold",
        children: t
      }),
      body: (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        className: y.description,
        children: n
      }),
      position: d,
      align: p,
      hideDismissButton: true,
      dismissIcon: (0, r.jsx)(_.s, {}),
      onDismissIconClick: c,
      contentClassName: y.container,
      pointerClassName: y.coachmarkPointer,
      tryItButtonColor: a.zx.Colors.BRAND,
      art: (0, r.jsx)(S, {
        customIconSrcs: u
      })
    })
  };

function P(e) {
  let {
    calculateVisibility: t,
    children: n,
    popoutElement: l,
    positionControlRef: o,
    targetElementRef: a,
    defaultCoachmarkAlign: u,
    disableAutoInvert: d,
    onGetTargetElementDimensions: p,
    spacing: f,
    position: h = "right"
  } = e, [g, m] = i.useState("bottom" === u), [_, O] = i.useState(true), [y, v] = i.useState(String(Date.now())), j = (0, c.Z)(), C = i.useCallback(e => {
    let n = t(e);
    n !== _ && O(n)
  }, [_, t]), E = a.current, x = i.useCallback(() => {
    null != o && null != o.current && o.current.updateElementPosition()
  }, [o]);
  i.useEffect(() => (null != E && E.ownerDocument.addEventListener("scroll", x, true), () => {
    null != E && E.ownerDocument.removeEventListener("scroll", x, true)
  }), [E, x]);
  let S = i.useCallback(e => {
    let {
      height: t,
      width: n,
      elementBoundingRect: r,
      hasElementPositionChanged: i
    } = e;
    if (null != p && p({
        height: t,
        width: n
      }), null != r) {
      if (C(r), i && v(String(Date.now())), d) return;
      let e = r.top < window.innerHeight / 2;
      if (e === g) return;
      m(e), v(String(Date.now()))
    }
  }, [g, C, p, d]);
  (0, b.fu)({
    onGetElementDimensionsAndBoundingRect: S,
    positionControlRef: o,
    shouldPollPositionOnMount: true,
    targetElementRef: a
  });
  let I = i.useMemo(() => d ? null != u ? u : "bottom" : g ? "top" : "bottom", [d, u, g]),
    P = _ && !j,
    N = i.Children.map(l, e => i.cloneElement(e, {
      align: I
    }));
  return (0, r.jsx)(s.yRy, {
    autoInvert: false,
    renderPopout: () => N,
    position: h,
    align: I,
    nudgeAlignIntoViewport: false,
    shouldShow: P,
    spacing: f,
    positionKey: y,
    animation: s.yRy.Animation.TRANSLATE,
    targetElementRef: a,
    children: () => n
  })
}