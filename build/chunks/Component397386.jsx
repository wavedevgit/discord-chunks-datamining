/** Chunk was on 59030 **/
/** chunk id: 397386, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk775086 = require("./775086.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk287880 = require("./287880.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk416094 = require("./416094.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = e => {
  let {
    image: t,
    label: n,
    text: s,
    children: i
  } = e;
  return (0, r.jsxs)("div", {
    className: p.section,
    children: [(0, r.jsx)("div", {
      className: p.sectionImage,
      children: t
    }), (0, r.jsx)("div", {
      className: p.sectionContent,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-sm/semibold",
          className: p.headerSpacing,
          children: n
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: s
        }), i]
      })
    })]
  })
};
class g extends Chunk473749.PureComponent {
  render() {
    var e;
    let {
      transitionState: t,
      onClose: s
    } = this.props, {
      totpSecret: o,
      code: h,
      isVerifying: g
    } = this.state, m = null == (e = l.default.getCurrentUser()) ? true : e.email, x = (0, d.U0)(null != m ? m : "", o), b = (0, r.jsx)("form", {
      onSubmit: this.handleActivate,
      children: (0, r.jsxs)("div", {
        className: p.inputContainer,
        children: [(0, r.jsx)(a.oil, {
          value: h,
          placeholder: "000 000",
          maxLength: 7,
          autoComplete: "one-time-code",
          onChange: this.handleCodeChange,
          error: this.state.error,
          autoFocus: true,
          fullWidth: true
        }), (0, r.jsx)(a.Button, {
          variant: "primary",
          text: u.intl.string(u.t["/a5+YV"]),
          type: "submit",
          loading: g
        })]
      })
    });
    return (0, r.jsxs)(i.Modal, {
      title: u.intl.string(u.t.cDgKte),
      subtitle: u.intl.string(u.t["7NGwtH"]),
      transitionState: t,
      onClose: s,
      actions: [],
      children: [(0, r.jsx)(f, {
        image: (0, r.jsx)("img", {
          alt: "",
          src: n(340061),
          width: 100,
          height: 100
        }),
        label: u.intl.string(u.t["9E74Dx"]),
        text: u.intl.format(u.t.A7Aehw, {
          googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
          authyURL: "https://www.authy.com/"
        })
      }), (0, r.jsx)(a.izJ, {
        className: p.divider
      }), (0, r.jsx)(f, {
        image: (0, r.jsx)(c.ZP, {
          text: x
        }),
        label: u.intl.string(u.t["91InF1"]),
        text: u.intl.string(u.t.hFeBkl),
        children: (0, r.jsxs)("div", {
          className: p.topSpacing,
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            className: p.headerSpacing,
            children: u.intl.string(u.t["76IPwr"])
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            className: p.secret,
            selectable: true,
            children: o
          })]
        })
      }), (0, r.jsx)(a.izJ, {
        className: p.divider
      }), (0, r.jsx)(f, {
        image: (0, r.jsx)("img", {
          alt: "",
          src: n(308777)
        }),
        label: u.intl.string(u.t["SaD/LY"]),
        text: u.intl.string(u.t.vI1zic),
        children: b
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      code: "",
      totpSecret: (0, d.bV)(),
      error: null,
      isVerifying: false
    }), h(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    }), h(this, "handleActivate", e => {
      e.preventDefault();
      let {
        totpSecret: t,
        code: n
      } = this.state;
      this.setState({
        isVerifying: true
      }), o.Z.enable({
        code: n,
        secret: (0, d.Qe)(t)
      }).then(this.handleActivateSuccess, e => this.setState({
        error: e.body.message,
        isVerifying: false
      }))
    }), h(this, "handleActivateSuccess", () => {
      let {
        onClose: e,
        handleEnableMFASuccess: t
      } = this.props;
      this.setState({
        isVerifying: false
      }), t(), null == e || e()
    })
  }
}
let m = g