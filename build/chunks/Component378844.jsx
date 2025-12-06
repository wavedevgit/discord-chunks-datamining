/** Chunk was on 46467 **/
/** chunk id: 378844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => _,
  Z: () => y
});
var r, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk885387 = require("./885387.jsx"),
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
  Chunk36973 = require("./36973.js"),
  _ = ((r = {})[r.VOICE = 0] = "VOICE", r);
let y = e => {
  let {
    type: t,
    guildId: r,
    closePopout: _
  } = e, y = (0, u.Dt)(), {
    notClaimed: O,
    notEmailVerified: v,
    notPhoneVerified: j,
    newAccount: x,
    newMember: C
  } = (0, l.e7)([h.Z], () => h.Z.getCheck(r), [r]), E = 0 === t ? m.intl.string(m.t["6zY8BI"]) : null, S = null, I = null;
  return (0 === t && (O ? (S = m.intl.string(m.t.IRxUlG), I = m.intl.string(m.t.fiNVin)) : j ? (S = m.intl.string(m.t.vW8iUF), I = m.intl.string(m.t["50gfOv"])) : v ? (S = m.intl.string(m.t.vdSOpz), I = m.intl.string(m.t.lm1UKt)) : C ? (S = m.intl.formatToPlainString(m.t.v1ktYb, {
    min: p.YeM.MEMBER_AGE
  }), I = m.intl.string(m.t.BddRzS)) : x && (S = m.intl.formatToPlainString(m.t.sncw41, {
    min: p.YeM.ACCOUNT_AGE
  }), I = m.intl.string(m.t.BddRzS))), null == E || null == S) ? null : (0, i.jsxs)(a.VqE, {
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
        children: E
      }), (0, i.jsx)(a.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: S
      }), (0, i.jsxs)("div", {
        className: b.buttonContainer,
        children: [null != I ? (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: b.primaryButton,
          children: (0, i.jsx)(a.Button, {
            variant: "primary",
            text: I,
            onClick: () => {
              if (O) c.j();
              else if (j)(0, a.ZDy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 607018));
                return t => (0, i.jsx)(e, function(e) {
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
                }({
                  reason: d.L.GUILD_PHONE_REQUIRED
                }, t))
              }, {
                modalKey: g.M
              });
              else if (v) {
                var e;
                s.Z.verifyResend(), (0, o.Z)({
                  title: m.intl.string(m.t.LykQYk),
                  subtitle: m.intl.format(m.t.azKEPy, {
                    email: null == (e = f.default.getCurrentUser()) ? true : e.email
                  })
                })
              }
              _()
            }
          })
        }) : null, O || j || v ? (0, i.jsx)(a.Avr, {
          onClick: _,
          text: m.intl.string(m.t.oEAioF),
          variant: "secondary"
        }) : null]
      })]
    })]
  })
}