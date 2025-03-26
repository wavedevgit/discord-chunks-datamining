/** Chunk was on 86024 **/
let e;
i.d(n, {
  Z: () => V
}), i(47120), i(301563), i(177593), i(773603);
var o, a = i(392711),
  l = i.n(a),
  r = i(525654),
  s = i.n(r),
  c = i(579806),
  u = i(933557),
  d = i(710845),
  f = i(812483),
  h = i(460181),
  p = i(474873),
  v = i(135906),
  b = i(592125),
  I = i(292959),
  N = i(699516),
  g = i(246946),
  _ = i(594174),
  m = i(626135),
  O = i(5192),
  w = i(358085),
  y = i(960048),
  C = i(998502),
  T = i(981631);

function Z(t, n, i) {
  return n in t ? Object.defineProperty(t, n, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = i, t
}
let A = w.isPlatformEmbedded && (0, w.isWindows)(),
  P = A && 10 > parseFloat(c.Z.os.release),
  k = !0;
if (A && !P) {
  let [t, , n] = c.Z.os.release.split(".");
  k = parseInt(t) > 10 || parseInt(n) >= 15063
}
let F = new d.Z("NotificationUtils"),
  S = A && k || "Chrome" === s().name && 47 > parseFloat(s().version) || "Firefox" === s().name && 52 > parseFloat(s().version);
async function E() {
  if (void 0 === e) {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) try {
      e = await C.ZP.invoke("NOTIFICATIONS_GET_SETTINGS")
    } catch (t) {
      F.warn("Fetching native notification settings failed with error: ", t), e = null
    } else e = null
  }
  return e
}
async function x() {
  let t = await E();
  return (null == t ? void 0 : t.authorizationStatus) === "authorized" && (null == t ? void 0 : t.sound) === !0
}

function R(t, n) {
  var i;
  return null !== (i = (0, v.Z)(null != n ? n : p.Z.getSoundpack())[t]) && void 0 !== i ? i : t
}
async function D(t) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    i = arguments.length > 2 ? arguments[2] : void 0;
  if (await x()) try {
    await C.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
      sound: R(t, i)
    });
    return
  } catch (t) {
    F.warn("Native notification sound failed with error: ", t)
  }(0, h.GN)(t, n, void 0, i)
}
let j = l().throttle(D, 1e3, {
  leading: !0
});

function L() {
  C.ZP.flashFrame(!1)
}
A && (window.addEventListener("focus", L), C.ZP.on("MAIN_WINDOW_FOCUS", L));
let M = window.Notification;
if (P) {
  let t = {};
  C.ZP.on("NOTIFICATION_CLICK", (n, i) => {
    let e = t[i];
    null != e && (e.onclick(), e.close())
  }), C.ZP.send("NOTIFICATIONS_CLEAR"), o = class {
    static requestPermission(t) {
      t()
    }
    close() {
      null != t[this.id] && (delete t[this.id], C.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose())
    }
    constructor(n, {
      body: i,
      icon: e
    }) {
      Z(this, "id", M._id++), Z(this, "title", void 0), Z(this, "body", void 0), Z(this, "icon", void 0), Z(this, "onshow", function() {}), Z(this, "onclick", function() {}), Z(this, "onclose", function() {}), n.includes("\0") ? (F.warn("Notification title contains null character, setting to empty string"), this.title = "") : this.title = n, i.includes("\0") ? (F.warn("Notification body contains null character, setting to empty string"), this.body = "") : this.body = i, this.icon = e, setImmediate(() => this.onshow()), t[this.id] = this, C.ZP.send("NOTIFICATION_SHOW", {
        id: this.id,
        title: this.title,
        body: this.body,
        icon: this.icon
      })
    }
  }, Z(o, "permission", "granted"), Z(o, "_id", 0), M = o
}
let W = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) try {
  C.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (t, n, i) => {
    if ("dismiss" === n) delete W[i];
    else {
      var e, o, a;
      let t = W[i];
      (null == t ? void 0 : null === (e = t.options) || void 0 === e ? void 0 : e.omitClickTracking) || m.default.track(T.rMx.NOTIFICATION_CLICKED, null == t ? void 0 : t.trackingProps), null == t || null === (a = t.options) || void 0 === a || null === (o = a.onClick) || void 0 === o || o.call(a)
    }
  }), C.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS")
} catch (t) {
  F.warn("Native notification setup failed with error: ", t)
}
async function z() {
  if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) {
    var t;
    return (null === (t = await E()) || void 0 === t ? void 0 : t.authorizationStatus) === "authorized"
  }
  return null != M && "granted" === M.permission
}

