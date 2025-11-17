/** Chunk was on 18912 **/
/** chunk id: 340140, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk538211 = require("./538211.js"),
  Chunk698066 = require("./698066.js"),
  Chunk648159 = require("./648159.js"),
  Chunk388032 = require("./388032.jsx");

function b(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[n] = e, t
}
class d extends Chunk473749.PureComponent {
  render() {
    let {
      isStreamer: t,
      transitionState: n,
      onClose: e
    } = this.props, {
      problem: r
    } = this.state;
    return (0, Chunk54381.jsxs)(Chunk159691.u_l, {
      title: Chunk388032.intl.string(Chunk388032.t.qnJ9W3),
      subtitle: Chunk388032.intl.string(Chunk388032.t["7vw0h+"]),
      actions: [{
        text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
        variant: "secondary",
        onClick: require
      }, {
        text: Chunk388032.intl.string(Chunk388032.t.E48BIc),
        variant: "primary",
        onClick: this.handleSubmit,
        disabled: null == Chunk473749
      }],
      onClose: require,
      transitionState: exports,
      children: [(0, Chunk54381.jsx)(Chunk648159.Z, {}), (0, Chunk54381.jsx)(Chunk481060.q4e, {
        label: Chunk388032.intl.string(Chunk388032.t["6Y1t5P"]),
        placeholder: Chunk388032.intl.string(Chunk388032.t.U0kGk6),
        options: (0, Chunk538211.Z)({
          isStreamer: module,
          isEndStream: false
        }),
        onChange: this.handleChanged,
        value: Chunk473749,
        maxVisibleItems: 4
      })]
    })
  }
  constructor(...t) {
    super(...t), b(this, "state", {
      problem: null
    }), b(this, "handleChanged", t => {
      this.setState({
        problem: null != t ? t : null
      })
    }), b(this, "handleSubmit", () => {
      let {
        stream: t,
        streamApplication: n,
        analyticsData: r,
        onClose: i
      } = this.props, {
        problem: s
      } = this.state;
      (0, o.Z)({
        problem: s,
        stream: t,
        feedback: "",
        streamApplication: n,
        analyticsData: r,
        location: "Stream"
      }), i(), (0, a.ZDy)(async () => {
        let {
          default: t
        } = await e.e("14466").then(e.bind(e, 729328));
        return n => (0, l.jsx)(t, function(t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = null != arguments[n] ? arguments[n] : {},
              l = Object.keys(e);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), l.forEach(function(n) {
              b(t, n, e[n])
            })
          }
          return t
        }({
          body: c.intl.string(c.t.mMTVnv)
        }, n))
      })
    })
  }
}
let g = d