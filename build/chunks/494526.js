/** Chunk was on 27978 **/
n.d(t, {
  Z: () => R
}), n(47120), n(411104), n(26686);
var r = n(200651),
  i = n(192379),
  o = n(533126),
  a = n(261470),
  l = n(399606),
  s = n(544891),
  c = n(481060),
  u = n(893776),
  d = n(99690),
  h = n(937154),
  p = n(448986),
  g = n(388905),
  m = n(198993),
  _ = n(710845),
  f = n(314897),
  b = n(585483),
  N = n(358085),
  x = n(172517),
  v = n(51144),
  I = n(998502),
  E = n(981631),
  O = n(231338),
  j = n(388032),
  C = n(869938),
  S = n(455812);
let y = n(515695),
  T = new _.Z("LoginQRSocket");

function A(e) {
  let {
    text: t = ""
  } = e, [n, o] = i.useState(!1);
  return i.useEffect(() => {
    let e = new Image;
    e.src = y, e.onload = () => o(!0), e.onerror = () => o(!0)
  }, [y]), i.useEffect(() => {
    n && c.uvj.announce(j.NW.string(j.t.j2p129))
  }, [n]), (0, r.jsx)("div", {
    className: C.qrCodeContainer,
    children: "" !== t && n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.ZP, {
        className: C.qrCode,
        size: 160,
        text: t
      }), (0, r.jsx)("div", {
        className: C.qrCodeOverlay,
        children: (0, r.jsx)("img", {
          src: y,
          alt: ""
        })
      })]
    }) : (0, r.jsx)("div", {
      className: C.qrCodeOverlay,
      "aria-label": j.NW.string(j.t.BUGkVF),
      "aria-busy": !0,
      children: (0, r.jsx)(c.$jN, {
        className: C.qrCode,
        type: c.$jN.Type.WANDERING_CUBES,
        "aria-hidden": !0
      })
    })
  })
}
let P = e => {
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

function Z(e) {
  let {
    state: t,
    cancel: n,
    errorMessage: i,
    conditionalMediationAbortController: a,
    isPasswordlessActive: l
  } = e;
  switch (t.step) {
    case 0:
    case 1:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(A, {
          text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
        }), (0, r.jsx)(g.Dx, {
          className: S.marginBottom8,
          children: j.NW.string(j.t.UPiHaG)
        }), null != i ? (0, r.jsx)(P, {
          children: i
        }) : (0, r.jsx)(g.DK, {
          children: j.NW.format(j.t["Qq+A6u"], {})
        }), (0, r.jsx)(c.zxk, {
          size: c.PhG.LARGE,
          look: c.iLD.LINK,
          color: c.Ttl.LINK,
          disabled: l,
          onClick: () => (function(e) {
            let t = N.isPlatformEmbedded && I.ZP.supportsFeature(E.eRX.WEBAUTHN) ? I.ZP.webAuthnAuthenticate : e => {
              let t = (0, o.wz)(JSON.parse(e));
              return (0, o.U2)(t).then(e => JSON.stringify(e))
            };
            u.Z.authenticatePasswordless({
              authenticateFunc: t,
              conditionalMediationAbortController: e
            }).catch(() => {})
          })(a),
          children: j.NW.string(j.t["/kpMDg"])
        })]
      });
    case 3:
    case 2: {
      let {
        user: e
      } = t;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.Z, {
          className: C.qrAvatar,
          user: e,
          size: c.EFr.SIZE_120,
          isMobile: !0,
          status: O.Sk.ONLINE
        }), (0, r.jsx)(g.Dx, {
          className: S.marginBottom8,
          children: j.NW.string(j.t.apGCUV)
        }), (0, r.jsx)(g.DK, {
          children: j.NW.format(j.t.Cbl5JC, {
            username: "".concat(v.ZP.getUserTag(e))
          })
        }), (0, r.jsx)(c.zxk, {
          look: c.zxk.Looks.BLANK,
          color: c.zxk.Colors.LINK,
          size: c.zxk.Sizes.MIN,
          onClick: n,
          className: C.startOverButton,
          children: j.NW.string(j.t.nOOhws)
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
  } = e, o = (0, l.e7)([f.default], () => f.default.getIsPasswordlessActive()), {
    state: u,
    rsaKeyPair: d,
    cancel: g,
    handleFailure: m
  } = function(e) {
    let [t, n] = i.useState(0), [r, o] = i.useState(!1), [l, s] = i.useState({
      step: 0
    }), [c, u] = i.useState(null), d = (0, h.Z)(), g = i.useMemo(() => new a.Z(1500, 3e4), []), m = (0, p.Z)(() => {
      s({
        step: 0
      }), d ? n(e => e + 1) : (T.info("document is not visible, will defer reconnection when document becomes visible."), o(!0))
    }), _ = i.useCallback(() => {
      T.error("Could not complete QR code login, trying to restart with a new QR code."), s({
        step: 0
      }), g.pending || g.fail(m)
    }, [m, g]);
    return i.useEffect(() => {
      d && r && 0 === l.step && (T.info("reconnecting, now that document is visible"), o(!1), n(e => e + 1))
    }, [l, d, r, o]), i.useEffect(() => {
      let t = Date.now(),
        n = () => "".concat(Date.now() - t, "ms"),
        r = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
        i = new WebSocket(r);
      T.info("[0ms] connecting to ".concat(r));
      let o = e => T.info("[".concat(n(), "] ").concat(e)),
        a = null,
        l = null,
        c = null,
        d = null,
        h = !0;

      function p() {
        if (null != a) return a;
        throw Error("No key pair set")
      }
      let f = () => {
        h ? (h = !1, i.send(JSON.stringify({
          op: "heartbeat"
        }))) : (o("heartbeat timeout, reconnecting."), i.close(), _())
      };
      return i.onmessage = async t => {
        let {
          data: n
        } = t, r = JSON.parse(n);
        switch (r.op) {
          case "nonce_proof": {
            let e = r.encrypted_nonce,
              t = await (0, x.qd)(p(), e);
            o("computed nonce proof"), i.send(JSON.stringify({
              op: "nonce_proof",
              nonce: t
            }));
            return
          }
          case "pending_remote_init": {
            g.succeed(), b.S.dispatch(E.CkL.WAVE_EMPHASIZE);
            let e = await (0, x.Pk)(p());
            if (e !== r.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(r.fingerprint));
            o("handshake complete awaiting remote auth."), s({
              step: 1,
              fingerprint: e
            });
            return
          }
          case "pending_login": {
            let e = r.ticket;
            null == e && _(), s({
              step: 4,
              ticket: e
            });
            return
          }
          case "pending_ticket": {
            b.S.dispatch(E.CkL.WAVE_EMPHASIZE), o("remote auth handshake started, awaiting ticket/cancel.");
            let e = r.encrypted_user_payload;
            s({
              step: 3,
              user: await (0, x.Rq)(p(), e)
            });
            return
          }
          case "pending_finish": {
            b.S.dispatch(E.CkL.WAVE_EMPHASIZE), o("remote auth handshake started, awaiting finish/cancel.");
            let e = r.encrypted_user_payload;
            s({
              step: 2,
              user: await (0, x.Rq)(p(), e)
            });
            return
          }
          case "finish": {
            b.S.dispatch(E.CkL.WAVE_EMPHASIZE), o("remote auth handshake finished.");
            let t = r.encrypted_token;
            s({
              step: 5
            }), e(await (0, x.FW)(p(), t));
            return
          }
          case "cancel":
            o("remote auth handshake cancelled."), m();
            return;
          case "hello": {
            o("got hello, auth timeout=".concat(r.timeout_ms, "ms"));
            let e = r.heartbeat_interval;
            d = setTimeout(() => {
              d = null, f(), c = setInterval(f, e)
            }, Math.floor(e * Math.random()));
            return
          }
          case "heartbeat_ack":
            h = !0
        }
      }, i.onopen = async () => {
        a = await (0, x.W_)(), l = await (0, x.dK)(a);
        let e = await (0, x.Pk)(a);
        o("connected, handshaking with fingerprint: ".concat(e)), i.send(JSON.stringify({
          op: "init",
          encoded_public_key: l
        })), u(a)
      }, i.onclose = e => {
        o("disconnected, code: ".concat(e.code, " ").concat(e.reason)), _()
      }, i.onerror = e => {
        o("disconnected, error: ".concat(JSON.stringify(e))), _()
      }, () => {
        o("cleaning up"), i.onopen = () => null, i.onmessage = () => null, i.onclose = () => null, i.onerror = () => null, i.close(1e3), g.cancel(), null != d && clearTimeout(d), null != c && clearInterval(c)
      }
    }, [m, e, t, g, _]), {
      state: l,
      rsaKeyPair: c,
      cancel: m,
      handleFailure: _
    }
  }(t), _ = function(e) {
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
    4 === u.step && null != u.ticket && s.tn.post({
      url: E.ANM.REMOTE_AUTH_LOGIN,
      body: {
        ticket: u.ticket
      },
      oldFormErrors: !0,
      rejectWithError: !0
    }).then(async e => {
      if (null != d) try {
        let n = await (0, x.FW)(d, e.body.encrypted_token);
        t(n)
      } catch (e) {
        m()
      } else m()
    }).catch(() => {
      m()
    })
  }, [u, t, d, m]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: C.verticalSeparator
    }), (0, r.jsx)(c.qBt, {
      fillParent: !0,
      className: C.qrLogin,
      step: _,
      steps: [0, 1],
      children: (0, r.jsx)("div", {
        className: C.qrLoginInner,
        children: (0, r.jsx)(Z, {
          state: u,
          cancel: g,
          conditionalMediationAbortController: n,
          isPasswordlessActive: o
        })
      })
    })]
  })
}