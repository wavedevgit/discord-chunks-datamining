/** Chunk was on 41091 **/
/** chunk id: 431374, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk177975 = require("./177975.js"),
  Chunk576241 = require("./576241.js"),
  Chunk57990 = require("./57990.js"),
  Chunk569921 = require("./569921.js"),
  Chunk267859 = require("./267859.js"),
  Chunk334310 = require("./334310.js"),
  Chunk685396 = require("./685396.js"),
  Chunk16663 = require("./16663.jsx"),
  Chunk403918 = require("./403918.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk501336 = require("./501336.js");
let U = "CLEAR_AFTER";

function M(t) {
  var e, n;
  let {
    transitionState: i,
    onClose: M,
    sourceAnalyticsLocations: k = [],
    prompt: H = null
  } = t, Y = (0, S.h)({
    location: "CustomStatusModalWithPreview"
  }), I = (0, O.R)({
    location: "CustomStatusModalWithPreview"
  }), {
    analyticsLocations: L
  } = (0, h.Ay)(k, g.A.CUSTOM_STATUS_MODAL), F = (0, s.bG)([T.default], () => {
    var t;
    return null != (t = T.default.getCurrentUser()) ? t : null
  }), Z = (0, P.K)(), [z, B] = r.useState(null != (e = null == Z ? true : Z.state) ? e : ""), [V, W] = r.useState(null != (n = null == Z ? true : Z.emoji) ? n : null), [q, G] = r.useState((0, v.A)()), X = r.useRef(null), K = r.useRef(null), Q = r.useRef(null), J = Y && null != H ? H.label() : C.intl.string(C.t.xod367), [$, tt] = r.useState(J), {
    ref: te,
    width: tn
  } = (0, f.Ay)(J);
  r.useEffect(() => {
    let t = Q.current;
    if (null == tn || null == t) return;
    let e = tn - 78;
    t.textContent = J;
    let n = t.getBoundingClientRect().width;
    if (n <= e) tt(J);
    else {
      let t = n / J.length,
        l = Math.floor((e - 3 * t) / t);
      tt("".concat(J.substring(0, l)).concat("..."))
    }
  }, [tn, J]), r.useEffect(() => {
    y.default.track(N.HAw.OPEN_MODAL, {
      type: g.A.CUSTOM_STATUS_MODAL,
      location_stack: L
    })
  }, [L]), (0, p.Ay)(() => {
    var t, e;
    null == (t = X.current) || t.focus(), null == (e = X.current) || e.setSelection(z.length, z.length)
  });
  let tl = () => {
      q !== U && ((0, j.A)({
        text: z,
        emojiInfo: V,
        clearAfter: q,
        prompt: H,
        analyticsLocations: L
      }), M())
    },
    tr = Y ? C.intl.string(C.t.rp0ahn) : C.intl.string(C.t.UcdRn2),
    ti = "custom-status-input";
  return (0, l.jsxs)(o.Modal, {
    title: C.intl.string(C.t.Zx4jzN),
    actionBarInput: (0, l.jsx)("div", {
      className: E.l3,
      children: (0, l.jsx)(u.Te, {
        maxVisibleItems: D.SX.length + 1,
        value: q,
        options: I ? [{
          value: U,
          key: U,
          label: C.intl.string(C.t.E45wvP),
          disabled: true
        }, ...D.SX.map(t => ({
          value: t,
          key: t,
          label: (0, _.A)(t, true)
        }))] : D.SX.map(t => ({
          value: t,
          key: t,
          label: (0, _.A)(t)
        })),
        onChange: t => G(t),
        optionClassName: E.Pl,
        renderOptionLabel: t => {
          let {
            value: e,
            label: n,
            disabled: r
          } = t;
          return (0, l.jsx)("span", {
            className: a()(E.j3, r ? E.r9 : true),
            children: e === U ? n : (0, x.A)(e, I)
          })
        },
        variant: "text-only",
        popoutWidth: "auto",
        popoutPosition: "right",
        "data-migration-pending": true
      })
    }),
    onClose: async () => {
      await M()
    },
    transitionState: i,
    actions: [{
      text: C.intl.string(C.t["R3BPH+"]),
      variant: "primary",
      onClick: tl
    }],
    children: [null != F && (0, l.jsx)("div", {
      className: E.q5,
      children: (0, l.jsx)(w.A, {
        user: F,
        previewText: z,
        previewEmoji: V,
        placeHolderText: J,
        transitionState: i
      })
    }), (0, l.jsxs)("div", {
      className: E.eH,
      children: [(0, l.jsx)(d.Text, {
        tag: "label",
        htmlFor: ti,
        variant: "heading-md/semibold",
        className: E.wW,
        children: tr
      }), (0, l.jsxs)("div", {
        className: E.Kf,
        ref: te,
        children: [(0, l.jsx)("span", {
          ref: Q,
          className: E._D,
          "aria-hidden": "true"
        }), (0, l.jsx)("div", {
          className: E.S0,
          children: (0, l.jsx)(d.YNO, {
            targetElementRef: K,
            renderPopout: t => {
              let {
                closePopout: e
              } = t;
              return (0, l.jsx)(A.A, {
                closePopout: e,
                onSelectEmoji: t => {
                  let {
                    emoji: n,
                    willClose: l
                  } = t;
                  null == n || W(null != n.id ? {
                    id: n.id,
                    name: n.name,
                    animated: n.animated
                  } : {
                    id: null,
                    name: n.optionallyDiverseSequence,
                    animated: false
                  }), l && e()
                },
                pickerIntention: R.b_.STATUS,
                onNavigateAway: M
              })
            },
            position: "left",
            animation: d.YNO.Animation.NONE,
            align: "top",
            children: (t, e) => {
              var n, r;
              let {
                isShown: i
              } = e;
              return (0, l.jsx)(b.A, (n = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                  }))), l.forEach(function(e) {
                    var l;
                    l = n[e], e in t ? Object.defineProperty(t, e, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : t[e] = l
                  })
                }
                return t
              }({}, t), r = r = {
                ref: K,
                active: i,
                className: E.Z8,
                spriteSize: 24,
                tabIndex: 0,
                renderButtonContents: null == V ? null : () => (0, l.jsx)(m.A, {
                  className: E.Zg,
                  emojiId: V.id,
                  emojiName: V.name,
                  animated: !!V.animated
                })
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(t);
                  n.push.apply(n, l)
                }
                return n
              })(Object(r)).forEach(function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t))
              }), n))
            }
          })
        }), (0, l.jsx)(c.f9, {
          autosize: true,
          value: z,
          maxLength: D.hp,
          rows: 1,
          showRemainingCharacterCount: false,
          placeholder: $,
          onChange: t => {
            B(t)
          },
          onKeyDown: t => {
            "Enter" === t.key && tl()
          },
          className: E.hF,
          inputRef: X,
          id: ti
        }), (z.length > 0 || null != V) && (0, l.jsx)(d.DUT, {
          "aria-label": C.intl.string(C.t.wfYTHe),
          className: E.mt,
          onClick: () => {
            B(""), W(null)
          },
          children: (0, l.jsx)(d.aXh, {
            size: "md",
            color: "currentColor",
            className: E.hj
          })
        })]
      }), (0, l.jsx)(d.AC4, {
        children: "".concat(C.intl.string(C.t.EVV6uZ), ": ").concat(J)
      })]
    })]
  })
}