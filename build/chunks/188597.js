/** Chunk was on web.js **/
/** chunk id: 188597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $s: () => N,
  A0: () => P,
  Sg: () => T,
  ow: () => y,
  rQ: () => C,
  t$: () => A,
  tM: () => v
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk812206 = require("./812206.js"),
  Chunk375824 = require("./375824.js"),
  Chunk346479 = require("./346479.js"),
  Chunk314897 = require("./314897.js"),
  Chunk709054 = require("./709054.js"),
  Chunk603721 = require("./603721.js"),
  Chunk282397 = require("./282397.js"),
  Chunk622449 = require("./622449.js"),
  Chunk96989 = require("./96989.js"),
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

function y(e) {
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
    customId: o,
    componentId: s,
    applicationId: l,
    channelId: _,
    guildId: m,
    localState: g
  } = e, E = d.default.fromTimestamp(Date.now());
  if (!p.ZP.canQueueInteraction(n, E)) return;
  await c.Z.unarchiveThreadIfNecessary(_), (0, f.kz)(E, {
    messageId: n,
    data: {
      interactionType: a.B8.MESSAGE_COMPONENT,
      applicationId: l,
      customId: o,
      componentId: s
    },
    onFailure: (e, t) => I(_, e, t)
  }), null != g && (0, f.B0)(n, E, g, s);
  let y = {
    type: a.B8.MESSAGE_COMPONENT,
    nonce: E,
    guild_id: m,
    channel_id: _,
    message_flags: i,
    message_id: n,
    application_id: l,
    session_id: u.default.getSessionId(),
    data: b({
      component_type: t,
      custom_id: o
    }, S(g))
  };
  await r.tn.post({
    url: h.ANM.INTERACTIONS,
    body: y,
    timeout: 3e3,
    rejectWithError: false
  }, e => {
    T(E, e, l, _, m)
  })
};

function S(e) {
  if (null == e || e.type === a.re.TEXT_INPUT || e.type === a.re.FILE_UPLOAD) return null;
  if (e.type === a.re.STRING_SELECT) return e;
  let t = e.selectedOptions.map(e => e.value);
  return {
    type: e.type,
    values: t
  }
}
let I = (e, t, n) => {
    null == n && null != t && o.Z.sendClydeError(e, t)
  },
  T = (e, t, n, r, o) => {
    if (!t.ok) {
      if (!t.hasErr)
        if (t.status >= 400 && t.status < 500 && t.body)
          if (t.body.code === h.evJ.INVALID_FORM_BODY && t.body.errors) {
            let a = (0, m.e)(t.body.errors);
            null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && i.Z.dispatch({
              type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
              applicationId: n,
              channelId: r,
              guildId: null != o ? o : null
            }), (0, f.yr)(e, true, null == a ? true : a.message);
            return
          } else return t.body.code !== h.evJ.UNKNOWN_INTEGRATION ? void(0, f.yr)(e, t.body.code, t.body.message, t.status) : (i.Z.dispatch({
            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
            applicationId: n,
            channelId: r,
            guildId: null != o ? o : null
          }), (0, f.yr)(e, true, t.body.message), true);
      else {
        var a;
        (0, f.yr)(e, null == (a = t.body) ? true : a.code);
        return
      }(0, f.yr)(e)
    }
  };
var C = function(e) {
  return e[e.SENDING = 0] = "SENDING", e[e.CREATED = 1] = "CREATED", e[e.FAILED = 2] = "FAILED", e[e.TIMED_OUT = 3] = "TIMED_OUT", e[e.EPHEMERAL_SUCCESS = 4] = "EPHEMERAL_SUCCESS", e
}({});
let A = (e, t) => {
  let n = null == t ? true : t.state,
    r = e.state === h.yb.SENT && y(e.id) < Date.now(),
    i = e.state === h.yb.SEND_FAILED && O(e.id) < Date.now(),
    o = (null == t ? true : t.data.interactionType) === a.B8.APPLICATION_COMMAND,
    s = e.isCommandType();
  if (o && n === _.F.QUEUED || s && e.state === h.yb.SENDING && null != t) return 0;
  if (o && n === _.F.CREATED || e.hasFlag(h.iLy.LOADING) && !r) return 1;
  if (null != e.interaction && e.hasFlag(h.iLy.LOADING) && r) return 3;
  if (null != e.interaction && !e.hasFlag(h.iLy.LOADING) && i) return 3;
  if (s && e.state === h.yb.SEND_FAILED) return 2;
  else if (null != e.interaction && e.hasFlag(h.iLy.EPHEMERAL)) return 4
};

function N(e) {
  let t = e.options;
  for (;
    (null == t ? true : t.length) === 1 && (t[0].type === a.jw.SUB_COMMAND_GROUP || t[0].type === a.jw.SUB_COMMAND);) t = t[0].options;
  for (let e of null != t ? t : [])
    if (e.type === a.jw.ATTACHMENT) returnfalse;
  returntrue
}

function P(e, t) {
  switch (e) {
    case l.Z.ReasonCodes.TIMEOUT:
      let n = s.Z.getApplication(t);
      if (null != n) return g.intl.formatToPlainString(g.t.u2D2Uj, {
        applicationName: n.name
      });
      return g.intl.string(g.t["vGU8+r"]);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT:
      return g.intl.string(g.t.GyzcrS);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_VERIFICATION_LEVEL:
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_PERMISSIONS:
      return g.intl.string(g.t.hHGrWz);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_CHANNEL:
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_UNKNOWN_GUILD:
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_TYPE:
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK:
      return g.intl.string(g.t.j29zCr);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_AGE_GATE:
      return g.intl.string(g.t["4WuFRE"]);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_DEV_PREVIEW_GUILD_SIZE:
      return g.intl.string(g.t.RvkXdb);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_SUPPORTED:
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_CONFIGURATION_PLATFORM_NOT_RELEASED:
      return g.intl.string(g.t.uGDCcw);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY:
      return g.intl.string(g.t.WjNAAA);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_LOCATION_TYPE:
      return g.intl.string(g.t.PtobXW);
    case l.Z.ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION:
      return g.intl.string(g.t.PrHIM5)
  }
}