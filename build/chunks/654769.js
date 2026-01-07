/** Chunk was on web.js **/
/** chunk id: 654769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => B,
  Z: () => en
}), require("./388685.js"), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./358797.js"), require("./539854.js"), require("./997841.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk525654 = require("./525654.js"),
  s = require.n(Chunk525654),
  Chunk95015 = require("./95015.js"),
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

function x(e) {
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

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)(),
  k = M && 10 > parseFloat(Chunk579806.Z.os.release),
  U = true;
if (M && !k) {
  let [e, , t] = Chunk579806.Z.os.release.split(".");
  U = parseInt(module) > 10 || parseInt(exports) >= 15063
}
let G = new Chunk710845.Z("NotificationUtils"),
  Z = M && U || "Chrome" === s().name && 47 > parseFloat(s().version) || "Firefox" === s().name && 52 > parseFloat(s().version);
async function F() {
  if (null === c.Z || true === c.Z ? true : c.Z.features.supports("notifications")) try {
    return await R.ZP.invoke("NOTIFICATIONS_GET_SETTINGS")
  } catch (e) {
    G.warn("Fetching native notification settings failed with error: ", e)
  }
  return null
}

function B(e) {
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
  let e = await F();
  return (null == e ? true : e.authorizationStatus) === "authorized" && (null == e ? true : e.sound) === true
}

function Y(e, t) {
  var n;
  return null != (n = (0, b.Z)(null != t ? t : E.Z.getSoundpack())[e]) ? n : e
}
async function W(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : true;
  if (await H()) try {
    await R.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
      sound: Y(e, n)
    });
    return
  } catch (e) {
    G.warn("Native notification sound failed with error: ", e)
  }(0, g.GN)(e, t, true, n)
}
let K = a().throttle(W, 1e3, {
  leading: true
});

function z() {
  R.ZP.flashFrame(false)
}
M && (window.addEventListener("focus", z), Chunk998502.ZP.on("MAIN_WINDOW_FOCUS", z));
let q = window.Notification;
if (k) {
  let e = {};
  Chunk998502.ZP.on("NOTIFICATION_CLICK", (t, n) => {
    let r = e[n];
    null != r && (r.onclick(), r.close())
  }), Chunk998502.ZP.send("NOTIFICATIONS_CLEAR"), r = class {
    static requestPermission(e) {
      e()
    }
    close() {
      null != e[this.id] && (delete e[this.id], R.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose())
    }
    constructor(t, {
      body: n,
      icon: r
    }) {
      D(this, "id", q._id++), D(this, "title", true), D(this, "body", true), D(this, "icon", true), D(this, "onshow", function() {}), D(this, "onclick", function() {}), D(this, "onclose", function() {}), t.includes("\0") ? (G.warn("Notification title contains null character, setting to empty string"), this.title = "") : this.title = t, n.includes("\0") ? (G.warn("Notification body contains null character, setting to empty string"), this.body = "") : this.body = n, this.icon = r, setImmediate(() => this.onshow()), e[this.id] = this, R.ZP.send("NOTIFICATION_SHOW", {
        id: this.id,
        title: this.title,
        body: this.body,
        icon: this.icon
      })
    }
  }, D(r, "permission", "granted"), D(r, "_id", 0), q = r
}
let Q = {};
if (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications")) {
  try {
    Chunk998502.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
      if ("dismiss" === t) return void delete Q[n];
      {
        let e = Q[n];
        if (P.isPlatformEmbedded ? R.ZP.focus() : window.focus(), null != e) {
          var a, o, s;
          (null == (a = e.options) ? true : a.omitClickTracking) || (C.default.track(w.rMx.NOTIFICATION_ACTION, x({
            action: "CLICK"
          }, e.trackingProps)), C.default.track(w.rMx.NOTIFICATION_CLICKED, e.clickTrackingProps)), null == (s = e.options) || null == (o = s.onClick) || o.call(s, r);
          return
        }
        if (null != i) {
          let e = V(i);
          null != e && (0, f.Z)(e)
        }
      }
    }), Chunk998502.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS")
  } catch (e) {
    G.warn("Native notification setup failed with error: ", module)
  }(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.features.supports("notifications_provisional")) && $().then(e => {
    e || R.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION", true).catch(() => {})
  })
}

function X(e) {
  if (null === c.Z || true === c.Z ? true : c.Z.features.supports("notifications")) try {
    R.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION").then(t => {
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
  if (null === c.Z || true === c.Z ? true : c.Z.features.supports("notifications")) {
    let e = await F();
    return (null == e ? true : e.authorizationStatus) === "authorized" || (null == e ? true : e.authorizationStatus) === "provisional"
  }
  return null != q && "granted" === q.permission
}
async function $() {
  if (null === c.Z || true === c.Z ? true : c.Z.features.supports("notifications")) {
    var e;
    return (null == (e = await F()) ? true : e.authorizationStatus) !== "undetermined"
  }
  return null != q && "default" !== q.permission
}

function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : true;
  e.includes("message") ? K(e, t, n) : W(e, t, n)
}
async function et(e, t, n, r, i) {
  var a, o, s, c, d, f, g;
  let E, b = await F(),
    D = (null == b ? true : b.authorizationStatus) === "authorized" || (null == b ? true : b.authorizationStatus) === "provisional",
    L = null != b ? D : await J(),
    k = D,
    B = I.Z.disableNotifications && null == i.overrideStreamerMode,
    V = !P.isPlatformEmbedded || (0, P.isMac)() && k || R.ZP.shouldDisplayNotifications(),
    H = !B && L && V,
    W = j(x({}, r), {
      action: true,
      ping: true,
      banner: true,
      badge: true
    }),
    K = W,
    z = W;
  if (r.banner = await (0, m.K)(), !H) {
    null != i.sound && false !== i.playSoundIfDisabled && (ee(i.sound, null != (a = i.volume) ? a : 1, i.soundpack), r.ping = true, i.omitViewTracking || C.default.track(w.rMx.NOTIFICATION_ACTION, x({
      action: "VIEW"
    }, r)));
    return
  }
  t.includes("\0") && (G.warn("Notification title contains null character, setting to empty string"), t = ""), n.includes("\0") && (G.warn("Notification body contains null character, setting to empty string"), n = "");
  let X = null != (o = null == i ? true : i.tag) ? o : null,
    $ = k && (null == b ? true : b.sound) === true && (null == b ? true : b.authorizationStatus) === "authorized",
    et = (e, t) => {
      var n;
      null == (n = i.onShown) || n.call(i), i.omitViewTracking || (C.default.track(w.rMx.NOTIFICATION_ACTION, x({
        action: "VIEW"
      }, t)), C.default.track(w.rMx.NOTIFICATION_VIEWED, z)), Z && setTimeout(() => e.close(), 5e3)
    };
  if (null == i.sound || $ || (ee(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), r.ping = true), i.isUserAvatar && null != e && (e = await (0, h.D)(e)), M && v.Z.taskbarFlash && R.ZP.flashFrame(true), k) {
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
      let n = O.Z.getChannel(e);
      null != n && (a.groupName = (0, u.F6)(n, T.default, S.Z));
      let r = null == n ? true : n.getGuildId();
      if (a.senderIdentifier = t.id, a.senderDisplayName = N.ZP.getName(r, e, t), a.senderAvatar = t.getAvatarURL(r, 128, false, false), a.attachments = [], o.includeStickers)
        for (let e of (0, y.cv)(i.messageRecord)) {
          let t = (0, y.Q6)(e, {
            isPreview: true
          });
          null != t && a.attachments.push({
            url: t,
            type: "image/png"
          })
        }
      if (o.includeImages)
        for (let e of i.messageRecord.attachments) !(0, l.yE)(null != (d = e.flags) ? d : 0, w.J0y.CONTAINS_EXPLICIT_MEDIA) && !(0, l.yE)(null != (f = e.flags) ? f : 0, w.J0y.IS_SPOILER) && (null == (c = e.content_type) ? true : c.startsWith("image/")) && a.attachments.push({
          url: e.proxy_url,
          type: e.content_type
        });
      null != i.emoji && p.Z.getConfig({
        location: "showNotification"
      }).enabled && (a.emoji = i.emoji.map(e => x({
        url: (0, A.gT)({
          id: e.id,
          animated: false,
          size: 96
        })
      }, e)))
    }
    try {
      let e = await R.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
      Q[e] = {
        options: i,
        trackingProps: r,
        clickTrackingProps: K
      };
      let t = {
        close() {
          try {
            R.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e])
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
  null != i.sound && k && (ee(i.sound, null != (g = i.volume) ? g : 1, i.soundpack), r.ping = true);
  let en = {
    icon: e,
    body: n,
    tag: X,
    silent: true
  };
  try {
    E = new q(t, en)
  } catch (e) {
    return
  }
  return (et(E, r), E.onclick = e => {
    var t;
    P.isPlatformEmbedded ? R.ZP.focus() : (window.focus(), E.close()), i.omitClickTracking || (C.default.track(w.rMx.NOTIFICATION_ACTION, x({
      action: "CLICK"
    }, r)), C.default.track(w.rMx.NOTIFICATION_CLICKED, K));
    let n = "";
    null == (t = i.onClick) || t.call(i, n)
  }, U) ? {
    notification: E,
    trackingProps: r
  } : {
    notification: {
      close() {
        var e;
        null == E || null == (e = E.onclose) || e.call(E)
      }
    },
    trackingProps: r
  }
}
let en = {
  hasPermission: J,
  requestPermission: X,
  showNotification: et,
  playNotificationSound: W
}