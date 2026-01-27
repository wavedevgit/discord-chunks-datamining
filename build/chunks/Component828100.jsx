/** Chunk was on 77870 **/
/** chunk id: 828100, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V
}), require("./896048.js"), require("./65821.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk985623 = require("./985623.js"),
  a = require.n(Chunk985623),
  Chunk837381 = require("./837381.jsx"),
  Chunk884362 = require("./884362.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk397927 = require("./397927.js"),
  Chunk951001 = require("./951001.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk660387 = require("./660387.js"),
  Chunk343328 = require("./343328.js"),
  Chunk485947 = require("./485947.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk725323 = require("./725323.js"),
  Chunk611924 = require("./611924.js"),
  Chunk95550 = require("./95550.jsx"),
  Chunk380335 = require("./380335.js"),
  Chunk309199 = require("./309199.js"),
  Chunk157550 = require("./157550.js"),
  Chunk97469 = require("./97469.js"),
  Chunk734057 = require("./734057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk645959 = require("./645959.js"),
  Chunk701363 = require("./701363.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk454198 = require("./454198.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
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
let U = Chunk64700.memo(function() {
  return (0, l.jsxs)("svg", {
    width: "184",
    height: "428",
    viewBox: "0 0 184 428",
    className: M.Ie,
    children: [(0, l.jsx)("rect", {
      x: 40,
      y: 6,
      width: 144,
      height: 20,
      rx: 10
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 16,
      r: 16
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 50,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .9
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 60,
      r: 16,
      opacity: .9
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 94,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .8
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 104,
      r: 16,
      opacity: .8
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 138,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .7
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 148,
      r: 16,
      opacity: .7
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 182,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .6
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 192,
      r: 16,
      opacity: .6
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 226,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .5
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 236,
      r: 16,
      opacity: .5
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 270,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .4
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 280,
      r: 16,
      opacity: .4
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 314,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .3
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 324,
      r: 16,
      opacity: .3
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 358,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .2
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 368,
      r: 16,
      opacity: .2
    }), (0, l.jsx)("rect", {
      x: 40,
      y: 402,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .1
    }), (0, l.jsx)("circle", {
      cx: 16,
      cy: 412,
      r: 16,
      opacity: .1
    })]
  })
});
class B extends(r = Chunk64700.Component) {
  static getDerivedStateFromProps(e) {
    let {
      children: t,
      privateChannelIds: n
    } = e;
    if (null == t) return {
      preRenderedChildren: 0,
      nonNullChildren: [],
      totalRowCount: n.length
    };
    {
      let e = t.filter(e => null != e && false !== e),
        r = e.length;
      return {
        preRenderedChildren: r,
        nonNullChildren: e,
        totalRowCount: r + n.length
      }
    }
  }
  componentDidMount() {
    let {
      selectedChannelId: e,
      homeLink: t
    } = this.props;
    null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics()
  }
  shouldComponentUpdate(e) {
    return !(0, d.A)(this.props, e, ["children"])
  }
  componentDidUpdate(e) {
    let {
      selectedChannelId: t,
      homeLink: n
    } = this.props;
    null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics()
  }
  scrollToChannel(e) {
    if (null == this._list) return;
    let {
      padding: t
    } = this.props, {
      preRenderedChildren: n
    } = this.state, r = null != e ? this.props.privateChannelIds.indexOf(e) : false, l = 0;
    r < 0 || null == e ? this._list.scrollTo({
      to: l
    }) : (l += 44 * (r + n) + t, this._list.scrollIntoViewRect({
      start: Math.max(l - 8, 0),
      end: l + 44 + 8
    }))
  }
  render() {
    let {
      privateChannelIds: e,
      padding: t
    } = this.props, {
      preRenderedChildren: n
    } = this.state;
    return (0, l.jsx)(o.PR, {
      children: r => {
        let {
          ref: i,
          role: s
        } = r, a = function(e, t) {
          if (null == e) return {};
          var n, r, l, i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }
          if (i = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                i = Object.getOwnPropertyNames(e);
              for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
              return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }(r, ["ref", "role"]);
        return (0, l.jsx)(p.skg, {
          children: r => (0, l.jsx)(p.B8B, k({
            fade: true,
            innerRole: s,
            innerAriaLabel: D.intl.string(D.t.YUU0RF),
            innerTag: "ul",
            ref: e => {
              var t;
              this._list = e, this.props.listRef.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
            },
            onScroll: this.handleScroll,
            className: M.XG,
            sectionHeight: this.getSectionHeight,
            paddingTop: t,
            paddingBottom: 8,
            rowHeight: this.getRowHeight,
            renderSection: this.renderSection,
            renderRow: this.renderRow,
            sections: [n, Math.max(e.length, 1)]
          }, a, r))
        })
      }
    })
  }
  constructor(...e) {
    super(...e), L(this, "state", {
      initialized: false,
      preRenderedChildren: 0,
      totalRowCount: 0,
      nonNullChildren: []
    }), L(this, "_list", null), L(this, "hasReportedAnalytics", false), L(this, "reportAnalytics", () => {
      var e;
      if (this.hasReportedAnalytics) return;
      let t = null == (e = this._list) ? true : e.getScrollerState();
      if (null == t) return;
      let {
        privateChannelIds: n,
        channels: r
      } = this.props;
      if (0 === n.length) return;
      let l = i.Children.count(this.props.children);
      if (null == t) return;
      let s = Math.round((t.offsetHeight - 44 * l) / 44),
        a = s > n.length ? n.slice(0, s + 1) : n,
        o = a.map(e => null != r[e] ? r[e].getRecipientId() : null),
        c = n.some(e => (0, y.A)(e)),
        u = {
          num_users_visible: a.length,
          num_users_visible_with_mobile_indicator: o.filter(e => null != e && T.A.isMobileOnline(e)).length
        };
      this.hasReportedAnalytics = true, m.Ay.trackWithMetadata(R.HAw.DM_LIST_VIEWED, G(k({}, u, (0, A.F)()), {
        visible_user_ids: o.filter(e => null != e),
        changelog_dm_visible: c
      }))
    }), L(this, "getSectionHeight", e => 24 * (0 !== e)), L(this, "handleScroll", a()(() => {
      if (null != this._list) {
        let e = this._list.getScrollerNode();
        null != e && h.A.updateChannelListScroll(R.ME, e.scrollTop)
      }
      true !== this.props.onHandleScroll && this.props.onHandleScroll()
    }, 100)), L(this, "renderDM", (e, t) => {
      let {
        privateChannelIds: n,
        channels: r,
        selectedChannelId: i
      } = this.props, {
        totalRowCount: s,
        preRenderedChildren: a
      } = this.state, o = r[n[t]];
      return null == o ? null : (0, l.jsx)(w.Ay, {
        channel: o,
        selected: o.id === i,
        "aria-posinset": a + t + 1,
        "aria-setsize": s
      }, o.id)
    }), L(this, "renderChild", e => {
      let {
        nonNullChildren: t,
        totalRowCount: n
      } = this.state, r = t[e];
      return i.isValidElement(r) ? i.cloneElement(r, {
        "aria-setsize": n,
        "aria-posinset": e + 1
      }) : r
    }), L(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        privateChannelIds: r
      } = this.props;
      return 0 === t ? this.renderChild(n) : 0 === n && 0 === r.length ? (0, l.jsx)(U, {}, "no-private-channels") : this.renderDM(t, n)
    }), L(this, "renderSection", e => {
      let {
        section: t
      } = e;
      return 0 === t ? null : (0, l.jsxs)(_.A, {
        className: M._e,
        children: [(0, l.jsx)("span", {
          className: M.TK,
          children: D.intl.string(D.t.YUU0RF)
        }), (0, l.jsx)(x.A, {
          tooltip: D.intl.string(D.t["6Urw1t"]),
          tooltipPosition: "top",
          className: M.U2,
          iconClassName: M.Br,
          icon: p.TIR,
          subscribeToGlobalHotkey: true
        })]
      }, t)
    }), L(this, "getRowHeight", (e, t) => {
      let {
        privateChannelIds: n,
        density: r
      } = this.props, {
        nonNullChildren: l
      } = this.state, s = 44;
      if (0 === e) {
        let e = l[t];
        if (i.isValidElement(e)) {
          var a;
          s = (null == (a = e.key) ? true : a.startsWith("section-divider")) ? 25 : "dm-quick-launcher" === e.key ? 67 : 40
        }
      } else s = "compact" === r ? 40 : "default" === r ? 44 : 50;
      return 1 === e && 0 === t && 0 === n.length ? 428 : s
    })
  }
}
L(B, "defaultProps", {
  padding: 8
});
let V = e => {
  let {
    density: t
  } = (0, p.wRf)(), {
    version: n,
    theme: r,
    children: s,
    listScrollerRef: a
  } = e, d = i.Children.count(s), h = N.A.getMutablePrivateChannels(), m = (0, C.uX)(h), A = (0, u.yK)([P.A, E.A, S.A], () => {
    let e = P.A.getPrivateChannelIds();
    return (0, C.eh)(e, [E.A, S.A])
  });
  (0, v.P)(j._);
  let {
    analyticsLocations: y
  } = (0, b.Ay)(g.A.CONTACTS_LIST), _ = (0, I.NC)(), {
    keyboardModeEnabled: x,
    version: T
  } = (0, u.cf)([f.A, N.A], () => ({
    keyboardModeEnabled: f.A.keyboardModeEnabled,
    version: null != n ? "".concat(n, ":").concat(N.A.getPrivateChannelsVersion()) : N.A.getPrivateChannelsVersion()
  })), w = i.useRef(null), R = null != a ? a : w, D = i.useCallback(e => {
    let t = R.current,
      n = document.querySelector(e);
    null != t && null != n && t.scrollIntoViewNode({
      node: n,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null == (t = document.querySelector(e)) ? true : t.focus({
            preventScroll: true
          })
        })
      }
    })
  }, [R]), M = i.useCallback(() => new Promise(e => {
    let t = R.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), [R]), L = i.useCallback(() => new Promise(e => {
    let t = R.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), [R]), U = (0, O.GV)(), V = (0, c.Ay)({
    id: "private-channels-".concat(U),
    isEnabled: x,
    scrollToStart: M,
    scrollToEnd: L,
    defaultFocused: (d + 1).toString(),
    setFocus: D
  });
  return (0, l.jsx)(b.f5, {
    value: y,
    children: (0, l.jsx)(o.hD, {
      navigator: V,
      children: (0, l.jsx)(B, G(k({}, e), {
        density: t,
        channels: m,
        privateChannelIds: A,
        listRef: R,
        theme: null != _ ? _ : r,
        version: T
      }))
    })
  })
}