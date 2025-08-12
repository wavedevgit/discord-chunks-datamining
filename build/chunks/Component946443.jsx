/** Chunk was on 26628 **/
/** chunk id: 946443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P,
  h: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk525654 = require("./525654.js"),
  a = require.n(Chunk525654),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk724757 = require("./724757.js"),
  Chunk216789 = require("./216789.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk143316 = require("./143316.jsx"),
  Chunk240126 = require("./240126.jsx"),
  Chunk791914 = require("./791914.jsx"),
  Chunk147522 = require("./147522.jsx"),
  Chunk809780 = require("./809780.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk153084 = require("./153084.js");

function P(e) {
  var t, n, l, s, P, w, Z;
  let {
    setTab: T,
    onJump: A,
    showTutorial: R,
    setSeenTutorial: D,
    closePopout: L,
    badgeState: M
  } = e, k = i.useRef(null), [U, G] = (0, E.ZP)(k), {
    loadState: B,
    channels: V
  } = U, {
    maybeLoadMore: F,
    markAllRead: H
  } = G;
  t = k, n = U, l = G, i.useLayoutEffect(() => {
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
  }), s = U, P = G, i.useEffect(() => {
    let e = () => {
      let e = s.channels.find(e => !e.collapsed);
      null != e && P.markChannelRead(e)
    };
    return O.S.subscribe(S.CkL.MARK_TOP_INBOX_CHANNEL_READ, e), () => {
      O.S.unsubscribe(S.CkL.MARK_TOP_INBOX_CHANNEL_READ, e)
    }
  }, [P, s.channels]), w = G, i.useEffect(() => {
    let e = e => {
      ((0, _.isMac)() || (0, _.isMacWeb)() ? e.metaKey : e.ctrlKey) && !e.shiftKey && !e.altKey && "z" === e.key && w.undoMarkChannelRead()
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [w]), i.useEffect(() => {
    b.default.track(S.rMx.OPEN_POPOUT, {
      type: "Inbox"
    })
  }, []), i.useEffect(() => (p.Z.subscribe("CONNECTION_OPEN", L), () => {
    p.Z.unsubscribe("CONNECTION_OPEN", L)
  }), [L]);
  let z = (0, u.e7)([f.Z], () => f.Z.messageGroupSpacing),
    W = (0, m.Us)({
      location: "Unreads"
    }),
    K = (0, g.Z)("unreads", k);
  if (0 === V.length) {
    return (0, r.jsx)("div", {
      className: o()(I.container, {
        [I.widerInbox]: W
      }),
      children: (0, r.jsx)(h.y5t, {
        component: (0, r.jsx)(v.Z, {
          tab: d.X.UNREADS,
          setTab: T,
          badgeState: M,
          closePopout: L
        }),
        children: (0, r.jsx)(C.Z, {
          Icon: h.xx7,
          header: x.intl.string(x.t["6XMM+P"]),
          tip: (null == (Z = a().os) ? true : Z.family) === "OS X" ? x.intl.string(x.t.w9uDOT) : x.intl.string(x.t.BiUJCw)
        })
      })
    })
  }
  return (0, r.jsx)("div", {
    className: o()(I.container, "group-spacing-".concat(z), {
      [I.widerInbox]: W
    }),
    "aria-label": x.intl.string(x.t.sRUdBw),
    children: (0, r.jsx)(h.y5t, {
      component: (0, r.jsx)(v.Z, {
        tab: d.X.UNREADS,
        setTab: T,
        badgeState: M,
        closePopout: L,
        children: (0, r.jsx)(y.Z, {
          type: "top-header",
          onClick: H
        })
      }),
      children: (0, r.jsx)(c.bG, {
        navigator: K,
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
            return (0, r.jsxs)(h.h21, (t = function(e) {
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
                k.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
              }
            }, l), n = n = {
              onScroll: B === E.jd.Done ? true : F,
              className: I.scroller,
              children: [R ? (0, r.jsx)(N, {
                setSeenTutorial: D
              }) : null, (0, j.Z)(V, G, A), B === E.jd.Done ? null : (0, r.jsx)(h.$jN, {
                className: I.spinner
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
    })
  })
}

function N(e) {
  let {
    setSeenTutorial: t
  } = e;
  return (0, r.jsxs)("div", {
    className: I.tutorial,
    children: [(0, r.jsx)("div", {
      className: I.tutorialIcon,
      children: (0, r.jsx)(h.xx7, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(h.X6q, {
        className: I.__invalid_tutorialHeader,
        variant: "heading-md/semibold",
        children: x.intl.string(x.t.vZPktL)
      }), (0, r.jsx)(h.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: x.intl.string(x.t.vWkIIC)
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: I.tutorialButton,
        children: (0, r.jsx)(h.zxk, {
          variant: "primary",
          size: "sm",
          text: x.intl.string(x.t["+IrDzM"]),
          onClick: t
        })
      })]
    })]
  })
}

function w(e) {
  let {
    setTab: t,
    badgeState: n,
    closePopout: i
  } = e;
  return (0, r.jsx)("div", {
    className: I.container,
    children: (0, r.jsx)(h.y5t, {
      component: (0, r.jsx)(v.Z, {
        tab: d.X.UNREADS,
        setTab: t,
        badgeState: n,
        closePopout: i
      }),
      children: (0, r.jsx)(C.Z, {
        Icon: h.xx7,
        disableStars: true,
        header: x.intl.string(x.t["KG/ynZ"]),
        tip: x.intl.string(x.t.cvcKzc)
      })
    })
  })
}