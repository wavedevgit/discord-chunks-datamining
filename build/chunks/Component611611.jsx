/** Chunk was on 68784 **/
/** chunk id: 611611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk525769 = require("./525769.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk886025 = require("./886025.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk213609 = require("./213609.js"),
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

function w(e) {
  let {
    question: t,
    onChange: n,
    error: l,
    inputRef: a
  } = e;
  return (0, r.jsx)(u.Kx8, {
    label: v.intl.string(v.t.WBiKnJ),
    inputRef: a,
    placeholder: v.intl.string(v.t["/uQqJS"]),
    value: t,
    onChange: n,
    maxLength: y.Az,
    error: l,
    rows: 1,
    autosize: true,
    autoFocus: true,
    showCharacterCount: true
  })
}

function x(e) {
  let {
    selectedDuration: t,
    onSelect: n
  } = e, l = (0, g.Z)(), a = l[t];
  return (0, r.jsxs)("div", {
    className: P.duration,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      tag: "label",
      "aria-hidden": true,
      children: v.intl.string(v.t.bGHzxc)
    }), (0, r.jsx)(u.PhF, {
      "aria-label": v.intl.formatToPlainString(v.t.nXNHND, {
        duration: a
      }),
      className: P.durationSelect,
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
      renderOptionLabel: e => (0, r.jsx)(u.Text, {
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
    onClose: g,
    initialQuestion: C,
    initialAnswers: R,
    initialDuration: E
  } = e;
  (0, f.Z)({
    type: h.n.MODAL,
    name: a.z.POLL_EDITOR_VIEWED
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
      l === y.gY + 1 ? null == (t = D.current) || t.focus() : null == (n = S.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton()
    }, []),
    {
      answers: I,
      question: N,
      allowMultiSelect: T,
      setAllowMultiSelect: U,
      duration: L,
      setDuration: Z,
      handleQuestionChange: B,
      handleAnswerTextChange: Y,
      handleEmojiSelect: K,
      canAddMoreAnswers: z,
      handleRemoveAnswerImage: M,
      canRemoveMoreAnswers: H,
      handleAddAnswer: q,
      handleRemoveAnswer: W,
      createPollError: F,
      handleSubmitPoll: G,
      fieldErrors: V,
      submitting: X,
      shouldFocusOnInvalidField: J,
      setShouldFocusOnInvalidField: Q
    } = (0, b.Z)(t, g, A, {
      initialQuestion: C,
      initialAnswers: R,
      initialDuration: E
    }),
    {
      trackPollCreationCancelled: $
    } = (0, j.l)(I, T),
    ee = l.useRef(I.length),
    et = l.useCallback(() => {
      $(), g()
    }, [g, $]),
    en = l.useCallback(() => {
      if (!(0, p.D$)(N, I)) return void d.Z.show({
        title: v.intl.string(v.t.HMrgcn),
        body: v.intl.string(v.t["Wxa/j4"]),
        confirmColor: i.Tt.RED,
        confirmText: v.intl.string(v.t.TzJA4u),
        confirmVariant: "critical-primary",
        cancelText: v.intl.string(v.t["2BR5R0"]),
        onConfirm: () => {
          et()
        }
      });
      et()
    }, [et, I, N]);
  l.useEffect(() => {
    (0, u.oav)(y.$z, e => {
      var n, l;
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
    if (J) {
      var e, t;
      if ((null == V ? true : V.question) != null) null == (e = _.current) || e.focus();
      else {
        let e = I.findIndex(e => V["answer-".concat(e.localCreationAnswerId)]);
        false !== e && (null == (t = S.current[e]) || t.focusInput())
      }
      Q(false)
    }
  }, [V, I, J, Q, S]);
  let er = l.useCallback(() => {
      n === u.Dvm.ENTERED && G()
    }, [G, n]),
    el = (0, m.Z)({
      disabled: X,
      onSubmit: er
    }),
    ea = l.useMemo(() => [{
      variant: "primary",
      onClick: er,
      submitting: X,
      text: v.intl.string(v.t.JOj8Zm)
    }], [er, X]);
  return (0, r.jsx)(c.Modal, {
    transitionState: n,
    onClose: g,
    title: v.intl.string(v.t["GD/8X1"]),
    actions: ea,
    actionBarInput: (0, r.jsx)(s.$q, {
      className: P.checkbox,
      size: 24,
      value: T,
      onChange: (e, t) => U(t),
      children: (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        children: v.intl.string(v.t["Ux+iQU"])
      })
    }),
    children: (0, r.jsxs)("div", {
      className: P.content,
      onKeyDown: el,
      children: [null != F && (0, r.jsx)(u.kzN, {
        className: P.apiErrorBlock,
        children: F.getAnyErrorMessage()
      }), (0, r.jsx)(w, {
        question: N,
        onChange: B,
        error: null == V ? true : V.question,
        inputRef: _
      }), (0, r.jsx)(u.LZC, {
        size: 26
      }), (0, r.jsxs)(o.N, {
        role: "group",
        label: v.intl.string(v.t.oMBfeX),
        children: [I.map((e, n) => (0, r.jsx)(O.Z, {
          answer: e,
          channelId: t.id,
          index: n,
          isLastAnswer: n === I.length - 1,
          onEmojiSelect: K,
          onEmojiRemove: M,
          onAnswerTextChange: Y,
          onRemoveAnswer: W,
          addAnswer: q,
          submitPoll: er,
          answerRowRefs: S,
          error: null == V ? true : V["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: H,
          ref: e => {
            S.current[n] = e
          }
        }, e.localCreationAnswerId)), z && (0, r.jsx)("div", {
          className: P.addAnswerButton,
          children: (0, r.jsx)(u.zxk, {
            icon: u.qJs,
            variant: "secondary",
            onClick: q,
            "aria-label": v.intl.string(v.t.B2UvmZ),
            buttonRef: D,
            text: v.intl.string(v.t.B2UvmZ)
          })
        })]
      }), (0, r.jsx)(u.LZC, {
        size: 18
      }), (0, r.jsx)(x, {
        selectedDuration: L,
        onSelect: Z
      })]
    })
  })
}