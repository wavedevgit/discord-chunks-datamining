/** Chunk was on 99116 **/
/** chunk id: 672551, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk268218 = require("./268218.js"),
  Chunk711014 = require("./711014.js"),
  Chunk652215 = require("./652215.js"),
  Chunk114329 = require("./114329.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk48835 = require("./48835.js");

function d(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let f = (0, Chunk268218.Fe)({
  createPromise: () => r.e("66147").then(r.bind(r, 48736)),
  webpackId: 48736
});
class g extends Chunk64700.PureComponent {
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
      children: (0, n.jsx)(s.aFV, {
        title: u.intl.string(u.t.Dx7im5),
        actions: [{
          variant: "primary",
          text: u.intl.string(u.t.i4jeWR),
          type: "submit"
        }],
        transitionState: e,
        onClose: t,
        children: (0, n.jsxs)(i.BJc, {
          gap: 16,
          children: [(0, n.jsx)(i.ksK, {
            label: u.intl.string(u.t.tGRbjA),
            maxLength: h.F05,
            value: r,
            onChange: this.handleNameChange,
            placeholder: u.intl.string(u.t.xV9hVh),
            autoFocus: true
          }), (0, n.jsx)(i.D0$, {
            label: u.intl.string(u.t.xpurRF),
            children: (0, n.jsx)(f, {
              className: b.E,
              defaultColor: p.DO,
              colors: h._tK,
              value: null != o ? o : p.DO,
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
      } = this.state, o = c.Ay.getGuildFolders().map(e => {
        var o, s;
        return e.folderId === t ? (o = function(e) {
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
        }({}, e), s = s = {
          folderName: r,
          folderColor: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
        }), o) : e
      });
      (0, l.um)(o), this.close()
    })
  }
}
let m = g