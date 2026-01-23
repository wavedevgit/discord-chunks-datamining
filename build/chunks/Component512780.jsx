/** Chunk was on web.js **/
/** chunk id: 512780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./747238.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk696459 = require("./696459.js"),
  Chunk58149 = require("./58149.js"),
  Chunk861382 = require("./861382.js"),
  Chunk392054 = require("./392054.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk29599 = require("./29599.js"),
  Chunk374803 = require("./374803.js");
require("./827669.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk538830 = require("./538830.js");
let b = {
  results: {
    command: null,
    integrations: [],
    isLoading: false
  }
};

function O(e, t, n) {
  var r, i;
  let a;
  return n.commands === m.Ze.OLD_BUILT_INS ? (a = t.split(" ")[0].substring(1), t = t.substring((null != (r = a.length) ? r : 0) + 1)) : a = null == (i = d.A.getActiveCommand(e.id)) ? true : i.untranslatedName, {
    command: a,
    query: t.trim()
  }
}

function v(e) {
  return e.meta.url
}
let A = {
  stores: [Chunk861382.A, Chunk29599.A],
  matches(e, t, n, r, i) {
    var a;
    return i.commands !== m.Ze.DISABLED && (i.commands === m.Ze.OLD_BUILT_INS ? n.startsWith("/gif") || n.startsWith("/tenor") : (null == (a = d.A.getActiveCommand(e.id)) ? true : a.integrationType) === g.p_j.GIF && d.A.getOptionStates(e.id).query.hasValue)
  },
  queryResults(e, t, n, r, i) {
    let {
      command: a,
      query: o
    } = O(e, n, r);
    if (null == a) return b;
    let l = s().findKey(g.Z86, e => e.command === a);
    i && null != l && o.length > 0 && c.A.search(l, o);
    let u = h.A.getResults(l, o);
    return null == u ? b : {
      results: {
        command: a,
        integrations: u.results,
        isLoading: u.loading
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        integrations: t,
        isLoading: n
      },
      selectedIndex: a,
      channel: s,
      query: l,
      options: c,
      onHover: u,
      onClick: f
    } = e, {
      command: h,
      query: b
    } = O(s, l, c);
    if (null == h || 0 === b.length) return null;
    if (n) return (0, r.jsx)(o.y$y, {
      className: y.u1,
      type: o.y$y.Type.SPINNING_CIRCLE
    });
    if (null != t) {
      var v, A;
      let e = false,
        n = t.map((t, n) => {
          if (t.type === g.p_j.GIF) {
            var i, s, o;
            return e = true, (0, r.jsx)(p.Ay.GIFIntegration, {
              className: y.ho,
              onClick: f,
              onHover: u,
              selected: a === n,
              index: n,
              width: null != (i = t.meta.width) ? i : 0,
              height: null != (s = t.meta.height) ? s : 0,
              src: null != (o = t.meta.src) ? o : "",
              url: t.meta.url
            }, "".concat(t.meta.url).concat(t.meta.src))
          }
        }),
        o = c.commands === m.Ze.OLD_BUILT_INS ? h : null != (v = null == (A = d.A.getActiveCommand(s.id)) ? true : A.integrationTitle) ? v : h,
        l = b.length > 0 && null != o ? E.intl.format(E.t["3njXz/"], {
          query: b,
          command: o
        }) : null != o ? o : h;
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(p.Ay.Title, {
          title: l
        }), e ? (0, r.jsx)(_.A, {
          className: y.os,
          children: n
        }) : n]
      }, "gifs")
    }
  },
  onSelect(e) {
    let {
      results: {
        command: t,
        integrations: n
      },
      index: r,
      type: i,
      options: a,
      channel: s,
      guild: o
    } = e;
    if (null == t) return {
      type: null
    };
    let c = n[r];
    if (i === m.lg.INSERT ? a.replaceText(v(c)) : a.sendMessage(v(c)), u.Ay.trackWithMetadata(g.HAw.SEARCH_RESULT_SELECTED, {
        search_type: g.I4_.GIF,
        index_num: r,
        source_object: "/".concat(t)
      }), a.commands !== m.Ze.OLD_BUILT_INS) {
      let e = d.A.getActiveCommand(s.id);
      (null == e ? true : e.inputType) === f.y$.BUILT_IN_INTEGRATION && (l.h.dispatch({
        type: "APPLICATION_COMMAND_USED",
        context: {
          channel: s,
          guild: o
        },
        command: e,
        commandOrigin: f.iw.CHAT
      }), u.Ay.trackWithMetadata(g.HAw.APPLICATION_COMMAND_USED, {
        command_id: e.id,
        application_id: e.applicationId,
        command_type: e.type,
        source: d.A.getSource(s.id)
      }))
    }
    return {
      type: m.kc.GIF
    }
  }
}