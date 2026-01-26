/** Chunk was on 97887 **/
/** chunk id: 888906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk73153 = require("./73153.js");
let l = {
  search(e, t) {
    r.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
      query: e,
      channelId: t
    })
  },
  clear(e) {
    r.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
      query: "",
      channelId: e
    })
  },
  select(e) {
    r.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT",
      row: e
    })
  },
  addUser(e) {
    r.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER",
      userId: e
    })
  },
  removeUser(e) {
    r.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER",
      userId: e
    })
  },
  open(e) {
    r.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN",
      channelId: e
    })
  },
  close() {
    r.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE"
    })
  }
}