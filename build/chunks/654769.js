/** Chunk was on 93886 **/
let r;
n.d(t, {
  Z: () => U
}), n(47120), n(301563), n(177593), n(773603);
var a, i = n(392711),
  l = n.n(i),
  o = n(525654),
  s = n.n(o),
  c = n(579806),
  d = n(933557),
  u = n(710845),
  m = n(812483),
  h = n(460181),
  x = n(474873),
  f = n(135906),
  p = n(592125),
  b = n(292959),
  _ = n(699516),
  g = n(246946),
  v = n(594174),
  j = n(626135),
  y = n(5192),
  C = n(358085),
  N = n(960048),
  T = n(998502),
  O = n(981631);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = C.isPlatformEmbedded && (0, C.isWindows)(),
  k = E && 10 > parseFloat(c.Z.os.release),
  I = !0;
if (E && !k) {
  let [e, , t] = c.Z.os.release.split(".");
  I = parseInt(e) > 10 || parseInt(t) >= 15063
}
let w = new u.Z("NotificationUtils"),
  Z = E && I || "Chrome" === s().name && 47 > parseFloat(s().version) || "Firefox" === s().name && 52 > parseFloat(s().version);
async function P() {
  if (void 0 === r) {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) try {
      r = await T.ZP.invoke("NOTIFICATIONS_GET_SETTINGS")
    } catch (e) {
      w.warn("Fetching native notification settings failed with error: ", e), r = null
    } else r = null
  }
  return r
}
async function R() {
  let e = await P();
  return (null == e ? void 0 : e.authorizationStatus) === "authorized" && (null == e ? void 0 : e.sound) === !0
}

function L(e, t) {
  var n;
  return null !== (n = (0, f.Z)(null != t ? t : x.Z.getSoundpack())[e]) && void 0 !== n ? n : e
}
async function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : void 0;
  if (await R()) try {
    await T.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
      sound: L(e, n)
    });
    return
  } catch (e) {
    w.warn("Native notification sound failed with error: ", e)
  }(0, h.GN)(e, t, void 0, n)
}
let D = l().throttle(A, 1e3, {
  leading: !0
});

function B() {
  T.ZP.flashFrame(!1)
}
E && (window.addEventListener("focus", B), T.ZP.on("MAIN_WINDOW_FOCUS", B));
let M = window.Notification;
if (k) {
  let e = {};
  T.ZP.on("NOTIFICATION_CLICK", (t, n) => {
    let r = e[n];
    null != r && (r.onclick(), r.close())
  }), T.ZP.send("NOTIFICATIONS_CLEAR"), a = class {
    static requestPermission(e) {
      e()
    }
    close() {
      null != e[this.id] && (delete e[this.id], T.ZP.send("NOTIFICATION_CLOSE", this.id), this.onclose())
    }
    constructor(t, {
      body: n,
      icon: r
    }) {
      S(this, "id", M._id++), S(this, "title", void 0), S(this, "body", void 0), S(this, "icon", void 0), S(this, "onshow", function() {}), S(this, "onclick", function() {}), S(this, "onclose", function() {}), this.title = t, this.body = n, this.icon = r, setImmediate(() => this.onshow()), e[this.id] = this, T.ZP.send("NOTIFICATION_SHOW", {
        id: this.id,
        title: this.title,
        body: this.body,
        icon: this.icon
      })
    }
  }, S(a, "permission", "granted"), S(a, "_id", 0), M = a
}
let z = {};
if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) try {
  T.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n) => {
    if ("dismiss" === t) delete z[n];
    else {
      var r, a, i;
      let e = z[n];
      (null == e ? void 0 : null === (r = e.options) || void 0 === r ? void 0 : r.omitClickTracking) || j.default.track(O.rMx.NOTIFICATION_CLICKED, null == e ? void 0 : e.trackingProps), null == e || null === (i = e.options) || void 0 === i || null === (a = i.onClick) || void 0 === a || a.call(i)
    }
  }), T.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS")
} catch (e) {
  w.warn("Native notification setup failed with error: ", e)
}
async function F() {
  if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) {
    var e;
    return (null === (e = await P()) || void 0 === e ? void 0 : e.authorizationStatus) === "authorized"
  }
  return null != M && "granted" === M.permission
}

