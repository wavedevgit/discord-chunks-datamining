/** Chunk was on 12630 **/
/** chunk id: 683101, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk294218 = require("./294218.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374815 = require("./374815.js");

function u(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : A[e] = t, A
}

function h(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      u(A, e, t[e])
    })
  }
  return A
}

function d(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
class E extends Chunk647438.PureComponent {
  render() {
    let {
      result: A,
      listItemProps: e,
      searchOffset: t,
      index: r,
      totalResults: l
    } = this.props, s = i().find(module, A => A.isSearchHit);
    if (null == Chunk374470) return null;
    let o = Chunk592125.Z.getChannel(Chunk374470.channel_id);
    if (null == Chunk239091) return null;
    let u = "search-result-".concat(Chunk374470.id);
    return (0, Chunk951288.jsx)(Chunk481060.tEY, {
      ringTarget: this.hitRef,
      ringClassName: Chunk374815.__invalid_searchResultFocusRing,
      offset: 4,
      children: (0, Chunk951288.jsxs)("li", d(h({
        className: Chunk374815.container
      }, exports), {
        "aria-posinset": 1 + require + Chunk647438,
        "aria-setsize": Chunk392711,
        "aria-labelledby": u,
        children: [(0, Chunk951288.jsx)(Chunk481060.P3F, {
          tabIndex: false,
          onClick: this.handleMessageClick,
          innerRef: this.containerRef,
          className: Chunk374815.searchResult,
          focusProps: {
            enabled: false
          },
          children: (0, Chunk951288.jsx)("div", {
            ref: this.hitRef,
            className: Chunk374815.message,
            children: (0, Chunk951288.jsx)(Chunk294218.Z, {
              id: u,
              message: Chunk374470,
              channel: Chunk239091,
              onContextMenu: A => this.handleContextMenu(A, s),
              animateAvatar: false,
              subscribeToComponentDispatch: false,
              trackAnnouncementViews: true,
              isSearchResult: true
            })
          }, Chunk374470.id)
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk374815.buttonsContainer,
          "aria-hidden": true,
          children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
            className: Chunk374815.button,
            onClick: this.jumpTo,
            children: Chunk388032.intl.string(Chunk388032.t.k5WiPT)
          })
        })]
      }))
    })
  }
  constructor(...A) {
    super(...A), u(this, "containerRef", r.createRef()), u(this, "hitRef", r.createRef()), u(this, "handleContextMenu", (A, e) => {
      let r = c.Z.getChannel(e.channel_id);
      null != r && (A.stopPropagation(), (0, o.jW)(A, async () => {
        let {
          default: A
        } = await Promise.all([t.e("38342"), t.e("93077"), t.e("44565")]).then(t.bind(t, 858341));
        return t => (0, n.jsx)(A, d(h({}, t), {
          message: e,
          channel: r
        }))
      }))
    }), u(this, "jumpTo", A => {
      null != A && (A.preventDefault(), A.stopPropagation());
      let {
        onJump: e,
        result: t,
        index: n
      } = this.props, r = t.find(A => A.isSearchHit);
      null != r && e(r, n)
    }), u(this, "handleMessageClick", A => {
      if (function(A, e) {
          var t;
          let n = null == (t = window) ? true : t.getSelection();
          if (null != n && !n.isCollapsed) returntrue;
          if (null == A || null == e) returnfalse;
          for (;
            (0, s.k)(A) && A !== e;) {
            let {
              tagName: e
            } = A;
            if ("A" === e || "IMG" === e || "BUTTON" === e) returntrue;
            A = A.parentNode
          }
          returnfalse
        }(A.target, this.containerRef.current)) return void A.stopPropagation();
      this.jumpTo(A)
    })
  }
}