/** Chunk was on 18912 **/
/** chunk id: 340140, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk538211 = require("./538211.js"),
  Chunk698066 = require("./698066.js"),
  Chunk648159 = require("./648159.js"),
  Chunk388032 = require("./388032.js"),
  Chunk424698 = require("./424698.js"),
  Chunk679335 = require("./679335.js");

function f(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
class p extends Chunk73800.PureComponent {
  render() {
    let {
      isStreamer: t,
      transitionState: e,
      onClose: n
    } = this.props, {
      problem: r
    } = this.state;
    return <Chunk481060.Y0X transitionState={exports} size={Chunk481060.CgR.SMALL} aria-label={Chunk388032.intl.string(Chunk388032.t.qnJ9W1)} parentComponent={"ReportProblem"}>{<Chunk648159.Z />}{<Chunk481060.xBx separator={false} className={Chunk424698.modalHeader}>{<Chunk481060.X6q variant={"text-md/semibold"} className={Chunk679335.title}>{Chunk388032.intl.string(Chunk388032.t.qnJ9W1)}</Chunk481060.X6q>}{<Chunk481060.olH className={Chunk679335.closeButton} innerClassName={Chunk424698.modalInnerCloseButton} onClick={require} />}</Chunk481060.xBx>}{<Chunk481060.hzk className={Chunk679335.content}>{<Chunk481060.Text variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t["7vw0h4"])}</Chunk481060.Text>}{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t["6Y1t5O"])}><Chunk481060.q4e placeholder={Chunk388032.intl.string(Chunk388032.t.U0kGk5)} options={(0, Chunk538211.Z)({
              isStreamer: module,
              isEndStream: false,
              showVibesHoneypot: false
            })} onChange={this.handleChanged} value={Chunk73800} maxVisibleItems={4} /></Chunk481060.xJW>}{<div className={Chunk424698.art} />}</Chunk481060.hzk>}{<Chunk481060.mzw className={Chunk679335.__invalid_footer}>{<Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t.E48BIS)} disabled={null == Chunk73800} onClick={this.handleSubmit} />}{<Chunk600164.Z><Chunk755721.zx look={Chunk755721.zx.Looks.LINK} color={Chunk755721.zx.Colors.PRIMARY} size={Chunk755721.zx.Sizes.NONE} onClick={require}>{Chunk388032.intl.string(Chunk388032.t["ETE/oK"])}</Chunk755721.zx></Chunk600164.Z>}</Chunk481060.mzw>}</Chunk481060.Y0X>
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
        return e => <t{...function(t) {
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
        }, e)} />
      })
    })
  }
}
let g = p