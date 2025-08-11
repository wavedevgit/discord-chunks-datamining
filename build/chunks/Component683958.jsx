/** Chunk was on 53682 **/
/** chunk id: 683958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ApplicationCommandShareModal: () => _
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk835473 = require("./835473.js"),
  Chunk987509 = require("./987509.js"),
  Chunk72214 = require("./72214.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk823379 = require("./823379.js"),
  Chunk213459 = require("./213459.js"),
  Chunk667204 = require("./667204.js"),
  Chunk739980 = require("./739980.jsx"),
  Chunk617266 = require("./617266.jsx"),
  Chunk333861 = require("./333861.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk120575 = require("./120575.js"),
  Chunk621054 = require("./621054.js");
let S = [Chunk911969.yU.CHAT],
  C = () => {
    (0, Chunk481060.Mr3)(Chunk333861.s)
  };

function _(e) {
  var t, {
      applicationId: n,
      channel: s,
      command: y,
      onClose: _,
      requireLaunchChannel: O,
      onShareResult: E,
      previewMessage: P
    } = e,
    w = function(e, t) {
      if (null == e) return {};
      var n, l, r = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.keys(e);
        for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["applicationId", "channel", "command", "onClose", "requireLaunchChannel", "onShareResult", "previewMessage"]);
  let Z = r.useMemo(() => null == s ? null : (0, u.dL)(s.id), [s]),
    [L, N] = r.useState(false),
    {
      commands: T,
      loading: D
    } = (t = r.useMemo(() => null == s ? {
      type: "contextless"
    } : {
      type: "channel",
      channel: s
    }, [s]), (0, b.v1)(t, {
      commandTypes: S
    }, {
      applicationId: n,
      allowFetch: true,
      allowApplicationState: true
    })),
    M = r.useRef(0),
    [A, k] = r.useState(O && null != Z ? [Z] : []),
    I = A.length,
    R = I >= 5,
    [F, U] = r.useState(""),
    {
      results: q,
      updateSearchText: H
    } = (0, c.s)({
      selectedDestinations: A,
      originDestination: null != Z ? Z : true,
      includeMissingDMs: true
    }),
    z = r.useCallback(e => {
      U(e), H(e)
    }, [H]),
    G = r.useCallback(() => (E(false), _()), [E, _]),
    [W] = (0, o.Z)([n]),
    V = r.useCallback(() => {
      U("")
    }, [U]),
    X = r.useRef(null);
  r.useEffect(() => {
    if ("" === F) {
      var e;
      null == (e = X.current) || e.focus()
    }
  }, [F]);
  let J = r.useCallback(e => {
      k(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return R ? t : (U(""), H(""), M.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), M.current += 1, l
      })
    }, [R, H]),
    [Y, B] = r.useMemo(() => {
      if (D) return [null, false];
      let e = T.find(e => e.untranslatedName === y.name);
      return true !== e ? [e, false] : [null, true]
    }, [y, T, D]),
    Q = r.useCallback(async function(e) {
      let {
        closeAfterSend: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (null === Y) return;
      N(true);
      let n = (await Promise.all(e.map(u.qx))).filter(p.lm);
      t && (E(true), C()), n.forEach(async e => {
        var t, n;
        let l = d.Z.getChannel(e);
        if (null == l) return;
        let r = null != (n = null == (t = y.options) ? true : t.reduce((e, t) => (e[t.name] = [{
            type: "text",
            text: t.value
          }], e), {})) ? n : {},
          i = f.Z.getGuild(null == l ? true : l.guild_id);
        null != await (0, h.Z)({
          command: Y,
          optionValues: r,
          context: {
            channel: l,
            guild: i
          }
        }) && (0, a.showToast)((0, a.createToast)(v.intl.string(v.t["5WjJcn"]), a.ToastType.MESSAGE))
      }), E(true), C()
    }, [E, Y, y.options]),
    K = r.useCallback(() => {
      Q(A, {
        closeAfterSend: true
      })
    }, [Q, A]);
  if (D) return (0, l.jsx)(i.Modal, {
    title: v.intl.string(v.t.fuFvw8),
    "aria-label": v.intl.string(v.t.fuFvw8),
    transitionState: w.transitionState,
    onClose: _,
    actions: [],
    children: (0, l.jsx)(a.$jN, {
      className: x.spinnerContainer
    })
  });
  if (B) return (0, l.jsx)(i.Modal, {
    title: v.intl.string(v.t.fuFvw8),
    "aria-label": v.intl.string(v.t.fuFvw8),
    transitionState: w.transitionState,
    onClose: _,
    actions: [{
      text: v.intl.string(v.t.cpT0Cg),
      onClick: _,
      variant: "primary"
    }],
    children: v.intl.string(v.t.yAk8ZW)
  });
  let $ = q.length > 0 ? (0, l.jsx)(g.F, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: q,
      handleToggleDestination: J,
      selectedDestinations: A,
      disableSelection: R,
      originDestination: Z
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("img", {
        className: x.noResultsImg,
        src: j,
        alt: ""
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: v.intl.string(v.t.V6nAfH)
      })]
    }),
    ee = v.intl.format(v.t.hajTk5, {
      appName: null == W ? true : W.name
    });
  null == W && (ee = v.intl.string(v.t.fuFvw8));
  let et = v.intl.format(v.t["DF+q2t"], {
    appName: null == W ? true : W.name
  });
  return R && (et = v.intl.format(v.t["/KhyPT"], {
    count: 5
  })), (0, l.jsx)(i.Modal, {
    title: ee.toString(),
    subtitle: et,
    "aria-label": ee.toString(),
    transitionState: w.transitionState,
    onClose: G,
    size: "md",
    actions: [{
      text: v.intl.string(v.t.cpT0Cg),
      onClick: G,
      variant: "secondary"
    }, {
      text: v.intl.string(v.t.TXNS7e),
      onClick: K,
      disabled: 0 === I || L,
      variant: "primary"
    }],
    preview: true !== P ? (0, l.jsx)(m.z, {
      previewMessage: P
    }) : null,
    input: (0, l.jsx)(a.E1j, {
      className: x.search,
      ref: X,
      query: F,
      onChange: z,
      onClear: V,
      placeholder: v.intl.string(v.t["5h0QOD"]),
      "aria-label": v.intl.string(v.t["5h0QOD"]),
      autoFocus: true
    }),
    children: $
  })
}