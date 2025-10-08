/** Chunk was on 95468 **/
/** chunk id: 999464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk313201 = require("./313201.js"),
  Chunk888592 = require("./888592.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192354 = require("./192354.js");
let h = (0, Chunk313201.hQ)(),
  g = e => {
    let {
      email: t,
      setStep: n,
      onBack: i,
      school: d,
      setSchool: g
    } = e, [v, _] = l.useState(null), [x, N] = l.useState(false), E = async () => {
      _(null), N(true);
      try {
        await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST)
      } catch (e) {
        _(new c.Hx(e))
      } finally {
        N(false)
      }
    }, y = async e => {
      null != d && "" !== d && e.charCode === m.yXg.ENTER && await E()
    };
    return (0, r.jsxs)("div", {
      className: p.container,
      children: [(0, r.jsx)("div", {
        className: p.__invalid_topImage
      }), (0, r.jsx)(s.X6q, {
        className: a()(p.centerText, p.header),
        variant: "heading-xl/semibold",
        children: f.intl.string(f.t["2FNWBA"])
      }), (0, r.jsx)("div", {
        className: p.descriptionWidth,
        children: (0, r.jsx)(s.Text, {
          className: p.centerText,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: f.intl.string(f.t["/4y6o6"])
        })
      }), (0, r.jsxs)("div", {
        className: p.formItem,
        children: [(0, r.jsx)(s.vwX, {
          id: h,
          children: f.intl.string(f.t["L+AfJi"])
        }), (0, r.jsx)(s.oil, {
          onKeyPress: y,
          placeholder: f.intl.string(f.t.Y1btJS),
          onChange: e => {
            g(e)
          },
          error: null == v ? true : v.getAnyErrorMessage(),
          "aria-labelledby": h
        })]
      }), (0, r.jsxs)("div", {
        className: p.footer,
        children: [(0, r.jsx)(s.Avr, {
          variant: "secondary",
          onClick: i,
          text: f.intl.string(f.t["13/7kZ"])
        }), (0, r.jsx)(s.zxk, {
          variant: "primary",
          text: f.intl.string(f.t.PDsYAg),
          onClick: E,
          loading: x
        })]
      })]
    })
  }