/** Chunk was on 31649 **/
/** chunk id: 66630, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk644540 = require("./644540.js"),
  Chunk359588 = require("./359588.js"),
  Chunk368326 = require("./368326.js"),
  Chunk720449 = require("./720449.js"),
  Chunk684269 = require("./684269.js"),
  Chunk397416 = require("./397416.js"),
  Chunk745579 = require("./745579.js"),
  Chunk74340 = require("./74340.js"),
  Chunk166655 = require("./166655.js"),
  Chunk676035 = require("./676035.js"),
  Chunk346565 = require("./346565.jsx"),
  Chunk562577 = require("./562577.jsx"),
  Chunk926563 = require("./926563.jsx"),
  Chunk875425 = require("./875425.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk782628 = require("./782628.js");
let B = "CLEAR_AFTER";

function M(t) {
  var e, n;
  let {
    transitionState: r,
    onClose: M,
    sourceAnalyticsContext: U,
    sourceAnalyticsLocations: F = [],
    prompt: Y = null,
    showLabelSelectorNewTooltip: H = false
  } = t, W = (0, x.p)({
    location: "CustomStatusModalWithPreview"
  }), z = (0, O.P)({
    location: "CustomStatusModalWithPreview"
  }), V = (0, v.Z)({
    location: "CustomStatusModalWithPreview"
  }), {
    analyticsLocations: G
  } = (0, h.ZP)(F, p.Z.CUSTOM_STATUS_MODAL), K = (0, o.e7)([g.default], () => {
    var t;
    return null != (t = g.default.getCurrentUser()) ? t : null
  }), q = (0, N.a)(), [X, Q] = a.useState(null != (e = null == q ? true : q.state) ? e : ""), [$, J] = a.useState(null != (n = null == q ? true : q.emoji) ? n : null), [tt, te] = a.useState((0, _.Z)()), tn = a.useRef(null), tl = a.useRef(null), ta = a.useRef(null), [tr, ti] = a.useState(null != q && V ? (0, P.Z)(q) : null), [to, ts] = a.useState(H), [tu, tc] = a.useState(() => W && null != Y ? Y.label() : L.intl.string(L.t["xod36+"])), [td, tm] = a.useState(tu), {
    ref: tf,
    width: tp
  } = (0, m.ZP)(tu);
  a.useEffect(() => {
    let t = ta.current;
    if (null == tp || null == t) return;
    let e = tp - 78;
    t.textContent = tu;
    let n = t.getBoundingClientRect().width;
    if (n <= e) tm(tu);
    else {
      let t = n / tu.length,
        l = Math.floor((e - 3 * t) / t);
      tm("".concat(tu.substring(0, l)).concat("..."))
    }
  }, [tp, tu]), a.useEffect(() => {
    j.default.track(A.rMx.OPEN_MODAL, {
      type: p.Z.CUSTOM_STATUS_MODAL,
      location_stack: G
    })
  }, [G]), (0, f.ZP)(() => {
    var t, e;
    null == (t = tn.current) || t.focus(), null == (e = tn.current) || e.setSelection(X.length, X.length)
  });
  let th = t => {
      null != t && J(null != t.id ? {
        id: t.id,
        name: t.name,
        animated: t.animated
      } : {
        id: null,
        name: t.optionallyDiverseSequence,
        animated: false
      })
    },
    tb = () => {
      tt !== B && ((0, C.Z)({
        text: X,
        emojiInfo: $,
        clearAfter: tt,
        prompt: Y,
        customStatusLabel: tr,
        analyticsLocations: G,
        analyticsContext: U
      }), M())
    },
    tS = () => null == $ ? null : () => (0, l.jsx)(d.Z, {
      className: k.emoji,
      emojiId: $.id,
      emojiName: $.name,
      animated: !!$.animated
    }),
    tg = W ? L.intl.string(L.t.rp0aho) : L.intl.string(L.t.UcdRn5),
    tj = "custom-status-placeholder-text";
  return (0, l.jsxs)(s.Modal, {
    title: L.intl.string(L.t.Zx4jzM),
    actionBarInput: (0, l.jsx)("div", {
      className: k.clearAfterSelectContainer,
      children: (0, l.jsx)(c.q4e, {
        maxVisibleItems: Z.wS.length + 1,
        value: tt,
        options: z ? [{
          value: B,
          key: B,
          label: L.intl.string(L.t.E45wvL),
          disabled: true
        }, ...Z.wS.map(t => ({
          value: t,
          key: t,
          label: (0, T.Z)(t, true)
        }))] : Z.wS.map(t => ({
          value: t,
          key: t,
          label: (0, T.Z)(t)
        })),
        onChange: t => te(t),
        optionClassName: k.clearAfterSelectOption,
        renderOptionLabel: t => {
          let {
            value: e,
            label: n,
            disabled: a
          } = t;
          return (0, l.jsx)("span", {
            className: i()(k.clearAfterSelectOptionLabel, a ? k.disabled : true),
            children: e === B ? n : (0, y.Z)(e, z)
          })
        },
        look: c.qQH.CUSTOM,
        popoutWidth: "auto",
        popoutPosition: "right"
      })
    }),
    onClose: async () => {
      await M()
    },
    transitionState: r,
    actions: [{
      text: L.intl.string(L.t.R3BPHx),
      variant: "primary",
      onClick: tb
    }],
    children: [null != K && (0, l.jsx)("div", {
      className: k.profilePreview,
      children: (0, l.jsx)(I.Z, {
        user: K,
        previewText: X,
        previewEmoji: $,
        placeHolderText: tu,
        transitionState: r,
        label: tr
      })
    }), (0, l.jsxs)(c.hjN, {
      className: k.formGroup,
      titleClassName: k.customStatusInputTitle,
      title: tg,
      children: [V && (0, l.jsx)("div", {
        className: k.labelSelectorContainer,
        children: (0, l.jsx)(c.DY3, {
          position: "right",
          color: c.FGA.BRAND,
          "aria-label": L.intl.string(L.t.y2b7CA),
          shouldShow: to,
          forceOpen: to && r === c.Dvm.ENTERED,
          tooltipClassName: k.labelSelectorTooltip,
          text: L.intl.string(L.t.y2b7CA),
          children: (0, l.jsx)(D.Z, {
            currentValue: tr,
            onChange: t => {
              let e = t === tr ? null : t;
              j.default.track(A.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                previous_label: tr,
                new_label: e,
                location_stack: F
              }), ti(e), ts(false), null != e && tc((0, w.Z)(e))
            }
          })
        })
      }), (0, l.jsxs)("div", {
        className: k.inputContainer,
        ref: tf,
        children: [(0, l.jsx)("span", {
          ref: ta,
          className: k.hiddenPlaceholder,
          "aria-hidden": "true"
        }), (0, l.jsx)("div", {
          className: i()(k.emojiButtonContainer, null != tr && k.emojiButtonContainerWithLabel),
          children: (0, l.jsx)(c.yRy, {
            targetElementRef: tl,
            renderPopout: t => {
              let {
                closePopout: e
              } = t;
              return (0, l.jsx)(S.Z, {
                closePopout: e,
                onSelectEmoji: t => {
                  let {
                    emoji: n,
                    willClose: l
                  } = t;
                  th(n), l && e()
                },
                pickerIntention: R.Hz.STATUS,
                onNavigateAway: M
              })
            },
            position: "left",
            animation: c.yRy.Animation.NONE,
            align: "top",
            children: (t, e) => {
              var n, a;
              let {
                isShown: r
              } = e;
              return (0, l.jsx)(b.Z, (n = function(t) {
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
                ref: tl,
                active: r,
                className: k.emojiButton,
                tabIndex: 0,
                renderButtonContents: tS()
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
        }), (0, l.jsx)(u.iS, {
          autosize: true,
          "aria-describedby": tj,
          value: X,
          maxLength: Z.s0,
          rows: 1,
          showRemainingCharacterCount: false,
          placeholder: td,
          onChange: t => {
            Q(t)
          },
          onKeyDown: t => {
            "Enter" === t.key && tb()
          },
          className: i()(k.input, null != tr && k.inputWithLabel),
          inputRef: tn
        }, null != tr ? "with-label" : "without-label"), null != tr && (0, l.jsx)("div", {
          className: k.inputCustomStatusLabelRow,
          children: (0, l.jsx)(E.Z, {
            label: tr
          })
        }), (0, l.jsx)(c.nn4, {
          id: tj,
          children: "".concat(L.intl.string(L.t.EVV6ub), ": ").concat(tu)
        }), (X.length > 0 || null != $) && (0, l.jsx)("div", {
          className: i()(k.clearButtonWrapper, null != tr && k.buttonContainerWithLabel),
          children: (0, l.jsx)(c.P3F, {
            focusProps: {
              offset: {
                top: 8,
                bottom: 8,
                left: false,
                right: false
              }
            },
            "aria-label": L.intl.string(L.t.wfYTHR),
            className: k.clearButton,
            onClick: () => {
              Q(""), J(null)
            },
            children: (0, l.jsx)(c.k$p, {
              size: "md",
              color: "currentColor",
              className: k.clearIcon
            })
          })
        })]
      })]
    })]
  })
}