/** Chunk was on 83098 **/
/** chunk id: 137021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk311819 = require("./311819.js"),
  Chunk835473 = require("./835473.js"),
  Chunk957730 = require("./957730.js"),
  Chunk987509 = require("./987509.js"),
  Chunk72214 = require("./72214.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk823379 = require("./823379.js"),
  Chunk479713 = require("./479713.js"),
  Chunk207003 = require("./207003.jsx"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk834505 = require("./834505.js"),
  Chunk621054 = require("./621054.js");

function Z(e) {
  let {
    applicationId: t,
    customId: n,
    linkId: Z,
    message: O,
    onClose: P,
    onCopyLink: _,
    onShare: C,
    transitionState: L
  } = e, [T] = (0, c.Z)([t]), N = (0, a.e7)([h.default], () => h.default.getCurrentUser()), [w, D] = l.useState(false), [R, M] = l.useState(""), [k, A] = l.useState("");
  l.useEffect(() => {
    A((0, o.H)({
      applicationId: t,
      referrerId: null == N ? true : N.id,
      customId: n,
      linkId: Z
    }))
  }, [t, N, n, Z, A]);
  let I = l.useRef(0),
    [U, H] = l.useState([]),
    q = U.length,
    F = q >= 5;
  l.useEffect(() => {
    if ("" === R) {
      var e;
      null == (e = G.current) || e.focus()
    }
  }, [R]);
  let z = l.useCallback(() => {
      M("")
    }, [M]),
    G = l.useRef(null),
    {
      results: V,
      updateSearchText: W
    } = (0, b.s)({
      selectedDestinations: U,
      includeMissingDMs: true
    }),
    Q = l.useCallback(e => {
      M(e), W(e)
    }, [M, W]),
    X = l.useCallback(e => {
      H(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: r
          } = t;
          return n === e.type && r === e.id
        });
        if (false === n) return F ? t : (M(""), I.current += 1, [e, ...t]);
        let r = [...t];
        return r.splice(n, 1), I.current += 1, r
      })
    }, [F]),
    J = l.useCallback(async e => {
      if (null == T) return;
      let t = (0, y.P)(O, T, k);
      D(true), (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async e => {
        let n = p.Z.getChannel(e);
        null != n && await u.Z.sendMessage(e, d.ZP.parse(n, t), false, {
          location: v.dy.ACTIVITY_SHARE
        })
      }), (0, s.showToast)((0, s.createToast)(S.intl.formatToPlainString(S.t.jQULqK, {
        applicationName: T.name
      }), s.ToastType.SUCCESS)), C(true), P()
    }, [O, k, P, C, T]),
    B = l.useCallback(() => {
      (0, m.JG)(k, () => {
        _(), (0, s.showToast)((0, s.createToast)(S.intl.string(S.t["t5VZ8/"]), s.ToastType.SUCCESS))
      })
    }, [k, _]),
    K = V.length > 0 ? (0, r.jsx)(x.Q, {
      paddingBottom: 8,
      paddingTop: 8,
      rowData: V,
      handleToggleDestination: X,
      selectedDestinations: U,
      disableSelection: F
    }) : (0, r.jsxs)("div", {
      className: E.noResults,
      children: [(0, r.jsx)("img", {
        className: E.noResultsImg,
        src: j,
        alt: ""
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: S.intl.string(S.t.V6nAfH)
      })]
    });
  return (0, r.jsx)(i.Modal, {
    transitionState: L,
    onClose: P,
    title: S.intl.string(S.t.r9qKo6),
    subtitle: O,
    size: "md",
    input: (0, r.jsx)(s.E1j, {
      ref: G,
      query: R,
      onChange: Q,
      onClear: z,
      placeholder: S.intl.string(S.t["5h0QOD"]),
      "aria-label": S.intl.string(S.t["5h0QOD"]),
      autoFocus: true
    }),
    actions: [{
      text: S.intl.string(S.t.WqhZsr),
      variant: "secondary",
      onClick: B
    }, {
      text: S.intl.string(S.t.TXNS7e),
      variant: "primary",
      onClick: () => J(U),
      loading: w,
      disabled: !(q > 0)
    }],
    children: K
  })
}