function B(t) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    i = arguments.length > 2 ? arguments[2] : void 0;
  t.includes("message") ? j(t, n, i) : D(t, n, i)
}
async function U(t) {
  return g.Z.disableNotifications && null == t.overrideStreamerMode || !await z() || w.isPlatformEmbedded && !C.ZP.shouldDisplayNotifications()
}
let V = {
  hasPermission: z,
  requestPermission: function(t) {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) try {
      C.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION").then(n => {
        t(n)
      }).catch(() => {
        t(!1)
      }).finally(() => {
        e = void 0
      });
      return
    } catch (t) {
      F.warn("Native notification authorization failed with error: ", t)
    }
    null != M && M.requestPermission(async () => {
      null != t && t(await z())
    })
  },
  showNotification: async function(t, n, i, e, o) {
    var a, l, r, s;
    let c;
    if (await U(o)) {
      null != o.sound && !1 !== o.playSoundIfDisabled && B(o.sound, null !== (a = o.volume) && void 0 !== a ? a : 1, o.soundpack);
      return
    }
    n.includes("\0") && (F.warn("Notification title contains null character, setting to empty string"), n = ""), i.includes("\0") && (F.warn("Notification body contains null character, setting to empty string"), i = "");
    let d = null !== (l = null == o ? void 0 : o.tag) && void 0 !== l ? l : null,
      h = await E(),
      p = (null == h ? void 0 : h.authorizationStatus) === "authorized",
      v = p && (null == h ? void 0 : h.sound) === !0,
      g = t => {
        var n;
        null === (n = o.onShown) || void 0 === n || n.call(o), o.omitViewTracking || m.default.track(T.rMx.NOTIFICATION_VIEWED, e), S && setTimeout(() => t.close(), 5e3)
      };
    if (null == o.sound || v || B(o.sound, null !== (r = o.volume) && void 0 !== r ? r : 1, o.soundpack), f.Z.getCurrentConfig({
        location: "showNotification"
      }).enabled && o.isUserAvatar && null != t && (t = await
        function(t) {
          let n = new Image;
          return n.src = t, n.crossOrigin = "anonymous", new Promise((i, e) => {
            n.onload = () => {
              "" !== n.src && i(function(t) {
                let n = document.createElement("canvas"),
                  i = n.getContext("2d"),
                  e = Math.min(t.width, t.height);
                n.width = e, n.height = e, null != i && (i.beginPath(), i.arc(e / 2, e / 2, e / 2, 0, 2 * Math.PI), i.closePath(), i.clip(), i.drawImage(t, (t.width - e) / 2, (t.height - e) / 2, e, e, 0, 0, e, e));
                let o = n.toDataURL();
                return n.remove(), o
              }(n))
            }, n.onerror = n => {
              y.Z.captureMessage("Failed to load notification avatar to circle crop: ".concat(n)), e(t)
            }
          })
        }(t)), p) {
      let a = {
        title: n,
        body: i
      };
      null != t && (a.icon = t), (null == o ? void 0 : o.sound) != null && (a.sound = R(o.sound, o.soundpack)), (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
      let l = "string" == typeof(null == e ? void 0 : e.guild_id) ? e.guild_id : null,
        r = "string" == typeof(null == e ? void 0 : e.channel_id) ? e.channel_id : null,
        s = "string" == typeof(null == e ? void 0 : e.notif_user_id) ? e.notif_user_id : null;
      if (null != r) {
        a.threadIdentifier = r;
        let t = b.Z.getChannel(r);
        null != t && (a.groupName = (0, u.F6)(t, _.default, N.Z))
      }
      null != s && (a.senderIdentifier = s, null != l && (a.senderDisplayName = O.ZP.getName(l, r, _.default.getUser(s))));
      try {
        let t = await C.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
        W[t] = {
          options: o,
          trackingProps: e
        };
        let n = {
          close() {
            try {
              C.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [t])
            } catch (t) {
              F.warn("Native notification removal failed with error: ", t)
            }
          }
        };
        return g(n), n
      } catch (t) {
        F.warn("Native notification failed with error: ", t)
      }
    }
    null != o.sound && p && B(o.sound, null !== (s = o.volume) && void 0 !== s ? s : 1, o.soundpack);
    let Z = {
      icon: t,
      body: i,
      tag: d,
      silent: !0
    };
    A && I.Z.taskbarFlash && C.ZP.flashFrame(!0);
    try {
      c = new M(n, Z)
    } catch (t) {
      return null
    }
    return (g(c), c.onclick = () => {
      var t;
      w.isPlatformEmbedded ? C.ZP.focus() : (window.focus(), c.close()), o.omitClickTracking || m.default.track(T.rMx.NOTIFICATION_CLICKED, e), null === (t = o.onClick) || void 0 === t || t.call(o)
    }, k) ? c : {
      close() {
        var t;
        null == c || null === (t = c.onclose) || void 0 === t || t.call(c)
      }
    }
  },
  disabled: U,
  playNotificationSound: D
}