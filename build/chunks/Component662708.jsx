/** Chunk was on 66915 **/
/** chunk id: 662708, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk886025 = require("./886025.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk663993 = require("./663993.js"),
  Chunk771845 = require("./771845.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk713970 = require("./713970.js");

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
      transitionState: e
    } = this.props, {
      name: t,
      color: r
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: module,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.Dx7im5),
      size: Chunk481060.CgR.DYNAMIC,
      parentComponent: "GuildFolderSettings",
      children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
        className: Chunk713970.header,
        separator: false,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: Chunk388032.intl.string(Chunk388032.t.Dx7im5)
        }), (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: this.close
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        children: (0, Chunk951288.jsx)("form", {
          onSubmit: this.handleSubmit,
          children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
            gap: 16,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              label: Chunk388032.intl.string(Chunk388032.t.tGRbjI),
              maxLength: Chunk981631.dYL,
              value: exports,
              onChange: this.handleNameChange,
              placeholder: Chunk388032.intl.string(Chunk388032.t.xV9hVl),
              autoFocus: true
            }), (0, Chunk951288.jsx)(Chunk886025.N, {
              label: Chunk388032.intl.string(Chunk388032.t.xpurRE),
              children: (0, Chunk951288.jsx)(b, {
                defaultColor: Chunk981631.Wyy,
                colors: Chunk981631.pmI,
                value: null != require ? require : Chunk981631.Wyy,
                onChange: this.handleColorChange
              })
            })]
          })
        })
      }), (0, Chunk951288.jsx)(Chunk481060.mzw, {
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.i4jeWV),
          type: "submit",
          onClick: this.handleSubmit
        })
      })]
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
      } = this.state, s = c.ZP.getGuildFolders().map(e => e.folderId === t ? function(e, t) {
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
      (0, l.V1)(s), this.close()
    })
  }
}
let g = f