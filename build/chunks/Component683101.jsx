/** Chunk was on 873 **/
/** chunk id: 683101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk482688 = require("./482688.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
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
class I extends Chunk73800.PureComponent {
  render() {
    let {
      result: e,
      listItemProps: t,
      searchOffset: n,
      index: l,
      totalResults: s
    } = this.props, a = i().find(module, e => e.isSearchHit);
    if (null == Chunk374470) return null;
    let u = Chunk592125.Z.getChannel(Chunk374470.channel_id);
    if (null == Chunk239091) return null;
    let A = "search-result-".concat(Chunk374470.id);
    return (0, Chunk255367.jsx)(Chunk481060.tEY, {
      ringTarget: this.hitRef,
      ringClassName: Chunk482688.__invalid_searchResultFocusRing,
      offset: 4,
      children: (0, Chunk255367.jsxs)("li", m(T({
        className: Chunk482688.container
      }, exports), {
        "aria-posinset": 1 + require + Chunk73800,
        "aria-setsize": Chunk392711,
        "aria-labelledby": A,
        children: [(0, Chunk255367.jsx)(Chunk481060.P3F, {
          tabIndex: false,
          onClick: this.handleMessageClick,
          innerRef: this.containerRef,
          className: Chunk482688.searchResult,
          focusProps: {
            enabled: false
          },
          children: (0, Chunk255367.jsx)("div", {
            ref: this.hitRef,
            className: Chunk482688.message,
            children: (0, Chunk255367.jsx)(Chunk294218.Z, {
              id: A,
              message: Chunk374470,
              channel: Chunk239091,
              onContextMenu: e => this.handleContextMenu(e, a),
              animateAvatar: false,
              subscribeToComponentDispatch: false,
              trackAnnouncementViews: true,
              isSearchResult: true
            })
          }, Chunk374470.id)
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk482688.buttonsContainer,
          "aria-hidden": true,
          children: (0, Chunk255367.jsx)(Chunk481060.P3F, {
            className: Chunk482688.button,
            onClick: this.jumpTo,
            children: Chunk388032.intl.string(Chunk388032.t.k5WiPT)
          })
        })]
      }))
    })
  }
  constructor(...e) {
    super(...e), A(this, "containerRef", l.createRef()), A(this, "hitRef", l.createRef()), A(this, "handleContextMenu", (e, t) => {
      let l = E.Z.getChannel(t.channel_id);
      null != l && (e.stopPropagation(), (0, u.jW)(e, async () => {
        let {
          default: e
        } = await n.e("53809").then(n.bind(n, 858341));
        return n => (0, r.jsx)(e, m(T({}, n), {
          message: t,
          channel: l
        }))
      }))
    }), A(this, "jumpTo", e => {
      null != e && (e.preventDefault(), e.stopPropagation());
      let {
        onJump: t,
        result: n,
        index: r
      } = this.props, l = n.find(e => e.isSearchHit);
      null != l && t(l, r)
    }), A(this, "handleMessageClick", e => {
      if (function(e, t) {
          var n;
          let r = null == (n = window) ? true : n.getSelection();
          if (null != r && !r.isCollapsed) returntrue;
          if (null == e || null == t) returnfalse;
          for (;
            (0, a.k)(e) && e !== t;) {
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