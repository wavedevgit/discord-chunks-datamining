/** Chunk was on 21738 **/
/** chunk id: 372919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V
}), require("./896048.js"), require("./65821.js"), require("./938796.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk179771 = require("./179771.js"),
  Chunk665260 = require("./665260.js"),
  Chunk420970 = require("./420970.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk298990 = require("./298990.js"),
  Chunk544420 = require("./544420.js"),
  Chunk334738 = require("./334738.js"),
  Chunk181658 = require("./181658.js"),
  Chunk646865 = require("./646865.js"),
  Chunk795816 = require("./795816.js"),
  Chunk851907 = require("./851907.js"),
  Chunk980142 = require("./980142.js"),
  Chunk572946 = require("./572946.jsx"),
  Chunk293588 = require("./293588.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk869146 = require("./869146.js"),
  Chunk383233 = require("./383233.js"),
  Chunk734057 = require("./734057.js"),
  Chunk375492 = require("./375492.js"),
  Chunk461213 = require("./461213.js"),
  Chunk531685 = require("./531685.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk998218 = require("./998218.js"),
  Chunk475815 = require("./475815.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk629471 = require("./629471.js"),
  Chunk569475 = require("./569475.js"),
  Chunk954843 = require("./954843.js"),
  Chunk546983 = require("./546983.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js");
async function G(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : "",
    l = I.A.getApplicationActivity(t);
  if (null == l || null == l.secrets || !(0, P.px)(r, l.party, l.secrets)) throw new x.A({
    errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let a = (0, m.A)(l, v.A);
  if (a) {
    let {
      lock: t
    } = (0, D.d5)(e);
    return (0, c.qf)(l, a).then(() => {
      throw t(), new x.A({
        errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure user does have have privacy enabled.")
    })
  }
  await o.A.sendActivityInviteUser({
    userId: n,
    type: r,
    activity: l,
    content: i,
    location: "In-Game Invite"
  })
}
let V = {
  [Chunk652215.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          pid: r
        }
      } = e, i = t.application.id;
      if (null == i) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "No application.");
      return G(r, i, n, k.xL.JOIN)
    }
  },
  [Chunk652215.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    handler(e) {
      let {
        args: {
          user_id: t
        }
      } = e, n = y.A.getDMFromUserId(t);
      null != n && (0, d.ack)(n, {
        section: k.JJy.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
        object: k.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: k.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true)
    }
  },
  [Chunk652215.e$_.ACTIVITY_INVITE_USER]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    validation: e => (0, w.A)(e).required().keys({
      user_id: e.string().required(),
      type: e.number().required().valid([k.xL.JOIN]),
      content: e.string().min(0).max(1024),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          user_id: r,
          content: i,
          pid: l
        }
      } = e, a = t.application.id;
      if (null == a) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "No application.");
      return G(l, a, r, n, i)
    }
  },
  [Chunk652215.e$_.ACCEPT_ACTIVITY_INVITE]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    validation: e => (0, w.A)(e).required().keys({
      type: e.number().required().valid([k.xL.JOIN]),
      user_id: e.string().required(),
      session_id: e.string().required(),
      channel_id: e.string().required(),
      message_id: e.string().required(),
      application_id: e.string().optional()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          user_id: r,
          session_id: i,
          channel_id: l,
          message_id: a,
          application_id: s
        }
      } = e, o = t.transport === M.z4.IPC && null != s ? s : t.application.id;
      if (null == o) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "No application.");
      let c = Promise.resolve(false);
      return n === k.xL.JOIN && (c = u.A.join({
        userId: r,
        sessionId: i,
        applicationId: o,
        channelId: l,
        messageId: a
      })), c.then(e => {
        if (!e) throw new x.A({
          errorCode: k.Lw6.INVALID_INVITE
        }, "Invite is expired or invalid.")
      })
    }
  },
  [Chunk652215.e$_.OPEN_INVITE_DIALOG]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj, Chunk613057.VH]
    },
    handler(e) {
      let {
        socket: t
      } = e, i = t.application;
      if (null == i.id) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "No application.");
      let {
        channel: l,
        guild: a,
        frame: o
      } = (0, R.W)(), u = (0, f.Ay)({
        application: t.application,
        channelId: null == l ? true : l.id
      }), d = null != u ? E.A.getWindow(u) : true;
      (null == d ? true : d.closed) && (d = true);
      let p = null != d ? k.BRT.POPOUT : k.BRT.APP;
      if ((0, j.sP)({}, null == d ? true : d.document), null != o) {
        if (o.applicationId !== i.id) throw new x.A({
          errorCode: k.Lw6.INVALID_COMMAND
        }, "Application is not currently mounted.");
        let e = I.A.getApplicationActivity(i.id);
        if (null != e)(0, c.qf)(e, false, p);
        else throw new x.A({
          errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure an activity was set using setActivity.")
      } else(0, s.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
        return t => {
          var n, s;
          return (0, r.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, t), s = s = {
            guild: a,
            channel: l,
            applicationId: i.id,
            analyticsLocation: k.ThZ.ACTIVITY_RPC,
            source: k.PE1.ACTIVITY_INVITE
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
          }), n))
        }
      }, {
        contextKey: p === k.BRT.POPOUT ? s.KX8 : s.SYi
      })
    }
  },
  [Chunk652215.e$_.INITIATE_IMAGE_UPLOAD]: (0, Chunk420970.T)(Chunk652215.e$_.INITIATE_IMAGE_UPLOAD, {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj, Chunk613057.VH]
    },
    handler(e) {
      var t;
      let {
        socket: n
      } = e, r = n.application.id;
      if (null == r) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "No application.");
      let i = null == (t = (0, L.A)()) ? true : t.id;
      return new Promise((e, t) => {
        ! function(e, t) {
          let n;
          if ((0, h.f)()) n = E.A.getWindow(k.MLl.ACTIVITY_POPOUT);
          else {
            var r;
            let e = S.A.getLastFocusedWindowId();
            n = null == e ? null : null == (r = (0, b.Iy)(e)) ? true : r.renderWindow
          }
          if (null == n) throw new x.A({
            errorCode: k.Lw6.UNKNOWN_ERROR
          }, "No valid window found");
          let i = n.document.createElement("input");
          i.style.display = "none", i.type = "file", i.accept = "image/jpeg, image/jpg, image/png, image/gif";
          let l = () => {
            (null == i.files || 0 === i.files.length) && t(), n.document.body.removeEventListener("focus", l, true), setTimeout(() => {
              n.document.body.removeChild(i)
            }, 1e3)
          };
          i.addEventListener("change", () => {
            (0, C.Vq)(i.files) && e(i.files[0]), l()
          }), i.addEventListener("cancel", () => {
            l()
          }), n.document.body.addEventListener("focus", l, true), n.document.body.appendChild(i), i.click()
        }(async n => {
          let l = await (0, g.CS)(r, i, n);
          (0, C.Vq)(l) && (0, C.Vq)(l.url) && !(l instanceof p.A) ? e({
            image_url: l.url
          }): t(l)
        }, () => t(Error("Upload canceled")))
      }).catch(e => {
        var t;
        throw new x.A({
          errorCode: k.Lw6.UNKNOWN_ERROR
        }, null != (t = null == e ? true : e.message) ? t : "Failed to upload image")
      })
    }
  }),
  [Chunk652215.e$_.OPEN_SHARE_MOMENT_DIALOG]: (0, Chunk420970.T)(Chunk652215.e$_.OPEN_SHARE_MOMENT_DIALOG, {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.VH]
    },
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          mediaUrl: r
        }
      } = e;
      (0, P.lG)(n.transport);
      let i = n.application.id;
      if (null == i) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "No application.");
      if (!(0, l.Lt)(null != (t = n.application.flags) ? t : 0, k.gfo.EMBEDDED)) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "This application cannot access this API");
      let a = (0, L.A)();
      if (!T.A.isDiscordCdnUrl(r)) throw new x.A({
        errorCode: k.Lw6.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, A.g)({
        applicationId: i,
        channelId: null == a ? true : a.id,
        mediaUrl: r
      })
    }
  }),
  [Chunk652215.e$_.SHARE_INTERACTION]: (0, Chunk420970.T)(Chunk652215.e$_.SHARE_INTERACTION, {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk613057.VH, Chunk613057.hj]
    },
    handler(e) {
      var t;
      let n, {
          socket: r,
          args: {
            command: i,
            preview_image: a,
            components: o,
            require_launch_channel: c,
            content: u,
            options: d,
            pid: p
          }
        } = e,
        h = r.application.id;
      if (null == h) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "No application.");
      if (!U.mO.includes(h)) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "Unsupported application.");
      if (!(0, l.Lt)(null != (t = r.application.flags) ? t : 0, k.gfo.EMBEDDED)) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "This application cannot access this API");
      let g = (0, L.A)();
      if (null == g && c) throw new x.A({
        errorCode: k.Lw6.INVALID_COMMAND
      }, "No channel found");
      if (null !== a || null !== o || null !== u) {
        let e = [];
        true !== a && (e = [{
          id: N.default.cast(N.default.fromTimestamp(Date.now())),
          size: 0,
          proxy_url: a.url,
          filename: "preview",
          url: a.url,
          height: a.height,
          width: a.width
        }]), n = new O.Ay({
          id: N.default.cast(N.default.fromTimestamp(Date.now())),
          applicationId: h,
          content: u,
          components: o,
          attachments: e
        })
      }
      return new Promise(e => {
        let t = false,
          r = (0, D.d5)(p),
          l = s.SYi;
        (E.A.getWindowOpen(k.MLl.ACTIVITY_POPOUT) || r.context === k.BRT.POPOUT) && (l = s.KX8), (0, _.m)({
          applicationId: h,
          channel: g,
          command: {
            name: i,
            options: d
          },
          requireLaunchChannel: true === c,
          onShareResult: n => {
            t || (t = n), r.lock(), e({
              success: t
            })
          },
          previewMessage: n,
          contextKey: l
        })
      })
    }
  })
}