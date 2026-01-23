/** Chunk was on 48587 **/
/** chunk id: 824774, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk342384 = require("./342384.js"),
  Chunk429913 = require("./429913.js"),
  Chunk451909 = require("./451909.js"),
  Chunk223863 = require("./223863.js"),
  Chunk151054 = require("./151054.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk957565 = require("./957565.js"),
  Chunk403362 = require("./403362.js"),
  Chunk550880 = require("./550880.js"),
  Chunk997877 = require("./997877.jsx"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk667052 = require("./667052.js"),
  Chunk119390 = require("./119390.js");

function S(e) {
  let {
    applicationId: t,
    customId: n,
    linkId: S,
    message: _,
    onClose: P,
    onCopyLink: T,
    onShare: w,
    transitionState: E
  } = e, [C] = (0, c.A)([t]), L = (0, a.bG)([m.default], () => m.default.getCurrentUser()), [N, k] = l.useState(false), [D, R] = l.useState(""), [I, M] = l.useState("");
  l.useEffect(() => {
    M((0, o.W)({
      applicationId: t,
      referrerId: null == L ? true : L.id,
      customId: n,
      linkId: S
    }))
  }, [t, L, n, S, M]);
  let G = l.useRef(0),
    [U, H] = l.useState([]),
    V = U.length,
    q = V >= 5;
  l.useEffect(() => {
    if ("" === D) {
      var e;
      null == (e = B.current) || e.focus()
    }
  }, [D]);
  let z = l.useCallback(() => {
      R("")
    }, [R]),
    B = l.useRef(null),
    {
      results: F,
      updateSearchText: J
    } = (0, b.R)({
      selectedDestinations: U,
      includeMissingDMs: true
    }),
    Q = l.useCallback(e => {
      R(e), J(e)
    }, [R, J]),
    W = l.useCallback(e => {
      H(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: r
          } = t;
          return n === e.type && r === e.id
        });
        if (false === n) return q ? t : (R(""), G.current += 1, [e, ...t]);
        let r = [...t];
        return r.splice(n, 1), G.current += 1, r
      })
    }, [q]),
    Z = l.useCallback(async e => {
      if (null == C) return;
      let t = (0, y.r)(_, C, I);
      k(true), (await Promise.all(e.map(f.pk))).filter(h.Vq).forEach(async e => {
        let n = p.A.getChannel(e);
        null != n && await u.A.sendMessage(e, d.Ay.parse(n, t), false, {
          location: j.Hx.ACTIVITY_SHARE
        })
      }), (0, i.showToast)((0, i.createToast)(A.intl.formatToPlainString(A.t.jQULqL, {
        applicationName: C.name
      }), i.ToastType.SUCCESS)), w(true), P()
    }, [_, I, P, w, C]),
    K = l.useCallback(() => {
      (0, g.C)(I, () => {
        T(), (0, i.showToast)((0, i.createToast)(A.intl.string(A.t.t5VZ88), i.ToastType.SUCCESS))
      })
    }, [I, T]),
    X = F.length > 0 ? (0, r.jsx)(x.x, {
      paddingBottom: 8,
      paddingTop: 8,
      rowData: F,
      handleToggleDestination: W,
      selectedDestinations: U,
      disableSelection: q
    }) : (0, r.jsxs)("div", {
      className: v.wV,
      children: [(0, r.jsx)("img", {
        className: v.BJ,
        src: O,
        alt: ""
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: A.intl.string(A.t.V6nAfF)
      })]
    });
  return (0, r.jsx)(s.Modal, {
    transitionState: E,
    onClose: P,
    title: A.intl.string(A.t.r9qKow),
    subtitle: _,
    size: "md",
    input: (0, r.jsx)(i.IWV, {
      ref: B,
      query: D,
      onChange: Q,
      onClear: z,
      placeholder: A.intl.string(A.t["5h0QOP"]),
      "aria-label": A.intl.string(A.t["5h0QOP"]),
      autoFocus: true
    }),
    actions: [{
      text: A.intl.string(A.t.WqhZss),
      variant: "secondary",
      onClick: K
    }, {
      text: A.intl.string(A.t.TXNS7S),
      variant: "primary",
      onClick: () => Z(U),
      loading: N,
      disabled: !(V > 0)
    }],
    children: X
  })
}