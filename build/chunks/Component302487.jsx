/** Chunk was on 46875 **/
/** chunk id: 302487, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => k,
  h: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk970984 = require("./970984.js"),
  Chunk884362 = require("./884362.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk741918 = require("./741918.js"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817363 = require("./817363.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk355622 = require("./355622.js"),
  Chunk349688 = require("./349688.jsx"),
  Chunk914905 = require("./914905.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk522602 = require("./522602.js"),
  Chunk518960 = require("./518960.js"),
  Chunk853742 = require("./853742.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk149707 = require("./149707.js");

function T(e) {
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
}

function S(e, t) {
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
let N = {
    scale: .95,
    opacity: 0
  },
  w = {
    scale: 1,
    opacity: 1
  },
  E = {
    scale: 1,
    opacity: 1
  },
  I = {
    tension: 2400,
    friction: 52
  },
  P = ".".concat(Chunk149707.EJ),
  R = {
    behavior: "smooth",
    block: "nearest",
    inline: "nearest"
  };

function k(e) {
  let {
    channelId: t,
    onClick: n,
    onClose: i,
    onMouseEnter: s,
    listItemProps: o
  } = e, c = l.useRef(null), d = (0, m.bG)([j.A], () => j.A.getChannel(t), [t]);
  return a()(null != d, "Forum Channel is null"), (0, r.jsxs)(h.DUT, S(T({}, o), {
    "aria-label": C.intl.string(C.t.nzoF5p),
    className: O.EJ,
    onMouseEnter: s,
    onClick: e => {
      if (0 === e.detail) {
        var t;
        null == (t = c.current) || t.activateUploadDialogue()
      }(0, A.ri)({
        isMobile: false
      }), null == n || n()
    },
    children: [(0, r.jsx)(g.A, {
      className: O.Fg,
      ref: c,
      onChange: e => {
        null == i || i(), (0, y.R)(e.currentTarget.files, d, v.C.FirstThreadMessage, {
          requireConfirm: true,
          origin: "file_picker"
        }), e.currentTarget.value = null
      },
      multiple: d.rateLimitPerUser <= 0,
      tabIndex: false,
      "aria-hidden": true
    }), (0, r.jsx)(h.XGR, {
      size: "custom",
      color: "currentColor",
      width: 28,
      height: 28,
      className: O.T3
    })]
  }))
}

function M(e) {
  let {
    channelId: t,
    closePopout: n
  } = e, [i, a] = l.useState(false), {
    reducedMotion: u
  } = l.useContext(h.CZY), g = (0, h.zhh)({
    from: u.enabled ? w : N,
    to: E,
    config: I
  }, "animate-always"), j = (0, m.bG)([f.A], () => f.A.keyboardModeEnabled), v = (0, m.bG)([_.A], () => _.A.getUploads(t, x.oU.CREATE_FORUM_POST.drafts.type)), y = (0, o.Ay)({
    id: "forum-composer-attachments-popout",
    isEnabled: j,
    orientation: d.Gl.HORIZONTAL,
    scrollToStart: () => Promise.resolve(),
    scrollToEnd: () => Promise.resolve()
  });
  return (0, r.jsx)(s.animated.div, {
    className: O.jC,
    onMouseLeave: () => {
      i || j || n()
    },
    onFocus: e => {
      e.target.scrollIntoView(R)
    },
    style: g,
    children: (0, r.jsx)(h.IpV, {
      orientation: "horizontal",
      className: O.SW,
      paddingFix: false,
      fade: true,
      children: (0, r.jsx)(c.hD, {
        navigator: y,
        children: (0, r.jsx)(c.PR, {
          children: e => {
            let {
              ref: n
            } = e, l = function(e, t) {
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
            return (0, r.jsxs)("div", S(T({
              className: O.p8,
              ref: n
            }, l), {
              children: [v.map(e => (0, r.jsx)(b.A, {
                channelId: t,
                draftType: x.oU.CREATE_FORUM_POST.drafts.type,
                upload: e,
                keyboardModeEnabled: j,
                hideFileName: true,
                size: p.L.SMALL
              }, e.id)), (0, r.jsx)(D, {
                channelId: t,
                setFileInputOpen: a
              })]
            }))
          }
        })
      })
    })
  })
}

function D(e) {
  let {
    channelId: t,
    setFileInputOpen: n
  } = e, l = S(T({}, (0, c.rm)("upload-button")), {
    tabIndex: 0
  });
  return (0, r.jsx)(k, {
    channelId: t,
    onClick: () => {
      n(true)
    },
    onClose: () => {
      n(false), requestAnimationFrame(() => {
        (0, u.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(R)
      })
    },
    listItemProps: l
  })
}

function L(e) {
  let {
    channelId: t
  } = e, [n, i] = l.useState(false), a = l.useRef(null), s = (0, m.bG)([_.A], () => _.A.getUploads(t, x.oU.CREATE_FORUM_POST.drafts.type)), o = s.length, c = o > 0;
  l.useEffect(() => {
    n && !c && i(false)
  }, [n, c]), l.useEffect(() => {
    if (document.activeElement !== document.body && null != document.activeElement) return;
    i(o > 0);
    let e = requestAnimationFrame(() => {
      var e;
      let t = null == (e = a.current) ? true : e.querySelector(P);
      null == t || t.focus()
    });
    return () => cancelAnimationFrame(e)
  }, [o]);
  let d = () => {
      c && i(true)
    },
    u = () => {
      i(false)
    };
  return (0, r.jsxs)("div", {
    className: O.kL,
    ref: a,
    onBlur: e => {
      var t, n;
      null == e.relatedTarget || (null == (t = a.current) ? true : t.contains(e.relatedTarget)) || (null == (n = e.relatedTarget) ? true : n.closest('[role="dialog"]')) == null && u()
    },
    children: [c ? !n && (0, r.jsxs)(h.DUT, {
      "aria-label": C.intl.string(C.t.nzoF5p),
      className: O.fY,
      tabIndex: 0,
      onClick: d,
      onFocus: () => {
        d(), c && requestAnimationFrame(() => {
          var e;
          let t = null == (e = a.current) ? true : e.querySelector(P);
          null == t || t.focus()
        })
      },
      onMouseEnter: d,
      children: [(0, r.jsx)(b.J, {
        upload: s[0],
        size: p.L.SMALL
      }), (0, r.jsx)("div", {
        className: O.qS,
        children: o
      })]
    }) : (0, r.jsx)(k, {
      onMouseEnter: d,
      channelId: t
    }), n && (0, r.jsx)(M, {
      channelId: t,
      closePopout: u
    })]
  })
}