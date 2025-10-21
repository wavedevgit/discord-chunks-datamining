/** Chunk was on 10778 **/
/** chunk id: 350566, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk38618 = require("./38618.js"),
  Chunk769654 = require("./769654.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");
let d = {
  acceptGuildTemplate: (e, t, n) => (i.Z.dispatch({
    type: "GUILD_TEMPLATE_ACCEPT",
    code: e
  }), new Promise((d, u) => {
    r.tn.post({
      url: c.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
      body: {
        name: t,
        icon: n
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => {
      let n = t.body;
      i.Z.dispatch({
        type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
        code: e,
        guild: n
      }), l.Z.isConnected() ? a.Z.addConditionalChangeListener(() => {
        if (null != a.Z.getGuild(n.id)) return (0, s.X)(n.id), d(n), false
      }) : ((0, s.X)(n.id), d(n))
    }, t => {
      i.Z.dispatch({
        type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
        code: e
      }), u(t.body)
    })
  }))
}