/** Chunk was on 68784 **/
/** chunk id: 728076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk263568 = require("./263568.js"),
  Chunk935369 = require("./935369.js"),
  Chunk398805 = require("./398805.js"),
  Chunk524100 = require("./524100.js"),
  Chunk316758 = require("./316758.js"),
  Chunk203143 = require("./203143.js"),
  Chunk79390 = require("./79390.js"),
  Chunk489887 = require("./489887.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
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
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t, n, p) {
  var j, O;
  let y = e.id,
    [h, v] = r.useState(() => {
      var e, t;
      return null != (t = null == p || null == (e = p.initialAnswers) ? true : e.map(e => m({}, (0, s.Uu)(), e))) ? t : [(0, s.Uu)(), (0, s.Uu)()]
    }),
    [P, w] = r.useState(null != (j = null == p ? true : p.initialQuestion) ? j : ""),
    [C, k] = r.useState(false),
    [x, R] = r.useState(null != (O = null == p ? true : p.initialDuration) ? O : d.lc.ONE_DAY),
    [E, S] = r.useState({}),
    [D, A] = r.useState(false),
    I = h.filter(e => (0, s.cS)(e)),
    _ = h.filter(e => (0, s.uY)(e)),
    N = P.length > 0 && I.length >= d.gY && 0 === _.length,
    [U, {
      error: L,
      loading: T
    }] = (0, a.Z)(u.Z.createPoll),
    Z = h.length < d.fw,
    B = h.length > d.gY,
    K = r.useCallback(e => {
      S(e => {
        let t = m({}, e);
        return delete t.question, t
      }), w(e)
    }, []),
    Y = r.useCallback(e => {
      let {
        text: t,
        index: n,
        localCreationAnswerId: r
      } = e;
      S(e => {
        let t = m({}, e);
        return delete t["answer-".concat(r)], t
      }), v(e => {
        let r = [...e];
        return r[n] = b(m({}, r[n]), {
          text: t
        }), r
      })
    }, []),
    M = r.useCallback((e, t) => {
      v(n => {
        let r = [...n];
        return r[t] = b(m({}, r[t]), {
          image: e
        }), r
      })
    }, []),
    H = r.useCallback((e, t, n) => {
      var r;
      let l = h[t],
        a = null == (r = l.image) ? true : r.mediaAttachmentState;
      null != a && a.mediaURL !== n && c.P(e, l.localCreationAnswerId, (0, i.Yk)(l.localCreationAnswerId, a.mediaURL))
    }, [h]),
    W = r.useCallback(async (e, t, n) => {
      let r = h[t].localCreationAnswerId;
      if (H(e, t), M(g(n, o._.PREPARING), t), null == await c.IV(e, r, n)) return void M(g(n, o._.ERROR), t);
      M(g(n, o._.READY_TO_UPLOAD), t)
    }, [h, M, H]),
    z = r.useCallback((e, t, n) => {
      let r = h[t].localCreationAnswerId,
        l = URL.createObjectURL(n);
      H(e, t), M(g(l, o._.PREPARING), t), c.fH(e, r, n), M(g(l, o._.READY_TO_UPLOAD), t)
    }, [h, M, H]),
    q = r.useCallback((e, t) => {
      H(y, t), M({
        emoji: e,
        stickerId: true,
        mediaAttachmentState: true
      }, t)
    }, [y, M, H]),
    F = r.useCallback(e => {
      v(t => {
        let n = [...t];
        return n[e] = b(m({}, n[e]), {
          image: true
        }), n
      })
    }, []),
    G = r.useCallback(() => {
      Z && v(e => [...e, (0, s.Uu)()])
    }, [Z]),
    V = r.useCallback(e => {
      if (!B) return;
      let t = h.length;
      H(y, e), v(t => {
        let n = [...t];
        return n.splice(e, 1), n
      }), null == n || n({
        indexToRemove: e,
        numberOfAnswers: t
      })
    }, [h.length, B, y, n, H]);
  r.useEffect(() => () => {
    c.xt(y)
  }, [y]);
  let X = r.useCallback(() => {
      let e = true,
        t = {};
      return 0 === P.trim().length && (e = false, t.question = f.intl.string(f.t.gPX3oI)), h.filter(e => (0, s.cS)(e)).length < d.gY && (e = false, t["answer-".concat(h[0].localCreationAnswerId)] = f.intl.string(f.t.fYvzEX)), h.forEach(n => {
        (0, s.uY)(n) && (e = false, t["answer-".concat(n.localCreationAnswerId)] = f.intl.string(f.t["8Qqkc+"]))
      }), S(t), A(!e), e
    }, [h, P]),
    J = r.useCallback(async () => {
      await U({
        channel: e,
        question: P,
        answers: I,
        allowMultiSelect: C,
        duration: x,
        layout: l.C.DEFAULT,
        onClose: t
      })
    }, [P, I, C, x, U, e, t]),
    Q = r.useCallback(() => {
      !T && X() && J()
    }, [J, T, X]);
  return {
    answers: h,
    question: P,
    setQuestion: w,
    allowMultiSelect: C,
    setAllowMultiSelect: k,
    duration: x,
    setDuration: R,
    canPost: N,
    canAddMoreAnswers: Z,
    canRemoveMoreAnswers: B,
    handleQuestionChange: K,
    handleAnswerTextChange: Y,
    handleGifSelect: W,
    handleEmojiSelect: q,
    handleCustomUpload: z,
    handleAddAnswer: G,
    handleRemoveAnswer: V,
    handleRemoveAnswerImage: F,
    fieldErrors: E,
    createPoll: J,
    handleSubmitPoll: Q,
    submitting: T,
    createPollError: L,
    shouldFocusOnInvalidField: D,
    setShouldFocusOnInvalidField: A
  }
}

function g(e, t) {
  return {
    mediaAttachmentState: {
      status: t,
      mediaURL: e
    },
    emoji: true,
    stickerId: true
  }
}