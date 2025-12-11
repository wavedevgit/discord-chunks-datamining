/** Chunk was on 53682 **/
/** chunk id: 683958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ApplicationCommandShareModal: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk497387 = require("./497387.js"),
  Chunk621054 = require("./621054.js");
let S = [Chunk911969.yU.CHAT],
  O = () => {
    (0, Chunk481060.Mr3)(Chunk333861.s)
  };

function P(e) {
  var t, {
      applicationId: n,
      channel: s,
      command: v,
      onClose: P,
      requireLaunchChannel: w,
      onShareResult: C,
      previewMessage: Z
    } = e,
    L = function(e, t) {
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
  let E = r.useMemo(() => null == s ? null : (0, u.dL)(s.id), [s]),
    [N, T] = r.useState(false),
    {
      commands: _,
      loading: k
    } = (t = r.useMemo(() => null == s ? {
      type: "contextless"
    } : {
      type: "channel",
      channel: s
    }, [s]), (0, m.v1)(t, {
      commandTypes: S
    }, {
      applicationId: n,
      allowFetch: true,
      allowApplicationState: true
    })),
    M = r.useRef(0),
    [F, A] = r.useState(w && null != E ? [E] : []),
    I = F.length,
    D = I >= 5,
    [q, R] = r.useState(""),
    {
      results: z,
      updateSearchText: U
    } = (0, c.s)({
      selectedDestinations: F,
      originDestination: null != E ? E : true,
      includeMissingDMs: true
    }),
    W = r.useCallback(e => {
      R(e), U(e)
    }, [U]),
    H = r.useCallback(() => (C(false), P()), [C, P]),
    [G] = (0, o.Z)([n]),
    V = r.useCallback(() => {
      R("")
    }, [R]),
    X = r.useRef(null);
  r.useEffect(() => {
    if ("" === q) {
      var e;
      null == (e = X.current) || e.focus()
    }
  }, [q]);
  let B = r.useCallback(e => {
      A(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return D ? t : (R(""), U(""), M.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), M.current += 1, l
      })
    }, [D, U]),
    [Q, Y] = r.useMemo(() => {
      if (k) return [null, false];
      let e = _.find(e => e.untranslatedName === v.name);
      return true !== e ? [e, false] : [null, true]
    }, [v, _, k]),
    J = r.useCallback(async function(e) {
      let {
        closeAfterSend: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (null === Q) return;
      T(true);
      let n = (await Promise.all(e.map(u.qx))).filter(f.lm);
      t && (C(true), O()), n.forEach(async e => {
        var t, n;
        let l = d.Z.getChannel(e);
        if (null == l) return;
        let r = null != (n = null == (t = v.options) ? true : t.reduce((e, t) => (e[t.name] = [{
            type: "text",
            text: t.value
          }], e), {})) ? n : {},
          i = b.Z.getGuild(null == l ? true : l.guild_id);
        null != await (0, p.Z)({
          command: Q,
          optionValues: r,
          context: {
            channel: l,
            guild: i
          }
        }) && (0, a.showToast)((0, a.createToast)(x.intl.string(x.t["5WjJcl"]), a.ToastType.MESSAGE))
      }), C(true), O()
    }, [C, Q, v.options]),
    K = r.useCallback(() => {
      J(F, {
        closeAfterSend: true
      })
    }, [J, F]);
  if (k) return (0, l.jsx)(i.Modal, {
    title: x.intl.string(x.t.fuFvwx),
    "aria-label": x.intl.string(x.t.fuFvwx),
    transitionState: L.transitionState,
    onClose: P,
    actions: [],
    children: (0, l.jsx)(a.$jN, {
      className: y.spinnerContainer
    })
  });
  if (Y) return (0, l.jsx)(i.Modal, {
    title: x.intl.string(x.t.fuFvwx),
    "aria-label": x.intl.string(x.t.fuFvwx),
    transitionState: L.transitionState,
    onClose: P,
    actions: [{
      text: x.intl.string(x.t.cpT0Cq),
      onClick: P,
      variant: "primary"
    }],
    children: x.intl.string(x.t.yAk8ZT)
  });
  let $ = z.length > 0 ? (0, l.jsx)(g.F, {
      rowData: z,
      handleToggleDestination: B,
      selectedDestinations: F,
      disableSelection: D,
      originDestination: E
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("img", {
        className: y.noResultsImg,
        src: j,
        alt: ""
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: x.intl.string(x.t.V6nAfF)
      })]
    }),
    ee = x.intl.format(x.t.hajTkz, {
      appName: null == G ? true : G.name
    });
  null == G && (ee = x.intl.string(x.t.fuFvwx));
  let et = x.intl.format(x.t["DF+q2l"], {
    appName: null == G ? true : G.name
  });
  return D && (et = x.intl.format(x.t["/KhyPe"], {
    count: 5
  })), (0, l.jsx)(i.Modal, {
    title: ee.toString(),
    subtitle: et,
    "aria-label": ee.toString(),
    transitionState: L.transitionState,
    onClose: H,
    size: "md",
    actions: [{
      text: x.intl.string(x.t.cpT0Cq),
      onClick: H,
      variant: "secondary"
    }, {
      text: x.intl.string(x.t.TXNS7S),
      onClick: K,
      disabled: 0 === I || N,
      variant: "primary"
    }],
    preview: true !== Z ? (0, l.jsx)(h.z, {
      previewMessage: Z
    }) : null,
    input: (0, l.jsx)(a.E1j, {
      ref: X,
      query: q,
      onChange: W,
      onClear: V,
      placeholder: x.intl.string(x.t["5h0QOP"]),
      "aria-label": x.intl.string(x.t["5h0QOP"]),
      autoFocus: true
    }),
    children: $
  })
}