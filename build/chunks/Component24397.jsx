/** Chunk was on web.js **/
/** chunk id: 24397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => C,
  Z: () => P
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk952265 = require("./952265.js"),
  Chunk911969 = require("./911969.js"),
  Chunk555573 = require("./555573.js"),
  Chunk254711 = require("./254711.js"),
  Chunk213459 = require("./213459.js"),
  Chunk10718 = require("./10718.js"),
  Chunk367790 = require("./367790.js"),
  Chunk998698 = require("./998698.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk826298 = require("./826298.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk226951 = require("./226951.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793872 = require("./793872.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let C = {
  results: {
    entries: []
  }
};

function N() {
  (0, Chunk952265.ZD)(async () => {
    let {
      default: e
    } = await require.e("87549").then(require.bind(require, 913962));
    return t => (0, r.jsx)(e, A({}, t))
  })
}

function R(e) {
  return "".concat(O.GI).concat(e.displayName)
}
let P = {
  sentinel: Chunk761652.GI,
  stores: [Chunk998698.Z, Chunk213459.ZP, Chunk496675.Z],
  matches: (e, t, n, r, i) => i.commands !== y.L8.DISABLED && null == f.Z.getActiveCommand(e.id) && (r || i.commands !== y.L8.OLD_BUILT_INS),
  queryResults(e, t, n, r, i) {
    if (0 === n.length && r.commands !== y.L8.OLD_BUILT_INS) return C;
    if (r.commands === y.L8.OLD_BUILT_INS) {
      let r = (0, l.Kh)([o.yU.CHAT], false, false),
        i = RegExp("^".concat(E.Z.escape(n)), "i"),
        a = (0, p.Dd)(r, i, {
          channel: e,
          guild: t
        }, y.AQ),
        s = l.Tm[v.bi.BUILT_IN];
      return 0 === a.length ? C : {
        results: {
          entries: a.map(e => ({
            command: e,
            section: s
          }))
        }
      }
    }
    let a = (0, h.hV)(e, n),
      {
        commands: s,
        sections: c
      } = u.JT({
        channel: e,
        type: "channel"
      }, {
        commandTypes: [o.yU.CHAT],
        text: a.text
      }, {
        limit: y.AQ,
        placeholderCount: y.YP,
        scoreMethod: d.p.COMMAND_OR_APPLICATION,
        allowFetch: i
      });
    if (null == s) return C;
    let f = s;
    if (a.hasSpaceTerminator) {
      let e = a.text.trim(),
        t = e + " ";
      f = f.filter(n => n.displayName === e || n.displayName.startsWith(t))
    }
    return 0 === f.length ? C : {
      results: {
        entries: f.slice(0, y.AQ).map(e => ({
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
      query: o,
      options: s,
      onHover: l,
      onClick: c
    } = e, u = (0, h.hV)(a, o), d = s.commands === y.L8.OLD_BUILT_INS;
    return (0, b.HI)({
      query: u.text,
      selectedIndex: n,
      autocompletes: t,
      onHover: l,
      onClick: c,
      titleWithQuery: I.t.HFRoZR,
      titleWithoutQuery: I.intl.string(I.t["0hKkS+"]),
      getQuery: e => "".concat(O.GI).concat(e),
      Component: d ? m.ZP.Command : m.ZP.NewCommand,
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
      headerClassName: d ? S.legacyInputCommandHeader : null,
      headerTrailingContent: d && (0, r.jsx)(i.Avr, {
        size: "xs",
        onClick: N,
        text: I.intl.string(I.t["8a0P0y"])
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
      location: o,
      tabOrEnter: l
    } = e, {
      command: c,
      section: u
    } = t[n];
    if (c.inputType === _.iw.PLACEHOLDER) return null;
    if (i.commands === y.L8.OLD_BUILT_INS) i.insertText(R(c));
    else {
      let e = o;
      null == e && (e = l ? _.Vh.QUERY : _.Vh.DISCOVERY), s.Po({
        channelId: a.id,
        command: c,
        section: null != u ? u : null,
        location: e,
        queryLength: null == r ? true : r.length
      })
    }
    return {
      type: y.z2.COMMAND
    }
  }
}