/** Chunk was on 68784 **/
/** chunk id: 611611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
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
  Chunk520317 = require("./520317.js");
let C = (0, Chunk313201.hQ)();

function k(e) {
  let {
    question: t,
    onChange: n,
    error: l,
    inputRef: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.vwX, {
      tag: d.RB0.LABEL,
      htmlFor: C,
      children: w.intl.string(w.t.WBiKnJ)
    }), (0, r.jsx)(d.Kx8, {
      inputRef: a,
      id: C,
      placeholder: w.intl.string(w.t["/uQqJS"]),
      value: t,
      onChange: n,
      maxLength: v.Az,
      error: l,
      rows: 1,
      autosize: true,
      autoFocus: true,
      showCharacterCount: true
    })]
  })
}

function R(e) {
  let {
    selectedDuration: t,
    onSelect: n
  } = e, l = (0, O.Z)(), a = l[t];
  return (0, r.jsxs)("div", {
    className: x.duration,
    children: [(0, r.jsx)(d.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": true,
      children: w.intl.string(w.t.bGHzxc)
    }), (0, r.jsx)(d.PhF, {
      "aria-label": w.intl.formatToPlainString(w.t.nXNHND, {
        duration: a
      }),
      className: x.durationSelect,
      options: Object.entries(l).map(e => {
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

function E(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: a,
    initialQuestion: p,
    initialAnswers: O,
    initialDuration: C
  } = e;
  (0, m.Z)({
    type: P.n.MODAL,
    name: o.z.POLL_EDITOR_VIEWED
  });
  let _ = l.useRef(null),
    S = l.useRef([]),
    D = l.useRef(null),
    A = l.useCallback(e => {
      var t, n;
      let {
        indexToRemove: r,
        numberOfAnswers: l
      } = e;
      l === v.gY + 1 ? null == (t = D.current) || t.focus() : null == (n = S.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton()
    }, []),
    {
      answers: I,
      question: N,
      allowMultiSelect: L,
      setAllowMultiSelect: T,
      duration: U,
      setDuration: Z,
      handleQuestionChange: B,
      handleAnswerTextChange: Y,
      handleEmojiSelect: K,
      canAddMoreAnswers: z,
      handleRemoveAnswerImage: M,
      canRemoveMoreAnswers: H,
      handleAddAnswer: q,
      handleRemoveAnswer: F,
      createPollError: W,
      handleSubmitPoll: G,
      fieldErrors: X,
      submitting: V,
      shouldFocusOnInvalidField: Q,
      setShouldFocusOnInvalidField: J
    } = (0, j.Z)(t, a, A, {
      initialQuestion: p,
      initialAnswers: O,
      initialDuration: C
    }),
    {
      trackPollCreationCancelled: $
    } = (0, h.l)(I, L),
    ee = l.useRef(I.length),
    et = l.useCallback(() => {
      $(), a()
    }, [a, $]),
    en = l.useCallback(() => {
      if (!(0, g.D$)(N, I)) return void f.Z.show({
        title: w.intl.string(w.t.HMrgcn),
        body: w.intl.string(w.t["Wxa/j4"]),
        confirmColor: c.Tt.RED,
        confirmText: w.intl.string(w.t.TzJA4u),
        confirmVariant: "critical-primary",
        cancelText: w.intl.string(w.t["2BR5R0"]),
        onConfirm: () => {
          et()
        }
      });
      et()
    }, [et, I, N]);
  l.useEffect(() => {
    (0, d.oav)(v.$z, e => {
      var n, l;
      return (0, r.jsx)(E, (n = function(e) {
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
      }({}, e), l = l = {
        channel: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n))
    }, en)
  }, [en, t]), l.useEffect(() => {
    if (I.length > ee.current) {
      var e;
      null == (e = S.current[I.length - 1]) || e.focusInput()
    }
    ee.current = I.length
  }, [I.length]), l.useEffect(() => {
    if (Q) {
      var e, t;
      if ((null == X ? true : X.question) != null) null == (e = _.current) || e.focus();
      else {
        let e = I.findIndex(e => X["answer-".concat(e.localCreationAnswerId)]);
        false !== e && (null == (t = S.current[e]) || t.focusInput())
      }
      J(false)
    }
  }, [X, I, Q, J, S]);
  let er = l.useCallback(() => {
      n === d.Dvm.ENTERED && G()
    }, [G, n]),
    el = (0, b.Z)({
      disabled: V,
      onSubmit: er
    }),
    ea = l.useMemo(() => [{
      variant: "primary",
      onClick: er,
      submitting: V,
      text: w.intl.string(w.t.JOj8Zm)
    }], [er, V]);
  return (0, r.jsx)(s.Modal, {
    transitionState: n,
    onClose: a,
    title: w.intl.string(w.t["GD/8X1"]),
    actions: ea,
    actionBarInput: (0, r.jsx)(u.$q, {
      className: x.checkbox,
      size: 24,
      value: L,
      onChange: (e, t) => T(t),
      children: (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        children: w.intl.string(w.t["Ux+iQU"])
      })
    }),
    children: (0, r.jsxs)("div", {
      className: x.content,
      onKeyDown: el,
      children: [null != W && (0, r.jsx)(d.kzN, {
        className: x.apiErrorBlock,
        children: W.getAnyErrorMessage()
      }), (0, r.jsx)(k, {
        question: N,
        onChange: B,
        error: null == X ? true : X.question,
        inputRef: _
      }), (0, r.jsx)(d.LZC, {
        size: 26
      }), (0, r.jsxs)("fieldset", {
        className: i()(x.answerInputsContainer, x.defaultContainer),
        children: [(0, r.jsx)(d.vwX, {
          tag: d.RB0.LEGEND,
          children: w.intl.string(w.t.oMBfeX)
        }), I.map((e, n) => (0, r.jsx)(y.Z, {
          answer: e,
          channelId: t.id,
          index: n,
          isLastAnswer: n === I.length - 1,
          onEmojiSelect: K,
          onEmojiRemove: M,
          onAnswerTextChange: Y,
          onRemoveAnswer: F,
          addAnswer: q,
          submitPoll: er,
          answerRowRefs: S,
          error: null == X ? true : X["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: H,
          ref: e => {
            S.current[n] = e
          }
        }, e.localCreationAnswerId)), z && (0, r.jsx)("div", {
          className: x.addAnswerButton,
          children: (0, r.jsx)(d.zxk, {
            icon: d.qJs,
            variant: "secondary",
            onClick: q,
            "aria-label": w.intl.string(w.t.B2UvmZ),
            buttonRef: D,
            text: w.intl.string(w.t.B2UvmZ)
          })
        })]
      }), (0, r.jsx)(d.LZC, {
        size: 18
      }), (0, r.jsx)(R, {
        selectedDuration: U,
        onSelect: Z
      })]
    })
  })
}