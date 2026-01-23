/** Chunk was on web.js **/
/** chunk id: 814249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => b,
  default: () => O
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

function y(e) {
  let {
    surveyId: t,
    survey: n,
    onClose: s,
    transitionState: u
  } = e, {
    getSurveyResponses: h,
    setResponse: g,
    trackDisplayedQuestions: y
  } = (0, c.i)(), b = h(t), O = (0, d.i)(n), [v, A] = i.useState(O.blockId), [I, S] = i.useState(O.pageIndex), [T, C] = i.useState(false), N = (e, n) => {
    g(t, e, n)
  }, w = i.useCallback(() => (T ? s() : (0, o.qfG)(e => (0, r.jsx)(a.Modal, E(m({
    title: p.intl.string(p.t.T9Sx3z),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t.oEAioF),
      onClick: e.onClose
    }, {
      variant: "critical-primary",
      text: p.intl.string(p.t.p89ACt),
      onClick: () => {
        e.onClose(), s()
      }
    }]
  }, e), {
    children: (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: p.intl.string(p.t.iCK6G0)
    })
  }))), Promise.resolve()), [s, T]), R = i.useMemo(() => null == v ? [] : (0, d.uy)(n, {
    blockId: v,
    pageIndex: I,
    responses: b
  }), [n, v, I, b]), P = i.useCallback(() => {
    if (null == n || null == v) return;
    let e = (0, d.vt)(n, {
      blockId: v,
      pageIndex: I,
      responses: b
    });
    y(t, R), e.isComplete && l.Ay.submitSurveyResponse(t, b), A(e.blockId), S(e.pageIndex), C(e.isComplete)
  }, [n, v, I, b, t, R, y]);
  i.useEffect(() => {
    0 === R.length && P()
  }, [R, P]);
  let D = e => 0 === R.length ? null : (0, r.jsx)("div", {
      className: _.Qs,
      children: R.map(t => {
        let n = e.Questions[t];
        return null == n ? null : (0, r.jsx)(f.A, {
          question: n,
          questionId: t,
          responses: b,
          onResponseChange: N
        }, t)
      })
    }),
    x = i.useMemo(() => {
      if (T) returnfalse;
      for (let r of R) {
        var e, t;
        let i = n.Questions[r];
        if ((null == i || null == (t = i.Validation) || null == (e = t.Settings) ? true : e.ForceResponse) === "ON") {
          let e = b[r];
          if (null == e || "" === e.trim()) returnfalse
        }
      }
      returntrue
    }, [T, R, n, b]);
  return T ? (0, r.jsxs)(a.Modal, {
    transitionState: u,
    onClose: s,
    size: "md",
    title: p.intl.string(p.t.OSqLUF),
    actions: [{
      variant: "primary",
      text: p.intl.string(p.t.i4jeWR),
      onClick: s
    }],
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: p.intl.string(p.t["2scvdw"])
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      children: p.intl.string(p.t.chZxOD)
    })]
  }) : (0, r.jsx)(a.Modal, {
    transitionState: u,
    onClose: w,
    title: p.intl.string(p.t.OSqLUF),
    size: "md",
    actions: [{
      variant: "primary",
      text: p.intl.string(p.t.PDTjLN),
      onClick: P,
      disabled: !x
    }],
    children: (0, r.jsx)("div", {
      style: {
        width: "100%"
      },
      children: D(n)
    })
  })
}
async function b(e) {
  null != await l.Ay.fetchSurveyDetails(e) && (c.i.getState().clearSurveyResponses(e), (0, o.mMO)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 814249));
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
  } = e, a = (0, s.bG)([u.A], () => u.A.getSurvey(t));
  return null == a ? (0, r.jsx)(o.Text, {
    variant: "text-md/medium",
    className: _.Lq,
    children: p.intl.string(p.t.MKDeyL)
  }) : (0, r.jsx)(y, {
    surveyId: t,
    survey: a,
    onClose: n,
    transitionState: i
  })
}