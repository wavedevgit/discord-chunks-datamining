/** Chunk was on 52786 **/
/** chunk id: 998489, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk966974 = require("./966974.js"),
  Chunk608461 = require("./608461.js"),
  Chunk214162 = require("./214162.js"),
  Chunk256095 = require("./256095.js"),
  Chunk676779 = require("./676779.js"),
  Chunk180662 = require("./180662.js"),
  Chunk969632 = require("./969632.js"),
  Chunk412136 = require("./412136.js"),
  Chunk985018 = require("./985018.jsx");

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
  var O, j;
  let y = e.id,
    [h, v] = r.useState(() => {
      var e, t;
      return null != (e = null == p || null == (t = p.initialAnswers) ? true : t.map(e => m({}, (0, u.YP)(), e))) ? e : [(0, u.YP)(), (0, u.YP)()]
    }),
    [w, P] = r.useState(null != (O = null == p ? true : p.initialQuestion) ? O : ""),
    [A, C] = r.useState(false),
    [k, R] = r.useState(null != (j = null == p ? true : p.initialDuration) ? j : f.fT.ONE_DAY),
    [x, E] = r.useState({}),
    [_, S] = r.useState(false),
    D = h.filter(e => (0, u.ND)(e)),
    I = h.filter(e => (0, u.VD)(e)),
    N = w.length > 0 && D.length >= f.FW && 0 === I.length,
    [T, {
      error: U,
      loading: L
    }] = (0, a.A)(s.A.createPoll),
    K = h.length < f.Lu,
    Y = h.length > f.FW,
    B = r.useCallback(e => {
      E(e => {
        let t = m({}, e);
        return delete t.question, t
      }), P(e)
    }, []),
    W = r.useCallback(e => {
      let {
        text: t,
        index: n,
        localCreationAnswerId: r
      } = e;
      E(e => {
        let t = m({}, e);
        return delete t["answer-".concat(r)], t
      }), v(e => {
        let r = [...e];
        return r[n] = b(m({}, r[n]), {
          text: t
        }), r
      })
    }, []),
    q = r.useCallback((e, t) => {
      v(n => {
        let r = [...n];
        return r[t] = b(m({}, r[t]), {
          image: e
        }), r
      })
    }, []),
    z = r.useCallback((e, t, n) => {
      var r;
      let l = h[t],
        a = null == (r = l.image) ? true : r.mediaAttachmentState;
      null != a && a.mediaURL !== n && c.k7(e, l.localCreationAnswerId, (0, i.$P)(l.localCreationAnswerId, a.mediaURL))
    }, [h]),
    F = r.useCallback(async (e, t, n) => {
      let r = h[t].localCreationAnswerId;
      (z(e, t), q(g(n, o.k.PREPARING), t), null == await c.Sw(e, r, n)) ? q(g(n, o.k.ERROR), t): q(g(n, o.k.READY_TO_UPLOAD), t)
    }, [h, q, z]),
    G = r.useCallback((e, t, n) => {
      let r = h[t].localCreationAnswerId,
        l = URL.createObjectURL(n);
      z(e, t), q(g(l, o.k.PREPARING), t), c._N(e, r, n), q(g(l, o.k.READY_TO_UPLOAD), t)
    }, [h, q, z]),
    M = r.useCallback((e, t) => {
      z(y, t), q({
        emoji: e,
        stickerId: true,
        mediaAttachmentState: true
      }, t)
    }, [y, q, z]),
    V = r.useCallback(e => {
      v(t => {
        let n = [...t];
        return n[e] = b(m({}, n[e]), {
          image: true
        }), n
      })
    }, []),
    H = r.useCallback(() => {
      K && v(e => [...e, (0, u.YP)()])
    }, [K]),
    Z = r.useCallback(e => {
      if (!Y) return;
      let t = h.length;
      z(y, e), v(t => {
        let n = [...t];
        return n.splice(e, 1), n
      }), null == n || n({
        indexToRemove: e,
        numberOfAnswers: t
      })
    }, [h.length, Y, y, n, z]);
  r.useEffect(() => () => {
    c.AY(y)
  }, [y]);
  let X = r.useCallback(() => {
      let e = true,
        t = {};
      return 0 === w.trim().length && (e = false, t.question = d.intl.string(d.t.gPX3oI)), h.filter(e => (0, u.ND)(e)).length < f.FW && (e = false, t["answer-".concat(h[0].localCreationAnswerId)] = d.intl.string(d.t.fYvzEX)), h.forEach(n => {
        (0, u.VD)(n) && (e = false, t["answer-".concat(n.localCreationAnswerId)] = d.intl.string(d.t["8Qqkc+"]))
      }), E(t), S(!e), e
    }, [h, w]),
    Q = r.useCallback(async () => {
      await T({
        channel: e,
        question: w,
        answers: D,
        allowMultiSelect: A,
        duration: k,
        layout: l.Z.DEFAULT,
        onClose: t
      })
    }, [w, D, A, k, T, e, t]),
    $ = r.useCallback(() => {
      !L && X() && Q()
    }, [Q, L, X]);
  return {
    answers: h,
    question: w,
    setQuestion: P,
    allowMultiSelect: A,
    setAllowMultiSelect: C,
    duration: k,
    setDuration: R,
    canPost: N,
    canAddMoreAnswers: K,
    canRemoveMoreAnswers: Y,
    handleQuestionChange: B,
    handleAnswerTextChange: W,
    handleGifSelect: F,
    handleEmojiSelect: M,
    handleCustomUpload: G,
    handleAddAnswer: H,
    handleRemoveAnswer: Z,
    handleRemoveAnswerImage: V,
    fieldErrors: x,
    createPoll: Q,
    handleSubmitPoll: $,
    submitting: L,
    createPollError: U,
    shouldFocusOnInvalidField: _,
    setShouldFocusOnInvalidField: S
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