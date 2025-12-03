/** Chunk was on 83098 **/
/** chunk id: 137021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, [T] = (0, c.Z)([t]), N = (0, s.e7)([p.default], () => p.default.getCurrentUser()), [w, R] = r.useState(false), [k, M] = r.useState(""), [D, A] = r.useState("");
  r.useEffect(() => {
    A((0, o.H)({
      applicationId: t,
      referrerId: null == N ? true : N.id,
      customId: n,
      linkId: Z
    }))
  }, [t, N, n, Z, A]);
  let U = r.useRef(0),
    [I, F] = r.useState([]),
    H = I.length,
    q = H >= 5;
  r.useEffect(() => {
    if ("" === k) {
      var e;
      null == (e = z.current) || e.focus()
    }
  }, [k]);
  let G = r.useCallback(() => {
      M("")
    }, [M]),
    z = r.useRef(null),
    {
      results: V,
      updateSearchText: W
    } = (0, b.s)({
      selectedDestinations: I,
      includeMissingDMs: true
    }),
    Q = r.useCallback(e => {
      M(e), W(e)
    }, [M, W]),
    X = r.useCallback(e => {
      F(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return q ? t : (M(""), U.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), U.current += 1, l
      })
    }, [q]),
    J = r.useCallback(async e => {
      if (null == T) return;
      let t = (0, y.P)(P, T, D);
      R(true), (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async e => {
        let n = h.Z.getChannel(e);
        null != n && await u.Z.sendMessage(e, d.ZP.parse(n, t), false, {
          location: v.dy.ACTIVITY_SHARE
        })
      }), (0, i.showToast)((0, i.createToast)(S.intl.formatToPlainString(S.t.jQULqL, {
        applicationName: T.name
      }), i.ToastType.SUCCESS)), C(true), _()
    }, [P, D, _, C, T]),
    B = r.useCallback(() => {
      (0, m.JG)(D, () => {
        O(), (0, i.showToast)((0, i.createToast)(S.intl.string(S.t.t5VZ88), i.ToastType.SUCCESS))
      })
    }, [D, O]),
    Y = V.length > 0 ? (0, l.jsx)(x.Q, {
      paddingBottom: 8,
      paddingTop: 8,
      rowData: V,
      handleToggleDestination: X,
      selectedDestinations: I,
      disableSelection: q
    }) : (0, l.jsxs)("div", {
      className: E.noResults,
      children: [(0, l.jsx)("img", {
        className: E.noResultsImg,
        src: j,
        alt: ""
      }), (0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: S.intl.string(S.t.V6nAfF)
      })]
    });
  return (0, l.jsx)(a.Modal, {
    transitionState: L,
    onClose: _,
    title: S.intl.string(S.t.r9qKow),
    subtitle: P,
    size: "md",
    input: (0, l.jsx)(i.E1j, {
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
      onClick: B
    }, {
      text: S.intl.string(S.t.TXNS7S),
      variant: "primary",
      onClick: () => J(I),
      loading: w,
      disabled: !(H > 0)
    }],
    children: Y
  })
}