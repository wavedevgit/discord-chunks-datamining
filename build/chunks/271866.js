/** Chunk was on web.js **/
/** chunk id: 271866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SH: () => h,
  cL: () => _,
  q1: () => p
}), require("./65821.js"), require("./938796.js"), require("./747238.js");
var Chunk665260 = require("./665260.js"),
  Chunk73153 = require("./73153.js"),
  Chunk795816 = require("./795816.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk793943 = require("./793943.js"),
  Chunk611010 = require("./611010.js"),
  Chunk998218 = require("./998218.js"),
  Chunk110782 = require("./110782.js"),
  Chunk652215 = require("./652215.js");
async function p(e, t) {
  i.h.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    if (!await (0, a.Ir)(e)) throw Error("Do not have access!");
    let n = o.A.getApplication(e);
    null == n && (n = c.Ay.createFromServer(await s.Ay.fetchApplication(e)));
    let l = (0, r.Lt)(n.flags, f.gfo.EMBEDDED);
    if (l && (null == t || !u.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return l || d.Cd(n), i.h.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: l ? t : null
    }), n
  } catch (t) {
    return i.h.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function _() {
  l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(), i.h.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function h() {
  l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(), i.h.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}