/** Chunk was on web.js **/
/** chunk id: 588529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ox: () => _,
  ZP: () => h
}), require("./388685.js"), require("./35282.js"), require("./49124.js");
var Chunk905637 = require("./905637.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk558724 = require("./558724.js"),
  Chunk960048 = require("./960048.js"),
  Chunk401302 = require("./401302.js"),
  Chunk841110 = require("./841110.js"),
  Chunk284881 = require("./284881.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  let r = c.Z.getSurvey(e);
  if (null == r) return null;
  let i = {};
  for (let [e, n] of Object.entries(t)) {
    let t = r.Questions[e];
    if (null != t)
      if (t.QuestionType === u.S.MULTIPLE_CHOICE && t.Selector === u.E_.MULTIPLE_ANSWER) i[e] = n.split(","), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
      else if (t.QuestionType === u.S.MULTIPLE_CHOICE && t.Selector === u.E_.SINGLE_ANSWER) {
      if (n.includes(":TEXT:")) {
        let t = n.split(":TEXT:", 2)[0],
          r = n.split(":TEXT:", 2)[1];
        i[e] = parseInt(t), i["".concat(e, "_").concat(t, "_TEXT")] = r
      } else i[e] = parseInt(n);
      null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder)
    } else t.QuestionType === u.S.TEXT_ENTRY ? i["".concat(e, "_TEXT")] = n : i[e] = n
  }
  let a = Object.keys(t);
  return n.forEach(e => {
    if (!a.includes(e)) {
      let t = r.Questions[e];
      null != t && null != t.ChoiceOrder && t.QuestionType === u.S.MULTIPLE_CHOICE && (t.Selector === u.E_.MULTIPLE_ANSWER && (i[e] = []), i["".concat(e, "_DO")] = t.ChoiceOrder)
    }
  }), i
}

function p(e) {
  return !!o.ZP.shouldAllowSurveyAction() && r.J[e] >= 100 * Math.random()
}
async function _(e, t) {
  if (!p(e)) return;
  let n = {
    action_type: e
  };
  null != t && (n.metadata = t);
  try {
    var r;
    let e = await i.tn.post({
      url: d.ANM.EMBEDDED_SURVEY_ACTION,
      body: n,
      rejectWithError: true
    });
    a.Z.dispatch({
      type: "SURVEY_FETCHED",
      survey: null == e || null == (r = e.body) ? true : r.survey,
      isActionTriggered: true
    })
  } catch (e) {}
}
let h = {
  fetchSurveyDetails: async function(e) {
    try {
      let t = (await i.tn.get({
        url: d.ANM.EMBEDDED_SURVEY(e),
        rejectWithError: true
      })).body;
      return a.Z.dispatch({
        type: "QUALTRICS_SURVEY_FETCH_SUCCESS",
        surveyId: e,
        surveyDetails: t
      }), t
    } catch (e) {
      return s.Z.captureException(e), null
    }
  },
  submitSurveyResponse: async function(e, t) {
    let n = l.H.getState().getDisplayedQuestions(e),
      r = f(e, t, null != n ? n : []);
    if (null == r) return {
      responseId: "null"
    };
    try {
      return {
        responseId: (await i.tn.post({
          url: d.ANM.EMBEDDED_SURVEY_RESPONSE(e),
          body: {
            values_json: JSON.stringify(r)
          },
          rejectWithError: true
        })).body.responseId
      }
    } catch (e) {
      return s.Z.captureException(e), {
        responseId: "null"
      }
    }
  },
  fireSurveyAction: _
}