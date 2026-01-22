/** Chunk was on 7726 **/
/** chunk id: 79680, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk142120 = require("./142120.js"),
  Chunk345942 = require("./345942.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");
let c = {
  acceptGuildTemplate: (e, t, r) => (l.h.dispatch({
    type: "GUILD_TEMPLATE_ACCEPT",
    code: e
  }), new Promise((c, u) => {
    s.Bo.post({
      url: d.Rsh.UNRESOLVED_GUILD_TEMPLATE(e),
      body: {
        name: t,
        icon: r
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => {
      let r = t.body;
      l.h.dispatch({
        type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
        code: e,
        guild: r
      }), n.A.isConnected() ? a.A.addConditionalChangeListener(() => {
        if (null != a.A.getGuild(r.id)) return (0, i.u)(r.id), c(r), false
      }) : ((0, i.u)(r.id), c(r))
    }, t => {
      l.h.dispatch({
        type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
        code: e
      }), u(t.body)
    })
  }))
}