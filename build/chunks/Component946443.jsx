/** Chunk was on 41753 **/
/** chunk id: 946443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QP: () => N,
  ZP: () => x,
  h6: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  a = require.n(Chunk525654),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk724757 = require("./724757.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk143316 = require("./143316.jsx"),
  Chunk240126 = require("./240126.jsx"),
  Chunk147522 = require("./147522.jsx"),
  Chunk809780 = require("./809780.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk153084 = require("./153084.js");

function x(e) {
  var t, n, l, s, _, x, P;
  let {
    onJump: N,
    showTutorial: w,
    setSeenTutorial: Z,
    closePopout: T
  } = e, A = i.useRef(null), [R, D] = (0, v.ZP)(A), {
    loadState: L,
    channels: M
  } = R, {
    maybeLoadMore: k
  } = D, U = (0, u.e7)([f.Z], () => f.Z.messageGroupSpacing);
  t = A, n = R, l = D, i.useLayoutEffect(() => {
    var e;
    let {
      scrollToChannelIndex: r
    } = n;
    l.clearScrollToChannelIndex();
    let {
      current: i
    } = t;
    if (null == i || null == r) return;
    let o = null == (e = i.getScrollerNode()) ? true : e.children;
    if (null == o) return;
    let s = o[r];
    if (null == s) return;
    let {
      scrollTop: a,
      offsetHeight: c
    } = i.getScrollerState();
    (s.offsetTop < a || s.offsetTop > a + c) && i.scrollTo({
      to: s.offsetTop
    })
  }), s = R, _ = D, i.useEffect(() => {
    let e = () => {
      let e = s.channels.find(e => !e.collapsed);
      null != e && _.markChannelRead(e)
    };
    return b.S.subscribe(j.CkL.MARK_TOP_INBOX_CHANNEL_READ, e), () => {
      b.S.unsubscribe(j.CkL.MARK_TOP_INBOX_CHANNEL_READ, e)
    }
  }, [_, s.channels]), x = D, i.useEffect(() => {
    let e = e => {
      ((0, O.isMac)() || (0, O.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && "z" === e.key && x.undoMarkChannelRead()
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [x]), i.useEffect(() => {
    m.default.track(j.rMx.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), i.useEffect(() => (h.Z.subscribe("CONNECTION_OPEN", T), () => {
    h.Z.unsubscribe("CONNECTION_OPEN", T)
  }), [T]), (0, p.ZP)(() => (b.S.subscribe(j.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead), () => {
    b.S.unsubscribe(j.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead)
  }));
  let G = (0, g.Z)("unreads", A);
  if (0 === M.length) {
    return (0, r.jsx)(y.Z, {
      Icon: d.xx7,
      header: E.intl.string(E.t["6XMM+P"]),
      tip: (null == (P = a().os) ? true : P.family) === "OS X" ? E.intl.string(E.t.w9uDOT) : E.intl.string(E.t.BiUJCw)
    })
  }
  return (0, r.jsx)(c.bG, {
    navigator: G,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var t, n, {
            ref: i
          } = e,
          l = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["ref"]);
        return (0, r.jsxs)(d.h21, (t = function(e) {
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
            A.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, l), n = n = {
          onScroll: L === v.jd.Done ? true : k,
          className: o()(S.scroller, "group-spacing-".concat(U)),
          children: [w ? (0, r.jsx)(I, {
            setSeenTutorial: Z
          }) : null, (0, C.Z)(M, D, N), L === v.jd.Done ? null : (0, r.jsx)(d.$jN, {
            className: S.spinner
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

function I(e) {
  let {
    setSeenTutorial: t
  } = e;
  return (0, r.jsxs)("div", {
    className: S.tutorial,
    children: [(0, r.jsx)("div", {
      className: S.tutorialIcon,
      children: (0, r.jsx)(d.xx7, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(d.X6q, {
        className: S.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: E.intl.string(E.t.vZPktL)
      }), (0, r.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: E.intl.string(E.t.vWkIIC)
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: S.tutorialButton,
        children: (0, r.jsx)(d.zxk, {
          variant: "primary",
          size: "sm",
          text: E.intl.string(E.t["+IrDzM"]),
          onClick: t
        })
      })]
    })]
  })
}

function P() {
  return (0, Chunk255367.jsx)(Chunk240126.Z, {
    Icon: Chunk481060.xx7,
    disableStars: true,
    header: Chunk388032.intl.string(Chunk388032.t["KG/ynZ"]),
    tip: Chunk388032.intl.string(Chunk388032.t.cvcKzc)
  })
}
let N = () => (0, Chunk255367.jsx)(Chunk143316.Z, {
  onClick: () => Chunk585483.S.dispatch(Chunk981631.CkL.INBOX_MARK_ALL_UNREADS_READ),
  type: "top-header"
})