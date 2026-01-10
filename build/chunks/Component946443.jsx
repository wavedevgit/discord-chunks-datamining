/** Chunk was on 81985 **/
/** chunk id: 946443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QP: () => Z,
  ZP: () => _,
  h6: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk97916 = require("./97916.js");

function _(e) {
  var t, n, l, o, v, _, P;
  let {
    onJump: Z,
    showTutorial: N,
    setSeenTutorial: T,
    closePopout: A
  } = e, w = i.useRef(null), [R, D] = (0, x.ZP)(w), {
    loadState: M,
    channels: k
  } = R, {
    maybeLoadMore: L
  } = D, U = (0, u.e7)([h.Z], () => h.Z.messageGroupSpacing);
  t = w, n = R, l = D, i.useLayoutEffect(() => {
    var e;
    let {
      scrollToChannelIndex: r
    } = n;
    l.clearScrollToChannelIndex();
    let {
      current: i
    } = t;
    if (null == i || null == r) return;
    let a = null == (e = i.getScrollerNode()) ? true : e.children;
    if (null == a) return;
    let o = a[r];
    if (null == o) return;
    let {
      scrollTop: s,
      offsetHeight: c
    } = i.getScrollerState();
    (o.offsetTop < s || o.offsetTop > s + c) && i.scrollTo({
      to: o.offsetTop
    })
  }), o = R, v = D, i.useEffect(() => {
    let e = () => {
      let e = o.channels.find(e => !e.collapsed);
      null != e && v.markChannelRead(e)
    };
    return b.S.subscribe(C.CkL.MARK_TOP_INBOX_CHANNEL_READ, e), () => {
      b.S.unsubscribe(C.CkL.MARK_TOP_INBOX_CHANNEL_READ, e)
    }
  }, [v, o.channels]), _ = D, i.useEffect(() => {
    let e = e => {
      ((0, y.isMac)() || (0, y.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && "z" === e.key && _.undoMarkChannelRead()
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [_]), i.useEffect(() => {
    m.default.track(C.rMx.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), i.useEffect(() => (p.Z.subscribe("CONNECTION_OPEN", A), () => {
    p.Z.unsubscribe("CONNECTION_OPEN", A)
  }), [A]), (0, f.ZP)(() => (b.S.subscribe(C.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead), () => {
    b.S.unsubscribe(C.CkL.INBOX_MARK_ALL_UNREADS_READ, D.markAllRead)
  }));
  let G = (0, g.Z)("unreads", w);
  if (0 === k.length) {
    return (0, r.jsx)(O.Z, {
      Icon: d.xx7,
      header: E.intl.string(E.t["6XMM+D"]),
      tip: (null == (P = s().os) ? true : P.family) === "OS X" ? E.intl.string(E.t.w9uDOW) : E.intl.string(E.t.BiUJC6)
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
            w.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, l), n = n = {
          onScroll: M === x.jd.Done ? true : L,
          className: a()(S.scroller, "group-spacing-".concat(U)),
          children: [N ? (0, r.jsx)(I, {
            setSeenTutorial: T
          }) : null, (0, j.Z)(k, D, Z), M === x.jd.Done ? null : (0, r.jsx)(d.$jN, {
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
      children: [(0, r.jsx)(d.Heading, {
        className: S.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: E.intl.string(E.t.vZPktJ)
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: E.intl.string(E.t.vWkIII)
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: S.tutorialButton,
        children: (0, r.jsx)(d.Button, {
          variant: "primary",
          size: "sm",
          text: E.intl.string(E.t["+IrDzN"]),
          onClick: t
        })
      })]
    })]
  })
}

function P() {
  return (0, r.jsx)(O.Z, {
    Icon: d.xx7,
    disableStars: true,
    header: E.intl.string(E.t["KG/ynf"]),
    tip: E.intl.string(E.t.cvcKzX)
  })
}
let Z = () => (0, r.jsx)(v.Z, {
  onClick: () => b.S.dispatch(C.CkL.INBOX_MARK_ALL_UNREADS_READ)
})