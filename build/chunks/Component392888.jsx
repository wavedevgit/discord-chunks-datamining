/** Chunk was on web.js **/
/** chunk id: 392888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => E,
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk147913 = require("./147913.js"),
  Chunk480294 = require("./480294.js"),
  Chunk9156 = require("./9156.js"),
  Chunk312400 = require("./312400.js"),
  Chunk115345 = require("./115345.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class g extends Chunk147913.Z {
  handlePostConnectionOpen() {
    !Chunk433517.K.get("turnedOffNewNotifications") && Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION) && Chunk312400.xT.getCurrentConfig({
      location: "NotificationMigrationManager"
    }, {
      autoTrackExposure: false
    }).enabled && (Chunk9156.ZP.useNewNotifications || (0 > Date.now() && this.checkOldUserExperiment(), this.checkNewUserExperiment()))
  }
  async checkOldUserExperiment() {
    let {
      logExposure: e,
      autoOpen: t
    } = Chunk312400.fs.getCurrentConfig({
      location: "NotificationMigrationManager"
    }, {
      autoTrackExposure: false
    });
    if (!module) return;
    let {
      body: {
        guild_noise: o,
        usage: s
      }
    } = await Chunk544891.tn.get({
      url: "/users/@me/notification-migration-data2",
      rejectWithError: false
    }), l = (0, Chunk115345._Y)(Chunk147913), {
      default: c
    } = await require.e("53512").then(require.bind(require, 753521));
    !(0, Chunk481060.$sL)() && (Chunk312400.fs.trackExposure({
      location: "NotificationMigrationManager"
    }), exports && ((0, Chunk115345.cG)(Chunk433517, Chunk480294) ? (0, Chunk481060.h7j)(e => (0, r.jsx)(c, m(p({}, e), {
      dismissable: false,
      guildPain: o,
      myUsage: l
    })), {
      onCloseRequest: () => {}
    }) : (0, Chunk115345.ly)()))
  }
  checkNewUserExperiment() {
    let {
      logExposure: e,
      enabled: t
    } = Chunk312400.ad.getCurrentConfig({
      location: "NotificationMigrationManager"
    }, {
      autoTrackExposure: false
    });
    module && (Chunk312400.ad.trackExposure({
      location: "NotificationMigrationManager"
    }), exports && (0, Chunk115345.ly)())
  }
  constructor(...e) {
    super(...e), _(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
async function E(e) {
  let {
    body: {
      guild_noise: t,
      usage: o
    }
  } = await i.tn.get({
    url: "/users/@me/notification-migration-data2",
    rejectWithError: false
  }), s = (0, d._Y)(o);
  (0, a.ZDy)(async () => {
    let {
      default: i
    } = await n.e("53512").then(n.bind(n, 753521));
    return n => (0, r.jsx)(i, m(p({}, n), {
      dismissable: e,
      guildPain: t,
      myUsage: s
    }))
  })
}
let b = new g