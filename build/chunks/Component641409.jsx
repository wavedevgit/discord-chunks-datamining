/** Chunk was on web.js **/
/** chunk id: 641409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk788911 = require("./788911.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk174212 = require("./174212.js"),
  Chunk998698 = require("./998698.js"),
  Chunk667204 = require("./667204.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk483360 = require("./483360.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk738802 = require("./738802.js"),
  Chunk239840 = require("./239840.js");
let b = {
    results: {
      choices: []
    }
  },
  y = {
    results: {
      choices: [],
      isLoading: true
    }
  },
  O = Array.from({
    length: 5
  }, () => ({
    name: "",
    displayName: "",
    value: ""
  })),
  v = {
    results: {
      choices: [],
      isError: true
    }
  },
  S = a().debounce(Chunk667204.Z, Chunk689079.Fu, {
    leading: true,
    trailing: true
  });

function I(e) {
  return e.displayName
}
let T = {
  stores: [Chunk998698.Z, Chunk174212.Z],
  showEmpty: true,
  matches(e, t, n, r, i) {
    let a = c.Z.getActiveOption(e.id);
    return i.commands !== _.L8.DISABLED && null != a && (a.type === s.jw.BOOLEAN || !!(null == a ? true : a.autocomplete) || (null == a ? true : a.choices) != null && a.choices.length > 0)
  },
  queryResults(e, t, n, r, i) {
    var a;
    let o = c.Z.getActiveOption(e.id);
    if (null == o) return b;
    if (o.autocomplete) {
      if (i && S({
          command: c.Z.getActiveCommand(e.id),
          optionValues: r.getCommandOptionValues(),
          context: {
            channel: e,
            guild: t,
            autocomplete: {
              name: o.name,
              query: n
            }
          }
        }), l.Z.getLastErrored(e.id)) return v;
      let a = l.Z.getAutocompleteChoices(e.id, o.name, n);
      return null == a ? y : {
        results: {
          choices: a
        }
      }
    }
    return {
      results: f.ZP.queryChoiceResults({
        query: n,
        choices: o.type === s.jw.BOOLEAN ? m.ak : null != (a = o.choices) ? a : []
      })
    }
  },
  renderResults(e) {
    let {
      results: {
        choices: t,
        isLoading: n,
        isError: i
      },
      selectedIndex: a,
      query: s,
      onHover: l,
      onClick: c
    } = e;
    return i ? (0, r.jsx)(o.Z, {
      message: h.intl.string(h.t.rTAbPn),
      noResultsImageURL: E,
      className: g.noAutocompleteResults
    }) : 0 !== t.length || n ? (0, p.HI)({
      query: s,
      selectedIndex: a,
      autocompletes: n ? O : t,
      onHover: l,
      onClick: c,
      titleWithQuery: h.t.pg0anB,
      titleWithoutQuery: h.intl.string(h.t["+1H47t"]),
      Component: n ? d.ZP.Loading : d.ZP.Generic,
      getProps: (e, t) => ({
        key: t.toString(),
        text: e.displayName
      }),
      getQuery: e => e,
      key: "choice"
    }) : (0, r.jsx)(o.Z, {
      message: h.intl.string(h.t["41014u"]),
      noResultsImageURL: E,
      className: g.noAutocompleteResults
    })
  },
  onSelect(e) {
    let {
      results: {
        choices: t
      },
      index: n,
      options: r
    } = e, i = t[n];
    return r.insertText(I(i)), {
      type: _.z2.CHOICE
    }
  }
}