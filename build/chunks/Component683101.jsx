/** Chunk was on 66201 **/
/** chunk id: 683101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk745807 = require("./745807.js");

function d(e, t, n) {
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
      d(e, t, n[t])
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
class T extends Chunk473749.PureComponent {
  render() {
    let {
      message: e,
      listItemProps: t,
      searchOffset: n,
      index: l,
      totalResults: i
    } = this.props, s = Chunk592125.Z.getChannel(module.channel_id);
    if (null == Chunk239091) return null;
    let d = "search-result-".concat(module.id);
    return (0, Chunk54381.jsx)(Chunk481060.tEY, {
      ringTarget: this.hitRef,
      ringClassName: Chunk745807.__invalid_searchResultFocusRing,
      offset: 4,
      children: (0, Chunk54381.jsxs)("li", A(_({
        className: Chunk745807.container
      }, exports), {
        "aria-posinset": 1 + require + Chunk473749,
        "aria-setsize": Chunk374470,
        "aria-labelledby": d,
        children: [(0, Chunk54381.jsx)(Chunk481060.P3F, {
          tabIndex: false,
          onClick: this.handleMessageClick,
          innerRef: this.containerRef,
          className: Chunk745807.searchResult,
          focusProps: {
            enabled: false
          },
          children: (0, Chunk54381.jsx)("div", {
            ref: this.hitRef,
            className: Chunk745807.message,
            children: (0, Chunk54381.jsx)(Chunk294218.Z, {
              id: d,
              message: module,
              channel: Chunk239091,
              onContextMenu: t => this.handleContextMenu(t, e),
              animateAvatar: false,
              subscribeToComponentDispatch: false,
              trackAnnouncementViews: true
            })
          }, module.id)
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk745807.buttonsContainer,
          "aria-hidden": true,
          children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
            className: Chunk745807.button,
            onClick: this.jumpTo,
            children: Chunk388032.intl.string(Chunk388032.t.k5WiPf)
          })
        })]
      }))
    })
  }
  constructor(...e) {
    super(...e), d(this, "containerRef", l.createRef()), d(this, "hitRef", l.createRef()), d(this, "handleContextMenu", (e, t) => {
      let l = u.Z.getChannel(t.channel_id);
      null != l && (e.stopPropagation(), (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("38342"), n.e("26503"), n.e("72804")]).then(n.bind(n, 858341));
        return n => (0, r.jsx)(e, A(_({}, n), {
          message: t,
          channel: l
        }))
      }))
    }), d(this, "jumpTo", e => {
      null != e && (e.preventDefault(), e.stopPropagation());
      let {
        onJump: t,
        message: n,
        index: r
      } = this.props;
      null != n && t(n, r)
    }), d(this, "handleMessageClick", e => {
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