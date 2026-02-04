/** Chunk was on 9207 **/
/** chunk id: 958831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk97260 = require("./97260.js"),
  Chunk337692 = require("./337692.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk586068 = require("./586068.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk926140 = require("./926140.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk777563 = require("./777563.js");

function h(e) {
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

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O() {}
let x = [Chunk926140.rD.VOICE_CHANNEL];

function C(e) {
  e.setOptions({
    voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0)
}

function S() {
  return (0, r.jsx)("div", {
    className: b.i1,
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      className: b.GN,
      children: f.intl.string(f.t.zHjCd1)
    })
  })
}

function T(e) {
  var t, n;
  let {
    keybind: l
  } = e, s = i.useRef(l);
  i.useEffect(() => {
    s.current = l
  });
  let [c, u] = i.useState(null != (t = null == (n = l.params) ? true : n.channelId) ? t : true), _ = i.useCallback(() => {
    (0, a.mMO)(async () => e => (0, r.jsx)(I, E(h({}, e), {
      onSelect: e => {
        u(e), o.A.setKeybind(E(h({}, s.current), {
          params: {
            channelId: e
          }
        }))
      }
    })))
  }, []);
  return (0, r.jsx)("div", {
    className: b.a8,
    children: (0, r.jsx)(a.D0$, {
      label: f.intl.string(f.t.q4JpM8),
      children: (0, r.jsxs)(d.A, {
        align: d.A.Align.STRETCH,
        children: [(0, r.jsx)("div", {
          className: b.$X,
          children: (0, r.jsx)(N, {
            channelId: c
          })
        }), (0, r.jsx)(d.A.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(a.Button, {
            variant: "primary",
            text: f.intl.string(f.t.Dm8O4e),
            onClick: _
          })
        })]
      })
    })
  })
}

function I(e) {
  let t, n, {
      transitionState: o,
      onClose: d,
      onSelect: h
    } = e,
    E = i.useId(),
    O = i.useRef(null),
    {
      query: T,
      updateQuery: I,
      queryResults: N
    } = (0, c.A)({
      visible: true,
      autocompleterResultTypes: x,
      autocompleterBeforeCreateSearchContext: C
    }),
    y = (t = "" !== T, n = (0, s.yK)([p.Ay, _.A, g.A], () => {
      let e = g.A.getGuildId();
      if (t || null == e) return [];
      let n = [];
      for (let t of p.Ay.getVocalChannelIds(e)) {
        let e = _.A.getChannel(t);
        null != e && n.push(e)
      }
      return n
    }, [t]), t ? null : n),
    {
      focusedIndex: v,
      setFocusedIndex: j
    } = function(e) {
      let [t, n] = i.useState(0), r = i.useRef(e);
      return e !== r.current && 0 !== t && n(0), i.useEffect(() => {
        r.current = e
      }), {
        focusedIndex: t,
        setFocusedIndex: n
      }
    }(T);
  i.useEffect(() => {
    let {
      current: e
    } = O;
    null == e || e.isItemVisible(0, v, true) || e.scrollToIndex({
      section: 0,
      row: v
    })
  }, [v]);
  let P = null != y ? y.length : N.length,
    R = (() => {
      if (null != y) {
        var e;
        return null == (e = y[v]) ? true : e.id
      }
      let t = N[v];
      if ((null == t ? true : t.type) === A.rD.VOICE_CHANNEL) return t.record.id
    })(),
    D = P > 0 || "" === T ? {
      innerId: E,
      innerRole: "listbox",
      innerAriaLabel: f.intl.string(f.t["+N3fW7"]),
      ref: O,
      sections: [P],
      renderRow: function(e) {
        let {
          row: t
        } = e, n = (() => {
          if (null != y) return y[t];
          let e = N[t];
          if ((null == e ? true : e.type) === A.rD.VOICE_CHANNEL) return e.record
        })();
        if (null == n) return null;
        let i = null != n.parent_id ? _.A.getChannel(n.parent_id) : true,
          l = m.A.getGuild(n.guild_id);
        return (0, r.jsx)(u.c3, {
          id: n.id,
          channel: n,
          category: i,
          focused: v === t,
          onMouseEnter: () => j(t),
          onClick: () => {
            h(n.id), d()
          },
          onFocus: () => j(t),
          children: null != l ? (0, r.jsx)("div", {
            className: b.J5,
            children: l.name
          }) : null
        }, n.id)
      },
      sectionHeight: 0,
      rowHeight: 34
    } : {
      sections: [1],
      renderRow: () => (0, r.jsx)(S, {}),
      sectionHeight: 0,
      rowHeight: 52
    };
  return (0, r.jsx)(l.Modal, {
    transitionState: o,
    onClose: d,
    title: f.intl.string(f.t.Dm8O4e),
    subtitle: f.intl.string(f.t.q4JpM8),
    actions: true,
    input: (0, r.jsx)(a.ksK, {
      value: T,
      onChange: I,
      onKeyDown: function(e) {
        let t = e.key.toLowerCase();
        if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
          case "escape":
            d();
            break;
          case "enter": {
            let e = (() => {
              if (null != y) return y[v];
              let e = N[v];
              if ((null == e ? true : e.type) === A.rD.VOICE_CHANNEL) return e.record
            })();
            null == e ? h(true) : h(e.id), d();
            break
          }
          case "arrowup":
            0 === v ? j(P - 1) : j(v - 1);
            break;
          case "arrowdown":
            v >= P - 1 ? j(0) : j(v + 1)
        }
      },
      placeholder: f.intl.string(f.t.tG0r7g),
      role: "combobox",
      "aria-controls": E,
      "aria-expanded": P > 0,
      "aria-activedescendant": P > 0 && null != R ? R : true,
      "aria-autocomplete": "list",
      spellCheck: false,
      autoFocus: true
    }),
    listProps: D
  })
}

function N(e) {
  let {
    channelId: t
  } = e, {
    channel: n,
    category: i,
    guild: l
  } = (0, s.cf)([_.A, m.A], () => {
    let e = null != t ? _.A.getChannel(t) : true;
    return null != e ? {
      channel: e,
      category: null != e.parent_id ? _.A.getChannel(e.parent_id) : true,
      guild: null != e.guild_id ? m.A.getGuild(e.guild_id) : true
    } : {
      channel: true,
      category: true,
      guild: true
    }
  });
  return null == n ? (0, r.jsx)(a.Text, {
    variant: "text-md/medium",
    color: "text-muted",
    className: b.GN,
    children: f.intl.string(f.t["/fYIK7"])
  }) : (0, r.jsx)(u.c3, {
    channel: n,
    id: n.id,
    category: i,
    onClick: O,
    onFocus: O,
    onMouseEnter: O,
    focused: false,
    children: null != l ? (0, r.jsx)("div", {
      className: b.J5,
      children: l.name
    }) : null
  })
}