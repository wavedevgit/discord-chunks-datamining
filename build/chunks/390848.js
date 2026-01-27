/** Chunk was on web.js **/
/** chunk id: 390848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk607272 = require("./607272.js");

function a(e) {
  let {
    userId: t,
    applicationId: n,
    isGameRelationship: a,
    location: o,
    onConfirm: s,
    onCancel: l
  } = e, c = r.useCallback(() => {
    i.A.cancelFriendRequest({
      userId: t,
      applicationId: a ? n : null,
      location: o
    })
  }, [n, a, o, t]);
  return {
    acceptFriendRequest: r.useCallback(() => {
      i.A.maybeConfirmFriendRequestAccept({
        userId: t,
        applicationId: a ? n : null,
        location: o,
        onConfirm: s,
        onCancel: l
      })
    }, [n, a, o, l, s, t]),
    cancelFriendRequest: c
  }
}