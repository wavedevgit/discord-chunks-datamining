/** Chunk was on web.js **/
/** chunk id: 236698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => h,
  hs: () => _
}), require("./896048.js"), require("./747238.js"), require("./457529.js");
var Chunk34045 = require("./34045.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk274184 = require("./274184.js"),
  Chunk728458 = require("./728458.js"),
  Chunk668131 = require("./668131.js"),
  Chunk797632 = require("./797632.js"),
  Chunk880652 = require("./880652.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  let r = c.A.getSurvey(e);
  if (null == r) return null;
  let i = {};
  for (let [e, n] of Object.entries(t)) {
    let t = r.Questions[e];
    if (null != t)
      if (t.QuestionType === u.SQ.MULTIPLE_CHOICE && t.Selector === u.BO.MULTIPLE_ANSWER) i[e] = n.split(","), null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder);
      else if (t.QuestionType === u.SQ.MULTIPLE_CHOICE && t.Selector === u.BO.SINGLE_ANSWER) {
      if (n.includes(":TEXT:")) {
        let t = n.split(":TEXT:", 2)[0],
          r = n.split(":TEXT:", 2)[1];
        i[e] = parseInt(t), i["".concat(e, "_").concat(t, "_TEXT")] = r
      } else i[e] = parseInt(n);
      null != t.ChoiceOrder && (i["".concat(e, "_DO")] = t.ChoiceOrder)
    } else t.QuestionType === u.SQ.TEXT_ENTRY ? i["".concat(e, "_TEXT")] = n : i[e] = n
  }
  let a = Object.keys(t);
  return n.forEach(e => {
    if (!a.includes(e)) {
      let t = r.Questions[e];
      null != t && null != t.ChoiceOrder && t.QuestionType === u.SQ.MULTIPLE_CHOICE && (t.Selector === u.BO.MULTIPLE_ANSWER && (i[e] = []), i["".concat(e, "_DO")] = t.ChoiceOrder)
    }
  }), i
}

function p(e) {
  return !!s.Ay.shouldAllowSurveyAction() && r.M[e] >= 100 * Math.random()
}
async function _(e, t) {
  if (!p(e)) return;
  let n = {
    action_type: e
  };
  null != t && (n.metadata = t);
  try {
    var r;
    let e = await i.Bo.post({
      url: d.Rsh.EMBEDDED_SURVEY_ACTION,
      body: n,
      rejectWithError: true
    });
    a.h.dispatch({
      type: "SURVEY_FETCHED",
      survey: null == e || null == (r = e.body) ? true : r.survey,
      isActionTriggered: true
    })
  } catch (e) {}
}
let h = {
  fetchSurveyDetails: async function(e) {
    try {
      let t = (await i.Bo.get({
        url: d.Rsh.EMBEDDED_SURVEY(e),
        rejectWithError: true
      })).body;
      return a.h.dispatch({
        type: "QUALTRICS_SURVEY_FETCH_SUCCESS",
        surveyId: e,
        surveyDetails: t
      }), t
    } catch (e) {
      return o.A.captureException(e), null
    }
  },
  submitSurveyResponse: async function(e, t) {
    let n = l.i.getState().getDisplayedQuestions(e),
      r = f(e, t, null != n ? n : []);
    if (null == r) return {
      responseId: "null"
    };
    try {
      return {
        responseId: (await i.Bo.post({
          url: d.Rsh.EMBEDDED_SURVEY_RESPONSE(e),
          body: {
            values_json: JSON.stringify(r)
          },
          rejectWithError: true
        })).body.responseId
      }
    } catch (e) {
      return o.A.captureException(e), {
        responseId: "null"
      }
    }
  },
  fireSurveyAction: _
}