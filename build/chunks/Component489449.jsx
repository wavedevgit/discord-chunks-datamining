/** Chunk was on 52786 **/
/** chunk id: 489449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk239947 = require("./239947.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk973431 = require("./973431.js"),
  Chunk969632 = require("./969632.js"),
  Chunk998489 = require("./998489.js"),
  Chunk983081 = require("./983081.js"),
  Chunk57359 = require("./57359.js"),
  Chunk820453 = require("./820453.jsx"),
  Chunk412136 = require("./412136.js"),
  Chunk412728 = require("./412728.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk826701 = require("./826701.js");

function h(e) {
  let {
    question: t,
    onChange: n,
    error: l,
    inputRef: a
  } = e;
  return (0, r.jsx)(o.fs1, {
    label: j.intl.string(j.t.WBiKnI),
    inputRef: a,
    placeholder: j.intl.string(j.t["/uQqJW"]),
    value: t,
    onChange: n,
    maxLength: g.jD,
    error: l,
    rows: 1,
    autosize: true,
    autoFocus: true,
    showCharacterCount: true
  })
}

function v(e) {
  let {
    selectedDuration: t,
    onSelect: n
  } = e, l = (0, b.A)(), a = l[t];
  return (0, r.jsx)("div", {
    className: y.p0,
    children: (0, r.jsx)(o.l6P, {
      label: j.intl.string(j.t.bGHzxb),
      "aria-label": j.intl.formatToPlainString(j.t.nXNHNJ, {
        duration: a
      }),
      options: Object.entries(l).map(e => {
        let [t, n] = e;
        return {
          id: t.toString(),
          label: n,
          value: parseInt(t)
        }
      }),
      value: t,
      onSelectionChange: n,
      selectionMode: "single",
      fullWidth: true
    })
  })
}

function w(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: b,
    initialQuestion: P,
    initialAnswers: A,
    initialDuration: C
  } = e;
  (0, s.A)({
    type: O.z.MODAL,
    name: a.I.POLL_EDITOR_VIEWED
  });
  let R = l.useRef(null),
    k = l.useRef([]),
    E = l.useRef(null),
    x = l.useCallback(e => {
      var t, n;
      let {
        indexToRemove: r,
        numberOfAnswers: l
      } = e;
      l === g.FW + 1 ? null == (t = E.current) || t.focus() : null == (n = k.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton()
    }, []),
    {
      answers: S,
      question: D,
      allowMultiSelect: N,
      setAllowMultiSelect: I,
      duration: _,
      setDuration: T,
      handleQuestionChange: U,
      handleAnswerTextChange: L,
      handleEmojiSelect: K,
      canAddMoreAnswers: Y,
      handleRemoveAnswerImage: q,
      canRemoveMoreAnswers: z,
      handleAddAnswer: F,
      handleRemoveAnswer: B,
      createPollError: G,
      handleSubmitPoll: W,
      fieldErrors: M,
      submitting: V,
      shouldFocusOnInvalidField: H,
      setShouldFocusOnInvalidField: Z
    } = (0, d.A)(t, b, x, {
      initialQuestion: P,
      initialAnswers: A,
      initialDuration: C
    }),
    {
      trackPollCreationCancelled: X
    } = (0, m.I)(S, N),
    Q = l.useRef(S.length),
    $ = l.useCallback(() => {
      X(), b()
    }, [b, X]),
    J = l.useCallback(() => {
      (0, f.Wn)(D, S) ? $(): c.A.show({
        title: j.intl.string(j.t.HMrgcp),
        body: j.intl.string(j.t["Wxa/j8"]),
        confirmText: j.intl.string(j.t.TzJA4g),
        confirmVariant: "critical-primary",
        cancelText: j.intl.string(j.t["2BR5R2"]),
        onConfirm: () => {
          $()
        }
      })
    }, [$, S, D]);
  l.useEffect(() => {
    (0, o.zbz)(g.sm, e => {
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
    }, J)
  }, [J, t]), l.useEffect(() => {
    if (S.length > Q.current) {
      var e;
      null == (e = k.current[S.length - 1]) || e.focusInput()
    }
    Q.current = S.length
  }, [S.length]), l.useEffect(() => {
    if (H) {
      var e, t;
      if ((null == M ? true : M.question) != null) null == (e = R.current) || e.focus();
      else {
        let e = S.findIndex(e => M["answer-".concat(e.localCreationAnswerId)]);
        false !== e && (null == (t = k.current[e]) || t.focusInput())
      }
      Z(false)
    }
  }, [M, S, H, Z, k]);
  let ee = l.useCallback(() => {
      n === o.ip4.ENTERED && W()
    }, [W, n]),
    et = (0, u.A)({
      disabled: V,
      onSubmit: ee
    }),
    en = l.useMemo(() => [{
      variant: "primary",
      onClick: ee,
      submitting: V,
      text: j.intl.string(j.t.JOj8Zk)
    }], [ee, V]);
  return (0, r.jsx)(i.Modal, {
    transitionState: n,
    onClose: b,
    title: j.intl.string(j.t["GD/8X8"]),
    actions: en,
    actionBarInput: (0, r.jsx)(o.Checkbox, {
      checked: N,
      onChange: e => I(e),
      label: j.intl.string(j.t["Ux+iQU"])
    }),
    children: (0, r.jsxs)("div", {
      className: y.Qs,
      onKeyDown: et,
      children: [null != G && (0, r.jsx)(o.wx6, {
        type: "critical",
        children: G.getAnyErrorMessage()
      }), (0, r.jsx)(h, {
        question: D,
        onChange: U,
        error: null == M ? true : M.question,
        inputRef: R
      }), (0, r.jsx)(o.hKd, {
        size: 26
      }), (0, r.jsxs)(o.D0$, {
        role: "group",
        label: j.intl.string(j.t.oMBfeS),
        children: [S.map((e, n) => (0, r.jsx)(p.A, {
          answer: e,
          channelId: t.id,
          index: n,
          isLastAnswer: n === S.length - 1,
          onEmojiSelect: K,
          onEmojiRemove: q,
          onAnswerTextChange: L,
          onRemoveAnswer: B,
          addAnswer: F,
          submitPoll: ee,
          answerRowRefs: k,
          error: null == M ? true : M["answer-".concat(e.localCreationAnswerId)],
          canRemoveAnswer: z,
          ref: e => {
            k.current[n] = e
          }
        }, e.localCreationAnswerId)), Y && (0, r.jsx)("div", {
          className: y.Ox,
          children: (0, r.jsx)(o.Button, {
            icon: o.j96,
            variant: "secondary",
            onClick: F,
            "aria-label": j.intl.string(j.t.B2Uvme),
            buttonRef: E,
            text: j.intl.string(j.t.B2Uvme)
          })
        })]
      }), (0, r.jsx)(o.hKd, {
        size: 18
      }), (0, r.jsx)(v, {
        selectedDuration: _,
        onSelect: T
      })]
    })
  })
}