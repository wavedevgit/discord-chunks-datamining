/** Chunk was on 31930 **/
/** chunk id: 503089, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $x: () => E,
  ZP: () => N,
  d7: () => I,
  w6: () => w
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

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Object.freeze({
    shouldPreventNavigation: false,
    onPreventNavigation: null,
    sidebarOpen: true
  }),
  E = 1.4,
  w = 15,
  I = 2;

function j(e) {
  var t, n;
  let {
    section: r,
    setPreventNavigation: l,
    scrollerRef: o
  } = e;
  (0, a.Z)({
    type: s.ImpressionTypes.PANE,
    name: null == r ? true : r.impressionName,
    properties: null == r ? true : r.impressionProperties
  });
  let c = null != (t = null == r ? true : r.element) ? t : b.VqG,
    u = null != (n = null == r ? true : r.elementProps) ? n : {};
  return (0, i.jsx)(f.Z, {
    section: r.section,
    children: (0, i.jsx)(c, O(y({}, u), {
      setPreventNavigation: l,
      refToScroller: o
    }))
  })
}
class P extends Chunk647438.PureComponent {
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
    t !== this.props.section && (this._intensity = E)
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
    }), this._intensity = Math.min(this._intensity + I, w), Chunk585483.S.dispatch(Chunk981631.CkL.EMPHASIZE_NOTICE), false) : (this._intensity = E, true)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n,
      showUserSettingsSearch: r
    } = this.props, s = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), l = null != t ? t : e[0].section;
    return (0, i.jsx)(u.ZP, {
      contentTypes: s,
      children: t => {
        let {
          visibleContent: s
        } = t;
        return (0, i.jsxs)(o.njP, {
          selectedItem: l,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: [r ? (0, i.jsx)(h.Z, {
            style: C.searchBar
          }) : null, e.map((e, t) => {
            if (null != e.tabPredicate && !e.tabPredicate()) return null;
            switch (e.section) {
              case m.ID.HEADER:
                return (0, i.jsx)(o.njP.Header, {
                  children: e.label
                }, t);
              case m.ID.DIVIDER:
                return (0, i.jsx)(o.njP.Separator, {}, t);
              case m.ID.CUSTOM:
                var n;
                let r = null != (n = e.element) ? n : b.VqG;
                return (0, i.jsx)(r, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, l === e.section, s)
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
      element: r
    } = e.notice;
    return null == n || n.some(e => e.showNotice()) ? (0, i.jsx)(r, {
      theme: t
    }) : null
  }
  render() {
    var e;
    let {
      sidebarTheme: t,
      section: n,
      title: r,
      onClose: s,
      hideSidebar: l
    } = this.props, o = this.getPredicateSections(), a = Chunk481060.find(e => e.section === n);
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
        content: (0, Chunk951288.jsx)(j, {
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
    super(...e), _(this, "_unmounted", false), _(this, "_intensity", E), _(this, "_subscribedStores", []), _(this, "scrollerRef", r.createRef()), _(this, "state", O(y({}, S), {
      sidebarOpen: this.props.section !== b.oAB.SUBSCRIPTIONS && this.props.section !== b.oAB.PROFILE_CUSTOMIZATION
    })), _(this, "setPreventNavigation", (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }), _(this, "handleSetSection", e => {
      let {
        onSetSection: t,
        sections: n
      } = this.props, {
        shouldPreventNavigation: i,
        onPreventNavigation: r
      } = this.state, s = () => {
        var i;
        null == t || t(e);
        let {
          notice: r
        } = null != (i = n.find(t => e === t.section)) ? i : {}, s = null != r ? r.stores : null;
        null != s && s.forEach(e => {
          this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
        }), this.setState(O(y({}, S), {
          sidebarOpen: false
        }))
      };
      this.validNavigation() && !i && (s(), g.Z.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), i && null != r && r(s)
    }), _(this, "handleClose", () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }), _(this, "handleNoticeStoreUpdate", () => {
      this._unmounted || (this._intensity = E, this.forceUpdate())
    }), _(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
      let {
        section: r,
        label: s = null,
        ariaLabel: a,
        onClick: c,
        variant: u,
        icon: h,
        className: p,
        newIndicator: g,
        newIndicatorDismissibleContentTypes: f,
        badgeCount: m
      } = e, _ = null;
      r === b.oAB.ACCOUNT && this.props.isEligibleForPomelo ? _ = (0, i.jsx)(o.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: l.Z.colors.STATUS_WARNING.css
      }) : null != e.decoration ? _ = (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != n && (null == f ? true : f.includes(n)) && !t ? _ = null != g ? g : (0, i.jsx)(o.IGR, {
        text: v.intl.string(v.t.y2b7CA)
      }) : null != h ? _ = h : null != m && m > 0 && (_ = (0, i.jsx)(o.mAB, {
        count: m
      }));
      let y = r === b.oAB.PREMIUM ? (0, i.jsx)(d.Z, {
        label: s,
        isSelected: t,
        decoration: _
      }) : null == _ ? s : (0, i.jsxs)("div", {
        className: C.tabBarItemContainer,
        children: [s, _]
      });
      return (0, i.jsx)(o.njP.Item, {
        variant: u,
        id: r,
        onClick: c,
        className: p,
        "aria-label": a,
        children: y
      }, r)
    })
  }
}
let N = P