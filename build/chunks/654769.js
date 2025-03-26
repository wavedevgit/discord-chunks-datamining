/** Chunk was on 93509 **/
let o;
n.d(t, {
  Z: () => H
}), n(47120), n(301563), n(177593), n(773603);
var i, a = n(392711),
  r = n.n(a),
  c = n(525654),
  l = n.n(c),
  s = n(579806),
  d = n(933557),
  _ = n(710845),
  u = n(812483),
  b = n(460181),
  f = n(474873),
  p = n(135906),
  g = n(592125),
  m = n(292959),
  h = n(699516),
  v = n(246946),
  C = n(594174),
  I = n(626135),
  T = n(5192),
  S = n(358085),
  O = n(960048),
  x = n(998502),
  k = n(981631);

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let y = S.isPlatformEmbedded && (0, S.isWindows)(),
  N = y && 10 > parseFloat(s.Z.os.release),
  P = !0;
if (y && !N) {
  let [e, , t] = s.Z.os.release.split(".");
  P = parseInt(e) > 10 || parseInt(t) >= 15063
}
let B = new _.Z("NotificationUtils"),
  A = y && P || "Chrome" === l().name && 47 > parseFloat(l().version) || "Firefox" === l().name && 52 > parseFloat(l().version);
async function E() {
  if (void 0 === o) {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports("notifications")) try {
      o = await x.ZP.invoke("NOTIFICATIONS_GET_SETTINGS")
    } catch (e) {
      B.warn("Fetching native notification settings failed with error: ", e), o = null
    } else o = null
  }
  return o
}
async function L() {
  let e = await E();
  return (null == e ? void 0 : e.authorizationStatus) === "authorized" && (null == e ? void 0 : e.sound) === !0
}

function R(e, t) {
  var n;
  return null !== (n = (0, p.Z)(null != t ? t : f.Z.getSoundpack())[e]) && void 0 !== n ? n : e
}
async function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : void 0;
  if (await L()) try {
    await x.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
      sound: R(e, n)
    });
    return
  } catch (e) {
    B.warn("Native notification sound failed with error: ", e)
  }(0, b.GN)(e, t, void 0, n)
}
let Z = r().throttle(D, 1e3, {
  leading: !0
});

function W() {
  x.ZP.flashFrame(!1)
}
y && (window.addEventListener("focus", W), x.ZP.on("MAIN_WINDOW_FOCUS", W));
let j = window.Notification;
if (N) {
  let e = {};
  x.ZP.on("NOTIFICATION_CLICK", (t, n) => {
    let o = e[n];
    null != o && (o.onclick(), o.close())
  }), x.ZP.send("NOTIFICATIONS_CLEAR"), i = class {
    static requestPermission(e) {
      e()
    }
    close() {
      null != e[this.id] && (delete e[this.id], x.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose())
    }
    constructor(t, {
      body: n,
      icon: o
    }) {
      w(this, "id", j._id++), w(this, "title", void 0), w(this, "body", void 0), w(this, "icon", void 0), w(this, "onshow", function() {}), w(this, "onclick", function() {}), w(this, "onclose", function() {}), t.includes("\0") ? (B.warn("Notification title contains null character, setting to empty string"), this.title = "") : this.title = t, n.includes("\0") ? (B.warn("Notification body contains null character, setting to empty string"), this.body = "") : this.body = n, this.icon = o, setImmediate(() => this.onshow()), e[this.id] = this, x.ZP.send("NOTIFICATION_SHOW", {
        id: this.id,
        title: this.title,
        body: this.body,
        icon: this.icon
      })
    }
  }, w(i, "permission", "granted"), w(i, "_id", 0), j = i
}
let M = {};
if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports("notifications")) try {
  x.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n) => {
    if ("dismiss" === t) delete M[n];
    else {
      var o, i, a;
      let e = M[n];
      (null == e ? void 0 : null === (o = e.options) || void 0 === o ? void 0 : o.omitClickTracking) || I.default.track(k.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (a = e.options) || void 0 === a || null === (i = a.onClick) || void 0 === i || i.call(a)
    }
  }), x.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS")
} catch (e) {
  B.warn("Native notification setup failed with error: ", e)
}
async function G() {
  if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports("notifications")) {
    var e;
    return (null === (e = await E()) || void 0 === e ? void 0 : e.authorizationStatus) === "authorized"
  }
  return null != j && "granted" === j.permission
}

