/** Chunk was on 97492 **/
/** chunk id: 685374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./896048.js"), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk702805 = require("./702805.js"),
  Chunk198982 = require("./198982.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk147036 = require("./147036.js"),
  Chunk845202 = require("./845202.jsx"),
  Chunk86944 = require("./86944.js"),
  Chunk737045 = require("./737045.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk695244 = require("./695244.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
  if (null == e) return {};
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function v(e) {
  let {
    channelId: t
  } = e, n = j(e, ["channelId"]), i = (0, s.bG)([d.A], () => d.A.getChannel(t), [t]), a = (0, s.bG)([p.A], () => p.A.getGuild(null == i ? true : i.getGuildId()));
  return (l.useEffect(() => {
    h.default.track(A.HAw.OPEN_MODAL, {
      type: "Grant Channel Access"
    })
  }, []), null == i || null == a) ? null : (0, r.jsx)(x, O({
    guild: a,
    channel: i
  }, n))
}

function x(e) {
  var t, n;
  let {
    guild: s,
    channel: d,
    onClose: p,
    newChannel: h,
    inSettings: A
  } = e, v = j(e, ["guild", "channel", "onClose", "newChannel", "inSettings"]), [x, E] = l.useState(""), [C, S] = l.useState({}), [I, N] = l.useState(false), [T, P] = l.useState(null), w = l.useRef(null), {
    roles: R,
    members: D,
    getRichTag: M
  } = (0, m.K)(s, d, d.accessPermissions, x), L = g.A.useSections({
    roles: R,
    members: D
  }), k = h && 0 === Object.keys(C).length;
  async function G() {
    if (null == d || 0 === Object.keys(C).length) return void p();
    N(true);
    try {
      var e, t, n;
      let r;
      await (e = d, t = C, n = A, r = [], Object.values(t).forEach(t => {
        let {
          row: n
        } = t;
        null != n.id && "" !== n.id && (n.rowType === b.T6.ROLE ? r.push((0, f.we)(n.id, e.type)) : n.rowType === b.T6.MEMBER && r.push((0, f.n3)(n.id, e.type)))
      }), (0, o.R$)(e.id, r, n)), p(), N(false)
    } catch (t) {
      let e = new c.LG(t);
      N(false), P(e)
    }
  }
  let U = (0, u.ke)(d.type) ? a.I$d : a.trU;
  return (0, r.jsx)(g.A.Provider, {
    listRef: w,
    query: x,
    setQuery: E,
    pendingAdditions: C,
    setPendingAdditions: S,
    roles: R,
    members: D,
    getRichTag: M,
    children: (0, r.jsx)(i.Modal, (t = O({}, v), n = n = {
      title: y.intl.string(y.t.dMJ3Y6),
      onClose: p,
      input: (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(a.Text, {
          className: _.HA,
          variant: "text-lg/normal",
          color: "text-default",
          children: [(0, r.jsx)(U, {
            className: _.p,
            size: "sm",
            color: "currentColor"
          }), d.name]
        }), d.isGuildStageVoice() && (0, r.jsx)(a.Text, {
          color: "text-default",
          className: _.h_,
          variant: "text-sm/normal",
          children: y.intl.string(y.t.f7VbhF)
        }), (0, r.jsx)(g.A.SearchBox, {
          placeholderText: y.intl.string(y.t.iezLLn)
        }), (0, r.jsx)(a.Text, {
          className: _.W$,
          variant: "text-xs/normal",
          children: y.intl.string(y.t.rwFx85)
        }), null != T ? (0, r.jsx)(a.Text, {
          className: _.W$,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: T.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: w,
        sectionHeight: g.A.SECTION_HEIGHT,
        renderSection: g.A.renderSection,
        rowHeight: g.A.ROW_HEIGHT,
        renderRow: g.A.renderRow,
        sections: L
      },
      actions: k ? [{
        variant: "secondary",
        text: y.intl.string(y.t.u46sxe),
        onClick: p
      }] : [{
        variant: "secondary",
        text: y.intl.string(y.t["ETE/oC"]),
        onClick: p
      }, {
        variant: "primary",
        text: y.intl.string(y.t.i4jeWR),
        onClick: G,
        loading: I
      }]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}