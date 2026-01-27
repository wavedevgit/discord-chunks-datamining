/** Chunk was on web.js **/
/** chunk id: 612630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk279263 = require("./279263.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let t = (0, i.bG)([s.A], () => s.A.getNote(e));
  return r.useEffect(() => {
    null == t && u(e)
  }, [t, e]), null != t ? t : {
    loading: true,
    note: null
  }
}
async function u(e) {
  o.h.dispatch({
    type: "USER_NOTE_LOAD_START",
    userId: e
  });
  try {
    let {
      body: t
    } = await a.Bo.get({
      url: l.Rsh.NOTE(e),
      oldFormErrors: true,
      rejectWithError: true
    });
    if (t.note_user_id !== e) throw Error("Invalid response from server");
    o.h.dispatch({
      type: "USER_NOTE_UPDATE",
      id: e,
      note: t.note
    })
  } catch (t) {
    o.h.dispatch({
      type: "USER_NOTE_UPDATE",
      id: e
    })
  }
}