/** Chunk was on web.js **/
/** chunk id: 944543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk771340 = require("./771340.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk903223 = require("./903223.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397660 = require("./397660.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = {
    position: "bottom",
    autoInvert: false
  },
  m = e => {
    let {
      region: t,
      className: n = _.regionSelectName
    } = e, i = t.name.replace(/ \(VIP\)$/, "");
    return (0, r.jsx)("div", {
      className: n,
      children: i
    })
  };
class g extends Chunk73800.PureComponent {
  render() {
    let {
      region: e,
      selected: t
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      className: a()({
        selected: exports
      }),
      children: [(0, Chunk255367.jsx)(m, {
        region: module,
        className: Chunk397660.regionSelectName
      }), exports ? (0, Chunk255367.jsx)("i", {
        className: Chunk397660.check
      }) : null]
    })
  }
}
class E extends Chunk73800.PureComponent {
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
      i = module.filter(e => !e.deprecated && !e.hidden).map(e => ({
        label: e.name,
        value: e,
        key: e.id
      }));
    return (0, Chunk255367.jsx)(Chunk481060.nsm, {
      className: Chunk397660.root,
      label: Chunk388032.intl.string(Chunk388032.t.w8gMqq),
      options: Chunk73800,
      value: require,
      onChange: this.handleChangeVoiceRegion,
      renderOption: this.renderOption,
      popoutProps: h,
      popoutClassName: Chunk397660.regionSelectPopout
    })
  }
  constructor(...e) {
    super(...e), p(this, "renderOption", (e, t) => (0, r.jsx)(g, {
      region: e.value,
      selected: t
    }, e.value.id)), p(this, "getSelectedRegion", () => {
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
        name: f.intl.string(f.t.JEmsam),
        vip: false,
        deprecated: false,
        hidden: false
      }
    }), p(this, "handleChangeVoiceRegion", e => {
      let {
        value: t
      } = e, {
        channelId: n
      } = this.props.call;
      c.Z.changeCallRegion(n, t.id)
    })
  }
}
let b = Chunk442837.ZP.connectStores([Chunk903223.Z], () => ({
  regions: Chunk903223.Z.getRegions(null)
}))(E)