/** Chunk was on 31649 **/
/** chunk id: 66630, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk368326 = require("./368326.js"),
  Chunk720449 = require("./720449.js"),
  Chunk684269 = require("./684269.js"),
  Chunk397416 = require("./397416.js"),
  Chunk745579 = require("./745579.js"),
  Chunk676035 = require("./676035.js"),
  Chunk926563 = require("./926563.jsx"),
  Chunk875425 = require("./875425.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305844 = require("./305844.js");
let A = "CLEAR_AFTER";

function R(t) {
  var e, n;
  let {
    transitionState: i,
    onClose: R,
    sourceAnalyticsContext: k,
    sourceAnalyticsLocations: I = [],
    prompt: B = null
  } = t, M = (0, v.p)({
    location: "CustomStatusModalWithPreview"
  }), U = (0, j.P)({
    location: "CustomStatusModalWithPreview"
  }), {
    analyticsLocations: F
  } = (0, h.ZP)(I, p.Z.CUSTOM_STATUS_MODAL), L = (0, o.e7)([g.default], () => {
    var t;
    return null != (t = g.default.getCurrentUser()) ? t : null
  }), Y = (0, P.a)(), [H, z] = a.useState(null != (e = null == Y ? true : Y.state) ? e : ""), [W, G] = a.useState(null != (n = null == Y ? true : Y.emoji) ? n : null), [V, q] = a.useState((0, y.Z)()), K = a.useRef(null), X = a.useRef(null), J = a.useRef(null), $ = M && null != B ? B.label() : E.intl.string(E.t["xod36+"]), [Q, tt] = a.useState($), {
    ref: te,
    width: tn
  } = (0, m.ZP)($);
  a.useEffect(() => {
    let t = J.current;
    if (null == tn || null == t) return;
    let e = tn - 78;
    t.textContent = $;
    let n = t.getBoundingClientRect().width;
    if (n <= e) tt($);
    else {
      let t = n / $.length,
        r = Math.floor((e - 3 * t) / t);
      tt("".concat($.substring(0, r)).concat("..."))
    }
  }, [tn, $]), a.useEffect(() => {
    O.default.track(N.rMx.OPEN_MODAL, {
      type: p.Z.CUSTOM_STATUS_MODAL,
      location_stack: F
    })
  }, [F]), (0, f.ZP)(() => {
    var t, e;
    null == (t = K.current) || t.focus(), null == (e = K.current) || e.setSelection(H.length, H.length)
  });
  let tr = () => {
      V !== A && ((0, x.Z)({
        text: H,
        emojiInfo: W,
        clearAfter: V,
        prompt: B,
        analyticsLocations: F,
        analyticsContext: k
      }), R())
    },
    ta = M ? E.intl.string(E.t.rp0aho) : E.intl.string(E.t.UcdRn5),
    ti = "custom-status-placeholder-text";
  return (0, r.jsxs)(s.Modal, {
    title: E.intl.string(E.t.Zx4jzM),
    actionBarInput: (0, r.jsx)("div", {
      className: Z.clearAfterSelectContainer,
      children: (0, r.jsx)(c.q4e, {
        maxVisibleItems: w.wS.length + 1,
        value: V,
        options: U ? [{
          value: A,
          key: A,
          label: E.intl.string(E.t.E45wvL),
          disabled: true
        }, ...w.wS.map(t => ({
          value: t,
          key: t,
          label: (0, _.Z)(t, true)
        }))] : w.wS.map(t => ({
          value: t,
          key: t,
          label: (0, _.Z)(t)
        })),
        onChange: t => q(t),
        optionClassName: Z.clearAfterSelectOption,
        renderOptionLabel: t => {
          let {
            value: e,
            label: n,
            disabled: a
          } = t;
          return (0, r.jsx)("span", {
            className: l()(Z.clearAfterSelectOptionLabel, a ? Z.disabled : true),
            children: e === A ? n : (0, C.Z)(e, U)
          })
        },
        variant: "text-only",
        popoutWidth: "auto",
        popoutPosition: "right"
      })
    }),
    onClose: async () => {
      await R()
    },
    transitionState: i,
    actions: [{
      text: E.intl.string(E.t.R3BPHx),
      variant: "primary",
      onClick: tr
    }],
    children: [null != L && (0, r.jsx)("div", {
      className: Z.profilePreview,
      children: (0, r.jsx)(T.Z, {
        user: L,
        previewText: H,
        previewEmoji: W,
        placeHolderText: $,
        transitionState: i
      })
    }), (0, r.jsx)(c.hjN, {
      className: Z.formGroup,
      titleClassName: Z.customStatusInputTitle,
      title: ta,
      children: (0, r.jsxs)("div", {
        className: Z.inputContainer,
        ref: te,
        children: [(0, r.jsx)("span", {
          ref: J,
          className: Z.hiddenPlaceholder,
          "aria-hidden": "true"
        }), (0, r.jsx)("div", {
          className: Z.emojiButtonContainer,
          children: (0, r.jsx)(c.yRy, {
            targetElementRef: X,
            renderPopout: t => {
              let {
                closePopout: e
              } = t;
              return (0, r.jsx)(S.Z, {
                closePopout: e,
                onSelectEmoji: t => {
                  var n;
                  let {
                    emoji: r,
                    willClose: a
                  } = t;
                  null != (n = r) && G(null != n.id ? {
                    id: n.id,
                    name: n.name,
                    animated: n.animated
                  } : {
                    id: null,
                    name: n.optionallyDiverseSequence,
                    animated: false
                  }), a && e()
                },
                pickerIntention: D.Hz.STATUS,
                onNavigateAway: R
              })
            },
            position: "left",
            animation: c.yRy.Animation.NONE,
            align: "top",
            children: (t, e) => {
              var n, a;
              let {
                isShown: i
              } = e;
              return (0, r.jsx)(b.Z, (n = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                  }))), r.forEach(function(e) {
                    var r;
                    r = n[e], e in t ? Object.defineProperty(t, e, {
                      value: r,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : t[e] = r
                  })
                }
                return t
              }({}, t), a = a = {
                ref: X,
                active: i,
                className: Z.emojiButton,
                tabIndex: 0,
                renderButtonContents: null == W ? null : () => (0, r.jsx)(d.Z, {
                  className: Z.emoji,
                  emojiId: W.id,
                  emojiName: W.name,
                  animated: !!W.animated
                })
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t);
                  n.push.apply(n, r)
                }
                return n
              })(Object(a)).forEach(function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(a, t))
              }), n))
            }
          })
        }), (0, r.jsx)(u.iS, {
          autosize: true,
          "aria-describedby": ti,
          value: H,
          maxLength: w.s0,
          rows: 1,
          showRemainingCharacterCount: false,
          placeholder: Q,
          onChange: t => {
            z(t)
          },
          onKeyDown: t => {
            "Enter" === t.key && tr()
          },
          className: Z.input,
          inputRef: K
        }), (0, r.jsx)(c.nn4, {
          id: ti,
          children: "".concat(E.intl.string(E.t.EVV6ub), ": ").concat($)
        }), (H.length > 0 || null != W) && (0, r.jsx)("div", {
          className: Z.clearButtonWrapper,
          children: (0, r.jsx)(c.P3F, {
            focusProps: {
              offset: {
                top: 8,
                bottom: 8,
                left: false,
                right: false
              }
            },
            "aria-label": E.intl.string(E.t.wfYTHR),
            className: Z.clearButton,
            onClick: () => {
              z(""), G(null)
            },
            children: (0, r.jsx)(c.k$p, {
              size: "md",
              color: "currentColor",
              className: Z.clearIcon
            })
          })
        })]
      })
    })]
  })
}