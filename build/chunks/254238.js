/** Chunk was on web.js **/
/** chunk id: 254238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LO: () => N,
  On: () => T,
  Vv: () => S,
  _: () => I,
  bp: () => P,
  ef: () => v,
  s6: () => O,
  sh: () => D
}), require("./539854.js"), require("./388685.js");
var Chunk434179 = require("./434179.js"),
  Chunk771649 = require("./771649.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk340332 = require("./340332.js"),
  Chunk19780 = require("./19780.js"),
  Chunk797258 = require("./797258.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk607214 = require("./607214.js"),
  Chunk258609 = require("./258609.js"),
  Chunk893387 = require("./893387.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n, r;
  d.default.track(h.rMx.REMOTE_COMMAND_SENT, {
    command_type: e,
    remote_platform: null == (r = u.Z.getSessionById(t)) || null == (n = r.clientInfo) ? true : n.os
  })
}
async function O() {
  let e = _.default.getAwaitingRemoteSessionInfo(),
    t = null == e ? true : e.nonce;
  o.Z.dispatch({
    type: "REMOTE_SESSION_DISCONNECT"
  });
  let n = [];
  ((null == e ? true : e.type) === h.ABu.PLAYSTATION || (null == e ? true : e.type) === h.ABu.PLAYSTATION_STAGING) && (null == e ? true : e.commandId) != null && (null == e ? true : e.deviceId) != null && n.push(w(e.type, e.deviceId, e.commandId)), null != t && n.push(A(t));
  try {
    await Promise.all(n)
  } catch (e) {
    s.Z.show({
      title: g.intl.string(g.t.LNhXcL),
      body: g.intl.string(g.t.QnKxtP)
    })
  }
}

function v(e) {
  o.Z.dispatch({
    type: "REMOTE_SESSION_CONNECT",
    sessionId: e
  })
}

function S(e, t) {
  let {
    selfMute: n,
    selfDeaf: r
  } = t;
  o.Z.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: {
      type: "VOICE_STATE_UPDATE",
      self_mute: n,
      self_deaf: r
    }
  }), y("VOICE_STATE_UPDATE", e)
}

function I(e) {
  o.Z.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: {
      type: "DISCONNECT"
    }
  }), y("DISCONNECT", e), O()
}

function T(e, t, n, r) {
  let i = (0, l.z)(n);
  null != i && (o.Z.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: b({
      type: "AUDIO_SETTINGS_UPDATE",
      context: i,
      id: t
    }, r)
  }), y("AUDIO_SETTINGS_UPDATE", e))
}
async function C() {
  let e;
  try {
    let t = null != c.Z.getRTCConnectionId() ? i.o.TRANSFER_EXISTING_CALL : i.o.CREATE_NEW_CALL;
    e = (await a.tn.post({
      url: h.ANM.CONNECT_REQUEST_CREATE,
      body: {
        analytics_properties: {
          handoff_type: t
        }
      },
      rejectWithError: false
    })).body.nonce
  } catch (e) {
    f.Z.captureException(e)
  }
  return e
}

function A(e) {
  return a.tn.del({
    url: h.ANM.CONNECT_REQUEST(e),
    rejectWithError: false
  })
}
async function N(e) {
  let t;
  o.Z.dispatch({
    type: "GAME_CONSOLE_FETCH_DEVICES_START",
    platform: e
  });
  try {
    t = await a.tn.get({
      url: h.ANM.CONSOLES_DEVICES(e),
      rejectWithError: false
    })
  } catch (t) {
    throw o.Z.dispatch({
      type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
      platform: e,
      error: t
    }), t
  }
  let n = t.body.devices;
  return o.Z.dispatch({
    type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
    platform: e,
    devices: n
  }), n
}

function P(e, t) {
  o.Z.dispatch({
    type: "GAME_CONSOLE_SELECT_DEVICE",
    platform: e,
    deviceId: t
  })
}
async function R(e, t, n, i) {
  let s;
  o.Z.dispatch({
    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
    platform: e
  });
  try {
    s = await a.tn.post({
      url: h.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
      body: {
        command: r.n.CONNECT_VOICE,
        channel_id: n.id,
        guild_id: n.guild_id,
        nonce: i
      },
      rejectWithError: false
    })
  } catch (t) {
    throw o.Z.dispatch({
      type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
      platform: e,
      error: t
    }), t
  }
  let l = s.body.id;
  return o.Z.dispatch({
    type: "WAIT_FOR_REMOTE_SESSION",
    sessionType: e,
    nonce: i,
    channelId: n.id,
    deviceId: t,
    commandId: l
  }), l
}
async function w(e, t, n) {
  o.Z.dispatch({
    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
    platform: e,
    deviceId: t,
    commandId: n
  });
  try {
    await a.tn.del({
      url: h.ANM.CONSOLES_DEVICES_COMMAND(e, t, n),
      rejectWithError: false
    })
  } catch (r) {
    throw o.Z.dispatch({
      type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
      platform: e,
      deviceId: t,
      commandId: n,
      error: r
    }), r
  }
  o.Z.dispatch({
    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
    platform: e,
    deviceId: t,
    commandId: n
  })
}
async function D(e, t, n) {
  await p.Z.maybeShowPTTAlert(e), await O();
  let r = await C();
  await R(e, t, n, r), (0, m.Z)(n.id, e)
}