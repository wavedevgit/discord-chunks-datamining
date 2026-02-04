/** Chunk was on 17869 **/
/** chunk id: 685374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
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

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function v(e, t) {
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
}

function O(e) {
  let {
    channelId: t
  } = e, n = v(e, ["channelId"]), i = (0, a.bG)([d.A], () => d.A.getChannel(t), [t]), s = (0, a.bG)([h.A], () => h.A.getGuild(null == i ? true : i.getGuildId()));
  return (r.useEffect(() => {
    p.default.track(b.HAw.OPEN_MODAL, {
      type: "Grant Channel Access"
    })
  }, []), null == i || null == s) ? null : (0, l.jsx)(C, E({
    guild: s,
    channel: i
  }, n))
}

function C(e) {
  var t, n;
  let {
    guild: a,
    channel: d,
    onClose: h,
    newChannel: p,
    inSettings: b
  } = e, O = v(e, ["guild", "channel", "onClose", "newChannel", "inSettings"]), [C, S] = r.useState(""), [x, j] = r.useState({}), [I, T] = r.useState(false), [N, P] = r.useState(null), w = r.useRef(null), {
    roles: R,
    members: D,
    getRichTag: M
  } = (0, g.K)(a, d, d.accessPermissions, C), L = m.A.useSections({
    roles: R,
    members: D
  }), k = p && 0 === Object.keys(x).length;
  async function U() {
    if (null == d || 0 === Object.keys(x).length) return void h();
    T(true);
    try {
      var e, t, n;
      let l;
      await (e = d, t = x, n = b, l = [], Object.values(t).forEach(t => {
        let {
          row: n
        } = t;
        null != n.id && "" !== n.id && (n.rowType === A.T6.ROLE ? l.push((0, f.we)(n.id, e.type)) : n.rowType === A.T6.MEMBER && l.push((0, f.n3)(n.id, e.type)))
      }), (0, o.R$)(e.id, l, n)), h(), T(false)
    } catch (t) {
      let e = new c.LG(t);
      T(false), P(e)
    }
  }
  let G = (0, u.ke)(d.type) ? s.I$d : s.trU;
  return (0, l.jsx)(m.A.Provider, {
    listRef: w,
    query: C,
    setQuery: S,
    pendingAdditions: x,
    setPendingAdditions: j,
    roles: R,
    members: D,
    getRichTag: M,
    children: (0, l.jsx)(i.Modal, (t = E({}, O), n = n = {
      title: _.intl.string(_.t.dMJ3Y6),
      onClose: h,
      input: (0, l.jsxs)("div", {
        children: [(0, l.jsxs)(s.Text, {
          className: y.HA,
          variant: "text-lg/normal",
          color: "text-default",
          children: [(0, l.jsx)(G, {
            className: y.p,
            size: "sm",
            color: "currentColor"
          }), d.name]
        }), d.isGuildStageVoice() && (0, l.jsx)(s.Text, {
          color: "text-default",
          className: y.h_,
          variant: "text-sm/normal",
          children: _.intl.string(_.t.f7VbhF)
        }), (0, l.jsx)(m.A.SearchBox, {
          placeholderText: _.intl.string(_.t.iezLLn)
        }), (0, l.jsx)(s.Text, {
          className: y.W$,
          variant: "text-xs/normal",
          children: _.intl.string(_.t.rwFx85)
        }), null != N ? (0, l.jsx)(s.Text, {
          className: y.W$,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: N.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: w,
        sectionHeight: m.A.SECTION_HEIGHT,
        renderSection: m.A.renderSection,
        rowHeight: m.A.ROW_HEIGHT,
        renderRow: m.A.renderRow,
        sections: L
      },
      actions: k ? [{
        variant: "secondary",
        text: _.intl.string(_.t.u46sxe),
        onClick: h
      }] : [{
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oC"]),
        onClick: h
      }, {
        variant: "primary",
        text: _.intl.string(_.t.i4jeWR),
        onClick: U,
        loading: I
      }]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}