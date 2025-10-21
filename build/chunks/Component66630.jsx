/** Chunk was on 76215 **/
/** chunk id: 66630, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk305844 = require("./305844.js");
let E = "CLEAR_AFTER";

function R(e) {
  var t, n;
  let {
    transitionState: l,
    onClose: R,
    sourceAnalyticsLocations: M = [],
    prompt: U = null
  } = e, k = (0, v.p)({
    location: "CustomStatusModalWithPreview"
  }), F = (0, T.P)({
    location: "CustomStatusModalWithPreview"
  }), {
    analyticsLocations: I
  } = (0, O.ZP)(M, p.Z.CUSTOM_STATUS_MODAL), Y = (0, s.e7)([h.default], () => {
    var e;
    return null != (e = h.default.getCurrentUser()) ? e : null
  }), B = (0, w.a)(), [L, H] = i.useState(null != (t = null == B ? true : B.state) ? t : ""), [W, z] = i.useState(null != (n = null == B ? true : B.emoji) ? n : null), [q, G] = i.useState((0, P.Z)()), J = i.useRef(null), K = i.useRef(null), V = i.useRef(null), X = k && null != U ? U.label() : N.intl.string(N.t["xod36+"]), [Q, $] = i.useState(X), {
    ref: ee,
    width: et
  } = (0, m.ZP)(X);
  i.useEffect(() => {
    let e = V.current;
    if (null == et || null == e) return;
    let t = et - 78;
    e.textContent = X;
    let n = e.getBoundingClientRect().width;
    if (n <= t) $(X);
    else {
      let e = n / X.length,
        r = Math.floor((t - 3 * e) / e);
      $("".concat(X.substring(0, r)).concat("..."))
    }
  }, [et, X]), i.useEffect(() => {
    S.default.track(D.rMx.OPEN_MODAL, {
      type: p.Z.CUSTOM_STATUS_MODAL,
      location_stack: I
    })
  }, [I]), (0, f.ZP)(() => {
    var e, t;
    null == (e = J.current) || e.focus(), null == (t = J.current) || t.setSelection(L.length, L.length)
  });
  let en = () => {
      q !== E && ((0, j.Z)({
        text: L,
        emojiInfo: W,
        clearAfter: q,
        prompt: U,
        analyticsLocations: I
      }), R())
    },
    er = k ? N.intl.string(N.t.rp0aho) : N.intl.string(N.t.UcdRn5),
    ei = "custom-status-placeholder-text";
  return (0, r.jsxs)(o.Modal, {
    title: N.intl.string(N.t.Zx4jzM),
    actionBarInput: (0, r.jsx)("div", {
      className: Z.clearAfterSelectContainer,
      children: (0, r.jsx)(c.q4e, {
        maxVisibleItems: C.wS.length + 1,
        value: q,
        options: F ? [{
          value: E,
          key: E,
          label: N.intl.string(N.t.E45wvL),
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
        onChange: e => G(e),
        optionClassName: Z.clearAfterSelectOption,
        renderOptionLabel: e => {
          let {
            value: t,
            label: n,
            disabled: i
          } = e;
          return (0, r.jsx)("span", {
            className: a()(Z.clearAfterSelectOptionLabel, i ? Z.disabled : true),
            children: t === E ? n : (0, x.Z)(t, F)
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
    transitionState: l,
    actions: [{
      text: N.intl.string(N.t.R3BPHx),
      variant: "primary",
      onClick: en
    }],
    children: [null != Y && (0, r.jsx)("div", {
      className: Z.profilePreview,
      children: (0, r.jsx)(y.Z, {
        user: Y,
        previewText: L,
        previewEmoji: W,
        placeHolderText: X,
        transitionState: l
      })
    }), (0, r.jsxs)("div", {
      className: Z.formGroup,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-md/semibold",
        className: Z.customStatusInputTitle,
        children: er
      }), (0, r.jsxs)("div", {
        className: Z.inputContainer,
        ref: ee,
        children: [(0, r.jsx)("span", {
          ref: V,
          className: Z.hiddenPlaceholder,
          "aria-hidden": "true"
        }), (0, r.jsx)("div", {
          className: Z.emojiButtonContainer,
          children: (0, r.jsx)(c.yRy, {
            targetElementRef: K,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(g.Z, {
                closePopout: t,
                onSelectEmoji: e => {
                  var n;
                  let {
                    emoji: r,
                    willClose: i
                  } = e;
                  null != (n = r) && z(null != n.id ? {
                    id: n.id,
                    name: n.name,
                    animated: n.animated
                  } : {
                    id: null,
                    name: n.optionallyDiverseSequence,
                    animated: false
                  }), i && t()
                },
                pickerIntention: A.Hz.STATUS,
                onNavigateAway: R
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
              return (0, r.jsx)(b.Z, (n = function(e) {
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
                ref: K,
                active: l,
                className: Z.emojiButton,
                tabIndex: 0,
                renderButtonContents: null == W ? null : () => (0, r.jsx)(d.Z, {
                  className: Z.emoji,
                  emojiId: W.id,
                  emojiName: W.name,
                  animated: !!W.animated
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
        }), (0, r.jsx)(u.iS, {
          autosize: true,
          "aria-describedby": ei,
          value: L,
          maxLength: C.s0,
          rows: 1,
          showRemainingCharacterCount: false,
          placeholder: Q,
          onChange: e => {
            H(e)
          },
          onKeyDown: e => {
            "Enter" === e.key && en()
          },
          className: Z.input,
          inputRef: J
        }), (0, r.jsx)(c.nn4, {
          id: ei,
          children: "".concat(N.intl.string(N.t.EVV6ub), ": ").concat(X)
        }), (L.length > 0 || null != W) && (0, r.jsx)("div", {
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
            "aria-label": N.intl.string(N.t.wfYTHR),
            className: Z.clearButton,
            onClick: () => {
              H(""), z(null)
            },
            children: (0, r.jsx)(c.k$p, {
              size: "md",
              color: "currentColor",
              className: Z.clearIcon
            })
          })
        })]
      })]
    })]
  })
}