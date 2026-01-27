/** Chunk was on web.js **/
/** chunk id: 878360, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk537652 = require("./537652.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk166862 = require("./166862.js"),
  Chunk861382 = require("./861382.js"),
  Chunk545152 = require("./545152.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk248465 = require("./248465.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js"),
  Chunk73510 = require("./73510.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk570330 = require("./570330.js"),
  Chunk911385 = require("./911385.js");
let y = {
    results: {
      choices: []
    }
  },
  b = {
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
  A = a().debounce(Chunk545152.A, Chunk73510.$r, {
    leading: true,
    trailing: true
  });

function I(e) {
  return e.displayName
}
let S = {
  stores: [Chunk861382.A, Chunk166862.A],
  showEmpty: true,
  matches(e, t, n, r, i) {
    let a = c.A.getActiveOption(e.id);
    return i.commands !== _.Ze.DISABLED && null != a && (a.type === s.n4.BOOLEAN || !!(null == a ? true : a.autocomplete) || (null == a ? true : a.choices) != null && a.choices.length > 0)
  },
  queryResults(e, t, n, r, i) {
    var a;
    let o = c.A.getActiveOption(e.id);
    if (null == o) return y;
    if (o.autocomplete) {
      if (i && A({
          command: c.A.getActiveCommand(e.id),
          optionValues: r.getCommandOptionValues(),
          context: {
            channel: e,
            guild: t,
            autocomplete: {
              name: o.name,
              query: n
            }
          }
        }), l.A.getLastErrored(e.id)) return v;
      let a = l.A.getAutocompleteChoices(e.id, o.name, n);
      return null == a ? b : {
        results: {
          choices: a
        }
      }
    }
    return {
      results: f.Ay.queryChoiceResults({
        query: n,
        choices: o.type === s.n4.BOOLEAN ? h.Ss : null != (a = o.choices) ? a : []
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
    return i ? (0, r.jsx)(o.A, {
      message: m.intl.string(m.t.rTAbPn),
      noResultsImageURL: E,
      className: g.k
    }) : 0 !== t.length || n ? (0, p.GM)({
      query: s,
      selectedIndex: a,
      autocompletes: n ? O : t,
      onHover: l,
      onClick: c,
      titleWithQuery: m.t.pg0anB,
      titleWithoutQuery: m.intl.string(m.t["+1H47t"]),
      Component: n ? d.Ay.Loading : d.Ay.Generic,
      getProps: (e, t) => ({
        key: t.toString(),
        text: e.displayName
      }),
      getQuery: e => e,
      key: "choice"
    }) : (0, r.jsx)(o.A, {
      message: m.intl.string(m.t["41014u"]),
      noResultsImageURL: E,
      className: g.k
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
      type: _.kc.CHOICE
    }
  }
}