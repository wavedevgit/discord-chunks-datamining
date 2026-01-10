/** Chunk was on 1272 **/
/** chunk id: 443952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js"), require("./415506.js"), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk243814 = require("./243814.js"),
  Chunk95015 = require("./95015.js"),
  Chunk45792 = require("./45792.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk24124 = require("./24124.js"),
  Chunk224706 = require("./224706.js"),
  Chunk45114 = require("./45114.js"),
  Chunk479531 = require("./479531.js"),
  Chunk636449 = require("./636449.js"),
  Chunk566620 = require("./566620.js"),
  Chunk531826 = require("./531826.js"),
  Chunk596223 = require("./596223.js"),
  Chunk838195 = require("./838195.jsx"),
  Chunk333861 = require("./333861.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk23750 = require("./23750.js"),
  Chunk592125 = require("./592125.js"),
  Chunk293273 = require("./293273.js"),
  Chunk885110 = require("./885110.js"),
  Chunk451478 = require("./451478.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk591759 = require("./591759.js"),
  Chunk228488 = require("./228488.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk452426 = require("./452426.js"),
  Chunk561205 = require("./561205.js"),
  Chunk600027 = require("./600027.js"),
  Chunk852926 = require("./852926.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js");
async function U(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : "",
    l = I.Z.getApplicationActivity(t);
  if (null == l || null == l.secrets || !(0, A.t9)(r, l.party, l.secrets)) throw new x.Z({
    errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let a = (0, m.Z)(l, C.Z);
  if (a) {
    let {
      lock: t
    } = (0, R.jU)(e);
    return (0, c.h7)(l, a).then(() => {
      throw t(), new x.Z({
        errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure user does have have privacy enabled.")
    })
  }
  await s.Z.sendActivityInviteUser({
    userId: n,
    type: r,
    activity: l,
    content: i,
    location: "In-Game Invite"
  })
}
let G = {
  [Chunk981631.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          pid: r
        }
      } = e, i = t.application.id;
      if (null == i) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      return U(r, i, n, M.mFx.JOIN)
    }
  },
  [Chunk981631.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    handler(e) {
      let {
        args: {
          user_id: t
        }
      } = e, n = y.Z.getDMFromUserId(t);
      null != n && (0, d.ack)(n, {
        section: M.jXE.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
        object: M.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
        objectType: M.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
      }, true, true)
    }
  },
  [Chunk981631.Etm.ACTIVITY_INVITE_USER]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    validation: e => (0, Z.Z)(e).required().keys({
      user_id: e.string().required(),
      type: e.number().required().valid([M.mFx.JOIN]),
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
      if (null == a) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      return U(l, a, r, n, i)
    }
  },
  [Chunk981631.Etm.ACCEPT_ACTIVITY_INVITE]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    validation: e => (0, Z.Z)(e).required().keys({
      type: e.number().required().valid([M.mFx.JOIN]),
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
          application_id: o
        }
      } = e, s = t.transport === D.He.IPC && null != o ? o : t.application.id;
      if (null == s) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      let c = Promise.resolve(false);
      return n === M.mFx.JOIN && (c = u.Z.join({
        userId: r,
        sessionId: i,
        applicationId: s,
        channelId: l,
        messageId: a
      })), c.then(e => {
        if (!e) throw new x.Z({
          errorCode: M.lTL.INVALID_INVITE
        }, "Invite is expired or invalid.")
      })
    }
  },
  [Chunk981631.Etm.OPEN_INVITE_DIALOG]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH, Chunk186901.wE]
    },
    handler(e) {
      let {
        socket: t
      } = e, i = t.application;
      if (null == i.id) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      let {
        channel: l,
        guild: a,
        frame: s
      } = (0, L.T)(), u = (0, h.ZP)({
        application: t.application,
        channelId: null == l ? true : l.id
      }), d = null != u ? O.Z.getWindow(u) : true;
      (null == d ? true : d.closed) && (d = true);
      let p = null != d ? M.IlC.POPOUT : M.IlC.APP;
      if ((0, P.Pr)({}, null == d ? true : d.document), null != s) {
        if (s.applicationId !== i.id) throw new x.Z({
          errorCode: M.lTL.INVALID_COMMAND
        }, "Application is not currently mounted.");
        let e = I.Z.getApplicationActivity(i.id);
        if (null != e)(0, c.h7)(e, false, p);
        else throw new x.Z({
          errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure an activity was set using setActivity.")
      } else(0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7654"), n.e("45965")]).then(n.bind(n, 560114));
        return t => {
          var n, o;
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
          }({}, t), o = o = {
            guild: a,
            channel: l,
            applicationId: i.id,
            analyticsLocation: M.Sbl.ACTIVITY_RPC,
            source: M.t4x.ACTIVITY_INVITE
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
          }), n))
        }
      }, {
        contextKey: p === M.IlC.POPOUT ? o.u1M : o.z1l
      })
    }
  },
  [Chunk981631.Etm.INITIATE_IMAGE_UPLOAD]: (0, Chunk45792.S)(Chunk981631.Etm.INITIATE_IMAGE_UPLOAD, {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH, Chunk186901.wE]
    },
    handler(e) {
      var t;
      let {
        socket: n
      } = e, r = n.application.id;
      if (null == r) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      let i = null == (t = (0, w.Z)()) ? true : t.id;
      return new Promise((e, t) => {
        ! function(e, t) {
          let n;
          if ((0, f.R)()) n = O.Z.getWindow(M.KJ3.ACTIVITY_POPOUT);
          else {
            var r;
            let e = S.Z.getLastFocusedWindowId();
            n = null == e ? null : null == (r = (0, E.g0)(e)) ? true : r.renderWindow
          }
          if (null == n) throw new x.Z({
            errorCode: M.lTL.UNKNOWN_ERROR
          }, "No valid window found");
          let i = n.document.createElement("input");
          i.style.display = "none", i.type = "file", i.accept = "image/jpeg, image/jpg, image/png, image/gif";
          let l = () => {
            (null == i.files || 0 === i.files.length) && t(), n.document.body.removeEventListener("focus", l, true), setTimeout(() => {
              n.document.body.removeChild(i)
            }, 1e3)
          };
          i.addEventListener("change", () => {
            (0, T.lm)(i.files) && e(i.files[0]), l()
          }), i.addEventListener("cancel", () => {
            l()
          }), n.document.body.addEventListener("focus", l, true), n.document.body.appendChild(i), i.click()
        }(async n => {
          let l = await (0, g.kv)(r, i, n);
          (0, T.lm)(l) && (0, T.lm)(l.url) && !(l instanceof p.Z) ? e({
            image_url: l.url
          }): t(l)
        }, () => t(Error("Upload canceled")))
      }).catch(e => {
        var t;
        throw new x.Z({
          errorCode: M.lTL.UNKNOWN_ERROR
        }, null != (t = null == e ? true : e.message) ? t : "Failed to upload image")
      })
    }
  }),
  [Chunk981631.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, Chunk45792.S)(Chunk981631.Etm.OPEN_SHARE_MOMENT_DIALOG, {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.wE]
    },
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          mediaUrl: r
        }
      } = e;
      (0, A.bu)(n.transport);
      let i = n.application.id;
      if (null == i) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      if (!(0, l.yE)(null != (t = n.application.flags) ? t : 0, M.udG.EMBEDDED)) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "This application cannot access this API");
      let a = (0, w.Z)();
      if (!j.Z.isDiscordCdnUrl(r)) throw new x.Z({
        errorCode: M.lTL.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, b.Z)({
        applicationId: i,
        channelId: null == a ? true : a.id,
        mediaUrl: r
      })
    }
  }),
  [Chunk981631.Etm.SHARE_INTERACTION]: (0, Chunk45792.S)(Chunk981631.Etm.SHARE_INTERACTION, {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.lH]
    },
    handler(e) {
      var t;
      let n, {
          socket: r,
          args: {
            command: i,
            preview_image: a,
            components: s,
            require_launch_channel: c,
            content: u,
            options: d,
            pid: p
          }
        } = e,
        f = r.application.id;
      if (null == f) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      if (!k.Cr.includes(f)) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "Unsupported application.");
      if (!(0, l.yE)(null != (t = r.application.flags) ? t : 0, M.udG.EMBEDDED)) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "This application cannot access this API");
      let g = (0, w.Z)();
      if (null == g && c) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No channel found");
      if (null !== a || null !== s || null !== u) {
        let e = [];
        true !== a && (e = [{
          id: N.default.cast(N.default.fromTimestamp(Date.now())),
          size: 0,
          proxy_url: a.url,
          filename: "preview",
          url: a.url,
          height: a.height,
          width: a.width
        }]), n = new v.ZP({
          id: N.default.cast(N.default.fromTimestamp(Date.now())),
          applicationId: f,
          content: u,
          components: s,
          attachments: e
        })
      }
      return new Promise(e => {
        let t = false,
          r = (0, R.jU)(p),
          l = o.z1l;
        (O.Z.getWindowOpen(M.KJ3.ACTIVITY_POPOUT) || r.context === M.IlC.POPOUT) && (l = o.u1M), (0, _.M)({
          applicationId: f,
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