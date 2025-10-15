/** Chunk was on 95468 **/
/** chunk id: 999464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk888592 = require("./888592.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946189 = require("./946189.js");
let f = e => {
  let {
    email: t,
    setStep: n,
    onBack: i,
    school: f,
    setSchool: p
  } = e, [h, _] = l.useState(null), [v, x] = l.useState(false), N = async () => {
    _(null), x(true);
    try {
      await o.Z.signup(t, f), n(d.tF.EMAIL_WAITLIST)
    } catch (e) {
      _(new c.Hx(e))
    } finally {
      x(false)
    }
  }, E = async e => {
    null != f && "" !== f && e.charCode === u.yXg.ENTER && await N()
  };
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)("div", {
      className: g.__invalid_topImage
    }), (0, r.jsx)(s.Heading, {
      className: a()(g.centerText, g.header),
      variant: "heading-xl/semibold",
      children: m.intl.string(m.t["2FNWBA"])
    }), (0, r.jsx)("div", {
      className: g.descriptionWidth,
      children: (0, r.jsx)(s.Text, {
        className: g.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.intl.string(m.t["/4y6o6"])
      })
    }), (0, r.jsx)("div", {
      className: g.formItem,
      children: (0, r.jsx)(s.oil, {
        label: m.intl.string(m.t["L+AfJi"]),
        onKeyPress: E,
        placeholder: m.intl.string(m.t.Y1btJS),
        onChange: e => {
          p(e)
        },
        error: null == h ? true : h.getAnyErrorMessage()
      })
    }), (0, r.jsxs)("div", {
      className: g.footer,
      children: [(0, r.jsx)(s.Avr, {
        variant: "secondary",
        onClick: i,
        text: m.intl.string(m.t["13/7kZ"])
      }), (0, r.jsx)(s.Button, {
        variant: "primary",
        text: m.intl.string(m.t.PDsYAg),
        onClick: N,
        loading: v
      })]
    })]
  })
}