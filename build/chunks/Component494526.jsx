/** Chunk was on 27978 **/
/** chunk id: 494526, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk749537 = require("./749537.js"),
  Chunk881488 = require("./881488.js");
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
    n && u.uvj.announce(N.intl.string(N.t.j2p129))
  }, [n]), (0, r.jsx)("div", {
    className: y.qrCodeContainer,
    children: "" !== t && n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.ZP, {
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
      "aria-label": N.intl.string(N.t.BUGkVF),
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
    conditionalMediationAbortController: o,
    isPasswordlessActive: s
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Z, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, r.jsx)(m.Dx, {
          className: C.marginBottom8,
          children: N.intl.string(N.t.UPiHaG)
        }), null != i ? (0, r.jsx)(P, {
          children: i
        }) : (0, r.jsx)(m.DK, {
          children: N.intl.format(N.t["Qq+A6u"], {})
        }), (0, r.jsx)(c.zx, {
          size: c.Ph.LARGE,
          look: c.iL.LINK,
          color: c.Tt.LINK,
          disabled: s,
          onClick: () => (function(e) {
            let t = E.isPlatformEmbedded && I.ZP.supportsFeature(O.eRX.WEBAUTHN) ? I.ZP.webAuthnAuthenticate : e => {
              let t = (0, l.wz)(JSON.parse(e));
              return (0, l.U2)(t).then(e => JSON.stringify(e))
            };
            d.Z.authenticatePasswordless({
              authenticateFunc: t,
              conditionalMediationAbortController: e
            }).catch(() => {})
          })(o),
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
          className: y.qrAvatar,
          user: e,
          size: u.EFr.SIZE_120,
          isMobile: true,
          status: S.Sk.ONLINE
        }), (0, r.jsx)(m.Dx, {
          className: C.marginBottom8,
          children: N.intl.string(N.t.apGCUV)
        }), (0, r.jsx)(m.DK, {
          children: N.intl.format(N.t.Cbl5JC, {
            username: "".concat(j.ZP.getUserTag(e))
          })
        }), (0, r.jsx)(c.zx, {
          look: c.zx.Looks.BLANK,
          color: c.zx.Colors.LINK,
          size: c.zx.Sizes.MIN,
          onClick: n,
          className: y.startOverButton,
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
  } = e, l = (0, s.e7)([x.default], () => x.default.getIsPasswordlessActive()), {
    state: c,
    rsaKeyPair: d,
    cancel: h,
    handleFailure: m
  } = function(e) {
    let [t, n] = i.useState(0), [r, l] = i.useState(false), [s, a] = i.useState({
      step: 0
    }), [c, u] = i.useState(null), d = (0, p.Z)(), h = i.useMemo(() => new o.Z(1500, 3e4), []), m = (0, f.Z)(() => {
      a({
        step: 0
      }), d ? n(e => e + 1) : (T.info("document is not visible, will defer reconnection when document becomes visible."), l(true))
    }), g = i.useCallback(() => {
      T.error("Could not complete QR code login, trying to restart with a new QR code."), a({
        step: 0
      }), h.pending || h.fail(m)
    }, [m, h]);
    return i.useEffect(() => {
      d && r && 0 === s.step && (T.info("reconnecting, now that document is visible"), l(false), n(e => e + 1))
    }, [s, d, r, l]), i.useEffect(() => {
      let t = Date.now(),
        n = () => "".concat(Date.now() - t, "ms"),
        r = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
        i = new WebSocket(r);
      T.info("[0ms] connecting to ".concat(r));
      let l = e => T.info("[".concat(n(), "] ").concat(e)),
        o = null,
        s = null,
        c = null,
        d = null,
        p = true;

      function f() {
        if (null != o) return o;
        throw Error("No key pair set")
      }
      let _ = () => {
        p ? (p = false, i.send(JSON.stringify({
          op: "heartbeat"
        }))) : (l("heartbeat timeout, reconnecting."), i.close(), g())
      };
      return i.onmessage = async t => {
        let {
          data: n
        } = t, r = JSON.parse(n);
        switch (r.op) {
          case "nonce_proof": {
            let e = r.encrypted_nonce,
              t = await (0, v.qd)(f(), e);
            l("computed nonce proof"), i.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            h.succeed(), b.S.dispatch(O.CkL.WAVE_EMPHASIZE);
            let e = await (0, v.Pk)(f());
            if (e !== r.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(r.fingerprint));
            l("handshake complete awaiting remote auth."), a({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = r.ticket;
            null == e && g(), a({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            b.S.dispatch(O.CkL.WAVE_EMPHASIZE), l("remote auth handshake started, awaiting ticket/cancel.");
            let e = r.encrypted_user_payload;
            a({
              step: 3,
              user: await (0, v.Rq)(f(), e)
            });
            return
          }
          case "pending_finish": {
            b.S.dispatch(O.CkL.WAVE_EMPHASIZE), l("remote auth handshake started, awaiting finish/cancel.");
            let e = r.encrypted_user_payload;
            a({
              step: 2,
              user: await (0, v.Rq)(f(), e)
            });
            return
          }
          case "finish": {
            b.S.dispatch(O.CkL.WAVE_EMPHASIZE), l("remote auth handshake finished.");
            let t = r.encrypted_token;
            a({
              step: 5
            }), e(await (0, v.FW)(f(), t));
            return
          }
          case "cancel":
            l("remote auth handshake cancelled."), m();
            return;
          case "hello": {
            l("got hello, auth timeout=".concat(r.timeout_ms, "ms"));
            let e = r.heartbeat_interval;
            d = setTimeout(() => {
              d = null, _(), c = setInterval(_, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            p = true
        }
      }, i.onopen = async () => {
        o = await (0, v.W_)(), s = await (0, v.dK)(o);
        let e = await (0, v.Pk)(o);
        l("connected, handshaking with fingerprint: ".concat(e)), i.send(JSON.stringify({
          op: "init",
          encoded_public_key: s
        })), u(o)
      }, i.onclose = e => {
        l("disconnected, code: ".concat(e.code, " ").concat(e.reason)), g()
      }, i.onerror = e => {
        l("disconnected, error: ".concat(JSON.stringify(e))), g()
      }, () => {
        l("cleaning up"), i.onopen = () => null, i.onmessage = () => null, i.onclose = () => null, i.onerror = () => null, i.close(1e3), h.cancel(), null != d && clearTimeout(d), null != c && clearInterval(c)
      }
    }, [m, e, t, h, g]), {
      state: s,
      rsaKeyPair: c,
      cancel: m,
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
    4 === c.step && null != c.ticket && a.tn.post({
      url: O.ANM.REMOTE_AUTH_LOGIN,
      body: {
        ticket: c.ticket
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(async e => {
      if (null != d) try {
        let n = await (0, v.FW)(d, e.body.encrypted_token);
        t(n)
      } catch (e) {
        m()
      } else m()
    }).catch(() => {
      m()
    })
  }, [c, t, d, m]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: y.verticalSeparator
    }), (0, r.jsx)(u.qBt, {
      fillParent: true,
      className: y.qrLogin,
      step: g,
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