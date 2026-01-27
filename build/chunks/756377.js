/** Chunk was on web.js **/
/** chunk id: 756377, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dd: () => a,
  Yf: () => i,
  iz: () => o,
  x6: () => s
});
var Chunk141468 = require("./141468.js"),
  i = function(e) {
    return e.ALL = "ALL", e.REMINDER = "REMINDER", e.BOOKMARK = "BOOKMARK", e
  }({});

function a(e) {
  return {
    channelId: e.channel_id,
    messageId: e.message_id,
    savedAt: new Date(e.saved_at),
    authorSummary: e.author_summary,
    channelSummary: e.channel_summary,
    messageSummary: e.message_summary,
    guildId: 0 === e.guild_id ? true : e.guild_id,
    authorId: 0 === e.author_id ? true : e.author_id,
    notes: e.notes,
    dueAt: null != e.due_at ? new Date(e.due_at) : true
  }
}

function o(e) {
  return {
    message: null != e.message ? (0, r.rh)(e.message) : null,
    saveData: a(e.save_data)
  }
}

function s(e) {
  return {
    channelId: e.channel_id,
    messageId: e.message_id
  }
}