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
  j = n(543082),
  x = n(621054);

function O(e) {
  var t, n, {
      applicationId: h,
      onClose: O,
      transitionState: S,
      message: _,
      launchParams: N,
      onCopyLink: P,
      onShare: E
    } = e,
    Z = function(e, t) {
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
    }(e, ["applicationId", "onClose", "transitionState", "message", "launchParams", "onCopyLink", "onShare"]);
  let [L] = (0, u.Z)([h]), C = (0, s.e7)([p.default], () => p.default.getCurrentUser()), [w, k] = l.useState(!1), [T, D] = l.useState(""), [R, M] = l.useState("");
  l.useEffect(() => {
    let {
      referrerId: e,
      customId: t,
      linkId: n
    } = N;
    M((0, o.H)({
      applicationId: h,
      referrerId: null != e ? e : null == C ? void 0 : C.id,
      customId: t,
      linkId: n
    }))
  }, [h, C, N, M]);
  let I = l.useRef(0),
    [W, A] = l.useState([]),
    U = W.length,
    z = U >= 5;
  l.useEffect(() => {
    if ("" === T) {
      var e;
      null === (e = q.current) || void 0 === e || e.focus()
    }
  }, [T]);
  let H = l.useCallback(() => {
      D("")
    }, [D]),
    q = l.useRef(null),
    {
      results: F,
      updateSearchText: B
    } = (0, f.s)({
      selectedDestinations: W,
      includeMissingDMs: !0
    }),
    G = l.useCallback(e => {
      D(e), B(e)
    }, [D, B]),
    X = l.useCallback(e => {
      A(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: r
          } = t;
          return n === e.type && r === e.id
        });
        if (-1 === n) return z ? t : (D(""), I.current += 1, [e, ...t]);
        let r = [...t];
        return r.splice(n, 1), I.current += 1, r
      })
    }, [z]),
    V = l.useCallback(async e => {
      if (null == L) return;
      let t = g.NW.formatToMarkdownString(g.t.dZJpdH, {
          applicationName: L.name,
          link: R
        }),
        n = "".concat(_, "\n\n").concat(t);
      k(!0), (await Promise.all(e.map(d.qx))).filter(m.lm).forEach(async e => {
        let t = b.Z.getChannel(e);
        null != t && await i.Z.sendMessage(e, c.ZP.parse(t, n), !1)
      }), (0, a.showToast)((0, a.createToast)(g.NW.formatToPlainString(g.t.jQULqK, {
        applicationName: L.name
      }), a.ToastType.SUCCESS)), E(!0), O()
    }, [_, R, O, E, L]),
    J = F.length > 0 ? (0, r.jsx)(y.Q, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: F,
      handleToggleDestination: X,
      selectedDestinations: W,
      disableSelection: z
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
  }, Z), n = n = {
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
        ref: q,
        size: a.E1j.Sizes.MEDIUM,
        query: T,
        onChange: G,
        onClear: H,
        placeholder: g.NW.string(g.t["5h0QOD"]),
        "aria-label": g.NW.string(g.t["5h0QOD"]),
        autoFocus: !0
      })]
    }), J, (0, r.jsx)(a.mzw, {
      className: j.footer,
      children: (0, r.jsxs)("div", {
        className: j.copySendBar,
        children: [(0, r.jsx)(v, {
          link: R,
          onCopyLink: P
        }), (0, r.jsx)(a.zxk, {
          className: j.sendWithMessage,
          onClick: () => V(W),
          submitting: w,
          disabled: !(U > 0),
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
    onCopyLink: n
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
      (0, h.JG)(t), n(), i(!0)
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