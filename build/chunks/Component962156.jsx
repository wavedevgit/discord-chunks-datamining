/** Chunk was on 33885 **/
/** chunk id: 962156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ApplicationCommandShareModal: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk429913 = require("./429913.js"),
  Chunk223863 = require("./223863.js"),
  Chunk151054 = require("./151054.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk403362 = require("./403362.js"),
  Chunk264322 = require("./264322.js"),
  Chunk545152 = require("./545152.js"),
  Chunk382731 = require("./382731.jsx"),
  Chunk392449 = require("./392449.jsx"),
  Chunk293588 = require("./293588.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk116106 = require("./116106.js"),
  Chunk119390 = require("./119390.js");
let A = [Chunk155718.kc.CHAT],
  O = () => {
    (0, a.OoC)(y.C)
  };

function S(e) {
  var t;
  let {
    applicationId: n,
    channel: s,
    command: y,
    onClose: S,
    requireLaunchChannel: w,
    onShareResult: P,
    previewMessage: C
  } = e, N = function(e, t) {
    if (null == e) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }(e, ["applicationId", "channel", "command", "onClose", "requireLaunchChannel", "onShareResult", "previewMessage"]), T = r.useMemo(() => null == s ? null : (0, u._5)(s.id), [s]), [E, D] = r.useState(false), {
    commands: _,
    loading: L
  } = (t = r.useMemo(() => null == s ? {
    type: "contextless"
  } : {
    type: "channel",
    channel: s
  }, [s]), (0, p.ZA)(t, {
    commandTypes: A
  }, {
    applicationId: n,
    allowFetch: true,
    allowApplicationState: true
  })), k = r.useRef(0), [M, I] = r.useState(w && null != T ? [T] : []), R = M.length, F = R >= 5, [z, G] = r.useState(""), {
    results: q,
    updateSearchText: H
  } = (0, c.R)({
    selectedDestinations: M,
    originDestination: null != T ? T : true,
    includeMissingDMs: true
  }), U = r.useCallback(e => {
    G(e), H(e)
  }, [H]), B = r.useCallback(() => (P(false), S()), [P, S]), [J] = (0, o.A)([n]), Q = r.useCallback(() => {
    G("")
  }, [G]), V = r.useRef(null);
  r.useEffect(() => {
    if ("" === z) {
      var e;
      null == (e = V.current) || e.focus()
    }
  }, [z]);
  let W = r.useCallback(e => {
      I(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return F ? t : (G(""), H(""), k.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), k.current += 1, l
      })
    }, [F, H]),
    [K, Z] = r.useMemo(() => {
      if (L) return [null, false];
      let e = _.find(e => e.untranslatedName === y.name);
      return true !== e ? [e, false] : [null, true]
    }, [y, _, L]),
    X = r.useCallback(async function(e) {
      let {
        closeAfterSend: t
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (null === K) return;
      D(true);
      let n = (await Promise.all(e.map(u.pk))).filter(b.Vq);
      t && (P(true), O()), n.forEach(async e => {
        var t, n;
        let l = d.A.getChannel(e);
        if (null == l) return;
        let r = null != (t = null == (n = y.options) ? true : n.reduce((e, t) => (e[t.name] = [{
            type: "text",
            text: t.value
          }], e), {})) ? t : {},
          i = f.A.getGuild(null == l ? true : l.guild_id);
        null != await (0, m.A)({
          command: K,
          optionValues: r,
          context: {
            channel: l,
            guild: i
          }
        }) && (0, a.showToast)((0, a.createToast)(x.intl.string(x.t["5WjJcl"]), a.ToastType.MESSAGE))
      }), P(true), O()
    }, [P, K, y.options]),
    Y = r.useCallback(() => {
      X(M, {
        closeAfterSend: true
      })
    }, [X, M]);
  if (L) return (0, l.jsx)(i.Modal, {
    title: x.intl.string(x.t.fuFvwx),
    "aria-label": x.intl.string(x.t.fuFvwx),
    transitionState: N.transitionState,
    onClose: S,
    actions: [],
    children: (0, l.jsx)(a.y$y, {
      className: v.dc
    })
  });
  if (Z) return (0, l.jsx)(i.Modal, {
    title: x.intl.string(x.t.fuFvwx),
    "aria-label": x.intl.string(x.t.fuFvwx),
    transitionState: N.transitionState,
    onClose: S,
    actions: [{
      text: x.intl.string(x.t.cpT0Cq),
      onClick: S,
      variant: "primary"
    }],
    children: x.intl.string(x.t.yAk8ZT)
  });
  let $ = q.length > 0 ? (0, l.jsx)(g.z, {
      rowData: q,
      handleToggleDestination: W,
      selectedDestinations: M,
      disableSelection: F,
      originDestination: T
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("img", {
        className: v.BJ,
        src: j,
        alt: ""
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: x.intl.string(x.t.V6nAfF)
      })]
    }),
    ee = x.intl.format(x.t.hajTkz, {
      appName: null == J ? true : J.name
    });
  null == J && (ee = x.intl.string(x.t.fuFvwx));
  let et = x.intl.format(x.t["DF+q2l"], {
    appName: null == J ? true : J.name
  });
  return F && (et = x.intl.format(x.t["/KhyPe"], {
    count: 5
  })), (0, l.jsx)(i.Modal, {
    title: ee.toString(),
    subtitle: et,
    "aria-label": ee.toString(),
    transitionState: N.transitionState,
    onClose: B,
    size: "md",
    actions: [{
      text: x.intl.string(x.t.cpT0Cq),
      onClick: B,
      variant: "secondary"
    }, {
      text: x.intl.string(x.t.TXNS7S),
      onClick: Y,
      disabled: 0 === R || E,
      variant: "primary"
    }],
    preview: true !== C ? (0, l.jsx)(h.h, {
      previewMessage: C
    }) : null,
    input: (0, l.jsx)(a.IWV, {
      ref: V,
      query: z,
      onChange: U,
      onClear: Q,
      placeholder: x.intl.string(x.t["5h0QOP"]),
      "aria-label": x.intl.string(x.t["5h0QOP"]),
      autoFocus: true
    }),
    children: $
  })
}