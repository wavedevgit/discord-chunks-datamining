/** Chunk was on web.js **/
/** chunk id: 35602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => u
}), require("./321073.js"), require("./457529.js"), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = new(require("./626584.js")).A("MFAPlayground"),
  u = {
    title: "MFA",
    stories: [{
      name: "Challenge Modal",
      id: "mfa-modal",
      component: function(e) {
        let {
          hasPassword: t,
          hasTotp: a,
          hasSms: s,
          hasWebauthn: u,
          hasBackup: d,
          simulateError: f
        } = e, p = [];
        u && p.push({
          type: "webauthn",
          challenge: JSON.stringify({
            publicKey: {
              challenge: "bW9jay1jaGFsbGVuZ2U=",
              timeout: 6e4,
              rpId: "discord.com",
              allowCredentials: [],
              userVerification: "preferred"
            }
          })
        }), a && p.push({
          type: "totp"
        }), s && p.push({
          type: "sms"
        }), d && p.push({
          type: "backup"
        }), t && p.push({
          type: "password"
        });
        let _ = p.length > 0 ? p : [{
          type: "password"
        }];
        return (0, r.jsxs)(i.BJc, {
          align: "center",
          children: [u && (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: "Note: WebAuthn UI will appear but will always error"
          }), (0, r.jsx)(i.Button, {
            variant: "primary",
            text: "Open MFA Modal",
            onClick: () => {
              let e = {
                  ticket: "mock-ticket-".concat(Math.random().toString(36).substring(7)),
                  methods: _
                },
                t = e => new Promise((t, n) => {
                  (c.info("Type: ".concat(e.mfaType)), c.info("Data: ".concat(e.data)), c.info("Ticket: ".concat(e.ticket)), f) ? n(Error("simulated error")): t()
                });
              (0, i.mMO)(async () => {
                let {
                  MFAModal: i
                } = await Promise.all([n.e("88890"), n.e("75265")]).then(n.bind(n, 720353));
                return n => (0, r.jsx)(i, l(o({}, n), {
                  finish: t,
                  mfaChallenge: e
                }))
              }, {
                onCloseCallback: () => c.info("Modal closed")
              })
            }
          })]
        })
      },
      controls: {
        hasPassword: {
          label: "Password",
          type: "boolean",
          defaultValue: false
        },
        hasTotp: {
          label: "TOTP",
          type: "boolean",
          defaultValue: true
        },
        hasSms: {
          label: "SMS",
          type: "boolean",
          defaultValue: false
        },
        hasWebauthn: {
          label: "WebAuthn",
          type: "boolean",
          defaultValue: false
        },
        hasBackup: {
          label: "Backup Codes",
          type: "boolean",
          defaultValue: true
        },
        simulateError: {
          label: "Challenge Outcome",
          type: "select",
          defaultValue: false,
          options: [{
            label: "Success",
            value: false
          }, {
            label: "Error",
            value: true
          }]
        }
      }
    }]
  }