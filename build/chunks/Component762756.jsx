/** Chunk was on 89744 **/
/** chunk id: 762756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk599857 = require("./599857.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk1964 = require("./1964.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk816676 = require("./816676.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = Chunk63063.Z.getArticleURL(Chunk981631.BhN.VERIFICATION_FAQ);
class b extends(r = Chunk73800.PureComponent) {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: r
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk255367.Fragment, {
      children: module.map(e => e === p.PUi.CAPTCHA ? (0, i.jsx)(u.Z, {
        onVerify: r,
        theme: n
      }, t) : (0, i.jsx)(s.zxk, {
        onClick: () => this.handleClick(e),
        text: f.Z.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      className: Chunk816676.verification,
      align: "center",
      direction: "vertical",
      justify: "center",
      children: [(0, Chunk255367.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        className: c()(Chunk816676.container, {
          [Chunk816676.isMobile]: Chunk873546.tq
        }),
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [(0, Chunk255367.jsxs)(Chunk481060.Kqy, {
          align: "center",
          direction: "vertical",
          justify: "center",
          gap: 16,
          children: [(0, Chunk255367.jsx)("div", {
            className: Chunk816676.image
          }), (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
            className: Chunk816676.textContainer,
            gap: 4,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
              variant: "heading-xl/normal",
              children: Chunk388032.intl.string(Chunk388032.t.Iz0kDg)
            }), (0, Chunk255367.jsx)(Chunk481060.Text, {
              variant: "text-md/normal",
              children: Chunk388032.intl.format(Chunk388032.t["0rqMV1"], {
                helpCenterURL: h
              })
            })]
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.Kqy, {
          gap: 16,
          direction: "vertical",
          justify: "center",
          align: "center",
          children: this.renderFields()
        })]
      }), (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          className: Chunk816676.footer,
          children: Chunk388032.intl.string(Chunk388032.t.qqYun5)
        }), (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          align: "center",
          direction: "horizontal",
          justify: "center",
          children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-sm/semibold",
            className: Chunk816676.footer,
            children: Chunk388032.intl.format(Chunk388032.t.WL51ZW, {
              supportURL: Chunk63063.Z.getSubmitRequestURL()
            })
          }), (0, Chunk255367.jsx)("div", {
            className: c()(Chunk816676.footer, Chunk816676.footerBullet),
            children: "•"
          }), (0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-sm/semibold",
            className: Chunk816676.footer,
            children: Chunk388032.intl.format(Chunk388032.t.Hv7ztb, {
              logoutOnClick: this.props.onLogout
            })
          })]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "handleClick", e => {
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
g(b, "defaultProps", {
  types: [Chunk981631.PUi.CAPTCHA],
  onCaptchaVerify: Chunk981631.dG4,
  onLogout: Chunk981631.dG4
});
let v = b