/** Chunk was on 69937 **/
/** chunk id: 212549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31307 = require("./31307.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
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
class f extends Chunk473749.PureComponent {
  render() {
    let {
      message: e,
      listItemProps: t,
      searchOffset: n,
      index: l,
      totalResults: i
    } = this.props, s = c.Z.getChannel(e.channel_id);
    if (null == s) return null;
    let E = "search-result-".concat(e.id);
    return (0, r.jsx)(a.tEY, {
      ringTarget: this.hitRef,
      ringClassName: d.__invalid_searchResultFocusRing,
      offset: 4,
      children: (0, r.jsxs)("li", A(_({
        className: d.container
      }, t), {
        "aria-posinset": 1 + n + l,
        "aria-setsize": i,
        "aria-labelledby": E,
        children: [(0, r.jsx)(a.P3F, {
          tabIndex: false,
          onClick: this.handleMessageClick,
          innerRef: this.containerRef,
          className: d.searchResult,
          focusProps: {
            enabled: false
          },
          children: (0, r.jsx)("div", {
            ref: this.hitRef,
            className: d.message,
            children: (0, r.jsx)(o.Z, {
              id: E,
              message: e,
              channel: s,
              onContextMenu: t => this.handleContextMenu(t, e),
              animateAvatar: false,
              subscribeToComponentDispatch: false,
              trackAnnouncementViews: true
            })
          }, e.id)
        }), (0, r.jsx)("div", {
          className: d.buttonsContainer,
          "aria-hidden": true,
          children: (0, r.jsx)(a.P3F, {
            className: d.button,
            onClick: this.jumpTo,
            children: u.intl.string(u.t.k5WiPf)
          })
        })]
      }))
    })
  }
  constructor(...e) {
    super(...e), E(this, "containerRef", l.createRef()), E(this, "hitRef", l.createRef()), E(this, "handleContextMenu", (e, t) => {
      let l = c.Z.getChannel(t.channel_id);
      null != l && (e.stopPropagation(), (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("76676"), n.e("26503"), n.e("72804")]).then(n.bind(n, 858341));
        return n => (0, r.jsx)(e, A(_({}, n), {
          message: t,
          channel: l
        }))
      }))
    }), E(this, "jumpTo", e => {
      null != e && (e.preventDefault(), e.stopPropagation());
      let {
        onJump: t,
        message: n,
        index: r
      } = this.props;
      null != n && t(n, r)
    }), E(this, "handleMessageClick", e => {
      if (function(e, t) {
          var n;
          let r = null == (n = window) ? true : n.getSelection();
          if (null != r && !r.isCollapsed) returntrue;
          if (null == e || null == t) returnfalse;
          for (;
            (0, i.kK)(e) && e !== t;) {
            let {
              tagName: t
            } = e;
            if ("A" === t || "IMG" === t || "BUTTON" === t) returntrue;
            e = e.parentNode
          }
          returnfalse
        }(e.target, this.containerRef.current)) return void e.stopPropagation();
      this.jumpTo(e)
    })
  }
}