/** Chunk was on 41753 **/
/** chunk id: 432792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => S,
  M4: () => I,
  WS: () => P,
  t4: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk185905 = require("./185905.js"),
  Chunk447489 = require("./447489.js"),
  Chunk484885 = require("./484885.js");
let j = () => (0, Chunk930153.Lk)(document.body.style.getPropertyValue("--custom-app-panels-height"), 56) + 8,
  E = {
    discover: Chunk704215.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
    shop: Chunk704215.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
  },
  S = e => {
    let {
      onboardingCoachmarkType: t,
      prevCoachmarksDismissed: n = true,
      onShowCoachmarkHandler: r
    } = e, l = (0, h.Nj)(o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL), {
      enabled: s
    } = (0, m.WX)({
      location: "virtual_currency_onboarding_coachmark"
    }), a = E[t], c = (0, h.Nj)(a), u = s && l && n && !c, d = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "CLOSE";
      c || (0, h.Q3)(E[t], {
        forceTrack: true,
        dismissAction: "CTA_CLICK" === e ? _.L.TAKE_ACTION : _.L.USER_DISMISS,
        groupName: _.R.VIRTUAL_CURRENCY_ONBOARDING
      })
    }, [c, t]), [f, g] = i.useState(false);
    return i.useEffect(() => {
      u ? f || ((0, p.kk)(a, {
        groupName: _.R.VIRTUAL_CURRENCY_ONBOARDING
      }), true !== r && r(), g(true)) : f && g(false)
    }, [u, r, f, a]), {
      shouldShow: f,
      closeCoachmarkIfOpen: d
    }
  },
  x = e => {
    let {
      customIconSrcs: t
    } = e, n = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), i = true !== t ? t.animated : v.Z, o = true !== t ? t.static : C.Z;
    return n || null == i ? (0, r.jsx)("img", {
      src: o,
      className: y.orbAsset,
      alt: "Orb"
    }) : (0, r.jsxs)(d.Z, {
      autoPlay: true,
      loop: true,
      className: y.orbAsset,
      children: [(0, r.jsx)("source", {
        src: v.Z,
        type: "video/webm"
      }), (0, r.jsx)("img", {
        src: C.Z,
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
      align: h = "bottom"
    } = e;
    return (0, r.jsx)(f.Z, {
      "data-migration-pending": true,
      dismissibleContent: o.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK,
      inlineArt: true,
      tryItText: i,
      onTryFeature: l,
      header: (0, r.jsx)(a.X6q, {
        className: y.title,
        variant: "heading-md/bold",
        children: t
      }),
      body: (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        className: y.description,
        children: n
      }),
      position: d,
      align: h,
      hideDismissButton: true,
      dismissIcon: (0, r.jsx)(O.s, {}),
      onDismissIconClick: c,
      contentClassName: y.container,
      pointerClassName: y.coachmarkPointer,
      tryItButtonColor: s.zx.Colors.BRAND,
      art: (0, r.jsx)(x, {
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
    targetElementRef: s,
    defaultCoachmarkAlign: u,
    disableAutoInvert: d,
    onGetTargetElementDimensions: h,
    spacing: p,
    position: f = "right"
  } = e, [g, m] = i.useState("bottom" === u), [O, _] = i.useState(true), [y, C] = i.useState(String(Date.now())), v = (0, c.Z)(), j = i.useCallback(e => {
    let n = t(e);
    n !== O && _(n)
  }, [O, t]), E = s.current, S = i.useCallback(() => {
    null != o && null != o.current && o.current.updateElementPosition()
  }, [o]);
  i.useEffect(() => (null != E && E.ownerDocument.addEventListener("scroll", S, true), () => {
    null != E && E.ownerDocument.removeEventListener("scroll", S, true)
  }), [E, S]);
  let x = i.useCallback(e => {
    let {
      height: t,
      width: n,
      elementBoundingRect: r,
      hasElementPositionChanged: i
    } = e;
    if (null != h && h({
        height: t,
        width: n
      }), null != r) {
      if (j(r), i && C(String(Date.now())), d) return;
      let e = r.top < window.innerHeight / 2;
      if (e === g) return;
      m(e), C(String(Date.now()))
    }
  }, [g, j, h, d]);
  (0, b.fu)({
    onGetElementDimensionsAndBoundingRect: x,
    positionControlRef: o,
    shouldPollPositionOnMount: true,
    targetElementRef: s
  });
  let I = i.useMemo(() => d ? null != u ? u : "bottom" : g ? "top" : "bottom", [d, u, g]),
    P = O && !v,
    N = i.Children.map(l, e => i.cloneElement(e, {
      align: I
    }));
  return (0, r.jsx)(a.yRy, {
    autoInvert: false,
    renderPopout: () => N,
    position: f,
    align: I,
    nudgeAlignIntoViewport: false,
    shouldShow: P,
    spacing: p,
    positionKey: y,
    animation: a.yRy.Animation.TRANSLATE,
    targetElementRef: s,
    children: () => n
  })
}