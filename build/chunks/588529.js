/** Chunk was on web.js **/
/** chunk id: 588529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => h
}), require("./388685.js"), require("./35282.js"), require("./49124.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js"),
  Chunk401302 = require("./401302.js"),
  Chunk841110 = require("./841110.js"),
  Chunk284881 = require("./284881.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t, n) {
  let r = s.Z.getSurvey(e);
  if (null == r) return null;
  let i = {};
  for (let [e, n] of Object.entries(t)) {
    let t = r.Questions[e];
    if (null != t)
      if (t.QuestionType === l.S.MULTIPLE_CHOICE && t.Selector === l.E_.MULTIPLE_ANSWER) i[e] = n.split(","), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
      else if (t.QuestionType === l.S.MULTIPLE_CHOICE && t.Selector === l.E_.SINGLE_ANSWER) {
      if (n.includes(":TEXT:")) {
        let t = n.split(":TEXT:", 2)[0],
          r = n.split(":TEXT:", 2)[1];
        i[e] = parseInt(t), i["".concat(e, "_").concat(t, "_TEXT")] = r
      } else i[e] = parseInt(n);
      null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder)
    } else t.QuestionType === l.S.TEXT_ENTRY ? i["".concat(e, "_TEXT")] = n : i[e] = n
  }
  let a = Object.keys(t);
  return n.forEach(e => {
    if (!a.includes(e)) {
      let t = r.Questions[e];
      null != t && null != t.ChoiceOrder && t.QuestionType === l.S.MULTIPLE_CHOICE && (t.Selector === l.E_.MULTIPLE_ANSWER && (i[e] = []), i["".concat(e, "_DO")] = t.ChoiceOrder)
    }
  }), i
}
let h = {
  fetchSurveyDetails: async function(e) {
    try {
      let t = (await r.tn.get({
        url: c.ANM.EMBEDDED_SURVEY(e),
        rejectWithError: true
      })).body;
      return i.Z.dispatch({
        type: "QUALTRICS_SURVEY_FETCH_SUCCESS",
        surveyId: e,
        surveyDetails: t
      }), t
    } catch (e) {
      return a.Z.captureException(e), null
    }
  },
  submitSurveyResponse: async function(e, t, n) {
    let i = o.H.getState().getDisplayedQuestions(e),
      s = p(e, t, null != i ? i : []);
    if (null == s) return {
      responseId: "null"
    };
    try {
      return {
        responseId: (await r.tn.post({
          url: c.ANM.EMBEDDED_SURVEY_RESPONSE(e),
          body: {
            values_json: JSON.stringify(s),
            displayedFields: null != i ? i : [],
            metadata: _(d({}, n), {
              timestamp: new Date().toISOString()
            })
          },
          rejectWithError: true
        })).body.responseId
      }
    } catch (e) {
      return a.Z.captureException(e), {
        responseId: "null"
      }
    }
  }
}