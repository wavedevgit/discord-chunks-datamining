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
  Chunk111810 = require("./111810.js"),
  Chunk388032 = require("./388032.jsx");

function d(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[n] = e, t
}
class b extends Chunk473749.PureComponent {
  render() {
    let {
      isStreamer: t,
      transitionState: n,
      onClose: e
    } = this.props, {
      problem: l
    } = this.state;
    return (0, i.jsxs)(r.u_l, {
      title: c.intl.string(c.t.qnJ9W3),
      subtitle: c.intl.string(c.t["7vw0h+"]),
      actions: [{
        text: c.intl.string(c.t["ETE/oC"]),
        variant: "secondary",
        onClick: e
      }, {
        text: c.intl.string(c.t.E48BIc),
        variant: "primary",
        onClick: this.handleSubmit,
        disabled: null == l
      }],
      onClose: e,
      transitionState: n,
      children: [(0, i.jsx)(u.Z, {}), (0, i.jsx)(a.PhF, {
        selectionMode: "single",
        label: c.intl.string(c.t["6Y1t5P"]),
        placeholder: c.intl.string(c.t.U0kGk6),
        options: (0, s.Z)({
          isStreamer: t,
          isEndStream: false
        }),
        onSelectionChange: this.handleChanged,
        value: l,
        maxOptionsVisible: 4
      })]
    })
  }
  constructor(...t) {
    super(...t), d(this, "state", {
      problem: null
    }), d(this, "handleChanged", t => {
      this.setState({
        problem: null != t ? t : null
      })
    }), d(this, "handleSubmit", () => {
      let {
        stream: t,
        streamApplication: n,
        analyticsData: l,
        onClose: r
      } = this.props, {
        problem: s
      } = this.state;
      (0, o.Z)({
        problem: s,
        stream: t,
        feedback: "",
        streamApplication: n,
        analyticsData: l,
        location: "Stream"
      }), r(), (0, a.ZDy)(async () => {
        let {
          default: t
        } = await e.e("14466").then(e.bind(e, 729328));
        return n => (0, i.jsx)(t, function(t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = null != arguments[n] ? arguments[n] : {},
              i = Object.keys(e);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.forEach(function(n) {
              d(t, n, e[n])
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
let g = b