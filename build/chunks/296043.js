/** Chunk was on web.js **/
/** chunk id: 296043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bl: () => N,
  Gv: () => v,
  I5: () => b,
  fK: () => C,
  h0: () => T,
  sW: () => w,
  wy: () => S
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk587895 = require("./587895.js"),
  Chunk113267 = require("./113267.js"),
  Chunk867455 = require("./867455.js"),
  Chunk961350 = require("./961350.js"),
  Chunk661191 = require("./661191.js"),
  Chunk706727 = require("./706727.js"),
  Chunk436283 = require("./436283.js"),
  Chunk337591 = require("./337591.js"),
  Chunk616716 = require("./616716.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function b(e) {
  return null == e || "" === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 9e5
}

function O(e) {
  return null == e || "" === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 3e3
}
let v = async e => {
  let {
    componentType: t,
    messageId: n,
    messageFlags: i,
    customId: a,
    componentId: s,
    applicationId: l,
    channelId: _,
    guildId: h,
    localState: g
  } = e, E = d.default.fromTimestamp(Date.now());
  if (!p.Ay.canQueueInteraction(n, E)) return;
  await c.A.unarchiveThreadIfNecessary(_), (0, f.tU)(E, {
    messageId: n,
    data: {
      interactionType: o.G4.MESSAGE_COMPONENT,
      applicationId: l,
      customId: a,
      componentId: s
    },
    onFailure: (e, t) => I(_, e, t)
  }), null != g && (0, f.Sw)(n, E, g, s);
  let b = {
    type: o.G4.MESSAGE_COMPONENT,
    nonce: E,
    guild_id: h,
    channel_id: _,
    message_flags: i,
    message_id: n,
    application_id: l,
    session_id: u.default.getSessionId(),
    data: y({
      component_type: t,
      custom_id: a
    }, A(g))
  };
  await r.Bo.post({
    url: m.Rsh.INTERACTIONS,
    body: b,
    timeout: 3e3,
    rejectWithError: false
  }, e => {
    S(E, e, l, _, h)
  })
};

function A(e) {
  if (null == e) return null;
  switch (e.type) {
    case o.I5.TEXT_INPUT:
    case o.I5.FILE_UPLOAD:
    case o.I5.RADIO_GROUP:
    case o.I5.CHECKBOX_GROUP:
    case o.I5.CHECKBOX:
      return null;
    case o.I5.STRING_SELECT:
      return e;
    case o.I5.USER_SELECT:
    case o.I5.ROLE_SELECT:
    case o.I5.MENTIONABLE_SELECT:
    case o.I5.CHANNEL_SELECT:
      let t = e.selectedOptions.map(e => e.value);
      return {
        type: e.type, values: t
      };
    default:
      return null
  }
}
let I = (e, t, n) => {
    null == n && null != t && a.A.sendClydeError(e, t)
  },
  S = (e, t, n, r, a) => {
    if (!t.ok) {
      if (!t.hasErr)
        if (t.status >= 400 && t.status < 500 && t.body)
          if (t.body.code === m.t02.INVALID_FORM_BODY && t.body.errors) {
            let o = (0, h.W)(t.body.errors);
            null != o && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === o.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === o.code) && i.h.dispatch({
              type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
              applicationId: n,
              channelId: r,
              guildId: null != a ? a : null
            }), (0, f.C1)(e, true, null == o ? true : o.message);
            return
          } else return t.body.code !== m.t02.UNKNOWN_INTEGRATION ? void(0, f.C1)(e, t.body.code, t.body.message, t.status) : (i.h.dispatch({
            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
            applicationId: n,
            channelId: r,
            guildId: null != a ? a : null
          }), (0, f.C1)(e, true, t.body.message), true);
      else {
        var o;
        (0, f.C1)(e, null == (o = t.body) ? true : o.code);
        return
      }(0, f.C1)(e)
    }
  };
var T = function(e) {
  return e[e.SENDING = 0] = "SENDING", e[e.CREATED = 1] = "CREATED", e[e.FAILED = 2] = "FAILED", e[e.TIMED_OUT = 3] = "TIMED_OUT", e[e.EPHEMERAL_SUCCESS = 4] = "EPHEMERAL_SUCCESS", e
}({});
let C = (e, t) => {
  let n = null == t ? true : t.state,
    r = e.state === m.cmJ.SENT && b(e.id) < Date.now(),
    i = e.state === m.cmJ.SEND_FAILED && O(e.id) < Date.now(),
    a = (null == t ? true : t.data.interactionType) === o.G4.APPLICATION_COMMAND,
    s = e.isCommandType();
  if (a && n === _.m.QUEUED || s && e.state === m.cmJ.SENDING && null != t) return 0;
  if (a && n === _.m.CREATED || e.hasFlag(m.pr7.LOADING) && !r) return 1;
  if (null != e.interaction && e.hasFlag(m.pr7.LOADING) && r) return 3;
  if (null != e.interaction && !e.hasFlag(m.pr7.LOADING) && i) return 3;
  if (s && e.state === m.cmJ.SEND_FAILED) return 2;
  else if (null != e.interaction && e.hasFlag(m.pr7.EPHEMERAL)) return 4
};

function N(e) {
  let t = e.options;
  for (;
    (null == t ? true : t.length) === 1 && (t[0].type === o.n4.SUB_COMMAND_GROUP || t[0].type === o.n4.SUB_COMMAND);) t = t[0].options;
  for (let e of null != t ? t : [])
    if (e.type === o.n4.ATTACHMENT) returnfalse;
  returntrue
}

function w(e, t) {
  switch (e) {
    case l.A.ReasonCodes.TIMEOUT:
      let n = s.A.getApplication(t);
      if (null != n) return g.intl.formatToPlainString(g.t.u2D2Uj, {
        applicationName: n.name
      });
      return g.intl.string(g.t["vGU8+r"]);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
      return g.intl.string(g.t.GyzcrS);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
      return g.intl.string(g.t.hHGrWz);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
      return g.intl.string(g.t.j29zCr);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
      return g.intl.string(g.t["4WuFRE"]);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
      return g.intl.string(g.t.RvkXdb);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
      return g.intl.string(g.t.uGDCcw);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
      return g.intl.string(g.t.WjNAAA);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
      return g.intl.string(g.t.PtobXW);
    case l.A.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
      return g.intl.string(g.t.PrHIM5)
  }
}