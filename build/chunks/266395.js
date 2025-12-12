/** Chunk was on web.js **/
/** chunk id: 266395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PE: () => u,
  a5: () => c,
  rb: () => l
});
var Chunk663042 = require("./663042.js"),
  Chunk731965 = require("./731965.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let s = Object.freeze({
    hasUnsubmittedChanges: false,
    shouldShowWarning: false
  }),
  l = (0, Chunk663042.U)(e => s),
  c = e => {
    (0, i.j)(() => l.setState({
      hasUnsubmittedChanges: e
    }))
  },
  u = e => {
    (0, i.j)(() => l.setState({
      shouldShowWarning: e
    })), e && o.S.dispatch(a.CkL.EMPHASIZE_NOTICE)
  }