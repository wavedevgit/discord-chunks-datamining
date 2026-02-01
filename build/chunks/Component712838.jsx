/** Chunk was on 49438 **/
/** chunk id: 712838, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk636922 = require("./636922.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641548 = require("./641548.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class A extends Chunk64700.PureComponent {
  render() {
    let {
      message: e,
      listItemProps: t,
      searchOffset: n,
      index: r,
      totalResults: a
    } = this.props, s = u.A.getChannel(e.channel_id);
    if (null == s) return null;
    let _ = "search-result-".concat(e.id);
    return (0, l.jsx)(i.vN3, {
      ringTarget: this.hitRef,
      ringClassName: E.__invalid_searchResultFocusRing,
      offset: 4,
      children: (0, l.jsxs)("li", g(d({
        className: E.kL
      }, t), {
        "aria-posinset": 1 + n + r,
        "aria-setsize": a,
        "aria-labelledby": _,
        children: [(0, l.jsx)(i.DUT, {
          tabIndex: false,
          onClick: this.handleMessageClick,
          innerRef: this.containerRef,
          className: E.mk,
          focusProps: {
            enabled: false
          },
          children: (0, l.jsx)("div", {
            ref: this.hitRef,
            className: E.iU,
            children: (0, l.jsx)(o.A, {
              id: _,
              message: e,
              channel: s,
              onContextMenu: t => this.handleContextMenu(t, e),
              animateAvatar: false,
              subscribeToComponentDispatch: false,
              trackAnnouncementViews: true
            })
          }, e.id)
        }), (0, l.jsx)("div", {
          className: E.NC,
          "aria-hidden": true,
          children: (0, l.jsx)(i.DUT, {
            className: E.x6,
            onClick: this.jumpTo,
            children: c.intl.string(c.t.k5WiPf)
          })
        })]
      }))
    })
  }
  constructor(...e) {
    super(...e), _(this, "containerRef", r.createRef()), _(this, "hitRef", r.createRef()), _(this, "handleContextMenu", (e, t) => {
      let r = u.A.getChannel(t.channel_id);
      null != r && (e.stopPropagation(), (0, s.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("6502"), n.e("27687"), n.e("95336")]).then(n.bind(n, 847342));
        return n => (0, l.jsx)(e, g(d({}, n), {
          message: t,
          channel: r
        }))
      }))
    }), _(this, "jumpTo", e => {
      null != e && (e.preventDefault(), e.stopPropagation());
      let {
        onJump: t,
        message: n,
        index: l
      } = this.props;
      null != n && t(n, l)
    }), _(this, "handleMessageClick", e => {
      ! function(e, t) {
        var n;
        let l = null == (n = window) ? true : n.getSelection();
        if (null != l && !l.isCollapsed) returntrue;
        if (null == e || null == t) returnfalse;
        for (;
          (0, a.vq)(e) && e !== t;) {
          let {
            tagName: t
          } = e;
          if ("A" === t || "IMG" === t || "BUTTON" === t) returntrue;
          e = e.parentNode
        }
        returnfalse
      }(e.target, this.containerRef.current) ? this.jumpTo(e): e.stopPropagation()
    })
  }
}