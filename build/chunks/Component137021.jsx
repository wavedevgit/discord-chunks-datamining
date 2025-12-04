/** Chunk was on 83098 **/
/** chunk id: 137021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
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

function O(e) {
  let {
    applicationId: t,
    customId: n,
    linkId: O,
    message: _,
    onClose: Z,
    onCopyLink: E,
    onShare: L,
    transitionState: T
  } = e, [C] = (0, c.Z)([t]), w = (0, a.e7)([m.default], () => m.default.getCurrentUser()), [k, N] = r.useState(false), [R, M] = r.useState(""), [D, A] = r.useState("");
  r.useEffect(() => {
    A((0, o.H)({
      applicationId: t,
      referrerId: null == w ? true : w.id,
      customId: n,
      linkId: O
    }))
  }, [t, w, n, O, A]);
  let I = r.useRef(0),
    [F, U] = r.useState([]),
    q = F.length,
    G = q >= 5;
  r.useEffect(() => {
    if ("" === R) {
      var e;
      null == (e = z.current) || e.focus()
    }
  }, [R]);
  let H = r.useCallback(() => {
      M("")
    }, [M]),
    z = r.useRef(null),
    {
      results: W,
      updateSearchText: V
    } = (0, f.s)({
      selectedDestinations: F,
      includeMissingDMs: true
    }),
    Q = r.useCallback(e => {
      M(e), V(e)
    }, [M, V]),
    J = r.useCallback(e => {
      U(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return G ? t : (M(""), I.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), I.current += 1, l
      })
    }, [G]),
    X = r.useCallback(async e => {
      if (null == C) return;
      let t = (0, x.P)(_, C, D);
      N(true), (await Promise.all(e.map(b.qx))).filter(g.lm).forEach(async e => {
        let n = h.Z.getChannel(e);
        null != n && await u.Z.sendMessage(e, d.ZP.parse(n, t), false, {
          location: j.dy.ACTIVITY_SHARE
        })
      }), (0, i.showToast)((0, i.createToast)(v.intl.formatToPlainString(v.t.jQULqL, {
        applicationName: C.name
      }), i.ToastType.SUCCESS)), L(true), Z()
    }, [_, D, Z, L, C]),
    B = r.useCallback(() => {
      (0, p.JG)(D, () => {
        E(), (0, i.showToast)((0, i.createToast)(v.intl.string(v.t.t5VZ88), i.ToastType.SUCCESS))
      })
    }, [D, E]),
    Y = W.length > 0 ? (0, l.jsx)(y.Q, {
      paddingBottom: 8,
      paddingTop: 8,
      rowData: W,
      handleToggleDestination: J,
      selectedDestinations: F,
      disableSelection: G
    }) : (0, l.jsxs)("div", {
      className: S.noResults,
      children: [(0, l.jsx)("img", {
        className: S.noResultsImg,
        src: P,
        alt: ""
      }), (0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: v.intl.string(v.t.V6nAfF)
      })]
    });
  return (0, l.jsx)(s.Modal, {
    transitionState: T,
    onClose: Z,
    title: v.intl.string(v.t.r9qKow),
    subtitle: _,
    size: "md",
    input: (0, l.jsx)(i.E1j, {
      ref: z,
      query: R,
      onChange: Q,
      onClear: H,
      placeholder: v.intl.string(v.t["5h0QOP"]),
      "aria-label": v.intl.string(v.t["5h0QOP"]),
      autoFocus: true
    }),
    actions: [{
      text: v.intl.string(v.t.WqhZss),
      variant: "secondary",
      onClick: B
    }, {
      text: v.intl.string(v.t.TXNS7S),
      variant: "primary",
      onClick: () => X(F),
      loading: k,
      disabled: !(q > 0)
    }],
    children: Y
  })
}