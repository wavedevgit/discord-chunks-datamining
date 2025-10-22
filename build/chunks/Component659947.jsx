/** Chunk was on web.js **/
/** chunk id: 659947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk40908 = require("./40908.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk415795 = require("./415795.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk727785 = require("./727785.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704563 = require("./704563.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v() {}
let I = [Chunk727785.h8.VOICE_CHANNEL];

function T(e) {
  e.setOptions({
    voiceChannelGuildFilter: null
  }), e.setLimit(1 / 0)
}

function S(e) {
  let {
    height: t
  } = e;
  return (0, r.jsx)("div", {
    style: {
      height: t
    }
  })
}

function A() {
  return (0, Chunk951288.jsx)(S, {
    height: 16
  }, "footer")
}

function C() {
  return (0, Chunk951288.jsx)(S, {
    height: 8
  }, "header")
}

function N() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk704563.voiceListSearchEmpty,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      color: "text-muted",
      className: Chunk704563.noVoiceChannelSelected,
      children: Chunk388032.intl.string(Chunk388032.t.zHjCd1)
    })
  })
}

function R(e) {
  let t = "" !== e,
    n = (0, a.Wu)([f.ZP, d.Z, p.Z], () => {
      let e = p.Z.getGuildId();
      if (t || null == e) return [];
      let n = [];
      for (let t of f.ZP.getVocalChannelIds(e)) {
        let e = d.Z.getChannel(t);
        null != e && n.push(e)
      }
      return n
    }, [t]);
  return t ? null : n
}

function P(e) {
  var t, n;
  let {
    keybind: a
  } = e, l = i.useRef(a);
  i.useEffect(() => {
    l.current = a
  });
  let [u, d] = i.useState(null != (n = null == (t = a.params) ? true : t.channelId) ? n : true), f = i.useCallback(() => {
    (0, o.ZDy)(async () => e => (0, r.jsx)(L, O(b({}, e), {
      onSelect: e => {
        d(e), s.Z.setKeybind(O(b({}, l.current), {
          params: {
            channelId: e
          }
        }))
      }
    })))
  }, []);
  return (0, r.jsx)("div", {
    className: g.channelIdSection,
    children: (0, r.jsx)(o.gNt, {
      label: m.intl.string(m.t.q4JpM8),
      children: (0, r.jsxs)(c.Z, {
        align: c.Z.Align.STRETCH,
        children: [(0, r.jsx)("div", {
          className: g.selectedVoiceChannel,
          children: (0, r.jsx)(x, {
            channelId: u
          })
        }), (0, r.jsx)(c.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(o.Button, {
            variant: "primary",
            text: m.intl.string(m.t.Dm8O4e),
            onClick: f
          })
        })]
      })
    })
  })
}

function w() {
  let e = Chunk647438.useRef(false),
    t = Chunk647438.useCallback(() => {
      module.current = true
    }, []),
    n = Chunk647438.useCallback(() => {
      module.current = false
    }, []);
  return {
    mouseFocusEnabled: module,
    enableMouseFocus: exports,
    disableMouseFocus: require
  }
}

function D(e) {
  let [t, n] = i.useState(0), r = i.useRef(e);
  return e !== r.current && 0 !== t && n(0), i.useEffect(() => {
    r.current = e
  }), {
    focusedIndex: t,
    setFocusedIndex: n
  }
}

function L(e) {
  let {
    transitionState: t,
    onClose: n,
    onSelect: a
  } = e, s = i.useId(), c = i.useRef(null), {
    mouseFocusEnabled: f,
    enableMouseFocus: p,
    disableMouseFocus: E
  } = w(), {
    query: b,
    updateQuery: y,
    queryResults: O
  } = (0, l.Z)({
    visible: true,
    autocompleterResultTypes: I,
    autocompleterBeforeCreateSearchContext: T
  }), v = R(b), {
    focusedIndex: S,
    setFocusedIndex: P
  } = D(b);
  i.useEffect(() => {
    let {
      current: e
    } = c;
    null == e || e.isItemVisible(0, S, true) || e.scrollToIndex({
      section: 0,
      row: S
    })
  }, [S]);
  let L = null != v ? v.length : O.length;

  function x(e) {
    let {
      row: t
    } = e, i = (() => {
      if (null != v) return v[t];
      let e = O[t];
      if ((null == e ? true : e.type) === h.h8.VOICE_CHANNEL) return e.record
    })();
    if (null == i) return null;
    let o = null != i.parent_id ? d.Z.getChannel(i.parent_id) : true,
      s = _.Z.getGuild(i.guild_id);
    return (0, r.jsx)(u.$W, {
      id: i.id,
      channel: i,
      category: o,
      focused: S === t,
      onMouseEnter: () => f.current && P(t),
      onClick: () => {
        a(i.id), n()
      },
      onFocus: () => P(t),
      children: null != s ? (0, r.jsx)("div", {
        className: g.guildName,
        children: s.name
      }) : null
    }, i.id)
  }

  function M(e) {
    E();
    let t = e.key.toLowerCase();
    if ("arrowdown" === t || "arrowup" === t || "enter" === t || "escape" === t) switch (e.preventDefault(), t) {
      case "escape":
        n();
        break;
      case "enter": {
        let e = (() => {
          if (null != v) return v[S];
          let e = O[S];
          if ((null == e ? true : e.type) === h.h8.VOICE_CHANNEL) return e.record
        })();
        null == e ? a(true) : a(e.id), n();
        break
      }
      case "arrowup":
        0 === S ? P(L - 1) : P(S - 1);
        break;
      case "arrowdown":
        S >= L - 1 ? P(0) : P(S + 1)
    }
  }
  let k = (() => {
    if (null != v) {
      var e;
      return null == (e = v[S]) ? true : e.id
    }
    let t = O[S];
    if ((null == t ? true : t.type) === h.h8.VOICE_CHANNEL) return t.record.id
  })();
  return (0, r.jsx)(o.IX, {
    transitionState: t,
    size: "lg",
    onClose: n,
    children: (0, r.jsxs)("div", {
      className: g.container,
      onMouseMove: p,
      children: [(0, r.jsx)("div", {
        className: g.inputWrapper,
        children: (0, r.jsx)(o.oil, {
          value: b,
          onChange: y,
          onKeyDown: M,
          placeholder: m.intl.string(m.t.tG0r7g),
          role: "combobox",
          "aria-controls": s,
          "aria-expanded": L > 0,
          "aria-activedescendant": L > 0 && null != k ? k : true,
          "aria-autocomplete": "list",
          spellCheck: false
        })
      }), 0 === L && "" !== b && (0, r.jsx)(N, {}), (L > 0 || "" === b) && (0, r.jsx)(o.Tvr, {
        innerId: s,
        innerRole: "listbox",
        "aria-label": m.intl.string(m.t["+N3fW7"]),
        ref: c,
        sections: [L],
        renderRow: x,
        renderListHeader: C,
        renderFooter: A,
        sectionHeight: 0,
        rowHeight: 34,
        className: g.voiceChannelList,
        listHeaderHeight: 8,
        footerHeight: 16
      })]
    })
  })
}

function x(e) {
  let {
    channelId: t
  } = e, {
    channel: n,
    category: i,
    guild: s
  } = (0, a.cj)([d.Z, _.Z], () => {
    let e = null != t ? d.Z.getChannel(t) : true;
    return null != e ? {
      channel: e,
      category: null != e.parent_id ? d.Z.getChannel(e.parent_id) : true,
      guild: null != e.guild_id ? _.Z.getGuild(e.guild_id) : true
    } : {
      channel: true,
      category: true,
      guild: true
    }
  });
  return null == n ? (0, r.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "text-muted",
    className: g.noVoiceChannelSelected,
    children: m.intl.string(m.t["/fYIK7"])
  }) : (0, r.jsx)(u.$W, {
    channel: n,
    id: n.id,
    category: i,
    onClick: v,
    onFocus: v,
    onMouseEnter: v,
    focused: false,
    children: null != s ? (0, r.jsx)("div", {
      className: g.guildName,
      children: s.name
    }) : null
  })
}