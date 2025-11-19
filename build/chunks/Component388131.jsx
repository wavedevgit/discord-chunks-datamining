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
  Chunk878713 = require("./878713.js");

function j(e, t) {
  return {
    id: e,
    type: t,
    deny: f.Hn,
    allow: g.yP
  }
}

function m(e) {
  var t, n, {
      channelId: f,
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
  let v = (0, o.e7)([b.Z], () => b.Z.getChannel(f)),
    P = (0, o.e7)([y.Z], () => y.Z.getGuild(null == v ? true : v.getGuildId())),
    [S, E] = i.useState(""),
    [_, k] = i.useState({}),
    [C, N] = i.useState(false),
    [T, Z] = i.useState(null),
    I = i.useRef(null),
    {
      roles: R,
      members: H,
      getRichTag: G
    } = (0, p.Q)(P, v, g.yP, S),
    M = d.Z.useSections({
      roles: R,
      members: H
    });
  if (null == v || null == P) return null;
  let A = async () => {
    N(true);
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
        return (0, s.hw)(e.id, n, true)
      }(v, _), m()
    } catch (t) {
      let e = new a.Hx(t);
      N(false), Z(e)
    }
  };
  return (0, r.jsx)(d.Z.Provider, {
    listRef: I,
    query: S,
    setQuery: E,
    pendingAdditions: _,
    setPendingAdditions: k,
    roles: R,
    members: H,
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
      title: h.intl.string(h.t.dMJ3Y6),
      onClose: m,
      input: (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(c.Text, {
          className: x.channelName,
          variant: "text-lg/normal",
          color: "header-secondary",
          children: [(0, r.jsx)(c.ewx, {
            className: x.channelIcon,
            size: "sm",
            color: "currentColor"
          }), v.name]
        }), v.isGuildStageVoice() && (0, r.jsx)(c.Text, {
          color: "header-secondary",
          className: x.description,
          variant: "text-sm/normal",
          children: h.intl.string(h.t.f7VbhF)
        }), (0, r.jsx)(d.Z.SearchBox, {
          placeholderText: h.intl.string(h.t.iezLLn)
        }), (0, r.jsx)(c.Text, {
          className: x.subtext,
          variant: "text-xs/normal",
          children: h.intl.string(h.t.rwFx85)
        }), null != T ? (0, r.jsx)(c.Text, {
          className: x.subtext,
          variant: "text-xs/normal",
          color: "text-danger",
          children: T.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: I,
        sectionHeight: d.Z.SECTION_HEIGHT,
        renderSection: d.Z.renderSection,
        rowHeight: d.Z.ROW_HEIGHT,
        renderRow: d.Z.renderRow,
        sections: M
      },
      actions: [{
        variant: "secondary",
        text: h.intl.string(h.t["ETE/oC"]),
        onClick: m
      }, {
        variant: "primary",
        text: h.intl.string(h.t.OYkgVk),
        onClick: A,
        loading: C
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