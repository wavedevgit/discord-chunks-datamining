/** Chunk was on 77250 **/
/** chunk id: 643087, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk663993 = require("./663993.js"),
  Chunk771845 = require("./771845.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542560 = require("./542560.js");

function d(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let b = (0, Chunk663993.Un)({
  createPromise: () => require.e("4848").then(require.bind(require, 797967)),
  webpackId: 797967
});
class f extends Chunk647438.PureComponent {
  render() {
    let {
      transitionState: e,
      onClose: t
    } = this.props, {
      name: r,
      color: o
    } = this.state;
    return (0, Chunk951288.jsx)("form", {
      onSubmit: this.handleSubmit,
      children: (0, Chunk951288.jsx)(Chunk159691.u_l, {
        title: Chunk388032.intl.string(Chunk388032.t.Dx7im5),
        actions: [{
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.i4jeWR),
          type: "submit"
        }],
        transitionState: module,
        onClose: exports,
        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          className: Chunk542560.container,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t.tGRbjA),
            maxLength: Chunk981631.dYL,
            value: require,
            onChange: this.handleNameChange,
            placeholder: Chunk388032.intl.string(Chunk388032.t.xV9hVh),
            autoFocus: true
          }), (0, Chunk951288.jsx)(Chunk481060.gNt, {
            label: Chunk388032.intl.string(Chunk388032.t.xpurRF),
            children: (0, Chunk951288.jsx)(b, {
              defaultColor: Chunk981631.Wyy,
              colors: Chunk981631.pmI,
              value: null != Chunk647438 ? Chunk647438 : Chunk981631.Wyy,
              onChange: this.handleColorChange
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), d(this, "state", {
      name: null != (t = this.props.folderName) ? t : "",
      color: this.props.folderColor
    }), d(this, "close", () => {
      this.props.onClose()
    }), d(this, "handleNameChange", e => {
      this.setState({
        name: e
      })
    }), d(this, "handleColorChange", e => {
      this.setState({
        color: e
      })
    }), d(this, "handleSubmit", e => {
      e.preventDefault();
      let {
        folderId: t
      } = this.props, {
        name: r,
        color: n
      } = this.state, o = c.ZP.getGuildFolders().map(e => e.folderId === t ? function(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
      }(function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            d(e, t, r[t])
          })
        }
        return e
      }({}, e), {
        folderName: r,
        folderColor: n
      }) : e);
      (0, l.V1)(o), this.close()
    })
  }
}
let g = f