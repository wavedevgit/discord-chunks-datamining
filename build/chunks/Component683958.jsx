/** Chunk was on 53682 **/
/** chunk id: 683958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ApplicationCommandShareModal: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
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
  Chunk963354 = require("./963354.js"),
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
      onShareResult: P,
      previewMessage: E
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
      commands: M,
      loading: T
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
    D = r.useRef(0),
    [A, k] = r.useState(O && null != Z ? [Z] : []),
    I = A.length,
    F = I >= 5,
    [R, q] = r.useState(""),
    {
      results: U,
      updateSearchText: z
    } = (0, c.s)({
      selectedDestinations: A,
      originDestination: null != Z ? Z : true,
      includeMissingDMs: true
    }),
    H = r.useCallback(e => {
      q(e), z(e)
    }, [z]),
    G = r.useCallback(() => (P(false), _()), [P, _]),
    [W] = (0, o.Z)([n]),
    V = r.useCallback(() => {
      q("")
    }, [q]),
    X = r.useRef(null);
  r.useEffect(() => {
    if ("" === R) {
      var e;
      null == (e = X.current) || e.focus()
    }
  }, [R]);
  let Y = r.useCallback(e => {
      k(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return F ? t : (q(""), z(""), D.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), D.current += 1, l
      })
    }, [F, z]),
    [Q, B] = r.useMemo(() => {
      if (T) return [null, false];
      let e = M.find(e => e.untranslatedName === y.name);
      return true !== e ? [e, false] : [null, true]
    }, [y, M, T]),
    J = r.useCallback(async function(e) {
      let {
        closeAfterSend: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (null === Q) return;
      N(true);
      let n = (await Promise.all(e.map(u.qx))).filter(p.lm);
      t && (P(true), C()), n.forEach(async e => {
        var t, n;
        let l = d.Z.getChannel(e);
        if (null == l) return;
        let r = null != (n = null == (t = y.options) ? true : t.reduce((e, t) => (e[t.name] = [{
            type: "text",
            text: t.value
          }], e), {})) ? n : {},
          i = f.Z.getGuild(null == l ? true : l.guild_id);
        null != await (0, m.Z)({
          command: Q,
          optionValues: r,
          context: {
            channel: l,
            guild: i
          }
        }) && (0, a.showToast)((0, a.createToast)(v.intl.string(v.t["5WjJcl"]), a.ToastType.MESSAGE))
      }), P(true), C()
    }, [P, Q, y.options]),
    K = r.useCallback(() => {
      J(A, {
        closeAfterSend: true
      })
    }, [J, A]);
  if (T) return (0, l.jsx)(i.Modal, {
    title: v.intl.string(v.t.fuFvwx),
    "aria-label": v.intl.string(v.t.fuFvwx),
    transitionState: w.transitionState,
    onClose: _,
    actions: [],
    children: (0, l.jsx)(a.$jN, {
      className: x.spinnerContainer
    })
  });
  if (B) return (0, l.jsx)(i.Modal, {
    title: v.intl.string(v.t.fuFvwx),
    "aria-label": v.intl.string(v.t.fuFvwx),
    transitionState: w.transitionState,
    onClose: _,
    actions: [{
      text: v.intl.string(v.t.cpT0Cq),
      onClick: _,
      variant: "primary"
    }],
    children: v.intl.string(v.t.yAk8ZT)
  });
  let $ = U.length > 0 ? (0, l.jsx)(g.F, {
      rowData: U,
      handleToggleDestination: Y,
      selectedDestinations: A,
      disableSelection: F,
      originDestination: Z
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("img", {
        className: x.noResultsImg,
        src: j,
        alt: ""
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: v.intl.string(v.t.V6nAfF)
      })]
    }),
    ee = v.intl.format(v.t.hajTkz, {
      appName: null == W ? true : W.name
    });
  null == W && (ee = v.intl.string(v.t.fuFvwx));
  let et = v.intl.format(v.t["DF+q2l"], {
    appName: null == W ? true : W.name
  });
  return F && (et = v.intl.format(v.t["/KhyPe"], {
    count: 5
  })), (0, l.jsx)(i.Modal, {
    title: ee.toString(),
    subtitle: et,
    "aria-label": ee.toString(),
    transitionState: w.transitionState,
    onClose: G,
    size: "md",
    actions: [{
      text: v.intl.string(v.t.cpT0Cq),
      onClick: G,
      variant: "secondary"
    }, {
      text: v.intl.string(v.t.TXNS7S),
      onClick: K,
      disabled: 0 === I || L,
      variant: "primary"
    }],
    preview: true !== E ? (0, l.jsx)(h.z, {
      previewMessage: E
    }) : null,
    input: (0, l.jsx)(a.E1j, {
      ref: X,
      query: R,
      onChange: H,
      onClear: V,
      placeholder: v.intl.string(v.t["5h0QOP"]),
      "aria-label": v.intl.string(v.t["5h0QOP"]),
      autoFocus: true
    }),
    children: $
  })
}