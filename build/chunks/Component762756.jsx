/** Chunk was on 28855 **/
/** chunk id: 762756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var a, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk599857 = require("./599857.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk1964 = require("./1964.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222198 = require("./222198.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = Chunk63063.Z.getArticleURL(Chunk981631.BhN.VERIFICATION_FAQ);
class b extends(a = Chunk647438.PureComponent) {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: a
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk951288.Fragment, {
      children: module.map(e => e === p.PUi.CAPTCHA ? (0, r.jsx)(d.Z, {
        onVerify: a,
        theme: n
      }, t) : (0, r.jsx)(c.Button, {
        onClick: () => this.handleClick(e),
        text: m.Z.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      className: Chunk222198.verification,
      align: "center",
      direction: "vertical",
      justify: "center",
      children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        fullWidth: false,
        className: o()(Chunk222198.container, {
          [Chunk222198.isMobile]: Chunk873546.tq
        }),
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          align: "center",
          direction: "vertical",
          justify: "center",
          gap: 16,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk222198.image
          }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
            className: Chunk222198.textContainer,
            gap: 4,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              variant: "heading-xl/normal",
              children: Chunk388032.intl.string(Chunk388032.t.Iz0kDg)
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/normal",
              children: Chunk388032.intl.format(Chunk388032.t["0rqMV5"], {
                helpCenterURL: g
              })
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
          gap: 16,
          direction: "vertical",
          justify: "center",
          align: "center",
          children: this.renderFields()
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          className: Chunk222198.footer,
          children: Chunk388032.intl.string(Chunk388032.t.qqYun3)
        }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          align: "center",
          direction: "horizontal",
          justify: "center",
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/semibold",
            className: Chunk222198.footer,
            children: Chunk388032.intl.format(Chunk388032.t.WL51ZR, {
              supportURL: Chunk63063.Z.getSubmitRequestURL()
            })
          }), (0, Chunk951288.jsx)("div", {
            className: o()(Chunk222198.footer, Chunk222198.footerBullet),
            children: "•"
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/semibold",
            className: Chunk222198.footer,
            children: Chunk388032.intl.format(Chunk388032.t.Hv7ztc, {
              logoutOnClick: this.props.onLogout
            })
          })]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "handleClick", e => {
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
f(b, "defaultProps", {
  types: [Chunk981631.PUi.CAPTCHA],
  onCaptchaVerify: Chunk981631.dG4,
  onLogout: Chunk981631.dG4
});
let v = b