/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => T
});
var r = n(200651);
n(192379);
var i = n(392711),
  o = n.n(i),
  a = n(788911),
  s = n(911969),
  l = n(174212),
  c = n(998698),
  u = n(667204),
  d = n(588468),
  f = n(483360),
  p = n(877565),
  _ = n(590921),
  h = n(689079),
  m = n(388032),
  g = n(726969),
  E = n(239840);
let v = {
    results: {
      choices: []
    }
  },
  b = {
    results: {
      choices: [],
      isLoading: !0
    }
  },
  y = Array.from({
    length: 5
  }, () => ({
    name: "",
    displayName: "",
    value: ""
  })),
  O = {
    results: {
      choices: [],
      isError: !0
    }
  },
  S = o().debounce(u.Z, h.Fu, {
    leading: !0,
    trailing: !0
  });

function I(e) {
  return e.displayName
}
let T = {
  stores: [c.Z, l.Z],
  showEmpty: !0,
  matches(e, t, n, r, i) {
    let o = c.Z.getActiveOption(e.id);
    return i.commands !== _.L8.DISABLED && null != o && (o.type === s.jw.BOOLEAN || !!(null == o ? void 0 : o.autocomplete) || (null == o ? void 0 : o.choices) != null && o.choices.length > 0)
  },
  queryResults(e, t, n, r, i) {
    var o;
    let a = c.Z.getActiveOption(e.id);
    if (null == a) return v;
    if (a.autocomplete) {
      if (i && S({
          command: c.Z.getActiveCommand(e.id),
          optionValues: r.getCommandOptionValues(),
          context: {
            channel: e,
            guild: t,
            autocomplete: {
              name: a.name,
              query: n
            }
          }
        }), l.Z.getLastErrored(e.id)) return O;
      let o = l.Z.getAutocompleteChoices(e.id, a.name, n);
      return null == o ? b : {
        results: {
          choices: o
        }
      }
    }
    return {
      results: f.ZP.queryChoiceResults({
        query: n,
        choices: a.type === s.jw.BOOLEAN ? h.ak : null !== (o = a.choices) && void 0 !== o ? o : []
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
      selectedIndex: o,
      query: s,
      onHover: l,
      onClick: c
    } = e;
    return i ? (0, r.jsx)(a.Z, {
      message: m.NW.string(m.t.rTAbPj),
      noResultsImageURL: E,
      className: g.noAutocompleteResults
    }) : 0 !== t.length || n ? (0, p.HI)({
      query: s,
      selectedIndex: o,
      autocompletes: n ? y : t,
      onHover: l,
      onClick: c,
      titleWithQuery: m.t.pg0anJ,
      titleWithoutQuery: m.NW.string(m.t["+1H47u"]),
      Component: n ? d.ZP.Loading : d.ZP.Generic,
      getProps: (e, t) => ({
        key: t.toString(),
        text: e.displayName
      }),
      getQuery: e => e,
      key: "choice"
    }) : (0, r.jsx)(a.Z, {
      message: m.NW.string(m.t["41014u"]),
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