/** Chunk was on 27978 **/
/** chunk id: 494526, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
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
  Chunk967557 = require("./967557.js"),
  Chunk10198 = require("./10198.js");
let Chunk515695 = require("./515695.js"),
  T = new Chunk710845.Z("LoginQRSocket");

function Z(e) {
  let {
    text: t = ""
  } = e, [n, l] = i.useState(false);
  return i.useEffect(() => {
    let e = new Image;
    e.src = A, e.onload = () => l(true), e.onerror = () => l(true)
  }, [A]), i.useEffect(() => {
    n && u.uvj.announce(O.intl.string(O.t.j2p129))
  }, [n]), (0, r.jsx)("div", {
    className: y.qrCodeContainer,
    children: "" !== t && n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.ZP, {
        className: y.qrCode,
        size: 160,
        text: t
      }), (0, r.jsx)("div", {
        className: y.qrCodeOverlay,
        children: (0, r.jsx)("img", {
          src: A,
          alt: ""
        })
      })]
    }) : (0, r.jsx)("div", {
      className: y.qrCodeOverlay,
      "aria-label": O.intl.string(O.t.BUGkVF),
      "aria-busy": true,
      children: (0, r.jsx)(u.$jN, {
        className: y.qrCode,
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
    conditionalMediationAbortController: s,
    isPasswordlessActive: a
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Z, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, r.jsx)(p.Dx, {
          className: C.marginBottom8,
          children: O.intl.string(O.t.UPiHaG)
        }), null != i ? (0, r.jsx)(P, {
          children: i
        }) : (0, r.jsx)(p.DK, {
          children: O.intl.format(O.t["Qq+A6u"], {})
        }), (0, r.jsx)(c.zx, {
          size: c.Ph.LARGE,
          look: c.iL.LINK,
          color: c.Tt.LINK,
          disabled: a,
          onClick: () => (function(e) {
            let t = v.isPlatformEmbedded && I.ZP.supportsFeature(N.eRX.WEBAUTHN) ? I.ZP.webAuthnAuthenticate : e => {
              let t = (0, l.wz)(JSON.parse(e));
              return (0, l.U2)(t).then(e => JSON.stringify(e))
            };
            d.Z.authenticatePasswordless({
              authenticateFunc: t,
              conditionalMediationAbortController: e
            }).catch(() => {})
          })(s),
          children: O.intl.string(O.t["/kpMDg"])
        })]
      });
    case 3:
    case 2: {
      let {
        user: e
      } = t;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.Z, {
          className: y.qrAvatar,
          user: e,
          size: u.EFr.SIZE_120,
          isMobile: true,
          status: S.Sk.ONLINE
        }), (0, r.jsx)(p.Dx, {
          className: C.marginBottom8,
          children: O.intl.string(O.t.apGCUV)
        }), (0, r.jsx)(p.DK, {
          children: O.intl.format(O.t.Cbl5JC, {
            username: "".concat(j.ZP.getUserTag(e))
          })
        }), (0, r.jsx)(c.zx, {
          look: c.zx.Looks.BLANK,
          color: c.zx.Colors.LINK,
          size: c.zx.Sizes.MIN,
          onClick: n,
          className: y.startOverButton,
          children: O.intl.string(O.t.nOOhws)
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

function L(e) {
  let {
    authTokenCallback: t,
    conditionalMediationAbortController: n
  } = e, l = (0, a.e7)([x.default], () => x.default.getIsPasswordlessActive()), {
    state: c,
    rsaKeyPair: d,
    cancel: h,
    handleFailure: p
  } = function(e) {
    let [t, n] = i.useState(0), [r, l] = i.useState(false), [a, o] = i.useState({
      step: 0
    }), [c, u] = i.useState(null), d = (0, g.Z)(), h = i.useMemo(() => new s.Z(1500, 3e4), []), p = (0, m.Z)(() => {
      o({
        step: 0
      }), d ? n(e => e + 1) : (T.info("document is not visible, will defer reconnection when document becomes visible."), l(true))
    }), f = i.useCallback(() => {
      T.error("Could not complete QR code login, trying to restart with a new QR code."), o({
        step: 0
      }), h.pending || h.fail(p)
    }, [p, h]);
    return i.useEffect(() => {
      d && r && 0 === a.step && (T.info("reconnecting, now that document is visible"), l(false), n(e => e + 1))
    }, [a, d, r, l]), i.useEffect(() => {
      let t = Date.now(),
        n = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
        r = new WebSocket(n);
      T.info("[0ms] connecting to ".concat(n));
      let i = e => T.info("[".concat("".concat(Date.now() - t, "ms"), "] ").concat(e)),
        l = null,
        s = null,
        a = null,
        c = null,
        d = true;

      function g() {
        if (null != l) return l;
        throw Error("No key pair set")
      }
      let m = () => {
        d ? (d = false, r.send(JSON.stringify({
          op: "heartbeat"
        }))) : (i("heartbeat timeout, reconnecting."), r.close(), f())
      };
      return r.onmessage = async t => {
        let {
          data: n
        } = t, l = JSON.parse(n);
        switch (l.op) {
          case "nonce_proof": {
            let e = l.encrypted_nonce,
              t = await (0, b.qd)(g(), e);
            i("computed nonce proof"), r.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            h.succeed(), E.S.dispatch(N.CkL.WAVE_EMPHASIZE);
            let e = await (0, b.Pk)(g());
            if (e !== l.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(l.fingerprint));
            i("handshake complete awaiting remote auth."), o({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = l.ticket;
            null == e && f(), o({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            E.S.dispatch(N.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
            let e = l.encrypted_user_payload;
            o({
              step: 3,
              user: await (0, b.Rq)(g(), e)
            });
            return
          }
          case "pending_finish": {
            E.S.dispatch(N.CkL.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
            let e = l.encrypted_user_payload;
            o({
              step: 2,
              user: await (0, b.Rq)(g(), e)
            });
            return
          }
          case "finish": {
            E.S.dispatch(N.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
            let t = l.encrypted_token;
            o({
              step: 5
            }), e(await (0, b.FW)(g(), t), await (0, b.Pk)(g()));
            return
          }
          case "cancel":
            i("remote auth handshake cancelled."), p();
            return;
          case "hello": {
            i("got hello, auth timeout=".concat(l.timeout_ms, "ms"));
            let e = l.heartbeat_interval;
            c = setTimeout(() => {
              c = null, m(), a = setInterval(m, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            d = true
        }
      }, r.onopen = async () => {
        l = await (0, b.W_)(), s = await (0, b.dK)(l);
        let e = await (0, b.Pk)(l);
        i("connected, handshaking with fingerprint: ".concat(e)), r.send(JSON.stringify({
          op: "init",
          encoded_public_key: s
        })), u(l)
      }, r.onclose = e => {
        i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), f()
      }, r.onerror = e => {
        i("disconnected, error: ".concat(JSON.stringify(e))), f()
      }, () => {
        i("cleaning up"), r.onopen = () => null, r.onmessage = () => null, r.onclose = () => null, r.onerror = () => null, r.close(1e3), h.cancel(), null != c && clearTimeout(c), null != a && clearInterval(a)
      }
    }, [p, e, t, h, f]), {
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
  }(c.step);
  return i.useEffect(() => {
    4 === c.step && null != c.ticket && o.tn.post({
      url: N.ANM.REMOTE_AUTH_LOGIN,
      body: {
        ticket: c.ticket
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(async e => {
      if (null != d) try {
        let n = await (0, b.FW)(d, e.body.encrypted_token),
          r = await (0, b.Pk)(d);
        t(n, r)
      } catch (e) {
        p()
      } else p()
    }).catch(() => {
      p()
    })
  }, [c, t, d, p]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: y.verticalSeparator
    }), (0, r.jsx)(u.qBt, {
      fillParent: true,
      className: y.qrLogin,
      step: f,
      steps: [0, 1],
      children: (0, r.jsx)("div", {
        className: y.qrLoginInner,
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