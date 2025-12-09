/** Chunk was on 34740 **/
/** chunk id: 185413, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk881052 = require("./881052.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk934415 = require("./934415.js"),
  Chunk974339 = require("./974339.jsx"),
  Chunk215157 = require("./215157.js"),
  Chunk71080 = require("./71080.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk257803 = require("./257803.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      l = Object.keys(e);
    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}

function x(e) {
  var {
    channelId: t
  } = e, n = O(e, ["channelId"]);
  let l = (0, a.e7)([d.Z], () => d.Z.getChannel(t), [t]),
    o = (0, a.e7)([p.Z], () => p.Z.getGuild(null == l ? true : l.getGuildId()));
  return (r.useEffect(() => {
    h.default.track(y.rMx.OPEN_MODAL, {
      type: "Grant Channel Access"
    })
  }, []), null == l || null == o) ? null : (0, i.jsx)(E, _({
    guild: o,
    channel: l
  }, n))
}

function E(e) {
  var t, n, {
      guild: a,
      channel: d,
      onClose: p,
      newChannel: h,
      inSettings: y
    } = e,
    x = O(e, ["guild", "channel", "onClose", "newChannel", "inSettings"]);
  let [E, j] = r.useState(""), [S, P] = r.useState({}), [I, Z] = r.useState(false), [T, N] = r.useState(null), A = r.useRef(null), {
    roles: w,
    members: M,
    getRichTag: R
  } = (0, g.Q)(a, d, d.accessPermissions, E), L = m.Z.useSections({
    roles: w,
    members: M
  }), D = h && 0 === Object.keys(S).length;
  async function k() {
    if (null == d || 0 === Object.keys(S).length) return void p();
    Z(true);
    try {
      await
      function(e, t, n) {
        let i = [];
        return Object.values(t).forEach(t => {
          let {
            row: n
          } = t;
          null != n.id && "" !== n.id && (n.rowType === b.aC.ROLE ? i.push((0, f.rX)(n.id, e.type)) : n.rowType === b.aC.MEMBER && i.push((0, f.jZ)(n.id, e.type)))
        }), (0, s.hw)(e.id, i, n)
      }(d, S, y), p(), Z(false)
    } catch (t) {
      let e = new c.Hx(t);
      Z(false), N(e)
    }
  }
  let U = (0, u.zi)(d.type) ? o.W4G : o.gjC;
  return (0, i.jsx)(m.Z.Provider, {
    listRef: A,
    query: E,
    setQuery: j,
    pendingAdditions: S,
    setPendingAdditions: P,
    roles: w,
    members: M,
    getRichTag: R,
    children: (0, i.jsx)(l.Modal, (t = _({}, x), n = n = {
      title: C.intl.string(C.t.dMJ3Y6),
      onClose: p,
      input: (0, i.jsxs)("div", {
        children: [(0, i.jsxs)(o.Text, {
          className: v.channelName,
          variant: "text-lg/normal",
          color: "text-default",
          children: [(0, i.jsx)(U, {
            className: v.channelIcon,
            size: "sm",
            color: "currentColor"
          }), d.name]
        }), d.isGuildStageVoice() && (0, i.jsx)(o.Text, {
          color: "text-default",
          className: v.description,
          variant: "text-sm/normal",
          children: C.intl.string(C.t.f7VbhF)
        }), (0, i.jsx)(m.Z.SearchBox, {
          placeholderText: C.intl.string(C.t.iezLLn)
        }), (0, i.jsx)(o.Text, {
          className: v.subtext,
          variant: "text-xs/normal",
          children: C.intl.string(C.t.rwFx85)
        }), null != T ? (0, i.jsx)(o.Text, {
          className: v.subtext,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: T.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: A,
        sectionHeight: m.Z.SECTION_HEIGHT,
        renderSection: m.Z.renderSection,
        rowHeight: m.Z.ROW_HEIGHT,
        renderRow: m.Z.renderRow,
        sections: L
      },
      actions: D ? [{
        variant: "secondary",
        text: C.intl.string(C.t.u46sxe),
        onClick: p
      }] : [{
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oC"]),
        onClick: p
      }, {
        variant: "primary",
        text: C.intl.string(C.t.i4jeWR),
        onClick: k,
        loading: I
      }]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}