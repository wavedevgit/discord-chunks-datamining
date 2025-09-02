/** Chunk was on 83098 **/
/** chunk id: 137021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
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
  Chunk207003 = require("./207003.jsx"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk834505 = require("./834505.js"),
  Chunk621054 = require("./621054.js");

function j(e) {
  let {
    applicationId: t,
    customId: n,
    linkId: j,
    message: Z,
    onClose: O,
    onCopyLink: _,
    onShare: P,
    transitionState: C
  } = e, [L] = (0, c.Z)([t]), T = (0, a.e7)([h.default], () => h.default.getCurrentUser()), [N, w] = l.useState(false), [D, R] = l.useState(""), [M, k] = l.useState("");
  l.useEffect(() => {
    k((0, o.H)({
      applicationId: t,
      referrerId: null == T ? true : T.id,
      customId: n,
      linkId: j
    }))
  }, [t, T, n, j, k]);
  let A = l.useRef(0),
    [I, U] = l.useState([]),
    H = I.length,
    q = H >= 5;
  l.useEffect(() => {
    if ("" === D) {
      var e;
      null == (e = z.current) || e.focus()
    }
  }, [D]);
  let F = l.useCallback(() => {
      R("")
    }, [R]),
    z = l.useRef(null),
    {
      results: G,
      updateSearchText: V
    } = (0, b.s)({
      selectedDestinations: I,
      includeMissingDMs: true
    }),
    W = l.useCallback(e => {
      R(e), V(e)
    }, [R, V]),
    Q = l.useCallback(e => {
      U(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: r
          } = t;
          return n === e.type && r === e.id
        });
        if (false === n) return q ? t : (R(""), A.current += 1, [e, ...t]);
        let r = [...t];
        return r.splice(n, 1), A.current += 1, r
      })
    }, [q]),
    X = l.useCallback(async e => {
      if (null == L) return;
      let t = v.intl.formatToMarkdownString(v.t.dZJpdH, {
          applicationName: L.name,
          link: M
        }),
        n = "".concat(Z, "\n\n").concat(t);
      w(true), (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async e => {
        let t = p.Z.getChannel(e);
        null != t && await u.Z.sendMessage(e, d.ZP.parse(t, n), false, {
          location: x.dy.ACTIVITY_SHARE
        })
      }), (0, s.showToast)((0, s.createToast)(v.intl.formatToPlainString(v.t.jQULqK, {
        applicationName: L.name
      }), s.ToastType.SUCCESS)), P(true), O()
    }, [Z, M, O, P, L]),
    J = l.useCallback(() => {
      (0, m.JG)(M, () => {
        _(), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t["t5VZ8/"]), s.ToastType.SUCCESS))
      })
    }, [M, _]),
    B = G.length > 0 ? (0, r.jsx)(y.Q, {
      paddingBottom: 8,
      paddingTop: 8,
      rowData: G,
      handleToggleDestination: Q,
      selectedDestinations: I,
      disableSelection: q
    }) : (0, r.jsxs)("div", {
      className: S.noResults,
      children: [(0, r.jsx)("img", {
        className: S.noResultsImg,
        src: E,
        alt: ""
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: v.intl.string(v.t.V6nAfH)
      })]
    });
  return (0, r.jsx)(i.Modal, {
    transitionState: C,
    onClose: O,
    title: v.intl.string(v.t.r9qKo6),
    subtitle: Z,
    size: "md",
    input: (0, r.jsx)(s.E1j, {
      ref: z,
      query: D,
      onChange: W,
      onClear: F,
      placeholder: v.intl.string(v.t["5h0QOD"]),
      "aria-label": v.intl.string(v.t["5h0QOD"]),
      autoFocus: true
    }),
    actions: [{
      text: v.intl.string(v.t.WqhZsr),
      variant: "secondary",
      onClick: J
    }, {
      text: v.intl.string(v.t.TXNS7e),
      variant: "primary",
      onClick: () => X(I),
      loading: N,
      disabled: !(H > 0)
    }],
    children: B
  })
}