/** Chunk was on 17302 **/
/** chunk id: 946443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QP: () => N,
  ZP: () => S,
  h6: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  s = require.n(Chunk525654),
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
  Chunk915087 = require("./915087.js");

function S(e) {
  var t, n, l, a, y, S, P;
  let {
    onJump: N,
    showTutorial: Z,
    setSeenTutorial: w,
    closePopout: T
  } = e, A = i.useRef(null), [R, D] = (0, j.ZP)(A), {
    loadState: M,
    channels: L
  } = R, {
    maybeLoadMore: k
  } = D, G = (0, u.e7)([h.Z], () => h.Z.messageGroupSpacing);
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
    let a = o[r];
    if (null == a) return;
    let {
      scrollTop: s,
      offsetHeight: c
    } = i.getScrollerState();
    (a.offsetTop < s || a.offsetTop > s + c) && i.scrollTo({
      to: a.offsetTop
    })
  }), a = R, y = D, i.useEffect(() => {
    let e = () => {
      let e = a.channels.find(e => !e.collapsed);
      null != e && y.markChannelRead(e)
    };
    return b.S.subscribe(x.CkL.MARK_TOP_INBOX_CHANNEL_READ, e), () => {
      b.S.unsubscribe(x.CkL.MARK_TOP_INBOX_CHANNEL_READ, e)
    }
  }, [y, a.channels]), S = D, i.useEffect(() => {
    let e = e => {
      ((0, _.isMac)() || (0, _.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && "z" === e.key && S.undoMarkChannelRead()
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [S]), i.useEffect(() => {
    m.default.track(x.rMx.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), i.useEffect(() => (f.Z.subscribe("CONNECTION_OPEN", T), () => {
    f.Z.unsubscribe("CONNECTION_OPEN", T)
  }), [T]), (0, p.ZP)(() => (b.S.subscribe(x.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead), () => {
    b.S.unsubscribe(x.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead)
  }));
  let U = (0, g.Z)("unreads", A);
  if (0 === L.length) {
    return (0, r.jsx)(O.Z, {
      Icon: d.xx7,
      header: C.intl.string(C.t["6XMM+D"]),
      tip: (null == (P = s().os) ? true : P.family) === "OS X" ? C.intl.string(C.t.w9uDOW) : C.intl.string(C.t.BiUJC6)
    })
  }
  return (0, r.jsx)(c.bG, {
    navigator: U,
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
          onScroll: M === j.jd.Done ? true : k,
          className: o()(E.scroller, "group-spacing-".concat(G)),
          children: [Z ? (0, r.jsx)(I, {
            setSeenTutorial: w
          }) : null, (0, v.Z)(L, D, N), M === j.jd.Done ? null : (0, r.jsx)(d.$jN, {
            className: E.spinner
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
    className: E.tutorial,
    children: [(0, r.jsx)("div", {
      className: E.tutorialIcon,
      children: (0, r.jsx)(d.xx7, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(d.Heading, {
        className: E.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: C.intl.string(C.t.vZPktJ)
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: C.intl.string(C.t.vWkIII)
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: E.tutorialButton,
        children: (0, r.jsx)(d.Button, {
          variant: "primary",
          size: "sm",
          text: C.intl.string(C.t["+IrDzN"]),
          onClick: t
        })
      })]
    })]
  })
}

function P() {
  return (0, Chunk54381.jsx)(Chunk240126.Z, {
    Icon: Chunk481060.xx7,
    disableStars: true,
    header: Chunk388032.intl.string(Chunk388032.t["KG/ynf"]),
    tip: Chunk388032.intl.string(Chunk388032.t.cvcKzX)
  })
}
let N = () => (0, Chunk54381.jsx)(Chunk143316.Z, {
  onClick: () => Chunk585483.S.dispatch(Chunk981631.CkL.INBOX_MARK_ALL_UNREADS_READ)
})