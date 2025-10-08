/** Chunk was on 23746 **/
/** chunk id: 837651, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk198993 = require("./198993.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk287880 = require("./287880.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186603 = require("./186603.js");

function g(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let p = e => {
  let {
    image: t,
    label: r,
    text: i,
    children: a
  } = e;
  return (0, s.jsxs)(l.Z, {
    className: u.spacing,
    children: [(0, s.jsx)(l.Z, {
      grow: 0,
      shrink: 0,
      basis: "156px",
      justify: l.Z.Justify.CENTER,
      className: u.image,
      children: t
    }), (0, s.jsx)(l.Z, {
      direction: l.Z.Direction.VERTICAL,
      justify: l.Z.Justify.CENTER,
      children: (0, s.jsxs)("div", {
        children: [(0, s.jsx)(n.vwX, {
          tag: "h5",
          className: u.headerSpacing,
          children: r
        }), (0, s.jsx)(n.R94, {
          type: n.R94.Types.DESCRIPTION,
          children: i
        }), a]
      })
    })]
  })
};
class f extends Chunk647438.PureComponent {
  render() {
    var e;
    let {
      transitionState: t,
      onClose: i
    } = this.props, {
      totpSecret: a,
      code: g,
      isVerifying: f
    } = this.state, x = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.email, b = (0, Chunk287880.U0)(null != x ? x : "", Chunk816814), m = (0, Chunk951288.jsx)("form", {
      onSubmit: this.handleActivate,
      children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk186603.inputContainer,
        align: Chunk600164.Z.Align.START,
        children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
          value: g,
          placeholder: "000 000",
          maxLength: 7,
          autoComplete: "one-time-code",
          onChange: this.handleCodeChange,
          error: this.state.error,
          autoFocus: true,
          fullWidth: true
        }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t["/a5+YW"]),
            type: "submit",
            loading: f
          })
        })]
      })
    });
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: exports,
      size: Chunk481060.CgR.DYNAMIC,
      className: Chunk186603.customWidth,
      parentComponent: "MFAEnable",
      children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
        separator: false,
        children: [(0, Chunk951288.jsxs)(Chunk600164.Z.Child, {
          grow: 1,
          shrink: 1,
          children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/semibold",
            children: Chunk388032.intl.string(Chunk388032.t.cDgKtb)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-xs/normal",
            className: Chunk186603.subHeader,
            children: Chunk388032.intl.string(Chunk388032.t["7NGwtL"])
          })]
        }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          children: (0, Chunk951288.jsx)(Chunk481060.olH, {
            onClick: Chunk647438
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
        children: [(0, Chunk951288.jsx)(p, {
          image: (0, Chunk951288.jsx)("img", {
            alt: "",
            src: require("./340061.js"),
            width: 100,
            height: 100
          }),
          label: Chunk388032.intl.string(Chunk388032.t["9E74Dw"]),
          text: Chunk388032.intl.format(Chunk388032.t.A7Aeh4, {
            googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
            authyURL: "https://www.authy.com/"
          })
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk186603.divider
        }), (0, Chunk951288.jsx)(p, {
          image: (0, Chunk951288.jsx)(Chunk198993.ZP, {
            text: b
          }),
          label: Chunk388032.intl.string(Chunk388032.t["91InFx"]),
          text: Chunk388032.intl.string(Chunk388032.t.hFeBkp),
          children: (0, Chunk951288.jsxs)("div", {
            className: Chunk186603.topSpacing,
            children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
              tag: "h5",
              className: Chunk186603.headerSpacing,
              children: Chunk388032.intl.string(Chunk388032.t["76IPws"])
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/normal",
              className: Chunk186603.secret,
              selectable: true,
              children: Chunk816814
            })]
          })
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          className: Chunk186603.divider
        }), (0, Chunk951288.jsx)(p, {
          image: (0, Chunk951288.jsx)("img", {
            alt: "",
            src: require("./308777.js")
          }),
          label: Chunk388032.intl.string(Chunk388032.t["SaD/LS"]),
          text: Chunk388032.intl.string(Chunk388032.t.vI1ziY),
          children: m
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      code: "",
      totpSecret: (0, d.bV)(),
      error: null,
      isVerifying: false
    }), g(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    }), g(this, "handleActivate", e => {
      e.preventDefault();
      let {
        totpSecret: t,
        code: r
      } = this.state;
      this.setState({
        isVerifying: true
      }), a.Z.enable({
        code: r,
        secret: (0, d.Qe)(t)
      }).then(this.handleActivateSuccess, e => this.setState({
        error: e.body.message,
        isVerifying: false
      }))
    }), g(this, "handleActivateSuccess", () => {
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
let x = f