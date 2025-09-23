/** Chunk was on 18912 **/
/** chunk id: 340140, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk538211 = require("./538211.js"),
  Chunk698066 = require("./698066.js"),
  Chunk648159 = require("./648159.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk357062 = require("./357062.js"),
  Chunk47718 = require("./47718.js");

function f(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
class p extends Chunk647438.PureComponent {
  render() {
    let {
      isStreamer: t,
      transitionState: e,
      onClose: n
    } = this.props, {
      problem: r
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: exports,
      size: Chunk481060.CgR.SMALL,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.qnJ9W1),
      parentComponent: "ReportProblem",
      children: [(0, Chunk951288.jsx)(Chunk648159.Z, {}), (0, Chunk951288.jsxs)(Chunk481060.xBx, {
        separator: false,
        className: Chunk357062.modalHeader,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "text-md/semibold",
          className: Chunk47718.title,
          children: Chunk388032.intl.string(Chunk388032.t.qnJ9W1)
        }), (0, Chunk951288.jsx)(Chunk481060.olH, {
          className: Chunk47718.closeButton,
          innerClassName: Chunk357062.modalInnerCloseButton,
          onClick: require
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
        className: Chunk47718.content,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t["7vw0h4"])
        }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
          label: Chunk388032.intl.string(Chunk388032.t["6Y1t5O"]),
          placeholder: Chunk388032.intl.string(Chunk388032.t.U0kGk5),
          options: (0, Chunk538211.Z)({
            isStreamer: module,
            isEndStream: false,
            showVibesHoneypot: false
          }),
          onChange: this.handleChanged,
          value: Chunk647438,
          maxVisibleItems: 4
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk357062.art
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.mzw, {
        className: Chunk47718.__invalid_footer,
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.E48BIS),
          disabled: null == Chunk647438,
          onClick: this.handleSubmit
        }), (0, Chunk951288.jsx)(Chunk600164.Z, {
          children: (0, Chunk951288.jsx)(Chunk755721.zx, {
            look: Chunk755721.zx.Looks.LINK,
            color: Chunk755721.zx.Colors.PRIMARY,
            size: Chunk755721.zx.Sizes.NONE,
            onClick: require,
            children: Chunk388032.intl.string(Chunk388032.t["ETE/oK"])
          })
        })]
      })]
    })
  }
  constructor(...t) {
    super(...t), f(this, "state", {
      problem: null
    }), f(this, "handleChanged", t => {
      this.setState({
        problem: null != t ? t : null
      })
    }), f(this, "handleSubmit", () => {
      let {
        stream: t,
        streamApplication: e,
        analyticsData: r,
        onClose: i
      } = this.props, {
        problem: s
      } = this.state;
      (0, c.Z)({
        problem: s,
        stream: t,
        feedback: "",
        streamApplication: e,
        analyticsData: r,
        location: "Stream"
      }), i(), (0, a.ZDy)(async () => {
        let {
          default: t
        } = await n.e("14466").then(n.bind(n, 729328));
        return e => (0, l.jsx)(t, function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), l.forEach(function(e) {
              f(t, e, n[e])
            })
          }
          return t
        }({
          body: d.intl.string(d.t.mMTVnp)
        }, e))
      })
    })
  }
}
let g = p