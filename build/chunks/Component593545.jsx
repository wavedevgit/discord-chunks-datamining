/** Chunk was on web.js **/
/** chunk id: 593545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk608787 = require("./608787.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk40330 = require("./40330.jsx"),
  Chunk571989 = require("./571989.js"),
  Chunk828061 = require("./828061.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk424218 = require("./424218.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk409077 = require("./409077.js"),
  Chunk154257 = require("./154257.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  var t;
  let n = "utf-8",
    r = null != (t = null == e ? true : e.split("charset=").slice(false)[0]) ? t : n;
  try {
    return new TextDecoder(r)
  } catch (t) {
    if ((null == e ? true : e.startsWith("text")) || r.toLowerCase().includes("utf")) return new TextDecoder(n);
    throw t
  }
}

function v(e, t) {
  let [n, r] = i.useState(false), [o, a] = i.useState(null), [s, l] = i.useState(1);
  return i.useEffect(() => {
    let n = 5e4;
    !async function() {
      try {
        var i, o;
        let s = await fetch(e, {
            headers: {
              Range: "bytes=0-".concat(n),
              Accept: "text/plain"
            }
          }),
          c = O(t).decode(await s.arrayBuffer()),
          u = null != (i = s.headers.get("content-range")) ? i : "0",
          d = null != (o = s.headers.get("content-length")) ? o : "1",
          f = parseInt(u.split("/")[1]) - parseInt(d);
        a(0 === f ? c : c.slice(0, false)), l(f), r(false)
      } catch (e) {
        l(0), r(true)
      }
    }()
  }, [e, t]), {
    fileContents: o,
    bytesLeft: s,
    hadError: n
  }
}

function I(e) {
  let {
    text: t,
    language: i
  } = e, o = () => (0, r.jsx)("pre", {
    children: (0, r.jsx)("code", {
      className: a()(m.scrollbarGhostHairline, h.codeView, "hljs"),
      children: t
    })
  });
  return (0, r.jsx)(s.GI, {
    createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
    webpackId: 364964,
    render: e => {
      if (!e.hasLanguage(i)) return o();
      let n = e.highlight(i, t, true);
      return null == n ? o() : (0, r.jsx)("pre", {
        children: (0, r.jsx)("code", {
          className: a()(m.scrollbarGhostHairline, h.codeView, "hljs", n.language),
          dangerouslySetInnerHTML: {
            __html: n.value
          }
        })
      })
    },
    renderFallback: () => o()
  })
}

function T(e) {
  let {
    expanded: t,
    setExpanded: n,
    isWholeFile: i,
    numLines: o
  } = e, a = p.intl.formatToPlainString(i ? p.t.Go5Vvr : p.t.yJcYam, {
    lines: o
  });
  return (0, r.jsx)(l.ua7, {
    text: "".concat(t ? p.intl.string(p.t.iTcumZ) : p.intl.string(p.t.dcl9MT), " (").concat(a, ")"),
    children: e => (0, r.jsxs)(l.P3F, y(E({}, e), {
      className: h.toggleExpandSection,
      onClick: () => {
        n(!t)
      },
      children: [(0, r.jsx)(f.Z, {
        direction: t ? f.Z.Directions.UP : f.Z.Directions.DOWN
      }), t ? p.intl.string(p.t.iTcumZ) : p.intl.string(p.t.dcl9MT)]
    }))
  })
}

function S(e) {
  let {
    url: t,
    fileName: n,
    fileSize: i
  } = e, o = "".concat(n, " (").concat((0, _.IC)(i), ")");
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.ua7, {
      text: o,
      children: e => (0, r.jsx)("span", y(E({}, e), {
        className: a()(h.downloadSection, h.attachmentName),
        children: n
      }))
    }), (0, r.jsx)(l.ua7, {
      text: o,
      children: e => (0, r.jsx)("span", y(E({}, e), {
        className: a()(h.downloadSection, h.formattedSize),
        children: (0, _.IC)(i)
      }))
    }), (0, r.jsx)(l.ua7, {
      text: "".concat(p.intl.string(p.t["1WjMbG"]), " ").concat(o),
      children: e => (0, r.jsx)(l.eee, y(E({}, e), {
        className: h.downloadSection,
        href: t,
        target: "_blank",
        rel: "noreferrer noopener",
        children: (0, r.jsx)(l._8t, {
          size: "md",
          color: "currentColor",
          className: h.downloadButton
        })
      }))
    })]
  })
}

function A(e) {
  let {
    language: t,
    setLanguage: n
  } = e, o = i.useRef(null);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: o,
    position: "left",
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(l.VqE, {
        "aria-label": p.intl.string(p.t.utm4qq),
        children: (0, r.jsx)(l.hQY, {
          className: h.languageSelector,
          multiSelect: false,
          placeholder: p.intl.string(p.t.Gofftb),
          value: new Set([t]),
          autoFocus: true,
          onChange: e => {
            n(e), i()
          },
          children: e => Array.from(d.u).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, r.jsx)(l.lo1, {
            value: e,
            children: (0, r.jsx)(l.lo1.Label, {
              children: e
            })
          }, e))
        })
      })
    },
    children: e => (0, r.jsx)(l.ua7, {
      text: p.intl.string(p.t.utm4qq),
      children: t => (0, r.jsx)(l.nF$, y(E({
        size: "md",
        color: "currentColor"
      }, t, e), {
        className: h.codeIcon,
        ref: o
      }))
    })
  })
}

function N(e) {
  return (0, r.jsx)(l.ua7, {
    text: p.intl.string(p.t["0PQYk5"]),
    children: t => (0, r.jsx)(l.P3F, y(E({}, t), {
      className: h.openFullPreviewSection,
      onClick: () => {
        (0, l.h7j)(t => (0, r.jsx)(R, E({}, e, t)))
      },
      children: (0, r.jsx)(l.bJT, {
        size: "xs",
        color: "currentColor"
      })
    }))
  })
}

function C(e) {
  var t;
  let {
    url: n,
    fileName: i,
    fileSize: o,
    fileContents: s,
    expanded: c,
    setExpanded: d,
    language: f,
    setLanguage: m,
    bytesLeft: g,
    className: E
  } = e, b = null == s ? true : s.split("\n"), y = null != (t = null == b ? true : b.length) ? t : 0, O = c ? 100 : 6, v = 0 === g, C = "";
  v && c && y > O ? C = "\n..." : v || (C = "..."), "" !== C && (v ? C += " " + p.intl.formatToPlainString(p.t.DQnFp6, {
    lines: y - O
  }) : C += " " + p.intl.formatToPlainString(p.t["1+gGcH"], {
    formattedBytes: (0, _.IC)(g)
  }));
  let R = (null == b ? true : b.slice(0, O).join("\n")) + C,
    P = (0, u.yx)(R),
    w = c || O < y;
  return (0, r.jsxs)("div", {
    className: a()(E, h.container),
    children: [(0, r.jsx)("div", {
      className: a()(h.textContainer, {
        [h.expanded]: c
      }),
      children: null == s ? (0, r.jsx)(l.$jN, {
        className: h.spinner
      }) : (0, r.jsx)(I, {
        text: P,
        language: f
      })
    }), (0, r.jsxs)(l.Text, {
      color: "header-secondary",
      className: h.footer,
      variant: "text-sm/normal",
      children: [w ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(T, {
          expanded: c,
          setExpanded: d,
          isWholeFile: v,
          numLines: y
        }), (0, r.jsx)(N, {
          url: n,
          fileName: i,
          fileSize: o,
          language: f,
          fileContents: s,
          bytesLeft: g
        })]
      }) : null, (0, r.jsx)("div", {
        className: h.footerGap
      }), (0, r.jsx)(S, {
        url: n,
        fileName: i,
        fileSize: o
      }), (0, r.jsx)(A, {
        language: f,
        setLanguage: m
      })]
    })]
  })
}

function R(e) {
  let {
    url: t,
    fileName: n,
    fileSize: o,
    transitionState: a,
    language: s,
    fileContents: c,
    bytesLeft: u
  } = e, [d, f] = i.useState(s), m = null != c ? c : "";
  return 0 !== u && (m += "... ".concat(p.intl.formatToPlainString(p.t["1+gGcH"], {
    formattedBytes: (0, _.IC)(u)
  }))), (0, r.jsx)(l.Y0X, {
    transitionState: a,
    "aria-label": p.intl.string(p.t.qxQjc3),
    size: l.CgR.LARGE,
    className: h.modalRoot,
    parentComponent: "PlaintextFilePreview",
    children: (0, r.jsxs)("div", {
      className: h.modalContent,
      children: [(0, r.jsx)(l.zJl, {
        className: h.modalTextContainer,
        children: null == c ? (0, r.jsx)(l.$jN, {
          className: h.spinner
        }) : (0, r.jsx)(I, {
          text: m,
          language: d
        })
      }), (0, r.jsxs)(l.Text, {
        color: "header-secondary",
        className: h.footer,
        variant: "text-sm/normal",
        children: [(0, r.jsx)("div", {
          className: h.footerGap
        }), (0, r.jsx)(S, {
          url: t,
          fileName: n,
          fileSize: o
        }), (0, r.jsx)(A, {
          language: d,
          setLanguage: f
        })]
      })]
    })
  })
}
let P = Chunk73800.memo(function(e) {
  let {
    url: t,
    fileName: n,
    fileSize: o,
    contentType: s,
    className: l,
    onClick: u,
    onContextMenu: d
  } = e, [f, _] = i.useState(false), [p, m] = i.useState(n.split(".").slice(false)[0]), {
    fileContents: g,
    bytesLeft: E,
    hadError: b
  } = v(t, s);
  return b ? (0, r.jsx)(c.Z, {
    url: t,
    fileName: n,
    fileSize: o,
    onClick: u,
    onContextMenu: d,
    className: l
  }) : (0, r.jsx)(C, {
    url: t,
    fileName: n,
    fileSize: o,
    fileContents: g,
    bytesLeft: E,
    expanded: f,
    setExpanded: _,
    language: p,
    setLanguage: m,
    className: a()(h.newMosaicStyle, l)
  })
}, (e, t) => e.url === t.url && e.className === t.className)