function G(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = arguments.length > 2 ? arguments[2] : void 0;
  e.includes("message") ? D(e, t, n) : A(e, t, n)
}
async function W(e) {
  return g.Z.disableNotifications && null == e.overrideStreamerMode || !await F() || C.isPlatformEmbedded && !T.ZP.shouldDisplayNotifications()
}
let U = {
  hasPermission: F,
  requestPermission: function(e) {
    if (null === c.Z || void 0 === c.Z ? void 0 : c.Z.features.supports("notifications")) try {
      T.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION").then(t => {
        e(t)
      }).catch(() => {
        e(!1)
      }).finally(() => {
        r = void 0
      });
      return
    } catch (e) {
      w.warn("Native notification authorization failed with error: ", e)
    }
    null != M && M.requestPermission(async () => {
      null != e && e(await F())
    })
  },
  showNotification: async function(e, t, n, r, a) {
    var i, l, o, s;
    let c;
    if (await W(a)) {
      null != a.sound && !1 !== a.playSoundIfDisabled && G(a.sound, null !== (i = a.volume) && void 0 !== i ? i : 1, a.soundpack);
      return
    }
    let u = null !== (l = null == a ? void 0 : a.tag) && void 0 !== l ? l : null,
      h = await P(),
      x = (null == h ? void 0 : h.authorizationStatus) === "authorized",
      f = x && (null == h ? void 0 : h.sound) === !0,
      g = e => {
        var t;
        null === (t = a.onShown) || void 0 === t || t.call(a), a.omitViewTracking || j.default.track(O.rMx.NOTIFICATION_VIEWED, r), Z && setTimeout(() => e.close(), 5e3)
      };
    if (null == a.sound || f || G(a.sound, null !== (o = a.volume) && void 0 !== o ? o : 1, a.soundpack), m.Z.getCurrentConfig({
        location: "showNotification"
      }).enabled && a.isUserAvatar && null != e && (e = await
        function(e) {
          let t = new Image;
          return t.src = e, t.crossOrigin = "anonymous", new Promise((n, r) => {
            t.onload = () => {
              "" !== t.src && n(function(e) {
                let t = document.createElement("canvas"),
                  n = t.getContext("2d"),
                  r = Math.min(e.width, e.height);
                t.width = r, t.height = r, null != n && (n.beginPath(), n.arc(r / 2, r / 2, r / 2, 0, 2 * Math.PI), n.closePath(), n.clip(), n.drawImage(e, (e.width - r) / 2, (e.height - r) / 2, r, r, 0, 0, r, r));
                let a = t.toDataURL();
                return t.remove(), a
              }(t))
            }, t.onerror = t => {
              N.Z.captureMessage("Failed to load notification avatar to circle crop: ".concat(t)), r(e)
            }
          })
        }(e)), x) {
      let i = {
        title: t,
        body: n
      };
      null != e && (i.icon = e), (null == a ? void 0 : a.sound) != null && (i.sound = L(a.sound, a.soundpack)), (null == a ? void 0 : a.tag) != null && (i.identifier = a.tag);
      let l = "string" == typeof(null == r ? void 0 : r.guild_id) ? r.guild_id : null,
        o = "string" == typeof(null == r ? void 0 : r.channel_id) ? r.channel_id : null,
        s = "string" == typeof(null == r ? void 0 : r.notif_user_id) ? r.notif_user_id : null;
      if (null != o) {
        i.threadIdentifier = o;
        let e = p.Z.getChannel(o);
        null != e && (i.groupName = (0, d.F6)(e, v.default, _.Z))
      }
      null != s && (i.senderIdentifier = s, null != l && (i.senderDisplayName = y.ZP.getName(l, o, v.default.getUser(s))));
      try {
        let e = await T.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", i);
        z[e] = {
          options: a,
          trackingProps: r
        };
        let t = {
          close() {
            try {
              T.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e])
            } catch (e) {
              w.warn("Native notification removal failed with error: ", e)
            }
          }
        };
        return g(t), t
      } catch (e) {
        w.warn("Native notification failed with error: ", e)
      }
    }
    null != a.sound && x && G(a.sound, null !== (s = a.volume) && void 0 !== s ? s : 1, a.soundpack);
    let S = {
      icon: e,
      body: n,
      tag: u,
      silent: !0
    };
    E && b.Z.taskbarFlash && T.ZP.flashFrame(!0);
    try {
      c = new M(t, S)
    } catch (e) {
      return null
    }
    return (g(c), c.onclick = () => {
      var e;
      C.isPlatformEmbedded ? T.ZP.focus() : (window.focus(), c.close()), a.omitClickTracking || j.default.track(O.rMx.NOTIFICATION_CLICKED, r), null === (e = a.onClick) || void 0 === e || e.call(a)
    }, I) ? c : {
      close() {
        var e;
        null == c || null === (e = c.onclose) || void 0 === e || e.call(c)
      }
    }
  },
  disabled: W,
  playNotificationSound: A
}