/** Chunk was on 17869 **/
/** chunk id: 888906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk73153 = require("./73153.js");
let r = {
  search(e, t) {
    l.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
      query: e,
      channelId: t
    })
  },
  clear(e) {
    l.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
      query: "",
      channelId: e
    })
  },
  select(e, t) {
    l.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT",
      row: t,
      section: e
    })
  },
  addUser(e) {
    l.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER",
      userId: e
    })
  },
  removeUser(e) {
    l.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER",
      userId: e
    })
  },
  open(e) {
    l.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN",
      channelId: e
    })
  },
  close() {
    l.h.dispatch({
      type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE"
    })
  }
}