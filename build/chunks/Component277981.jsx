/** Chunk was on web.js **/
/** chunk id: 277981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk227430 = require("./227430.js");
let O = {
  results: {
    command: null,
    integrations: [],
    isLoading: false
  }
};

function v(e, t, n) {
  var r, i;
  let a;
  return n.commands === m.L8.OLD_BUILT_INS ? (a = t.split(" ")[0].substring(g.GI.length), t = t.substring((null != (r = a.length) ? r : 0) + g.GI.length)) : a = null == (i = d.Z.getActiveCommand(e.id)) ? true : i.untranslatedName, {
    command: a,
    query: t.trim()
  }
}

function I(e) {
  return e.meta.url
}
let S = {
  stores: [Chunk998698.Z, Chunk718745.Z],
  matches(e, t, n, r, i) {
    var a;
    return i.commands !== m.L8.DISABLED && (i.commands === m.L8.OLD_BUILT_INS ? n.startsWith(g.GI + "gif") || n.startsWith(g.GI + "tenor") : (null == (a = d.Z.getActiveCommand(e.id)) ? true : a.integrationType) === E.q9n.GIF && d.Z.getOptionStates(e.id).query.hasValue)
  },
  queryResults(e, t, n, r, i) {
    let {
      command: a,
      query: s
    } = v(e, n, r);
    if (null == a) return O;
    let l = o().findKey(E.nkL, e => e.command === a);
    i && null != l && s.length > 0 && c.Z.search(l, s);
    let u = h.Z.getResults(l, s);
    return null == u ? O : {
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
      channel: o,
      query: l,
      options: c,
      onHover: u,
      onClick: f
    } = e, {
      command: h,
      query: g
    } = v(o, l, c);
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
            var i, o, s;
            return e = true, (0, r.jsx)(_.ZP.GIFIntegration, {
              className: y.horizontalAutocomplete,
              onClick: f,
              onHover: u,
              selected: a === n,
              index: n,
              width: null != (i = t.meta.width) ? i : 0,
              height: null != (o = t.meta.height) ? o : 0,
              src: null != (s = t.meta.src) ? s : "",
              url: t.meta.url
            }, "".concat(t.meta.url).concat(t.meta.src))
          }
        }),
        s = c.commands === m.L8.OLD_BUILT_INS ? h : null != (I = null == (O = d.Z.getActiveCommand(o.id)) ? true : O.integrationTitle) ? I : h,
        l = g.length > 0 && null != s ? b.intl.format(b.t["3njXz/"], {
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
      options: a,
      channel: o,
      guild: s
    } = e;
    if (null == t) return {
      type: null
    };
    let c = n[r];
    if (i === m.QB.INSERT ? a.replaceText(I(c)) : a.sendMessage(I(c)), u.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, {
        search_type: E.aib.GIF,
        index_num: r,
        source_object: "/".concat(t)
      }), a.commands !== m.L8.OLD_BUILT_INS) {
      let e = d.Z.getActiveCommand(o.id);
      (null == e ? true : e.inputType) === f.iw.BUILT_IN_INTEGRATION && (l.Z.dispatch({
        type: "APPLICATION_COMMAND_USED",
        context: {
          channel: o,
          guild: s
        },
        command: e,
        commandOrigin: f.bB.CHAT
      }), u.ZP.trackWithMetadata(E.rMx.APPLICATION_COMMAND_USED, {
        command_id: e.id,
        application_id: e.applicationId,
        command_type: e.type,
        source: d.Z.getSource(o.id)
      }))
    }
    return {
      type: m.z2.GIF
    }
  }
}