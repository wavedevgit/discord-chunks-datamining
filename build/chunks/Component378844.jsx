/** Chunk was on 15647 **/
/** chunk id: 378844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => O,
  Z: () => y
});
var r, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk391650 = require("./391650.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk144114 = require("./144114.js"),
  Chunk607744 = require("./607744.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk434652 = require("./434652.js");

function _(e) {
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
}
var O = ((r = {})[r.VOICE = 0] = "VOICE", r);
let y = e => {
  let {
    type: t,
    guildId: r,
    closePopout: O
  } = e, y = (0, u.Dt)(), {
    notClaimed: v,
    notEmailVerified: j,
    notPhoneVerified: C,
    newAccount: E,
    newMember: x
  } = (0, l.e7)([p.Z], () => p.Z.getCheck(r), [r]), S = 0 === t ? m.intl.string(m.t["6zY8BI"]) : null, I = null, P = null;
  return (0 === t && (v ? (I = m.intl.string(m.t.IRxUlG), P = m.intl.string(m.t.fiNVin)) : C ? (I = m.intl.string(m.t.vW8iUF), P = m.intl.string(m.t["50gfOv"])) : j ? (I = m.intl.string(m.t.vdSOpz), P = m.intl.string(m.t.lm1UKt)) : x ? (I = m.intl.formatToPlainString(m.t.v1ktYb, {
    min: h.YeM.MEMBER_AGE
  }), P = m.intl.string(m.t.BddRzS)) : E && (I = m.intl.formatToPlainString(m.t.sncw41, {
    min: h.YeM.ACCOUNT_AGE
  }), P = m.intl.string(m.t.BddRzS))), null == S || null == I) ? null : (0, i.jsxs)(a.VqE, {
    className: b.container,
    "aria-labelledby": y,
    children: [(0, i.jsx)("img", {
      alt: "",
      className: b.image,
      src: n(64395)
    }), (0, i.jsxs)("div", {
      className: b.content,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        id: y,
        children: S
      }), (0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I
      }), (0, i.jsxs)("div", {
        className: b.buttonContainer,
        children: [null != P ? (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: b.primaryButton,
          children: (0, i.jsx)(a.Button, {
            variant: "primary",
            text: P,
            onClick: () => {
              v ? c.j() : C ? (0, a.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 607018));
                return t => (0, i.jsx)(e, _({
                  reason: d.L.GUILD_PHONE_REQUIRED
                }, t))
              }, {
                modalKey: g.M
              }) : j && (s.Z.verifyResend(), (0, a.h7j)(e => {
                var t, n, r;
                return (0, i.jsx)(a.ConfirmModal, (n = _({
                  header: m.intl.string(m.t.LykQYk),
                  confirmText: m.intl.string(m.t.BddRzS),
                  confirmButtonColor: o.zx.Colors.BRAND
                }, e), r = r = {
                  children: (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: m.intl.format(m.t.azKEPy, {
                      email: null == (t = f.default.getCurrentUser()) ? true : t.email
                    })
                  })
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(r)).forEach(function(e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
              })), O()
            }
          })
        }) : null, v || C || j ? (0, i.jsx)(a.Avr, {
          onClick: O,
          text: m.intl.string(m.t.oEAioF),
          variant: "secondary"
        }) : null]
      })]
    })]
  })
}