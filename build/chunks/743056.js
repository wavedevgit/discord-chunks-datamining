/** Chunk was on web.js **/
/** chunk id: 743056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk298213 = require("./298213.js");

function o(e) {
  let {
    userId: t,
    applicationId: n,
    isGameRelationship: o,
    location: a,
    onConfirm: s,
    onCancel: l
  } = e, c = r.useCallback(() => {
    i.Z.cancelFriendRequest({
      userId: t,
      applicationId: o ? n : null,
      location: a
    })
  }, [n, o, a, t]);
  return {
    acceptFriendRequest: r.useCallback(() => {
      i.Z.maybeConfirmFriendRequestAccept({
        userId: t,
        applicationId: o ? n : null,
        location: a,
        onConfirm: s,
        onCancel: l
      })
    }, [n, o, a, l, s, t]),
    cancelFriendRequest: c
  }
}