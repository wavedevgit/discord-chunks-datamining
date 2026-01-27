/** Chunk was on 78811 **/
/** chunk id: 333737, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => y
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

function h(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let f = e => {
  let {
    image: t,
    label: r,
    text: o,
    children: s
  } = e;
  return (0, n.jsxs)("div", {
    className: p.uW,
    children: [(0, n.jsx)("div", {
      className: p.X$,
      children: t
    }), (0, n.jsx)("div", {
      className: p.f5,
      children: (0, n.jsxs)("div", {
        children: [(0, n.jsx)(i.Heading, {
          variant: "heading-sm/semibold",
          className: p.p_,
          children: r
        }), (0, n.jsx)(i.Text, {
          variant: "text-md/normal",
          children: o
        }), s]
      })
    })]
  })
};
class _ extends Chunk64700.PureComponent {
  render() {
    var e;
    let {
      transitionState: t,
      onClose: o
    } = this.props, {
      totpSecret: a,
      code: h,
      isVerifying: _
    } = this.state, y = null == (e = l.default.getCurrentUser()) ? true : e.email, g = (0, d.V3)(null != y ? y : "", a), b = (0, n.jsx)("form", {
      onSubmit: this.handleActivate,
      children: (0, n.jsxs)("div", {
        className: p.Kf,
        children: [(0, n.jsx)(i.ksK, {
          value: h,
          placeholder: "000 000",
          maxLength: 7,
          autoComplete: "one-time-code",
          onChange: this.handleCodeChange,
          error: this.state.error,
          autoFocus: true,
          fullWidth: true
        }), (0, n.jsx)(i.Button, {
          variant: "primary",
          text: u.intl.string(u.t["/a5+YV"]),
          type: "submit",
          loading: _
        })]
      })
    });
    return (0, n.jsxs)(s.Modal, {
      title: u.intl.string(u.t.cDgKte),
      subtitle: u.intl.string(u.t["7NGwtH"]),
      transitionState: t,
      onClose: o,
      actions: [],
      children: [(0, n.jsx)(f, {
        image: (0, n.jsx)("img", {
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
      }), (0, n.jsx)(i.cGx, {
        className: p.yF
      }), (0, n.jsx)(f, {
        image: (0, n.jsx)(c.Ay, {
          text: g
        }),
        label: u.intl.string(u.t["91InF1"]),
        text: u.intl.string(u.t.hFeBkl),
        children: (0, n.jsxs)("div", {
          className: p.h8,
          children: [(0, n.jsx)(i.Heading, {
            variant: "heading-sm/semibold",
            className: p.p_,
            children: u.intl.string(u.t["76IPwr"])
          }), (0, n.jsx)(i.Text, {
            variant: "text-md/normal",
            className: p.rJ,
            selectable: true,
            children: a
          })]
        })
      }), (0, n.jsx)(i.cGx, {
        className: p.yF
      }), (0, n.jsx)(f, {
        image: (0, n.jsx)("img", {
          alt: "",
          src: r(87282)
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
      totpSecret: (0, d.tn)(),
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
        code: r
      } = this.state;
      this.setState({
        isVerifying: true
      }), a.A.enable({
        code: r,
        secret: (0, d.cC)(t)
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
let y = _