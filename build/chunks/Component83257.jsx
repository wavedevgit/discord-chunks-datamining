/** Chunk was on web.js **/
/** chunk id: 83257, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => R,
  OZ: () => T,
  n3: () => S,
  pe: () => C
}), require("./321073.js"), require("./114821.js"), require("./339614.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk726249 = require("./726249.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk965304 = require("./965304.jsx"),
  Chunk632678 = require("./632678.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk728458 = require("./728458.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk361739 = require("./361739.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk39965 = require("./39965.js");

function b(e, t, n) {
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
      b(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = Object.freeze({
    shouldPreventNavigation: false,
    onPreventNavigation: null,
    sidebarOpen: true
  }),
  S = 1.4,
  T = 15,
  C = 2;

function N(e) {
  var t, n;
  let {
    section: i,
    setPreventNavigation: s,
    scrollerRef: o
  } = e;
  (0, l.A)({
    type: a.ImpressionTypes.PANE,
    name: null == i ? true : i.impressionName,
    properties: null == i ? true : i.impressionProperties
  });
  let c = null != (t = null == i ? true : i.element) ? t : g.FXj,
    u = null != (n = null == i ? true : i.elementProps) ? n : {};
  return (0, r.jsx)(h.A, {
    section: i.section,
    children: (0, r.jsx)(c, A(O({}, u), {
      setPreventNavigation: s,
      refToScroller: o
    }))
  })
}
class w extends Chunk64700.PureComponent {
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
    t !== this.props.section && (this._intensity = S)
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
    } = null != (e = this.getPredicateSections().find(e => t === e.section)) ? e : {};
    return null != n && n.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (p._.dispatch(g.jej.SHAKE_APP, {
      duration: 300,
      intensity: this._intensity
    }), this._intensity = Math.min(this._intensity + C, T), p._.dispatch(g.jej.EMPHASIZE_NOTICE), false) : (this._intensity = S, true)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n,
      showUserSettingsSearch: i
    } = this.props, a = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), s = null != t ? t : e[0].section;
    return (0, r.jsx)(u.Ay, {
      contentTypes: a,
      children: t => {
        let {
          visibleContent: a
        } = t;
        return (0, r.jsxs)(o.VQ0, {
          selectedItem: s,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: [i ? (0, r.jsx)("div", {
            className: y.O,
            children: (0, r.jsx)(f.A, {})
          }) : null, e.map((e, t) => {
            if (null != e.tabPredicate && !e.tabPredicate()) return null;
            switch (e.section) {
              case m.Fq.HEADER:
                return (0, r.jsx)(o.VQ0.Header, {
                  children: e.label
                }, t);
              case m.Fq.DIVIDER:
                return (0, r.jsx)(o.VQ0.Separator, {}, t);
              case m.Fq.CUSTOM:
                var n;
                let i = null != (n = e.element) ? n : g.FXj;
                return (0, r.jsx)(i, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, s === e.section, a)
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
      hideSidebar: s
    } = this.props, o = this.getPredicateSections(), l = o.find(e => e.section === n);
    if (null == l || null == n) return null;
    let u = null != (e = "string" == typeof l.label ? l.label : l.ariaLabel) ? e : i;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.HI, {
        location: i,
        subsection: u
      }), (0, r.jsx)(m.Ay, {
        sidebarTheme: t,
        scrollerRef: this.scrollerRef,
        section: n,
        sidebar: this.renderSidebar(o),
        content: (0, r.jsx)(N, {
          section: l,
          setPreventNavigation: this.setPreventNavigation,
          scrollerRef: this.scrollerRef
        }),
        mobileSidebarOpen: this.state.sidebarOpen,
        hideSidebar: s,
        toggleSidebar: () => this.setState({
          sidebarOpen: true
        }),
        contentType: l.type,
        notice: this.renderNotice(l),
        closeAction: null != a ? this.handleClose : true
      })]
    })
  }
  constructor(...e) {
    super(...e), b(this, "_unmounted", false), b(this, "_intensity", S), b(this, "_subscribedStores", []), b(this, "scrollerRef", i.createRef()), b(this, "state", A(O({}, I), {
      sidebarOpen: this.props.section !== g.nc_.SUBSCRIPTIONS && this.props.section !== g.nc_.PROFILE_CUSTOMIZATION
    })), b(this, "setPreventNavigation", (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }), b(this, "handleSetSection", e => {
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
        }), this.setState(A(O({}, I), {
          sidebarOpen: false
        }))
      };
      this.validNavigation() && !r && (a(), _.A.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), r && null != i && i(a)
    }), b(this, "handleClose", () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }), b(this, "handleNoticeStoreUpdate", () => {
      this._unmounted || (this._intensity = S, this.forceUpdate())
    }), b(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
      let {
        section: i,
        label: a = null,
        ariaLabel: l,
        onClick: c,
        variant: u,
        icon: f,
        className: p,
        newIndicator: _,
        newIndicatorDismissibleContentTypes: h,
        badgeCount: m
      } = e, b = null;
      i === g.nc_.ACCOUNT && this.props.isEligibleForPomelo ? b = (0, r.jsx)(o.EpV, {
        size: "custom",
        width: 20,
        height: 20,
        color: s.A.colors.STATUS_WARNING.css
      }) : null != e.decoration ? b = (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != n && (null == h ? true : h.includes(n)) && !t ? b = null != _ ? _ : (0, r.jsx)(o.LpS, {
        text: E.intl.string(E.t.y2b7CA)
      }) : null != f ? b = f : null != m && m > 0 && (b = (0, r.jsx)(o.hVq, {
        count: m
      }));
      let O = i === g.nc_.PREMIUM ? (0, r.jsx)(d.A, {
        label: a,
        isSelected: t,
        decoration: b
      }) : null == b ? a : (0, r.jsxs)("div", {
        className: y.l,
        children: [a, b]
      });
      return (0, r.jsx)(o.VQ0.Item, {
        variant: u,
        id: i,
        onClick: c,
        className: p,
        "aria-label": null != l ? l : "",
        children: O
      }, i)
    })
  }
}
let R = w