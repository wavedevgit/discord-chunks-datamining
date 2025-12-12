/** Chunk was on web.js **/
/** chunk id: 536742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk998698 = require("./998698.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk388032 = require("./388032.jsx");
let c = {
  results: {
    commandOptions: []
  }
};

function u(e) {
  return "".concat(e.displayName, ":")
}
let d = {
  stores: [Chunk998698.Z],
  focusMode: Chunk590921.QZ.AUTO_WHEN_FILTERED,
  matches: (e, t, n, r, o) => !(r || null == i.Z.getActiveCommand(e.id) || null != i.Z.getActiveOption(e.id)),
  queryResults(e, t, n, r, o) {
    let a = i.Z.getActiveCommand(e.id);
    if ((null == a ? true : a.options) == null) return c;
    let s = i.Z.getOptionStates(e.id),
      l = a.options.filter(e => {
        var t;
        return e.displayName.startsWith(n) && !(null == (t = s[e.name]) ? true : t.hasValue)
      });
    return 0 === l.length ? c : {
      results: {
        commandOptions: l
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        commandOptions: t
      },
      selectedIndex: n,
      query: i,
      onHover: s,
      onClick: c
    } = e, u = [], d = [];
    t.forEach(e => {
      (e.required ? u : d).push(e)
    });
    let f = u.length > 0 ? (0, a.HI)({
        query: i,
        selectedIndex: n,
        autocompletes: u,
        onHover: s,
        onClick: c,
        titleWithQuery: l.t["iO/jnA"],
        titleWithoutQuery: l.intl.string(l.t["7II2G3"]),
        Component: o.ZP.Generic,
        getProps: (e, t) => ({
          key: t.toString(),
          text: e.displayName,
          description: e.displayDescription
        }),
        getQuery: e => e,
        key: "required-options"
      }) : null,
      p = d.length > 0 ? (0, a.HI)({
        query: i,
        selectedIndex: n,
        autocompletes: d,
        onHover: s,
        onClick: c,
        titleWithQuery: l.t.pg0anB,
        titleWithoutQuery: u.length > 0 ? l.intl.string(l.t.TpDXm4) : l.intl.string(l.t["+1H47t"]),
        Component: o.ZP.Generic,
        getProps: (e, t) => ({
          key: t.toString(),
          text: e.displayName,
          description: e.displayDescription
        }),
        getQuery: e => e,
        key: "optional-options",
        indexOffset: u.length
      }) : null;
    return (0, r.jsxs)(r.Fragment, {
      children: [f, p]
    })
  },
  onSelect(e) {
    let {
      results: {
        commandOptions: t
      },
      index: n,
      options: r
    } = e, i = t[n];
    return r.insertText(u(i)), {
      type: s.z2.COMMAND_OPTION
    }
  }
}