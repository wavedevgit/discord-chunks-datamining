/** Chunk was on web.js **/
/** chunk id: 588529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ox: () => d,
  ZP: () => f
}), require("./388685.js"), require("./35282.js"), require("./49124.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js"),
  Chunk401302 = require("./401302.js"),
  Chunk841110 = require("./841110.js"),
  Chunk284881 = require("./284881.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
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
async function d(e) {
  if (e.startsWith("quest_completed_")) try {
    var t;
    let n = await r.tn.post({
      url: c.ANM.EMBEDDED_SURVEY_ACTION,
      body: {
        action_type: e
      },
      rejectWithError: true
    });
    i.Z.dispatch({
      type: "SURVEY_FETCHED",
      survey: null == n || null == (t = n.body) ? true : t.survey
    })
  } catch (e) {}
}
let f = {
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
  submitSurveyResponse: async function(e, t) {
    let n = o.H.getState().getDisplayedQuestions(e),
      i = u(e, t, null != n ? n : []);
    if (null == i) return {
      responseId: "null"
    };
    try {
      return {
        responseId: (await r.tn.post({
          url: c.ANM.EMBEDDED_SURVEY_RESPONSE(e),
          body: {
            values_json: JSON.stringify(i)
          },
          rejectWithError: true
        })).body.responseId
      }
    } catch (e) {
      return a.Z.captureException(e), {
        responseId: "null"
      }
    }
  },
  fireSurveyAction: d
}