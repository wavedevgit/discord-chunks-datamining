/** Chunk was on 41091 **/
/** chunk id: 431374, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
let C = "CLEAR_AFTER";

function M(t) {
  var e, n;
  let {
    transitionState: r,
    onClose: M,
    sourceAnalyticsLocations: k = [],
    prompt: H = null
  } = t, Y = (0, S.h)({
    location: "CustomStatusModalWithPreview"
  }), I = (0, O.R)({
    location: "CustomStatusModalWithPreview"
  }), {
    analyticsLocations: L
  } = (0, h.Ay)(k, p.A.CUSTOM_STATUS_MODAL), F = (0, s.bG)([A.default], () => {
    var t;
    return null != (t = A.default.getCurrentUser()) ? t : null
  }), Z = (0, _.K)(), [z, V] = a.useState(null != (e = null == Z ? true : Z.state) ? e : ""), [W, q] = a.useState(null != (n = null == Z ? true : Z.emoji) ? n : null), [G, X] = a.useState((0, v.A)()), B = a.useRef(null), K = a.useRef(null), Q = a.useRef(null), J = Y && null != H ? H.label() : E.intl.string(E.t.xod367), [$, tt] = a.useState(J), {
    ref: te,
    width: tn
  } = (0, f.Ay)(J);
  a.useEffect(() => {
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
  }, [tn, J]), a.useEffect(() => {
    y.default.track(N.HAw.OPEN_MODAL, {
      type: p.A.CUSTOM_STATUS_MODAL,
      location_stack: L
    })
  }, [L]), (0, g.Ay)(() => {
    var t, e;
    null == (t = B.current) || t.focus(), null == (e = B.current) || e.setSelection(z.length, z.length)
  });
  let tl = () => {
      G !== C && ((0, j.A)({
        text: z,
        emojiInfo: W,
        clearAfter: G,
        prompt: H,
        analyticsLocations: L
      }), M())
    },
    ta = Y ? E.intl.string(E.t.rp0ahn) : E.intl.string(E.t.UcdRn2),
    tr = "custom-status-input";
  return (0, l.jsxs)(o.Modal, {
    title: E.intl.string(E.t.Zx4jzN),
    actionBarInput: (0, l.jsx)("div", {
      className: U.l3,
      children: (0, l.jsx)(u.Te, {
        maxVisibleItems: D.SX.length + 1,
        value: G,
        options: I ? [{
          value: C,
          key: C,
          label: E.intl.string(E.t.E45wvP),
          disabled: true
        }, ...D.SX.map(t => ({
          value: t,
          key: t,
          label: (0, x.A)(t, true)
        }))] : D.SX.map(t => ({
          value: t,
          key: t,
          label: (0, x.A)(t)
        })),
        onChange: t => X(t),
        optionClassName: U.Pl,
        renderOptionLabel: t => {
          let {
            value: e,
            label: n,
            disabled: a
          } = t;
          return (0, l.jsx)("span", {
            className: i()(U.j3, a ? U.r9 : true),
            children: e === C ? n : (0, P.A)(e, I)
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
    transitionState: r,
    actions: [{
      text: E.intl.string(E.t["R3BPH+"]),
      variant: "primary",
      onClick: tl
    }],
    children: [null != F && (0, l.jsx)("div", {
      className: U.q5,
      children: (0, l.jsx)(w.A, {
        user: F,
        previewText: z,
        previewEmoji: W,
        placeHolderText: J,
        transitionState: r
      })
    }), (0, l.jsxs)("div", {
      className: U.eH,
      children: [(0, l.jsx)(d.Text, {
        tag: "label",
        htmlFor: tr,
        variant: "heading-md/semibold",
        className: U.wW,
        children: ta
      }), (0, l.jsxs)("div", {
        className: U.Kf,
        ref: te,
        children: [(0, l.jsx)("span", {
          ref: Q,
          className: U._D,
          "aria-hidden": "true"
        }), (0, l.jsx)("div", {
          className: U.S0,
          children: (0, l.jsx)(d.YNO, {
            targetElementRef: K,
            renderPopout: t => {
              let {
                closePopout: e
              } = t;
              return (0, l.jsx)(T.A, {
                closePopout: e,
                onSelectEmoji: t => {
                  let {
                    emoji: n,
                    willClose: l
                  } = t;
                  null == n || q(null != n.id ? {
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
              var n, a;
              let {
                isShown: r
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
              }({}, t), a = a = {
                ref: K,
                active: r,
                className: U.Z8,
                spriteSize: 24,
                tabIndex: 0,
                renderButtonContents: null == W ? null : () => (0, l.jsx)(m.A, {
                  className: U.Zg,
                  emojiId: W.id,
                  emojiName: W.name,
                  animated: !!W.animated
                })
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(t);
                  n.push.apply(n, l)
                }
                return n
              })(Object(a)).forEach(function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(a, t))
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
            V(t)
          },
          onKeyDown: t => {
            "Enter" === t.key && tl()
          },
          className: U.hF,
          inputRef: B,
          id: tr
        }), (z.length > 0 || null != W) && (0, l.jsx)(d.DUT, {
          "aria-label": E.intl.string(E.t.wfYTHe),
          className: U.mt,
          onClick: () => {
            V(""), q(null)
          },
          children: (0, l.jsx)(d.aXh, {
            size: "md",
            color: "currentColor",
            className: U.hj
          })
        })]
      }), (0, l.jsx)(d.AC4, {
        children: "".concat(E.intl.string(E.t.EVV6uZ), ": ").concat(J)
      })]
    })]
  })
}