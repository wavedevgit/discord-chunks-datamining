/** Chunk was on 22979 **/
/** chunk id: 762756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk599857 = require("./599857.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk1964 = require("./1964.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk922895 = require("./922895.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let x = Chunk63063.Z.getArticleURL(Chunk981631.BhN.VERIFICATION_FAQ);
class g extends(a = Chunk473749.PureComponent) {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: a
    } = this.props;
    return (0, r.jsx)(r.Fragment, {
      children: e.map(e => e === p.PUi.CAPTCHA ? (0, r.jsx)(d.Z, {
        onVerify: a,
        theme: n
      }, t) : (0, r.jsx)(c.Button, {
        onClick: () => this.handleClick(e),
        text: m.Z.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, r.jsxs)(c.Kqy, {
      gap: 16,
      className: f.verification,
      align: "center",
      direction: "vertical",
      justify: "center",
      children: [(0, r.jsxs)(c.Kqy, {
        gap: 16,
        fullWidth: false,
        className: s()(f.container, {
          [f.isMobile]: o.tq
        }),
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [(0, r.jsxs)(c.Kqy, {
          align: "center",
          direction: "vertical",
          justify: "center",
          gap: 16,
          children: [(0, r.jsx)("div", {
            className: f.image
          }), (0, r.jsxs)(c.Kqy, {
            className: f.textContainer,
            gap: 4,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [(0, r.jsx)(c.Heading, {
              variant: "heading-xl/normal",
              children: h.intl.string(h.t.Iz0kDg)
            }), (0, r.jsx)(c.Text, {
              variant: "text-md/normal",
              children: h.intl.format(h.t["0rqMV5"], {
                helpCenterURL: x
              })
            })]
          })]
        }), (0, r.jsx)(c.Kqy, {
          gap: 16,
          direction: "vertical",
          justify: "center",
          align: "center",
          children: this.renderFields()
        })]
      }), (0, r.jsxs)(c.Kqy, {
        gap: 8,
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: f.footer,
          children: h.intl.string(h.t.qqYun3)
        }), (0, r.jsxs)(c.Kqy, {
          gap: 8,
          align: "center",
          direction: "horizontal",
          justify: "center",
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: f.footer,
            children: h.intl.format(h.t.WL51ZR, {
              supportURL: u.Z.getSubmitRequestURL()
            })
          }), (0, r.jsx)("div", {
            className: s()(f.footer, f.footerBullet),
            children: "•"
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: f.footer,
            children: h.intl.format(h.t.Hv7ztc, {
              logoutOnClick: this.props.onLogout
            })
          })]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), b(this, "handleClick", e => {
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
b(g, "defaultProps", {
  types: [Chunk981631.PUi.CAPTCHA],
  onCaptchaVerify: Chunk981631.dG4,
  onLogout: Chunk981631.dG4
});
let v = g