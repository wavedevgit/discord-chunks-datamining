/** Chunk was on 66915 **/
/** chunk id: 662708, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk663993 = require("./663993.js"),
  Chunk771845 = require("./771845.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk48025 = require("./48025.js");

function d(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let u = (0, Chunk663993.Un)({
  createPromise: () => require.e("4848").then(require.bind(require, 797967)),
  webpackId: 797967
});
class m extends Chunk73800.PureComponent {
  render() {
    let {
      transitionState: e
    } = this.props, {
      name: t,
      color: r
    } = this.state;
    return <Chunk481060.Y0X transitionState={module} aria-label={Chunk388032.intl.string(Chunk388032.t.Dx7im5)} size={Chunk481060.CgR.DYNAMIC} parentComponent={"GuildFolderSettings"}>{<Chunk481060.xBx className={Chunk48025.header} separator={false}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{Chunk388032.intl.string(Chunk388032.t.Dx7im5)}</Chunk481060.X6q>}{<Chunk481060.olH onClick={this.close} />}</Chunk481060.xBx>}{<Chunk481060.hzk><form onSubmit={this.handleSubmit}>{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.tGRbjI)} className={Chunk48025.formItem}><Chunk481060.oil maxLength={Chunk981631.dYL} value={exports} onChange={this.handleNameChange} placeholder={Chunk388032.intl.string(Chunk388032.t.xV9hVl)} autoFocus={true} /></Chunk481060.xJW>}{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.xpurRE)} className={Chunk48025.formItem}><u defaultColor={Chunk981631.Wyy} colors={Chunk981631.pmI} value={null != require ? require : Chunk981631.Wyy} onChange={this.handleColorChange} /></Chunk481060.xJW>}</form></Chunk481060.hzk>}{<Chunk481060.mzw><Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t.i4jeWV)} type={"submit"} onClick={this.handleSubmit} /></Chunk481060.mzw>}</Chunk481060.Y0X>
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
      } = this.state, s = a.ZP.getGuildFolders().map(e => {
        var s, i;
        return e.folderId === t ? (s = function(e) {
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
        }({}, e), i = i = {
          folderName: r,
          folderColor: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e))
        }), s) : e
      });
      (0, o.V1)(s), this.close()
    })
  }
}
let b = m