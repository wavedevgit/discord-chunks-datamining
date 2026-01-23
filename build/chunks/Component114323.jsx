/** Chunk was on web.js **/
/** chunk id: 114323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R,
  f: () => T
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./733351.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk192308 = require("./192308.js"),
  Chunk155718 = require("./155718.js"),
  Chunk721768 = require("./721768.js"),
  Chunk827785 = require("./827785.js"),
  Chunk264322 = require("./264322.js"),
  Chunk842209 = require("./842209.js"),
  Chunk210978 = require("./210978.js"),
  Chunk861382 = require("./861382.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk664929 = require("./664929.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk257120 = require("./257120.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js");
require("./827669.js");
var Chunk73510 = require("./73510.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk31639 = require("./31639.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let T = {
  results: {
    entries: []
  }
};

function C() {
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("76429").then(n.bind(n, 717020));
    return t => (0, r.jsx)(e, S({}, t))
  })
}

function N(e) {
  return "".concat("/").concat(e.displayName)
}
let R = {
  sentinel: "/",
  stores: [Chunk861382.A, Chunk264322.Ay, Chunk576705.A],
  matches: (e, t, n, r, i) => i.commands !== b.Ze.DISABLED && null == f.A.getActiveCommand(e.id) && (r || i.commands !== b.Ze.OLD_BUILT_INS),
  queryResults(e, t, n, r, i) {
    if (0 === n.length && r.commands !== b.Ze.OLD_BUILT_INS) return T;
    if (r.commands === b.Ze.OLD_BUILT_INS) {
      let r = (0, l.Ez)([s.kc.CHAT], false, false),
        i = RegExp("^".concat(E.A.escape(n)), "i"),
        a = (0, _.PV)(r, i, {
          channel: e,
          guild: t
        }, 20),
        o = l.gZ[O.Ik.BUILT_IN];
      return 0 === a.length ? T : {
        results: {
          entries: a.map(e => ({
            command: e,
            section: o
          }))
        }
      }
    }
    let a = (0, h.Yn)(e, n),
      {
        commands: o,
        sections: c
      } = u.eW({
        channel: e,
        type: "channel"
      }, {
        commandTypes: [s.kc.CHAT],
        text: a.text
      }, {
        limit: 20,
        placeholderCount: 3,
        scoreMethod: d.M.COMMAND_OR_APPLICATION,
        allowFetch: i
      });
    if (null == o) return T;
    let f = o;
    if (a.hasSpaceTerminator) {
      let e = a.text.trim(),
        t = e + " ";
      f = f.filter(n => n.displayName === e || n.displayName.startsWith(t))
    }
    return 0 === f.length ? T : {
      results: {
        entries: f.slice(0, 20).map(e => ({
          command: e,
          section: null == c ? true : c.find(t => t.id === e.applicationId)
        }))
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        entries: t
      },
      selectedIndex: n,
      channel: a,
      query: s,
      options: o,
      onHover: l,
      onClick: c
    } = e, u = (0, h.Yn)(a, s), d = o.commands === b.Ze.OLD_BUILT_INS;
    return (0, y.GM)({
      query: u.text,
      selectedIndex: n,
      autocompletes: t,
      onHover: l,
      onClick: c,
      titleWithQuery: v.t.HFRoZR,
      titleWithoutQuery: v.intl.string(v.t["0hKkS+"]),
      getQuery: e => "".concat("/").concat(e),
      Component: d ? m.Ay.Command : m.Ay.NewCommand,
      getProps: e => {
        let {
          command: t,
          section: n
        } = e;
        return {
          key: t.id,
          command: t,
          channel: a,
          guildId: a.guild_id,
          showImage: true,
          section: n
        }
      },
      key: "commands",
      headerClassName: d ? A.Y : null,
      headerTrailingContent: d && (0, r.jsx)(i.QWc, {
        size: "xs",
        onClick: C,
        text: v.intl.string(v.t["8a0P0y"])
      })
    })
  },
  onSelect(e) {
    let {
      results: {
        entries: t
      },
      index: n,
      queryText: r,
      options: i,
      channel: a,
      location: s,
      tabOrEnter: l
    } = e, {
      command: c,
      section: u
    } = t[n];
    if (c.inputType === p.y$.PLACEHOLDER) return null;
    if (i.commands === b.Ze.OLD_BUILT_INS) i.insertText(N(c));
    else {
      let e = s;
      null == e && (e = l ? p.Oh.QUERY : p.Oh.DISCOVERY), o.Gf({
        channelId: a.id,
        command: c,
        section: null != u ? u : null,
        location: e,
        queryLength: null == r ? true : r.length
      })
    }
    return {
      type: b.kc.COMMAND
    }
  }
}