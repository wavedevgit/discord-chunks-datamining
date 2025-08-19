/** Chunk was on 27978 **/
/** chunk id: 494526, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533126 = require("./533126.js"),
  Chunk261470 = require("./261470.js"),
  Chunk399606 = require("./399606.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk937154 = require("./937154.js"),
  Chunk448986 = require("./448986.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk198993 = require("./198993.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk172517 = require("./172517.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819286 = require("./819286.js"),
  Chunk197571 = require("./197571.js");
let Chunk515695 = require("./515695.js"),
  A = new Chunk710845.Z("LoginQRSocket");

function Z(e) {
  let {
    text: t = ""
  } = e, [n, l] = i.useState(false);
  return i.useEffect(() => {
    let e = new Image;
    e.src = T, e.onload = () => l(true), e.onerror = () => l(true)
  }, [T]), i.useEffect(() => {
    n && u.uvj.announce(N.intl.string(N.t.j2p129))
  }, [n]), (0, r.jsx)("div", {
    className: S.qrCodeContainer,
    children: "" !== t && n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.ZP, {
        className: S.qrCode,
        size: 160,
        text: t
      }), (0, r.jsx)("div", {
        className: S.qrCodeOverlay,
        children: (0, r.jsx)("img", {
          src: T,
          alt: ""
        })
      })]
    }) : (0, r.jsx)("div", {
      className: S.qrCodeOverlay,
      "aria-label": N.intl.string(N.t.BUGkVF),
      "aria-busy": true,
      children: (0, r.jsx)(u.$jN, {
        className: S.qrCode,
        type: u.$jN.Type.WANDERING_CUBES,
        "aria-hidden": true
      })
    })
  })
}
let P = e => {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: t,
    children: n
  })
};

function R(e) {
  let {
    state: t,
    cancel: n,
    errorMessage: i,
    conditionalMediationAbortController: a,
    isPasswordlessActive: o
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Z, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, r.jsx)(f.Dx, {
          className: C.marginBottom8,
          children: N.intl.string(N.t.UPiHaG)
        }), null != i ? (0, r.jsx)(P, {
          children: i
        }) : (0, r.jsx)(f.DK, {
          children: N.intl.format(N.t["Qq+A6u"], {})
        }), (0, r.jsx)(c.zx, {
          size: c.Ph.LARGE,
          look: c.iL.LINK,
          color: c.Tt.LINK,
          disabled: o,
          onClick: () => (function(e) {
            let t = v.isPlatformEmbedded && I.ZP.supportsFeature(y.eRX.WEBAUTHN) ? I.ZP.webAuthnAuthenticate : e => {
              let t = (0, l.wz)(JSON.parse(e));
              return (0, l.U2)(t).then(e => JSON.stringify(e))
            };
            d.Z.authenticatePasswordless({
              authenticateFunc: t,
              conditionalMediationAbortController: e
            }).catch(() => {})
          })(a),
          children: N.intl.string(N.t["/kpMDg"])
        })]
      });
    case 3:
    case 2: {
      let {
        user: e
      } = t;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.Z, {
          className: S.qrAvatar,
          user: e,
          size: u.EFr.SIZE_120,
          isMobile: true,
          status: O.Sk.ONLINE
        }), (0, r.jsx)(f.Dx, {
          className: C.marginBottom8,
          children: N.intl.string(N.t.apGCUV)
        }), (0, r.jsx)(f.DK, {
          children: N.intl.format(N.t.Cbl5JC, {
            username: "".concat(j.ZP.getUserTag(e))
          })
        }), (0, r.jsx)(c.zx, {
          look: c.zx.Looks.BLANK,
          color: c.zx.Colors.LINK,
          size: c.zx.Sizes.MIN,
          onClick: n,
          className: S.startOverButton,
          children: N.intl.string(N.t.nOOhws)
        })]
      })
    }
    case 4:
    case 5:
      return (0, r.jsx)(u.$jN, {
        type: u.$jN.Type.WANDERING_CUBES
      })
  }
}

function w(e) {
  let {
    authTokenCallback: t,
    conditionalMediationAbortController: n
  } = e, l = (0, o.e7)([x.default], () => x.default.getIsPasswordlessActive()), {
    state: c,
    rsaKeyPair: d,
    cancel: h,
    handleFailure: f
  } = function(e) {
    let [t, n] = i.useState(0), [r, l] = i.useState(false), [o, s] = i.useState({
      step: 0
    }), [c, u] = i.useState(null), d = (0, p.Z)(), h = i.useMemo(() => new a.Z(1500, 3e4), []), f = (0, m.Z)(() => {
      s({
        step: 0
      }), d ? n(e => e + 1) : (A.info("document is not visible, will defer reconnection when document becomes visible."), l(true))
    }), g = i.useCallback(() => {
      A.error("Could not complete QR code login, trying to restart with a new QR code."), s({
        step: 0
      }), h.pending || h.fail(f)
    }, [f, h]);
    return i.useEffect(() => {
      d && r && 0 === o.step && (A.info("reconnecting, now that document is visible"), l(false), n(e => e + 1))
    }, [o, d, r, l]), i.useEffect(() => {
      let t = Date.now(),
        n = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
        r = new WebSocket(n);
      A.info("[0ms] connecting to ".concat(n));
      let i = e => A.info("[".concat("".concat(Date.now() - t, "ms"), "] ").concat(e)),
        l = null,
        a = null,
        o = null,
        c = null,
        d = true;

      function p() {
        if (null != l) return l;
        throw Error("No key pair set")
      }
      let m = () => {
        d ? (d = false, r.send(JSON.stringify({
          op: "heartbeat"
        }))) : (i("heartbeat timeout, reconnecting."), r.close(), g())
      };
      return r.onmessage = async t => {
        let {
          data: n
        } = t, l = JSON.parse(n);
        switch (l.op) {
          case "nonce_proof": {
            let e = l.encrypted_nonce,
              t = await (0, E.qd)(p(), e);
            i("computed nonce proof"), r.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            h.succeed(), b.S.dispatch(y.CkL.WAVE_EMPHASIZE);
            let e = await (0, E.Pk)(p());
            if (e !== l.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(l.fingerprint));
            i("handshake complete awaiting remote auth."), s({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = l.ticket;
            null == e && g(), s({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            b.S.dispatch(y.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
            let e = l.encrypted_user_payload;
            s({
              step: 3,
              user: await (0, E.Rq)(p(), e)
            });
            return
          }
          case "pending_finish": {
            b.S.dispatch(y.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
            let e = l.encrypted_user_payload;
            s({
              step: 2,
              user: await (0, E.Rq)(p(), e)
            });
            return
          }
          case "finish": {
            b.S.dispatch(y.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
            let t = l.encrypted_token;
            s({
              step: 5
            }), e(await (0, E.FW)(p(), t));
            return
          }
          case "cancel":
            i("remote auth handshake cancelled."), f();
            return;
          case "hello": {
            i("got hello, auth timeout=".concat(l.timeout_ms, "ms"));
            let e = l.heartbeat_interval;
            c = setTimeout(() => {
              c = null, m(), o = setInterval(m, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            d = true
        }
      }, r.onopen = async () => {
        l = await (0, E.W_)(), a = await (0, E.dK)(l);
        let e = await (0, E.Pk)(l);
        i("connected, handshaking with fingerprint: ".concat(e)), r.send(JSON.stringify({
          op: "init",
          encoded_public_key: a
        })), u(l)
      }, r.onclose = e => {
        i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), g()
      }, r.onerror = e => {
        i("disconnected, error: ".concat(JSON.stringify(e))), g()
      }, () => {
        i("cleaning up"), r.onopen = () => null, r.onmessage = () => null, r.onclose = () => null, r.onerror = () => null, r.close(1e3), h.cancel(), null != c && clearTimeout(c), null != o && clearInterval(o)
      }
    }, [f, e, t, h, g]), {
      state: o,
      rsaKeyPair: c,
      cancel: f,
      handleFailure: g
    }
  }(t), g = function(e) {
    switch (e) {
      case 0:
      case 1:
        return 0;
      case 3:
      case 2:
      case 4:
      case 5:
        return 1
    }
  }(c.step);
  return i.useEffect(() => {
    4 === c.step && null != c.ticket && s.tn.post({
      url: y.ANM.REMOTE_AUTH_LOGIN,
      body: {
        ticket: c.ticket
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(async e => {
      if (null != d) try {
        let n = await (0, E.FW)(d, e.body.encrypted_token);
        t(n)
      } catch (e) {
        f()
      } else f()
    }).catch(() => {
      f()
    })
  }, [c, t, d, f]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: S.verticalSeparator
    }), (0, r.jsx)(u.qBt, {
      fillParent: true,
      className: S.qrLogin,
      step: g,
      steps: [0, 1],
      children: (0, r.jsx)("div", {
        className: S.qrLoginInner,
        children: (0, r.jsx)(R, {
          state: c,
          cancel: h,
          conditionalMediationAbortController: n,
          isPasswordlessActive: l
        })
      })
    })]
  })
}