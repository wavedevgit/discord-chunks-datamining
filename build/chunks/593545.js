/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => P
}), n(301563), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(608787),
  l = n(481060),
  c = n(40330),
  u = n(571989),
  d = n(828061),
  f = n(259580),
  p = n(424218),
  _ = n(388032),
  h = n(821550),
  m = n(28149);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  var t;
  let n = "utf-8",
    r = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
  try {
    return new TextDecoder(r)
  } catch (t) {
    if ((null == e ? void 0 : e.startsWith("text")) || r.toLowerCase().includes("utf")) return new TextDecoder(n);
    throw t
  }
}

function O(e, t) {
  let [n, r] = i.useState(!1), [o, a] = i.useState(null), [s, l] = i.useState(1);
  return i.useEffect(() => {
    let n = 5e4;
    (async function() {
      try {
        var i, o;
        let s = await fetch(e, {
            headers: {
              Range: "bytes=0-".concat(n),
              Accept: "text/plain"
            }
          }),
          c = y(t).decode(await s.arrayBuffer()),
          u = null !== (i = s.headers.get("content-range")) && void 0 !== i ? i : "0",
          d = null !== (o = s.headers.get("content-length")) && void 0 !== o ? o : "1",
          f = parseInt(u.split("/")[1]) - parseInt(d);
        a(0 === f ? c : c.slice(0, -1)), l(f), r(!1)
      } catch (e) {
        l(0), r(!0)
      }
    })()
  }, [e, t]), {
    fileContents: o,
    bytesLeft: s,
    hadError: n
  }
}

