/** Chunk was on 42402 **/
/** chunk id: 214660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y,
  H: () => A
});
var r, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk315982 = require("./315982.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk557722 = require("./557722.js"),
  Chunk834942 = require("./834942.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk53516 = require("./53516.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk43310 = require("./43310.js"),
  A = ((r = {})[r.VOICE = 0] = "VOICE", r);
let y = e => {
  let {
    type: t,
    guildId: r,
    closePopout: A
  } = e, y = (0, u.GV)(), {
    notClaimed: O,
    notEmailVerified: j,
    notPhoneVerified: x,
    newAccount: _,
    newMember: v
  } = (0, i.bG)([p.A], () => p.A.getCheck(r), [r]), E = 0 === t ? m.intl.string(m.t["6zY8BI"]) : null, C = null, S = null;
  return (0 === t && (O ? (C = m.intl.string(m.t.IRxUlG), S = m.intl.string(m.t.fiNVin)) : x ? (C = m.intl.string(m.t.vW8iUF), S = m.intl.string(m.t["50gfOv"])) : j ? (C = m.intl.string(m.t.vdSOpz), S = m.intl.string(m.t.lm1UKt)) : v ? (C = m.intl.formatToPlainString(m.t.v1ktYb, {
    min: g.$8o.MEMBER_AGE
  }), S = m.intl.string(m.t.BddRzS)) : _ && (C = m.intl.formatToPlainString(m.t.sncw41, {
    min: g.$8o.ACCOUNT_AGE
  }), S = m.intl.string(m.t.BddRzS))), null == E || null == C) ? null : (0, l.jsxs)(a.lGe, {
    className: b.kL,
    "aria-labelledby": y,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: b.Sl,
      src: n(303528)
    }), (0, l.jsxs)("div", {
      className: b.Qs,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        id: y,
        children: E
      }), (0, l.jsx)(a.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: C
      }), (0, l.jsxs)("div", {
        className: b.UD,
        children: [null != S ? (0, l.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: b.FS,
          children: (0, l.jsx)(a.Button, {
            variant: "primary",
            text: S,
            onClick: () => {
              if (O) c.R();
              else if (x)(0, a.mMO)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(n.bind(n, 615715));
                return t => (0, l.jsx)(e, function(e) {
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
                  reason: d.d.GUILD_PHONE_REQUIRED
                }, t))
              }, {
                modalKey: f.V
              });
              else if (j) {
                var e;
                o.A.verifyResend(), (0, s.A)({
                  title: m.intl.string(m.t.LykQYk),
                  subtitle: m.intl.format(m.t.azKEPy, {
                    email: null == (e = h.default.getCurrentUser()) ? true : e.email
                  })
                })
              }
              A()
            }
          })
        }) : null, O || x || j ? (0, l.jsx)(a.QWc, {
          onClick: A,
          text: m.intl.string(m.t.oEAioF),
          variant: "secondary"
        }) : null]
      })]
    })]
  })
}