/** Chunk was on web.js **/
/** chunk id: 151282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eg: () => d,
  Ps: () => m,
  mk: () => f,
  pr: () => u,
  sy: () => _,
  yF: () => h
}), require("./65821.js"), require("./896048.js"), require("./938796.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk723444 = require("./723444.js"),
  Chunk292348 = require("./292348.js"),
  Chunk566908 = require("./566908.js"),
  Chunk652215 = require("./652215.js");
async function c(e) {
  if (0 === e.length) return;
  let t = (0, a.I)(),
    n = await t.uploadFiles(e);
  if (t._aborted) throw Error("Upload aborted");
  return n.map((e, t) => (0, o.OW)(e, t))
}
async function u(e) {
  let {
    channelId: t,
    scheduledTimestamp: n,
    messageSendData: a,
    attachments: o,
    attachmentsToUpload: u
  } = e;
  i.h.dispatch({
    type: "SCHEDULED_MESSAGES_CREATE_START",
    channelId: t
  });
  try {
    let [e, d] = (0, s.UF)({
      content: a.content,
      flags: a.flags
    });
    null != u && (o = await c(u));
    let f = await r.Bo.post({
      url: l.Rsh.SCHEDULED_MESSAGES,
      body: {
        channel_id: t,
        content: e,
        scheduled_timestamp: n,
        flags: d,
        message_reference: a.message_reference,
        allowed_mentions: a.allowed_mentions,
        attachments: null != o ? o : []
      },
      rejectWithError: true
    });
    if (!f.ok) throw Error("Failed to create scheduled message");
    return i.h.dispatch({
      type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
      channelId: t,
      scheduledMessageSend: (0, s.Lg)(f.body)
    }), f
  } catch (n) {
    var d, f;
    s.dx.error("Failed to create scheduled message", n);
    let e = null != (d = null == (f = n.body) ? true : f.message) ? d : n.message;
    throw i.h.dispatch({
      type: "SCHEDULED_MESSAGES_CREATE_FAILURE",
      channelId: t,
      errorMsg: e
    }), Error(e)
  }
}
async function d(e, t) {
  i.h.dispatch({
    type: "SCHEDULED_MESSAGES_UPDATE_START",
    scheduledMessageId: e
  });
  try {
    let n = await r.Bo.patch({
      url: l.Rsh.SCHEDULED_MESSAGE(e),
      body: {
        scheduled_timestamp: t
      },
      rejectWithError: true
    });
    if (!n.ok) throw Error("Failed to update scheduled message");
    i.h.dispatch({
      type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS",
      scheduledMessageSend: (0, s.Lg)(n.body)
    })
  } catch (r) {
    var n, a;
    s.dx.error("Failed to update scheduled message", r);
    let t = null != (n = null == (a = r.body) ? true : a.message) ? n : r.message;
    throw i.h.dispatch({
      type: "SCHEDULED_MESSAGES_UPDATE_FAILURE",
      scheduledMessageId: e,
      errorMsg: t
    }), Error(t)
  }
}
async function f(e) {
  i.h.dispatch({
    type: "SCHEDULED_MESSAGES_DELETE_START",
    scheduledMessageId: e
  });
  try {
    if (!(await r.Bo.del({
        url: l.Rsh.SCHEDULED_MESSAGE(e),
        rejectWithError: true
      })).ok) throw Error("Failed to delete scheduled message");
    i.h.dispatch({
      type: "SCHEDULED_MESSAGES_DELETE_SUCCESS",
      scheduledMessageId: e
    })
  } catch (a) {
    var t, n;
    s.dx.error("Failed to cancel scheduled message", a);
    let r = null != (t = null == (n = a.body) ? true : n.message) ? t : a.message;
    throw i.h.dispatch({
      type: "SCHEDULED_MESSAGES_DELETE_FAILURE",
      scheduledMessageId: e,
      errorMsg: r
    }), Error(r)
  }
}
async function p() {
  let e = await r.Bo.get({
    url: l.Rsh.SCHEDULED_MESSAGES,
    rejectWithError: true
  });
  if (!e.ok) throw Error("Failed to fetch scheduled messages");
  return e.body.map(s.Lg)
}
async function _() {
  i.h.dispatch({
    type: "FETCH_SCHEDULED_MESSAGES"
  });
  try {
    let e = await p();
    s.dx.info("Fetched scheduled messages", e), i.h.dispatch({
      type: "FETCH_SCHEDULED_MESSAGES_SUCCESS",
      messages: e
    })
  } catch (e) {
    s.dx.error("Failed to fetch scheduled messages", e), i.h.dispatch({
      type: "FETCH_SCHEDULED_MESSAGES_FAILURE",
      error: e
    })
  }
}

function h(e) {
  let {
    channelId: t,
    scheduledTimestamp: n
  } = e;
  i.h.dispatch({
    type: "CREATE_PENDING_SCHEDULED_MESSAGE",
    channelId: t,
    scheduledTimestamp: n
  })
}

function m(e) {
  i.h.dispatch({
    type: "DELETE_PENDING_SCHEDULED_MESSAGE",
    channelId: e
  })
}