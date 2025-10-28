/** Chunk was on web.js **/
/** chunk id: 654769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => F,
  Z: () => en
}), require("./388685.js"), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./358797.js"), require("./539854.js"), require("./997841.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk525654 = require("./525654.js"),
  s = require.n(Chunk525654),
  Chunk579806 = require("./579806.js"),
  Chunk933557 = require("./933557.js"),
  Chunk710845 = require("./710845.js"),
  Chunk336197 = require("./336197.js"),
  Chunk847830 = require("./847830.js"),
  Chunk811627 = require("./811627.js"),
  Chunk863065 = require("./863065.js"),
  Chunk691294 = require("./691294.js"),
  Chunk460181 = require("./460181.js"),
  Chunk474873 = require("./474873.js"),
  Chunk135906 = require("./135906.js"),
  Chunk378233 = require("./378233.js"),
  Chunk592125 = require("./592125.js"),
  Chunk292959 = require("./292959.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk5192 = require("./5192.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)(),
  j = k && 10 > parseFloat(Chunk579806.Z.os.release),
  U = true;
if (k && !j) {
  let [e, , t] = Chunk579806.Z.os.release.split(".");
  U = parseInt(module) > 10 || parseInt(exports) >= 15063
}
let G = new Chunk710845.Z("NotificationUtils"),
  B = k && U || "Chrome" === s().name && 47 > parseFloat(s().version) || "Firefox" === s().name && 52 > parseFloat(s().version);
async function Z() {
  if (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) try {
    return await Chunk998502.ZP.invoke("NOTIFICATIONS_GET_SETTINGS")
  } catch (e) {
    G.warn("Fetching native notification settings failed with error: ", module)
  }
  return null
}

function F(e) {
  return "discord://".concat(location.host).concat(e)
}

function V(e) {
  try {
    let t = new URL(e, location.origin);
    if ("discord:" === t.protocol) return t.pathname
  } catch (e) {}
  return null
}
async function H() {
  let e = await Z();
  return (null == module ? true : module.authorizationStatus) === "authorized" && (null == module ? true : module.sound) === true
}

function Y(e, t) {
  var n;
  return null != (n = (0, E.Z)(null != t ? t : g.Z.getSoundpack())[e]) ? n : e
}
async function W(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : true;
  if (await H()) try {
    await P.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
      sound: Y(e, n)
    });
    return
  } catch (e) {
    G.warn("Native notification sound failed with error: ", e)
  }(0, m.GN)(e, t, true, n)
}
let K = a().throttle(W, 1e3, {
  leading: true
});

function z() {
  Chunk998502.ZP.flashFrame(false)
}
k && (window.addEventListener("focus", z), Chunk998502.ZP.on("MAIN_WINDOW_FOCUS", z));
let q = window.Notification;
if (j) {
  let e = {};
  Chunk998502.ZP.on("NOTIFICATION_CLICK", (t, n) => {
    let r = e[n];
    null != r && (r.onclick(), r.close())
  }), Chunk998502.ZP.send("NOTIFICATIONS_CLEAR"), r = class {
    static requestPermission(e) {
      e()
    }
    close() {
      null != module[this.id] && (delete module[this.id], Chunk998502.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose())
    }
    constructor(t, {
      body: n,
      icon: r
    }) {
      D(this, "id", q._id++), D(this, "title", true), D(this, "body", true), D(this, "icon", true), D(this, "onshow", function() {}), D(this, "onclick", function() {}), D(this, "onclose", function() {}), t.includes("\0") ? (G.warn("Notification title contains null character, setting to empty string"), this.title = "") : this.title = t, n.includes("\0") ? (G.warn("Notification body contains null character, setting to empty string"), this.body = "") : this.body = n, this.icon = r, setImmediate(() => this.onshow()), e[this.id] = this, P.ZP.send("NOTIFICATION_SHOW", {
        id: this.id,
        title: this.title,
        body: this.body,
        icon: this.icon
      })
    }
  }, D(r, "permission", "granted"), D(r, "_id", 0), q = r
}
let X = {};
if (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) {
  try {
    Chunk998502.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
      if ("dismiss" === t) return void delete X[n];
      {
        let e = X[n];
        if (R.isPlatformEmbedded ? P.ZP.focus() : window.focus(), null != e) {
          var a, o, s;
          (null == (a = e.options) ? true : a.omitClickTracking) || (S.default.track(w.rMx.NOTIFICATION_ACTION, L({
            action: "CLICK"
          }, e.trackingProps)), S.default.track(w.rMx.NOTIFICATION_CLICKED, e.clickTrackingProps)), null == (s = e.options) || null == (o = s.onClick) || o.call(s, r);
          return
        }
        if (null != i) {
          let e = V(i);
          null != e && (0, d.Z)(e)
        }
      }
    }), Chunk998502.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS")
  } catch (e) {
    G.warn("Native notification setup failed with error: ", module)
  }(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications_provisional")) && $().then(e => {
    e || P.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION", true).catch(() => {})
  })
}

function Q(e) {
  if (null === l.Z || true === l.Z ? true : l.Z.features.supports("notifications")) try {
    P.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION").then(t => {
      e(t)
    }).catch(() => {
      e(false)
    });
    return
  } catch (e) {
    G.warn("Native notification authorization failed with error: ", e)
  }
  null != q && q.requestPermission(async () => {
    null != e && e(await J())
  })
}
async function J() {
  if (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) {
    let e = await Z();
    return (null == module ? true : module.authorizationStatus) === "authorized" || (null == module ? true : module.authorizationStatus) === "provisional"
  }
  return null != q && "granted" === q.permission
}
async function $() {
  if (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) {
    var e;
    return (null == (e = await Z()) ? true : module.authorizationStatus) !== "undetermined"
  }
  return null != q && "default" !== q.permission
}

function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : true;
  e.includes("message") ? K(e, t, n) : W(e, t, n)
}
async function et(e, t, n, r, i) {
  var a, o, s, l, u, d, m;
  let g, E = await Z(),
    D = (null == E ? true : E.authorizationStatus) === "authorized" || (null == E ? true : E.authorizationStatus) === "provisional",
    x = null != E ? D : await J(),
    j = D,
    F = I.Z.disableNotifications && null == i.overrideStreamerMode,
    V = !R.isPlatformEmbedded || (0, R.isMac)() && j || P.ZP.shouldDisplayNotifications(),
    H = !F && x && V,
    W = M(L({}, r), {
      action: true,
      ping: true,
      banner: true,
      badge: true
    }),
    K = W,
    z = W;
  if (r.banner = await (0, p.K)(), !H) {
    null != i.sound && false !== i.playSoundIfDisabled && (ee(i.sound, null != (a = i.volume) ? a : 1, i.soundpack), r.ping = true, i.omitViewTracking || S.default.track(w.rMx.NOTIFICATION_ACTION, L({
      action: "VIEW"
    }, r)));
    return
  }
  t.includes("\0") && (G.warn("Notification title contains null character, setting to empty string"), t = ""), n.includes("\0") && (G.warn("Notification body contains null character, setting to empty string"), n = "");
  let Q = null != (o = null == i ? true : i.tag) ? o : null,
    $ = j && (null == E ? true : E.sound) === true && (null == E ? true : E.authorizationStatus) === "authorized",
    et = (e, t) => {
      var n;
      null == (n = i.onShown) || n.call(i), i.omitViewTracking || (S.default.track(w.rMx.NOTIFICATION_ACTION, L({
        action: "VIEW"
      }, t)), S.default.track(w.rMx.NOTIFICATION_VIEWED, z)), B && setTimeout(() => e.close(), 5e3)
    };
  if (null == i.sound || $ || (ee(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), r.ping = true), i.isUserAvatar && null != e && (e = await (0, h.D)(e)), k && O.Z.taskbarFlash && P.ZP.flashFrame(true), j) {
    let a = {
      title: t,
      body: n
    };
    null != e && (a.icon = e), (null == i ? true : i.sound) != null && (a.sound = Y(i.sound, i.soundpack)), (null == i ? true : i.tag) != null && (a.identifier = i.tag), (null == i ? true : i.fallbackDeepLink) != null && (a.fallbackDeepLink = i.fallbackDeepLink), Array.isArray(i.actions) && (a.actions = i.actions);
    let o = _.Z.getCurrentConfig({
      location: "showNotification"
    }, {
      autoTrackExposure: true,
      disable: null == i.messageRecord
    });
    if (null != i.messageRecord && o.enabled) {
      let e = i.messageRecord.channel_id,
        t = i.messageRecord.author;
      a.threadIdentifier = e;
      let n = y.Z.getChannel(e);
      null != n && (a.groupName = (0, c.F6)(n, T.default, v.Z));
      let r = null == n ? true : n.getGuildId();
      if (a.senderIdentifier = t.id, a.senderDisplayName = N.ZP.getName(r, e, t), a.senderAvatar = t.getAvatarURL(r, 128, false, false), a.attachments = [], o.includeStickers)
        for (let e of (0, b.cv)(i.messageRecord)) {
          let t = (0, b.Q6)(e, {
            isPreview: true
          });
          null != t && a.attachments.push({
            url: t,
            type: "image/png"
          })
        }
      if (o.includeImages)
        for (let e of i.messageRecord.attachments) !(0, C.yE)(null != (u = e.flags) ? u : 0, w.J0y.CONTAINS_EXPLICIT_MEDIA) && !(0, C.yE)(null != (d = e.flags) ? d : 0, w.J0y.IS_SPOILER) && (null == (l = e.content_type) ? true : l.startsWith("image/")) && a.attachments.push({
          url: e.proxy_url,
          type: e.content_type
        });
      null != i.emoji && f.Z.getConfig({
        location: "showNotification"
      }).enabled && (a.emoji = i.emoji.map(e => L({
        url: (0, A.gT)({
          id: e.id,
          animated: false,
          size: 96
        })
      }, e)))
    }
    try {
      let e = await P.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
      X[e] = {
        options: i,
        trackingProps: r,
        clickTrackingProps: K
      };
      let t = {
        close() {
          try {
            P.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e])
          } catch (e) {
            G.warn("Native notification removal failed with error: ", e)
          }
        }
      };
      return et(t, r), {
        notification: t,
        trackingProps: r
      }
    } catch (e) {
      G.warn("Native notification failed with error: ", e)
    }
  }
  null != i.sound && j && (ee(i.sound, null != (m = i.volume) ? m : 1, i.soundpack), r.ping = true);
  let en = {
    icon: e,
    body: n,
    tag: Q,
    silent: true
  };
  try {
    g = new q(t, en)
  } catch (e) {
    return
  }
  return (et(g, r), g.onclick = e => {
    var t;
    R.isPlatformEmbedded ? P.ZP.focus() : (window.focus(), g.close()), i.omitClickTracking || (S.default.track(w.rMx.NOTIFICATION_ACTION, L({
      action: "CLICK"
    }, r)), S.default.track(w.rMx.NOTIFICATION_CLICKED, K));
    let n = "";
    null == (t = i.onClick) || t.call(i, n)
  }, U) ? {
    notification: g,
    trackingProps: r
  } : {
    notification: {
      close() {
        var e;
        null == g || null == (e = g.onclose) || e.call(g)
      }
    },
    trackingProps: r
  }
}
let en = {
  hasPermission: J,
  requestPermission: Q,
  showNotification: et,
  playNotificationSound: W
}