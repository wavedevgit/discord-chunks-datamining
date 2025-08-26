/** Chunk was on 91488 **/
/** chunk id: 378844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => y,
  Z: () => _
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
  Chunk36973 = require("./36973.js");

function O(e) {
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
var y = ((r = {})[r.VOICE = 0] = "VOICE", r);
let _ = e => {
  let {
    type: t,
    guildId: r,
    closePopout: y
  } = e, _ = (0, u.Dt)(), {
    notClaimed: v,
    notEmailVerified: j,
    notPhoneVerified: x,
    newAccount: C,
    newMember: S
  } = (0, l.e7)([p.Z], () => p.Z.getCheck(r), [r]), E = 0 === t ? m.intl.string(m.t["6zY8BA"]) : null, P = null, I = null;
  return (0 === t && (v ? (P = m.intl.string(m.t.IRxUlJ), I = m.intl.string(m.t.fiNVio)) : x ? (P = m.intl.string(m.t.vW8iUF), I = m.intl.string(m.t["50gfOj"])) : j ? (P = m.intl.string(m.t.vdSOp6), I = m.intl.string(m.t.lm1UKi)) : S ? (P = m.intl.formatToPlainString(m.t.v1ktYW, {
    min: f.YeM.MEMBER_AGE
  }), I = m.intl.string(m.t.BddRzc)) : C && (P = m.intl.formatToPlainString(m.t["sncw4+"], {
    min: f.YeM.ACCOUNT_AGE
  }), I = m.intl.string(m.t.BddRzc))), null == E || null == P) ? null : (0, i.jsxs)(a.VqE, {
    className: b.container,
    "aria-labelledby": _,
    children: [(0, i.jsx)("img", {
      alt: "",
      className: b.image,
      src: n(64395)
    }), (0, i.jsxs)("div", {
      className: b.content,
      children: [(0, i.jsx)(a.X6q, {
        variant: "heading-md/semibold",
        id: _,
        children: E
      }), (0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: P
      }), (0, i.jsxs)("div", {
        className: b.buttonContainer,
        children: [null != I ? (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: b.primaryButton,
          children: (0, i.jsx)(a.zxk, {
            variant: "primary",
            text: I,
            onClick: () => {
              v ? c.j() : x ? (0, a.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 607018));
                return t => (0, i.jsx)(e, O({
                  reason: d.L.GUILD_PHONE_REQUIRED
                }, t))
              }, {
                modalKey: g.M
              }) : j && (s.Z.verifyResend(), (0, a.h7j)(e => {
                var t, n, r;
                return (0, i.jsx)(a.ConfirmModal, (n = O({
                  header: m.intl.string(m.t.LykQYm),
                  confirmText: m.intl.string(m.t.BddRzc),
                  confirmButtonColor: o.zx.Colors.BRAND
                }, e), r = r = {
                  children: (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: m.intl.format(m.t.azKEPz, {
                      email: null == (t = h.default.getCurrentUser()) ? true : t.email
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
              })), y()
            }
          })
        }) : null, v || x || j ? (0, i.jsx)(o.zx, {
          onClick: y,
          look: o.zx.Looks.BLANK,
          className: b.cancel,
          children: m.intl.string(m.t.oEAioK)
        }) : null]
      })]
    })]
  })
}