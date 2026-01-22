/** Chunk was on 64233 **/
/** chunk id: 841811, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E,
  j: () => C
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk702805 = require("./702805.js"),
  Chunk198982 = require("./198982.js"),
  Chunk155718 = require("./155718.js"),
  Chunk845202 = require("./845202.jsx"),
  Chunk86944 = require("./86944.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk488926 = require("./488926.js"),
  Chunk233993 = require("./233993.js"),
  Chunk737045 = require("./737045.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk138695 = require("./138695.js");

function C(e, t) {
  return {
    id: e,
    type: t,
    deny: b.x3,
    allow: m.QY
  }
}

function E(e) {
  var t, n;
  let {
    channelId: b,
    onClose: E
  } = e, I = function(e, t) {
    if (null == e) return {};
    var n, i, r, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["channelId", "onClose"]), y = (0, s.bG)([p.A], () => p.A.getChannel(b)), v = (0, s.bG)([g.A], () => g.A.getGuild(null == y ? true : y.getGuildId())), [S, N] = r.useState(""), [x, j] = r.useState({}), [T, _] = r.useState(false), [P, G] = r.useState(null), w = r.useRef(null), {
    roles: U,
    members: L,
    getRichTag: R
  } = (0, d.K)(v, y, m.QY, S), D = h.A.useSections({
    roles: U,
    members: L
  });
  if (null == y || null == v) return null;
  let M = async () => {
    _(true);
    try {
      let e;
      await (e = Object.values(x).filter(e => {
        let {
          row: t
        } = e;
        return null != t.id
      }).map(e => {
        let {
          row: t
        } = e;
        return t.rowType === f.T6.ROLE ? C(t.id, c.r2.ROLE) : C(t.id, c.r2.MEMBER)
      }), (0, o.R$)(y.id, e, true)), E()
    } catch (t) {
      let e = new u.LG(t);
      _(false), G(e)
    }
  };
  return (0, i.jsx)(h.A.Provider, {
    listRef: w,
    query: S,
    setQuery: N,
    pendingAdditions: x,
    setPendingAdditions: j,
    roles: U,
    members: L,
    getRichTag: R,
    children: (0, i.jsx)(l.Modal, (t = function(e) {
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
    }({}, I), n = n = {
      title: O.intl.string(O.t.dMJ3Y6),
      onClose: E,
      input: (0, i.jsxs)("div", {
        children: [(0, i.jsxs)(a.Text, {
          className: A.HA,
          variant: "text-lg/normal",
          color: "text-default",
          children: [(0, i.jsx)(a.qux, {
            className: A.p,
            size: "sm",
            color: "currentColor"
          }), y.name]
        }), y.isGuildStageVoice() && (0, i.jsx)(a.Text, {
          color: "text-default",
          className: A.h_,
          variant: "text-sm/normal",
          children: O.intl.string(O.t.f7VbhF)
        }), (0, i.jsx)(h.A.SearchBox, {
          placeholderText: O.intl.string(O.t.iezLLn)
        }), (0, i.jsx)(a.Text, {
          className: A.W$,
          variant: "text-xs/normal",
          children: O.intl.string(O.t.rwFx85)
        }), null != P ? (0, i.jsx)(a.Text, {
          className: A.W$,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: P.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: w,
        sectionHeight: h.A.SECTION_HEIGHT,
        renderSection: h.A.renderSection,
        rowHeight: h.A.ROW_HEIGHT,
        renderRow: h.A.renderRow,
        sections: D
      },
      actions: [{
        variant: "secondary",
        text: O.intl.string(O.t["ETE/oC"]),
        onClick: E
      }, {
        variant: "primary",
        text: O.intl.string(O.t.OYkgVk),
        onClick: M,
        loading: T
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