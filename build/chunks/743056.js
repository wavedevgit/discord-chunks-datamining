/** Chunk was on web.js **/
/** chunk id: 743056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk298213 = require("./298213.js");

function a(e) {
  let {
    userId: t,
    applicationId: n,
    isGameRelationship: a,
    location: o,
    onConfirm: s,
    onCancel: l
  } = e, c = r.useCallback(() => {
    i.Z.cancelFriendRequest({
      userId: t,
      applicationId: a ? n : null,
      location: o
    })
  }, [n, a, o, t]);
  return {
    acceptFriendRequest: r.useCallback(() => {
      i.Z.maybeConfirmFriendRequestAccept({
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