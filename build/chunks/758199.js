/** Chunk was on 52272 **/
n.d(t, {
  W: () => O,
  u: () => E
}), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r, i = n(200651),
  o = n(192379),
  a = n(120356),
  l = n.n(a),
  s = n(442837),
  c = n(481060),
  u = n(434650),
  d = n(607070),
  p = n(206295),
  m = n(70097),
  f = n(314897),
  h = n(572004),
  g = n(914498),
  _ = n(217702),
  b = n(388032),
  v = n(982018);

function x() {
  return (x = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
var E = ((r = {})[r.BOT = 0] = "BOT", r[r.ACTIVITY = 1] = "ACTIVITY", r);

function O(e) {
  var t, n, r, a;
  let {
    title: E,
    header: O,
    info: N,
    staticBannerSrc: j,
    videoBannerSrc: C,
    bannerAspectRatio: I = 0,
    iconSrc: S,
    embedUrl: T,
    actions: P = [],
    trackingConfig: A
  } = e;
  A = {
    id: null !== (n = null == (t = A) ? void 0 : t.id) && void 0 !== n ? n : "0",
    linkType: null !== (r = null == t ? void 0 : t.linkType) && void 0 !== r ? r : g.Un.UNKNOWN,
    referrerId: null !== (a = null == t ? void 0 : t.referrerId) && void 0 !== a ? a : f.default.getId(),
    activityCustomId: null == t ? void 0 : t.activityCustomId,
    onView: null == t ? void 0 : t.onView,
    onLinkCopied: null == t ? void 0 : t.onLinkCopied
  };
  let {
    primaryColor: w,
    secondaryColor: Z
  } = (0, p.Z)(null != S ? S : j), k = "linear-gradient(45deg, ".concat(w, ", ").concat(Z, ")"), R = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), D = o.useRef(!1), L = (0, u.O)(e => {
    if (!1 === D.current && e) {
      var t;
      null == A || null === (t = A.onView) || void 0 === t || t.call(A), (0, g.GF)(A.id, A.linkType, A.referrerId, A.activityCustomId), D.current = !0
    }
  }, void 0), M = h.wS && null != T ? (0, i.jsx)(c.zxk, {
    look: c.zxk.Looks.BLANK,
    size: c.zxk.Sizes.ICON,
    "aria-label": b.NW.string(b.t.WqhZsr),
    className: v.linkIcon,
    onClick: () => {
      (0, h.JG)(T), (0, c.showToast)((0, c.createToast)(b.NW.string(b.t["L/PwZW"]), c.ToastType.SUCCESS)), (0, g.Yu)(A.id, A.linkType)
    },
    children: (0, i.jsx)(c.xPt, {
      size: "xs",
      color: "currentColor"
    })
  }) : null, W = null != j, U = null != C && !1 === R, F = W || U, B = 0 === I ? v.bannerAspectRatioBot : v.bannerAspectRatioActivity, G = o.useRef(null), H = o.useCallback(() => {
    let e = G.current;
    null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play())
  }, []), V = o.useMemo(() => !!U && new URL(C).pathname.endsWith(".gif"), [U, C]);
  return (0, i.jsxs)("div", {
    ref: L,
    className: l()(v.embed, {
      [v.showVideoOnFocus]: U
    }),
    children: [F && (0, i.jsxs)("div", {
      className: l()(v.bannerWrapper, B),
      children: [U && (V ? (0, i.jsx)("div", {
        className: v.videoBanner,
        style: {
          backgroundImage: "url(".concat(C, ")")
        }
      }) : (0, i.jsx)(m.Z, {
        ref: G,
        src: C,
        mediaLayoutType: _.hV.MOSAIC,
        loop: !0,
        muted: !0,
        className: v.videoBanner
      })), W && (0, i.jsx)("div", {
        className: v.staticBanner,
        style: {
          backgroundImage: "url(".concat(j, ")")
        },
        onTransitionEnd: H
      })]
    }), (0, i.jsxs)("div", {
      className: v.contentContainer,
      style: {
        background: k
      },
      children: [null != O && (0, i.jsxs)("div", {
        className: v.header,
        children: [(0, i.jsx)(c.Text, {
          variant: "eyebrow",
          color: "none",
          children: O
        }), M]
      }), (0, i.jsxs)("div", {
        className: v.contentWrapper,
        children: [null != S && (0, i.jsx)("div", {
          className: v.img,
          style: {
            backgroundImage: "url(".concat(S, ")")
          }
        }), (0, i.jsxs)("div", {
          className: v.content,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "none",
            lineClamp: 1,
            children: E
          }), N]
        }), null == O && M]
      }), P.length > 0 && (0, i.jsx)("div", {
        className: v.actionWrapper,
        children: P.map((e, t) => {
          let {
            label: n,
            onClick: r,
            disabledReason: o,
            submitting: a,
            trackingArea: l
          } = e, s = null != o, u = 0 === t, d = {
            color: u ? c.zxk.Colors.WHITE : c.zxk.Colors.TRANSPARENT,
            className: u ? v.primaryButton : v.alwaysWhiteText,
            disabled: s,
            submitting: a,
            children: n,
            onClick(e) {
              r(e), (0, g.KX)(A.id, A.linkType, l, A.referrerId, A.activityCustomId)
            }
          };
          return s ? (0, i.jsx)(c.ua7, {
            text: o,
            children: e => {
              var t = x({}, function(e) {
                if (null == e) throw TypeError("Cannot destructure " + e);
                return e
              }(e));
              return (0, i.jsx)(c.zxk, y({}, d, t))
            }
          }, n) : (0, i.jsx)(c.zxk, y({}, d), n)
        })
      })]
    })]
  })
}