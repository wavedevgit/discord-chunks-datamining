/** Chunk was on 17534 **/
/** chunk id: 412484, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => C,
  NH: () => N,
  T: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk481613 = require("./481613.js"),
  o = require.n(Chunk481613),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk928039 = require("./928039.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk157296 = require("./157296.jsx"),
  Chunk963702 = require("./963702.jsx"),
  Chunk792967 = require("./792967.jsx"),
  Chunk712209 = require("./712209.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk852570 = require("./852570.js");

function C(e) {
  var t, n, i, a, y, C, I;
  let {
    onJump: N,
    showTutorial: T,
    setSeenTutorial: P,
    closePopout: w
  } = e, R = l.useRef(null), [D, L] = (0, j.Ay)(R), {
    loadState: M,
    channels: G
  } = D, {
    maybeLoadMore: k
  } = L, U = (0, u.bG)([g.A], () => g.A.messageGroupSpacing);
  t = R, n = D, i = L, l.useLayoutEffect(() => {
    var e;
    let {
      scrollToChannelIndex: r
    } = n;
    i.clearScrollToChannelIndex();
    let {
      current: l
    } = t;
    if (null == l || null == r) return;
    let s = null == (e = l.getScrollerNode()) ? true : e.children;
    if (null == s) return;
    let a = s[r];
    if (null == a) return;
    let {
      scrollTop: o,
      offsetHeight: c
    } = l.getScrollerState();
    (a.offsetTop < o || a.offsetTop > o + c) && l.scrollTo({
      to: a.offsetTop
    })
  }), a = D, y = L, l.useEffect(() => {
    let e = () => {
      let e = a.channels.find(e => !e.collapsed);
      null != e && y.markChannelRead(e)
    };
    return b._.subscribe(x.jej.MARK_TOP_INBOX_CHANNEL_READ, e), () => {
      b._.unsubscribe(x.jej.MARK_TOP_INBOX_CHANNEL_READ, e)
    }
  }, [y, a.channels]), C = L, l.useEffect(() => {
    let e = e => {
      ((0, A.isMac)() || (0, A.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && "z" === e.key && C.undoMarkChannelRead()
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [C]), l.useEffect(() => {
    m.default.track(x.HAw.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), l.useEffect(() => (h.h.subscribe("CONNECTION_OPEN", w), () => {
    h.h.unsubscribe("CONNECTION_OPEN", w)
  }), [w]), (0, p.Ay)(() => (b._.subscribe(x.jej.INBOX_MARK_ALL_UNREADS_READ, L.markAllRead), () => {
    b._.unsubscribe(x.jej.INBOX_MARK_ALL_UNREADS_READ, L.markAllRead)
  }));
  let V = (0, f.A)("unreads", R);
  if (0 === G.length) {
    return (0, r.jsx)(O.A, {
      Icon: d.K$s,
      header: v.intl.string(v.t["6XMM+D"]),
      tip: (null == (I = o().os) ? true : I.family) === "OS X" ? v.intl.string(v.t.w9uDOW) : v.intl.string(v.t.BiUJC6)
    })
  }
  return (0, r.jsx)(c.hD, {
    navigator: V,
    children: (0, r.jsx)(c.PR, {
      children: e => {
        var t, n;
        let {
          ref: l
        } = e, i = function(e, t) {
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
        }(e, ["ref"]);
        return (0, r.jsxs)(d.ChK, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          ref: e => {
            var t;
            R.current = e, l.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, i), n = n = {
          onScroll: M === j.mJ.Done ? true : k,
          className: s()(E.XG, "group-spacing-".concat(U)),
          children: [T ? (0, r.jsx)(S, {
            setSeenTutorial: P
          }) : null, (0, _.A)(G, L, N), M === j.mJ.Done ? null : (0, r.jsx)(d.y$y, {
            className: E.u1
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })
  })
}

function S(e) {
  let {
    setSeenTutorial: t
  } = e;
  return (0, r.jsxs)("div", {
    className: E.d$,
    children: [(0, r.jsx)("div", {
      className: E.cm,
      children: (0, r.jsx)(d.K$s, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(d.Heading, {
        className: E.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: v.intl.string(v.t.vZPktJ)
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: v.intl.string(v.t.vWkIII)
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: E.dh,
        children: (0, r.jsx)(d.Button, {
          variant: "primary",
          size: "sm",
          text: v.intl.string(v.t["+IrDzN"]),
          onClick: t
        })
      })]
    })]
  })
}

function I() {
  return (0, r.jsx)(O.A, {
    Icon: d.K$s,
    disableStars: true,
    header: v.intl.string(v.t["KG/ynf"]),
    tip: v.intl.string(v.t.cvcKzX)
  })
}
let N = () => (0, r.jsx)(y.A, {
  onClick: () => b._.dispatch(x.jej.INBOX_MARK_ALL_UNREADS_READ)
})