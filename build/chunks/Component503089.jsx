/** Chunk was on web.js **/
/** chunk id: 503089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $x: () => T,
  ZP: () => P,
  d7: () => C,
  w6: () => A
}), require("./539854.js"), require("./361932.js"), require("./187205.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk486807 = require("./486807.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Object.freeze({
    shouldPreventNavigation: false,
    onPreventNavigation: null,
    sidebarOpen: true
  }),
  T = 1.4,
  A = 15,
  C = 2;

function N(e) {
  var t, n;
  let {
    section: i,
    setPreventNavigation: o,
    scrollerRef: s
  } = e;
  (0, l.Z)({
    type: a.ImpressionTypes.PANE,
    name: null == i ? true : i.impressionName,
    properties: null == i ? true : i.impressionProperties
  });
  let c = null != (t = null == i ? true : i.element) ? t : g.VqG,
    u = null != (n = null == i ? true : i.elementProps) ? n : {};
  return (0, r.jsx)(h.Z, {
    section: i.section,
    children: (0, r.jsx)(c, I(O({}, u), {
      setPreventNavigation: o,
      refToScroller: s
    }))
  })
}
class R extends Chunk647438.PureComponent {
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
    t !== this.props.section && (this._intensity = T)
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
    }), this._intensity = Math.min(this._intensity + C, A), Chunk585483.S.dispatch(Chunk981631.CkL.EMPHASIZE_NOTICE), false) : (this._intensity = T, true)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n,
      showUserSettingsSearch: i
    } = this.props, a = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), o = null != t ? t : e[0].section;
    return (0, r.jsx)(u.ZP, {
      contentTypes: a,
      children: t => {
        let {
          visibleContent: a
        } = t;
        return (0, r.jsxs)(s.njP, {
          selectedItem: o,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: [i ? (0, r.jsx)("div", {
            className: b.searchBar,
            children: (0, r.jsx)(f.Z, {})
          }) : null, e.map((e, t) => {
            if (null != e.tabPredicate && !e.tabPredicate()) return null;
            switch (e.section) {
              case m.ID.HEADER:
                return (0, r.jsx)(s.njP.Header, {
                  children: e.label
                }, t);
              case m.ID.DIVIDER:
                return (0, r.jsx)(s.njP.Separator, {}, t);
              case m.ID.CUSTOM:
                var n;
                let i = null != (n = e.element) ? n : g.VqG;
                return (0, r.jsx)(i, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, o === e.section, a)
            }
          })]
        })
      }
    })
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
    return null == n || n.some(e => e.showNotice()) ? (0, r.jsx)(i, {
      theme: t
    }) : null
  }
  render() {
    var e;
    let {
      sidebarTheme: t,
      section: n,
      title: i,
      onClose: a,
      hideSidebar: o
    } = this.props, s = this.getPredicateSections(), l = Chunk481060.find(e => e.section === n);
    if (null == Chunk213609 || null == require) return null;
    let u = null != (e = "string" == typeof Chunk213609.label ? Chunk213609.label : Chunk213609.ariaLabel) ? module : Chunk647438;
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk252618.yY, {
        location: Chunk647438,
        subsection: Chunk243778
      }), (0, Chunk951288.jsx)(Chunk493544.ZP, {
        sidebarTheme: exports,
        scrollerRef: this.scrollerRef,
        section: require,
        sidebar: this.renderSidebar(Chunk481060),
        content: (0, Chunk951288.jsx)(N, {
          section: Chunk213609,
          setPreventNavigation: this.setPreventNavigation,
          scrollerRef: this.scrollerRef
        }),
        mobileSidebarOpen: this.state.sidebarOpen,
        hideSidebar: Chunk692547,
        toggleSidebar: () => this.setState({
          sidebarOpen: true
        }),
        contentType: Chunk213609.type,
        notice: this.renderNotice(Chunk213609),
        closeAction: null != Chunk990547 ? this.handleClose : true
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "_unmounted", false), y(this, "_intensity", T), y(this, "_subscribedStores", []), y(this, "scrollerRef", i.createRef()), y(this, "state", I(O({}, S), {
      sidebarOpen: this.props.section !== g.oAB.SUBSCRIPTIONS && this.props.section !== g.oAB.PROFILE_CUSTOMIZATION
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
      } = this.state, a = () => {
        var r;
        null == t || t(e);
        let {
          notice: i
        } = null != (r = n.find(t => e === t.section)) ? r : {}, a = null != i ? i.stores : null;
        null != a && a.forEach(e => {
          this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
        }), this.setState(I(O({}, S), {
          sidebarOpen: false
        }))
      };
      this.validNavigation() && !r && (a(), p.Z.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), r && null != i && i(a)
    }), y(this, "handleClose", () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }), y(this, "handleNoticeStoreUpdate", () => {
      this._unmounted || (this._intensity = T, this.forceUpdate())
    }), y(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
      let {
        section: i,
        label: a = null,
        ariaLabel: l,
        onClick: c,
        variant: u,
        icon: f,
        className: _,
        newIndicator: p,
        newIndicatorDismissibleContentTypes: h,
        badgeCount: m
      } = e, y = null;
      i === g.oAB.ACCOUNT && this.props.isEligibleForPomelo ? y = (0, r.jsx)(s.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: o.Z.colors.STATUS_WARNING.css
      }) : null != e.decoration ? y = (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != n && (null == h ? true : h.includes(n)) && !t ? y = null != p ? p : (0, r.jsx)(s.IGR, {
        text: E.intl.string(E.t.y2b7CA)
      }) : null != f ? y = f : null != m && m > 0 && (y = (0, r.jsx)(s.mAB, {
        count: m
      }));
      let O = i === g.oAB.PREMIUM ? (0, r.jsx)(d.Z, {
        label: a,
        isSelected: t,
        decoration: y
      }) : null == y ? a : (0, r.jsxs)("div", {
        className: b.tabBarItemContainer,
        children: [a, y]
      });
      return (0, r.jsx)(s.njP.Item, {
        variant: u,
        id: i,
        onClick: c,
        className: _,
        "aria-label": l,
        children: O
      }, i)
    })
  }
}
let P = R