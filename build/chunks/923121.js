/** Chunk was on 47841 **/
/** chunk id: 923121, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Bq: () => b,
  fH: () => h,
  p2: () => m,
  q3: () => p,
  sF: () => u,
  yM: () => g,
  zN: () => f
}), require("./321073.js"), require("./896048.js"), require("./65821.js");
var Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk198982 = require("./198982.js"),
  Chunk403362 = require("./403362.js"),
  Chunk352821 = require("./352821.js"),
  Chunk107795 = require("./107795.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD",
    connection: e
  })
}

function f(e) {
  r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE",
    index: e
  })
}

function g(e, t) {
  r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE",
    index: e,
    updates: t
  })
}

function b(e) {
  r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER",
    connections: e
  })
}

function m() {
  r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET"
  })
}
async function p(e) {
  var t, n, u;
  let f = a.A.getEditedConnections(),
    g = [];
  if (f.forEach(e => {
      let t = (0, o.Ii)(e);
      g.push(...t)
    }), g.length > 0) throw x(g), i.A.show({
    title: d.intl.string(d.t.ISppXw),
    body: g.join("\n")
  }), Error("failed to validate connections");
  r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT"
  });
  try {
    await (0, c.YN)(e, {
      connections: f
    }), t = e, n = f, r.h.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS",
      guildId: t,
      connections: n
    })
  } catch (r) {
    let {
      fieldName: e,
      error: t
    } = null != (u = new l.LG(r).getAnyErrorMessageAndField()) ? u : {}, n = [e, t].filter(s.Vq).join(": ");
    throw x([n]), i.A.show({
      title: d.intl.string(d.t.iLdiqY),
      body: n
    }), r
  }
}

function x(e) {
  r.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED",
    errors: e
  })
}

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t || a.A.hasChanges() ? p(e) : Promise.resolve()
}