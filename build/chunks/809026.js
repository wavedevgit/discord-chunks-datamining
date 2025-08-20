/** Chunk was on web.js **/
/** chunk id: 809026, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if ((null == e ? true : e.fields) == null) return null;
  let t = {},
    n = {};
  for (let r of e.fields) switch (r.rawName) {
    case "poll_question_text":
      t.questionText = r.rawValue;
      break;
    case "victor_answer_id":
      t.victorAnswerId = r.rawValue;
      break;
    case "victor_answer_text":
      t.victorAnswerText = r.rawValue;
      break;
    case "victor_answer_votes":
      t.victorAnswerVotes = parseInt(r.rawValue, 10);
      break;
    case "total_votes":
      t.totalVotes = parseInt(r.rawValue, 10);
      break;
    case "victor_answer_emoji_id":
      n.id = r.rawValue;
      break;
    case "victor_answer_emoji_name":
      n.name = r.rawValue;
      break;
    case "victor_answer_emoji_animated":
      n.animated = "true" === r.rawValue
  }
  if (null != n.name) {
    var r;
    n.animated = null != (r = n.animated) && r, t.victorEmoji = n
  }
  return t
}
require.d(exports, {
  Z: () => r
}), require("./388685.js")