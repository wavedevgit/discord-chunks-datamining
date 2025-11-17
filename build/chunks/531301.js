/** Chunk was on web.js **/
/** chunk id: 531301, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk432835 = require("./432835.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = (0, i.e7)([s.Z], () => s.Z.getNote(e));
  return r.useEffect(() => {
    null == t && u(e)
  }, [t, e]), null != t ? t : {
    loading: true,
    note: null
  }
}
async function u(e) {
  o.Z.dispatch({
    type: "USER_NOTE_LOAD_START",
    userId: e
  });
  try {
    let {
      body: t
    } = await a.tn.get({
      url: l.ANM.NOTE(e),
      oldFormErrors: true,
      rejectWithError: true
    });
    if (t.note_user_id !== e) throw Error("Invalid response from server");
    o.Z.dispatch({
      type: "USER_NOTE_UPDATE",
      id: e,
      note: t.note
    })
  } catch (t) {
    o.Z.dispatch({
      type: "USER_NOTE_UPDATE",
      id: e
    })
  }
}