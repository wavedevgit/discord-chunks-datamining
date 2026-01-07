/** Chunk was on 77250 **/
/** chunk id: 643087, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk663993 = require("./663993.js"),
  Chunk771845 = require("./771845.js"),
  Chunk981631 = require("./981631.js"),
  Chunk126134 = require("./126134.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867972 = require("./867972.js");

function b(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let f = (0, Chunk663993.Un)({
  createPromise: () => r.e("4848").then(r.bind(r, 797967)),
  webpackId: 797967
});
class g extends Chunk473749.PureComponent {
  render() {
    let {
      transitionState: e,
      onClose: t
    } = this.props, {
      name: r,
      color: o
    } = this.state;
    return (0, n.jsx)("form", {
      onSubmit: this.handleSubmit,
      children: (0, n.jsx)(s.u_l, {
        title: u.intl.string(u.t.Dx7im5),
        actions: [{
          variant: "primary",
          text: u.intl.string(u.t.i4jeWR),
          type: "submit"
        }],
        transitionState: e,
        onClose: t,
        children: (0, n.jsxs)(i.Kqy, {
          gap: 16,
          children: [(0, n.jsx)(i.oil, {
            label: u.intl.string(u.t.tGRbjA),
            maxLength: h.dYL,
            value: r,
            onChange: this.handleNameChange,
            placeholder: u.intl.string(u.t.xV9hVh),
            autoFocus: true
          }), (0, n.jsx)(i.gNt, {
            label: u.intl.string(u.t.xpurRF),
            children: (0, n.jsx)(f, {
              className: d.colorPicker,
              defaultColor: p.Wy,
              colors: h.pmI,
              value: null != o ? o : p.Wy,
              onChange: this.handleColorChange
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), b(this, "state", {
      name: null != (t = this.props.folderName) ? t : "",
      color: this.props.folderColor
    }), b(this, "close", () => {
      this.props.onClose()
    }), b(this, "handleNameChange", e => {
      this.setState({
        name: e
      })
    }), b(this, "handleColorChange", e => {
      this.setState({
        color: e
      })
    }), b(this, "handleSubmit", e => {
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
            b(e, t, r[t])
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
let m = g