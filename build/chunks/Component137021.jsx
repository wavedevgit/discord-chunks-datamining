/** Chunk was on 83098 **/
/** chunk id: 137021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
    message: P,
    onClose: _,
    onCopyLink: O,
    onShare: C,
    transitionState: L
  } = e, [T] = (0, c.Z)([t]), N = (0, i.e7)([p.default], () => p.default.getCurrentUser()), [w, R] = l.useState(false), [k, D] = l.useState(""), [M, A] = l.useState("");
  l.useEffect(() => {
    A((0, o.H)({
      applicationId: t,
      referrerId: null == N ? true : N.id,
      customId: n,
      linkId: Z
    }))
  }, [t, N, n, Z, A]);
  let I = l.useRef(0),
    [U, F] = l.useState([]),
    H = U.length,
    q = H >= 5;
  l.useEffect(() => {
    if ("" === k) {
      var e;
      null == (e = z.current) || e.focus()
    }
  }, [k]);
  let G = l.useCallback(() => {
      D("")
    }, [D]),
    z = l.useRef(null),
    {
      results: V,
      updateSearchText: W
    } = (0, b.s)({
      selectedDestinations: U,
      includeMissingDMs: true
    }),
    Q = l.useCallback(e => {
      D(e), W(e)
    }, [D, W]),
    X = l.useCallback(e => {
      F(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: r
          } = t;
          return n === e.type && r === e.id
        });
        if (false === n) return q ? t : (D(""), I.current += 1, [e, ...t]);
        let r = [...t];
        return r.splice(n, 1), I.current += 1, r
      })
    }, [q]),
    J = l.useCallback(async e => {
      if (null == T) return;
      let t = (0, y.P)(P, T, M);
      R(true), (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async e => {
        let n = h.Z.getChannel(e);
        null != n && await u.Z.sendMessage(e, d.ZP.parse(n, t), false, {
          location: v.dy.ACTIVITY_SHARE
        })
      }), (0, s.showToast)((0, s.createToast)(S.intl.formatToPlainString(S.t.jQULqL, {
        applicationName: T.name
      }), s.ToastType.SUCCESS)), C(true), _()
    }, [P, M, _, C, T]),
    Y = l.useCallback(() => {
      (0, m.JG)(M, () => {
        O(), (0, s.showToast)((0, s.createToast)(S.intl.string(S.t.t5VZ88), s.ToastType.SUCCESS))
      })
    }, [M, O]),
    B = V.length > 0 ? (0, r.jsx)(x.Q, {
      paddingBottom: 8,
      paddingTop: 8,
      rowData: V,
      handleToggleDestination: X,
      selectedDestinations: U,
      disableSelection: q
    }) : (0, r.jsxs)("div", {
      className: E.noResults,
      children: [(0, r.jsx)("img", {
        className: E.noResultsImg,
        src: j,
        alt: ""
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: S.intl.string(S.t.V6nAfF)
      })]
    });
  return (0, r.jsx)(a.Modal, {
    transitionState: L,
    onClose: _,
    title: S.intl.string(S.t.r9qKow),
    subtitle: P,
    size: "md",
    input: (0, r.jsx)(s.E1j, {
      ref: z,
      query: k,
      onChange: Q,
      onClear: G,
      placeholder: S.intl.string(S.t["5h0QOP"]),
      "aria-label": S.intl.string(S.t["5h0QOP"]),
      autoFocus: true
    }),
    actions: [{
      text: S.intl.string(S.t.WqhZss),
      variant: "secondary",
      onClick: Y
    }, {
      text: S.intl.string(S.t.TXNS7S),
      variant: "primary",
      onClick: () => J(U),
      loading: w,
      disabled: !(H > 0)
    }],
    children: B
  })
}