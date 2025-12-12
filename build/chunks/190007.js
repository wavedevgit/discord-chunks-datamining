/** Chunk was on 384 **/
/** chunk id: 190007, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  HE: () => d,
  HZ: () => m,
  Pk: () => f,
  e$: () => h,
  l_: () => p,
  ss: () => b,
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

function d(e) {
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

function m(e, t) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE",
    index: e,
    updates: t
  })
}

function p(e) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER",
    connections: e
  })
}

function f() {
  Chunk570140.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET"
  })
}
async function h(e) {
  var t, n, d;
  let g = a.Z.getEditedConnections(),
    m = [];
  if (g.forEach(e => {
      let t = (0, c.t9)(e);
      m.push(...t)
    }), m.length > 0) throw x(m), i.Z.show({
    title: u.intl.string(u.t.ISppXw),
    body: m.join("\n")
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
    } = null != (d = new l.Hx(r).getAnyErrorMessageAndField()) ? d : {}, n = [e, t].filter(s.lm).join(": ");
    throw x([n]), i.Z.show({
      title: u.intl.string(u.t.iLdiqY),
      body: n
    }), r
  }
}

function x(e) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED",
    errors: e
  })
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t || a.Z.hasChanges() ? h(e) : Promise.resolve()
}