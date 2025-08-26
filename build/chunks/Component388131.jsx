/** Chunk was on 46786 **/
/** chunk id: 388131, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => w,
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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

function w(e, t) {
  return {
    id: e,
    type: t,
    deny: h.Hn,
    allow: f.yP
  }
}

function j(e) {
  var t, r, {
      channelId: h,
      onClose: j
    } = e,
    O = function(e, t) {
      if (null == e) return {};
      var r, n, l = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
      }
      return l
    }(e, ["channelId", "onClose"]);
  let v = (0, o.e7)([x.Z], () => x.Z.getChannel(h)),
    S = (0, o.e7)([b.Z], () => b.Z.getGuild(null == v ? true : v.getGuildId())),
    [E, R] = l.useState(""),
    [T, P] = l.useState({}),
    [C, k] = l.useState(false),
    [I, L] = l.useState(null),
    M = l.useRef(null),
    {
      roles: Z,
      members: N,
      getRichTag: B
    } = (0, m.Q)(S, v, f.yP, E),
    A = d.Z.useSections({
      roles: Z,
      members: N
    });
  if (null == v || null == S) return null;
  let D = async () => {
    k(true);
    try {
      await
      function(e, t) {
        let r = Object.values(t).filter(e => {
          let {
            row: t
          } = e;
          return null != t.id
        }).map(e => {
          let {
            row: t
          } = e;
          return t.rowType === y.aC.ROLE ? w(t.id, u.BN.ROLE) : w(t.id, u.BN.MEMBER)
        });
        return (0, a.hw)(e.id, r, true)
      }(v, T), j()
    } catch (t) {
      let e = new c.Hx(t);
      k(false), L(e)
    }
  };
  return (0, n.jsx)(d.Z.Provider, {
    listRef: M,
    query: E,
    setQuery: R,
    pendingAdditions: T,
    setPendingAdditions: P,
    roles: Z,
    members: N,
    getRichTag: B,
    children: (0, n.jsx)(i.Modal, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, O), r = r = {
      title: g.intl.string(g.t.dMJ3Y2),
      onClose: j,
      input: (0, n.jsxs)("div", {
        children: [(0, n.jsxs)(s.Text, {
          className: p.channelName,
          variant: "text-lg/normal",
          color: "header-secondary",
          children: [(0, n.jsx)(s.ewx, {
            className: p.channelIcon,
            size: "sm",
            color: "currentColor"
          }), v.name]
        }), v.isGuildStageVoice() && (0, n.jsx)(s.Text, {
          color: "header-secondary",
          className: p.description,
          variant: "text-sm/normal",
          children: g.intl.string(g.t.f7VbhI)
        }), (0, n.jsx)(d.Z.SearchBox, {
          placeholderText: g.intl.string(g.t.iezLLi)
        }), (0, n.jsx)(s.Text, {
          className: p.subtext,
          variant: "text-xs/normal",
          children: g.intl.string(g.t["rwFx8/"])
        }), null != I ? (0, n.jsx)(s.Text, {
          className: p.subtext,
          variant: "text-xs/normal",
          color: "text-danger",
          children: I.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: M,
        sectionHeight: d.Z.SECTION_HEIGHT,
        renderSection: d.Z.renderSection,
        rowHeight: d.Z.ROW_HEIGHT,
        renderRow: d.Z.renderRow,
        sections: A
      },
      actions: [{
        variant: "secondary",
        text: g.intl.string(g.t["ETE/oK"]),
        onClick: j
      }, {
        variant: "primary",
        text: g.intl.string(g.t.OYkgVl),
        onClick: D,
        loading: C
      }]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  })
}