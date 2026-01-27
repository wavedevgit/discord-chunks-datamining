/** Chunk was on web.js **/
/** chunk id: 292572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./228524.js"), require("./492834.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk954571 = require("./954571.js"),
  Chunk177773 = require("./177773.js"),
  Chunk652215 = require("./652215.js");
let l = new Map;

function c(e) {
  if (i.h.isDispatching()) return Promise.resolve().then(() => c(e));
  let t = l.get(e);
  if (null != t) return t;
  i.h.dispatch({
    type: "GUILD_TEMPLATE_RESOLVE",
    code: e
  });
  let n = r.Bo.get({
    url: s.Rsh.UNRESOLVED_GUILD_TEMPLATE(e),
    oldFormErrors: true,
    rejectWithError: true
  }).then(t => {
    let n = t.body;
    return a.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
      resolved: true,
      guild_template_code: e,
      guild_template_name: n.name,
      guild_template_description: n.description,
      guild_template_guild_id: n.source_guild_id
    }), i.h.dispatch({
      type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
      guildTemplate: n,
      code: e
    }), {
      guildTemplate: (0, o.A)(n),
      code: e
    }
  }, () => (a.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
    resolved: false,
    guild_template_code: e
  }), i.h.dispatch({
    type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
    code: e
  }), {
    guildTemplate: null,
    code: e
  })).finally(() => {
    l.delete(e)
  });
  return l.set(e, n), n
}
let u = {
  resolveGuildTemplate: c,
  loadTemplatesForGuild: e => r.Bo.get({
    url: s.Rsh.GUILD_TEMPLATES(e),
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (i.h.dispatch({
    type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
    guildTemplates: e.body
  }), e)),
  createGuildTemplate: (e, t, n) => r.Bo.post({
    url: s.Rsh.GUILD_TEMPLATES(e),
    body: {
      name: t,
      description: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    i.h.dispatch({
      type: "GUILD_TEMPLATE_CREATE_SUCCESS",
      guildTemplate: e.body,
      code: e.body.code
    })
  }),
  syncGuildTemplate: (e, t) => r.Bo.put({
    url: s.Rsh.GUILD_TEMPLATE(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    i.h.dispatch({
      type: "GUILD_TEMPLATE_SYNC_SUCCESS",
      guildTemplate: e.body,
      code: t
    })
  }),
  updateGuildTemplate: (e, t, n, a) => r.Bo.patch({
    url: s.Rsh.GUILD_TEMPLATE(e, t),
    body: {
      name: n,
      description: a
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    i.h.dispatch({
      type: "GUILD_TEMPLATE_SYNC_SUCCESS",
      guildTemplate: e.body,
      code: t
    })
  }),
  deleteGuildTemplate: (e, t) => r.Bo.del({
    url: s.Rsh.GUILD_TEMPLATE(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => {
    i.h.dispatch({
      type: "GUILD_TEMPLATE_DELETE_SUCCESS",
      guildId: e,
      code: t
    })
  })
}