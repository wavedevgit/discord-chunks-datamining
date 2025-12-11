/** Chunk was on 9536 **/
/** chunk id: 190007, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  HE: () => u,
  HZ: () => f,
  Pk: () => b,
  e$: () => p,
  l_: () => m,
  ss: () => x,
  xI: () => g
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
var Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk881052 = require("./881052.js"),
  Chunk823379 = require("./823379.js"),
  Chunk926958 = require("./926958.js"),
  Chunk570961 = require("./570961.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD",
    connection: e
  })
}

function g(e) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE",
    index: e
  })
}

function f(e, t) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE",
    index: e,
    updates: t
  })
}

function m(e) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER",
    connections: e
  })
}

function b() {
  Chunk570140.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET"
  })
}
async function p(e) {
  var t, n, u;
  let g = s.Z.getEditedConnections(),
    f = [];
  if (g.forEach(e => {
      let t = (0, c.t9)(e);
      f.push(...t)
    }), f.length > 0) throw h(f), i.Z.show({
    title: d.intl.string(d.t.ISppXw),
    body: f.join("\n")
  }), Error("failed to validate connections");
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT"
  });
  try {
    await (0, o.n_)(e, {
      connections: g
    }), t = e, n = g, r.Z.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS",
      guildId: t,
      connections: n
    })
  } catch (r) {
    let {
      fieldName: e,
      error: t
    } = null != (u = new l.Hx(r).getAnyErrorMessageAndField()) ? u : {}, n = [e, t].filter(a.lm).join(": ");
    throw h([n]), i.Z.show({
      title: d.intl.string(d.t.iLdiqY),
      body: n
    }), r
  }
}

function h(e) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED",
    errors: e
  })
}

function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t || s.Z.hasChanges() ? p(e) : Promise.resolve()
}