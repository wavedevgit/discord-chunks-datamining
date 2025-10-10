/** Chunk was on 68784 **/
/** chunk id: 611611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk525769 = require("./525769.js"),
  Chunk793030 = require("./793030.js"),
  Chunk693789 = require("./693789.jsx"),
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
  Chunk520317 = require("./520317.js");

function v(e) {
  let {
    question: t,
    onChange: n,
    error: l,
    inputRef: a
  } = e;
  return (0, r.jsx)(c.Kx8, {
    label: y.intl.string(y.t.WBiKnJ),
    inputRef: a,
    placeholder: y.intl.string(y.t["/uQqJS"]),
    value: t,
    onChange: n,
    maxLength: j.Az,
    error: l,
    rows: 1,
    autosize: true,
    autoFocus: true,
    showCharacterCount: true
  })
}

function P(e) {
  let {
    selectedDuration: t,
    onSelect: n
  } = e, l = (0, p.Z)(), a = l[t];
  return (0, r.jsx)("div", {
    className: h.duration,
    children: (0, r.jsx)(c.PhF, {
      label: y.intl.string(y.t.bGHzxc),
      "aria-label": y.intl.formatToPlainString(y.t.nXNHND, {
        duration: a
      }),
      className: h.durationSelect,
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
      popoutPosition: "top"
    })
  })
}

function w(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: p,
    initialQuestion: C,
    initialAnswers: R,
    initialDuration: k
  } = e;
  (0, u.Z)({
    type: O.n.MODAL,
    name: a.z.POLL_EDITOR_VIEWED
  });
  let x = l.useRef(null),
    E = l.useRef([]),
    S = l.useRef(null),
    _ = l.useCallback(e => {
      var t, n;
      let {
        indexToRemove: r,
        numberOfAnswers: l
      } = e;
      l === j.gY + 1 ? null == (t = S.current) || t.focus() : null == (n = E.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton()
    }, []),
    {
      answers: D,
      question: A,
      allowMultiSelect: I,
      setAllowMultiSelect: N,
      duration: U,
      setDuration: L,
      handleQuestionChange: T,
      handleAnswerTextChange: Z,
      handleEmojiSelect: Y,
      canAddMoreAnswers: K,
      handleRemoveAnswerImage: B,
      canRemoveMoreAnswers: M,
      handleAddAnswer: z,
      handleRemoveAnswer: H,
      createPollError: q,
      handleSubmitPoll: W,
      fieldErrors: F,
      submitting: G,
      shouldFocusOnInvalidField: V,
      setShouldFocusOnInvalidField: X
    } = (0, m.Z)(t, p, _, {
      initialQuestion: C,
      initialAnswers: R,
      initialDuration: k
    }),
    {
      trackPollCreationCancelled: J
    } = (0, b.l)(D, I),
    Q = l.useRef(D.length),
    $ = l.useCallback(() => {
      J(), p()
    }, [p, J]),
    ee = l.useCallback(() => {
      if (!(0, d.D$)(A, D)) return void s.Z.show({
        title: y.intl.string(y.t.HMrgcn),
        body: y.intl.string(y.t["Wxa/j4"]),
        confirmColor: o.Tt.RED,
        confirmText: y.intl.string(y.t.TzJA4u),
        confirmVariant: "critical-primary",
        cancelText: y.intl.string(y.t["2BR5R0"]),
        onConfirm: () => {
          $()
        }
      });
      $()
    }, [$, D, A]);
  l.useEffect(() => {
    (0, c.oav)(j.$z, e => {
      var n, l;
      return (0, r.jsx)(w, (n = function(e) {
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
    }, ee)
  }, [ee, t]), l.useEffect(() => {
    if (D.length > Q.current) {
      var e;
      null == (e = E.current[D.length - 1]) || e.focusInput()
    }
    Q.current = D.length
  }, [D.length]), l.useEffect(() => {
    if (V) {
      var e, t;
      if ((null == F ? true : F.question) != null) null == (e = x.current) || e.focus();
      else {
        let e = D.findIndex(e => F["answer-".concat(e.localCreationAnswerId)]);
        false !== e && (null == (t = E.current[e]) || t.focusInput())
      }
      X(false)
    }
  }, [F, D, V, X, E]);
  let et = l.useCallback(() => {
      n === c.Dvm.ENTERED && W()
    }, [W, n]),
    en = (0, f.Z)({
      disabled: G,
      onSubmit: et
    }),
    er = l.useMemo(() => [{
      variant: "primary",
      onClick: et,
      submitting: G,
      text: y.intl.string(y.t.JOj8Zm)
    }], [et, G]);
  return (0, r.jsx)(i.Modal, {
    transitionState: n,
    onClose: p,
    title: y.intl.string(y.t["GD/8X1"]),
    actions: er,
    actionBarInput: (0, r.jsx)(c.Checkbox, {
      checked: I,
      onChange: e => N(e),
      label: y.intl.string(y.t["Ux+iQU"])
    }),
    children: (0, r.jsxs)("div", {
      className: h.content,
      onKeyDown: en,
      children: [null != q && (0, r.jsx)(c.M14, {
        type: "critical",
        children: q.getAnyErrorMessage()
      }), (0, r.jsx)(v, {
        question: A,
        onChange: T,
        error: null == F ? true : F.question,
        inputRef: x
      }), (0, r.jsx)(c.LZC, {
        size: 26
      }), (0, r.jsxs)(c.gNt, {
        role: "group",
        label: y.intl.string(y.t.oMBfeX),
        children: [D.map((e, n) => (0, r.jsx)(g.Z, {
          answer: e,
          channelId: t.id,
          index: n,
          isLastAnswer: n === D.length - 1,
          onEmojiSelect: Y,
          onEmojiRemove: B,
          onAnswerTextChange: Z,
          onRemoveAnswer: H,
          addAnswer: z,
          submitPoll: et,
          answerRowRefs: E,
          error: null == F ? true : F["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: M,
          ref: e => {
            E.current[n] = e
          }
        }, e.localCreationAnswerId)), K && (0, r.jsx)("div", {
          className: h.addAnswerButton,
          children: (0, r.jsx)(c.Button, {
            icon: c.qJs,
            variant: "secondary",
            onClick: z,
            "aria-label": y.intl.string(y.t.B2UvmZ),
            buttonRef: S,
            text: y.intl.string(y.t.B2UvmZ)
          })
        })]
      }), (0, r.jsx)(c.LZC, {
        size: 18
      }), (0, r.jsx)(P, {
        selectedDuration: U,
        onSelect: L
      })]
    })
  })
}