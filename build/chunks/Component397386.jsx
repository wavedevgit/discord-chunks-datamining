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
    } = this.state, m = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.email, x = (0, Chunk287880.U0)(null != m ? m : "", Chunk816814), b = (0, Chunk54381.jsx)("form", {
      onSubmit: this.handleActivate,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk416094.inputContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
          value: h,
          placeholder: "000 000",
          maxLength: 7,
          autoComplete: "one-time-code",
          onChange: this.handleCodeChange,
          error: this.state.error,
          autoFocus: true,
          fullWidth: true
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t["/a5+YV"]),
          type: "submit",
          loading: g
        })]
      })
    });
    return (0, Chunk54381.jsxs)(Chunk775086.Modal, {
      title: Chunk388032.intl.string(Chunk388032.t.cDgKte),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7NGwtH"]),
      transitionState: exports,
      onClose: Chunk473749,
      actions: [],
      children: [(0, Chunk54381.jsx)(f, {
        image: (0, Chunk54381.jsx)("img", {
          alt: "",
          src: require("./340061.js"),
          width: 100,
          height: 100
        }),
        label: Chunk388032.intl.string(Chunk388032.t["9E74Dx"]),
        text: Chunk388032.intl.format(Chunk388032.t.A7Aehw, {
          googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
          authyURL: "https://www.authy.com/"
        })
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk416094.divider
      }), (0, Chunk54381.jsx)(f, {
        image: (0, Chunk54381.jsx)(Chunk198993.ZP, {
          text: x
        }),
        label: Chunk388032.intl.string(Chunk388032.t["91InF1"]),
        text: Chunk388032.intl.string(Chunk388032.t.hFeBkl),
        children: (0, Chunk54381.jsxs)("div", {
          className: Chunk416094.topSpacing,
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-sm/semibold",
            className: Chunk416094.headerSpacing,
            children: Chunk388032.intl.string(Chunk388032.t["76IPwr"])
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            className: Chunk416094.secret,
            selectable: true,
            children: Chunk816814
          })]
        })
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk416094.divider
      }), (0, Chunk54381.jsx)(f, {
        image: (0, Chunk54381.jsx)("img", {
          alt: "",
          src: require("./308777.js")
        }),
        label: Chunk388032.intl.string(Chunk388032.t["SaD/LY"]),
        text: Chunk388032.intl.string(Chunk388032.t.vI1zic),
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