/** Chunk was on 73734 **/
/** chunk id: 814249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => N,
  default: () => p
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk236698 = require("./236698.js"),
  Chunk668131 = require("./668131.js"),
  Chunk797632 = require("./797632.js"),
  Chunk468035 = require("./468035.js"),
  Chunk304937 = require("./304937.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk158677 = require("./158677.js");

function T(e) {
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

function I(e, t) {
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

function O(e) {
  let {
    surveyId: t,
    survey: n,
    onClose: a,
    transitionState: u
  } = e, {
    getSurveyResponses: O,
    setResponse: N,
    trackDisplayedQuestions: p
  } = (0, c.i)(), R = O(t), S = (0, E.i)(n), [P, y] = i.useState(S.blockId), [m, f] = i.useState(S.pageIndex), [C, g] = i.useState(false), D = (e, n) => {
    N(t, e, n)
  }, h = i.useCallback(() => (C ? a() : (0, o.qfG)(e => (0, r.jsx)(l.Modal, I(T({
    title: _.intl.string(_.t.T9Sx3z),
    actions: [{
      variant: "secondary",
      text: _.intl.string(_.t.oEAioF),
      onClick: e.onClose
    }, {
      variant: "critical-primary",
      text: _.intl.string(_.t.p89ACt),
      onClick: () => {
        e.onClose(), a()
      }
    }]
  }, e), {
    children: (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: _.intl.string(_.t.iCK6G0)
    })
  }))), Promise.resolve()), [a, C]), U = i.useMemo(() => null == P ? [] : (0, E.uy)(n, {
    blockId: P,
    pageIndex: m,
    responses: R
  }), [n, P, m, R]), b = i.useCallback(() => {
    if (null == n || null == P) return;
    let e = (0, E.vt)(n, {
      blockId: P,
      pageIndex: m,
      responses: R
    });
    p(t, U), e.isComplete && s.Ay.submitSurveyResponse(t, R), y(e.blockId), f(e.pageIndex), g(e.isComplete)
  }, [n, P, m, R, t, U, p]);
  i.useEffect(() => {
    0 === U.length && b()
  }, [U, b]);
  let M = i.useMemo(() => {
    if (C) returnfalse;
    for (let r of U) {
      var e, t;
      let i = n.Questions[r];
      if ((null == i || null == (t = i.Validation) || null == (e = t.Settings) ? true : e.ForceResponse) === "ON") {
        let e = R[r];
        if (null == e || "" === e.trim()) returnfalse
      }
    }
    returntrue
  }, [C, U, n, R]);
  return C ? (0, r.jsxs)(l.Modal, {
    transitionState: u,
    onClose: a,
    size: "md",
    title: _.intl.string(_.t.OSqLUF),
    actions: [{
      variant: "primary",
      text: _.intl.string(_.t.i4jeWR),
      onClick: a
    }],
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: _.intl.string(_.t["2scvdw"])
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: _.intl.string(_.t.chZxOD)
    })]
  }) : (0, r.jsx)(l.Modal, {
    transitionState: u,
    onClose: h,
    title: _.intl.string(_.t.OSqLUF),
    size: "md",
    actions: [{
      variant: "primary",
      text: _.intl.string(_.t.PDTjLN),
      onClick: b,
      disabled: !M
    }],
    children: (0, r.jsx)("div", {
      style: {
        width: "100%"
      },
      children: 0 === U.length ? null : (0, r.jsx)("div", {
        className: A.Qs,
        children: U.map(e => {
          let t = n.Questions[e];
          return null == t ? null : (0, r.jsx)(d.A, {
            question: t,
            questionId: e,
            responses: R,
            onResponseChange: D
          }, e)
        })
      })
    })
  })
}
async function N(e) {
  null != await s.Ay.fetchSurveyDetails(e) && (c.i.getState().clearSurveyResponses(e), (0, o.mMO)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 814249));
    return n => (0, r.jsx)(t, I(T({}, n), {
      surveyId: e
    }))
  }, {
    onCloseRequest: () => {}
  }))
}

function p(e) {
  let {
    surveyId: t,
    onClose: n,
    transitionState: i
  } = e, l = (0, a.bG)([u.A], () => u.A.getSurvey(t));
  return null == l ? (0, r.jsx)(o.Text, {
    variant: "text-md/medium",
    className: A.Lq,
    children: _.intl.string(_.t.MKDeyL)
  }) : (0, r.jsx)(O, {
    surveyId: t,
    survey: l,
    onClose: n,
    transitionState: i
  })
}