/** Chunk was on 1272 **/
/** chunk id: 437314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O,
  j: () => g
}), require("./415506.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk332295 = require("./332295.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var g = ((r = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS", r);
let m = Object.freeze({
    SECTION_ALL: {
      lightSrc: require("./900933.js"),
      darkSrc: require("./67764.js"),
      width: 376,
      height: 162,
      renderContent: e => <l.Fragment>{<c.OZU note={p.intl.string(p.t.Y4vMY2)} />}{<div data-button-hoisted-classname-wrapper={true} className={f.button}><c.zxk variant={"primary"} text={p.intl.string(p.t.w5uwoK)} onClick={e} /></div>}</l.Fragment>
    },
    SECTION_ONLINE: {
      lightSrc: require("./55346.js"),
      darkSrc: require("./917847.js"),
      width: 421,
      height: 218,
      renderContent: () => <Chunk481060.OZU note={Chunk388032.intl.string(Chunk388032.t.v7HbiY)} />
    },
    SECTION_BLOCKED: {
      lightSrc: require("./459505.js"),
      darkSrc: require("./356634.js"),
      width: 433,
      height: 232,
      renderContent: () => <Chunk481060.OZU note={Chunk388032.intl.string(Chunk388032.t["9xdyWF"])} />
    },
    SECTION_PENDING: {
      lightSrc: require("./979770.js"),
      darkSrc: require("./138715.js"),
      width: 415,
      height: 200,
      renderContent: (e, t) => <div className={f.emptyStateContainer}>{<c.OZU note={p.intl.string(p.t["aCYQ+P"])} />}{null != e && <s.zx color={s.zx.Colors.PRIMARY} look={s.zx.Looks.OUTLINED} size={s.zx.Sizes.TINY} onClick={e} className={f.spamButton}><c.Text variant={"text-xs/medium"} color={"text-muted"}>{t ? p.intl.string(p.t.R40bU1) : p.intl.string(p.t.rXl8fn)}</c.Text></s.zx>}</div>
    },
    SECTION_SUGGESTIONS: {
      lightSrc: require("./979770.js"),
      darkSrc: require("./138715.js"),
      width: 415,
      height: 200,
      renderContent: () => <Chunk481060.OZU note={Chunk388032.intl.string(Chunk388032.t["vgI/EB"])} />
    },
    SECTION_NO_RESULTS: {
      lightSrc: require("./55346.js"),
      darkSrc: require("./917847.js"),
      width: 421,
      height: 218,
      renderContent: () => <Chunk481060.OZU note={Chunk388032.intl.string(Chunk388032.t["7sW4h4"])} />
    }
  }),
  b = e => {
    let {
      theme: t
    } = e, n = p.intl.string(p.t["oi+B4u"]);
    return <c.ubH theme={t}><c.OZU note={n} /></c.ubH>
  };
class _ extends Chunk73800.PureComponent {
  render() {
    let {
      type: e,
      onClick: t,
      theme: n
    } = this.props, r = {
      opacity: this.state.opacity
    }, l = function(e) {
      switch (e) {
        case d.pJs.ADD_FRIEND:
        case d.pJs.ALL:
          return m.SECTION_ALL;
        case d.pJs.ONLINE:
          return m.SECTION_ONLINE;
        case d.pJs.PENDING:
          return m.SECTION_PENDING;
        case d.pJs.SUGGESTIONS:
          return m.SECTION_SUGGESTIONS;
        case "SECTION_NO_RESULTS":
          return m.SECTION_NO_RESULTS;
        default:
          throw Error("FriendsEmptyState: Invalid empty state")
      }
    }(module);
    return module === Chunk981631.pJs.ADD_FRIEND ? <Chunk748780.Z.div className={Chunk332295.friendsEmpty} style={r}><b theme={require} /></Chunk748780.Z.div> : <Chunk748780.Z.div className={Chunk332295.friendsEmpty} style={r}><Chunk481060.ubH theme={require}>{Chunk73800.renderContent(exports)}</Chunk481060.ubH></Chunk748780.Z.div>
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      opacity: new a.Z.Value(1)
    }), h(this, "componentWillEnter", e => {
      this.state.opacity.setValue(0), a.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 250
      }).start(e)
    }), h(this, "componentWillLeave", e => {
      a.Z.timing(this.state.opacity, {
        toValue: 0,
        duration: 250
      }).start(e)
    })
  }
}
let O = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}), {
  forwardRef: true
})(_)