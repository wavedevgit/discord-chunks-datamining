/** Chunk was on 68784 **/
/** chunk id: 728076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./781311.js");
var Chunk73800 = require("./73800.js"),
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
  var h, j;
  let w = e.id,
    [v, x] = r.useState(() => {
      var e, t;
      return null != (t = null == b || null == (e = b.initialAnswers) ? true : e.map(e => m({}, (0, u.Uu)(), e))) ? t : [(0, u.Uu)(), (0, u.Uu)()]
    }),
    [O, y] = r.useState(null != (h = null == b ? true : b.initialQuestion) ? h : ""),
    [P, C] = r.useState(false),
    [_, R] = r.useState(null != (j = null == b ? true : b.initialDuration) ? j : d.lc.ONE_DAY),
    [E, k] = r.useState({}),
    [A, D] = r.useState(false),
    S = v.filter(e => (0, u.cS)(e)),
    I = v.filter(e => (0, u.uY)(e)),
    N = O.length > 0 && S.length >= d.gY && 0 === I.length,
    [T, {
      error: L,
      loading: B
    }] = (0, l.Z)(c.Z.createPoll),
    U = v.length < d.fw,
    Z = v.length > d.gY,
    Y = r.useCallback(e => {
      k(e => {
        let t = m({}, e);
        return delete t.question, t
      }), y(e)
    }, []),
    K = r.useCallback(e => {
      let {
        text: t,
        index: n,
        localCreationAnswerId: r
      } = e;
      k(e => {
        let t = m({}, e);
        return delete t["answer-".concat(r)], t
      }), x(e => {
        let r = [...e];
        return r[n] = p(m({}, r[n]), {
          text: t
        }), r
      })
    }, []),
    z = r.useCallback((e, t) => {
      x(n => {
        let r = [...n];
        return r[t] = p(m({}, r[t]), {
          image: e
        }), r
      })
    }, []),
    F = r.useCallback((e, t, n) => {
      var r;
      let a = v[t],
        l = null == (r = a.image) ? true : r.mediaAttachmentState;
      null != l && l.mediaURL !== n && s.P(e, a.localCreationAnswerId, (0, i.Yk)(a.localCreationAnswerId, l.mediaURL))
    }, [v]),
    M = r.useCallback(async (e, t, n) => {
      let r = v[t].localCreationAnswerId;
      if (F(e, t), z(g(n, o._.PREPARING), t), null == await s.IV(e, r, n)) return void z(g(n, o._.ERROR), t);
      z(g(n, o._.READY_TO_UPLOAD), t)
    }, [v, z, F]),
    W = r.useCallback((e, t, n) => {
      let r = v[t].localCreationAnswerId,
        a = URL.createObjectURL(n);
      F(e, t), z(g(a, o._.PREPARING), t), s.fH(e, r, n), z(g(a, o._.READY_TO_UPLOAD), t)
    }, [v, z, F]),
    q = r.useCallback((e, t) => {
      F(w, t), z({
        emoji: e,
        stickerId: true,
        mediaAttachmentState: true
      }, t)
    }, [w, z, F]),
    H = r.useCallback(e => {
      x(t => {
        let n = [...t];
        return n[e] = p(m({}, n[e]), {
          image: true
        }), n
      })
    }, []),
    G = r.useCallback(() => {
      U && x(e => [...e, (0, u.Uu)()])
    }, [U]),
    X = r.useCallback(e => {
      if (!Z) return;
      let t = v.length;
      F(w, e), x(t => {
        let n = [...t];
        return n.splice(e, 1), n
      }), null == n || n({
        indexToRemove: e,
        numberOfAnswers: t
      })
    }, [v.length, Z, w, n, F]);
  r.useEffect(() => () => {
    s.xt(w)
  }, [w]);
  let V = r.useCallback(() => {
      let e = true,
        t = {};
      return 0 === O.trim().length && (e = false, t.question = f.intl.string(f.t.gPX3oK)), v.filter(e => (0, u.cS)(e)).length < d.gY && (e = false, t["answer-".concat(v[0].localCreationAnswerId)] = f.intl.string(f.t.fYvzER)), v.forEach(n => {
        (0, u.uY)(n) && (e = false, t["answer-".concat(n.localCreationAnswerId)] = f.intl.string(f.t["8Qqkc3"]))
      }), k(t), D(!e), e
    }, [v, O]),
    J = r.useCallback(async () => {
      await T({
        channel: e,
        question: O,
        answers: S,
        allowMultiSelect: P,
        duration: _,
        layout: a.C.DEFAULT,
        onClose: t
      })
    }, [O, S, P, _, T, e, t]),
    Q = r.useCallback(() => {
      !B && V() && J()
    }, [J, B, V]);
  return {
    answers: v,
    question: O,
    setQuestion: y,
    allowMultiSelect: P,
    setAllowMultiSelect: C,
    duration: _,
    setDuration: R,
    canPost: N,
    canAddMoreAnswers: U,
    canRemoveMoreAnswers: Z,
    handleQuestionChange: Y,
    handleAnswerTextChange: K,
    handleGifSelect: M,
    handleEmojiSelect: q,
    handleCustomUpload: W,
    handleAddAnswer: G,
    handleRemoveAnswer: X,
    handleRemoveAnswerImage: H,
    fieldErrors: E,
    createPoll: J,
    handleSubmitPoll: Q,
    submitting: B,
    createPollError: L,
    shouldFocusOnInvalidField: A,
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