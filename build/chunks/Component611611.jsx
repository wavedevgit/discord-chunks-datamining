/** Chunk was on 68784 **/
/** chunk id: 611611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk525769 = require("./525769.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
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
  Chunk931975 = require("./931975.js");
let C = (0, Chunk313201.hQ)();

function _(e) {
  let {
    question: t,
    onChange: n,
    error: l,
    inputRef: i
  } = e, [o, s] = a.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.vwX, {
      tag: d.RB0.LABEL,
      htmlFor: C,
      children: y.intl.string(y.t.WBiKnJ)
    }), (0, r.jsx)(d.Kx8, {
      inputRef: i,
      id: C,
      placeholder: y.intl.string(y.t["/uQqJS"]),
      value: t,
      onChange: n,
      maxLength: x.Az,
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

function R(e) {
  let {
    selectedDuration: t,
    onSelect: n
  } = e, a = (0, j.Z)(), l = a[t];
  return (0, r.jsxs)("div", {
    className: P.duration,
    children: [(0, r.jsx)(d.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": true,
      children: y.intl.string(y.t.bGHzxc)
    }), (0, r.jsx)(d.PhF, {
      "aria-label": y.intl.formatToPlainString(y.t.nXNHND, {
        duration: l
      }),
      className: P.durationSelect,
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
      renderOptionLabel: e => (0, r.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: e.label
      }),
      popoutPosition: "top"
    })]
  })
}

function k(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: l,
    initialQuestion: p,
    initialAnswers: j,
    initialDuration: C
  } = e;
  (0, m.Z)({
    type: O.n.MODAL,
    name: o.z.POLL_EDITOR_VIEWED
  });
  let A = a.useRef(null),
    E = a.useRef([]),
    D = a.useRef([]),
    S = a.useRef(null),
    I = a.useRef([]),
    N = a.useCallback(e => {
      var t, n, r, a;
      let {
        indexToRemove: l,
        numberOfAnswers: i
      } = e;
      i === x.gY + 1 ? null == (n = S.current) || null == (t = n.ref) || t.focus() : null == (a = I.current[l === i - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus()
    }, []),
    {
      answers: T,
      question: L,
      allowMultiSelect: B,
      setAllowMultiSelect: U,
      duration: Z,
      setDuration: Y,
      handleQuestionChange: K,
      handleAnswerTextChange: z,
      handleEmojiSelect: M,
      canAddMoreAnswers: W,
      handleRemoveAnswerImage: F,
      canRemoveMoreAnswers: q,
      handleAddAnswer: H,
      handleRemoveAnswer: G,
      createPollError: X,
      handleSubmitPoll: V,
      fieldErrors: Q,
      submitting: J,
      shouldFocusOnInvalidField: $,
      setShouldFocusOnInvalidField: ee
    } = (0, h.Z)(t, l, N, {
      initialQuestion: p,
      initialAnswers: j,
      initialDuration: C
    }),
    {
      trackPollCreationCancelled: et
    } = (0, v.l)(T, B),
    en = a.useRef(T.length),
    er = a.useCallback(() => {
      et(), l()
    }, [l, et]),
    ea = a.useCallback(() => {
      if (!(0, g.D$)(L, T)) return void f.Z.show({
        title: y.intl.string(y.t.HMrgcn),
        body: y.intl.string(y.t["Wxa/j4"]),
        confirmColor: s.Tt.RED,
        confirmText: y.intl.string(y.t.TzJA4u),
        confirmVariant: "critical-primary",
        cancelText: y.intl.string(y.t["2BR5R0"]),
        onConfirm: () => {
          er()
        }
      });
      er()
    }, [er, T, L]);
  a.useEffect(() => {
    (0, d.oav)(x.$z, e => {
      var n, a;
      return (0, r.jsx)(k, (n = function(e) {
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
    }, ea)
  }, [ea, t]), a.useEffect(() => {
    if (T.length > en.current) {
      var e;
      null == (e = D.current[T.length - 1]) || e.focus()
    }
    en.current = T.length
  }, [T.length]), a.useEffect(() => {
    if ($) {
      var e, t;
      if ((null == Q ? true : Q.question) != null) null == (e = A.current) || e.focus();
      else {
        let e = T.findIndex(e => Q["answer-".concat(e.localCreationAnswerId)]);
        false !== e && (null == (t = D.current[e]) || t.focus())
      }
      ee(false)
    }
  }, [Q, T, $, ee, D, E]);
  let el = a.useCallback(() => {
      n === d.Dvm.ENTERED && V()
    }, [V, n]),
    ei = (0, b.Z)({
      disabled: J,
      onSubmit: el
    }),
    eo = a.useMemo(() => [{
      variant: "primary",
      onClick: el,
      submitting: J,
      text: y.intl.string(y.t.JOj8Zm)
    }], [el, J]);
  return (0, r.jsx)(c.Modal, {
    transitionState: n,
    onClose: l,
    title: y.intl.string(y.t["GD/8X1"]),
    actions: eo,
    actionBarInput: (0, r.jsx)(u.$q, {
      className: P.checkbox,
      size: 24,
      value: B,
      onChange: (e, t) => U(t),
      children: (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        children: y.intl.string(y.t["Ux+iQU"])
      })
    }),
    children: (0, r.jsxs)("div", {
      className: P.content,
      onKeyDown: ei,
      children: [null != X && (0, r.jsx)(d.kzN, {
        className: P.apiErrorBlock,
        children: X.getAnyErrorMessage()
      }), (0, r.jsx)(_, {
        question: L,
        onChange: K,
        error: null == Q ? true : Q.question,
        inputRef: A
      }), (0, r.jsx)(d.LZC, {
        size: 26
      }), (0, r.jsxs)("fieldset", {
        className: i()(P.answerInputsContainer, P.defaultContainer),
        children: [(0, r.jsx)(d.vwX, {
          tag: d.RB0.LEGEND,
          children: y.intl.string(y.t.oMBfeX)
        }), T.map((e, n) => (0, r.jsx)(w.Z, {
          answer: e,
          channelId: t.id,
          index: n,
          isLastAnswer: n === T.length - 1,
          onEmojiSelect: M,
          onEmojiRemove: F,
          onAnswerTextChange: z,
          onRemoveAnswer: G,
          addAnswer: H,
          submitPoll: el,
          answerTextInputRefs: D,
          error: null == Q ? true : Q["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: q,
          ref: e => {
            E.current[n] = e
          },
          inputRef: e => {
            D.current[n] = e
          },
          deleteButtonRef: e => {
            I.current[n] = e
          }
        }, e.localCreationAnswerId)), W && (0, r.jsxs)(d.P3F, {
          className: i()(P.addAnswerButtonDefault, {
            [P.canRemoveMoreAnswers]: q
          }),
          onClick: W ? H : true,
          "aria-label": y.intl.string(y.t.B2UvmZ),
          ref: S,
          children: [(0, r.jsx)(d.qJs, {
            size: "md",
            color: "currentColor",
            className: P.addAnswerIconDefault
          }), (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            className: P.addAnswerButtonLabel,
            children: y.intl.string(y.t.B2UvmZ)
          })]
        })]
      }), (0, r.jsx)(d.LZC, {
        size: 18
      }), (0, r.jsx)(R, {
        selectedDuration: Z,
        onSelect: Y
      })]
    })
  })
}