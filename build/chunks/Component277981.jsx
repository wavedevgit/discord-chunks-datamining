/** Chunk was on web.js **/
/** chunk id: 277981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./35282.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk85235 = require("./85235.js"),
  Chunk367907 = require("./367907.js"),
  Chunk998698 = require("./998698.js"),
  Chunk895924 = require("./895924.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk718745 = require("./718745.js"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk600706 = require("./600706.js");
let O = {
  results: {
    command: null,
    integrations: [],
    isLoading: false
  }
};

function v(e, t, n) {
  var r, i;
  let o;
  return n.commands === m.L8.OLD_BUILT_INS ? (o = t.split(" ")[0].substring(g.GI.length), t = t.substring((null != (r = o.length) ? r : 0) + g.GI.length)) : o = null == (i = d.Z.getActiveCommand(e.id)) ? true : i.untranslatedName, {
    command: o,
    query: t.trim()
  }
}

function I(e) {
  return e.meta.url
}
let T = {
  stores: [Chunk998698.Z, Chunk718745.Z],
  matches(e, t, n, r, i) {
    var o;
    return i.commands !== m.L8.DISABLED && (i.commands === m.L8.OLD_BUILT_INS ? n.startsWith(g.GI + "gif") || n.startsWith(g.GI + "tenor") : (null == (o = d.Z.getActiveCommand(e.id)) ? true : o.integrationType) === E.q9n.GIF && d.Z.getOptionStates(e.id).query.hasValue)
  },
  queryResults(e, t, n, r, i) {
    let {
      command: o,
      query: s
    } = v(e, n, r);
    if (null == o) return O;
    let l = a().findKey(E.nkL, e => e.command === o);
    i && null != l && s.length > 0 && c.Z.search(l, s);
    let u = h.Z.getResults(l, s);
    return null == u ? O : {
      results: {
        command: o,
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
      selectedIndex: o,
      channel: a,
      query: l,
      options: c,
      onHover: u,
      onClick: f
    } = e, {
      command: h,
      query: g
    } = v(a, l, c);
    if (null == h || 0 === g.length) return null;
    if (n) return (0, r.jsx)(s.$jN, {
      className: y.spinner,
      type: s.$jN.Type.SPINNING_CIRCLE
    });
    if (null != t) {
      var O, I;
      let e = false,
        n = t.map((t, n) => {
          if (t.type === E.q9n.GIF) {
            var i, a, s;
            return e = true, (0, r.jsx)(_.ZP.GIFIntegration, {
              className: y.horizontalAutocomplete,
              onClick: f,
              onHover: u,
              selected: o === n,
              index: n,
              width: null != (i = t.meta.width) ? i : 0,
              height: null != (a = t.meta.height) ? a : 0,
              src: null != (s = t.meta.src) ? s : "",
              url: t.meta.url
            }, "".concat(t.meta.url).concat(t.meta.src))
          }
        }),
        s = c.commands === m.L8.OLD_BUILT_INS ? h : null != (I = null == (O = d.Z.getActiveCommand(a.id)) ? true : O.integrationTitle) ? I : h,
        l = g.length > 0 && null != s ? b.intl.format(b.t["3njXz8"], {
          query: g,
          command: s
        }) : null != s ? s : h;
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(_.ZP.Title, {
          title: l
        }), e ? (0, r.jsx)(p.Z, {
          className: y.horizontalAutocompletes,
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
      options: o,
      channel: a,
      guild: s
    } = e;
    if (null == t) return {
      type: null
    };
    let c = n[r];
    if (i === m.QB.INSERT ? o.replaceText(I(c)) : o.sendMessage(I(c)), u.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, {
        search_type: E.aib.GIF,
        index_num: r,
        source_object: "/".concat(t)
      }), o.commands !== m.L8.OLD_BUILT_INS) {
      let e = d.Z.getActiveCommand(a.id);
      (null == e ? true : e.inputType) === f.iw.BUILT_IN_INTEGRATION && (l.Z.dispatch({
        type: "APPLICATION_COMMAND_USED",
        context: {
          channel: a,
          guild: s
        },
        command: e,
        commandOrigin: f.bB.CHAT
      }), u.ZP.trackWithMetadata(E.rMx.APPLICATION_COMMAND_USED, {
        command_id: e.id,
        application_id: e.applicationId,
        command_type: e.type,
        source: d.Z.getSource(a.id)
      }))
    }
    return {
      type: m.z2.GIF
    }
  }
}