function U(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : void 0;
  e.includes("message") ? Z(e, t, n) : D(e, t, n)
}
async function F(e) {
  return v.Z.disableNotifications && null == e.overrideStreamerMode || !await G() || S.isPlatformEmbedded && !x.ZP.shouldDisplayNotifications()
}
let H = {
  hasPermission: G,
  requestPermission: function(e) {
    if (null === s.Z || void 0 === s.Z ? void 0 : s.Z.features.supports("notifications")) try {
      x.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION").then(t => {
        e(t)
      }).catch(() => {
        e(!1)
      }).finally(() => {
        o = void 0
      });
      return
    } catch (e) {
      B.warn("Native notification authorization failed with error: ", e)
    }
    null != j && j.requestPermission(async () => {
      null != e && e(await G())
    })
  },
  showNotification: async function(e, t, n, o, i) {
    var a, r, c, l;
    let s;
    if (await F(i)) {
      null != i.sound && !1 !== i.playSoundIfDisabled && U(i.sound, null !== (a = i.volume) && void 0 !== a ? a : 1, i.soundpack);
      return
    }
    t.includes("\0") && (B.warn("Notification title contains null character, setting to empty string"), t = ""), n.includes("\0") && (B.warn("Notification body contains null character, setting to empty string"), n = "");
    let _ = null !== (r = null == i ? void 0 : i.tag) && void 0 !== r ? r : null,
      b = await E(),
      f = (null == b ? void 0 : b.authorizationStatus) === "authorized",
      p = f && (null == b ? void 0 : b.sound) === !0,
      v = e => {
        var t;
        null === (t = i.onShown) || void 0 === t || t.call(i), i.omitViewTracking || I.default.track(k.rMx.NOTIFICATION_VIEWED, o), A && setTimeout(() => e.close(), 5e3)
      };
    if (null == i.sound || p || U(i.sound, null !== (c = i.volume) && void 0 !== c ? c : 1, i.soundpack), u.Z.getCurrentConfig({
        location: "showNotification"
      }).enabled && i.isUserAvatar && null != e && (e = await
        function(e) {
          let t = new Image;
          return t.src = e, t.crossOrigin = "anonymous", new Promise((n, o) => {
            t.onload = () => {
              "" !== t.src && n(function(e) {
                let t = document.createElement("canvas"),
                  n = t.getContext("2d"),
                  o = Math.min(e.width, e.height);
                t.width = o, t.height = o, null != n && (n.beginPath(), n.arc(o / 2, o / 2, o / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(e, (e.width - o) / 2, (e.height - o) / 2, o, o, 0, 0, o, o));
                let i = t.toDataURL();
                return t.remove(), i
              }(t))
            }, t.onerror = t => {
              O.Z.captureMessage("Failed to load notification avatar to circle crop: ".concat(t)), o(e)
            }
          })
        }(e)), f) {
      let a = {
        title: t,
        body: n
      };
      null != e && (a.icon = e), (null == i ? void 0 : i.sound) != null && (a.sound = R(i.sound, i.soundpack)), (null == i ? void 0 : i.tag) != null && (a.identifier = i.tag);
      let r = "string" == typeof(null == o ? void 0 : o.guild_id) ? o.guild_id : null,
        c = "string" == typeof(null == o ? void 0 : o.channel_id) ? o.channel_id : null,
        l = "string" == typeof(null == o ? void 0 : o.notif_user_id) ? o.notif_user_id : null;
      if (null != c) {
        a.threadIdentifier = c;
        let e = g.Z.getChannel(c);
        null != e && (a.groupName = (0, d.F6)(e, C.default, h.Z))
      }
      null != l && (a.senderIdentifier = l, null != r && (a.senderDisplayName = T.ZP.getName(r, c, C.default.getUser(l))));
      try {
        let e = await x.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
        M[e] = {
          options: i,
          trackingProps: o
        };
        let t = {
          close() {
            try {
              x.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e])
            } catch (e) {
              B.warn("Native notification removal failed with error: ", e)
            }
          }
        };
        return v(t), t
      } catch (e) {
        B.warn("Native notification failed with error: ", e)
      }
    }
    null != i.sound && f && U(i.sound, null !== (l = i.volume) && void 0 !== l ? l : 1, i.soundpack);
    let w = {
      icon: e,
      body: n,
      tag: _,
      silent: !0
    };
    y && m.Z.taskbarFlash && x.ZP.flashFrame(!0);
    try {
      s = new j(t, w)
    } catch (e) {
      return null
    }
    return (v(s), s.onclick = () => {
      var e;
      S.isPlatformEmbedded ? x.ZP.focus() : (window.focus(), s.close()), i.omitClickTracking || I.default.track(k.rMx.NOTIFICATION_CLICKED, o), null === (e = i.onClick) || void 0 === e || e.call(i)
    }, P) ? s : {
      close() {
        var e;
        null == s || null === (e = s.onclose) || void 0 === e || e.call(s)
      }
    }
  },
  disabled: F,
  playNotificationSound: D
}