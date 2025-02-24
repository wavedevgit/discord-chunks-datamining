/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => k
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(704215),
  c = n(996146),
  u = n(481060),
  d = n(100527),
  f = n(906732),
  p = n(605236),
  _ = n(243778),
  h = n(963249),
  m = n(599659),
  g = n(282925),
  E = n(819640),
  v = n(594174),
  b = n(70956),
  y = n(709054),
  O = n(51144),
  S = n(443603),
  I = n(981631),
  T = n(921944),
  N = n(388032),
  A = n(222328),
  C = n(342203);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = b.Z.Millis.DAYS_30;

function L(e) {
  let {
    animatedIconComponent: t,
    hovered: i,
    isCoachmarkDismissed: o
  } = e, s = !o || i;
  return (0, r.jsxs)("div", {
    className: A.iconContainer,
    children: [(0, r.jsx)("div", {
      className: a()(A.decorativeLayer, {
        [A.decorativeLayerActive]: s
      }),
      style: {
        zIndex: 3
      },
      children: (0, r.jsx)(u.Fmz, {
        shouldAnimate: s,
        importData: () => n.e("39298").then(n.t.bind(n, 324952, 19))
      })
    }), (0, r.jsx)("div", {
      className: a()(A.giftIconButton, {
        [A.giftIconButtonActive]: s
      }),
      style: {
        zIndex: 2
      },
      children: (0, r.jsx)(t, {
        color: "currentColor"
      })
    }), (0, r.jsx)("div", {
      className: a()(A.decorativeLayer, {
        [A.decorativeLayerActive]: s
      }),
      style: {
        zIndex: 1
      },
      children: (0, r.jsx)(u.Fmz, {
        shouldAnimate: s,
        importData: () => n.e("58889").then(n.t.bind(n, 593162, 19))
      })
    })]
  })
}

function M(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    analyticsLocations: o
  } = (0, f.ZP)(d.Z.GIFT_BUTTON), [a, u] = i.useState(!1), b = (0, s.e7)([E.Z], () => !(null === E.Z || void 0 === E.Z ? void 0 : E.Z.hasLayers())), R = (0, s.e7)([v.default], () => v.default.getCurrentUser()), w = null != R ? y.default.age(R.id) : 0, M = !t && b && w >= x, {
    enabled: k
  } = m.O.useExperiment({
    location: "gift-button"
  }), j = [];
  k && M && j.push(l.z.NITROWEEN_COACHMARKS);
  let [U, G] = (0, _.US)(j), B = null != U, Z = (0, O.Ft)(n), {
    Component: F,
    events: V,
    play: H
  } = (0, c.$)();
  if (t) return null;
  let W = () => {
    (0, h.Z)({
      isGift: !0,
      giftRecipient: null == Z ? void 0 : Z,
      giftMessage: N.NW.string(N.t["rX/m/f"]),
      initialPlanId: null,
      analyticsLocations: o,
      analyticsObject: {
        page: n.isPrivate() ? I.ZY5.DM_CHANNEL : I.ZY5.GUILD_CHANNEL,
        section: I.jXE.CHANNEL_TEXT_AREA,
        object: I.qAy.NITROWEEN_BUTTON_ICON,
        objectType: I.Qqv.GIFT
      }
    })
  };
  return (0, r.jsxs)("div", {
    className: A.container,
    onMouseEnter: () => {
      a || u(!0)
    },
    onMouseLeave: () => {
      u(!1)
    },
    children: [B && (0, r.jsx)(g.Z, {
      onComplete: () => u(!1),
      onCheckItOutClick: W,
      markAsDismissed: G
    }), (0, r.jsx)(S.Z, D(P({
      innerClassName: C.button,
      "aria-label": N.NW.string(N.t.Z1RnTk),
      isActive: !1,
      onClick: () => {
        H(), u(!1), (0, p.EW)(l.z.NITROWEEN_ANIMATED_GIFTING_ICON, {
          dismissAction: T.L.TAKE_ACTION
        }), W()
      }
    }, V), {
      children: (0, r.jsx)(L, {
        animatedIconComponent: F,
        hovered: a,
        isCoachmarkDismissed: !B
      })
    }))]
  })
}
let k = i.memo(M)