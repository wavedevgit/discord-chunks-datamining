/** Chunk was on 83098 **/
n.d(t, {
  default: () => O
}), n(47120);
var r = n(200651),
  l = n(192379),
  s = n(442837),
  a = n(481060),
  i = n(904245),
  o = n(311819),
  u = n(835473),
  c = n(957730),
  d = n(987509),
  f = n(72214),
  b = n(592125),
  p = n(594174),
  h = n(572004),
  m = n(823379),
  y = n(207003),
  g = n(388032),
  j = n(919702),
  x = n(621054);

function O(e) {
  var t, n, {
      applicationId: h,
      onClose: O,
      transitionState: S,
      message: _,
      launchParams: N,
      onShare: P
    } = e,
    E = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["applicationId", "onClose", "transitionState", "message", "launchParams", "onShare"]);
  let [Z] = (0, u.Z)([h]), L = (0, s.e7)([p.default], () => p.default.getCurrentUser()), [C, w] = l.useState(!1), [k, T] = l.useState(""), [D, R] = l.useState("");
  l.useEffect(() => {
    let {
      referrerId: e,
      customId: t,
      linkId: n
    } = N;
    R((0, o.H)({
      applicationId: h,
      referrerId: null != e ? e : null == L ? void 0 : L.id,
      customId: t,
      linkId: n
    }))
  }, [h, L, N, R]);
  let M = l.useRef(0),
    [I, W] = l.useState([]),
    A = I.length,
    U = A >= 5;
  l.useEffect(() => {
    if ("" === k) {
      var e;
      null === (e = H.current) || void 0 === e || e.focus()
    }
  }, [k]);
  let z = l.useCallback(() => {
      T("")
    }, [T]),
    H = l.useRef(null),
    {
      results: q,
      updateSearchText: F
    } = (0, f.s)({
      selectedDestinations: I,
      includeMissingDMs: !0
    }),
    B = l.useCallback(e => {
      T(e), F(e)
    }, [T, F]),
    G = l.useCallback(e => {
      W(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: r
          } = t;
          return n === e.type && r === e.id
        });
        if (-1 === n) return U ? t : (T(""), M.current += 1, [e, ...t]);
        let r = [...t];
        return r.splice(n, 1), M.current += 1, r
      })
    }, [U]),
    X = l.useCallback(async e => {
      if (null == Z) return;
      let t = g.NW.formatToMarkdownString(g.t.dZJpdH, {
          applicationName: Z.name,
          link: D
        }),
        n = "".concat(_, "\n\n").concat(t);
      w(!0), (await Promise.all(e.map(d.qx))).filter(m.lm).forEach(async e => {
        let t = b.Z.getChannel(e);
        null != t && await i.Z.sendMessage(e, c.ZP.parse(t, n), !1)
      }), (0, a.showToast)((0, a.createToast)(g.NW.formatToPlainString(g.t.jQULqK, {
        applicationName: Z.name
      }), a.ToastType.SUCCESS)), P(!0), O()
    }, [_, D, O, P, Z]),
    V = q.length > 0 ? (0, r.jsx)(y.Q, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: q,
      handleToggleDestination: G,
      selectedDestinations: I,
      disableSelection: U
    }) : (0, r.jsxs)(a.hzk, {
      className: j.noResults,
      children: [(0, r.jsx)("img", {
        className: j.noResultsImg,
        src: x,
        alt: ""
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: g.NW.string(g.t.V6nAfH)
      })]
    });
  return (0, r.jsxs)(a.Y0X, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({
    transitionState: S
  }, E), n = n = {
    className: j.modalRoot,
    children: [(0, r.jsxs)(a.xBx, {
      className: j.header,
      children: [(0, r.jsxs)("div", {
        className: j.titleLine,
        children: [(0, r.jsx)("div", {
          className: j.title,
          children: (0, r.jsx)(a.y5t, {
            component: (0, r.jsx)(a.X6q, {
              variant: "heading-lg/semibold",
              children: g.NW.string(g.t.r9qKo6)
            }),
            children: (0, r.jsx)(a.Text, {
              className: j.message,
              lineClamp: 1,
              variant: "text-sm/medium",
              color: "text-secondary",
              children: _
            })
          })
        }), (0, r.jsx)(a.olH, {
          className: j.closeButton,
          onClick: O
        })]
      }), (0, r.jsx)(a.E1j, {
        ref: H,
        size: a.E1j.Sizes.MEDIUM,
        query: k,
        onChange: B,
        onClear: z,
        placeholder: g.NW.string(g.t["5h0QOD"]),
        "aria-label": g.NW.string(g.t["5h0QOD"]),
        autoFocus: !0
      })]
    }), V, (0, r.jsx)(a.mzw, {
      className: j.footer,
      children: (0, r.jsxs)("div", {
        className: j.copySendBar,
        children: [(0, r.jsx)(v, {
          link: D,
          onShare: P
        }), (0, r.jsx)(a.zxk, {
          className: j.sendWithMessage,
          onClick: () => X(I),
          submitting: C,
          disabled: !(A > 0),
          children: g.NW.string(g.t.TXNS7e)
        })]
      })
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

function v(e) {
  let {
    link: t,
    onShare: n
  } = e, [s, i] = l.useState(!1);
  return l.useEffect(() => {
    let e;
    return s && (e = setTimeout(() => {
      i(!1)
    }, 1e3)), () => {
      null != e && clearTimeout(e)
    }
  }, [s]), (0, r.jsxs)(a.zxk, {
    look: a.zxk.Looks.LINK,
    color: a.zxk.Colors.LINK,
    onClick: function() {
      (0, h.JG)(t), n(!0), i(!0)
    },
    innerClassName: j.copyButton,
    children: [s ? (0, r.jsx)(a.owK, {
      size: "md",
      color: "currentColor"
    }) : (0, r.jsx)(a.TIy, {
      size: "xs",
      color: "currentColor"
    }), s ? g.NW.string(g.t["t5VZ8/"]) : g.NW.string(g.t.WqhZsr)]
  })
}