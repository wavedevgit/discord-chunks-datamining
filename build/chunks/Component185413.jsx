/** Chunk was on 81985 **/
/** chunk id: 185413, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
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
  Chunk828494 = require("./828494.js");

function j(e) {
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

function x(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e) {
  var {
    channelId: t
  } = e, n = x(e, ["channelId"]);
  let l = (0, a.e7)([d.Z], () => d.Z.getChannel(t), [t]),
    o = (0, a.e7)([p.Z], () => p.Z.getGuild(null == l ? true : l.getGuildId()));
  return (i.useEffect(() => {
    f.default.track(y.rMx.OPEN_MODAL, {
      type: "Grant Channel Access"
    })
  }, []), null == l || null == o) ? null : (0, r.jsx)(E, j({
    guild: o,
    channel: l
  }, n))
}

function E(e) {
  var t, n, {
      guild: a,
      channel: d,
      onClose: p,
      newChannel: f,
      inSettings: y
    } = e,
    C = x(e, ["guild", "channel", "onClose", "newChannel", "inSettings"]);
  let [E, S] = i.useState(""), [_, I] = i.useState({}), [P, Z] = i.useState(false), [N, T] = i.useState(null), A = i.useRef(null), {
    roles: w,
    members: R,
    getRichTag: D
  } = (0, m.Q)(a, d, d.accessPermissions, E), M = g.Z.useSections({
    roles: w,
    members: R
  }), k = f && 0 === Object.keys(_).length;
  async function L() {
    if (null == d || 0 === Object.keys(_).length) return void p();
    Z(true);
    try {
      await
      function(e, t, n) {
        let r = [];
        return Object.values(t).forEach(t => {
          let {
            row: n
          } = t;
          null != n.id && "" !== n.id && (n.rowType === b.aC.ROLE ? r.push((0, h.rX)(n.id, e.type)) : n.rowType === b.aC.MEMBER && r.push((0, h.jZ)(n.id, e.type)))
        }), (0, s.hw)(e.id, r, n)
      }(d, _, y), p(), Z(false)
    } catch (t) {
      let e = new c.Hx(t);
      Z(false), T(e)
    }
  }
  let U = (0, u.zi)(d.type) ? o.W4G : o.gjC;
  return (0, r.jsx)(g.Z.Provider, {
    listRef: A,
    query: E,
    setQuery: S,
    pendingAdditions: _,
    setPendingAdditions: I,
    roles: w,
    members: R,
    getRichTag: D,
    children: (0, r.jsx)(l.Modal, (t = j({}, C), n = n = {
      title: v.intl.string(v.t.dMJ3Y6),
      onClose: p,
      input: (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(o.Text, {
          className: O.channelName,
          variant: "text-lg/normal",
          color: "text-default",
          children: [(0, r.jsx)(U, {
            className: O.channelIcon,
            size: "sm",
            color: "currentColor"
          }), d.name]
        }), d.isGuildStageVoice() && (0, r.jsx)(o.Text, {
          color: "text-default",
          className: O.description,
          variant: "text-sm/normal",
          children: v.intl.string(v.t.f7VbhF)
        }), (0, r.jsx)(g.Z.SearchBox, {
          placeholderText: v.intl.string(v.t.iezLLn)
        }), (0, r.jsx)(o.Text, {
          className: O.subtext,
          variant: "text-xs/normal",
          children: v.intl.string(v.t.rwFx85)
        }), null != N ? (0, r.jsx)(o.Text, {
          className: O.subtext,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: N.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: A,
        sectionHeight: g.Z.SECTION_HEIGHT,
        renderSection: g.Z.renderSection,
        rowHeight: g.Z.ROW_HEIGHT,
        renderRow: g.Z.renderRow,
        sections: M
      },
      actions: k ? [{
        variant: "secondary",
        text: v.intl.string(v.t.u46sxe),
        onClick: p
      }] : [{
        variant: "secondary",
        text: v.intl.string(v.t["ETE/oC"]),
        onClick: p
      }, {
        variant: "primary",
        text: v.intl.string(v.t.i4jeWR),
        onClick: L,
        loading: P
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