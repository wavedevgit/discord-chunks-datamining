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
    location: s,
    onConfirm: o,
    onCancel: l
  } = e, c = r.useCallback(() => {
    i.A.cancelFriendRequest({
      userId: t,
      applicationId: a ? n : null,
      location: s
    })
  }, [n, a, s, t]);
  return {
    acceptFriendRequest: r.useCallback(() => {
      i.A.maybeConfirmFriendRequestAccept({
        userId: t,
        applicationId: a ? n : null,
        location: s,
        onConfirm: o,
        onCancel: l
      })
    }, [n, a, s, l, o, t]),
    cancelFriendRequest: c
  }
}