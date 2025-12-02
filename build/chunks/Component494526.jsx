/** Chunk was on 27978 **/
/** chunk id: 494526, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk533126 = require("./533126.js"),
  Chunk261470 = require("./261470.js"),
  Chunk399606 = require("./399606.js"),
  Chunk544891 = require("./544891.js"),
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
  T = new Chunk710845.Z("LoginQRSocket");

function A(e) {
  let {
    text: t = ""
  } = e, [n, s] = i.useState(false);
  return i.useEffect(() => {
    let e = new Image;
    e.src = C, e.onload = () => s(true), e.onerror = () => s(true)
  }, [C]), i.useEffect(() => {
    n && c.uvj.announce(y.intl.string(y.t.j2p125))
  }, [n]), (0, r.jsx)("div", {
    className: N.qrCodeContainer,
    children: "" !== t && n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.ZP, {
        className: N.qrCode,
        size: 160,
        text: t
      }), (0, r.jsx)("div", {
        className: N.qrCodeOverlay,
        children: (0, r.jsx)("img", {
          src: C,
          alt: ""
        })
      })]
    }) : (0, r.jsx)("div", {
      className: N.qrCodeOverlay,
      "aria-label": y.intl.string(y.t.BUGkVF),
      "aria-busy": true,
      children: (0, r.jsx)(c.$jN, {
        className: N.qrCode,
        type: c.$jN.Type.WANDERING_CUBES,
        "aria-hidden": true
      })
    })
  })
}
let Z = e => {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: t,
    children: n
  })
};

function P(e) {
  let {
    state: t,
    cancel: n,
    errorMessage: i,
    conditionalMediationAbortController: l,
    isPasswordlessActive: a
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(A, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, r.jsx)(m.Dx, {
          className: O.marginBottom8,
          children: y.intl.string(y.t.UPiHaL)
        }), null != i ? (0, r.jsx)(Z, {
          children: i
        }) : (0, r.jsx)(m.DK, {
          children: y.intl.format(y.t["Qq+A6i"], {})
        }), (0, r.jsx)(c.Kqy, {
          padding: 8,
          align: "center",
          children: (0, r.jsx)(c.Avr, {
            text: y.intl.string(y.t["/kpMDt"]),
            textVariant: "text-sm/normal",
            onClick: () => (function(e) {
              let t = E.isPlatformEmbedded && b.ZP.supportsFeature(I.eRX.WEBAUTHN) ? b.ZP.webAuthnAuthenticate : e => {
                let t = (0, s.wz)(JSON.parse(e));
                return (0, s.U2)(t).then(e => JSON.stringify(e))
              };
              u.Z.authenticatePasswordless({
                authenticateFunc: t,
                conditionalMediationAbortController: e
              }).catch(() => {})
            })(l),
            disabled: a
          })
        })]
      });
    case 3:
    case 2: {
      let {
        user: e
      } = t;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.Z, {
          className: N.qrAvatar,
          user: e,
          size: c.EFr.SIZE_120,
          isMobile: true,
          status: S.Sk.ONLINE
        }), (0, r.jsx)(m.Dx, {
          className: O.marginBottom8,
          children: y.intl.string(y.t.apGCUT)
        }), (0, r.jsx)(m.DK, {
          children: y.intl.format(y.t.Cbl5JK, {
            username: "".concat(j.ZP.getUserTag(e))
          })
        }), (0, r.jsx)("div", {
          className: N.startOverButton,
          children: (0, r.jsx)(c.Avr, {
            text: y.intl.string(y.t.nOOhwo),
            textVariant: "text-sm/normal",
            onClick: n
          })
        })]
      })
    }
    case 4:
    case 5:
      return (0, r.jsx)(c.$jN, {
        type: c.$jN.Type.WANDERING_CUBES
      })
  }
}

function R(e) {
  let {
    authTokenCallback: t,
    conditionalMediationAbortController: n
  } = e, s = (0, a.e7)([_.default], () => _.default.getIsPasswordlessActive()), {
    state: u,
    rsaKeyPair: d,
    cancel: m,
    handleFailure: p
  } = function(e) {
    let [t, n] = i.useState(0), [r, s] = i.useState(false), [a, o] = i.useState({
      step: 0
    }), [c, u] = i.useState(null), d = (0, h.Z)(), m = i.useMemo(() => new l.Z(1500, 3e4), []), p = (0, g.Z)(() => {
      o({
        step: 0
      }), d ? n(e => e + 1) : (T.info("document is not visible, will defer reconnection when document becomes visible."), s(true))
    }), f = i.useCallback(() => {
      T.error("Could not complete QR code login, trying to restart with a new QR code."), o({
        step: 0
      }), m.pending || m.fail(p)
    }, [p, m]);
    return i.useEffect(() => {
      d && r && 0 === a.step && (T.info("reconnecting, now that document is visible"), s(false), n(e => e + 1))
    }, [a, d, r, s]), i.useEffect(() => {
      let t = Date.now(),
        n = "".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2");
      n.startsWith("//") && (n = "wss:".concat(n));
      let r = new WebSocket(n);
      T.info("[0ms] connecting to ".concat(n));
      let i = e => T.info("[".concat("".concat(Date.now() - t, "ms"), "] ").concat(e)),
        s = null,
        l = null,
        a = null,
        c = null,
        d = true;

      function h() {
        if (null != s) return s;
        throw Error("No key pair set")
      }
      let g = () => {
        d ? (d = false, r.send(JSON.stringify({
          op: "heartbeat"
        }))) : (i("heartbeat timeout, reconnecting."), r.close(), f())
      };
      return r.onmessage = async t => {
        let {
          data: n
        } = t, s = JSON.parse(n);
        switch (s.op) {
          case "nonce_proof": {
            let e = s.encrypted_nonce,
              t = await (0, v.qd)(h(), e);
            i("computed nonce proof"), r.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            m.succeed(), x.S.dispatch(I.CkL.WAVE_EMPHASIZE);
            let e = await (0, v.Pk)(h());
            if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
            i("handshake complete awaiting remote auth."), o({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = s.ticket;
            null == e && f(), o({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            x.S.dispatch(I.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
            let e = s.encrypted_user_payload;
            o({
              step: 3,
              user: await (0, v.Rq)(h(), e)
            });
            return
          }
          case "pending_finish": {
            x.S.dispatch(I.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
            let e = s.encrypted_user_payload;
            o({
              step: 2,
              user: await (0, v.Rq)(h(), e)
            });
            return
          }
          case "finish": {
            x.S.dispatch(I.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
            let t = s.encrypted_token;
            o({
              step: 5
            }), e(await (0, v.FW)(h(), t), await (0, v.Pk)(h()));
            return
          }
          case "cancel":
            i("remote auth handshake cancelled."), p();
            return;
          case "hello": {
            i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
            let e = s.heartbeat_interval;
            c = setTimeout(() => {
              c = null, g(), a = setInterval(g, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            d = true
        }
      }, r.onopen = async () => {
        s = await (0, v.W_)(), l = await (0, v.dK)(s);
        let e = await (0, v.Pk)(s);
        i("connected, handshaking with fingerprint: ".concat(e)), r.send(JSON.stringify({
          op: "init",
          encoded_public_key: l
        })), u(s)
      }, r.onclose = e => {
        i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), f()
      }, r.onerror = e => {
        i("disconnected, error: ".concat(JSON.stringify(e))), f()
      }, () => {
        i("cleaning up"), r.onopen = () => null, r.onmessage = () => null, r.onclose = () => null, r.onerror = () => null, r.close(1e3), m.cancel(), null != c && clearTimeout(c), null != a && clearInterval(a)
      }
    }, [p, e, t, m, f]), {
      state: a,
      rsaKeyPair: c,
      cancel: p,
      handleFailure: f
    }
  }(t), f = function(e) {
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
  }(u.step);
  return i.useEffect(() => {
    4 === u.step && null != u.ticket && o.tn.post({
      url: I.ANM.REMOTE_AUTH_LOGIN,
      body: {
        ticket: u.ticket
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(async e => {
      if (null != d) try {
        let n = await (0, v.FW)(d, e.body.encrypted_token),
          r = await (0, v.Pk)(d);
        t(n, r)
      } catch (e) {
        p()
      } else p()
    }).catch(() => {
      p()
    })
  }, [u, t, d, p]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: N.verticalSeparator
    }), (0, r.jsx)(c.qBt, {
      fillParent: true,
      className: N.qrLogin,
      step: f,
      steps: [0, 1],
      children: (0, r.jsx)("div", {
        className: N.qrLoginInner,
        children: (0, r.jsx)(P, {
          state: u,
          cancel: m,
          conditionalMediationAbortController: n,
          isPasswordlessActive: s
        })
      })
    })]
  })
}