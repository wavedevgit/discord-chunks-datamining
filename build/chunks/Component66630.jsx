/** Chunk was on 76215 **/
/** chunk id: 66630, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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
  Chunk717695 = require("./717695.js");
let _ = "CLEAR_AFTER";

function M(e) {
  var t, n;
  let {
    transitionState: l,
    onClose: M,
    sourceAnalyticsLocations: U = [],
    prompt: F = null
  } = e, k = (0, j.p)({
    location: "CustomStatusModalWithPreview"
  }), I = (0, v.P)({
    location: "CustomStatusModalWithPreview"
  }), {
    analyticsLocations: Y
  } = (0, g.ZP)(U, O.Z.CUSTOM_STATUS_MODAL), B = (0, u.e7)([S.default], () => {
    var e;
    return null != (e = S.default.getCurrentUser()) ? e : null
  }), H = (0, C.a)(), [L, z] = i.useState(null != (t = null == H ? true : H.state) ? t : ""), [V, W] = i.useState(null != (n = null == H ? true : H.emoji) ? n : null), [q, G] = i.useState((0, x.Z)()), J = i.useRef(null), K = i.useRef(null), Q = i.useRef(null), X = k && null != F ? F.label() : R.intl.string(R.t.xod367), [$, ee] = i.useState(X), {
    ref: et,
    width: en
  } = (0, f.ZP)(X);
  i.useEffect(() => {
    let e = Q.current;
    if (null == en || null == e) return;
    let t = en - 78;
    e.textContent = X;
    let n = e.getBoundingClientRect().width;
    if (n <= t) ee(X);
    else {
      let e = n / X.length,
        r = Math.floor((t - 3 * e) / e);
      ee("".concat(X.substring(0, r)).concat("..."))
    }
  }, [en, X]), i.useEffect(() => {
    T.default.track(A.rMx.OPEN_MODAL, {
      type: O.Z.CUSTOM_STATUS_MODAL,
      location_stack: Y
    })
  }, [Y]), (0, p.ZP)(() => {
    var e, t;
    null == (e = J.current) || e.focus(), null == (t = J.current) || t.setSelection(L.length, L.length)
  });
  let er = () => {
      q !== _ && ((0, P.Z)({
        text: L,
        emojiInfo: V,
        clearAfter: q,
        prompt: F,
        analyticsLocations: Y
      }), M())
    },
    ei = k ? R.intl.string(R.t.rp0ahn) : R.intl.string(R.t.UcdRn2),
    el = "custom-status-input";
  return (0, r.jsxs)(o.Modal, {
    title: R.intl.string(R.t.Zx4jzN),
    actionBarInput: (0, r.jsx)("div", {
      className: E.clearAfterSelectContainer,
      children: (0, r.jsx)(s.y6, {
        maxVisibleItems: Z.wS.length + 1,
        value: q,
        options: I ? [{
          value: _,
          key: _,
          label: R.intl.string(R.t.E45wvP),
          disabled: true
        }, ...Z.wS.map(e => ({
          value: e,
          key: e,
          label: (0, w.Z)(e, true)
        }))] : Z.wS.map(e => ({
          value: e,
          key: e,
          label: (0, w.Z)(e)
        })),
        onChange: e => G(e),
        optionClassName: E.clearAfterSelectOption,
        renderOptionLabel: e => {
          let {
            value: t,
            label: n,
            disabled: i
          } = e;
          return (0, r.jsx)("span", {
            className: a()(E.clearAfterSelectOptionLabel, i ? E.disabled : true),
            children: t === _ ? n : (0, y.Z)(t, I)
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
    transitionState: l,
    actions: [{
      text: R.intl.string(R.t["R3BPH+"]),
      variant: "primary",
      onClick: er
    }],
    children: [null != B && (0, r.jsx)("div", {
      className: E.profilePreview,
      children: (0, r.jsx)(D.Z, {
        user: B,
        previewText: L,
        previewEmoji: V,
        placeHolderText: X,
        transitionState: l
      })
    }), (0, r.jsxs)("div", {
      className: E.formGroup,
      children: [(0, r.jsx)(d.Text, {
        tag: "label",
        htmlFor: el,
        variant: "heading-md/semibold",
        className: E.customStatusInputTitle,
        children: ei
      }), (0, r.jsxs)("div", {
        className: E.inputContainer,
        ref: et,
        children: [(0, r.jsx)("span", {
          ref: Q,
          className: E.hiddenPlaceholder,
          "aria-hidden": "true"
        }), (0, r.jsx)("div", {
          className: E.emojiButtonContainer,
          children: (0, r.jsx)(d.yRy, {
            targetElementRef: K,
            renderPopout: e => {
              let {
                closePopout: t
              } = e;
              return (0, r.jsx)(h.Z, {
                closePopout: t,
                onSelectEmoji: e => {
                  var n;
                  let {
                    emoji: r,
                    willClose: i
                  } = e;
                  null != (n = r) && W(null != n.id ? {
                    id: n.id,
                    name: n.name,
                    animated: n.animated
                  } : {
                    id: null,
                    name: n.optionallyDiverseSequence,
                    animated: false
                  }), i && t()
                },
                pickerIntention: N.Hz.STATUS,
                onNavigateAway: M
              })
            },
            position: "left",
            animation: d.yRy.Animation.NONE,
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
                className: E.emojiButton,
                spriteSize: 24,
                tabIndex: 0,
                renderButtonContents: null == V ? null : () => (0, r.jsx)(m.Z, {
                  className: E.emoji,
                  emojiId: V.id,
                  emojiName: V.name,
                  animated: !!V.animated
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
        }), (0, r.jsx)(c.iS, {
          autosize: true,
          value: L,
          maxLength: Z.s0,
          rows: 1,
          showRemainingCharacterCount: false,
          placeholder: $,
          onChange: e => {
            z(e)
          },
          onKeyDown: e => {
            "Enter" === e.key && er()
          },
          className: E.input,
          inputRef: J,
          id: el
        }), (L.length > 0 || null != V) && (0, r.jsx)(d.P3F, {
          "aria-label": R.intl.string(R.t.wfYTHe),
          className: E.clearButton,
          onClick: () => {
            z(""), W(null)
          },
          children: (0, r.jsx)(d.k$p, {
            size: "md",
            color: "currentColor",
            className: E.clearIcon
          })
        })]
      }), (0, r.jsx)(d.nn4, {
        children: "".concat(R.intl.string(R.t.EVV6uZ), ": ").concat(X)
      })]
    })]
  })
}