/** Chunk was on web.js **/
/** chunk id: 970061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => en,
  I: () => B
}), require("./896048.js"), require("./747238.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./142703.js"), require("./321073.js"), require("./938796.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk481613 = require("./481613.js"),
  s = require.n(Chunk481613),
  Chunk665260 = require("./665260.js"),
  Chunk77729 = require("./77729.js"),
  Chunk47167 = require("./47167.js"),
  Chunk626584 = require("./626584.js"),
  Chunk22007 = require("./22007.js"),
  Chunk794036 = require("./794036.js"),
  Chunk975970 = require("./975970.js"),
  Chunk105613 = require("./105613.js"),
  Chunk474228 = require("./474228.js"),
  Chunk400492 = require("./400492.js"),
  Chunk312671 = require("./312671.js"),
  Chunk458640 = require("./458640.js"),
  Chunk378058 = require("./378058.js"),
  Chunk734057 = require("./734057.js"),
  Chunk803224 = require("./803224.js"),
  Chunk994500 = require("./994500.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk562153 = require("./562153.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js");

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
let j = Chunk723702.isPlatformEmbedded && (0, Chunk723702.isWindows)(),
  k = j && 10 > parseFloat(Chunk77729.A.os.release),
  U = true;
if (j && !k) {
  let [e, , t] = Chunk77729.A.os.release.split(".");
  U = parseInt(module) > 10 || parseInt(exports) >= 15063
}
let G = new Chunk626584.A("NotificationUtils"),
  V = j && U || "Chrome" === s().name && 47 > parseFloat(s().version) || "Firefox" === s().name && 52 > parseFloat(s().version);
async function F() {
  if (null === c.A || true === c.A ? true : c.A.features.supports("notifications")) try {
    return await R.Ay.invoke("NOTIFICATIONS_GET_SETTINGS")
  } catch (e) {
    G.warn("Fetching native notification settings failed with error: ", e)
  }
  return null
}

function B(e) {
  return "discord://".concat(location.host).concat(e)
}

function H(e) {
  try {
    let t = new URL(e, location.origin);
    if ("discord:" === t.protocol) return t.pathname
  } catch (e) {}
  return null
}
async function Y() {
  let e = await F();
  return (null == e ? true : e.authorizationStatus) === "authorized" && (null == e ? true : e.sound) === true
}

function W(e, t) {
  var n;
  return null != (n = (0, y.A)(null != t ? t : E.A.getSoundpack())[e]) ? n : e
}
async function K(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : true;
  if (await Y()) try {
    await R.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
      sound: W(e, n)
    });
    return
  } catch (e) {
    G.warn("Native notification sound failed with error: ", e)
  }(0, g.Ak)(e, t, true, n)
}
let z = a().throttle(K, 1e3, {
  leading: true
});

function q() {
  R.Ay.flashFrame(false)
}
j && (window.addEventListener("focus", q), Chunk837921.Ay.on("MAIN_WINDOW_FOCUS", q));
let Z = window.Notification;
if (k) {
  let e = {};
  Chunk837921.Ay.on("NOTIFICATION_CLICK", (t, n) => {
    let r = e[n];
    null != r && (r.onclick(), r.close())
  }), Chunk837921.Ay.send("NOTIFICATIONS_CLEAR"), r = class {
    static requestPermission(e) {
      e()
    }
    close() {
      null != e[this.id] && (delete e[this.id], R.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose())
    }
    constructor(t, {
      body: n,
      icon: r
    }) {
      D(this, "id", Z._id++), D(this, "title", true), D(this, "body", true), D(this, "icon", true), D(this, "onshow", function() {}), D(this, "onclick", function() {}), D(this, "onclose", function() {}), t.includes("\0") ? (G.warn("Notification title contains null character, setting to empty string"), this.title = "") : this.title = t, n.includes("\0") ? (G.warn("Notification body contains null character, setting to empty string"), this.body = "") : this.body = n, this.icon = r, setImmediate(() => this.onshow()), e[this.id] = this, R.Ay.send("NOTIFICATION_SHOW", {
        id: this.id,
        title: this.title,
        body: this.body,
        icon: this.icon
      })
    }
  }, D(r, "permission", "granted"), D(r, "_id", 0), Z = r
}
let Q = {};
if (null === Chunk77729.A || true === Chunk77729.A ? true : Chunk77729.A.features.supports("notifications")) {
  try {
    Chunk837921.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
      if ("dismiss" === t) return void delete Q[n];
      {
        let e = Q[n];
        if (w.isPlatformEmbedded ? R.Ay.focus() : window.focus(), null != e) {
          var a, o, s;
          (null == (a = e.options) ? true : a.omitClickTracking) || (T.default.track(P.HAw.NOTIFICATION_ACTION, L({
            action: "CLICK"
          }, e.trackingProps)), T.default.track(P.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)), null == (s = e.options) || null == (o = s.onClick) || o.call(s, r);
          return
        }
        if (null != i) {
          let e = H(i);
          null != e && (0, f.A)(e)
        }
      }
    }), Chunk837921.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS")
  } catch (e) {
    G.warn("Native notification setup failed with error: ", module)
  }(null === Chunk77729.A || true === Chunk77729.A ? true : Chunk77729.A.features.supports("notifications_provisional")) && $().then(e => {
    e || R.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", true).catch(() => {})
  })
}

function X(e) {
  if (null === c.A || true === c.A ? true : c.A.features.supports("notifications")) try {
    R.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION").then(t => {
      e(t)
    }).catch(() => {
      e(false)
    });
    return
  } catch (e) {
    G.warn("Native notification authorization failed with error: ", e)
  }
  null != Z && Z.requestPermission(async () => {
    null != e && e(await J())
  })
}
async function J() {
  if (null === c.A || true === c.A ? true : c.A.features.supports("notifications")) {
    let e = await F();
    return (null == e ? true : e.authorizationStatus) === "authorized" || (null == e ? true : e.authorizationStatus) === "provisional"
  }
  return null != Z && "granted" === Z.permission
}
async function $() {
  if (null === c.A || true === c.A ? true : c.A.features.supports("notifications")) {
    var e;
    return (null == (e = await F()) ? true : e.authorizationStatus) !== "undetermined"
  }
  return null != Z && "default" !== Z.permission
}

function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : true;
  e.includes("message") ? z(e, t, n) : K(e, t, n)
}
async function et(e, t, n, r, i) {
  var a, o, s, c, d, f, g;
  let E, y = await F(),
    D = (null == y ? true : y.authorizationStatus) === "authorized" || (null == y ? true : y.authorizationStatus) === "provisional",
    x = null != y ? D : await J(),
    k = D,
    B = I.A.disableNotifications && null == i.overrideStreamerMode,
    H = !w.isPlatformEmbedded || (0, w.isMac)() && k || R.Ay.shouldDisplayNotifications(),
    Y = !B && x && H,
    K = M(L({}, r), {
      action: true,
      ping: true,
      banner: true,
      badge: true
    }),
    z = K,
    q = K;
  if (r.banner = await (0, h.N)(), !Y) {
    null != i.sound && false !== i.playSoundIfDisabled && (ee(i.sound, null != (o = i.volume) ? o : 1, i.soundpack), r.ping = true, i.omitViewTracking || T.default.track(P.HAw.NOTIFICATION_ACTION, L({
      action: "VIEW"
    }, r)));
    return
  }
  t.includes("\0") && (G.warn("Notification title contains null character, setting to empty string"), t = ""), n.includes("\0") && (G.warn("Notification body contains null character, setting to empty string"), n = "");
  let X = null != (a = null == i ? true : i.tag) ? a : null,
    $ = k && (null == y ? true : y.sound) === true && (null == y ? true : y.authorizationStatus) === "authorized",
    et = (e, t) => {
      var n;
      null == (n = i.onShown) || n.call(i), i.omitViewTracking || (T.default.track(P.HAw.NOTIFICATION_ACTION, L({
        action: "VIEW"
      }, t)), T.default.track(P.HAw.NOTIFICATION_VIEWED, q)), V && setTimeout(() => e.close(), 5e3)
    };
  if (null == i.sound || $ || (ee(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), r.ping = true), i.isUserAvatar && null != e && (e = await (0, m.w)(e)), j && v.A.taskbarFlash && R.Ay.flashFrame(true), k) {
    let a = {
      title: t,
      body: n
    };
    null != e && (a.icon = e), (null == i ? true : i.sound) != null && (a.sound = W(i.sound, i.soundpack)), (null == i ? true : i.tag) != null && (a.identifier = i.tag), (null == i ? true : i.fallbackDeepLink) != null && (a.fallbackDeepLink = i.fallbackDeepLink), Array.isArray(i.actions) && (a.actions = i.actions);
    let o = _.A.getCurrentConfig({
      location: "showNotification"
    }, {
      autoTrackExposure: true,
      disable: null == i.messageRecord
    });
    if (null != i.messageRecord && o.enabled) {
      let e = i.messageRecord.channel_id,
        t = i.messageRecord.author;
      a.threadIdentifier = e;
      let n = O.A.getChannel(e);
      null != n && (a.groupName = (0, u.m1)(n, S.default, A.A));
      let r = null == n ? true : n.getGuildId();
      if (a.senderIdentifier = t.id, a.senderDisplayName = N.Ay.getName(r, e, t), a.senderAvatar = t.getAvatarURL(r, 128, false, false), a.attachments = [], o.includeStickers)
        for (let e of (0, b.o6)(i.messageRecord)) {
          let t = (0, b.zg)(e, {
            isPreview: true
          });
          null != t && a.attachments.push({
            url: t,
            type: "image/png"
          })
        }
      if (o.includeImages)
        for (let e of i.messageRecord.attachments) !(0, l.Lt)(null != (c = e.flags) ? c : 0, P.sbO.CONTAINS_EXPLICIT_MEDIA) && !(0, l.Lt)(null != (d = e.flags) ? d : 0, P.sbO.IS_SPOILER) && (null == (f = e.content_type) ? true : f.startsWith("image/")) && a.attachments.push({
          url: e.proxy_url,
          type: e.content_type
        });
      null != i.emoji && p.A.getConfig({
        location: "showNotification"
      }).enabled && (a.emoji = i.emoji.map(e => L({
        url: (0, C._O)({
          id: e.id,
          animated: false,
          size: 96
        })
      }, e)))
    }
    try {
      let e = await R.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
      Q[e] = {
        options: i,
        trackingProps: r,
        clickTrackingProps: z
      };
      let t = {
        close() {
          try {
            R.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e])
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
    E = new Z(t, en)
  } catch (e) {
    return
  }
  return (et(E, r), E.onclick = e => {
    var t;
    w.isPlatformEmbedded ? R.Ay.focus() : (window.focus(), E.close()), i.omitClickTracking || (T.default.track(P.HAw.NOTIFICATION_ACTION, L({
      action: "CLICK"
    }, r)), T.default.track(P.HAw.NOTIFICATION_CLICKED, z));
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
  playNotificationSound: K
}