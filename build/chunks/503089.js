/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  $x: () => P,
  ZP: () => w,
  d7: () => S,
  w6: () => _
}), r(653041), r(13667), r(390547), r(47120);
var n = r(200651),
  s = r(192379),
  i = r(990547),
  o = r(692547),
  l = r(481060),
  a = r(213609),
  c = r(252618),
  u = r(243778),
  d = r(126848),
  p = r(207874),
  f = r(585483),
  b = r(960048),
  g = r(410575),
  O = r(493544),
  m = r(981631),
  h = r(388032),
  x = r(66918);

function j(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      j(e, t, r[t])
    })
  }
  return e
}

function C(e, t) {
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
}
let v = Object.freeze({
    shouldPreventNavigation: !1,
    onPreventNavigation: null,
    sidebarOpen: !0
  }),
  P = 1.4,
  _ = 15,
  S = 2;

function N(e) {
  var t, r;
  let {
    section: s,
    setPreventNavigation: o,
    scrollerRef: l
  } = e;
  (0, a.Z)({
    type: i.ImpressionTypes.PANE,
    name: null == s ? void 0 : s.impressionName,
    properties: null == s ? void 0 : s.impressionProperties
  });
  let c = null !== (t = null == s ? void 0 : s.element) && void 0 !== t ? t : m.VqG,
    u = null !== (r = null == s ? void 0 : s.elementProps) && void 0 !== r ? r : {};
  return (0, n.jsx)(g.Z, {
    section: s.section,
    children: (0, n.jsx)(c, C(y({}, u), {
      setPreventNavigation: o,
      refToScroller: l
    }))
  })
}
class E extends s.PureComponent {
  componentDidMount() {
    this.getPredicateSections().forEach(e => {
      let {
        notice: t
      } = e;
      if (null == t) return;
      let {
        stores: r
      } = t;
      null != r && r.forEach(e => {
        e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e)
      })
    })
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e;
    t !== this.props.section && (this._intensity = P)
  }
  componentWillUnmount() {
    this._unmounted = !0, this._subscribedStores.forEach(e => e.removeChangeListener(this.handleNoticeStoreUpdate)), this.props.sections.forEach(e => {
      var t;
      return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e)
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
      notice: r
    } = null !== (e = this.getPredicateSections().find(e => t === e.section)) && void 0 !== e ? e : {};
    return null != r && r.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (f.S.dispatch(m.CkL.SHAKE_APP, {
      duration: 300,
      intensity: this._intensity
    }), this._intensity = Math.min(this._intensity + S, _), f.S.dispatch(m.CkL.EMPHASIZE_NOTICE), !1) : (this._intensity = P, !0)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: r,
      showUserSettingsSearch: s
    } = this.props, i = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), o = null != t ? t : e[0].section;
    return (0, n.jsx)(u.ZP, {
      contentTypes: i,
      children: t => {
        let {
          visibleContent: i
        } = t;
        return (0, n.jsxs)(l.njP, {
          selectedItem: o,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": r,
          children: [s ? (0, n.jsx)(p.Z, {
            style: x.searchBar
          }) : null, e.map((e, t) => {
            if (null != e.tabPredicate && !e.tabPredicate()) return null;
            switch (e.section) {
              case O.ID.HEADER:
                return (0, n.jsx)(l.njP.Header, {
                  children: e.label
                }, t);
              case O.ID.DIVIDER:
                return (0, n.jsx)(l.njP.Separator, {}, t);
              case O.ID.CUSTOM:
                var r;
                let s = null !== (r = e.element) && void 0 !== r ? r : m.VqG;
                return (0, n.jsx)(s, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, o === e.section, i)
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
      stores: r,
      element: s
    } = e.notice;
    return null == r || r.some(e => e.showNotice()) ? (0, n.jsx)(s, {
      theme: t
    }) : null
  }
  render() {
    var e;
    let {
      sidebarTheme: t,
      section: r,
      title: s,
      onClose: i,
      hideSidebar: o
    } = this.props, l = this.getPredicateSections(), a = l.find(e => e.section === r);
    if (null == a || null == r) return null;
    let u = null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : s;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.yY, {
        location: s,
        subsection: u
      }), (0, n.jsx)(O.ZP, {
        sidebarTheme: t,
        scrollerRef: this.scrollerRef,
        section: r,
        sidebar: this.renderSidebar(l),
        content: (0, n.jsx)(N, {
          section: a,
          setPreventNavigation: this.setPreventNavigation,
          scrollerRef: this.scrollerRef
        }),
        mobileSidebarOpen: this.state.sidebarOpen,
        hideSidebar: o,
        toggleSidebar: () => this.setState({
          sidebarOpen: !0
        }),
        contentType: a.type,
        notice: this.renderNotice(a),
        closeAction: null != i ? this.handleClose : void 0
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "_unmounted", !1), j(this, "_intensity", P), j(this, "_subscribedStores", []), j(this, "scrollerRef", s.createRef()), j(this, "state", C(y({}, v), {
      sidebarOpen: this.props.section !== m.oAB.SUBSCRIPTIONS && this.props.section !== m.oAB.PROFILE_CUSTOMIZATION
    })), j(this, "setPreventNavigation", (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }), j(this, "handleSetSection", e => {
      let {
        onSetSection: t,
        sections: r
      } = this.props, {
        shouldPreventNavigation: n,
        onPreventNavigation: s
      } = this.state, i = () => {
        var n;
        null == t || t(e);
        let {
          notice: s
        } = null !== (n = r.find(t => e === t.section)) && void 0 !== n ? n : {}, i = null != s ? s.stores : null;
        null != i && i.forEach(e => {
          this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
        }), this.setState(C(y({}, v), {
          sidebarOpen: !1
        }))
      };
      this.validNavigation() && !n && (i(), b.Z.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), n && null != s && s(i)
    }), j(this, "handleClose", () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }), j(this, "handleNoticeStoreUpdate", () => {
      !this._unmounted && (this._intensity = P, this.forceUpdate())
    }), j(this, "renderSettingsSectionTabBarItem", (e, t, r) => {
      let {
        section: s,
        label: i = null,
        ariaLabel: a,
        onClick: c,
        color: u,
        icon: p,
        className: f,
        newIndicator: b,
        newIndicatorDismissibleContentTypes: g,
        badgeCount: O
      } = e, j = null;
      s === m.oAB.ACCOUNT && this.props.isEligibleForPomelo ? j = (0, n.jsx)(l.P4T, {
        size: "custom",
        width: 20,
        height: 20,
        color: o.Z.colors.STATUS_WARNING.css
      }) : null != e.decoration ? j = (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != r && (null == g ? void 0 : g.includes(r)) && !t ? j = null != b ? b : (0, n.jsx)(l.IGR, {
        text: h.NW.string(h.t.y2b7CA)
      }) : null != p ? j = p : null != O && O > 0 && (j = (0, n.jsx)(l.mAB, {
        count: O
      }));
      let y = s === m.oAB.PREMIUM ? (0, n.jsx)(d.Z, {
        label: i,
        isSelected: t,
        decoration: j
      }) : null == j ? i : (0, n.jsxs)("div", {
        className: x.tabBarItemContainer,
        children: [i, j]
      });
      return (0, n.jsx)(l.njP.Item, {
        color: u,
        id: s,
        onClick: c,
        className: f,
        "aria-label": a,
        children: y
      }, s)
    })
  }
}
let w = E