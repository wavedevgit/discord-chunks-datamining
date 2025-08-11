/** Chunk was on 83098 **/
/** chunk id: 137021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk207003 = require("./207003.js"),
  Chunk388032 = require("./388032.js"),
  Chunk277580 = require("./277580.js"),
  Chunk621054 = require("./621054.js");

function E(e) {
  let {
    applicationId: t,
    customId: n,
    linkId: E,
    message: j,
    onClose: Z,
    onCopyLink: O,
    onShare: _,
    transitionState: P
  } = e, [C] = (0, c.Z)([t]), L = (0, a.e7)([h.default], () => h.default.getCurrentUser()), [T, N] = l.useState(false), [w, D] = l.useState(""), [R, M] = l.useState("");
  l.useEffect(() => {
    M((0, o.H)({
      applicationId: t,
      referrerId: null == L ? true : L.id,
      customId: n,
      linkId: E
    }))
  }, [t, L, n, E, M]);
  let k = l.useRef(0),
    [A, I] = l.useState([]),
    U = A.length,
    H = U >= 5;
  l.useEffect(() => {
    if ("" === w) {
      var e;
      null == (e = q.current) || e.focus()
    }
  }, [w]);
  let F = l.useCallback(() => {
      D("")
    }, [D]),
    q = l.useRef(null),
    {
      results: z,
      updateSearchText: G
    } = (0, b.s)({
      selectedDestinations: A,
      includeMissingDMs: true
    }),
    W = l.useCallback(e => {
      D(e), G(e)
    }, [D, G]),
    V = l.useCallback(e => {
      I(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: r
          } = t;
          return n === e.type && r === e.id
        });
        if (false === n) return H ? t : (D(""), k.current += 1, [e, ...t]);
        let r = [...t];
        return r.splice(n, 1), k.current += 1, r
      })
    }, [H]),
    X = l.useCallback(async e => {
      if (null == C) return;
      let t = x.intl.formatToMarkdownString(x.t.dZJpdH, {
          applicationName: C.name,
          link: R
        }),
        n = "".concat(j, "\n\n").concat(t);
      N(true), (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async e => {
        let t = p.Z.getChannel(e);
        null != t && await u.Z.sendMessage(e, d.ZP.parse(t, n), false)
      }), (0, i.showToast)((0, i.createToast)(x.intl.formatToPlainString(x.t.jQULqK, {
        applicationName: C.name
      }), i.ToastType.SUCCESS)), _(true), Z()
    }, [j, R, Z, _, C]),
    J = l.useCallback(() => {
      (0, m.JG)(R, () => {
        O(), (0, i.showToast)((0, i.createToast)(x.intl.string(x.t["t5VZ8/"]), i.ToastType.SUCCESS))
      })
    }, [R, O]),
    Q = z.length > 0 ? <y.Q paddingBottom={8} paddingTop={8} rowData={z} handleToggleDestination={V} selectedDestinations={A} disableSelection={H} /> : <div className={v.noResults}>{<img className={v.noResultsImg} src={S} alt={""} />}{<i.Text variant={"text-md/normal"} color={"text-muted"}>{x.intl.string(x.t.V6nAfH)}</i.Text>}</div>;
  return <s.Modal transitionState={P} onClose={Z} title={x.intl.string(x.t.r9qKo6)} subtitle={j} size={"md"} input={(0, r.jsx)(i.E1j, {
      ref: q,
      query: w,
      onChange: W,
      onClear: F,
      placeholder: x.intl.string(x.t["5h0QOD"]),
      "aria-label": x.intl.string(x.t["5h0QOD"]),
      autoFocus: true
    })} actions={[{
      text: x.intl.string(x.t.WqhZsr),
      variant: "secondary",
      onClick: J
    }, {
      text: x.intl.string(x.t.TXNS7e),
      variant: "primary",
      onClick: () => X(A),
      loading: T,
      disabled: !(U > 0)
    }]}>{Q}</s.Modal>
}