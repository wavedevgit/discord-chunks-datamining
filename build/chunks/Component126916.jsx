/** Chunk was on web.js **/
/** chunk id: 126916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => O,
  q: () => y
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk588529 = require("./588529.js"),
  Chunk401302 = require("./401302.js"),
  Chunk841110 = require("./841110.js"),
  Chunk689946 = require("./689946.js"),
  Chunk207385 = require("./207385.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk287801 = require("./287801.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    surveyId: t,
    survey: n,
    onClose: o,
    transitionState: u
  } = e, {
    getSurveyResponses: h,
    setResponse: g,
    trackDisplayedQuestions: b
  } = (0, c.H)(), y = h(t), O = (0, d.l6)(n), [v, I] = i.useState(O.blockId), [T, S] = i.useState(O.pageIndex), [A, C] = i.useState(false), N = (e, n) => {
    g(t, e, n)
  }, R = i.useCallback(() => (A ? o() : (0, s.h7j)(e => (0, r.jsx)(a.Modal, E(m({
    title: _.intl.string(_.t.T9Sx3z),
    actions: [{
      variant: "secondary",
      text: _.intl.string(_.t.oEAioF),
      onClick: e.onClose
    }, {
      variant: "critical-primary",
      text: _.intl.string(_.t.p89ACt),
      onClick: () => {
        e.onClose(), o()
      }
    }]
  }, e), {
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: _.intl.string(_.t.iCK6G0)
    })
  }))), Promise.resolve()), [o, A]), P = i.useMemo(() => null == v ? [] : (0, d.B_)(n, {
    blockId: v,
    pageIndex: T,
    responses: y
  }), [n, v, T, y]), D = i.useCallback(() => {
    if (null == n || null == v) return;
    let e = (0, d.KZ)(n, {
      blockId: v,
      pageIndex: T,
      responses: y
    });
    b(t, P), e.isComplete && l.ZP.submitSurveyResponse(t, y, {}), I(e.blockId), S(e.pageIndex), C(e.isComplete)
  }, [n, v, T, y, t, P, b]);
  i.useEffect(() => {
    0 === P.length && D()
  }, [P, D]);
  let w = e => 0 === P.length ? null : (0, r.jsx)("div", {
      className: p.content,
      children: P.map(t => {
        let n = e.Questions[t];
        return null == n ? null : (0, r.jsx)(f.Z, {
          question: n,
          questionId: t,
          responses: y,
          onResponseChange: N
        }, t)
      })
    }),
    L = i.useMemo(() => {
      if (A) returnfalse;
      for (let r of P) {
        var e, t;
        let i = n.Questions[r];
        if ((null == i || null == (t = i.Validation) || null == (e = t.Settings) ? true : e.ForceResponse) === "ON") {
          let e = y[r];
          if (null == e || "" === e.trim()) returnfalse
        }
      }
      returntrue
    }, [A, P, n, y]);
  return A ? (0, r.jsxs)(a.Modal, {
    transitionState: u,
    onClose: o,
    size: "md",
    title: _.intl.string(_.t.OSqLUF),
    actions: [{
      variant: "primary",
      text: _.intl.string(_.t.i4jeWR),
      onClick: o
    }],
    children: [(0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: _.intl.string(_.t["2scvdw"])
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: _.intl.string(_.t.chZxOD)
    })]
  }) : (0, r.jsx)(a.Modal, {
    transitionState: u,
    onClose: R,
    title: _.intl.string(_.t.OSqLUF),
    size: "md",
    actions: [{
      variant: "primary",
      text: _.intl.string(_.t.PDTjLN),
      onClick: D,
      disabled: !L
    }],
    children: (0, r.jsx)("div", {
      style: {
        width: "100%"
      },
      children: w(n)
    })
  })
}
async function y(e) {
  null != await l.ZP.fetchSurveyDetails(e) && (c.H.getState().clearSurveyResponses(e), (0, s.ZDy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 126916));
    return n => (0, r.jsx)(t, E(m({}, n), {
      surveyId: e
    }))
  }, {
    onCloseRequest: () => {}
  }))
}

function O(e) {
  let {
    surveyId: t,
    onClose: n,
    transitionState: i
  } = e, a = (0, o.e7)([u.Z], () => u.Z.getSurvey(t));
  return null == a ? (0, r.jsx)(s.Text, {
    variant: "text-md/medium",
    className: p.loading,
    children: _.intl.string(_.t.MKDeyL)
  }) : (0, r.jsx)(b, {
    surveyId: t,
    survey: a,
    onClose: n,
    transitionState: i
  })
}