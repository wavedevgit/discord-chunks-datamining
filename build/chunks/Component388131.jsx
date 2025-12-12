/** Chunk was on 46786 **/
/** chunk id: 388131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j,
  default: () => m
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk881052 = require("./881052.js"),
  Chunk911969 = require("./911969.js"),
  Chunk974339 = require("./974339.jsx"),
  Chunk215157 = require("./215157.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk700785 = require("./700785.js"),
  Chunk146085 = require("./146085.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk852489 = require("./852489.js");

function j(e, t) {
  return {
    id: e,
    type: t,
    deny: x.Hn,
    allow: y.yP
  }
}

function m(e) {
  var t, n, {
      channelId: x,
      onClose: m
    } = e,
    w = function(e, t) {
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
    }(e, ["channelId", "onClose"]);
  let v = (0, o.e7)([f.Z], () => f.Z.getChannel(x)),
    P = (0, o.e7)([b.Z], () => b.Z.getGuild(null == v ? true : v.getGuildId())),
    [S, E] = i.useState(""),
    [k, C] = i.useState({}),
    [N, T] = i.useState(false),
    [Z, I] = i.useState(null),
    R = i.useRef(null),
    {
      roles: H,
      members: _,
      getRichTag: G
    } = (0, p.Q)(P, v, y.yP, S),
    M = d.Z.useSections({
      roles: H,
      members: _
    });
  if (null == v || null == P) return null;
  let A = async () => {
    T(true);
    try {
      await
      function(e, t) {
        let n = Object.values(t).filter(e => {
          let {
            row: t
          } = e;
          return null != t.id
        }).map(e => {
          let {
            row: t
          } = e;
          return t.rowType === O.aC.ROLE ? j(t.id, u.BN.ROLE) : j(t.id, u.BN.MEMBER)
        });
        return (0, a.hw)(e.id, n, true)
      }(v, k), m()
    } catch (t) {
      let e = new s.Hx(t);
      T(false), I(e)
    }
  };
  return (0, r.jsx)(d.Z.Provider, {
    listRef: R,
    query: S,
    setQuery: E,
    pendingAdditions: k,
    setPendingAdditions: C,
    roles: H,
    members: _,
    getRichTag: G,
    children: (0, r.jsx)(l.Modal, (t = function(e) {
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
    }({}, w), n = n = {
      title: g.intl.string(g.t.dMJ3Y6),
      onClose: m,
      input: (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(c.Text, {
          className: h.channelName,
          variant: "text-lg/normal",
          color: "text-default",
          children: [(0, r.jsx)(c.ewx, {
            className: h.channelIcon,
            size: "sm",
            color: "currentColor"
          }), v.name]
        }), v.isGuildStageVoice() && (0, r.jsx)(c.Text, {
          color: "text-default",
          className: h.description,
          variant: "text-sm/normal",
          children: g.intl.string(g.t.f7VbhF)
        }), (0, r.jsx)(d.Z.SearchBox, {
          placeholderText: g.intl.string(g.t.iezLLn)
        }), (0, r.jsx)(c.Text, {
          className: h.subtext,
          variant: "text-xs/normal",
          children: g.intl.string(g.t.rwFx85)
        }), null != Z ? (0, r.jsx)(c.Text, {
          className: h.subtext,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: Z.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: R,
        sectionHeight: d.Z.SECTION_HEIGHT,
        renderSection: d.Z.renderSection,
        rowHeight: d.Z.ROW_HEIGHT,
        renderRow: d.Z.renderRow,
        sections: M
      },
      actions: [{
        variant: "secondary",
        text: g.intl.string(g.t["ETE/oC"]),
        onClick: m
      }, {
        variant: "primary",
        text: g.intl.string(g.t.OYkgVk),
        onClick: A,
        loading: N
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