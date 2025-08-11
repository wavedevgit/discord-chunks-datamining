/** Chunk was on 72762 **/
/** chunk id: 503089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $x: () => x,
  ZP: () => _,
  d7: () => C,
  w6: () => P
}), require("./539854.js"), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk252618 = require("./252618.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk126848 = require("./126848.jsx"),
  Chunk207874 = require("./207874.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk960048 = require("./960048.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk493544 = require("./493544.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk64730 = require("./64730.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = Object.freeze({
    shouldPreventNavigation: false,
    onPreventNavigation: null,
    sidebarOpen: true
  }),
  x = 1.4,
  P = 15,
  C = 2;

function w(e) {
  var t, n;
  let {
    section: i,
    setPreventNavigation: s,
    scrollerRef: o
  } = e;
  (0, a.Z)({
    type: l.ImpressionTypes.PANE,
    name: null == i ? true : i.impressionName,
    properties: null == i ? true : i.impressionProperties
  });
  let c = null != (t = null == i ? true : i.element) ? t : m.VqG,
    u = null != (n = null == i ? true : i.elementProps) ? n : {};
  return <O.Z section={i.section}><c{...S(v({}, u), {
      setPreventNavigation: s,
      refToScroller: o
    })} /></O.Z>
}
class N extends Chunk73800.PureComponent {
  componentDidMount() {
    this.getPredicateSections().forEach(e => {
      let {
        notice: t
      } = e;
      if (null == t) return;
      let {
        stores: n
      } = t;
      null != n && n.forEach(e => {
        e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e)
      })
    })
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e;
    t !== this.props.section && (this._intensity = x)
  }
  componentWillUnmount() {
    this._unmounted = true, this._subscribedStores.forEach(e => e.removeChangeListener(this.handleNoticeStoreUpdate)), this.props.sections.forEach(e => {
      var t;
      return null == (t = e.onSettingsClose) ? true : t.call(e)
    })
  }
  getPredicateSections() {
    return this.props.sections.filter(e => null == e.predicate || e.predicate())
  }
  validNavigation() {
    var e;
    let {
      section: t
    } = this.props, {
      notice: n
    } = null != (e = this.getPredicateSections().find(e => t === e.section)) ? module : {};
    return null != require && require.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (Chunk585483.S.dispatch(Chunk981631.CkL.SHAKE_APP, {
      duration: 300,
      intensity: this._intensity
    }), this._intensity = Math.min(this._intensity + C, P), Chunk585483.S.dispatch(Chunk981631.CkL.EMPHASIZE_NOTICE), false) : (this._intensity = x, true)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n,
      showUserSettingsSearch: i
    } = this.props, l = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), s = null != t ? t : e[0].section;
    return <u.ZP contentTypes={l}>{t => {
        let {
          visibleContent: l
        } = t;
        return (0, r.jsxs)(o.njP, {
          selectedItem: s,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: [i ? (0, r.jsx)(f.Z, {
            style: j.searchBar
          }) : null, e.map((e, t) => {
            if (null != e.tabPredicate && !e.tabPredicate()) return null;
            switch (e.section) {
              case h.ID.HEADER:
                return (0, r.jsx)(o.njP.Header, {
                  children: e.label
                }, t);
              case h.ID.DIVIDER:
                return (0, r.jsx)(o.njP.Separator, {}, t);
              case h.ID.CUSTOM:
                var n;
                let i = null != (n = e.element) ? n : m.VqG;
                return (0, r.jsx)(i, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, s === e.section, l)
            }
          })]
        })
      }}</u.ZP>
  }
  renderNotice(e) {
    let {
      theme: t
    } = this.props;
    if (null == e || null == e.notice) return null;
    let {
      stores: n,
      element: i
    } = e.notice;
    return null == n || n.some(e => e.showNotice()) ? <i theme={t} /> : null
  }
  render() {
    var e;
    let {
      sidebarTheme: t,
      section: n,
      title: i,
      onClose: l,
      hideSidebar: s
    } = this.props, o = this.getPredicateSections(), a = Chunk481060.find(e => e.section === n);
    if (null == Chunk213609 || null == require) return null;
    let u = null != (e = "string" == typeof Chunk213609.label ? Chunk213609.label : Chunk213609.ariaLabel) ? module : Chunk73800;
    return <Chunk255367.Fragment>{<Chunk252618.yY location={Chunk73800} subsection={Chunk243778} />}{<Chunk493544.ZP sidebarTheme={exports} scrollerRef={this.scrollerRef} section={require} sidebar={this.renderSidebar(Chunk481060)} content={(0, Chunk255367.jsx)(w, {
          section: Chunk213609,
          setPreventNavigation: this.setPreventNavigation,
          scrollerRef: this.scrollerRef
        })} mobileSidebarOpen={this.state.sidebarOpen} hideSidebar={Chunk692547} toggleSidebar={() => this.setState({
          sidebarOpen: true
        })} contentType={Chunk213609.type} notice={this.renderNotice(Chunk213609)} closeAction={null != Chunk990547 ? this.handleClose : true} />}</Chunk255367.Fragment>
  }
  constructor(...e) {
    super(...e), y(this, "_unmounted", false), y(this, "_intensity", x), y(this, "_subscribedStores", []), y(this, "scrollerRef", i.createRef()), y(this, "state", S(v({}, E), {
      sidebarOpen: this.props.section !== m.oAB.SUBSCRIPTIONS && this.props.section !== m.oAB.PROFILE_CUSTOMIZATION
    })), y(this, "setPreventNavigation", (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }), y(this, "handleSetSection", e => {
      let {
        onSetSection: t,
        sections: n
      } = this.props, {
        shouldPreventNavigation: r,
        onPreventNavigation: i
      } = this.state, l = () => {
        var r;
        null == t || t(e);
        let {
          notice: i
        } = null != (r = n.find(t => e === t.section)) ? r : {}, l = null != i ? i.stores : null;
        null != l && l.forEach(e => {
          this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
        }), this.setState(S(v({}, E), {
          sidebarOpen: false
        }))
      };
      this.validNavigation() && !r && (l(), b.Z.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), r && null != i && i(l)
    }), y(this, "handleClose", () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }), y(this, "handleNoticeStoreUpdate", () => {
      this._unmounted || (this._intensity = x, this.forceUpdate())
    }), y(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
      let {
        section: i,
        label: l = null,
        ariaLabel: a,
        onClick: c,
        variant: u,
        icon: f,
        className: p,
        newIndicator: b,
        newIndicatorDismissibleContentTypes: O,
        badgeCount: h
      } = e, y = null;
      i === m.oAB.ACCOUNT && this.props.isEligibleForPomelo ? y = <o.Mgn size={"custom"} width={20} height={20} color={s.Z.colors.STATUS_WARNING.css} /> : null != e.decoration ? y = <o.Text variant={"text-md/normal"} color={"text-muted"}>{e.decoration}</o.Text> : null != n && (null == O ? true : O.includes(n)) && !t ? y = null != b ? b : <o.IGR text={g.intl.string(g.t.y2b7CA)} /> : null != f ? y = f : null != h && h > 0 && (y = <o.mAB count={h} />);
      let v = i === m.oAB.PREMIUM ? <d.Z label={l} isSelected={t} decoration={y} /> : null == y ? l : <div className={j.tabBarItemContainer}>{l}{y}</div>;
      return <o.njP.Item variant={u} id={i} onClick={c} className={p} aria-label={a}>{v}</o.njP.Item>
    })
  }
}
let _ = N