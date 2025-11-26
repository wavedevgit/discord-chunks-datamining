/** Chunk was on 76215 **/
/** chunk id: 66630, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk343190 = require("./343190.js");
let R = "CLEAR_AFTER";

function E(e) {
  var t, n;
  let {
    transitionState: l,
    onClose: E,
    sourceAnalyticsLocations: M = [],
    prompt: U = null
  } = e, F = (0, v.p)({
    location: "CustomStatusModalWithPreview"
  }), k = (0, T.P)({
    location: "CustomStatusModalWithPreview"
  }), {
    analyticsLocations: I
  } = (0, O.ZP)(M, p.Z.CUSTOM_STATUS_MODAL), Y = (0, u.e7)([h.default], () => {
    var e;
    return null != (e = h.default.getCurrentUser()) ? e : null
  }), B = (0, w.a)(), [H, L] = i.useState(null != (t = null == B ? true : B.state) ? t : ""), [z, q] = i.useState(null != (n = null == B ? true : B.emoji) ? n : null), [V, W] = i.useState((0, P.Z)()), G = i.useRef(null), J = i.useRef(null), K = i.useRef(null), Q = F && null != U ? U.label() : A.intl.string(A.t.xod367), [X, $] = i.useState(Q), {
    ref: ee,
    width: et
  } = (0, m.ZP)(Q);
  i.useEffect(() => {
    let e = K.current;
    if (null == et || null == e) return;
    let t = et - 78;
    e.textContent = Q;
    let n = e.getBoundingClientRect().width;
    if (n <= t) $(Q);
    else {
      let e = n / Q.length,
        r = Math.floor((t - 3 * e) / e);
      $("".concat(Q.substring(0, r)).concat("..."))
    }
  }, [et, Q]), i.useEffect(() => {
    S.default.track(D.rMx.OPEN_MODAL, {
      type: p.Z.CUSTOM_STATUS_MODAL,
      location_stack: I
    })
  }, [I]), (0, f.ZP)(() => {
    var e, t;
    null == (e = G.current) || e.focus(), null == (t = G.current) || t.setSelection(H.length, H.length)
  });
  let en = () => {
      V !== R && ((0, j.Z)({
        text: H,
        emojiInfo: z,
        clearAfter: V,
        prompt: U,
        analyticsLocations: I
      }), E())
    },
    er = F ? A.intl.string(A.t.rp0ahn) : A.intl.string(A.t.UcdRn2),
    ei = "custom-status-input";
  return (0, r.jsxs)(o.Modal, {
    title: A.intl.string(A.t.Zx4jzN),
    actionBarInput: (0, r.jsx)("div", {
      className: N.clearAfterSelectContainer,
      children: (0, r.jsx)(c.q4e, {
        maxVisibleItems: C.wS.length + 1,
        value: V,
        options: k ? [{
          value: R,
          key: R,
          label: A.intl.string(A.t.E45wvP),
          disabled: true
        }, ...C.wS.map(e => ({
          value: e,
          key: e,
          label: (0, _.Z)(e, true)
        }))] : C.wS.map(e => ({
          value: e,
          key: e,
          label: (0, _.Z)(e)
        })),
        onChange: e => W(e),
        optionClassName: N.clearAfterSelectOption,
        renderOptionLabel: e => {
          let {
            value: t,
            label: n,
            disabled: i
          } = e;
          return (0, r.jsx)("span", {
            className: a()(N.clearAfterSelectOptionLabel, i ? N.disabled : true),
            children: t === R ? n : (0, x.Z)(t, k)
          })
        },
        variant: "text-only",
        popoutWidth: "auto",
        popoutPosition: "right"
      })
    }),
    onClose: async () => {
      await E()
    },
    transitionState: l,
    actions: [{
      text: A.intl.string(A.t["R3BPH+"]),
      variant: "primary",
      onClick: en
    }],
    children: [null != Y && (0, r.jsx)("div", {
      className: N.profilePreview,
      children: (0, r.jsx)(y.Z, {
        user: Y,
        previewText: H,
        previewEmoji: z,
        placeHolderText: Q,
        transitionState: l
      })
    }), (0, r.jsxs)("div", {
      className: N.formGroup,
      children: [(0, r.jsx)(c.Text, {
        tag: "label",
        htmlFor: ei,
        variant: "heading-md/semibold",
        className: N.customStatusInputTitle,
        children: er
      }), (0, r.jsxs)("div", {
        className: N.inputContainer,
        ref: ee,
        children: [(0, r.jsx)("span", {
          ref: K,
          className: N.hiddenPlaceholder,
          "aria-hidden": "true"
        }), (0, r.jsx)("div", {
          className: N.emojiButtonContainer,
          children: (0, r.jsx)(c.yRy, {
            targetElementRef: J,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(b.Z, {
                closePopout: t,
                onSelectEmoji: e => {
                  var n;
                  let {
                    emoji: r,
                    willClose: i
                  } = e;
                  null != (n = r) && q(null != n.id ? {
                    id: n.id,
                    name: n.name,
                    animated: n.animated
                  } : {
                    id: null,
                    name: n.optionallyDiverseSequence,
                    animated: false
                  }), i && t()
                },
                pickerIntention: Z.Hz.STATUS,
                onNavigateAway: E
              })
            },
            position: "left",
            animation: c.yRy.Animation.NONE,
            align: "top",
            children: (e, t) => {
              var n, i;
              let {
                isShown: l
              } = t;
              return (0, r.jsx)(g.Z, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = r
                  })
                }
                return e
              }({}, e), i = i = {
                ref: J,
                active: l,
                className: N.emojiButton,
                spriteSize: 24,
                tabIndex: 0,
                renderButtonContents: null == z ? null : () => (0, r.jsx)(d.Z, {
                  className: N.emoji,
                  emojiId: z.id,
                  emojiName: z.name,
                  animated: !!z.animated
                })
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(i)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
              }), n))
            }
          })
        }), (0, r.jsx)(s.iS, {
          autosize: true,
          value: H,
          maxLength: C.s0,
          rows: 1,
          showRemainingCharacterCount: false,
          placeholder: X,
          onChange: e => {
            L(e)
          },
          onKeyDown: e => {
            "Enter" === e.key && en()
          },
          className: N.input,
          inputRef: G,
          id: ei
        }), (H.length > 0 || null != z) && (0, r.jsx)(c.P3F, {
          "aria-label": A.intl.string(A.t.wfYTHe),
          className: N.clearButton,
          onClick: () => {
            L(""), q(null)
          },
          children: (0, r.jsx)(c.k$p, {
            size: "md",
            color: "currentColor",
            className: N.clearIcon
          })
        })]
      }), (0, r.jsx)(c.nn4, {
        children: "".concat(A.intl.string(A.t.EVV6uZ), ": ").concat(Q)
      })]
    })]
  })
}