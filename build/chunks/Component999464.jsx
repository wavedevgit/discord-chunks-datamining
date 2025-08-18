/** Chunk was on 95468 **/
/** chunk id: 999464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk231239 = require("./231239.js"),
  Chunk881052 = require("./881052.js"),
  Chunk313201 = require("./313201.js"),
  Chunk888592 = require("./888592.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946189 = require("./946189.js");
let p = (0, Chunk313201.hQ)(),
  x = e => {
    let {
      email: t,
      setStep: n,
      onBack: i,
      school: u,
      setSchool: x
    } = e, [_, v] = l.useState(null), [N, E] = l.useState(false), S = async () => {
      v(null), E(true);
      try {
        await c.Z.signup(t, u), n(m.tF.EMAIL_WAITLIST)
      } catch (e) {
        v(new d.Hx(e))
      } finally {
        E(false)
      }
    }, y = async e => {
      null != u && "" !== u && e.charCode === h.yXg.ENTER && await S()
    };
    return (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsx)("div", {
        className: g.__invalid_topImage
      }), (0, r.jsx)(o.X6q, {
        className: a()(g.centerText, g.header),
        variant: "heading-xl/semibold",
        children: f.intl.string(f.t["2FNWBA"])
      }), (0, r.jsx)("div", {
        className: g.descriptionWidth,
        children: (0, r.jsx)(o.Text, {
          className: g.centerText,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: f.intl.string(f.t["/4y6o6"])
        })
      }), (0, r.jsxs)(o.xJW, {
        className: g.formItem,
        children: [(0, r.jsx)(o.vwX, {
          id: p,
          children: f.intl.string(f.t["L+AfJi"])
        }), (0, r.jsx)(o.oil, {
          onKeyPress: y,
          placeholder: f.intl.string(f.t.Y1btJS),
          onChange: e => {
            x(e)
          },
          error: null == _ ? true : _.getAnyErrorMessage(),
          "aria-labelledby": p
        })]
      }), (0, r.jsxs)("div", {
        className: g.footer,
        children: [(0, r.jsx)(s.zx, {
          className: g.backButton,
          onClick: i,
          look: s.zx.Looks.LINK,
          size: s.zx.Sizes.NONE,
          color: s.zx.Colors.PRIMARY,
          children: f.intl.string(f.t["13/7kZ"])
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: g.__invalid_submitButton,
          children: (0, r.jsx)(o.zxk, {
            variant: "primary",
            text: f.intl.string(f.t.PDsYAg),
            onClick: S,
            loading: N
          })
        })]
      })]
    })
  }