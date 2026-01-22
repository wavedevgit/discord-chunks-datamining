/** Chunk was on 78811 **/
/** chunk id: 333737, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk189213 = require("./189213.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk98207 = require("./98207.js"),
  Chunk414121 = require("./414121.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk464477 = require("./464477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk954469 = require("./954469.js");

function p(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let h = e => {
  let {
    image: t,
    label: r,
    text: n,
    children: a
  } = e;
  return (0, s.jsxs)("div", {
    className: f.uW,
    children: [(0, s.jsx)("div", {
      className: f.X$,
      children: t
    }), (0, s.jsx)("div", {
      className: f.f5,
      children: (0, s.jsxs)("div", {
        children: [(0, s.jsx)(i.Heading, {
          variant: "heading-sm/semibold",
          className: f.p_,
          children: r
        }), (0, s.jsx)(i.Text, {
          variant: "text-md/normal",
          children: n
        }), a]
      })
    })]
  })
};
class b extends Chunk64700.PureComponent {
  render() {
    var e;
    let {
      transitionState: t,
      onClose: n
    } = this.props, {
      totpSecret: l,
      code: p,
      isVerifying: b
    } = this.state, g = null == (e = c.default.getCurrentUser()) ? true : e.email, m = (0, d.V3)(null != g ? g : "", l), x = (0, s.jsx)("form", {
      onSubmit: this.handleActivate,
      children: (0, s.jsxs)("div", {
        className: f.Kf,
        children: [(0, s.jsx)(i.ksK, {
          value: p,
          placeholder: "000 000",
          maxLength: 7,
          autoComplete: "one-time-code",
          onChange: this.handleCodeChange,
          error: this.state.error,
          autoFocus: true,
          fullWidth: true
        }), (0, s.jsx)(i.Button, {
          variant: "primary",
          text: u.intl.string(u.t["/a5+YV"]),
          type: "submit",
          loading: b
        })]
      })
    });
    return (0, s.jsxs)(a.Modal, {
      title: u.intl.string(u.t.cDgKte),
      subtitle: u.intl.string(u.t["7NGwtH"]),
      transitionState: t,
      onClose: n,
      actions: [],
      children: [(0, s.jsx)(h, {
        image: (0, s.jsx)("img", {
          alt: "",
          src: r(582248),
          width: 100,
          height: 100
        }),
        label: u.intl.string(u.t["9E74Dx"]),
        text: u.intl.format(u.t.A7Aehw, {
          googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
          authyURL: "https://www.authy.com/"
        })
      }), (0, s.jsx)(i.cGx, {
        className: f.yF
      }), (0, s.jsx)(h, {
        image: (0, s.jsx)(o.Ay, {
          text: m
        }),
        label: u.intl.string(u.t["91InF1"]),
        text: u.intl.string(u.t.hFeBkl),
        children: (0, s.jsxs)("div", {
          className: f.h8,
          children: [(0, s.jsx)(i.Heading, {
            variant: "heading-sm/semibold",
            className: f.p_,
            children: u.intl.string(u.t["76IPwr"])
          }), (0, s.jsx)(i.Text, {
            variant: "text-md/normal",
            className: f.rJ,
            selectable: true,
            children: l
          })]
        })
      }), (0, s.jsx)(i.cGx, {
        className: f.yF
      }), (0, s.jsx)(h, {
        image: (0, s.jsx)("img", {
          alt: "",
          src: r(87282)
        }),
        label: u.intl.string(u.t["SaD/LY"]),
        text: u.intl.string(u.t.vI1zic),
        children: x
      })]
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      code: "",
      totpSecret: (0, d.tn)(),
      error: null,
      isVerifying: false
    }), p(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    }), p(this, "handleActivate", e => {
      e.preventDefault();
      let {
        totpSecret: t,
        code: r
      } = this.state;
      this.setState({
        isVerifying: true
      }), l.A.enable({
        code: r,
        secret: (0, d.cC)(t)
      }).then(this.handleActivateSuccess, e => this.setState({
        error: e.body.message,
        isVerifying: false
      }))
    }), p(this, "handleActivateSuccess", () => {
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
let g = b