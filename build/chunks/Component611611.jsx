/** Chunk was on 68784 **/
/** chunk id: 611611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk525769 = require("./525769.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk313201 = require("./313201.js"),
  Chunk542383 = require("./542383.js"),
  Chunk79390 = require("./79390.js"),
  Chunk728076 = require("./728076.js"),
  Chunk2466 = require("./2466.js"),
  Chunk485168 = require("./485168.js"),
  Chunk309081 = require("./309081.jsx"),
  Chunk489887 = require("./489887.js"),
  Chunk20281 = require("./20281.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk520317 = require("./520317.js");
let P = (0, Chunk313201.hQ)();

function C(e) {
  let {
    question: t,
    onChange: n,
    error: l,
    inputRef: i
  } = e, [o, s] = a.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.vwX, {
      tag: u.RB0.LABEL,
      htmlFor: P,
      children: O.intl.string(O.t.WBiKnJ)
    }), (0, r.jsx)(u.Kx8, {
      inputRef: i,
      id: P,
      placeholder: O.intl.string(O.t["/uQqJS"]),
      value: t,
      onChange: n,
      maxLength: w.Az,
      error: l,
      onFocus: () => s(true),
      onBlur: () => s(false),
      showCharacterCount: o,
      showRemainingCharacterCount: o,
      rows: 1,
      autosize: true,
      autoFocus: true
    })]
  })
}

function _(e) {
  let {
    selectedDuration: t,
    onSelect: n
  } = e, a = (0, h.Z)(), l = a[t];
  return (0, r.jsxs)("div", {
    className: y.duration,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": true,
      children: O.intl.string(O.t.bGHzxc)
    }), (0, r.jsx)(u.PhF, {
      "aria-label": O.intl.formatToPlainString(O.t.nXNHND, {
        duration: l
      }),
      className: y.durationSelect,
      options: Object.entries(a).map(e => {
        let [t, n] = e;
        return {
          label: n,
          value: parseInt(t)
        }
      }),
      isSelected: e => e === t,
      select: n,
      serialize: e => "".concat(e),
      renderOptionLabel: e => (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: e.label
      }),
      popoutPosition: "top"
    })]
  })
}

function R(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: l,
    initialQuestion: m,
    initialAnswers: h,
    initialDuration: P
  } = e;
  (0, f.Z)({
    type: x.n.MODAL,
    name: o.z.POLL_EDITOR_VIEWED
  });
  let k = a.useRef(null),
    A = a.useRef([]),
    E = a.useRef([]),
    D = a.useRef(null),
    S = a.useRef([]),
    I = a.useCallback(e => {
      var t, n, r, a;
      let {
        indexToRemove: l,
        numberOfAnswers: i
      } = e;
      i === w.gY + 1 ? null == (n = D.current) || null == (t = n.ref) || t.focus() : null == (a = S.current[l === i - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus()
    }, []),
    {
      answers: N,
      question: T,
      allowMultiSelect: L,
      setAllowMultiSelect: B,
      duration: U,
      setDuration: Z,
      handleQuestionChange: Y,
      handleAnswerTextChange: K,
      handleEmojiSelect: z,
      canAddMoreAnswers: M,
      handleRemoveAnswerImage: W,
      canRemoveMoreAnswers: F,
      handleAddAnswer: H,
      handleRemoveAnswer: q,
      createPollError: G,
      handleSubmitPoll: X,
      fieldErrors: V,
      submitting: J,
      shouldFocusOnInvalidField: Q,
      setShouldFocusOnInvalidField: $
    } = (0, g.Z)(t, l, I, {
      initialQuestion: m,
      initialAnswers: h,
      initialDuration: P
    }),
    {
      trackPollCreationCancelled: ee
    } = (0, j.l)(N, L),
    et = a.useRef(N.length),
    en = a.useCallback(() => {
      ee(), l()
    }, [l, ee]),
    er = a.useCallback(() => {
      if (!(0, b.D$)(T, N)) return void d.Z.show({
        title: O.intl.string(O.t.HMrgcn),
        body: O.intl.string(O.t["Wxa/j4"]),
        confirmColor: s.Tt.RED,
        confirmText: O.intl.string(O.t.TzJA4u),
        confirmVariant: "critical-primary",
        cancelText: O.intl.string(O.t["2BR5R0"]),
        onConfirm: () => {
          en()
        }
      });
      en()
    }, [en, N, T]);
  a.useEffect(() => {
    (0, u.oav)(w.$z, e => {
      var n, a;
      return (0, r.jsx)(R, (n = function(e) {
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
      }({}, e), a = a = {
        channel: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
      }), n))
    }, er)
  }, [er, t]), a.useEffect(() => {
    if (N.length > et.current) {
      var e;
      null == (e = E.current[N.length - 1]) || e.focus()
    }
    et.current = N.length
  }, [N.length]), a.useEffect(() => {
    if (Q) {
      var e, t;
      if ((null == V ? true : V.question) != null) null == (e = k.current) || e.focus();
      else {
        let e = N.findIndex(e => V["answer-".concat(e.localCreationAnswerId)]);
        false !== e && (null == (t = E.current[e]) || t.focus())
      }
      $(false)
    }
  }, [V, N, Q, $, E, A]);
  let ea = a.useCallback(() => {
      n === u.Dvm.ENTERED && X()
    }, [X, n]),
    el = (0, p.Z)({
      disabled: J,
      onSubmit: ea
    }),
    ei = a.useMemo(() => [{
      variant: "primary",
      onClick: ea,
      submitting: J,
      text: O.intl.string(O.t.JOj8Zm)
    }], [ea, J]);
  return (0, r.jsx)(c.Modal, {
    transitionState: n,
    onClose: l,
    title: O.intl.string(O.t["GD/8X1"]),
    actions: ei,
    actionBarInput: (0, r.jsx)(u.XZJ, {
      className: y.checkbox,
      size: 24,
      value: L,
      onChange: (e, t) => B(t),
      children: (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        children: O.intl.string(O.t["Ux+iQU"])
      })
    }),
    children: (0, r.jsxs)("div", {
      className: y.content,
      onKeyDown: el,
      children: [null != G && (0, r.jsx)(u.kzN, {
        className: y.apiErrorBlock,
        children: G.getAnyErrorMessage()
      }), (0, r.jsx)(C, {
        question: T,
        onChange: Y,
        error: null == V ? true : V.question,
        inputRef: k
      }), (0, r.jsx)(u.LZC, {
        size: 26
      }), (0, r.jsxs)("fieldset", {
        className: i()(y.answerInputsContainer, y.defaultContainer),
        children: [(0, r.jsx)(u.vwX, {
          tag: u.RB0.LEGEND,
          children: O.intl.string(O.t.oMBfeX)
        }), N.map((e, n) => (0, r.jsx)(v.Z, {
          answer: e,
          channelId: t.id,
          index: n,
          isLastAnswer: n === N.length - 1,
          onEmojiSelect: z,
          onEmojiRemove: W,
          onAnswerTextChange: K,
          onRemoveAnswer: q,
          addAnswer: H,
          submitPoll: ea,
          answerTextInputRefs: E,
          error: null == V ? true : V["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: F,
          ref: e => {
            A.current[n] = e
          },
          inputRef: e => {
            E.current[n] = e
          },
          deleteButtonRef: e => {
            S.current[n] = e
          }
        }, e.localCreationAnswerId)), M && (0, r.jsxs)(u.P3F, {
          className: i()(y.addAnswerButtonDefault, {
            [y.canRemoveMoreAnswers]: F
          }),
          onClick: M ? H : true,
          "aria-label": O.intl.string(O.t.B2UvmZ),
          ref: D,
          children: [(0, r.jsx)(u.qJs, {
            size: "md",
            color: "currentColor",
            className: y.addAnswerIconDefault
          }), (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: y.addAnswerButtonLabel,
            children: O.intl.string(O.t.B2UvmZ)
          })]
        })]
      }), (0, r.jsx)(u.LZC, {
        size: 18
      }), (0, r.jsx)(_, {
        selectedDuration: U,
        onSelect: Z
      })]
    })
  })
}