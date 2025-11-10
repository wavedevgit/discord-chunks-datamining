/** Chunk was on 57336 **/
/** chunk id: 191062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk771340 = require("./771340.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk903223 = require("./903223.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167207 = require("./167207.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {
    position: "bottom",
    autoInvert: false
  },
  g = e => {
    let {
      region: t,
      className: n = h.regionSelectName
    } = e, r = t.name.replace(/ \(VIP\)$/, "");
    return (0, i.jsx)("div", {
      className: n,
      children: r
    })
  };
class b extends Chunk647438.PureComponent {
  render() {
    let {
      region: e,
      selected: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      className: a()({
        selected: exports
      }),
      children: [(0, Chunk951288.jsx)(g, {
        region: module,
        className: Chunk167207.regionSelectName
      }), exports ? (0, Chunk951288.jsx)("i", {
        className: Chunk167207.check
      }) : null]
    })
  }
}
class y extends Chunk647438.PureComponent {
  componentDidMount() {
    null == this.props.regions && Chunk771340.Z.fetchRegions(null)
  }
  render() {
    let {
      regions: e
    } = this.props;
    if (null == module) return null;
    let t = this.getSelectedRegion(),
      n = {
        label: exports.name,
        value: exports
      },
      r = module.filter(e => !e.deprecated && !e.hidden).map(e => ({
        label: e.name,
        value: e,
        key: e.id
      }));
    return (0, Chunk951288.jsx)(Chunk481060.nsm, {
      className: Chunk167207.root,
      label: Chunk388032.intl.string(Chunk388032.t.w8gMqh),
      options: Chunk647438,
      value: require,
      onChange: this.handleChangeVoiceRegion,
      renderOption: this.renderOption,
      popoutProps: m,
      popoutClassName: Chunk167207.regionSelectPopout
    })
  }
  constructor(...e) {
    super(...e), f(this, "renderOption", (e, t) => (0, i.jsx)(b, {
      region: e.value,
      selected: t
    }, e.value.id)), f(this, "getSelectedRegion", () => {
      var e;
      let {
        regions: t,
        call: n
      } = this.props;
      return n.regionUpdated && null != t && null != n.region ? null != (e = t.find(e => {
        let {
          id: t
        } = e;
        return t === n.region
      })) ? e : {
        name: n.region,
        id: n.region
      } : {
        id: "automatic",
        name: p.intl.string(p.t.JEmsap),
        vip: false,
        deprecated: false,
        hidden: false
      }
    }), f(this, "handleChangeVoiceRegion", e => {
      let {
        value: t
      } = e, {
        channelId: n
      } = this.props.call;
      c.Z.changeCallRegion(n, t.id)
    })
  }
}
let C = Chunk442837.ZP.connectStores([Chunk903223.Z], () => ({
  regions: Chunk903223.Z.getRegions(null)
}))(y)