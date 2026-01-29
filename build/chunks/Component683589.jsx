/** Chunk was on 87557 **/
/** chunk id: 683589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var a, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk397927 = require("./397927.js"),
  Chunk354949 = require("./354949.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk446868 = require("./446868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk441609 = require("./441609.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = Chunk975571.A.getArticleURL(Chunk652215.MVz.VERIFICATION_FAQ);
class b extends(a = Chunk64700.PureComponent) {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: a
    } = this.props;
    return (0, l.jsx)(l.Fragment, {
      children: e.map(e => e === p.Fz7.CAPTCHA ? (0, l.jsx)(d.A, {
        onVerify: a,
        theme: n
      }, t) : (0, l.jsx)(c.Button, {
        onClick: () => this.handleClick(e),
        text: m.A.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, l.jsxs)(c.BJc, {
      gap: 16,
      className: x.Ot,
      align: "center",
      direction: "vertical",
      justify: "center",
      children: [(0, l.jsxs)(c.BJc, {
        gap: 16,
        fullWidth: false,
        className: s()(x.kL, {
          [x.Fr]: o.Fr
        }),
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [(0, l.jsxs)(c.BJc, {
          align: "center",
          direction: "vertical",
          justify: "center",
          gap: 16,
          children: [(0, l.jsx)("div", {
            className: x.Sl
          }), (0, l.jsxs)(c.BJc, {
            className: x.FS,
            gap: 4,
            align: "center",
            direction: "vertical",
            justify: "center",
            children: [(0, l.jsx)(c.Heading, {
              variant: "heading-xl/normal",
              children: h.intl.string(h.t.Iz0kDg)
            }), (0, l.jsx)(c.Text, {
              variant: "text-md/normal",
              children: h.intl.format(h.t["0rqMV5"], {
                helpCenterURL: f
              })
            })]
          })]
        }), (0, l.jsx)(c.BJc, {
          gap: 16,
          direction: "vertical",
          justify: "center",
          align: "center",
          children: this.renderFields()
        })]
      }), (0, l.jsxs)(c.BJc, {
        gap: 8,
        align: "center",
        direction: "vertical",
        justify: "center",
        children: [(0, l.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: x.qr,
          children: h.intl.string(h.t.qqYun3)
        }), (0, l.jsxs)(c.BJc, {
          gap: 8,
          align: "center",
          direction: "horizontal",
          justify: "center",
          children: [(0, l.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: x.qr,
            children: h.intl.format(h.t.WL51ZR, {
              supportURL: u.A.getSubmitRequestURL()
            })
          }), (0, l.jsx)("div", {
            className: s()(x.qr, x.mf),
            children: "•"
          }), (0, l.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: x.qr,
            children: h.intl.format(h.t.Hv7ztc, {
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
  types: [Chunk652215.Fz7.CAPTCHA],
  onCaptchaVerify: Chunk652215.tEg,
  onLogout: Chunk652215.tEg
});
let v = b