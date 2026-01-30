/** Chunk was on 44411 **/
/** chunk id: 83257, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => N,
  OZ: () => I,
  n3: () => A,
  pe: () => _
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      m(e, t, n[t])
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
let E = Object.freeze({
    shouldPreventNavigation: false,
    onPreventNavigation: null,
    sidebarOpen: true
  }),
  A = 1.4,
  I = 15,
  _ = 2;

function w(e) {
  var t, n;
  let {
    section: s,
    setPreventNavigation: l,
    scrollerRef: o
  } = e;
  (0, a.A)({
    type: r.ImpressionTypes.PANE,
    name: null == s ? true : s.impressionName,
    properties: null == s ? true : s.impressionProperties
  });
  let d = null != (t = null == s ? true : s.element) ? t : y.FXj,
    u = null != (n = null == s ? true : s.elementProps) ? n : {};
  return (0, i.jsx)(f.A, {
    section: s.section,
    children: (0, i.jsx)(d, O(S({}, u), {
      setPreventNavigation: l,
      refToScroller: o
    }))
  })
}
class j extends Chunk64700.PureComponent {
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
    t !== this.props.section && (this._intensity = A)
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
    return null != n && n.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (p._.dispatch(y.jej.SHAKE_APP, {
      duration: 300,
      intensity: this._intensity
    }), this._intensity = Math.min(this._intensity + _, I), p._.dispatch(y.jej.EMPHASIZE_NOTICE), false) : (this._intensity = A, true)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n,
      showUserSettingsSearch: s
    } = this.props, r = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), l = null != t ? t : e[0].section;
    return (0, i.jsx)(u.Ay, {
      contentTypes: r,
      children: t => {
        let {
          visibleContent: r
        } = t;
        return (0, i.jsxs)(o.VQ0, {
          selectedItem: l,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: [s ? (0, i.jsx)("div", {
            className: b.O,
            children: (0, i.jsx)(h.A, {})
          }) : null, e.map((e, t) => {
            if (null != e.tabPredicate && !e.tabPredicate()) return null;
            switch (e.section) {
              case C.Fq.HEADER:
                return (0, i.jsx)(o.VQ0.Header, {
                  children: e.label
                }, t);
              case C.Fq.DIVIDER:
                return (0, i.jsx)(o.VQ0.Separator, {}, t);
              case C.Fq.CUSTOM:
                var n;
                let s = null != (n = e.element) ? n : y.FXj;
                return (0, i.jsx)(s, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, l === e.section, r)
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
      element: s
    } = e.notice;
    return null == n || n.some(e => e.showNotice()) ? (0, i.jsx)(s, {
      theme: t
    }) : null
  }
  render() {
    var e;
    let {
      sidebarTheme: t,
      section: n,
      title: s,
      onClose: r,
      hideSidebar: l
    } = this.props, o = this.getPredicateSections(), a = o.find(e => e.section === n);
    if (null == a || null == n) return null;
    let u = null != (e = "string" == typeof a.label ? a.label : a.ariaLabel) ? e : s;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.HI, {
        location: s,
        subsection: u
      }), (0, i.jsx)(C.Ay, {
        sidebarTheme: t,
        scrollerRef: this.scrollerRef,
        section: n,
        sidebar: this.renderSidebar(o),
        content: (0, i.jsx)(w, {
          section: a,
          setPreventNavigation: this.setPreventNavigation,
          scrollerRef: this.scrollerRef
        }),
        mobileSidebarOpen: this.state.sidebarOpen,
        hideSidebar: l,
        toggleSidebar: () => this.setState({
          sidebarOpen: true
        }),
        contentType: a.type,
        notice: this.renderNotice(a),
        closeAction: null != r ? this.handleClose : true
      })]
    })
  }
  constructor(...e) {
    super(...e), m(this, "_unmounted", false), m(this, "_intensity", A), m(this, "_subscribedStores", []), m(this, "scrollerRef", s.createRef()), m(this, "state", O(S({}, E), {
      sidebarOpen: this.props.section !== y.nc_.SUBSCRIPTIONS && this.props.section !== y.nc_.PROFILE_CUSTOMIZATION
    })), m(this, "setPreventNavigation", (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }), m(this, "handleSetSection", e => {
      let {
        onSetSection: t,
        sections: n
      } = this.props, {
        shouldPreventNavigation: i,
        onPreventNavigation: s
      } = this.state, r = () => {
        var i;
        null == t || t(e);
        let {
          notice: s
        } = null != (i = n.find(t => e === t.section)) ? i : {}, r = null != s ? s.stores : null;
        null != r && r.forEach(e => {
          this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
        }), this.setState(O(S({}, E), {
          sidebarOpen: false
        }))
      };
      this.validNavigation() && !i && (r(), g.A.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), i && null != s && s(r)
    }), m(this, "handleClose", () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }), m(this, "handleNoticeStoreUpdate", () => {
      this._unmounted || (this._intensity = A, this.forceUpdate())
    }), m(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
      let {
        section: s,
        label: r = null,
        ariaLabel: a,
        onClick: d,
        variant: u,
        icon: h,
        className: p,
        newIndicator: g,
        newIndicatorDismissibleContentTypes: f,
        badgeCount: C
      } = e, m = null;
      s === y.nc_.ACCOUNT && this.props.isEligibleForPomelo ? m = (0, i.jsx)(o.EpV, {
        size: "custom",
        width: 20,
        height: 20,
        color: l.A.colors.STATUS_WARNING.css
      }) : null != e.decoration ? m = (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != n && (null == f ? true : f.includes(n)) && !t ? m = null != g ? g : (0, i.jsx)(o.LpS, {
        text: v.intl.string(v.t.y2b7CA)
      }) : null != h ? m = h : null != C && C > 0 && (m = (0, i.jsx)(o.hVq, {
        count: C
      }));
      let S = s === y.nc_.PREMIUM ? (0, i.jsx)(c.A, {
        label: r,
        isSelected: t,
        decoration: m
      }) : null == m ? r : (0, i.jsxs)("div", {
        className: b.l,
        children: [r, m]
      });
      return (0, i.jsx)(o.VQ0.Item, {
        variant: u,
        id: s,
        onClick: d,
        className: p,
        "aria-label": null != a ? a : "",
        children: S
      }, s)
    })
  }
}
let N = j