function S(e) {
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
      let n = e.highlight(i, t, !0);
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

function I(e) {
  let {
    expanded: t,
    setExpanded: n,
    isWholeFile: i,
    numLines: o
  } = e, a = _.NW.formatToPlainString(i ? _.t.Go5Vvr : _.t.yJcYam, {
    lines: o
  });
  return (0, r.jsx)(l.ua7, {
    text: "".concat(t ? _.NW.string(_.t.iTcumZ) : _.NW.string(_.t.dcl9MT), " (").concat(a, ")"),
    children: e => (0, r.jsxs)(l.P3F, b(E({}, e), {
      className: h.toggleExpandSection,
      onClick: () => {
        n(!t)
      },
      children: [(0, r.jsx)(f.Z, {
        direction: t ? f.Z.Directions.UP : f.Z.Directions.DOWN
      }), t ? _.NW.string(_.t.iTcumZ) : _.NW.string(_.t.dcl9MT)]
    }))
  })
}

function T(e) {
  let {
    url: t,
    fileName: n,
    fileSize: i
  } = e, o = "".concat(n, " (").concat((0, p.IC)(i), ")");
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.ua7, {
      text: o,
      children: e => (0, r.jsx)("span", b(E({}, e), {
        className: a()(h.downloadSection, h.attachmentName),
        children: n
      }))
    }), (0, r.jsx)(l.ua7, {
      text: o,
      children: e => (0, r.jsx)("span", b(E({}, e), {
        className: a()(h.downloadSection, h.formattedSize),
        children: (0, p.IC)(i)
      }))
    }), (0, r.jsx)(l.ua7, {
      text: "".concat(_.NW.string(_.t["1WjMbG"]), " ").concat(o),
      children: e => (0, r.jsx)(l.eee, b(E({}, e), {
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

function N(e) {
  let {
    language: t,
    setLanguage: n
  } = e;
  return (0, r.jsx)(l.yRy, {
    position: "left",
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(l.VqE, {
        "aria-label": _.NW.string(_.t.utm4qq),
        children: (0, r.jsx)(l.hQY, {
          className: h.languageSelector,
          multiSelect: !1,
          placeholder: _.NW.string(_.t.Gofftb),
          value: new Set([t]),
          autoFocus: !0,
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
      text: _.NW.string(_.t.utm4qq),
      children: t => (0, r.jsx)(l.nF$, b(E({
        size: "md",
        color: "currentColor"
      }, t, e), {
        className: h.codeIcon
      }))
    })
  })
}

function A(e) {
  return (0, r.jsx)(l.ua7, {
    text: _.NW.string(_.t["0PQYk5"]),
    children: t => (0, r.jsx)(l.P3F, b(E({}, t), {
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
  } = e, v = null == s ? void 0 : s.split("\n"), b = null !== (t = null == v ? void 0 : v.length) && void 0 !== t ? t : 0, y = c ? 100 : 6, O = 0 === g, C = "";
  O && c && b > y ? C = "\n..." : O || (C = "..."), "" !== C && (O ? C += " " + _.NW.formatToPlainString(_.t.DQnFp6, {
    lines: b - y
  }) : C += " " + _.NW.formatToPlainString(_.t["1+gGcH"], {
    formattedBytes: (0, p.IC)(g)
  }));
  let R = (null == v ? void 0 : v.slice(0, y).join("\n")) + C,
    P = (0, u.yx)(R),
    D = c || y < b;
  return (0, r.jsxs)("div", {
    className: a()(E, h.container),
    children: [(0, r.jsx)("div", {
      className: a()(h.textContainer, {
        [h.expanded]: c
      }),
      children: null == s ? (0, r.jsx)(l.$jN, {
        className: h.spinner
      }) : (0, r.jsx)(S, {
        text: P,
        language: f
      })
    }), (0, r.jsxs)(l.Text, {
      color: "header-secondary",
      className: h.footer,
      variant: "text-sm/normal",
      children: [D ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(I, {
          expanded: c,
          setExpanded: d,
          isWholeFile: O,
          numLines: b
        }), (0, r.jsx)(A, {
          url: n,
          fileName: i,
          fileSize: o,
          language: f,
          fileContents: s,
          bytesLeft: g
        })]
      }) : null, (0, r.jsx)("div", {
        className: h.footerGap
      }), (0, r.jsx)(T, {
        url: n,
        fileName: i,
        fileSize: o
      }), (0, r.jsx)(N, {
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
  return 0 !== u && (m += "... ".concat(_.NW.formatToPlainString(_.t["1+gGcH"], {
    formattedBytes: (0, p.IC)(u)
  }))), (0, r.jsx)(l.Y0X, {
    transitionState: a,
    "aria-label": _.NW.string(_.t.qxQjc3),
    size: l.CgR.LARGE,
    className: h.modalRoot,
    children: (0, r.jsxs)("div", {
      className: h.modalContent,
      children: [(0, r.jsx)(l.zJl, {
        className: h.modalTextContainer,
        children: null == c ? (0, r.jsx)(l.$jN, {
          className: h.spinner
        }) : (0, r.jsx)(S, {
          text: m,
          language: d
        })
      }), (0, r.jsxs)(l.Text, {
        color: "header-secondary",
        className: h.footer,
        variant: "text-sm/normal",
        children: [(0, r.jsx)("div", {
          className: h.footerGap
        }), (0, r.jsx)(T, {
          url: t,
          fileName: n,
          fileSize: o
        }), (0, r.jsx)(N, {
          language: d,
          setLanguage: f
        })]
      })]
    })
  })
}
let P = i.memo(function(e) {
  let {
    url: t,
    fileName: n,
    fileSize: o,
    contentType: s,
    className: l,
    onClick: u,
    onContextMenu: d
  } = e, [f, p] = i.useState(!1), [_, m] = i.useState(n.split(".").slice(-1)[0]), {
    fileContents: g,
    bytesLeft: E,
    hadError: v
  } = O(t, s);
  return v ? (0, r.jsx)(c.Z, {
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
    setExpanded: p,
    language: _,
    setLanguage: m,
    className: a()(h.newMosaicStyle, l)
  })
}, (e, t) => e.url === t.url && e.className === t.className)