/** Chunk was on 68784 **/
/** chunk id: 728076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function p(e, t) {
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

function b(e, t, n, b) {
  var j, O;
  let y = e.id,
    [v, h] = r.useState(() => {
      var e, t;
      return null != (t = null == b || null == (e = b.initialAnswers) ? true : e.map(e => m({}, (0, u.Uu)(), e))) ? t : [(0, u.Uu)(), (0, u.Uu)()]
    }),
    [P, w] = r.useState(null != (j = null == b ? true : b.initialQuestion) ? j : ""),
    [C, k] = r.useState(false),
    [x, R] = r.useState(null != (O = null == b ? true : b.initialDuration) ? O : f.lc.ONE_DAY),
    [E, S] = r.useState({}),
    [_, D] = r.useState(false),
    A = v.filter(e => (0, u.cS)(e)),
    I = v.filter(e => (0, u.uY)(e)),
    N = P.length > 0 && A.length >= f.gY && 0 === I.length,
    [U, {
      error: L,
      loading: T
    }] = (0, a.Z)(s.Z.createPoll),
    Z = v.length < f.fw,
    B = v.length > f.gY,
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
      }), h(e => {
        let r = [...e];
        return r[n] = p(m({}, r[n]), {
          text: t
        }), r
      })
    }, []),
    M = r.useCallback((e, t) => {
      h(n => {
        let r = [...n];
        return r[t] = p(m({}, r[t]), {
          image: e
        }), r
      })
    }, []),
    z = r.useCallback((e, t, n) => {
      var r;
      let l = v[t],
        a = null == (r = l.image) ? true : r.mediaAttachmentState;
      null != a && a.mediaURL !== n && c.P(e, l.localCreationAnswerId, (0, i.Yk)(l.localCreationAnswerId, a.mediaURL))
    }, [v]),
    H = r.useCallback(async (e, t, n) => {
      let r = v[t].localCreationAnswerId;
      if (z(e, t), M(g(n, o._.PREPARING), t), null == await c.IV(e, r, n)) return void M(g(n, o._.ERROR), t);
      M(g(n, o._.READY_TO_UPLOAD), t)
    }, [v, M, z]),
    W = r.useCallback((e, t, n) => {
      let r = v[t].localCreationAnswerId,
        l = URL.createObjectURL(n);
      z(e, t), M(g(l, o._.PREPARING), t), c.fH(e, r, n), M(g(l, o._.READY_TO_UPLOAD), t)
    }, [v, M, z]),
    q = r.useCallback((e, t) => {
      z(y, t), M({
        emoji: e,
        stickerId: true,
        mediaAttachmentState: true
      }, t)
    }, [y, M, z]),
    F = r.useCallback(e => {
      h(t => {
        let n = [...t];
        return n[e] = p(m({}, n[e]), {
          image: true
        }), n
      })
    }, []),
    G = r.useCallback(() => {
      Z && h(e => [...e, (0, u.Uu)()])
    }, [Z]),
    V = r.useCallback(e => {
      if (!B) return;
      let t = v.length;
      z(y, e), h(t => {
        let n = [...t];
        return n.splice(e, 1), n
      }), null == n || n({
        indexToRemove: e,
        numberOfAnswers: t
      })
    }, [v.length, B, y, n, z]);
  r.useEffect(() => () => {
    c.xt(y)
  }, [y]);
  let X = r.useCallback(() => {
      let e = true,
        t = {};
      return 0 === P.trim().length && (e = false, t.question = d.intl.string(d.t.gPX3oI)), v.filter(e => (0, u.cS)(e)).length < f.gY && (e = false, t["answer-".concat(v[0].localCreationAnswerId)] = d.intl.string(d.t.fYvzEX)), v.forEach(n => {
        (0, u.uY)(n) && (e = false, t["answer-".concat(n.localCreationAnswerId)] = d.intl.string(d.t["8Qqkc+"]))
      }), S(t), D(!e), e
    }, [v, P]),
    J = r.useCallback(async () => {
      await U({
        channel: e,
        question: P,
        answers: A,
        allowMultiSelect: C,
        duration: x,
        layout: l.C.DEFAULT,
        onClose: t
      })
    }, [P, A, C, x, U, e, t]),
    Q = r.useCallback(() => {
      !T && X() && J()
    }, [J, T, X]);
  return {
    answers: v,
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
    handleGifSelect: H,
    handleEmojiSelect: q,
    handleCustomUpload: W,
    handleAddAnswer: G,
    handleRemoveAnswer: V,
    handleRemoveAnswerImage: F,
    fieldErrors: E,
    createPoll: J,
    handleSubmitPoll: Q,
    submitting: T,
    createPollError: L,
    shouldFocusOnInvalidField: _,
    setShouldFocusOnInvalidField: D
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