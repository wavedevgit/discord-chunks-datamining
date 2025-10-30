/** Chunk was on 1272 **/
/** chunk id: 443952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js"), require("./415506.js"), require("./997841.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk243814 = require("./243814.js"),
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
  Chunk630388 = require("./630388.js"),
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
    l = y.Z.getApplicationActivity(t);
  if (null == l || null == l.secrets || !(0, A.t9)(r, l.party, l.secrets)) throw new x.Z({
    errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY
  }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
  let a = (0, h.Z)(l, v.Z);
  if (a) {
    let {
      lock: t
    } = (0, R.jU)(e);
    return (0, o.h7)(l, a).then(() => {
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
      } = e, n = I.Z.getDMFromUserId(t);
      null != n && (0, u.ack)(n, {
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
          application_id: s
        }
      } = e, o = t.transport === D.He.IPC && null != s ? s : t.application.id;
      if (null == o) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      let u = Promise.resolve(false);
      return n === M.mFx.JOIN && (u = c.Z.join({
        userId: r,
        sessionId: i,
        applicationId: o,
        channelId: l,
        messageId: a
      })), u.then(e => {
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
        guild: s,
        frame: c
      } = (0, L.T)(), u = (0, m.ZP)({
        application: t.application,
        channelId: null == l ? true : l.id
      }), d = null != u ? E.Z.getWindow(u) : true;
      (null == d ? true : d.closed) && (d = true);
      let p = null != d ? M.IlC.POPOUT : M.IlC.APP;
      if ((0, P.Pr)({}, null == d ? true : d.document), null != c) {
        if (c.applicationId !== i.id) throw new x.Z({
          errorCode: M.lTL.INVALID_COMMAND
        }, "Application is not currently mounted.");
        let e = y.Z.getApplicationActivity(i.id);
        if (null != e)(0, o.h7)(e, false, p);
        else throw new x.Z({
          errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure an activity was set using setActivity.")
      } else(0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
        return t => {
          var n, a;
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
          }({}, t), a = a = {
            guild: s,
            channel: l,
            applicationId: i.id,
            analyticsLocation: M.Sbl.ACTIVITY_RPC,
            source: M.t4x.ACTIVITY_INVITE
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
          }), n))
        }
      }, {
        contextKey: p === M.IlC.POPOUT ? a.u1M : a.z1l
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
          if ((0, p.R)()) n = E.Z.getWindow(M.KJ3.ACTIVITY_POPOUT);
          else {
            var r;
            let e = C.Z.getLastFocusedWindowId();
            n = null == e ? null : null == (r = (0, b.g0)(e)) ? true : r.renderWindow
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
          let l = await (0, f.kv)(r, i, n);
          (0, T.lm)(l) && (0, T.lm)(l.url) && !(l instanceof d.Z) ? e({
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
      if (!(0, S.yE)(null != (t = n.application.flags) ? t : 0, M.udG.EMBEDDED)) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "This application cannot access this API");
      let l = (0, w.Z)();
      if (!j.Z.isDiscordCdnUrl(r)) throw new x.Z({
        errorCode: M.lTL.INVALID_PAYLOAD
      }, "mediaUrl must be a Discord CDN url");
      (0, g.Z)({
        applicationId: i,
        channelId: null == l ? true : l.id,
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
            preview_image: l,
            components: s,
            require_launch_channel: o,
            content: c,
            options: u,
            pid: d
          }
        } = e,
        p = r.application.id;
      if (null == p) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No application.");
      if (!k.Cr.includes(p)) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "Unsupported application.");
      if (!(0, S.yE)(null != (t = r.application.flags) ? t : 0, M.udG.EMBEDDED)) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "This application cannot access this API");
      let f = (0, w.Z)();
      if (null == f && o) throw new x.Z({
        errorCode: M.lTL.INVALID_COMMAND
      }, "No channel found");
      if (null !== l || null !== s || null !== c) {
        let e = [];
        true !== l && (e = [{
          id: N.default.cast(N.default.fromTimestamp(Date.now())),
          size: 0,
          proxy_url: l.url,
          filename: "preview",
          url: l.url,
          height: l.height,
          width: l.width
        }]), n = new O.ZP({
          id: N.default.cast(N.default.fromTimestamp(Date.now())),
          applicationId: p,
          content: c,
          components: s,
          attachments: e
        })
      }
      return new Promise(e => {
        let t = false,
          r = (0, R.jU)(d),
          l = a.z1l;
        (E.Z.getWindowOpen(M.KJ3.ACTIVITY_POPOUT) || r.context === M.IlC.POPOUT) && (l = a.u1M), (0, _.M)({
          applicationId: p,
          channel: f,
          command: {
            name: i,
            options: u
          },
          requireLaunchChannel: true === o,
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